"use client";

import Link from "next/link";
import { useState } from "react";
import { PACKS, formatEur } from "@/data/site";
import { CheckIcon } from "@/components/ui";

export default function PricingCards() {
  const [split, setSplit] = useState(false);

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

      <div className="grid grid-cols-1 lg:grid-cols-3 items-stretch gap-5">
        {PACKS.map((pack) => {
          const dark = pack.featured;
          const total = formatEur(pack.price);
          const monthly = `3 × ${formatEur(pack.installment)}`;
          return (
            <article
              key={pack.id}
              className={`flex flex-col gap-6 rounded-3xl px-8 py-10 ${
                dark ? "bg-ink text-white shadow-[0_24px_60px_rgba(20,11,38,0.25)]" : "border border-line"
              }`}
            >
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between gap-3">
                  <h2 className="font-display text-[26px] font-bold">{pack.name}</h2>
                  {dark && (
                    <span className="eyebrow rounded-full bg-mint px-2.5 py-1 text-[11px] text-ink">Recommandée</span>
                  )}
                </div>
                <p className={`text-[15px] leading-snug ${dark ? "text-on-dark" : "text-body"}`}>{pack.tagline}</p>
              </div>

              <div aria-live="polite">
                <p className="font-display text-[clamp(44px,5vw,60px)] font-[750] leading-none tracking-[-0.035em]">
                  {pack.fromPrefix && <span className="text-xl font-semibold tracking-normal">dès </span>}
                  {split ? monthly : total}
                </p>
                <p className={`mt-2 text-sm ${dark ? "text-on-dark" : "text-muted"}`}>
                  {split ? `soit ${total} au total` : `ou ${monthly} sans frais`}
                  {pack.fromPrefix && ", selon étude"}
                </p>
              </div>

              <Link
                href="/contact"
                className={`inline-flex min-h-[50px] items-center justify-center rounded-xl text-[15px] font-semibold transition-colors ${
                  dark ? "bg-mint font-bold text-ink hover:bg-[#5fe3bf]" : "border-[1.5px] border-ink text-ink hover:bg-ink hover:text-white"
                }`}
              >
                {pack.cta}
              </Link>

              <ul
                className={`flex flex-col gap-3 border-t pt-6 text-[15px] leading-snug ${
                  dark ? "border-white/14 text-[#E7E3EF]" : "border-[#EFEDF3] text-ink-2"
                }`}
              >
                {pack.features.map((f) => (
                  <li key={f} className="flex gap-2.5">
                    <CheckIcon className={`mt-0.5 h-[18px] w-[18px] ${dark ? "text-mint" : "text-emerald"}`} />
                    {f}
                  </li>
                ))}
              </ul>

              {pack.gifts && (
                <p className="rounded-[14px] bg-mint/10 px-4.5 py-4 text-sm leading-normal text-[#E3F5F0]">
                  <strong className="text-mint">Offerts :</strong> {pack.gifts}
                </p>
              )}
            </article>
          );
        })}
      </div>
    </>
  );
}
