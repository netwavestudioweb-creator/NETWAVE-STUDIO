import Link from "next/link";
import {
  COMBO_EN,
  DIAGNOSTIC_EN,
  MAIN_PACKS_EN,
  OPTIONS_EN,
  PACK_COMPARISON_EN,
  SUBSCRIPTIONS_EN,
  TRUST_CHARTER_EN,
  formatGbp,
} from "@/data/site-en";
import { ArrowIcon, ButtonLink, CheckIcon, Container, Eyebrow } from "@/components/ui";

export function DiagnosticBandEn() {
  return (
    <section className="px-4 sm:px-6">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-8 rounded-[32px] bg-ink px-7 py-12 text-white sm:px-14">
        <div className="flex min-w-0 max-w-[640px] flex-col gap-4">
          <Eyebrow tone="mint">100% Free · No Commitment</Eyebrow>
          <h2 className="h-display text-[clamp(30px,3.8vw,46px)]">{DIAGNOSTIC_EN.title}</h2>
          <ul className="flex flex-col gap-2.5 text-base text-on-dark">
            {DIAGNOSTIC_EN.points.map((p) => (
              <li key={p} className="flex gap-3">
                <CheckIcon className="mt-1 h-[18px] w-[18px] text-mint" />
                {p}
              </li>
            ))}
          </ul>
        </div>
        <ButtonLink href={DIAGNOSTIC_EN.href} variant="mint">
          {DIAGNOSTIC_EN.cta} <ArrowIcon />
        </ButtonLink>
      </div>
    </section>
  );
}

export function TrustCharterEn() {
  return (
    <Container className="py-20 md:py-28">
      <div className="mb-12 flex max-w-[760px] flex-col gap-4">
        <Eyebrow>Our Trust Charter</Eyebrow>
        <h2 className="h-display text-[clamp(32px,4vw,52px)]">Six written commitments, so you never get taken advantage of.</h2>
      </div>
      <ul className="grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        {TRUST_CHARTER_EN.map((t, i) => (
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

export function ComparisonTableEn() {
  const cell = (v: string | boolean) =>
    v === true ? (
      <CheckIcon className="mx-auto h-5 w-5 text-emerald" />
    ) : v === false ? (
      <span className="text-faint" aria-label="Not included">—</span>
    ) : (
      v
    );
  return (
    <div className="overflow-x-auto rounded-3xl border border-line">
      <table className="w-full min-w-[640px] border-collapse text-left text-[15px]">
        <caption className="sr-only">Comparison of Launch, Essential+ and Growth packages</caption>
        <thead>
          <tr className="bg-mist">
            <th scope="col" className="px-5 py-4 font-semibold text-muted">Included</th>
            {MAIN_PACKS_EN.map((p) => (
              <th key={p.id} scope="col" className={`px-5 py-4 text-center ${p.featured ? "bg-ink text-white" : ""}`}>
                <span className="block font-display text-lg font-bold">{p.name}</span>
                <span className={`block text-sm ${p.featured ? "text-mint" : "text-muted"}`}>{formatGbp(p.price)}</span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {PACK_COMPARISON_EN.map((row) => (
            <tr key={row.label} className="border-t border-line">
              <th scope="row" className="px-5 py-3.5 font-medium text-ink-2">{row.label}</th>
              {row.values.map((v, i) => (
                <td key={i} className={`px-5 py-3.5 text-center ${MAIN_PACKS_EN[i].featured ? "bg-emerald-soft/60 font-semibold" : ""}`}>
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

export function OptionsGridEn() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {OPTIONS_EN.map((o) => (
        <article key={o.name} className="flex flex-col justify-between gap-4 rounded-2xl border border-line p-6">
          <div className="flex flex-col gap-1.5">
            <div className="flex items-baseline justify-between gap-3">
              <h3 className="font-display text-lg font-bold">{o.name}</h3>
              <span className="font-mono text-base font-bold text-emerald">{formatGbp(o.price)}</span>
            </div>
            <p className="text-sm text-body">{o.note}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

export function SubscriptionsEn() {
  return (
    <div className="flex flex-col gap-10">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {SUBSCRIPTIONS_EN.map((s) => (
          <article key={s.name} className="flex flex-col gap-6 rounded-3xl border border-line bg-white p-8">
            <div className="flex flex-col gap-2">
              <h3 className="font-display text-2xl font-bold">{s.name}</h3>
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <span className="font-display text-4xl font-[750]">{formatGbp(s.monthly)}</span>
                <span className="text-sm text-muted">/ month, cancel anytime</span>
                <span className="text-sm font-semibold text-emerald">or {formatGbp(s.yearly)} / year (2 months free)</span>
              </div>
            </div>
            <ul className="flex flex-col gap-3 border-t border-line pt-6 text-[15px]">
              {s.features.map((f) => (
                <li key={f} className="flex gap-2.5">
                  <CheckIcon className="mt-0.5 h-4.5 w-4.5 text-emerald" />
                  {f}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-6 rounded-2xl border border-line bg-white p-6 sm:p-8">
        <div className="flex flex-col gap-1">
          <p className="eyebrow text-emerald">Special Combo Offer</p>
          <h3 className="font-display text-xl font-bold">{COMBO_EN.name}</h3>
          <p className="text-sm text-muted">
            Growth Package + 3 months of Visibility maintenance:{" "}
            <del className="text-faint">{formatGbp(COMBO_EN.regular)}</del>{" "}
            <strong className="text-ink">{formatGbp(COMBO_EN.price)}</strong> (save {formatGbp(COMBO_EN.regular - COMBO_EN.price)}).
          </p>
        </div>
        <ButtonLink href="/en/contact">Claim This Offer</ButtonLink>
      </div>
    </div>
  );
}
