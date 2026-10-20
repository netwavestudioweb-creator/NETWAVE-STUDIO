import type { Metadata } from "next";
import Link from "next/link";
import {
  CONTACT,
  FLAGSHIP_EN,
  HOME_FAQ_EN,
  MAIN_PACKS_EN,
  PRESTIGE_EN,
  DIAGNOSTIC_EN,
  formatGbp,
} from "@/data/site-en";
import { ALKAREEM, PROJECTS } from "@/data/site";
import { SECTORS } from "@/data/sectors";
import { DiagnosticBandEn, TrustCharterEn } from "@/components/OfferEn";
import JsonLd from "@/components/JsonLd";
import {
  ArrowIcon,
  ButtonLink,
  CheckIcon,
  Container,
  Eyebrow,
  Faq,
  PhoneFrame,
  PriceTag,
  Stripes,
} from "@/components/ui";

export const metadata: Metadata = {
  title: { absolute: "NetWave Studio — Found on Google, Contacted on WhatsApp in 10 Days" },
  description:
    "We deliver a complete online presence for local businesses in 10 working days, or 20% refunded. Website, Google Business Profile, WhatsApp Business & social setup. Fixed pricing from £299.",
  alternates: { canonical: "/en" },
};

export default function EnglishHomePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: HOME_FAQ_EN.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
        }}
      />
      {/* HERO */}
      <section className="border-b border-line">
        <Container className="flex flex-wrap items-center gap-14 py-16 md:py-24">
          <div className="flex min-w-0 flex-[1_1_520px] flex-col gap-7">
            <Eyebrow className="flex items-start gap-2.5">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-emerald-logo" aria-hidden="true" />
              Online Presence · Built for Local Businesses & Trades
            </Eyebrow>
            <h1 className="font-display text-[clamp(40px,5.6vw,76px)] font-[750] leading-[1.02] tracking-[-0.035em]">
              Found on Google, contacted on WhatsApp.{" "}
              <span className="text-emerald">
                In {FLAGSHIP_EN.days} days, or {FLAGSHIP_EN.refundPercent}% refunded.
              </span>
            </h1>
            <p className="max-w-[560px] text-lg leading-relaxed text-body sm:text-[19px]">
              {FLAGSHIP_EN.promise}
            </p>
            <div className="flex flex-wrap items-end gap-x-6 gap-y-2">
              <p className="font-display text-[56px] font-[750] leading-none tracking-[-0.035em]">
                <span className="text-xl font-semibold tracking-normal">from </span>
                {formatGbp(FLAGSHIP_EN.fromPrice)}
              </p>
              <p className="pb-1.5 text-base text-muted">Fixed price, split in 3 installments interest-free</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/en/contact">
                Claim My Slot <ArrowIcon />
              </ButtonLink>
              <ButtonLink href="/en/pricing" variant="secondary">
                View Packages & Pricing
              </ButtonLink>
            </div>
          </div>

          <div className="relative min-w-0 flex-[1_1_420px]">
            <div className="relative aspect-[16/11] overflow-hidden rounded-[28px] bg-mist">
              <img
                src={PROJECTS[0].image}
                alt={`Website for ${PROJECTS[0].title}, designed by NetWave Studio`}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 right-4 hidden sm:block">
              <PhoneFrame
                src={ALKAREEM.screens.home}
                alt={`Mobile store designed by NetWave Studio`}
                className="w-[150px] border-[6px]"
                sizes="150px"
              />
            </div>
            <p className="mt-4 text-sm text-muted sm:pr-44">
              Real deliveries: restaurant &amp; bar ({PROJECTS[0].title}), mobile boutique ({ALKAREEM.name}).
            </p>
          </div>
        </Container>
      </section>

      {/* THREE VALUE PROPS */}
      <Container className="py-20 md:py-28">
        <div className="mb-14 flex max-w-[760px] flex-col gap-4">
          <Eyebrow>Why NetWave Studio</Eyebrow>
          <h2 className="h-display text-[clamp(32px,4vw,52px)]">Everything you need to turn searches into paying customers.</h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col gap-3 border-t-2 border-ink pt-6">
            <span className="font-mono text-sm font-bold text-emerald">01 · Google &amp; Maps</span>
            <h3 className="font-display text-2xl font-bold">Show up first locally</h3>
            <p className="text-[15px] leading-relaxed text-body">
              When someone searches your trade and town, your Google profile, reviews, and high-speed website appear front and center.
            </p>
          </div>
          <div className="flex flex-col gap-3 border-t-2 border-ink pt-6">
            <span className="font-mono text-sm font-bold text-emerald">02 · Instant WhatsApp</span>
            <h3 className="font-display text-2xl font-bold">Frictionless contact</h3>
            <p className="text-[15px] leading-relaxed text-body">
              No endless phone tags. Customers tap direct to your WhatsApp Business with pre-filled inquiries, bookings, or menu orders.
            </p>
          </div>
          <div className="flex flex-col gap-3 border-t-2 border-ink pt-6">
            <span className="font-mono text-sm font-bold text-emerald">03 · 10-Day Guarantee</span>
            <h3 className="font-display text-2xl font-bold">In writing or 20% back</h3>
            <p className="text-[15px] leading-relaxed text-body">
              No months of ghosting or excuses. We lock a completion date before starting. If we are late, you get a 20% refund automatically.
            </p>
          </div>
        </div>
      </Container>

      {/* PACKS OVERVIEW */}
      <section className="border-y border-line bg-mist">
        <Container className="py-20 md:py-28">
          <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
            <div className="flex max-w-[680px] flex-col gap-4">
              <Eyebrow>Clear Packages</Eyebrow>
              <h2 className="h-display text-[clamp(32px,4vw,52px)]">Turnkey setups tailored to your stage.</h2>
            </div>
            <ButtonLink href="/en/pricing" variant="secondary">
              See full comparison &rarr;
            </ButtonLink>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {MAIN_PACKS_EN.map((pack) => (
              <div
                key={pack.id}
                className={`flex flex-col gap-6 rounded-3xl p-8 ${
                  pack.featured ? "bg-ink text-white shadow-xl" : "border border-line bg-white"
                }`}
              >
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-2xl font-bold">{pack.name}</h3>
                    {pack.featured && <span className="eyebrow rounded-full bg-mint px-2.5 py-1 text-[11px] text-ink">Most Popular</span>}
                  </div>
                  <p className={`text-sm ${pack.featured ? "text-on-dark" : "text-body"}`}>{pack.tagline}</p>
                </div>
                <div>
                  <p className="font-display text-5xl font-[750]">{formatGbp(pack.price)}</p>
                  <p className={`mt-1 text-sm ${pack.featured ? "text-on-dark" : "text-muted"}`}>
                    or 3 × {formatGbp(pack.installment)} interest-free
                  </p>
                </div>
                <ul className="flex flex-col gap-2.5 text-sm">
                  {pack.features.slice(0, 5).map((f) => (
                    <li key={f} className="flex gap-2.5">
                      <CheckIcon className={`mt-0.5 h-4 w-4 shrink-0 ${pack.featured ? "text-mint" : "text-emerald"}`} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/en/contact"
                  className={`mt-auto inline-flex min-h-[46px] items-center justify-center rounded-xl text-sm font-semibold transition-colors ${
                    pack.featured ? "bg-mint font-bold text-ink hover:bg-[#5fe3bf]" : "border border-ink text-ink hover:bg-ink hover:text-white"
                  }`}
                >
                  {pack.cta}
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* TRUST CHARTER */}
      <TrustCharterEn />

      {/* FREE AUDIT BAND */}
      <DiagnosticBandEn />

      {/* FAQ */}
      <Container className="py-20 md:py-28">
        <div className="mb-12 flex max-w-[700px] flex-col gap-4">
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="h-display text-[clamp(32px,4vw,48px)]">Common Questions</h2>
        </div>
        <div className="max-w-[880px]">
          <Faq items={HOME_FAQ_EN} />
        </div>
      </Container>
    </>
  );
}
