"use client";

import { useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { CONTACT } from "@/data/site-en";
import { ArrowIcon } from "@/components/ui";

const FIELD =
  "min-h-[50px] w-full rounded-xl border border-line-strong bg-white px-4 text-base text-ink placeholder:text-faint focus:border-emerald focus:outline-none focus:ring-3 focus:ring-emerald/20";

type Status = { kind: "idle" } | { kind: "sending" } | { kind: "sent" } | { kind: "error"; message: string };

const SERVICE_CHOICES_EN = [
  { id: "audit", label: "Free Local Audit" },
  { id: "launch", label: "Launch (£299)" },
  { id: "essential", label: "Essential+ (£649)" },
  { id: "growth", label: "Growth (£799)" },
  { id: "prestige", label: "Prestige (from £1,690)" },
  { id: "custom", label: "Custom / Not Sure" },
] as const;

const BUDGETS_EN = [
  { id: "undetermined", label: "To be discussed" },
  { id: "launch", label: "£299 – £649" },
  { id: "growth", label: "£649 – £1,000" },
  { id: "prestige", label: "£1,000 – £2,500+" },
] as const;

export default function ContactFormEn() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const isAudit = useSearchParams().get("subject") === "audit";
  const defaultService = isAudit ? "audit" : "growth";

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
        setStatus({ kind: "error", message: data.error || "Submission failed. Please message us directly on WhatsApp." });
        return;
      }
      form.reset();
      setStatus({ kind: "sent" });
    } catch {
      setStatus({ kind: "error", message: "Network error. Please connect via WhatsApp directly." });
    }
  }

  if (status.kind === "sent") {
    return (
      <div role="status" className="flex flex-col gap-5 rounded-[28px] border border-line bg-mist p-10">
        <p className="eyebrow text-emerald">Request Sent</p>
        <h2 className="h-display text-4xl">Thank you! We will reply within 24 business hours.</h2>
        <p className="text-base leading-relaxed text-body">
          Need a quick answer? Message us directly on WhatsApp at {CONTACT.phoneDisplay}.
        </p>
        <button
          type="button"
          onClick={() => setStatus({ kind: "idle" })}
          className="self-start font-semibold text-emerald underline underline-offset-4"
        >
          Send another inquiry
        </button>
      </div>
    );
  }

  const sending = status.kind === "sending";

  return (
    <form
      onSubmit={handleSubmit}
      aria-label="Request a quote or audit"
      className="flex flex-col gap-7 rounded-[28px] border border-line bg-mist p-6 sm:p-10"
    >
      <fieldset className="flex flex-col gap-3">
        <legend className="mb-3 font-bold">Your Requirement</legend>
        <div className="flex flex-wrap gap-2.5">
          {SERVICE_CHOICES_EN.map((choice) => (
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
          <label htmlFor="name" className="text-sm font-semibold">Full Name</label>
          <input id="name" name="name" type="text" required maxLength={120} autoComplete="name" placeholder="John Smith" className={FIELD} />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-semibold">Business Email</label>
          <input id="email" name="email" type="email" required maxLength={200} autoComplete="email" placeholder="john@company.co.uk" className={FIELD} />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="text-sm font-semibold">
            WhatsApp / Mobile <span className="font-medium text-muted">(Optional)</span>
          </label>
          <input id="phone" name="phone" type="tel" maxLength={40} autoComplete="tel" placeholder="+44 7…" className={FIELD} />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="country" className="text-sm font-semibold">City &amp; Country</label>
          <input
            id="country"
            name="country"
            type="text"
            maxLength={80}
            autoComplete="country-name"
            placeholder="e.g. Leeds, United Kingdom"
            className={FIELD}
          />
        </div>
        <div className="flex flex-col gap-2 sm:col-span-2">
          <label htmlFor="budget" className="text-sm font-semibold">Estimated Budget</label>
          <select id="budget" name="budget" defaultValue="growth" className={FIELD}>
            {BUDGETS_EN.map((b) => (
              <option key={b.id} value={b.id}>{b.label}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-semibold">Your business in a few sentences</label>
        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          maxLength={5000}
          rows={5}
          placeholder={isAudit ? "Your trade, town, current Google profile name or social link…" : "Your trade, target timeline, any specific feature required…"}
          className={`${FIELD} resize-y py-3.5 leading-normal`}
        />
      </div>

      {/* Honeypot spam trap */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {status.kind === "error" && (
        <p role="alert" className="rounded-xl border border-[#E8B4B4] bg-[#FDF2F2] px-4 py-3 text-sm text-[#8A1C1C]">
          {status.message}{" "}
          <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="font-semibold underline">
            Open WhatsApp
          </a>
        </p>
      )}

      <div className="flex flex-wrap items-center justify-between gap-4">
        <p className="flex-[1_1_240px] text-[13px] leading-normal text-muted">
          Your details are strictly used to reply to your inquiry. No marketing spam, ever.{" "}
          <a href="/en/privacy" className="underline hover:text-emerald">
            Privacy policy
          </a>
        </p>
        <button
          type="submit"
          disabled={sending}
          className="inline-flex min-h-[54px] items-center gap-2.5 rounded-xl bg-emerald px-7 text-base font-bold text-white transition-colors hover:bg-emerald-hover disabled:cursor-wait disabled:opacity-70"
        >
          {sending ? "Sending…" : "Send Inquiry"}
          {!sending && <ArrowIcon />}
        </button>
      </div>
    </form>
  );
}
