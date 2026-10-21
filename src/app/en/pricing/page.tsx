import type { Metadata } from "next";
import PricingCardsEn from "@/components/PricingCardsEn";
import {
  ComparisonTableEn,
  DiagnosticBandEn,
  OptionsGridEn,
  SubscriptionsEn,
  TrustCharterEn,
} from "@/components/OfferEn";
import { MARKET_PRICES_EN, PRICING_FAQ_EN } from "@/data/site-en";
import { Container, Eyebrow, Faq } from "@/components/ui";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Pricing: Local Online Presence from €490",
  description:
    "Launch €490, Essential+ €990, Growth €1,490 (up to 8 pages, local SEO, 10 directories, Google Profile, card payments), Prestige from €2,900. UK and Australian prices on the page. 10-day guarantee or 20% back.",
  alternates: { canonical: "/en/pricing" },
};

export default function PricingPageEn() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: PRICING_FAQ_EN.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
        }}
      />
      <Container className="pb-20 pt-16 md:pt-24">
        <div className="mb-10 flex max-w-[900px] flex-col gap-6">
          <Eyebrow>Transparent Pricing</Eyebrow>
          <h1 className="font-display text-[clamp(40px,5.4vw,72px)] font-[750] leading-[1.02] tracking-[-0.035em]">
            Website, Google Maps &amp; WhatsApp Business. Fixed pricing.
          </h1>
          <p className="max-w-[640px] text-lg leading-relaxed text-body">
            Everything your trade needs to get found and contacted locally, ready in 10 working days, at a fixed price well below typical agency quotes.
          </p>
        </div>
        <PricingCardsEn />
        <div className="mt-14 flex flex-col gap-4">
          <h2 className="text-xl font-bold">Prices in your country</h2>
          <p className="max-w-[640px] text-[15px] leading-relaxed text-muted">
            Same packages everywhere. Prices above are for Ireland and the EU; UK and Australian businesses are quoted in their own currency.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-line">
            <table className="w-full min-w-[520px] text-left text-[15px]">
              <thead className="bg-mist">
                <tr>
                  <th className="px-4 py-3 font-semibold">Package</th>
                  <th className="px-4 py-3 font-semibold">Ireland &amp; EU</th>
                  <th className="px-4 py-3 font-semibold">United Kingdom</th>
                  <th className="px-4 py-3 font-semibold">Australia</th>
                </tr>
              </thead>
              <tbody>
                {MARKET_PRICES_EN.map((row) => (
                  <tr key={row.label} className="border-t border-line">
                    <td className="px-4 py-3 font-semibold">{row.label}</td>
                    <td className="px-4 py-3">{row.eur}</td>
                    <td className="px-4 py-3">{row.gbp}</td>
                    <td className="px-4 py-3">{row.aud}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Container>

      <section className="border-y border-line bg-mist">
        <Container className="py-20 md:py-24">
          <div className="mb-10 flex max-w-[760px] flex-col gap-4">
            <Eyebrow>Compare Packages</Eyebrow>
            <h2 className="h-display text-[clamp(30px,3.6vw,44px)]">Full Feature Breakdown</h2>
          </div>
          <ComparisonTableEn />
        </Container>
      </section>

      <Container className="py-20 md:py-24">
        <div className="mb-10 flex max-w-[760px] flex-col gap-4">
          <Eyebrow>Add-ons</Eyebrow>
          <h2 className="h-display text-[clamp(30px,3.6vw,44px)]">Custom Options à la carte</h2>
          <p className="text-[17px] leading-relaxed text-body">Select only what your business requires during your quote.</p>
        </div>
        <OptionsGridEn />
      </Container>

      <section className="border-y border-line bg-mist">
        <Container className="py-20 md:py-24">
          <div className="mb-10 flex max-w-[760px] flex-col gap-4">
            <Eyebrow>After Launch</Eyebrow>
            <h2 className="h-display text-[clamp(30px,3.6vw,44px)]">Flexible monthly maintenance. Zero lock-in.</h2>
          </div>
          <SubscriptionsEn />
        </Container>
      </section>

      <TrustCharterEn />

      <DiagnosticBandEn />

      <Container className="flex flex-wrap gap-12 py-20 md:py-30">
        <div className="flex flex-[1_1_340px] flex-col gap-5">
          <h2 className="h-display text-[clamp(30px,3.6vw,44px)]">How you pay</h2>
          <dl className="border-t border-line text-base">
            {[
              ["At kickoff (scope approval)", "50% deposit"],
              ["At final delivery (after your tests)", "50% balance"],
              ["Or split in 3 installments", "0% interest"],
              ["Accepted method", "International bank transfer (SWIFT / IBAN)"],
            ].map(([label, value]) => (
              <div key={label} className="flex justify-between gap-4 border-b border-line py-4.5">
                <dt>{label}</dt>
                <dd className="text-right font-bold">{value}</dd>
              </div>
            ))}
          </dl>
          <p className="text-sm leading-relaxed text-muted">
            Prices in euros for Ireland and the EU, excluding VAT. UK and Australian clients are quoted and invoiced in GBP and AUD (see the table above). Payment by international bank transfer.
          </p>
        </div>
        <div className="min-w-0 flex-[1.4_1_480px]">
          <Faq items={PRICING_FAQ_EN} />
        </div>
      </Container>
    </>
  );
}
