import type { Metadata } from "next";
import PricingCards from "@/components/PricingCards";
import { ComparisonTable, DiagnosticBand, OptionsGrid, Subscriptions, TrustCharter } from "@/components/Offer";
import { PRICING_FAQ } from "@/data/site";
import { Container, Eyebrow, Faq } from "@/components/ui";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Tarifs : site, logo, affiches et vidéo dès 199 €",
  description:
    "Lancement 199 €, Essentiel+ 449 €, Croissance 549 € (site, logo, SEO local, vidéo motion, affiches), Prestige dès 1 290 €. Paiement en 3 fois sans frais, abonnements sans engagement, diagnostic gratuit.",
  alternates: { canonical: "/tarifs" },
};

export default function TarifsPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: PRICING_FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
        }}
      />
      <Container className="pb-20 pt-16 md:pt-24">
        <div className="mb-10 flex max-w-[900px] flex-col gap-6">
          <Eyebrow>Tarifs</Eyebrow>
          <h1 className="font-display text-[clamp(40px,5.4vw,72px)] font-[750] leading-[1.02] tracking-[-0.035em]">
            Votre site, votre logo, vos affiches et votre vidéo. Prix fixes.
          </h1>
          <p className="max-w-[640px] text-lg leading-relaxed text-body">
            Tout ce qu&apos;il faut pour être visible, en 10 jours, pour moins cher qu&apos;un freelance. Payable en 3 fois et dans votre monnaie.
          </p>
        </div>
        <PricingCards />
      </Container>

      <section className="border-y border-line bg-mist">
        <Container className="py-20 md:py-24">
          <div className="mb-10 flex max-w-[760px] flex-col gap-4">
            <Eyebrow>Comparer</Eyebrow>
            <h2 className="h-display text-[clamp(30px,3.6vw,44px)]">Ce que contient chaque formule.</h2>
          </div>
          <ComparisonTable />
        </Container>
      </section>

      <Container className="py-20 md:py-24">
        <div className="mb-10 flex max-w-[760px] flex-col gap-4">
          <Eyebrow>Options</Eyebrow>
          <h2 className="h-display text-[clamp(30px,3.6vw,44px)]">À ajouter à votre formule.</h2>
          <p className="text-[17px] leading-relaxed text-body">Cochez ce dont vous avez besoin au moment du devis.</p>
        </div>
        <OptionsGrid />
      </Container>

      <section className="border-y border-line bg-mist">
        <Container className="py-20 md:py-24">
          <div className="mb-10 flex max-w-[760px] flex-col gap-4">
            <Eyebrow>Après la mise en ligne</Eyebrow>
            <h2 className="h-display text-[clamp(30px,3.6vw,44px)]">Des abonnements sans engagement.</h2>
          </div>
          <Subscriptions />
        </Container>
      </section>

      <TrustCharter />

      <DiagnosticBand />

      <Container className="flex flex-wrap gap-12 py-20 md:py-30">
        <div className="flex flex-[1_1_340px] flex-col gap-5">
          <h2 className="h-display text-[clamp(30px,3.6vw,44px)]">Comment vous payez</h2>
          <dl className="border-t border-line text-base">
            {[
              ["Au démarrage", "50 %"],
              ["À la livraison, après vos tests", "50 %"],
              ["Ou en 3 fois", "Sans frais"],
              ["Moyens acceptés", "Carte · virement · Mobile Money"],
            ].map(([label, value]) => (
              <div key={label} className="flex justify-between gap-4 border-b border-line py-4.5">
                <dt>{label}</dt>
                <dd className="text-right font-bold">{value}</dd>
              </div>
            ))}
          </dl>
          <p className="text-sm leading-relaxed text-muted">Prix en euros. Devis possible en dollars, en FCFA ou dans votre monnaie locale.</p>
        </div>
        <div className="min-w-0 flex-[1.4_1_480px]">
          <Faq items={PRICING_FAQ} />
        </div>
      </Container>
    </>
  );
}
