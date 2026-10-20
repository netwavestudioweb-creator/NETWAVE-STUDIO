import type { Metadata } from "next";
import Image from "next/image";
import { CONTACT } from "@/data/site-en";
import { ButtonLink, Container, Eyebrow } from "@/components/ui";

export const metadata: Metadata = {
  title: "About the Studio: Founder, Mission & Standards",
  description:
    "Founded in 2023 by DODO Albéric Mantey Adriano, full-stack engineer and network specialist. A single dedicated interlocutor from initial scope to final live launch.",
  alternates: { canonical: "/en/about" },
};

const VALUES_EN = [
  {
    title: "Radical Transparency",
    text: "Clear written quotes, fixed prices, and direct communication on what is delivered and when.",
  },
  {
    title: "Engineering-Grade Speed",
    text: "We build modern, lightweight static sites that load in under 1 second on 4G/5G mobile connections.",
  },
  {
    title: "Auditable Proofs",
    text: "Like the 75% load-time reduction verified on Google PageSpeed for Al Kareem, auditable by anyone.",
  },
  {
    title: "100% Client Ownership",
    text: "Your domain, code, Google profile, and WhatsApp data belong entirely to you. You walk away with everything.",
  },
];

export default function AboutPageEn() {
  return (
    <>
      <Container className="flex flex-col gap-7 pb-24 pt-16 md:pt-26">
        <Eyebrow>The Studio · Operating on GMT</Eyebrow>
        <h1 className="max-w-[1040px] font-display text-[clamp(36px,5vw,68px)] font-[750] leading-[1.05] tracking-[-0.035em]">
          Local businesses and trades deserve digital tools as fast and dependable as enterprise corporations.
        </h1>
      </Container>

      <section className="border-y border-line bg-mist">
        <Container className="flex flex-wrap items-center gap-14 py-24">
          <div className="relative min-w-0 flex-[0_1_420px]">
            <div aria-hidden="true" className="absolute -left-4.5 top-10 h-[380px] w-14 -skew-x-[22deg] bg-emerald-logo" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-line">
              <Image
                src="/dodi_portrait.webp"
                alt="Portrait of DODO Albéric Mantey Adriano, founder of NetWave Studio"
                fill
                sizes="(max-width: 768px) 100vw, 420px"
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex min-w-0 flex-[1_1_460px] flex-col gap-6">
            <Eyebrow>The Founder</Eyebrow>
            <h2 className="h-display text-[clamp(32px,3.8vw,48px)]">A single technical specialist from kickoff to deployment.</h2>
            <p className="text-lg leading-relaxed text-ink-2">
              NetWave Studio is led by <strong>DODO Albéric Mantey Adriano</strong>, network &amp; telecoms specialist and full-stack software engineer.
              No account managers, no junior delegating, no loss of context: the person who scopes your project is the one who designs, codes, and publishes it.
            </p>
            <ul className="flex flex-wrap gap-2.5">
              {["Full-Stack Engineering", "Local Search Optimization", "Direct WhatsApp Support"].map((tag) => (
                <li key={tag} className="rounded-full border border-line bg-white px-3.5 py-2 text-sm font-semibold">
                  {tag}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-x-7 gap-y-3">
              <a href={CONTACT.portfolio} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-4 hover:text-emerald">
                Personal Portfolio &rarr;
              </a>
              <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-4 hover:text-emerald">
                LinkedIn Profile &rarr;
              </a>
            </div>
          </div>
        </Container>
      </section>

      <Container className="py-20 md:py-30">
        <div className="mb-14 flex flex-col gap-4">
          <Eyebrow>Our Standards</Eyebrow>
          <h2 className="h-display text-[clamp(32px,4vw,52px)]">What you can hold us accountable to.</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t-2 border-ink">
          {VALUES_EN.map((v, i) => (
            <div key={v.title} className="flex flex-col gap-3 border-b border-line py-8 pr-8">
              <span className="font-display text-[40px] font-[750] tracking-[-0.03em] text-emerald-logo">0{i + 1}</span>
              <h3 className="font-display text-2xl font-bold">{v.title}</h3>
              <p className="text-base leading-relaxed text-body">{v.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}
