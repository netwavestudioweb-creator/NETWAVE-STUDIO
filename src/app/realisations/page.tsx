import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ALKAREEM, PROJECTS } from "@/data/site";
import { ButtonLink, Container, Eyebrow, PhoneFrame } from "@/components/ui";

export const metadata: Metadata = {
  title: "Réalisations : étude de cas Al Kareem & projets",
  description:
    "Étude de cas Al Kareem Parfumerie : score PageSpeed mobile de 68 à 90+, temps de chargement −75 %. Découvrez aussi nos sites pour la restauration et l'hôtellerie.",
  alternates: { canonical: "/realisations" },
};

const STORY = [
  {
    title: "Le problème",
    text: "L'ancienne boutique mettait trop de temps à s'afficher en 3G/4G. Une partie des visiteurs repartait avant de voir le catalogue.",
  },
  {
    title: "Ce que nous avons fait",
    text: "Refonte sur mesure : recherche, filtres par catégorie, navigation en bas d'écran, ajout au panier toujours visible, commande WhatsApp et paiement à la livraison.",
  },
  {
    title: "Le résultat",
    text: "Une boutique qui s'affiche vite même sur un réseau faible, et un score que chacun peut vérifier en un clic.",
  },
];

const SCREENS = [
  { src: ALKAREEM.screens.home, alt: "Accueil mobile Al Kareem", caption: "01 · Accueil", offset: false },
  { src: ALKAREEM.screens.product, alt: "Fiche produit Al Kareem", caption: "02 · Fiche produit & panier", offset: true },
  { src: ALKAREEM.screens.shop, alt: "Boutique Al Kareem avec filtres", caption: "03 · Boutique & filtres", offset: false },
];

export default function RealisationsPage() {
  return (
    <>
      <Container className="flex flex-col gap-6 pb-16 pt-16 md:pt-24">
        <Eyebrow>Réalisations</Eyebrow>
        <h1 className="max-w-[940px] font-display text-[clamp(40px,5.4vw,72px)] font-[750] leading-[1.02] tracking-[-0.035em]">
          Des projets en ligne, des résultats que vous pouvez vérifier.
        </h1>
        <p className="max-w-[620px] text-lg leading-relaxed text-body">
          Chaque chiffre affiché ici est mesurable publiquement. Pas de captures retouchées, pas de pourcentages
          inventés.
        </p>
      </Container>

      <section className="bg-ink text-white">
        <Container className="flex flex-col gap-16 py-20 md:py-24">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <div className="flex min-w-0 flex-[1_1_560px] flex-col gap-4.5">
              <div className="flex flex-wrap gap-2">
                <span className="eyebrow rounded-full bg-mint/14 px-3 py-1.5 text-mint">Étude de cas</span>
                <span className="eyebrow rounded-full border border-white/20 px-3 py-1.5 text-on-dark">
                  E-commerce · Cotonou
                </span>
              </div>
              <h2 className="h-display text-[clamp(36px,4.6vw,60px)]">{ALKAREEM.name}</h2>
              <p className="max-w-[620px] text-lg leading-relaxed text-on-dark">
                Une boutique de parfums dont les clients achètent surtout depuis leur téléphone, souvent sur un
                réseau mobile instable.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href={ALKAREEM.url} variant="mint" size="md" className="min-h-[50px]">
                Voir le site ↗
              </ButtonLink>
              <ButtonLink href={ALKAREEM.pageSpeedUrl} variant="outline-light" size="md" className="min-h-[50px]">
                Tester sur PageSpeed ↗
              </ButtonLink>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="border-t-2 border-mint pt-5">
              <p className="font-display text-[56px] font-[750] tracking-[-0.035em] text-mint">
                {ALKAREEM.scoreBefore} → {ALKAREEM.scoreAfter}
              </p>
              <p className="mt-1 text-[15px] text-on-dark">Score PageSpeed mobile, fourchette sur plusieurs mesures</p>
            </div>
            <div className="border-t-2 border-mint pt-5">
              <p className="font-display text-[56px] font-[750] tracking-[-0.035em] text-mint">{ALKAREEM.loadGain}</p>
              <p className="mt-1 text-[15px] text-on-dark">Temps de réponse du serveur (TTFB)</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-12">
            {STORY.map((s) => (
              <div key={s.title} className="flex flex-[1_1_300px] flex-col gap-3">
                <h3 className="eyebrow text-[13px] text-mint">{s.title}</h3>
                <p className="text-base leading-relaxed text-on-dark">{s.text}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-start justify-center gap-6 pt-4">
            {SCREENS.map((screen) => (
              <figure key={screen.caption} className={`flex flex-col items-center gap-3.5 ${screen.offset ? "md:mt-12" : ""}`}>
                <PhoneFrame src={screen.src} alt={screen.alt} className="w-[250px]" />
                <figcaption className="font-mono text-xs text-on-dark">{screen.caption}</figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </section>

      <Container className="py-20 md:py-30">
        <div className="mb-12 flex flex-col gap-4">
          <Eyebrow>Autres projets</Eyebrow>
          <h2 className="h-display text-[clamp(32px,4vw,48px)]">Restauration &amp; hôtellerie</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {PROJECTS.map((p) => (
            <a key={p.title} href={p.url} target="_blank" rel="noopener noreferrer" className="group flex flex-col gap-4.5">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[18px] bg-mist">
                <Image
                  src={p.image}
                  alt={p.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 380px"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-col gap-2">
                <p className="eyebrow text-faint">{p.category}</p>
                <h3 className="font-display text-[26px] font-bold tracking-[-0.02em] group-hover:text-emerald">{p.title} ↗</h3>
                <p className="text-[15px] leading-relaxed text-body">{p.description}</p>
              </div>
            </a>
          ))}
          <Link
            href="/contact"
            className="flex min-h-[360px] flex-col justify-between gap-6 rounded-[18px] border-[1.5px] border-dashed border-[#C9C3D6] p-9 hover:border-emerald"
          >
            <span className="eyebrow text-emerald">Prochain projet</span>
            <span className="h-display text-4xl">Votre entreprise ici ?</span>
            <span className="font-semibold text-emerald">Soumettre votre projet →</span>
          </Link>
        </div>
      </Container>
    </>
  );
}
