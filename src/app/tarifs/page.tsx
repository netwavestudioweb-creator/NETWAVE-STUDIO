import type { Metadata } from "next";
import PricingCards from "@/components/PricingCards";
import { PRICING_FAQ } from "@/data/site";
import { Container, Eyebrow, Faq } from "@/components/ui";

export const metadata: Metadata = {
  title: "Tarifs : formules dès 149 €, payables en 3 fois",
  description:
    "Trois formules à prix fixes : Essentiel 149 €, Croissance 449 €, Sur-mesure dès 990 €. Paiement en 3 fois sans frais, Mobile Money accepté, 30 jours de garantie.",
  alternates: { canonical: "/tarifs" },
};

const INCLUDED = [
  { tag: "Propriété", title: "Le code est à vous", text: "Aucun abonnement imposé, aucune dépendance bloquante." },
  { tag: "Performance", title: "Mesurée, pas promise", text: "Score PageSpeed remis à la livraison." },
  { tag: "Accessibilité", title: "Lisible par tous", text: "Contrastes, clavier et textes alternatifs vérifiés." },
  { tag: "Garantie", title: "30 jours après mise en ligne", text: "Tout réajustement est corrigé sans frais." },
];

export default function TarifsPage() {
  return (
    <>
      <Container className="pb-24 pt-16 md:pt-24">
        <div className="mb-10 flex max-w-[860px] flex-col gap-6">
          <Eyebrow>Tarifs</Eyebrow>
          <h1 className="font-display text-[clamp(40px,5.4vw,72px)] font-[750] leading-[1.02] tracking-[-0.035em]">
            Trois formules. Des prix fixes. Aucun coût caché.
          </h1>
        </div>
        <PricingCards />
      </Container>

      <section className="border-y border-line bg-mist">
        <Container className="py-24">
          <h2 className="h-display mb-12 text-[clamp(30px,3.6vw,44px)]">Inclus dans toutes les formules</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {INCLUDED.map((item) => (
              <div key={item.tag} className="flex flex-col gap-2.5">
                <p className="font-mono text-[13px] font-semibold uppercase text-emerald">/ {item.tag}</p>
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="text-[15px] leading-relaxed text-body">{item.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Container className="flex flex-wrap gap-12 py-20 md:py-30">
        <div className="flex flex-[1_1_340px] flex-col gap-5">
          <h2 className="h-display text-[clamp(30px,3.6vw,44px)]">Comment vous payez</h2>
          <dl className="border-t border-line text-base">
            {[
              ["Au démarrage", "50 %"],
              ["À la livraison, après vos tests", "50 %"],
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
