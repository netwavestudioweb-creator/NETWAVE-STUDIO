import type { Metadata } from "next";
import { ALKAREEM, FLAGSHIP, TARGET_MARKETS, formatEur, formatFcfa } from "@/data/site";
import { ArrowIcon, ButtonLink, CheckIcon, Container, Eyebrow, Faq, PhoneFrame, Stripes } from "@/components/ui";

export const metadata: Metadata = {
  title: "Boutique en ligne en 10 jours, ou 20 % remboursés",
  description:
    "Votre boutique en ligne prête en 10 jours ouvrés : commandes WhatsApp, Mobile Money, paiement à la livraison. 449 € (≈ 294 500 FCFA). Pour la Côte d'Ivoire, le Gabon, le Cameroun, le Sénégal et toute l'Afrique francophone.",
  alternates: { canonical: "/boutique-en-ligne" },
};

const FAQ = [
  {
    q: "Que dois-je fournir pour démarrer ?",
    a: "Votre logo (ou nous en créons un simple), des photos de vos produits, leurs prix et une courte description. Une liste sur WhatsApp ou un fichier Excel suffit.",
  },
  {
    q: "Je suis à Abidjan, Libreville ou Douala : comment ça se passe ?",
    a: "Tout se fait à distance : un appel visio ou WhatsApp pour démarrer, un lien privé pour suivre l'avancement, et le paiement par Mobile Money, carte ou virement.",
  },
  {
    q: "Combien de produits puis-je mettre en ligne ?",
    a: "Nous mettons en ligne votre catalogue de départ ; le volume exact est fixé au cadrage. Ensuite, vous ajoutez autant de produits que vous voulez depuis votre espace d'administration.",
  },
  {
    q: "Et après les 10 jours ?",
    a: "30 jours de garantie pour tout réajustement, puis, si vous le souhaitez, une formule de maintenance pour les mises à jour et les modifications.",
  },
];

export default function FlagshipPage() {
  return (
    <>
      {/* HERO */}
      <section className="border-b border-line">
        <Container className="flex flex-wrap items-center gap-14 py-16 md:py-24">
          <div className="flex min-w-0 flex-[1_1_520px] flex-col gap-7">
            <Eyebrow>Offre phare · Afrique francophone</Eyebrow>
            <h1 className="font-display text-[clamp(40px,5.4vw,72px)] font-[750] leading-[1.02] tracking-[-0.035em]">
              Votre boutique en ligne en {FLAGSHIP.days} jours.{" "}
              <span className="text-emerald">Ou {FLAGSHIP.refundPercent} % remboursés.</span>
            </h1>
            <p className="max-w-[560px] text-lg leading-relaxed text-body sm:text-[19px]">{FLAGSHIP.promise}</p>
            <div className="flex flex-wrap items-end gap-x-6 gap-y-2">
              <p className="font-display text-[56px] font-[750] leading-none tracking-[-0.035em]">{formatEur(FLAGSHIP.price)}</p>
              <p className="pb-1.5 text-base text-muted">
                ≈ {formatFcfa(FLAGSHIP.price)} · ou 3 × {formatEur(149)} sans frais
              </p>
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
          <div className="relative h-[520px] min-w-0 flex-[1_1_380px] overflow-hidden rounded-[28px] bg-ink sm:h-[580px]">
            <Stripes />
            <div className="absolute left-1/2 top-10 -translate-x-1/2">
              <PhoneFrame
                src={ALKAREEM.screens.shop}
                alt="Exemple de boutique en ligne livrée par NetWave Studio : Al Kareem Parfumerie"
                className="w-[230px] sm:w-[250px]"
                priority
              />
            </div>
            <p className="absolute bottom-6 left-1/2 w-max -translate-x-1/2 rounded-full bg-white px-4 py-2 text-[13px] font-semibold text-ink shadow-lg">
              Exemple livré : {ALKAREEM.name}
            </p>
          </div>
        </Container>
      </section>

      {/* INCLUS */}
      <Container className="py-20 md:py-28">
        <div className="mb-12 flex max-w-[720px] flex-col gap-4">
          <Eyebrow>Ce que vous recevez</Eyebrow>
          <h2 className="h-display text-[clamp(32px,4vw,52px)]">Une boutique qui vend, pas seulement un site.</h2>
        </div>
        <ul className="grid grid-cols-1 gap-x-10 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
          {FLAGSHIP.included.map((item) => (
            <li key={item} className="flex gap-3 border-t border-line pt-5 text-[17px] text-ink-2">
              <CheckIcon className="mt-1 h-5 w-5 text-emerald" />
              {item}
            </li>
          ))}
        </ul>
      </Container>

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

      {/* PAYS */}
      <section className="border-y border-line bg-mist">
        <Container className="py-20 md:py-24">
          <h2 className="h-display mb-10 text-[clamp(28px,3.4vw,40px)]">Paiement local accepté dans chaque pays</h2>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {TARGET_MARKETS.map((m) => (
              <li key={m.country} className="flex flex-col gap-1.5 rounded-2xl border border-line bg-white p-6">
                <span className="font-display text-xl font-bold">{m.country}</span>
                <span className="text-sm text-muted">{m.city}</span>
                <span className="mt-2 text-sm font-semibold text-emerald">{m.payments}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* FAQ + CTA */}
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
    </>
  );
}
