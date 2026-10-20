"use client";

import { useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { BUDGETS, CONTACT, COUNTRY_SUGGESTIONS, SERVICE_CHOICES } from "@/data/site";
import { ArrowIcon } from "@/components/ui";

const FIELD =
  "min-h-[50px] w-full rounded-xl border border-line-strong bg-white px-4 text-base text-ink placeholder:text-faint focus:border-emerald focus:outline-none focus:ring-3 focus:ring-emerald/20";

type Status = { kind: "idle" } | { kind: "sending" } | { kind: "sent" } | { kind: "error"; message: string };

export default function ContactForm() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  // « ?sujet=diagnostic » (boutons Diagnostic gratuit) présélectionne la demande de diagnostic.
  const isDiagnostic = useSearchParams().get("sujet") === "diagnostic";
  const defaultService = isDiagnostic ? "diagnostic" : "web";

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());
    setStatus({ kind: "sending" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setStatus({ kind: "error", message: data.error || "L'envoi a échoué. Réessayez ou écrivez-nous sur WhatsApp." });
        return;
      }
      form.reset();
      setStatus({ kind: "sent" });
    } catch {
      setStatus({ kind: "error", message: "Connexion impossible. Vérifiez votre réseau ou écrivez-nous sur WhatsApp." });
    }
  }

  if (status.kind === "sent") {
    return (
      <div role="status" className="flex flex-col gap-5 rounded-[28px] border border-line bg-mist p-10">
        <p className="eyebrow text-emerald">Demande envoyée</p>
        <h2 className="h-display text-4xl">Merci, nous revenons vers vous sous 24 h ouvrées.</h2>
        <p className="text-base leading-relaxed text-body">
          Une question urgente ? Écrivez-nous directement sur WhatsApp au {CONTACT.phoneDisplay}.
        </p>
        <button
          type="button"
          onClick={() => setStatus({ kind: "idle" })}
          className="self-start font-semibold text-emerald underline underline-offset-4"
        >
          Envoyer une autre demande
        </button>
      </div>
    );
  }

  const sending = status.kind === "sending";

  return (
    <form
      onSubmit={handleSubmit}
      aria-label="Demande de devis"
      className="flex flex-col gap-7 rounded-[28px] border border-line bg-mist p-6 sm:p-10"
    >
      <fieldset className="flex flex-col gap-3">
        <legend className="mb-3 font-bold">Votre besoin</legend>
        <div className="flex flex-wrap gap-2.5">
          {SERVICE_CHOICES.map((choice) => (
            <label
              key={choice.id}
              className="inline-flex min-h-11 cursor-pointer items-center rounded-full border border-line-strong bg-white px-4 text-sm font-semibold has-checked:border-ink has-checked:bg-ink has-checked:text-white has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-emerald"
            >
              <input type="radio" name="service" value={choice.id} defaultChecked={choice.id === defaultService} className="sr-only" />
              {choice.label}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-semibold">Nom complet</label>
          <input id="name" name="name" type="text" required maxLength={120} autoComplete="name" className={FIELD} />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-semibold">Email</label>
          <input id="email" name="email" type="email" required maxLength={200} autoComplete="email" placeholder="vous@entreprise.com" className={FIELD} />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="text-sm font-semibold">
            WhatsApp <span className="font-medium text-muted">(facultatif)</span>
          </label>
          <input id="phone" name="phone" type="tel" maxLength={40} autoComplete="tel" placeholder="+33, +225, +509…" className={FIELD} />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="country" className="text-sm font-semibold">Pays</label>
          <input
            id="country"
            name="country"
            type="text"
            list="country-suggestions"
            maxLength={80}
            autoComplete="country-name"
            placeholder="Votre pays"
            className={FIELD}
          />
          <datalist id="country-suggestions">
            {COUNTRY_SUGGESTIONS.map((c) => (
              <option key={c} value={c} />
            ))}
          </datalist>
        </div>
        <div className="flex flex-col gap-2 sm:col-span-2">
          <label htmlFor="budget" className="text-sm font-semibold">Budget envisagé</label>
          <select id="budget" name="budget" defaultValue="undetermined" className={FIELD}>
            {BUDGETS.map((b) => (
              <option key={b.id} value={b.id}>{b.label}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-semibold">Votre projet en quelques lignes</label>
        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          maxLength={5000}
          rows={5}
          placeholder={isDiagnostic ? "Votre activité, votre ville, le lien de votre page Facebook ou Instagram…" : "Votre activité, ce que vous voulez obtenir, une échéance éventuelle…"}
          className={`${FIELD} resize-y py-3.5 leading-normal`}
        />
      </div>

      {/* Champ piège anti-spam : masqué aux humains et aux lecteurs d'écran. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="website">Site web</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {status.kind === "error" && (
        <p role="alert" className="rounded-xl border border-[#E8B4B4] bg-[#FDF2F2] px-4 py-3 text-sm text-[#8A1C1C]">
          {status.message}{" "}
          <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="font-semibold underline">
            Ouvrir WhatsApp
          </a>
        </p>
      )}

      <div className="flex flex-wrap items-center justify-between gap-4">
        <p className="flex-[1_1_240px] text-[13px] leading-normal text-muted">
          Vos informations servent uniquement à vous répondre. Aucune revente, aucune newsletter imposée.{" "}
          <a href="/confidentialite" className="underline hover:text-emerald">
            Confidentialité
          </a>
        </p>
        <button
          type="submit"
          disabled={sending}
          className="inline-flex min-h-[54px] items-center gap-2.5 rounded-xl bg-emerald px-7 text-base font-bold text-white transition-colors hover:bg-emerald-hover disabled:cursor-wait disabled:opacity-70"
        >
          {sending ? "Envoi en cours…" : "Envoyer ma demande"}
          {!sending && <ArrowIcon />}
        </button>
      </div>
    </form>
  );
}
