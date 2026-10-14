import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ALKAREEM, FLAGSHIP, MAIN_PACKS, PAYMENT_METHODS, PROJECTS, formatEur } from "@/data/site";
import { SECTORS } from "@/data/sectors";
import { ArrowIcon, ButtonLink, CheckIcon, Container, Eyebrow, Faq, PhoneFrame } from "@/components/ui";

export const metadata: Metadata = {
  title: `Votre site web en 10 jours, dès ${formatEur(FLAGSHIP.fromPrice)}`,
  description:
    "Un site professionnel en 10 jours ouvrés pour votre restaurant, commerce, cabinet ou entreprise, ou 20 % remboursés. Moins cher qu’une agence, aussi efficace. Dès 199 €, logo et affiche inclus, payable dans votre monnaie.",
  alternates: { canonical: FLAGSHIP.href },
};

const ELIGIBLE = MAIN_PACKS;

const FAQ = [
  {
    q: "Pourquoi êtes-vous moins cher qu'une agence ?",
    a: "Parce que vous ne payez ni locaux, ni commerciaux, ni intermédiaires : vous travaillez directement avec celui qui construit votre site, avec une méthode rodée. Le prix baisse, pas la qualité : chaque site est mesuré sur PageSpeed à la livraison.",
  },
  {
    q: "Que dois-je fournir pour démarrer ?",
    a: "Votre logo (ou nous en créons un simple), quelques photos et les informations de votre activité : menu, produits, services ou réalisations. Une liste envoyée sur WhatsApp suffit.",
  },
  {
    q: "Je ne suis pas au Bénin : comment ça se passe ?",
    a: "Tout se fait à distance, quel que soit votre pays : un appel visio ou WhatsApp pour démarrer, un lien privé pour suivre l'avancement, et le paiement par carte, virement international ou Mobile Money.",
  },
  {
    q: "Et après les 10 jours ?",
    a: "30 jours de garantie pour tout réajustement, puis, si vous le souhaitez, une formule de maintenance pour les mises à jour et les modifications.",
  },
];

export default function FlagshipPage() {
  const restaurant = PROJECTS[0];

  return (
    <>
      {/* HERO */}
      <section className="border-b border-line">
        <Container className="flex flex-wrap items-center gap-14 py-16 md:py-24">
          <div className="flex min-w-0 flex-[1_1_520px] flex-col gap-7">
            <Eyebrow>Offre phare · Tous les métiers, partout dans le monde</Eyebrow>
            <h1 className="font-display text-[clamp(40px,5.4vw,72px)] font-[750] leading-[1.02] tracking-[-0.035em]">
              Votre site web en {FLAGSHIP.days} jours.{" "}
              <span className="text-emerald">Ou {FLAGSHIP.refundPercent} % remboursés.</span>
            </h1>
            <p className="max-w-[560px] text-lg leading-relaxed text-body sm:text-[19px]">{FLAGSHIP.promise}</p>
            <div className="flex flex-wrap items-end gap-x-6 gap-y-2">
              <p className="font-display text-[56px] font-[750] leading-none tracking-[-0.035em]">
                <span className="text-xl font-semibold tracking-normal">dès </span>
                {formatEur(FLAGSHIP.fromPrice)}
              </p>
              <p className="pb-1.5 text-base text-muted">payable en 3 fois et dans votre monnaie</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact">
                Réserver mon créneau <ArrowIcon />
              </ButtonLink>
              <ButtonLink href="#conditions" variant="secondary">
                Lire la garantie
              </ButtonLink>
            </div>
          </div>

          <div className="relative min-w-0 flex-[1_1_420px]">
            <div className="relative aspect-[16/11] overflow-hidden rounded-[28px] bg-mist">
              <Image
                src={restaurant.image}
                alt={`Site du restaurant ${restaurant.title}, réalisé par NetWave Studio`}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 560px"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-8 right-4 hidden sm:block">
              <PhoneFrame
                src={ALKAREEM.screens.home}
                alt={`Site mobile ${ALKAREEM.name}, réalisé par NetWave Studio`}
                className="w-[150px] border-[6px]"
                sizes="150px"
              />
            </div>
            <p className="mt-4 text-sm text-muted sm:pr-44">
              Exemples livrés : un restaurant ({restaurant.title}) et une parfumerie ({ALKAREEM.name}).
            </p>
          </div>
        </Container>
      </section>

      {/* PAR MÉTIER */}
      <Container className="py-20 md:py-28" id="metiers">
        <div className="mb-12 flex max-w-[720px] flex-col gap-4">
          <Eyebrow>Votre métier</Eyebrow>
          <h2 className="h-display text-[clamp(32px,4vw,52px)]">Un site adapté à votre métier, pas un modèle générique.</h2>
          <p className="text-[17px] leading-relaxed text-body">
            Choisissez votre activité : pages livrées, outils inclus et formules détaillées.
          </p>
        </div>
        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SECTORS.map((s) => (
            <li key={s.slug}>
              <Link
                href={`/sites-web/${s.slug}`}
                className="group flex h-full flex-col gap-3 rounded-[20px] border border-line p-7 transition-colors hover:border-emerald"
              >
                <h3 className="font-display text-xl font-bold group-hover:text-emerald">{s.name}</h3>
                <p className="text-[15px] leading-relaxed text-body">{s.short}</p>
                <span className="mt-auto pt-2 text-sm font-semibold text-emerald">Voir l&apos;offre →</span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-16 flex flex-col gap-6">
          <h3 className="font-display text-2xl font-bold">Inclus dans chaque site</h3>
          <ul className="grid grid-cols-1 gap-x-10 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
            {FLAGSHIP.included.map((item) => (
              <li key={item} className="flex gap-3 border-t border-line pt-4 text-base text-ink-2">
                <CheckIcon className="mt-0.5 h-5 w-5 text-emerald" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Container>

      {/* PRIX */}
      <section className="border-y border-line bg-mist">
        <Container className="flex flex-col gap-12 py-20 md:py-28">
          <div className="flex flex-wrap gap-x-14 gap-y-6">
            <div className="flex min-w-0 flex-[1_1_380px] flex-col gap-5">
              <Eyebrow>Le prix</Eyebrow>
              <h2 className="h-display text-[clamp(32px,4vw,48px)]">Moins cher qu&apos;une agence. Aussi efficace.</h2>
            </div>
            <ul className="flex min-w-0 flex-[1.3_1_480px] flex-col gap-5">
              {FLAGSHIP.whyCheaper.map((r) => (
                <li key={r.title} className="flex flex-col gap-1">
                  <strong className="text-lg">{r.title}</strong>
                  <span className="text-base leading-relaxed text-body">{r.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {ELIGIBLE.map((pack) => (
              <div
                key={pack.id}
                className={`flex flex-col gap-3 rounded-3xl p-8 ${pack.featured ? "bg-ink text-white" : "border border-line bg-white"}`}
              >
                <span className="flex items-center justify-between gap-3">
                  <span className="font-display text-[22px] font-bold">{pack.name}</span>
                  {pack.featured && <span className="eyebrow rounded-full bg-mint px-2.5 py-1 text-[11px] text-ink">Recommandée</span>}
                </span>
                <span className={`text-[15px] ${pack.featured ? "text-on-dark" : "text-body"}`}>{pack.tagline}</span>
                <span className="font-display text-5xl font-[750] tracking-[-0.03em]">{formatEur(pack.price)}</span>
                <span className={`text-sm ${pack.featured ? "text-on-dark" : "text-muted"}`}>
                  ou 3 × {formatEur(pack.installment)} sans frais
                </span>
              </div>
            ))}
          </div>
          <ButtonLink href="/tarifs" variant="secondary" size="md" className="self-start">
            Comparer le détail des formules
          </ButtonLink>
        </Container>
      </section>

      {/* CALENDRIER */}
      <section className="bg-ink text-white">
        <Container className="py-20 md:py-28">
          <div className="mb-14 flex max-w-[760px] flex-col gap-4">
            <Eyebrow tone="mint">Le calendrier</Eyebrow>
            <h2 className="h-display text-[clamp(32px,4vw,52px)]">Dix jours ouvrés, étape par étape.</h2>
          </div>
          <ol className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {FLAGSHIP.timeline.map((step) => (
              <li key={step.day} className="flex flex-col gap-3 rounded-[20px] border border-white/16 p-6">
                <span className="font-display text-3xl font-[750] tracking-[-0.03em] text-mint">{step.day}</span>
                <h3 className="text-lg font-bold">{step.title}</h3>
                <p className="text-[15px] leading-relaxed text-on-dark">{step.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* GARANTIE */}
      <Container className="flex scroll-mt-24 flex-wrap gap-12 py-20 md:py-28" id="conditions">
        <div className="flex flex-[1_1_340px] flex-col gap-5">
          <Eyebrow>La garantie</Eyebrow>
          <h2 className="h-display text-[clamp(32px,4vw,48px)]">
            {FLAGSHIP.days} jours ouvrés, ou {FLAGSHIP.refundPercent} % du prix remboursés.
          </h2>
          <p className="text-base leading-relaxed text-body">
            Nous fixons la date de livraison par écrit avant de commencer. Si nous la dépassons, vous êtes remboursé,
            sans discussion.
          </p>
          <ul className="mt-2 flex flex-col gap-2 text-sm text-muted">
            {PAYMENT_METHODS.map((m) => (
              <li key={m} className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4 text-emerald" />
                {m}
              </li>
            ))}
          </ul>
        </div>
        <ol className="flex min-w-0 flex-[1.3_1_480px] flex-col border-t border-line">
          {FLAGSHIP.conditions.map((condition, i) => (
            <li key={condition} className="flex gap-5 border-b border-line py-6 text-base leading-relaxed text-ink-2">
              <span className="font-mono text-sm font-semibold text-emerald">0{i + 1}</span>
              {condition}
            </li>
          ))}
        </ol>
      </Container>

      {/* FAQ */}
      <section className="border-t border-line">
        <Container className="flex flex-wrap gap-12 py-20 md:py-28">
          <div className="flex flex-[1_1_320px] flex-col gap-6">
            <h2 className="h-display text-[clamp(32px,4vw,48px)]">Vos questions</h2>
            <ButtonLink href="/contact" className="self-start">
              Réserver mon créneau <ArrowIcon />
            </ButtonLink>
          </div>
          <div className="min-w-0 flex-[2_1_560px]">
            <Faq items={FAQ} />
          </div>
        </Container>
      </section>
    </>
  );
}
