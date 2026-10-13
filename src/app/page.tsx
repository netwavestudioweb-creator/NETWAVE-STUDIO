import type { Metadata } from "next";
import Link from "next/link";
import {
  ALKAREEM,
  CONTACT,
  FLAGSHIP,
  HOME_FAQ,
  METHOD_STEPS,
  PACKS,
  PROJECTS,
  REGIONS,
  SERVICES,
  TESTIMONIALS,
  formatEur,
} from "@/data/site";
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
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="border-b border-line">
        <Container className="flex flex-wrap items-center gap-14 py-16 md:py-24">
          <div className="flex min-w-0 flex-[1_1_520px] flex-col gap-7">
            <Eyebrow className="flex items-start gap-2.5">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-emerald-logo" aria-hidden="true" />
              Studio web &amp; logiciel · Clients dans le monde entier
            </Eyebrow>
            <h1 className="font-display text-[clamp(40px,5.6vw,76px)] font-[750] leading-[1.02] tracking-[-0.035em]">
              Des sites et des logiciels qui font tourner votre activité.{" "}
              <span className="text-emerald">Même en 3G.</span>
            </h1>
            <p className="max-w-[560px] text-lg leading-relaxed text-body sm:text-[19px]">
              Sites web, logiciels de gestion, assistants WhatsApp et visibilité Google pour les restaurants,
              commerces et entreprises qui restent introuvables sur internet. Moins cher qu&apos;une agence, aussi
              efficace, où que vous soyez.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact">
                Démarrer un projet <ArrowIcon />
              </ButtonLink>
              <ButtonLink href="/tarifs" variant="secondary">
                Voir les tarifs
              </ButtonLink>
            </div>
            <ul className="flex flex-wrap gap-x-6 gap-y-2.5 text-sm text-muted">
              {["Sites dès 149 €", "Livrés en 10 jours ou 20 % remboursés", "Paiement en 3 fois sans frais"].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-emerald" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative h-[520px] min-w-0 flex-[1_1_420px] overflow-hidden rounded-[28px] bg-ink sm:h-[600px]">
            <Stripes />
            <div className="absolute left-1/2 top-10 -translate-x-1/2 sm:top-[52px]">
              <PhoneFrame
                src={ALKAREEM.screens.home}
                alt="Boutique mobile Al Kareem Parfumerie conçue par NetWave Studio"
                className="w-[220px] sm:w-[262px]"
                sizes="262px"
                priority
              />
            </div>
            <div className="absolute bottom-6 left-4 flex w-[220px] flex-col gap-2 rounded-2xl bg-white px-5 py-4 shadow-[0_18px_40px_rgba(0,0,0,0.3)] sm:bottom-8 sm:left-6">
              <p className="eyebrow text-[11px] text-muted">PageSpeed mobile</p>
              <p className="flex items-baseline gap-2.5 font-display font-[750] tracking-[-0.03em]">
                <span className="text-[26px] text-faint line-through">{ALKAREEM.scoreBefore}</span>
                <span className="text-lg text-faint" aria-hidden="true">→</span>
                <span className="text-[44px] text-emerald">{ALKAREEM.scoreAfter}</span>
              </p>
              <p className="text-[13px] text-body">Al Kareem Parfumerie, mesure vérifiable</p>
            </div>
            <p className="absolute right-4 top-5 hidden rounded-full border border-white/20 bg-white/10 px-3.5 py-2 font-mono text-xs font-semibold text-white sm:block">
              {ALKAREEM.loadGain} de temps de chargement
            </p>
          </div>
        </Container>
      </section>

      {/* PROJETS */}
      <section aria-label="Projets récents" className="border-b border-line bg-mist">
        <Container className="flex flex-wrap items-center justify-between gap-x-10 gap-y-5 py-8">
          <Eyebrow tone="muted">Projets récents</Eyebrow>
          <ul className="flex flex-wrap gap-x-12 gap-y-4 font-display text-[22px] font-bold tracking-[-0.02em] text-ink-2">
            <li>{ALKAREEM.name}</li>
            {PROJECTS.map((p) => (
              <li key={p.title}>{p.title}</li>
            ))}
          </ul>
        </Container>
      </section>

      {/* OFFRE PHARE */}
      <section className="px-4 pt-16 sm:px-6 md:pt-24">
        <div className="relative mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-8 overflow-hidden rounded-[32px] border border-line bg-emerald-soft px-7 py-12 sm:px-14 sm:py-14">
          <div className="flex min-w-0 max-w-[700px] flex-col gap-4">
            <Eyebrow>Offre phare</Eyebrow>
            <h2 className="h-display text-[clamp(30px,3.8vw,48px)]">
              Votre site web en {FLAGSHIP.days} jours.{" "}
              <span className="text-emerald">Ou {FLAGSHIP.refundPercent} % remboursés.</span>
            </h2>
            <p className="text-[17px] leading-relaxed text-body">
              Restaurant, commerce, cabinet ou entreprise : un site professionnel, moins cher qu&apos;une agence et
              aussi efficace.{" "}
              <strong className="text-ink">Dès {formatEur(FLAGSHIP.fromPrice)}, payable dans votre monnaie.</strong>
            </p>
          </div>
          <ButtonLink href={FLAGSHIP.href}>
            Voir l&apos;offre <ArrowIcon />
          </ButtonLink>
        </div>
      </section>

      {/* SERVICES */}
      <Container className="py-20 md:py-30">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div className="flex max-w-[680px] flex-col gap-4">
            <Eyebrow>01 — Ce que nous faisons</Eyebrow>
            <h2 className="h-display text-[clamp(32px,4vw,52px)]">Bien plus que des sites. Un seul interlocuteur.</h2>
          </div>
          <Link href="/services" className="font-semibold text-ink underline-offset-4 hover:underline">
            Tous les services →
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <article key={service.id} className="flex flex-col gap-4.5 rounded-[20px] border border-line p-7 sm:px-7 sm:py-8">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[13px] font-semibold text-faint">/0{i + 1}</span>
                <PriceTag price={service.fromPrice} tone={service.tone} />
              </div>
              <h3 className="font-display text-2xl font-bold leading-tight tracking-[-0.02em]">{service.title}</h3>
              <p className="text-[15px] leading-relaxed text-body">{service.summary}</p>
              <ul className="mt-auto flex flex-col gap-2 border-t border-[#EFEDF3] pt-4.5 text-sm text-ink-2">
                {service.points.slice(0, 3).map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>

      {/* ÉTUDE DE CAS */}
      <section className="bg-ink text-white">
        <Container className="flex flex-wrap items-center gap-16 py-20 md:py-30">
          <div className="flex min-w-0 flex-[1_1_480px] flex-col gap-7">
            <Eyebrow tone="mint">02 — Étude de cas</Eyebrow>
            <h2 className="h-display text-[clamp(32px,4vw,52px)]">
              Al Kareem Parfumerie : une boutique qui reste rapide sur un réseau mobile instable.
            </h2>
            <p className="text-[17px] leading-relaxed text-on-dark">
              Refonte complète de la boutique en ligne d&apos;une parfumerie de Cotonou : recherche, catalogue
              filtrable, fiche produit avec ajout au panier toujours visible, commande WhatsApp et paiement à
              la livraison.
            </p>
            <dl className="grid grid-cols-2 gap-4">
              <div className="rounded-[18px] border border-white/16 p-6">
                <dt className="sr-only">Score PageSpeed mobile</dt>
                <dd className="font-display text-[clamp(32px,4vw,44px)] font-[750] tracking-[-0.03em] text-mint">
                  {ALKAREEM.scoreBefore} → {ALKAREEM.scoreAfter}
                </dd>
                <dd className="mt-1.5 text-sm text-on-dark">Score PageSpeed mobile</dd>
              </div>
              <div className="rounded-[18px] border border-white/16 p-6">
                <dt className="sr-only">Temps de chargement</dt>
                <dd className="font-display text-[clamp(32px,4vw,44px)] font-[750] tracking-[-0.03em] text-mint">
                  {ALKAREEM.loadGain}
                </dd>
                <dd className="mt-1.5 text-sm text-on-dark">Temps de chargement</dd>
              </div>
            </dl>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              <ButtonLink href="/realisations" variant="mint" size="md" className="min-h-[50px]">
                Lire l&apos;étude de cas
              </ButtonLink>
              <a
                href={ALKAREEM.pageSpeedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-white underline underline-offset-4 hover:text-mint"
              >
                Vérifier le score sur PageSpeed ↗
              </a>
            </div>
          </div>
          <div className="flex min-w-0 flex-[1_1_440px] items-start justify-center gap-5">
            <PhoneFrame
              src={ALKAREEM.screens.product}
              alt="Fiche produit mobile Al Kareem"
              className="mt-12 w-[45%] max-w-[220px]"
              sizes="220px"
            />
            <PhoneFrame
              src={ALKAREEM.screens.shop}
              alt="Boutique mobile Al Kareem avec filtres"
              className="w-[45%] max-w-[220px]"
              sizes="220px"
            />
          </div>
        </Container>
      </section>

      {/* TÉMOIGNAGES — affichés dès qu'un témoignage réel est ajouté dans src/data/site.ts */}
      {TESTIMONIALS.length > 0 && (
        <Container className="pt-20 md:pt-30">
          <div className="mb-12 flex flex-col gap-4">
            <Eyebrow>Ils en parlent</Eyebrow>
            <h2 className="h-display text-[clamp(32px,4vw,52px)]">Ce que disent nos clients.</h2>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <figure key={t.name} className="flex flex-col justify-between gap-6 rounded-[20px] border border-line p-8">
                <blockquote className="font-display text-xl font-semibold leading-snug">« {t.quote} »</blockquote>
                <figcaption className="text-sm text-muted">
                  <strong className="block text-base text-ink">{t.name}</strong>
                  {t.role} · {t.country}
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      )}

      {/* MÉTHODE */}
      <Container className="py-20 md:py-30">
        <div className="mb-14 flex max-w-[720px] flex-col gap-4">
          <Eyebrow>03 — Notre méthode</Eyebrow>
          <h2 className="h-display text-[clamp(32px,4vw,52px)]">Un calendrier fixé avant la première ligne de code.</h2>
        </div>
        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-8 border-t-2 border-ink">
          {METHOD_STEPS.map((step, i) => (
            <li key={step.key} className="flex flex-col gap-3 pr-7 pt-7">
              <span className="font-mono text-[13px] font-semibold text-emerald">ÉTAPE {i + 1}</span>
              <h3 className="font-display text-2xl font-bold tracking-[-0.02em]">{step.key}</h3>
              <p className="text-[15px] leading-relaxed text-body">{step.short}</p>
            </li>
          ))}
        </ol>
        <div className="mt-12 flex flex-wrap gap-x-10 gap-y-4 text-[15px] text-ink-2">
          <span>
            <strong className="text-ink">10 jours ouvrés garantis</strong> pour un site web
          </span>
          <span>
            <strong className="text-ink">Sur devis</strong> pour une application sur mesure
          </span>
          <span>
            <strong className="text-ink">2 à 4 semaines</strong> pour un logiciel métier
          </span>
        </div>
      </Container>

      {/* PAYS */}
      <section className="bg-ink text-white">
        <Container className="flex flex-wrap gap-12 py-20 md:py-28">
          <div className="flex min-w-0 flex-[1_1_360px] flex-col gap-5">
            <Eyebrow tone="mint">Où nous travaillons</Eyebrow>
            <h2 className="h-display text-[clamp(32px,4vw,48px)]">Partout où les entreprises manquent encore de visibilité.</h2>
            <p className="text-[17px] leading-relaxed text-on-dark">
              Tout se fait à distance : un appel visio ou WhatsApp pour démarrer, un lien privé pour suivre votre projet.
              Paiement par carte, virement international ou Mobile Money, dans la monnaie de votre choix.
            </p>
          </div>
          <ul className="grid min-w-0 flex-[1.4_1_520px] grid-cols-1 gap-3 sm:grid-cols-2">
            {REGIONS.map((r) => (
              <li key={r.name} className="flex flex-col gap-1 rounded-2xl border border-white/14 px-5 py-4">
                <span className="font-display text-lg font-bold">{r.name}</span>
                <span className="text-sm text-on-dark">{r.examples}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* TARIFS */}
      <section className="border-y border-line bg-mist">
        <Container className="py-20 md:py-30">
          <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
            <div className="flex max-w-[680px] flex-col gap-4">
              <Eyebrow>04 — Tarifs</Eyebrow>
              <h2 className="h-display text-[clamp(32px,4vw,52px)]">Des prix affichés. Payables en trois fois.</h2>
            </div>
            <Link href="/tarifs" className="font-semibold text-ink underline-offset-4 hover:underline">
              Comparer les formules →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {PACKS.map((pack) => (
              <Link
                key={pack.id}
                href="/tarifs"
                className={`flex flex-col gap-4 rounded-[22px] p-8 transition-transform hover:-translate-y-1 sm:p-9 ${
                  pack.featured ? "bg-ink text-white" : "border border-line bg-white"
                }`}
              >
                <span className="flex items-center justify-between gap-3">
                  <span className="font-display text-[22px] font-bold">{pack.name}</span>
                  {pack.featured && (
                    <span className="eyebrow rounded-full bg-mint px-2.5 py-1 text-[11px] text-ink">Recommandée</span>
                  )}
                </span>
                <span className={`text-[15px] ${pack.featured ? "text-on-dark" : "text-body"}`}>{pack.tagline}</span>
                <span className="font-display text-[52px] font-[750] tracking-[-0.03em]">
                  {pack.fromPrefix && <span className="text-xl font-semibold tracking-normal">dès </span>}
                  {formatEur(pack.price)}
                </span>
                <span className={`text-sm ${pack.featured ? "text-on-dark" : "text-muted"}`}>
                  ou 3 × {formatEur(pack.installment)} sans frais
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <Container className="flex flex-wrap gap-12 py-20 md:py-30">
        <div className="flex flex-[1_1_320px] flex-col gap-4">
          <Eyebrow>05 — Questions fréquentes</Eyebrow>
          <h2 className="h-display text-[clamp(32px,4vw,48px)]">Ce qu&apos;on nous demande avant de signer.</h2>
        </div>
        <div className="min-w-0 flex-[2_1_560px]">
          <Faq items={HOME_FAQ} />
        </div>
      </Container>

      {/* CTA */}
      <section className="px-4 pb-20 sm:px-6 md:pb-30">
        <div className="relative mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-8 overflow-hidden rounded-[32px] bg-emerald px-7 py-14 text-white sm:px-14 sm:py-18">
          <Stripes variant="cta" />
          <div className="relative flex max-w-[620px] flex-col gap-3.5">
            <h2 className="h-display text-[clamp(34px,4.4vw,56px)]">Parlons de votre projet.</h2>
            <p className="text-lg leading-relaxed text-[#E3F5F0]">
              Décrivez votre besoin en quelques lignes : vous recevez un devis clair, sans engagement.
            </p>
          </div>
          <div className="relative flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/contact" variant="light">
              Demander un devis
            </ButtonLink>
            <ButtonLink href={CONTACT.whatsappUrl} variant="outline-light">
              WhatsApp
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
