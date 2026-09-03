import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Zap, HeartHandshake, Award, Target, Code, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "À Propos & Vision — NetWave Studio",
  description:
    "Découvrez l'ADN de NetWave Studio : rigueur technique, culte de la performance et partenariat d'ingénierie durable.",
};

export default function AProposPage() {
  const values = [
    {
      icon: Zap,
      title: "Culte de la Vitesse",
      desc: "Chaque milliseconde économisée se traduit par un meilleur taux de conversion et une expérience utilisateur sans égal.",
    },
    {
      icon: ShieldCheck,
      title: "Rigueur Architecturale",
      desc: "Nous refusons les raccourcis techniques éphémères. Nous concevons du code structuré, typé et prêt pour l'échelle.",
    },
    {
      icon: Target,
      title: "Focalisation Métier",
      desc: "La technologie n'est qu'un levier : nous l'alignons toujours sur vos impératifs business et la rentabilité de votre investissement.",
    },
    {
      icon: HeartHandshake,
      title: "Transparence Totale",
      desc: "Accès direct au code, points d'étape hebdomadaires, documentation claire et zéro effet boîte noire.",
    },
  ];

  return (
    <div className="w-full bg-white font-inter">
      {/* En-tête */}
      <section className="bg-[#F5F5F7] py-16 md:py-24 border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-semibold text-[#0A9678] tracking-widest uppercase font-mono">
            NOTRE ADN &amp; VISION
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#281450] font-poppins">
            L&apos;Exigence au service de votre produit
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto font-inter leading-relaxed">
            NetWave Studio est un studio d&apos;ingénierie web et logicielle dédié aux marques,
            startups et PME qui ne font aucun compromis sur la qualité.
          </p>
        </div>
      </section>

      {/* Manifeste & Vision */}
      <section className="py-16 md:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-5 text-gray-700 font-inter">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#281450] font-poppins leading-tight">
              Bâtir le web moderne avec précision chirurgicale.
            </h2>
            <p className="text-sm leading-relaxed text-gray-600">
              Dans un écosystème numérique saturé de solutions préfabriquées et de sites alourdis par
              des dizaines de plugins superflus, NetWave Studio prend le contrepied : nous concevons
              des produits épurés, rapides et robustes.
            </p>
            <p className="text-sm leading-relaxed text-gray-600">
              Nous considérons le code comme un actif stratégique de votre entreprise. C&apos;est
              pourquoi chaque architecture est pensée pour résister aux montées en charge, faciliter
              l&apos;évolution continue et réduire drastiquement le coût total de possession (TCO).
            </p>
          </div>

          <div className="lg:col-span-6 bg-[#1E0F3D] text-white p-8 sm:p-10 rounded-3xl shadow-xl border border-white/10 space-y-5">
            <span className="text-xs font-mono font-semibold text-[#0fb894] uppercase tracking-wider">
              NOS STANDARDS DE QUALITÉ
            </span>
            <ul className="space-y-3.5 text-sm text-gray-200 font-medium">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#0A9678] shrink-0" />
                <span>TypeScript en mode strict sur 100% des bases de code</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#0A9678] shrink-0" />
                <span>Optimisation poussée du temps de premier octet (TTFB &lt; 800ms)</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#0A9678] shrink-0" />
                <span>Optimisation continue des métriques Core Web Vitals (LCP, INP, CLS)</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#0A9678] shrink-0" />
                <span>Architecture CI/CD automatisée et tests continus</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Valeurs fondamentales */}
      <section className="py-16 md:py-20 bg-[#F5F5F7] border-y border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-semibold text-[#0A9678] uppercase tracking-widest font-mono">
              VALEURS FONDATRICES
            </span>
            <h2 className="text-3xl font-bold text-[#281450] font-poppins">
              Ce qui guide chacune de nos lignes de code
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, idx) => {
              const Icon = v.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-2xl border border-[#E5E7EB] card-elevation-hover flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#0A9678]/10 flex items-center justify-center text-[#0A9678] mb-4">
                      <Icon className="w-6 h-6 stroke-[1.75]" />
                    </div>
                    <h3 className="text-base font-bold text-[#281450] font-poppins mb-2">
                      {v.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed font-inter">
                      {v.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <div className="max-w-2xl mx-auto px-4 space-y-6">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#281450] font-poppins">
            Envie de collaborer avec notre studio ?
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Parlez-nous de vos défis techniques et vos ambitions produit. Nous vous répondons sous
            24h ouvrées.
          </p>
          <div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#0A9678] hover:bg-[#0fb894] text-white font-semibold transition-all shadow-md active:scale-[0.98]"
            >
              <span>Initier le contact</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
