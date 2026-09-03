import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Zap, HeartHandshake, Award, Target, Code } from "lucide-react";

export const metadata = {
  title: "À Propos — NetWave Studio",
  description: "Découvrez l'ADN de NetWave Studio : rigueur technique, culte de la performance et partenariat d'ingénierie durable.",
};

export default function AProposPage() {
  const values = [
    {
      icon: Zap,
      title: "Culte de la Vitesse",
      desc: "Chaque milliseconde économisée se traduit par un meilleur taux d'engagement et une expérience utilisateur sans égal.",
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
    <div className="w-full bg-white">
      {/* En-tête */}
      <section className="bg-[#F5F5F7] py-16 md:py-24 border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-semibold text-[#0A9678] tracking-widest uppercase font-mono">
            NOTRE ADN &amp; VISION
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#281450] font-poppins">
            L&apos;Exigence au service de votre produit
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-inter">
            NetWave Studio est un studio d&apos;ingénierie web et logicielle dédié aux marques, startups et PME qui ne font aucun compromis sur la qualité.
          </p>
        </div>
      </section>

      {/* Manifeste & Vision */}
      <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-5 text-gray-700 font-inter">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#281450] font-poppins">
              Bâtir le web moderne avec précision chirurgicale.
            </h2>
            <p className="text-sm leading-relaxed">
              Dans un écosystème numérique saturé de solutions préfabriquées et de sites alourdis par des dizaines de plugins superflus, NetWave Studio prend le contrepied : nous concevons des produits épurés, rapides et robustes.
            </p>
            <p className="text-sm leading-relaxed">
              Nous considérons le code comme un actif stratégique de votre entreprise. C&apos;est pourquoi chaque architecture est pensée pour résister aux montées en charge, faciliter l&apos;évolution continue et réduire drastiquement le coût total de possession (TCO).
            </p>
          </div>

          <div className="lg:col-span-6 bg-[#281450] text-white p-8 rounded-2xl shadow-xl border border-white/10 space-y-4">
            <span className="text-xs font-mono font-semibold text-[#0A9678] uppercase">
              NOS STANDARDS DE QUALITÉ
            </span>
            <ul className="space-y-3 text-sm text-gray-200">
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0A9678]" />
                TypeScript en mode strict sur 100% des bases de code
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0A9678]" />
                Optimisation poussée du temps de premier octet (TTFB)
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0A9678]" />
                Optimisation continue des métriques Core Web Vitals
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0A9678]" />
                Architecture CI/CD automatisée et tests continus
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Valeurs fondamentales */}
      <section className="py-16 bg-[#F5F5F7] border-y border-[#E5E7EB]">
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
                <div key={idx} className="bg-white p-6 rounded-xl border border-[#E5E7EB] card-elevation-hover">
                  <div className="w-12 h-12 rounded-lg bg-[#F5F5F7] flex items-center justify-center text-[#0A9678] mb-4">
                    <Icon className="w-6 h-6 stroke-[1.75]" />
                  </div>
                  <h3 className="text-base font-bold text-[#281450] font-poppins mb-2">
                    {v.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed font-inter">
                    {v.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <div className="max-w-2xl mx-auto px-4 space-y-6">
          <h3 className="text-2xl sm:text-3xl font-bold text-[#281450] font-poppins">
            Envie de collaborer avec notre studio ?
          </h3>
          <p className="text-gray-600 text-sm">
            Présentez-nous vos ambitions techniques et définissons ensemble le cadre idéal de votre futur produit.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-[8px] bg-[#281450] hover:bg-[#462882] text-white font-semibold transition-colors"
          >
            Prendre contact
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
