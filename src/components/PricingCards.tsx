"use client";

import Link from "next/link";
import { useState } from "react";
import { MAIN_PACKS, PRESTIGE, formatEur } from "@/data/site";
import { CheckIcon } from "@/components/ui";

export default function PricingCards() {
  const [split, setSplit] = useState(false);
  const price = (p: { price: number; installment: number }) => (split ? `3 × ${formatEur(p.installment)}` : formatEur(p.price));
  const sub = (p: { price: number; installment: number }) =>
    split ? `soit ${formatEur(p.price)} au total` : `ou 3 × ${formatEur(p.installment)} sans frais`;

  return (
    <>
      <div role="group" aria-label="Mode de paiement affiché" className="mb-10 inline-flex rounded-xl border border-line bg-mist p-1.5">
        {[
          { value: false, label: "Comptant" },
          { value: true, label: "En 3 fois sans frais" },
        ].map((option) => (
          <button
            key={option.label}
            type="button"
            aria-pressed={split === option.value}
            onClick={() => setSplit(option.value)}
            className={`min-h-11 rounded-[9px] px-4.5 text-sm font-semibold transition-colors ${
              split === option.value ? "bg-ink text-white" : "text-ink-2 hover:text-ink"
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 items-stretch gap-5 lg:grid-cols-3">
        {MAIN_PACKS.map((pack) => {
          const dark = pack.featured;
          return (
            <article
              key={pack.id}
              className={`relative flex flex-col gap-6 rounded-3xl px-8 py-10 ${
                dark ? "bg-ink text-white shadow-[0_24px_60px_rgba(20,11,38,0.25)] lg:-my-4 lg:py-14" : "border border-line"
              }`}
            >
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between gap-3">
                  <h2 className="font-display text-[26px] font-bold">{pack.name}</h2>
                  {dark && <span className="eyebrow rounded-full bg-mint px-2.5 py-1 text-[11px] text-ink">Recommandée</span>}
                </div>
                <p className={`text-[15px] leading-snug ${dark ? "text-on-dark" : "text-body"}`}>{pack.tagline}</p>
              </div>

              <div aria-live="polite">
                <p className="font-display text-[clamp(44px,5vw,60px)] font-[750] leading-none tracking-[-0.035em]">{price(pack)}</p>
                <p className={`mt-2 text-sm ${dark ? "text-on-dark" : "text-muted"}`}>{sub(pack)}</p>
              </div>

              {dark && (
                <p className="rounded-[14px] bg-mint/12 px-4.5 py-3.5 text-sm leading-normal text-[#E3F5F0]">
                  <strong className="text-mint">Pour 100 € de plus qu&apos;Essentiel+ :</strong> la vidéo, le SEO local, la charte et le paiement en ligne.
                </p>
              )}

              <Link
                href="/contact"
                className={`inline-flex min-h-[50px] items-center justify-center rounded-xl text-[15px] font-semibold transition-colors ${
                  dark ? "bg-mint font-bold text-ink hover:bg-[#5fe3bf]" : "border-[1.5px] border-ink text-ink hover:bg-ink hover:text-white"
                }`}
              >
                {pack.cta}
              </Link>

              <ul className={`flex flex-col gap-3 border-t pt-6 text-[15px] leading-snug ${dark ? "border-white/14 text-[#E7E3EF]" : "border-[#EFEDF3] text-ink-2"}`}>
                {pack.features.map((f) => (
                  <li key={f} className="flex gap-2.5">
                    <CheckIcon className={`mt-0.5 h-[18px] w-[18px] ${dark ? "text-mint" : "text-emerald"}`} />
                    {f}
                  </li>
                ))}
              </ul>

              <div className={`mt-auto rounded-[14px] px-4.5 py-4 text-sm leading-normal ${dark ? "bg-white/6 text-on-dark" : "bg-mist text-body"}`}>
                <p className={`eyebrow mb-2 text-[11px] ${dark ? "text-mint" : "text-emerald"}`}>Offert</p>
                <p>{pack.bonuses.join(" · ")}</p>
              </div>
            </article>
          );
        })}
      </div>

      {/* Prestige : l'ancre haute, présentée à part. */}
      <article className="mt-10 flex flex-wrap items-center justify-between gap-8 rounded-3xl border border-line bg-mist px-8 py-9 sm:px-10">
        <div className="flex min-w-0 max-w-[620px] flex-col gap-3">
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <h2 className="font-display text-[26px] font-bold">{PRESTIGE.name}</h2>
            <p className="font-display text-3xl font-[750] tracking-[-0.03em]">
              <span className="text-lg font-semibold tracking-normal">dès </span>
              {split ? `3 × ${formatEur(PRESTIGE.installment)}` : formatEur(PRESTIGE.price)}
            </p>
          </div>
          <p className="text-[15px] text-body">{PRESTIGE.tagline}</p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-ink-2">
            {PRESTIGE.features.slice(0, 4).map((f) => (
              <li key={f} className="flex gap-2">
                <CheckIcon className="mt-0.5 h-4 w-4 text-emerald" />
                {f}
              </li>
            ))}
          </ul>
        </div>
        <Link
          href="/contact"
          className="inline-flex min-h-[50px] items-center justify-center rounded-xl border-[1.5px] border-ink px-6 text-[15px] font-semibold text-ink transition-colors hover:bg-ink hover:text-white"
        >
          {PRESTIGE.cta}
        </Link>
      </article>
    </>
  );
}
