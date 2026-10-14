import Link from "next/link";
import {
  COMBO,
  DIAGNOSTIC,
  MAIN_PACKS,
  OPTIONS,
  PACK_COMPARISON,
  SUBSCRIPTIONS,
  TRUST_CHARTER,
  formatEur,
} from "@/data/site";
import { ArrowIcon, ButtonLink, CheckIcon, Container, Eyebrow } from "@/components/ui";

/** Le « ticket d'entrée » : diagnostic gratuit. */
export function DiagnosticBand() {
  return (
    <section className="px-4 sm:px-6">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-8 rounded-[32px] bg-ink px-7 py-12 text-white sm:px-14">
        <div className="flex min-w-0 max-w-[640px] flex-col gap-4">
          <Eyebrow tone="mint">Gratuit, sans engagement</Eyebrow>
          <h2 className="h-display text-[clamp(30px,3.8vw,46px)]">{DIAGNOSTIC.title}</h2>
          <ul className="flex flex-col gap-2.5 text-base text-on-dark">
            {DIAGNOSTIC.points.map((p) => (
              <li key={p} className="flex gap-3">
                <CheckIcon className="mt-1 h-[18px] w-[18px] text-mint" />
                {p}
              </li>
            ))}
          </ul>
        </div>
        <ButtonLink href={DIAGNOSTIC.href} variant="mint">
          {DIAGNOSTIC.cta} <ArrowIcon />
        </ButtonLink>
      </div>
    </section>
  );
}

/** Charte de confiance : répond aux plaintes les plus fréquentes contre les prestataires web. */
export function TrustCharter() {
  return (
    <Container className="py-20 md:py-28">
      <div className="mb-12 flex max-w-[760px] flex-col gap-4">
        <Eyebrow>Notre charte de confiance</Eyebrow>
        <h2 className="h-display text-[clamp(32px,4vw,52px)]">Six engagements écrits, pour ne jamais vous faire avoir.</h2>
      </div>
      <ul className="grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        {TRUST_CHARTER.map((t, i) => (
          <li key={t.title} className="flex flex-col gap-2 border-t-2 border-ink pt-5">
            <span className="font-mono text-[13px] font-semibold text-emerald">0{i + 1}</span>
            <h3 className="text-lg font-bold">{t.title}</h3>
            <p className="text-[15px] leading-relaxed text-body">{t.text}</p>
          </li>
        ))}
      </ul>
    </Container>
  );
}

/** Tableau comparatif des trois tailles. */
export function ComparisonTable() {
  const cell = (v: string | boolean) =>
    v === true ? (
      <CheckIcon className="mx-auto h-5 w-5 text-emerald" />
    ) : v === false ? (
      <span className="text-faint" aria-label="Non inclus">—</span>
    ) : (
      v
    );
  return (
    <div className="overflow-x-auto rounded-3xl border border-line">
      <table className="w-full min-w-[640px] border-collapse text-left text-[15px]">
        <caption className="sr-only">Comparaison des formules Lancement, Essentiel+ et Croissance</caption>
        <thead>
          <tr className="bg-mist">
            <th scope="col" className="px-5 py-4 font-semibold text-muted">Inclus</th>
            {MAIN_PACKS.map((p) => (
              <th key={p.id} scope="col" className={`px-5 py-4 text-center ${p.featured ? "bg-ink text-white" : ""}`}>
                <span className="block font-display text-lg font-bold">{p.name}</span>
                <span className={`block text-sm ${p.featured ? "text-mint" : "text-muted"}`}>{formatEur(p.price)}</span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {PACK_COMPARISON.map((row) => (
            <tr key={row.label} className="border-t border-line">
              <th scope="row" className="px-5 py-3.5 font-medium text-ink-2">{row.label}</th>
              {row.values.map((v, i) => (
                <td key={i} className={`px-5 py-3.5 text-center ${MAIN_PACKS[i].featured ? "bg-emerald-soft/60 font-semibold" : ""}`}>
                  {cell(v)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** Options à ajouter à la commande. */
export function OptionsGrid() {
  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {OPTIONS.map((o) => (
        <li key={o.name} className="flex flex-col gap-2 rounded-[20px] border border-line bg-white p-6">
          <p className="font-display text-3xl font-[750] tracking-[-0.03em]">+{formatEur(o.price)}</p>
          <p className="font-semibold leading-snug">{o.name}</p>
          <p className="text-sm text-muted">{o.note}</p>
        </li>
      ))}
    </ul>
  );
}

/** Abonnements mensuels et combo. */
export function Subscriptions() {
  return (
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
      {SUBSCRIPTIONS.map((s) => (
        <article key={s.name} className="flex flex-col gap-4 rounded-3xl border border-line bg-white p-8">
          <h3 className="font-display text-2xl font-bold">{s.name}</h3>
          <p className="font-display text-5xl font-[750] tracking-[-0.03em]">
            {formatEur(s.monthly)}
            <span className="text-lg font-semibold tracking-normal text-muted"> / mois</span>
          </p>
          <p className="text-sm text-muted">ou {formatEur(s.yearly)} par an, 2 mois offerts · sans engagement</p>
          <ul className="flex flex-col gap-2.5 border-t border-line pt-5 text-[15px] text-ink-2">
            {s.features.map((f) => (
              <li key={f} className="flex gap-2.5">
                <CheckIcon className="mt-0.5 h-[18px] w-[18px] text-emerald" />
                {f}
              </li>
            ))}
          </ul>
        </article>
      ))}
      <article className="flex flex-col justify-between gap-5 rounded-3xl bg-ink p-8 text-white">
        <div className="flex flex-col gap-3">
          <p className="eyebrow text-mint">Le combo</p>
          <h3 className="font-display text-2xl font-bold">{COMBO.name}</h3>
          <p className="font-display text-5xl font-[750] tracking-[-0.03em]">{formatEur(COMBO.price)}</p>
          <p className="text-sm text-on-dark">
            au lieu de {formatEur(COMBO.regular)} séparément : vous économisez {formatEur(COMBO.regular - COMBO.price)}.
          </p>
        </div>
        <Link
          href="/contact"
          className="inline-flex min-h-[50px] items-center justify-center rounded-xl bg-mint text-[15px] font-bold text-ink transition-colors hover:bg-[#5fe3bf]"
        >
          Choisir le combo
        </Link>
      </article>
    </div>
  );
}
