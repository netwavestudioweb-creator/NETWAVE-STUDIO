import React from "react";
import Link from "next/link";
import {
  ShoppingCart,
  LayoutDashboard,
  Network,
  MessageSquareCode,
  ArrowRight,
  CheckCircle2,
  Sliders,
  Layers,
  Palette,
  CreditCard,
  FileText,
  Clock,
  Calculator,
} from "lucide-react";
import ProjectEstimator from "@/components/ProjectEstimator";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tarifs & Transparence — NetWave Studio",
  description:
    "Grille tarifaire transparente et devis sur-mesure pour vos projets web, e-commerce, logiciels et formations.",
  alternates: {
    canonical: "/tarifs",
  },
  openGraph: {
    title: "Tarifs & Transparence — NetWave Studio",
    description:
      "Des tarifs de base clairs (dès 100 000 FCFA) et une estimation transparente pour vos projets numériques.",
    url: "https://www.netwave-studio.company/tarifs",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Tarifs NetWave Studio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tarifs & Transparence — NetWave Studio",
    description: "Tarifications claires et devis sur-mesure sans frais cachés.",
    images: ["/twitter-image"],
  },
};

export default function TarifsPage() {
  return (
    <div className="w-full bg-white font-inter">
      {/* 1. HERO / EN-TÊTE */}
      <section className="bg-[#F5F5F7] py-16 md:py-24 border-b border-[#E5E7EB]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-semibold text-[#0A9678] tracking-widest uppercase font-mono">
            GRILLE &amp; MODALITÉS TARIFAIRES
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#281450] font-poppins tracking-tight">
            Des tarifs lisibles, adaptés à vos projets
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Un tarif de base clair pour démarrer, un devis sur mesure dès que le projet se
            complexifie. Pas de grille figée, pas de mauvaise surprise.
          </p>
        </div>
      </section>

      {/* 1.B ESTIMATEUR ET SIMULATEUR DE DEVIS */}
      <section className="py-12 bg-white border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="text-center space-y-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#0A9678] font-mono">
              Calculateur en direct
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-poppins text-[#281450]">
              Simulez votre budget &amp; votre délai de réalisation
            </h2>
          </div>

          <ProjectEstimator />
        </div>
      </section>

      {/* 2. LES 4 SERVICES ET LEURS PALIERS */}
      <section className="py-16 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Service 1 : Développement Web & E-commerce */}
          <div className="rounded-2xl p-6 sm:p-8 bg-white border border-[#E5E7EB] shadow-sm hover:border-[#0A9678]/40 transition-colors flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-[#0A9678]/10 text-[#0A9678] flex items-center justify-center shrink-0">
                  <ShoppingCart className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#281450] font-poppins">
                    Développement Web & E-commerce
                  </h2>
                  <p className="text-xs text-gray-500">
                    Sites vitrines, plateformes sur mesure et boutiques en ligne
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {/* Entrée de gamme : mis en valeur */}
                <div className="rounded-xl border-2 border-[#0A9678]/30 bg-[#0A9678]/[0.03] p-5">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                    <div className="space-y-1">
                      <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-[#0A9678] font-mono px-2 py-0.5 rounded bg-[#0A9678]/10">
                        TARIF D'ENTRÉE DE GAMME
                      </span>
                      <h3 className="text-base font-semibold text-[#281450]">
                        Site vitrine essentiel
                      </h3>
                      <p className="text-xs text-gray-600">
                        1 à 3 pages, template adapté à votre identité.
                      </p>
                    </div>
                    <div className="sm:text-right shrink-0">
                      <div className="text-[11px] text-gray-500 uppercase font-medium">
                        À partir de
                      </div>
                      <div className="text-2xl sm:text-3xl font-extrabold text-[#0A9678] font-poppins">
                        100 000 <span className="text-sm font-semibold text-gray-700">FCFA</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Complexe : Sur devis */}
                <div className="rounded-xl border border-[#E5E7EB] bg-gray-50/70 p-5">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                    <div className="space-y-1">
                      <h3 className="text-sm font-semibold text-[#281450]">
                        Projet complet & E-commerce
                      </h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Site vitrine complet, multi-pages, design sur-mesure, ou boutique
                        e-commerce avec paiement intégré.
                      </p>
                    </div>
                    <div className="shrink-0 sm:text-right">
                      <span className="inline-block px-3.5 py-1.5 rounded-full bg-white text-[#281450] text-xs font-semibold border border-gray-200 shadow-xs">
                        Sur devis
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs text-gray-500">
              <CheckCircle2 className="w-4 h-4 text-[#0A9678] shrink-0" />
              <span>Optimisation mobile 3G/4G et performances garanties</span>
            </div>
          </div>

          {/* Service 2 : Logiciels & Outils de gestion sur mesure */}
          <div className="rounded-2xl p-6 sm:p-8 bg-white border border-[#E5E7EB] shadow-sm hover:border-[#0A9678]/40 transition-colors flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-[#0A9678]/10 text-[#0A9678] flex items-center justify-center shrink-0">
                  <LayoutDashboard className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#281450] font-poppins">
                    Logiciels & Outils de gestion sur mesure
                  </h2>
                  <p className="text-xs text-gray-500">
                    Digitalisation, automatisation et outils internes
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {/* Entrée de gamme : mis en valeur */}
                <div className="rounded-xl border-2 border-[#0A9678]/30 bg-[#0A9678]/[0.03] p-5">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                    <div className="space-y-1">
                      <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-[#0A9678] font-mono px-2 py-0.5 rounded bg-[#0A9678]/10">
                        TARIF D'ENTRÉE DE GAMME
                      </span>
                      <h3 className="text-base font-semibold text-[#281450]">
                        Outil simple
                      </h3>
                      <p className="text-xs text-gray-600">
                        Automatisation ponctuelle, petit tableau de bord.
                      </p>
                    </div>
                    <div className="sm:text-right shrink-0">
                      <div className="text-[11px] text-gray-500 uppercase font-medium">
                        À partir de
                      </div>
                      <div className="text-2xl sm:text-3xl font-extrabold text-[#0A9678] font-poppins">
                        150 000 <span className="text-sm font-semibold text-gray-700">FCFA</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Complexe : Sur devis */}
                <div className="rounded-xl border border-[#E5E7EB] bg-gray-50/70 p-5">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                    <div className="space-y-1">
                      <h3 className="text-sm font-semibold text-[#281450]">
                        Application métier complète
                      </h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Base de données, logique métier avancée, gestion des utilisateurs et droits.
                      </p>
                    </div>
                    <div className="shrink-0 sm:text-right">
                      <span className="inline-block px-3.5 py-1.5 rounded-full bg-white text-[#281450] text-xs font-semibold border border-gray-200 shadow-xs">
                        Sur devis
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs text-gray-500">
              <CheckCircle2 className="w-4 h-4 text-[#0A9678] shrink-0" />
              <span>Propriété intégrale du code et architecture évolutive</span>
            </div>
          </div>

          {/* Service 3 : Infrastructures Réseaux & Télécoms */}
          <div className="rounded-2xl p-6 sm:p-8 bg-white border border-[#E5E7EB] shadow-sm hover:border-[#0A9678]/40 transition-colors flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-[#0A9678]/10 text-[#0A9678] flex items-center justify-center shrink-0">
                  <Network className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#281450] font-poppins">
                    Infrastructures Réseaux & Télécoms
                  </h2>
                  <p className="text-xs text-gray-500">
                    Câblage structuré, interconnexion et sécurisation
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-[#E5E7EB] bg-gray-50/60 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1.5 max-w-md">
                  <div className="text-base font-semibold text-[#281450]">
                    Intervention & Déploiement sur site
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Chaque intervention dépend du site, des équipements existants et du périmètre
                    de sécurisation demandé.
                  </p>
                </div>
                <div className="shrink-0 sm:text-right">
                  <span className="inline-block px-4 py-2 rounded-full bg-white text-[#281450] text-xs font-semibold border border-gray-200 shadow-xs">
                    Sur devis
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs text-gray-500">
              <CheckCircle2 className="w-4 h-4 text-[#0A9678] shrink-0" />
              <span>Audit technique préalable et validation de conformité</span>
            </div>
          </div>

          {/* Service 4 : IA conversationnelle & Automatisation */}
          <div className="rounded-2xl p-6 sm:p-8 bg-white border border-[#E5E7EB] shadow-sm hover:border-[#0A9678]/40 transition-colors flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-[#0A9678]/10 text-[#0A9678] flex items-center justify-center shrink-0">
                  <MessageSquareCode className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#281450] font-poppins">
                    IA conversationnelle & Automatisation
                  </h2>
                  <p className="text-xs text-gray-500">
                    Agents intelligents, bots WhatsApp et automatisation de processus
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-[#E5E7EB] bg-gray-50/60 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1.5 max-w-md">
                  <div className="text-base font-semibold text-[#281450]">
                    Solutions d'IA & Agents sur mesure
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    La complexité varie fortement selon le nombre d'agents, les intégrations et le
                    volume de traitement.
                  </p>
                </div>
                <div className="shrink-0 sm:text-right">
                  <span className="inline-block px-4 py-2 rounded-full bg-white text-[#281450] text-xs font-semibold border border-gray-200 shadow-xs">
                    Sur devis
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs text-gray-500">
              <CheckCircle2 className="w-4 h-4 text-[#0A9678] shrink-0" />
              <span>Intégrations API, CRM et flux WhatsApp automatisés</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SECTION "CE QUI FAIT VARIER LE PRIX AU-DELÀ DU TARIF DE BASE" */}
      <section className="bg-[#F5F5F7] border-y border-[#E5E7EB] py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#0A9678] font-mono">
              <Sliders className="w-4 h-4" /> Transparence du chiffrage
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#281450] font-poppins">
              Ce qui fait varier le prix au-delà du tarif de base
            </h2>
            <p className="text-sm text-gray-600">
              Chaque projet est unique. Voici les 5 critères qui influent sur le montant du devis :
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="rounded-xl bg-white p-5 border border-[#E5E7EB] shadow-xs">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-[#0A9678]/10 text-[#0A9678] flex items-center justify-center shrink-0">
                  <Layers className="w-4 h-4" />
                </div>
                <h3 className="font-semibold text-sm text-[#281450]">
                  Pages & Fonctionnalités
                </h3>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                Le nombre total d'écrans, la profondeur du périmètre et la complexité des modules
                spécifiques à développer.
              </p>
            </div>

            <div className="rounded-xl bg-white p-5 border border-[#E5E7EB] shadow-xs">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-[#0A9678]/10 text-[#0A9678] flex items-center justify-center shrink-0">
                  <Palette className="w-4 h-4" />
                </div>
                <h3 className="font-semibold text-sm text-[#281450]">
                  Design sur-mesure vs Template
                </h3>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                Le choix entre un template adapté à votre identité visuelle ou une conception
                graphique 100% sur-mesure.
              </p>
            </div>

            <div className="rounded-xl bg-white p-5 border border-[#E5E7EB] shadow-xs">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-[#0A9678]/10 text-[#0A9678] flex items-center justify-center shrink-0">
                  <CreditCard className="w-4 h-4" />
                </div>
                <h3 className="font-semibold text-sm text-[#281450]">
                  Paiement & Gestion avancée
                </h3>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                Paiement en ligne (Mobile Money, CB), support multi-langue et back-office avancé.
              </p>
            </div>

            <div className="rounded-xl bg-white p-5 border border-[#E5E7EB] shadow-xs">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-[#0A9678]/10 text-[#0A9678] flex items-center justify-center shrink-0">
                  <FileText className="w-4 h-4" />
                </div>
                <h3 className="font-semibold text-sm text-[#281450]">
                  Production de contenu
                </h3>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                Contenu produit directement par NetWave Studio (textes, visuels, stratégie) plutôt que
                fourni clé en main par le client.
              </p>
            </div>

            <div className="rounded-xl bg-white p-5 border border-[#E5E7EB] shadow-xs sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-[#0A9678]/10 text-[#0A9678] flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <h3 className="font-semibold text-sm text-[#281450]">
                  Délai souhaité
                </h3>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                Le délai de réalisation exigé pour le lancement (déploiement standard versus livraison
                urgente accélérée).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CTA FINAL DE PAGE */}
      <section className="bg-[#281450] text-white py-16 md:py-20 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-poppins">
            Un projet en vue ? Parlons-en.
          </h2>
          <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Décrivez-nous votre besoin pour obtenir une proposition tarifaire précise et adaptée à
            vos objectifs.
          </p>
          <div className="pt-2 flex justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-4 rounded-full bg-[#0A9678] hover:bg-[#0fb894] text-white font-bold text-xs sm:text-base text-center transition-all shadow-lg active:scale-[0.98] w-full sm:w-auto max-w-md"
            >
              <span>Demander un devis détaillé, réponse sous 24h</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
