import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Cpu,
  TrendingDown,
  Layers,
  ExternalLink,
  CheckCircle2,
} from "lucide-react";

export const metadata = {
  title: "À Propos & Vision — NetWave Studio",
  description:
    "Rendre la technologie de pointe accessible aux entreprises et institutions d'Afrique de l'Ouest — avec la même rigueur qu'ailleurs, pensée pour les réalités du terrain.",
};

export default function AProposPage() {
  const values = [
    {
      icon: ShieldCheck,
      title: "Transparence",
      desc: "Des devis clairs, pas de grille cachée, une communication honnête sur ce qui est acquis et ce qui est en cours de développement.",
    },
    {
      icon: Cpu,
      title: "Rigueur technique",
      desc: "Une double expertise réseau et développement, rare sur le marché local.",
    },
    {
      icon: TrendingDown,
      title: "Performance mesurable",
      desc: "Des résultats chiffrés plutôt que des promesses — par exemple, -75% de temps de chargement sur un projet e-commerce réel.",
    },
    {
      icon: Layers,
      title: "Adaptation au terrain",
      desc: "Des solutions pensées pour les conditions réelles d'usage, pas des templates génériques.",
    },
  ];

  return (
    <div className="w-full bg-white font-inter">
      {/* 1. VISION */}
      <section className="bg-[#F5F5F7] py-16 md:py-24 border-b border-[#E5E7EB]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-semibold text-[#0A9678] tracking-widest uppercase font-mono">
            VISION
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#281450] font-poppins leading-tight">
            Rendre la technologie de pointe accessible aux entreprises et institutions d&apos;Afrique de l&apos;Ouest
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto font-inter leading-relaxed">
            — avec la même rigueur qu&apos;ailleurs, pensée pour les réalités du terrain.
          </p>
        </div>
      </section>

      {/* 2. NOTRE HISTOIRE */}
      <section className="py-16 md:py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white border border-[#E5E7EB] p-8 sm:p-12 shadow-sm relative overflow-hidden">
          <div className="space-y-4">
            <span className="text-xs font-semibold text-[#0A9678] tracking-widest uppercase font-mono">
              NOTRE HISTOIRE
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#281450] font-poppins">
              Notre histoire
            </h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-inter">
              NetWave Studio est né en 2023 à Cotonou, porté par une conviction simple : les entreprises locales méritent des solutions numériques aussi robustes que celles des grandes agences internationales, conçues pour les réalités du marché ouest-africain — connexions mobiles parfois instables, paiement Mobile Money, contraintes de terrain.
            </p>
          </div>
        </div>
      </section>

      {/* 3. NOS VALEURS */}
      <section className="bg-[#F5F5F7] border-y border-[#E5E7EB] py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0A9678] font-mono">
              NOS VALEURS
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#281450] font-poppins">
              Nos valeurs
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, idx) => {
              const Icon = v.icon;
              return (
                <div
                  key={idx}
                  className="rounded-xl bg-white p-5 border border-[#E5E7EB] shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-[#0A9678]/10 text-[#0A9678] flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="font-semibold text-sm text-[#281450]">
                        {v.title}
                      </h3>
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. LE FONDATEUR */}
      <section className="py-16 md:py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#1E0F3D] text-white p-8 sm:p-12 lg:p-14 relative overflow-hidden shadow-xl border border-white/10">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#462882]/40 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#0A9678]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-8">
            <div>
              <span className="text-xs font-mono font-semibold text-[#0fb894] uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full">
                LE FONDATEUR
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-poppins text-white mt-4">
                Le fondateur
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              {/* Portrait / Mention personnelle */}
              <div className="md:col-span-4 flex flex-col items-start sm:items-center md:items-start space-y-4">
                <div className="relative">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-br from-[#281450] to-[#0A9678] p-0.5 shadow-lg flex items-center justify-center">
                    <div className="w-full h-full bg-[#1E0F3D] rounded-2xl flex flex-col items-center justify-center text-center p-2">
                      <span className="text-2xl sm:text-3xl font-extrabold text-white font-poppins tracking-wider">
                        DA
                      </span>
                      <span className="text-[10px] text-[#0fb894] font-mono uppercase tracking-wider mt-0.5">
                        Lead Dev
                      </span>
                    </div>
                  </div>
                  <span className="absolute -bottom-1.5 -right-1.5 w-6 h-6 rounded-full bg-[#0A9678] border-2 border-[#1E0F3D] flex items-center justify-center text-white">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white font-poppins">
                    DODO Albéric Mantey Adriano
                  </h3>
                  <p className="text-xs text-[#0fb894] font-mono mt-0.5">
                    Technicien Réseaux &amp; Télécoms • Développeur Full-Stack
                  </p>
                  <p className="text-xs text-gray-300 mt-1">
                    Basé à Cotonou, Bénin
                  </p>
                </div>
              </div>

              {/* Texte de présentation & Lien Portfolio cliquable */}
              <div className="md:col-span-8 space-y-6 md:border-l md:border-white/10 md:pl-8">
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed font-inter">
                  NetWave Studio est porté par DODO Albéric Mantey Adriano, technicien réseaux &amp; télécoms et développeur full-stack basé à Cotonou. Un interlocuteur unique du premier échange jusqu&apos;à la livraison — pas de transfert de dossier, pas de perte d&apos;information en cours de route.
                </p>

                <div className="pt-2 space-y-2">
                  <a
                    href="https://dodo-adriano-alb-ric-m-portfolio-ne.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#0A9678] hover:bg-[#0fb894] text-white text-sm font-semibold transition-all shadow-md active:scale-[0.98] group"
                  >
                    <span>Consulter le portfolio personnel</span>
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                  <div>
                    <a
                      href="https://dodo-adriano-alb-ric-m-portfolio-ne.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-gray-400 hover:text-gray-200 underline underline-offset-4 font-mono transition-colors"
                    >
                      dodo-adriano-alb-ric-m-portfolio-ne.vercel.app
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA CONTACT */}
      <section className="py-16 md:py-20 text-center">
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
