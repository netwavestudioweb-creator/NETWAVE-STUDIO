#!/usr/bin/env python3
"""
Chaîne de prospection NetWave Studio : un seul fichier Excel partagé par trois agents.

  prospection  → ajoute et vérifie des prospects          (add, update, import-irlande)
  lancer       → prépare un lot, puis l'envoie sur accord   (prepare, send)
  réponses     → relève la boîte mail et liste le travail   (fetch-replies, classify, report)

Fichier de travail : prospection/prospects.xlsx (hors git : le dépôt est public).
Secrets : lus dans .env.local à la racine (jamais dans ce fichier).
Usage : python scripts/prospection/pipeline.py <commande> [options]   (voir --help)
"""

import argparse
import datetime as dt
import email
import email.header
import email.utils
import imaplib
import json
import os
import random
import re
import string
import sys
import time
import urllib.error
import urllib.request
from pathlib import Path

try:
    import openpyxl
    from openpyxl.styles import Alignment, Font, PatternFill
except ImportError:
    sys.exit("openpyxl manque : lancez « python -m pip install openpyxl ».")

ROOT = Path(__file__).resolve().parents[2]
WORKDIR = ROOT / "prospection"
BOOK = WORKDIR / "prospects.xlsx"
LOTS_DIR = WORKDIR / "lots"

# Types d'adresse admis (décision du fondateur, 27/10/2026, « option A ») :
#   générique : info@, hello@, bookings@… ;
#   enseigne  : adresse au nom du commerce (ex. sneembridgebistro@gmail.com), publiée par le
#               commerce lui-même, page notée dans « verification ». Jamais une adresse au prénom.
# --- Colonnes de l'onglet Prospects (l'ordre est celui du fichier) ---------------------------
COLUMNS = [
    ("id", 8), ("entreprise", 30), ("pays", 6), ("ville", 16), ("secteur", 18),
    ("forme_juridique", 12), ("numero_registre", 12), ("email", 28), ("email_type", 11),
    ("telephone", 16), ("presence_actuelle", 40), ("score", 7), ("source", 40),
    ("verifie_le", 11), ("verification", 40), ("langue", 6), ("objet", 36), ("message", 60),
    ("canal", 12), ("statut", 14), ("lot", 10), ("envoye_le", 11), ("relance_le", 11),
    ("message_id", 18), ("repondu_le", 11), ("categorie", 13), ("travail_a_faire", 40), ("notes", 30),
]
COL = {name: i + 1 for i, (name, _) in enumerate(COLUMNS)}

STATUTS = [
    "nouveau",        # trouvé, pas encore vérifié
    "vérifié",        # existence et contact vérifiés : peut entrer dans un lot e-mail
    "manuel",         # pas d'e-mail utilisable : à contacter par le fondateur (téléphone, Facebook…)
    "prêt",           # dans un lot préparé, en attente de l'accord du fondateur
    "envoyé", "relancé", "répondu", "intéressé", "pas_intéressé",
    "désinscrit", "rebond", "exclu",
]
CATEGORIES = ["intéressé", "question", "pas_intéressé", "désinscription", "autre"]

# --- Règles d'envoi par pays (voir docs/recherche-presence/3-marches.md et 4-prospection.md) ---
# Sociétés uniquement au Royaume-Uni et en Irlande : les indépendants (sole traders) comptent
# comme des particuliers et exigent un consentement préalable.
COMPANY_FORMS = {"ltd", "limited", "dac", "plc", "llp", "clg", "uc", "ulc", "teoranta", "teo"}
EMAIL_RULES = {
    "IE": {"forms": COMPANY_FORMS, "generic_only": True},
    "GB": {"forms": COMPANY_FORMS, "generic_only": True},
    "FR": {"forms": None, "generic_only": True},
    "BE": {"forms": None, "generic_only": True},
}
BLOCKED_REASON = {
    "DE": "Allemagne : e-mail de prospection interdit sans consentement, même entre entreprises.",
    "AT": "Autriche : consentement exigé.",
    "CA": "Canada : loi CASL, consentement exigé.",
    "AU": "Australie : Spam Act, e-mail à froid risqué ; passer par le téléphone ou la publicité.",
    "CH": "Suisse : règles non vérifiées par un juriste.",
    "US": "États-Unis : marché prévu en phase 2.",
}
GENERIC_PREFIXES = ("info", "hello", "contact", "bookings", "booking", "reservations", "enquiries",
                    "enquiry", "office", "admin", "sales", "team", "shop", "orders", "studio", "salon")

DAILY_CAP = 30            # e-mails par jour, toutes boîtes confondues (réputation du domaine)
LOT_MAX = 25
FOLLOW_UP_WORKDAYS = 5    # relance unique, 5 jours ouvrés après l'envoi
PAUSE_SECONDS = 4         # entre deux envois


# --- Outils ------------------------------------------------------------------------------------
def today() -> dt.date:
    return dt.date.today()


def iso(d: dt.date) -> str:
    return d.isoformat()


def add_workdays(start: dt.date, n: int) -> dt.date:
    d = start
    while n > 0:
        d += dt.timedelta(days=1)
        if d.weekday() < 5:
            n -= 1
    return d


def load_env() -> dict:
    env = dict(os.environ)
    path = ROOT / ".env.local"
    if path.exists():
        for line in path.read_text(encoding="utf-8").splitlines():
            m = re.match(r"\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$", line)
            if m and not line.lstrip().startswith("#"):
                env.setdefault(m.group(1), m.group(2).strip().strip('"').strip("'"))
    return env


def need(env: dict, *keys: str) -> None:
    missing = [k for k in keys if not env.get(k)]
    if missing:
        sys.exit(
            "Réglage manquant dans .env.local : " + ", ".join(missing)
            + "\nVoir docs/agents-prospection.md, section « Mise en route »."
        )


def out(obj) -> None:
    """Sortie lisible par les agents (JSON) et par un humain."""
    print(json.dumps(obj, ensure_ascii=False, indent=2, default=str))


def header_style(cell) -> None:
    cell.font = Font(bold=True, color="FFFFFF")
    cell.fill = PatternFill("solid", fgColor="08745D")
    cell.alignment = Alignment(vertical="center", wrap_text=True)


# --- Classeur ----------------------------------------------------------------------------------
def create_book() -> None:
    WORKDIR.mkdir(exist_ok=True)
    LOTS_DIR.mkdir(exist_ok=True)
    wb = openpyxl.Workbook()
    ws = wb.active
    ws.title = "Prospects"
    for i, (name, width) in enumerate(COLUMNS, start=1):
        header_style(ws.cell(row=1, column=i, value=name))
        ws.column_dimensions[openpyxl.utils.get_column_letter(i)].width = width
    ws.freeze_panes = "C2"
    ws.auto_filter.ref = f"A1:{openpyxl.utils.get_column_letter(len(COLUMNS))}1"

    for title, cols in [
        ("Lots", ["lot", "cree_le", "type", "nb", "code", "statut", "envoye_le", "fichier"]),
        ("Réponses", ["reponse_id", "recu_le", "prospect_id", "de", "objet", "extrait", "categorie", "travail_a_faire", "traite", "message_id"]),
        ("Exclusions", ["email_ou_domaine", "ajoute_le", "raison"]),
        ("Journal", ["date", "action", "detail"]),
    ]:
        s = wb.create_sheet(title)
        for i, c in enumerate(cols, start=1):
            header_style(s.cell(row=1, column=i, value=c))
            s.column_dimensions[openpyxl.utils.get_column_letter(i)].width = 60 if c in ("extrait", "detail") else 18
        s.freeze_panes = "A2"

    ws_help = wb.create_sheet("Lisez-moi", 0)
    lines = [
        "Fichier de prospection NetWave Studio, géré par les agents « prospection », « lancer » et « réponses ».",
        "Vous pouvez le lire et ajouter des notes. Fermez-le avant de lancer un agent : Excel bloque l'écriture.",
        "Statuts : " + ", ".join(STATUTS) + ".",
        "« manuel » = pas d'e-mail utilisable : à contacter vous-même (téléphone, message Facebook ou Instagram).",
        "Aucun e-mail ne part sans votre accord : chaque lot affiche un code, que vous confirmez.",
        "Mode d'emploi complet : docs/agents-prospection.md",
    ]
    for i, line in enumerate(lines, start=1):
        ws_help.cell(row=i, column=1, value=line)
    ws_help.column_dimensions["A"].width = 120
    save(wb)


def open_book():
    if not BOOK.exists():
        create_book()
    return openpyxl.load_workbook(BOOK)


def save(wb) -> None:
    try:
        wb.save(BOOK)
    except PermissionError:
        sys.exit(f"Impossible d'écrire {BOOK.name} : le fichier est ouvert dans Excel. Fermez-le et relancez.")


def rows(ws):
    """Itère sur les prospects : (numéro de ligne, dict)."""
    for r in range(2, ws.max_row + 1):
        if ws.cell(row=r, column=1).value is None:
            continue
        yield r, {name: ws.cell(row=r, column=COL[name]).value for name, _ in COLUMNS}


def set_cells(ws, r: int, **values) -> None:
    for k, v in values.items():
        if k not in COL:
            raise SystemExit(f"Colonne inconnue : {k}")
        ws.cell(row=r, column=COL[k], value=v)


def log(wb, action: str, detail: str) -> None:
    wb["Journal"].append([dt.datetime.now().isoformat(timespec="seconds"), action, detail])


def next_id(ws) -> str:
    n = 0
    for _, p in rows(ws):
        m = re.match(r"P(\d+)", str(p["id"]))
        if m:
            n = max(n, int(m.group(1)))
    return f"P{n + 1:04d}"


def exclusions(wb) -> set:
    ex = set()
    for row in wb["Exclusions"].iter_rows(min_row=2, values_only=True):
        if row[0]:
            ex.add(str(row[0]).strip().lower())
    return ex


def is_excluded(addr: str, ex: set) -> bool:
    addr = (addr or "").strip().lower()
    return bool(addr) and (addr in ex or addr.split("@")[-1] in ex)


def email_kind(addr: str) -> str:
    local = (addr or "").split("@")[0].lower()
    return "générique" if local.startswith(GENERIC_PREFIXES) else "personnel"


def eligibility(p: dict, ex: set) -> str | None:
    """Renvoie None si le prospect peut recevoir un e-mail, sinon la raison du refus."""
    country = (p["pays"] or "").upper()
    if country in BLOCKED_REASON:
        return BLOCKED_REASON[country]
    rule = EMAIL_RULES.get(country)
    if not rule:
        return f"Pays {country or '?'} sans règle d'envoi validée."
    if not p["email"] or "@" not in str(p["email"]):
        return "Pas d'adresse e-mail."
    if is_excluded(p["email"], ex):
        return "Adresse ou domaine dans la liste d'exclusion."
    kind = p["email_type"] or email_kind(p["email"])
    if rule["generic_only"] and kind not in ("générique", "enseigne"):
        return "Adresse nominative : seule une adresse générique ou au nom de l'enseigne est admise."
    if kind == "enseigne" and not p["verification"]:
        return "Adresse « enseigne » sans preuve : noter dans verification la page où le commerce la publie."
    form = re.sub(r"[^a-z]", "", str(p["forme_juridique"] or "").lower())
    if rule["forms"] is not None and form not in rule["forms"]:
        return "Forme juridique non confirmée comme société (Ltd, DAC, LLP…) : risque d'indépendant."
    if not p["verifie_le"]:
        return "Prospect pas encore vérifié (colonne verifie_le vide)."
    if not p["objet"] or not p["message"]:
        return "Objet ou message manquant."
    if not p["source"]:
        return "Aucune source : impossible de prouver que le prospect existe."
    return None


# --- Commandes : prospection ---------------------------------------------------------------------
def cmd_init(_args) -> None:
    if BOOK.exists():
        out({"ok": True, "fichier": str(BOOK), "info": "déjà présent"})
        return
    create_book()
    out({"ok": True, "fichier": str(BOOK)})


def cmd_add(args) -> None:
    """Ajoute des prospects depuis un fichier JSON (liste d'objets aux clés de COLUMNS)."""
    data = json.loads(Path(args.json).read_text(encoding="utf-8"))
    wb = open_book()
    ws = wb["Prospects"]
    ex = exclusions(wb)
    seen = set()
    for _, p in rows(ws):
        seen.add(("reg", str(p["numero_registre"] or "").strip().lower()))
        seen.add(("nom", (str(p["entreprise"] or "") + "|" + str(p["ville"] or "")).strip().lower()))
    added, skipped = [], []
    for item in data:
        if not item.get("entreprise") or not item.get("source"):
            skipped.append({"entreprise": item.get("entreprise"), "raison": "entreprise ou source manquante"})
            continue
        keys = {("reg", str(item.get("numero_registre") or "").strip().lower()),
                ("nom", (item["entreprise"] + "|" + str(item.get("ville") or "")).strip().lower())}
        keys.discard(("reg", ""))
        if keys & seen:
            skipped.append({"entreprise": item["entreprise"], "raison": "doublon"})
            continue
        if is_excluded(item.get("email", ""), ex):
            skipped.append({"entreprise": item["entreprise"], "raison": "exclu"})
            continue
        pid = next_id(ws)
        r = ws.max_row + 1
        set_cells(ws, r, id=pid)
        for k, v in item.items():
            if k in COL and k != "id":
                set_cells(ws, r, **{k: v})
        if item.get("email") and not item.get("email_type"):
            set_cells(ws, r, email_type=email_kind(item["email"]))
        if not item.get("statut"):
            set_cells(ws, r, statut="nouveau")
        seen |= keys
        added.append(pid)
    log(wb, "add", f"{len(added)} ajoutés, {len(skipped)} ignorés")
    save(wb)
    out({"ajoutes": added, "ignores": skipped})


def cmd_update(args) -> None:
    """Modifie des champs d'un prospect : update P0001 email=info@x.ie verifie_le=2026-10-27"""
    wb = open_book()
    ws = wb["Prospects"]
    for r, p in rows(ws):
        if p["id"] == args.id:
            values = {}
            for pair in args.fields:
                k, _, v = pair.partition("=")
                if k == "statut" and v not in STATUTS:
                    sys.exit(f"Statut inconnu : {v}. Possibles : {', '.join(STATUTS)}")
                if k in ("lot", "envoye_le", "relance_le", "message_id"):
                    sys.exit(f"« {k} » est géré par l'agent « lancer », pas modifiable à la main.")
                values[k] = v
            if "email" in values and "email_type" not in values:
                values["email_type"] = email_kind(values["email"])
            set_cells(ws, r, **values)
            log(wb, "update", f"{args.id} : {', '.join(values)}")
            save(wb)
            out({"ok": True, "id": args.id, "modifie": values})
            return
    sys.exit(f"Prospect {args.id} introuvable.")


def cmd_list(args) -> None:
    wb = open_book()
    found = [p for _, p in rows(wb["Prospects"]) if not args.statut or p["statut"] == args.statut]
    keep = ["id", "entreprise", "pays", "ville", "email", "forme_juridique", "statut", "score", "verifie_le"]
    out([{k: p[k] for k in keep} for p in found])


def cmd_import_irlande(args) -> None:
    """Reprend prospects-irlande.xlsx (onglet Top 50) en statut « nouveau » : tout reste à vérifier."""
    src = openpyxl.load_workbook(ROOT / args.fichier, data_only=True)["Top 50"]
    header = [c.value for c in src[4]]
    idx = {h: i for i, h in enumerate(header)}
    items = []
    for row in src.iter_rows(min_row=5, values_only=True):
        if not row[idx["Commerce (enseigne)"]]:
            continue
        contact = str(row[idx["Contact public (à vérifier)"]] or "")
        mail = re.search(r"[\w.+-]+@[\w-]+\.[\w.-]+", contact)
        phone = re.search(r"\+?\d[\d ]{7,}", contact)
        name = str(row[idx["Commerce (enseigne)"]])
        ville = re.search(r"\(([^)]+)\)", name)
        pts = [row[idx[k]] for k in ("Pts avis", "Pts saturation", "Pts métier", "Pts récent")]
        items.append({
            "entreprise": name, "pays": "IE", "ville": ville.group(1) if ville else row[idx["Comté"]],
            "secteur": row[idx["Métier"]], "forme_juridique": "Ltd" if "LIMITED" in str(row[idx["Société au registre"]]).upper() else "",
            "numero_registre": str(row[idx["N° CRO"]] or ""), "email": mail.group(0) if mail else "",
            "telephone": phone.group(0).strip() if phone else "",
            "presence_actuelle": row[idx["Présence en ligne constatée"]],
            "score": sum(int(x) for x in pts if isinstance(x, (int, float))),
            "source": row[idx["Source présence"]], "langue": "en",
            "canal": "e-mail" if mail else "manuel",
            "notes": "Importé de prospects-irlande.xlsx. Accroche d'origine : " + str(row[idx["Accroche (EN)"]] or ""),
        })
    tmp = WORKDIR / "_import.json"
    WORKDIR.mkdir(exist_ok=True)
    tmp.write_text(json.dumps(items, ensure_ascii=False), encoding="utf-8")
    cmd_add(argparse.Namespace(json=str(tmp)))
    tmp.unlink()


# --- Commandes : lancer -------------------------------------------------------------------------
def footer(env: dict, lang: str) -> str:
    who = env.get("PROSPECTION_SENDER_NAME", "NetWave Studio")
    addr = env["PROSPECTION_POSTAL_ADDRESS"]
    if lang == "fr":
        return (f"\n\n--\n{who}, NetWave Studio · {addr}\nhttps://www.netwave-studio.company\n"
                "Nous ne sommes pas Google. Pour ne plus recevoir de message, répondez simplement « STOP ».")
    return (f"\n\n--\n{who}, NetWave Studio · {addr}\nhttps://www.netwave-studio.company/en\n"
            "We are not Google. To stop receiving emails from us, just reply \"STOP\".")


def sent_today(ws) -> int:
    t = iso(today())
    return sum(1 for _, p in rows(ws) if str(p["envoye_le"]) == t or str(p["relance_le"]) == t)


def follow_up_text(p: dict) -> tuple[str, str]:
    if (p["langue"] or "en") == "fr":
        return ("Re: " + p["objet"],
                "Bonjour,\n\nJe reviens vers vous une seule fois au sujet de mon message précédent. "
                "Le diagnostic reste gratuit et sans engagement. Si ce n'est pas le bon moment, je ne vous écrirai plus.")
    return ("Re: " + p["objet"],
            "Hi,\n\nA single follow-up on my previous email. The visibility check is still free, no strings attached. "
            "If now isn't the right time, I won't write again.")


def cmd_prepare(args) -> None:
    env = load_env()
    need(env, "PROSPECTION_POSTAL_ADDRESS")
    wb = open_book()
    ws = wb["Prospects"]
    ex = exclusions(wb)
    room = DAILY_CAP - sent_today(ws)
    size = min(args.taille, LOT_MAX, max(room, 0))
    if size <= 0:
        sys.exit(f"Plafond de {DAILY_CAP} e-mails atteint aujourd'hui. Reprenez demain.")

    chosen, refused = [], []
    if args.relance:
        for r, p in rows(ws):
            if p["statut"] == "envoyé" and p["envoye_le"] and not p["relance_le"] \
                    and today() >= add_workdays(dt.date.fromisoformat(str(p["envoye_le"])), FOLLOW_UP_WORKDAYS) \
                    and not is_excluded(p["email"], ex):
                chosen.append((r, p))
    else:
        for r, p in sorted(rows(ws), key=lambda x: -(int(x[1]["score"] or 0))):
            if p["statut"] != "vérifié":
                continue
            reason = eligibility(p, ex)
            if reason:
                refused.append({"id": p["id"], "entreprise": p["entreprise"], "raison": reason})
            else:
                chosen.append((r, p))
    chosen = chosen[:size]
    if not chosen:
        out({"lot": None, "info": "Aucun prospect éligible.", "refuses": refused})
        return

    lot = "L" + dt.datetime.now().strftime("%Y%m%d-%H%M")
    code = "".join(random.choice(string.ascii_uppercase + string.digits) for _ in range(6))
    preview = LOTS_DIR / f"{lot}.md"
    LOTS_DIR.mkdir(parents=True, exist_ok=True)
    parts = [f"# Lot {lot} ({'relances' if args.relance else 'premiers contacts'}) : {len(chosen)} e-mails",
             f"Code de validation : **{code}**", ""]
    for r, p in chosen:
        lang = p["langue"] or "en"
        subject, body = follow_up_text(p) if args.relance else (p["objet"], p["message"])
        parts += [f"## {p['id']} · {p['entreprise']} ({p['ville']}, {p['pays']})",
                  f"À : {p['email']} · forme : {p['forme_juridique']} · source : {p['source']}",
                  f"Objet : {subject}", "", body + footer(env, lang), "", "---", ""]
        set_cells(ws, r, statut="prêt" if not args.relance else p["statut"], lot=lot)
    preview.write_text("\n".join(parts), encoding="utf-8")
    wb["Lots"].append([lot, iso(today()), "relance" if args.relance else "premier", len(chosen), code,
                       "en attente d'accord", None, str(preview.relative_to(ROOT)) if preview.is_relative_to(ROOT) else str(preview)])
    log(wb, "prepare", f"{lot} : {len(chosen)} e-mails")
    save(wb)
    out({"lot": lot, "nb": len(chosen), "code": code, "apercu": str(preview),
         "destinataires": [{"id": p["id"], "entreprise": p["entreprise"], "email": p["email"]} for _, p in chosen],
         "refuses": refused})


def resend_send(env: dict, to: str, subject: str, text: str) -> str:
    body = json.dumps({
        "from": env["PROSPECTION_FROM"], "to": [to], "subject": subject, "text": text,
        "reply_to": env["PROSPECTION_REPLY_TO"],
    }).encode("utf-8")
    req = urllib.request.Request("https://api.resend.com/emails", data=body, method="POST", headers={
        "Authorization": f"Bearer {env['RESEND_API_KEY']}", "Content-Type": "application/json",
        "User-Agent": "netwave-prospection/1.0",
    })
    try:
        with urllib.request.urlopen(req, timeout=30) as resp:
            return json.loads(resp.read())["id"]
    except urllib.error.HTTPError as e:
        raise RuntimeError(f"Resend {e.code} : {e.read().decode('utf-8', 'replace')[:300]}") from None


def cmd_send(args) -> None:
    env = load_env()
    need(env, "RESEND_API_KEY", "PROSPECTION_FROM", "PROSPECTION_REPLY_TO", "PROSPECTION_POSTAL_ADDRESS")
    wb = open_book()
    ws, lots = wb["Prospects"], wb["Lots"]
    lot_row = next((r for r in range(2, lots.max_row + 1) if lots.cell(r, 1).value == args.lot), None)
    if not lot_row:
        sys.exit(f"Lot {args.lot} introuvable.")
    if lots.cell(lot_row, 6).value != "en attente d'accord":
        sys.exit(f"Lot {args.lot} déjà traité ({lots.cell(lot_row, 6).value}).")
    if args.code != lots.cell(lot_row, 5).value:
        sys.exit("Code de validation incorrect : aucun e-mail envoyé. Le code est celui affiché au fondateur à la préparation du lot.")
    if lots.cell(lot_row, 2).value != iso(today()):
        sys.exit("Ce lot a été préparé un autre jour : préparez-en un nouveau pour que l'aperçu validé soit à jour.")
    relance = lots.cell(lot_row, 3).value == "relance"
    ex = exclusions(wb)
    room = DAILY_CAP - sent_today(ws)

    done, failed = [], []
    for r, p in rows(ws):
        if p["lot"] != args.lot or (not relance and p["statut"] != "prêt"):
            continue
        if room <= 0:
            failed.append({"id": p["id"], "raison": "plafond quotidien atteint"})
            continue
        if is_excluded(p["email"], ex) or (not relance and eligibility({**p, "statut": "vérifié"}, ex)):
            failed.append({"id": p["id"], "raison": "n'est plus éligible"})
            set_cells(ws, r, statut="vérifié", lot=None)
            continue
        subject, body = follow_up_text(p) if relance else (p["objet"], p["message"])
        try:
            mid = resend_send(env, p["email"], subject, body + footer(env, p["langue"] or "en"))
        except Exception as e:  # noqa: BLE001 : on journalise et on continue le lot
            failed.append({"id": p["id"], "raison": str(e)})
            if not relance:
                set_cells(ws, r, statut="vérifié", lot=None)
            continue
        if relance:
            set_cells(ws, r, statut="relancé", relance_le=iso(today()))
        else:
            set_cells(ws, r, statut="envoyé", envoye_le=iso(today()), message_id=mid)
        done.append(p["id"])
        room -= 1
        save(wb)  # sauvegarde à chaque envoi : rien n'est perdu si le script s'arrête
        time.sleep(PAUSE_SECONDS)
    lots.cell(lot_row, 6, "envoyé" if not failed else f"envoyé ({len(failed)} échecs)")
    lots.cell(lot_row, 7, dt.datetime.now().isoformat(timespec="minutes"))
    log(wb, "send", f"{args.lot} : {len(done)} envoyés, {len(failed)} échecs")
    save(wb)
    out({"lot": args.lot, "envoyes": done, "echecs": failed})


def cmd_cancel(args) -> None:
    wb = open_book()
    ws, lots = wb["Prospects"], wb["Lots"]
    for r in range(2, lots.max_row + 1):
        if lots.cell(r, 1).value == args.lot and lots.cell(r, 6).value == "en attente d'accord":
            lots.cell(r, 6, "annulé")
            for pr, p in rows(ws):
                if p["lot"] == args.lot and p["statut"] == "prêt":
                    set_cells(ws, pr, statut="vérifié", lot=None)
            log(wb, "cancel", args.lot)
            save(wb)
            out({"ok": True, "lot": args.lot, "info": "annulé, prospects remis en « vérifié »"})
            return
    sys.exit(f"Lot {args.lot} introuvable ou déjà envoyé.")


# --- Commandes : réponses -----------------------------------------------------------------------
def decode(value) -> str:
    return str(email.header.make_header(email.header.decode_header(value or "")))


def body_text(msg) -> str:
    parts = msg.walk() if msg.is_multipart() else [msg]
    for part in parts:
        if part.get_content_type() == "text/plain" and not part.get_filename():
            payload = part.get_payload(decode=True) or b""
            text = payload.decode(part.get_content_charset() or "utf-8", "replace")
            # On coupe la citation du message d'origine.
            text = re.split(r"\n(?:On .+wrote:|Le .+a écrit\s?:|-{2,}\s*Original)", text)[0]
            return re.sub(r"\n{3,}", "\n\n", text).strip()
    return ""


def cmd_fetch_replies(args) -> None:
    env = load_env()
    need(env, "IMAP_USER", "IMAP_APP_PASSWORD")
    wb = open_book()
    ws, rep = wb["Prospects"], wb["Réponses"]
    by_email, by_domain = {}, {}
    for r, p in rows(ws):
        if p["email"] and p["statut"] in ("envoyé", "relancé", "répondu", "intéressé", "pas_intéressé"):
            addr = str(p["email"]).lower()
            by_email[addr] = (r, p)
            by_domain.setdefault(addr.split("@")[-1], (r, p))
    known = {str(row[9]) for row in rep.iter_rows(min_row=2, values_only=True) if len(row) > 9 and row[9]}
    since = (today() - dt.timedelta(days=args.jours)).strftime("%d-%b-%Y")

    imap = imaplib.IMAP4_SSL(env.get("IMAP_HOST", "imap.gmail.com"))
    try:
        imap.login(env["IMAP_USER"], env["IMAP_APP_PASSWORD"])
        imap.select("INBOX", readonly=True)  # lecture seule : rien n'est marqué ni supprimé
        _, data = imap.search(None, f'(SINCE "{since}")')
        new = []
        for num in data[0].split():
            _, msg_data = imap.fetch(num, "(RFC822)")
            msg = email.message_from_bytes(msg_data[0][1])
            mid = (msg.get("Message-ID") or f"imap-{num.decode()}").strip()
            if mid in known:
                continue
            sender = email.utils.parseaddr(msg.get("From", ""))[1].lower()
            subject = decode(msg.get("Subject"))
            text = body_text(msg)
            bounce = sender.startswith(("mailer-daemon", "postmaster")) or "delivery status notification" in subject.lower()
            match = None
            if bounce:
                for addr, rp in by_email.items():
                    if addr in text.lower():
                        match = rp
                        break
            else:
                match = by_email.get(sender) or by_domain.get(sender.split("@")[-1])
            if not match:
                continue
            r, p = match
            rid = f"R{rep.max_row:04d}"
            received = email.utils.parsedate_to_datetime(msg.get("Date")).date().isoformat() if msg.get("Date") else iso(today())
            rep.append([rid, received, p["id"], sender, subject, text[:1500], "rebond" if bounce else None, None,
                        "oui" if bounce else "non", mid])
            known.add(mid)
            if bounce:
                set_cells(ws, r, statut="rebond", notes=f"Adresse en échec le {received}")
            else:
                set_cells(ws, r, statut="répondu", repondu_le=received)
                if re.search(r"\b(stop|unsubscribe|remove me|désinscri|ne plus recevoir)\b", text.lower()):
                    wb["Exclusions"].append([sender, iso(today()), "désinscription demandée"])
                    set_cells(ws, r, statut="désinscrit", categorie="désinscription")
            new.append({"reponse_id": rid, "prospect_id": p["id"], "entreprise": p["entreprise"],
                        "de": sender, "objet": subject, "extrait": text[:800], "rebond": bounce})
    finally:
        try:
            imap.logout()
        except Exception:  # noqa: BLE001
            pass
    log(wb, "fetch-replies", f"{len(new)} nouvelles réponses")
    save(wb)
    out({"nouvelles": new})


def cmd_classify(args) -> None:
    if args.categorie not in CATEGORIES:
        sys.exit(f"Catégorie inconnue. Possibles : {', '.join(CATEGORIES)}")
    wb = open_book()
    ws, rep = wb["Prospects"], wb["Réponses"]
    for rr in range(2, rep.max_row + 1):
        if rep.cell(rr, 1).value == args.reponse_id:
            rep.cell(rr, 7, args.categorie)
            rep.cell(rr, 8, args.travail)
            rep.cell(rr, 9, "oui")
            pid = rep.cell(rr, 3).value
            for r, p in rows(ws):
                if p["id"] == pid:
                    statut = {"intéressé": "intéressé", "question": "répondu", "pas_intéressé": "pas_intéressé",
                              "désinscription": "désinscrit", "autre": "répondu"}[args.categorie]
                    set_cells(ws, r, statut=statut, categorie=args.categorie, travail_a_faire=args.travail)
                    if args.categorie in ("désinscription", "pas_intéressé"):
                        wb["Exclusions"].append([str(p["email"]).lower(), iso(today()), args.categorie])
            log(wb, "classify", f"{args.reponse_id} → {args.categorie}")
            save(wb)
            out({"ok": True, "prospect": pid, "categorie": args.categorie})
            return
    sys.exit("Réponse introuvable.")


def cmd_report(_args) -> None:
    wb = open_book()
    ws = wb["Prospects"]
    counts = {s: 0 for s in STATUTS}
    todo, manual, follow = [], [], []
    for _, p in rows(ws):
        counts[p["statut"] or "nouveau"] = counts.get(p["statut"] or "nouveau", 0) + 1
        if p["statut"] in ("intéressé", "répondu") and p["travail_a_faire"]:
            todo.append({"id": p["id"], "entreprise": p["entreprise"], "email": p["email"],
                         "categorie": p["categorie"], "travail": p["travail_a_faire"]})
        if p["statut"] == "manuel":
            manual.append({"id": p["id"], "entreprise": p["entreprise"], "telephone": p["telephone"], "canal": p["canal"]})
        if p["statut"] == "envoyé" and p["envoye_le"] and not p["relance_le"] and \
                today() >= add_workdays(dt.date.fromisoformat(str(p["envoye_le"])), FOLLOW_UP_WORKDAYS):
            follow.append(p["id"])
    unread = [row for row in wb["Réponses"].iter_rows(min_row=2, values_only=True) if row[0] and row[8] == "non"]
    out({"compteurs": {k: v for k, v in counts.items() if v}, "travail_a_faire": todo,
         "reponses_a_classer": len(unread), "relances_dues": follow, "a_contacter_a_la_main": manual,
         "envoyes_aujourdhui": sent_today(ws), "plafond_quotidien": DAILY_CAP})



# --- Commande : surveillance ---------------------------------------------------------------------
def resend_domains(env: dict) -> list:
    req = urllib.request.Request("https://api.resend.com/domains", headers={
        "Authorization": f"Bearer {env['RESEND_API_KEY']}", "User-Agent": "netwave-prospection/1.0"})
    with urllib.request.urlopen(req, timeout=20) as resp:
        return json.loads(resp.read()).get("data", [])


def cmd_health(args) -> None:
    """Contrôle de santé : renvoie des alertes classées (erreur, attention, info)."""
    env = load_env()
    alerts = []

    def alert(level, sujet, detail, action):
        alerts.append({"niveau": level, "sujet": sujet, "detail": detail, "action": action})

    guide = "docs/agents-prospection.md, section « Mise en route »"
    for keys, role in [(("PROSPECTION_POSTAL_ADDRESS",), "de préparer un lot"),
                       (("RESEND_API_KEY", "PROSPECTION_FROM", "PROSPECTION_REPLY_TO"), "d'envoyer"),
                       (("IMAP_USER", "IMAP_APP_PASSWORD"), "de lire les réponses")]:
        missing = [k for k in keys if not env.get(k)]
        if missing:
            alert("erreur", "Réglages manquants", f"Impossible {role} : {', '.join(missing)} absent(s) de .env.local.", f"Compléter .env.local ({guide}).")

    if BOOK.exists():
        try:
            with open(BOOK, "a+b"):
                pass
        except PermissionError:
            alert("erreur", "Fichier bloqué", "prospects.xlsx est ouvert dans Excel.", "Fermer le fichier dans Excel.")
    wb = open_book()
    ws = wb["Prospects"]
    ps = [p for _, p in rows(ws)]
    sent = [p for p in ps if p["envoye_le"]]
    bounces = [p for p in ps if p["statut"] == "rebond"]
    if sent and len(bounces) / len(sent) > 0.05:
        alert("erreur", "Trop d'adresses en échec",
              f"{len(bounces)} rebonds sur {len(sent)} envois ({len(bounces) * 100 // len(sent)} %). Au-delà de 5 %, le domaine risque d'être classé comme spam.",
              "Suspendre les envois ; faire revérifier les adresses par l'agent « prospection ».")
    for row in wb["Lots"].iter_rows(min_row=2, values_only=True):
        if row[0] and row[5] == "en attente d'accord" and str(row[1]) != iso(today()):
            alert("attention", "Lot oublié", f"Le lot {row[0]} ({row[3]} e-mails) attend depuis le {row[1]} ; il ne peut plus partir.",
                  f"Annuler le lot (« annule le lot {row[0]} ») puis en préparer un nouveau.")
        if row[0] and str(row[5]).startswith("envoyé (") and str(row[6] or "")[:10] >= iso(today() - dt.timedelta(days=7)):
            alert("erreur", "Échecs d'envoi", f"Lot {row[0]} : {row[5]}.", "Lire le Journal du fichier ; souvent une clé Resend ou un domaine non vérifié.")
    pending = [r for r in wb["Réponses"].iter_rows(min_row=2, values_only=True) if r[0] and r[8] == "non"]
    old = [r for r in pending if str(r[1]) < iso(today() - dt.timedelta(days=1))]
    if old:
        alert("erreur", "Réponses non traitées", f"{len(old)} réponse(s) de plus de 24 h pas encore classées. La charte promet une réponse sous 24 h ouvrées.",
              "Lancer l'agent « réponses ».")
    hot = [p for p in ps if p["statut"] == "intéressé"]
    if hot:
        alert("attention", "Prospects intéressés", f"{len(hot)} prospect(s) intéressé(s) : " + ", ".join(str(p["entreprise"]) for p in hot[:5]),
              "Envoyer le diagnostic promis ; voir la colonne travail_a_faire.")
    due = [p for p in ps if p["statut"] == "envoyé" and p["envoye_le"] and not p["relance_le"]
           and today() >= add_workdays(dt.date.fromisoformat(str(p["envoye_le"])), FOLLOW_UP_WORKDAYS)]
    if due:
        alert("info", "Relances dues", f"{len(due)} prospect(s) à relancer.", "« Agent lancer : prépare les relances ».")
    if sent:
        fetches = [r for r in wb["Journal"].iter_rows(min_row=2, values_only=True) if r[1] == "fetch-replies"]
        last = str(fetches[-1][0])[:10] if fetches else None
        if not last or last < iso(today() - dt.timedelta(days=2)):
            alert("attention", "Boîte mail non relevée", f"Dernier relevé : {last or 'jamais'}.", "Lancer l'agent « réponses ».")
    manual = [p for p in ps if p["statut"] == "manuel"]
    if manual:
        alert("info", "À contacter vous-même", f"{len(manual)} prospect(s) sans e-mail (téléphone, Facebook).", "Voir le statut « manuel » dans le fichier.")

    if args.reseau and env.get("RESEND_API_KEY"):
        try:
            doms = resend_domains(env)
            sender = email.utils.parseaddr(env.get("PROSPECTION_FROM", ""))[1].split("@")[-1]
            match = [d for d in doms if d.get("name") == sender]
            if not match:
                alert("erreur", "Domaine absent de Resend", f"{sender or '?'} n'est pas ajouté dans Resend.", f"Ajouter et vérifier le domaine ({guide}).")
            elif match[0].get("status") != "verified":
                alert("erreur", "Domaine non vérifié", f"{sender} : statut « {match[0].get('status')} » chez Resend.", "Ajouter les enregistrements DNS affichés par Resend, puis Verify.")
        except urllib.error.HTTPError as e:
            body = e.read().decode("utf-8", "replace")
            if e.code == 401 and "restricted_api_key" in body:
                # Clé « Sending access » : valide, mais sans droit de lecture des domaines (réglage conseillé).
                pass
            else:
                alert("erreur", "Clé Resend refusée", f"HTTP {e.code} : {body[:160]}", "Recréer une clé dans Resend (API Keys) et la recopier dans .env.local.")
        except Exception as e:  # noqa: BLE001
            alert("erreur", "Resend injoignable", str(e)[:200], "Vérifier la connexion Internet.")
    if args.reseau and env.get("IMAP_USER") and env.get("IMAP_APP_PASSWORD"):
        try:
            imap = imaplib.IMAP4_SSL(env.get("IMAP_HOST", "imap.gmail.com"))
            imap.login(env["IMAP_USER"], env["IMAP_APP_PASSWORD"])
            imap.logout()
        except Exception as e:  # noqa: BLE001
            alert("erreur", "Connexion Gmail impossible", str(e)[:200], "Recréer le mot de passe d'application et vérifier qu'IMAP est activé.")

    order = {"erreur": 0, "attention": 1, "info": 2}
    alerts.sort(key=lambda a: order[a["niveau"]])
    etat = "erreur" if any(a["niveau"] == "erreur" for a in alerts) else ("attention" if alerts else "ok")
    out({"etat": etat, "date": dt.datetime.now().isoformat(timespec="minutes"), "alertes": alerts,
         "compteurs": {"prospects": len(ps), "envoyes": len(sent), "rebonds": len(bounces),
                       "reponses_a_classer": len(pending), "envoyes_aujourdhui": sent_today(ws)}})


# --- Commande : liste d'appels -------------------------------------------------------------------
CALL_SCRIPT = [
    ("Ouverture", "Hi, is this [business]? My name is Albéric, I run NetWave Studio, a small web studio. "
                  "I'm not Google and this isn't a sales call. Do you have 30 seconds?"),
    ("Constat", "I noticed [constat vérifié, colonne F : e.g. you don't have a website of your own, "
                "people find you through Facebook or Booksy]."),
    ("Proposition", "I make free one-page visibility checks for local businesses: how you show up on Google Maps "
                    "compared with three places nearby, plus three things you can fix yourself. Can I email it to you?"),
    ("Si oui", "Great, what's the best email address? I'll send it within 24 working hours. "
               "→ Noter l'adresse et « accord par téléphone le [date] » : il a demandé l'e-mail, ce n'est plus de la prospection à froid."),
    ("« No time »", "Totally fine, it's just an email, you read it whenever you want."),
    ("« Facebook is enough »", "Facebook is great for regulars. New customers usually search Google Maps first, "
                               "and the check shows exactly what they see."),
    ("« How much? »", "The check is free. If you want us to fix things, prices are fixed and written: "
                      "from €490, delivered in 10 working days or 20% back."),
    ("« Not interested »", "No problem at all, I won't call again. Have a good day. → Résultat « Ne plus appeler »."),
]
CALL_RESULTS = ["Pas de réponse", "Rappeler", "Intéressé : envoyer le diagnostic", "Pas intéressé",
                "Ne plus appeler", "Mauvais numéro"]


def cmd_call_list(args) -> None:
    """Fabrique prospection/liste-appels.xlsx à partir des prospects « manuel » (téléphone d'abord)."""
    from openpyxl.worksheet.datavalidation import DataValidation
    wb = open_book()
    ps = [p for _, p in rows(wb["Prospects"]) if p["statut"] == "manuel"]
    phone = sorted([p for p in ps if p["telephone"]], key=lambda p: -int(p["score"] or 0))
    other = sorted([p for p in ps if not p["telephone"]], key=lambda p: -int(p["score"] or 0))

    book = openpyxl.Workbook()
    ws = book.active
    ws.title = "Appels"
    cols = [("Priorité", 9), ("ID", 8), ("Commerce", 30), ("Ville", 14), ("Téléphone", 18),
            ("Constat vérifié (à citer)", 46), ("Vérification et autres numéros", 46),
            ("Appelé le", 12), ("Résultat", 26), ("Rappeler le", 12), ("E-mail obtenu", 26), ("Notes", 30)]
    for i, (name, width) in enumerate(cols, start=1):
        header_style(ws.cell(row=1, column=i, value=name))
        ws.column_dimensions[openpyxl.utils.get_column_letter(i)].width = width
    for n, p in enumerate(phone, start=1):
        ws.append([n, p["id"], p["entreprise"], p["ville"], p["telephone"], p["presence_actuelle"],
                   p["verification"], None, None, None, None, None])
    wrap = Alignment(wrap_text=True, vertical="top")
    for row in ws.iter_rows(min_row=2):
        for cell in row:
            cell.alignment = wrap
    dv = DataValidation(type="list", formula1='"' + ",".join(CALL_RESULTS) + '"', allow_blank=True)
    ws.add_data_validation(dv)
    dv.add(f"I2:I{max(ws.max_row, 2)}")
    ws.freeze_panes = "D2"
    ws.auto_filter.ref = f"A1:L{max(ws.max_row, 1)}"

    so = book.create_sheet("Facebook et autres")
    for i, (name, width) in enumerate([("ID", 8), ("Commerce", 30), ("Ville", 14), ("Canal", 12),
                                       ("Vérification", 60), ("Contacté le", 12), ("Résultat", 26)], start=1):
        header_style(so.cell(row=1, column=i, value=name))
        so.column_dimensions[openpyxl.utils.get_column_letter(i)].width = width
    for p in other:
        so.append([p["id"], p["entreprise"], p["ville"], p["canal"], p["verification"], None, None])

    sc = book.create_sheet("Script d'appel")
    sc.column_dimensions["A"].width = 24
    sc.column_dimensions["B"].width = 110
    lines = [("Script de 30 secondes (anglais)", "")] + CALL_SCRIPT + [
        ("", ""),
        ("Quand appeler", "L'Irlande a 1 heure de retard sur Cotonou en hiver (depuis le 25/10/2026). Conseil : du mardi au jeudi, "
                          "10 h–11 h 30 et 14 h 30–16 h 30 heure irlandaise (11 h–12 h 30 et 15 h 30–17 h 30 à Cotonou). "
                          "Jamais pendant le service des restaurants (12 h–14 h, après 17 h)."),
        ("Avant chaque appel", "Vérifier en 1 minute sur Google Maps, en navigation privée, que le commerce est ouvert et que le constat "
                               "est toujours vrai. Ne jamais citer un nombre d'avis non revérifié."),
        ("Règles", "Se présenter clairement (nom, NetWave Studio). Si la personne dit stop : ne plus jamais rappeler. "
                   "Une seule tentative de rappel si pas de réponse. Jamais de WhatsApp sans accord."),
        ("À faire confirmer", "Irlande : les appels de prospection vers un numéro professionnel sont admis sauf opposition inscrite "
                              "(National Directory Database) ou refus exprimé ; les mobiles (08…) de particuliers demandent un accord. "
                              "Règle à faire confirmer par un juriste avant d'appeler en volume."),
        ("Après l'appel", "Si e-mail obtenu : le noter ici, puis demander à l'agent « prospection » de l'ajouter au prospect "
                          "(email_type=enseigne ou générique, verification=« accord par téléphone le … »)."),
    ]
    for a, b in lines:
        sc.append([a, b])
    for row in sc.iter_rows():
        row[0].font = Font(bold=True)
        row[1].alignment = Alignment(wrap_text=True, vertical="top")
    sc.cell(row=1, column=1).font = Font(bold=True, size=13, color="08745D")

    target = WORKDIR / "liste-appels.xlsx"
    try:
        book.save(target)
    except PermissionError:
        sys.exit(f"{target.name} est ouvert dans Excel : fermez-le et relancez.")
    out({"fichier": str(target), "appels": len(phone), "facebook_et_autres": len(other)})

# --- Point d'entrée -----------------------------------------------------------------------------
def main() -> None:
    sys.stdout.reconfigure(encoding="utf-8")
    ap = argparse.ArgumentParser(description="Chaîne de prospection NetWave Studio")
    sub = ap.add_subparsers(dest="cmd", required=True)
    sub.add_parser("init", help="crée prospection/prospects.xlsx").set_defaults(fn=cmd_init)
    p = sub.add_parser("add", help="ajoute des prospects depuis un fichier JSON")
    p.add_argument("json"); p.set_defaults(fn=cmd_add)
    p = sub.add_parser("update", help="modifie un prospect : update P0001 email=… verifie_le=…")
    p.add_argument("id"); p.add_argument("fields", nargs="+"); p.set_defaults(fn=cmd_update)
    p = sub.add_parser("list", help="liste les prospects (filtre --statut)")
    p.add_argument("--statut"); p.set_defaults(fn=cmd_list)
    p = sub.add_parser("import-irlande", help="reprend prospects-irlande.xlsx")
    p.add_argument("--fichier", default="prospects-irlande.xlsx"); p.set_defaults(fn=cmd_import_irlande)
    p = sub.add_parser("prepare", help="prépare un lot et affiche le code de validation")
    p.add_argument("--taille", type=int, default=20); p.add_argument("--relance", action="store_true")
    p.set_defaults(fn=cmd_prepare)
    p = sub.add_parser("send", help="envoie un lot validé : send L… --code XXXXXX")
    p.add_argument("lot"); p.add_argument("--code", required=True); p.set_defaults(fn=cmd_send)
    p = sub.add_parser("cancel", help="annule un lot non envoyé")
    p.add_argument("lot"); p.set_defaults(fn=cmd_cancel)
    p = sub.add_parser("fetch-replies", help="relève les réponses (lecture seule)")
    p.add_argument("--jours", type=int, default=21); p.set_defaults(fn=cmd_fetch_replies)
    p = sub.add_parser("classify", help="classe une réponse")
    p.add_argument("reponse_id"); p.add_argument("categorie"); p.add_argument("--travail", default="")
    p.set_defaults(fn=cmd_classify)
    sub.add_parser("report", help="bilan : qui a répondu, travail à faire").set_defaults(fn=cmd_report)
    sub.add_parser("call-list", help="fabrique prospection/liste-appels.xlsx").set_defaults(fn=cmd_call_list)
    p = sub.add_parser("health", help="contrôle de santé (--reseau : teste aussi Resend et Gmail)")
    p.add_argument("--reseau", action="store_true"); p.set_defaults(fn=cmd_health)
    args = ap.parse_args()
    args.fn(args)


if __name__ == "__main__":
    main()
