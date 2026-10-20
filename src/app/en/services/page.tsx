import type { Metadata } from "next";
import Link from "next/link";
import { FLAGSHIP_EN } from "@/data/site-en";
import { ButtonLink, CheckIcon, Container, Eyebrow, PriceTag } from "@/components/ui";

export const metadata: Metadata = {
  title: "Services: Website, Google Maps, Social & WhatsApp Setup",
  description:
    "Four core pillars of local business presence: high-speed mobile website, optimized Google Business Profile, WhatsApp Business catalogue and social media branding. Delivered in 10 working days.",
  alternates: { canonical: "/en/services" },
};

const SERVICES_EN = [
  {
    id: "web",
    title: "Websites for Local Trades",
    fromPrice: 299,
    tone: "emerald" as const,
    summary: "Restaurant, salon, retail, or clinic: a bespoke high-speed site in 10 days, or 20% refunded.",
    description:
      "The anchor of your digital reputation. Mobile-first, lighting-fast, with your own domain name and full ownership. Online menus and bookings for restaurants, product catalogues for shops, or appointment schedulers for clinics.",
    points: [
      "Bespoke mobile-first design, fast page load speeds",
      "Direct WhatsApp and Click-to-Call inquiry buttons",
      "Domain name in your name, cloud hosting & SSL certificate included",
      "Found on Google with local structured schema data",
    ],
  },
  {
    id: "google",
    title: "Google Maps & Local Search",
    fromPrice: null,
    tone: "violet" as const,
    summary: "Be the first option locals see when searching for your trade in your town.",
    description:
      "A site that nobody can find generates no revenue. We create or claim your Google Business Profile, optimize categories, opening hours and photos, and configure local business directories.",
    points: [
      "Google Business Profile created or fully audited and optimized",
      "Categories, services, geotagged photos & holiday hours configured",
      "Review collection strategy (QR codes & message templates)",
      "Monthly tracking: direction requests, phone calls and website visits",
    ],
  },
  {
    id: "whatsapp",
    title: "WhatsApp Business Integration",
    fromPrice: null,
    tone: "emerald" as const,
    summary: "Turn searchers into direct chats: verified profile, product catalogue and greeting flows.",
    description:
      "Modern customers prefer texting over making phone calls. We set up your WhatsApp Business with a structured catalogue of your services, instant greeting replies, and direct website click-to-chat.",
    points: [
      "WhatsApp Business app setup with trade catalogue",
      "Welcome greeting, away messages and quick replies",
      "Direct booking or order forwarding from the website",
      "Optional 24/7 AI conversational assistant",
    ],
  },
  {
    id: "maintenance",
    title: "Monthly Maintenance & SEO",
    fromPrice: 49,
    tone: "violet" as const,
    summary: "Keep your presence fresh, backed up, and actively growing on Google Maps. No contract.",
    description:
      "We stay in your corner after launch: cloud hosting renewals, automated backups, review responses, Google updates, and monthly performance reports. Same renewal rate in year 2, cancel anytime.",
    points: [
      "Hosting, domain renewals & daily backups handled",
      "Google profile monitoring and professional review replies",
      "Content updates and photo additions included monthly",
      "Transparent monthly report of calls, directions and clicks",
    ],
  },
];

export default function ServicesPageEn() {
  return (
    <>
      <section className="border-b border-line">
        <Container className="flex flex-wrap items-end justify-between gap-10 pb-16 pt-16 md:pt-24">
          <div className="flex min-w-0 flex-[1_1_600px] flex-col gap-6">
            <Eyebrow>Services</Eyebrow>
            <h1 className="font-display text-[clamp(40px,5.4vw,72px)] font-[750] leading-[1.02] tracking-[-0.035em]">
              Get found, then get contacted. All in one place.
            </h1>
          </div>
          <p className="flex-[0_1_380px] text-lg leading-relaxed text-body">
            Website, Google Business Profile, social media, and WhatsApp Business: the four pillars of modern local trade presence, delivered under one roof.
          </p>
        </Container>
      </section>

      <Container className="pt-10">
        {SERVICES_EN.map((s, i) => {
          const accent = s.tone === "emerald" ? "text-emerald-logo" : "text-violet";
          const check = s.tone === "emerald" ? "text-emerald" : "text-violet";
          return (
            <article
              key={s.id}
              id={s.id}
              className="flex scroll-mt-24 flex-wrap gap-x-16 gap-y-8 border-b border-line py-16 last:border-b-0"
            >
              <p className={`flex-[0_1_120px] font-display text-7xl font-[750] leading-none tracking-[-0.04em] ${accent}`}>
                0{i + 1}
              </p>
              <div className="flex min-w-0 flex-[1_1_420px] flex-col gap-4.5">
                <div className="flex flex-wrap items-center gap-3.5">
                  <h2 className="font-display text-4xl font-bold tracking-[-0.025em]">{s.title}</h2>
                  {s.fromPrice && <PriceTag price={s.fromPrice} tone={s.tone} />}
                </div>
                <p className="max-w-[560px] text-[17px] leading-relaxed text-body">{s.description}</p>
                <Link
                  href="/en/pricing"
                  className="font-semibold text-emerald underline underline-offset-4 hover:text-emerald-hover"
                >
                  View packages for this service &rarr;
                </Link>
              </div>
              <ul className="flex flex-[1_1_320px] flex-col gap-3.5 text-base text-ink-2">
                {s.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <CheckIcon className={`mt-0.5 h-5 w-5 ${check}`} />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </Container>
    </>
  );
}
