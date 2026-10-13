import type { Metadata } from "next";
import Image from "next/image";
import { CONTACT } from "@/data/site";
import { ButtonLink, Container, Eyebrow } from "@/components/ui";

export const metadata: Metadata = {
  title: "Le studio : fondateur, histoire et engagements",
  description:
    "NetWave Studio, fondé en 2023 à Cotonou par DODO Albéric Mantey Adriano, technicien réseaux & télécoms et développeur full-stack. Un seul interlocuteur du cadrage à la livraison.",
  alternates: { canonical: "/a-propos" },
};

const VALUES = [
  {
    title: "Transparence",
    text: "Des devis clairs, et une communication honnête sur ce qui est livré et ce qui reste à faire.",
  },
  {
    title: "Double expertise",
    text: "Réseau et développement dans la même tête : rare sur le marché local, précieux pour vos projets.",
  },
  {
    title: "Des chiffres, pas des promesses",
    text: "Comme les −75 % de temps de chargement mesurés sur Al Kareem, vérifiables par tous.",
  },
  {
    title: "Conçu pour le terrain",
    text: "Des solutions adaptées à vos conditions réelles d'usage, jamais des modèles génériques.",
  },
];

export default function StudioPage() {
  return (
    <>
      <Container className="flex flex-col gap-7 pb-24 pt-16 md:pt-26">
        <Eyebrow>Le studio · Cotonou, depuis 2023</Eyebrow>
        <h1 className="max-w-[1040px] font-display text-[clamp(36px,5vw,68px)] font-[750] leading-[1.05] tracking-[-0.035em]">
          Les entreprises africaines méritent des outils aussi solides que ceux des grandes agences.{" "}
          <span className="text-faint">Pensés pour le réseau mobile, le Mobile Money et la réalité du terrain.</span>
        </h1>
      </Container>

      <section className="border-y border-line bg-mist">
        <Container className="flex flex-wrap items-center gap-14 py-24">
          <div className="relative min-w-0 flex-[0_1_420px]">
            <div aria-hidden="true" className="absolute -left-4.5 top-10 h-[380px] w-14 -skew-x-[22deg] bg-emerald-logo" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-line">
              <Image
                src="/dodi_portrait.webp"
                alt="Portrait de DODO Albéric Mantey Adriano, fondateur de NetWave Studio"
                fill
                sizes="(max-width: 768px) 100vw, 420px"
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex min-w-0 flex-[1_1_460px] flex-col gap-6">
            <Eyebrow>Le fondateur</Eyebrow>
            <h2 className="h-display text-[clamp(32px,3.8vw,48px)]">Un seul interlocuteur, du premier échange à la livraison.</h2>
            <p className="text-lg leading-relaxed text-ink-2">
              NetWave Studio est porté par <strong>DODO Albéric Mantey Adriano</strong>, technicien réseaux &amp;
              télécoms et développeur full-stack. Pas de transfert de dossier, pas d&apos;information perdue en
              route : la personne qui cadre votre projet est celle qui le code et le met en ligne.
            </p>
            <ul className="flex flex-wrap gap-2.5">
              {["Réseaux & télécoms", "Développement full-stack", "Basé à Cotonou"].map((tag) => (
                <li key={tag} className="rounded-full border border-line bg-white px-3.5 py-2 text-sm font-semibold">
                  {tag}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-x-7 gap-y-3">
              <a href={CONTACT.portfolio} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-4 hover:text-emerald">
                Portfolio personnel ↗
              </a>
              <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-4 hover:text-emerald">
                LinkedIn ↗
              </a>
            </div>
          </div>
        </Container>
      </section>

      <Container className="py-20 md:py-30">
        <div className="mb-14 flex flex-col gap-4">
          <Eyebrow>Nos engagements</Eyebrow>
          <h2 className="h-display text-[clamp(32px,4vw,52px)]">Ce sur quoi vous pouvez nous juger.</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t-2 border-ink">
          {VALUES.map((v, i) => (
            <div key={v.title} className="flex flex-col gap-3 border-b border-line py-8 pr-8">
              <span className="font-display text-[40px] font-[750] tracking-[-0.03em] text-emerald-logo">0{i + 1}</span>
              <h3 className="font-display text-2xl font-bold">{v.title}</h3>
              <p className="text-base leading-relaxed text-body">{v.text}</p>
            </div>
          ))}
        </div>
      </Container>

      <section className="px-4 pb-20 sm:px-6 md:pb-30">
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-8 rounded-[32px] bg-ink px-7 py-14 text-white sm:px-14 sm:py-18">
          <div className="flex max-w-[640px] flex-col gap-3.5">
            <h2 className="h-display text-[clamp(32px,4vw,52px)]">Envie de travailler ensemble ?</h2>
            <p className="text-lg leading-relaxed text-on-dark">
              Parlez-nous de vos défis et de vos ambitions. Réponse sous 24 h ouvrées.
            </p>
          </div>
          <ButtonLink href="/contact" variant="mint">
            Prendre contact
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
