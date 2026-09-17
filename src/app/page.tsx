import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ShoppingCart,
  LayoutDashboard,
  Network,
  MessageSquareCode,
  Sparkles,
  CheckCircle2,
  Zap,
  TrendingDown,
} from "lucide-react";
import HeroAppVisual from "@/components/HeroAppVisual";
import AlkareemMockup from "@/components/AlkareemMockup";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NetWave Studio — Studio d'Ingénierie Web, Logicielle & Académie Tech d'Élite",
  description:
    "NetWave Studio allie rigueur architecturale, performances web extrêmes, conception sur-mesure et académie tech pour propulser les entreprises et talents en Afrique de l'Ouest et à l'international.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "NetWave Studio — Studio d'Ingénierie Web & Logicielle d'Élite",
    description:
      "Solutions numériques sur-mesure, applications web ultra-rapides, logiciels métiers & académie tech d'excellence.",
    url: "https://www.netwave-studio.company",
    siteName: "NetWave Studio",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "NetWave Studio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NetWave Studio — Studio d'Ingénierie Web & Logicielle d'Élite",
    description: "Ingénierie web, logiciels sur-mesure & académie tech.",
    images: ["/twitter-image"],
  },
};

export default function HomePage() {
  return (
    <div className="flex flex-col w-full overflow-hidden font-inter">
      {/* ============================================================
          SECTION 1 : HERO
         ============================================================ */}
      <section className="relative w-full bg-white pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden border-b border-[#F5F5F7]">
        <div
          className="absolute inset-0 pointer-events-none hero-gradient-overlay"
          aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Colonne gauche : Contenu rédactionnel */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5F5F7] border border-[#E5E7EB]">
                <span className="w-2 h-2 rounded-full bg-[#0A9678]" />
                <span className="text-xs font-semibold text-[#281450] tracking-wide uppercase font-mono">
                  Studio d&apos;ingénierie web &amp; logicielle
                </span>
              </div>

              <h1 className="text-[28px] sm:text-[44px] lg:text-[56px] font-extrabold text-[#281450] tracking-tight leading-[1.15] font-poppins">
                L&apos;ingénierie web d&apos;élite pour vos projets digitaux les plus ambitieux.
              </h1>

              <p className="text-[17px] sm:text-[18px] text-[#1F2937]/80 leading-relaxed max-w-2xl font-inter">
                NetWave Studio allie rigueur architecturale, performances web extrêmes et conception
                sur-mesure pour propulser les entreprises en quête d&apos;excellence.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  href="/contact"
                  id="hero-cta-contact"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#0A9678] hover:bg-[#0fb894] text-white font-semibold text-[15px] shadow-sm hover:shadow-lg hover:shadow-[#0A9678]/25 transition-all duration-200 active:scale-[0.98]"
                >
                  Démarrer un projet
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/realisations"
                  id="hero-cta-portfolio"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border-2 border-[#281450] bg-transparent text-[#281450] hover:bg-[#281450] hover:text-white font-semibold text-[15px] transition-all duration-200 active:scale-[0.98]"
                >
                  Voir nos réalisations
                </Link>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-gray-500 font-medium">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0A9678]" />
                  Architecture Zero-Bloat
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0A9678]" />
                  Code pérenne &amp; typé
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0A9678]" />
                  Optimisation 3G/4G locale
                </span>
              </div>
            </div>

            {/* Colonne droite : Visuel immersif Smartphone & Ecosysteme Apps */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end w-full">
              <HeroAppVisual />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 2 : BANDEAU PREUVE SOCIALE & VRAI LOGO
         ============================================================ */}
      <section className="w-full bg-[#F5F5F7] py-10 border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest font-mono">
                Ils nous font confiance
              </p>
              <p className="text-xs text-gray-400 mt-0.5">
                Des collaborations fondées sur la haute exigence technique
              </p>
            </div>

            {/* Vrai logo client : Alkareem Parfumerie */}
            <div className="flex items-center justify-center">
              <Link
                href="/realisations"
                className="group flex items-center gap-3.5 px-5 py-2.5 rounded-2xl bg-white border border-[#E5E7EB] hover:border-[#0A9678]/50 transition-all duration-300 shadow-xs"
              >
                <div className="relative w-9 h-9 rounded-xl overflow-hidden border border-gray-100 shrink-0">
                  <Image
                    src="/assets/alkareem/logo.jpg"
                    alt="Al Kareem Parfumerie Cotonou"
                    fill
                    sizes="36px"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-sm font-bold text-[#281450] tracking-wider font-poppins">
                    AL KAREEM PARFUMERIE
                  </span>
                  <span className="text-[11px] text-gray-500 group-hover:text-[#0A9678] transition-colors font-mono">
                    Haute Parfumerie &amp; E-commerce
                  </span>
                </div>
              </Link>
            </div>

            <div className="text-center md:text-right">
              <Link
                href="/realisations"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0A9678] hover:text-[#281450] transition-colors"
              >
                <span>Découvrir l&apos;étude de cas complète</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 3 : SERVICES CLÉS
         ============================================================ */}
      <section className="w-full bg-white py-20 md:py-28 border-b border-[#F5F5F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-xs font-semibold text-[#0A9678] uppercase tracking-widest font-mono">
              Expertises Clés
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#281450] font-poppins">
              Des solutions logicielles conçues pour performer durablement.
            </h2>
            <p className="text-base text-gray-600 font-inter">
              Nous intervenons sur les défis techniques les plus critiques pour concevoir des
              plateformes pérennes, rapides et faciles à maintenir.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Bloc 1 */}
            <div className="card-elevation-hover p-6 rounded-2xl bg-white border border-[#E5E7EB] flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#F5F5F7] border border-[#E5E7EB] flex items-center justify-center text-[#0A9678] mb-5">
                  <ShoppingCart className="w-6 h-6 stroke-[1.75]" />
                </div>
                <h3 className="text-lg font-semibold text-[#281450] font-poppins mb-2.5">
                  Développement Web &amp; E-commerce
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Sites vitrines et boutiques en ligne pensés pour les conditions réelles du terrain :
                  performance sur réseau 3G/4G, paiement Mobile Money, parcours d&apos;achat fluide.
                </p>
              </div>
              <div className="pt-6 mt-4 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-[#0A9678]">
                <span>À partir de 100 000 FCFA</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Bloc 2 */}
            <div className="card-elevation-hover p-6 rounded-2xl bg-white border border-[#E5E7EB] flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#F5F5F7] border border-[#E5E7EB] flex items-center justify-center text-[#0A9678] mb-5">
                  <LayoutDashboard className="w-6 h-6 stroke-[1.75]" />
                </div>
                <h3 className="text-lg font-semibold text-[#281450] font-poppins mb-2.5">
                  Logiciels &amp; Outils de gestion
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Applications de gestion, tableaux de bord et rapports automatisés, construits
                  autour des processus réels de votre entreprise.
                </p>
              </div>
              <div className="pt-6 mt-4 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-[#0A9678]">
                <span>À partir de 150 000 FCFA</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Bloc 3 */}
            <div className="card-elevation-hover p-6 rounded-2xl bg-white border border-[#E5E7EB] flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#F5F5F7] border border-[#E5E7EB] flex items-center justify-center text-[#0A9678] mb-5">
                  <Network className="w-6 h-6 stroke-[1.75]" />
                </div>
                <h3 className="text-lg font-semibold text-[#281450] font-poppins mb-2.5">
                  Infrastructures Réseaux &amp; Télécoms
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Conception, installation et sécurisation de réseaux d&apos;entreprise, téléphonie
                  VoIP et câblage structuré certifié.
                </p>
              </div>
              <div className="pt-6 mt-4 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-[#0A9678]">
                <span>Sur devis</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Bloc 4 */}
            <div className="card-elevation-hover p-6 rounded-2xl bg-white border border-[#E5E7EB] flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#F5F5F7] border border-[#E5E7EB] flex items-center justify-center text-[#0A9678] mb-5">
                  <MessageSquareCode className="w-6 h-6 stroke-[1.75]" />
                </div>
                <h3 className="text-lg font-semibold text-[#281450] font-poppins mb-2.5">
                  IA conversationnelle &amp; Automatisation
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Agents intelligents connectés à vos données, bots WhatsApp et automatisations de
                  tâches pour libérer le potentiel de vos équipes.
                </p>
              </div>
              <div className="pt-6 mt-4 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-[#0A9678]">
                <span>Sur devis</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#281450] hover:text-[#0A9678] transition-colors"
            >
              Consulter le détail de tous nos services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 4 : ÉTUDE DE CAS MISE EN AVANT (Mockup Authentique)
         ============================================================ */}
      <section className="w-full bg-[#1E0F3D] text-white py-20 md:py-28 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#462882]/40 rounded-full blur-3xl -z-0 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0A9678]/15 rounded-full blur-3xl -z-0 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 space-y-12">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-mono font-medium text-[#0fb894]">
              <Sparkles className="w-3.5 h-3.5" />
              ÉTUDE DE CAS EN PRODUCTION
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-poppins text-white leading-tight">
              Alkareem Parfumerie : Diviser les temps d&apos;accès par 4 pour une marque de luxe.
            </h2>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-inter">
              Face à une boutique en ligne pénalisée par des lenteurs serveur, NetWave Studio a
              repensé l&apos;architecture e-commerce sur une pile moderne avec Edge Caching et tunnel
              de commande WhatsApp instantané.
            </p>
          </div>

          {/* Composant Showcase avec vraies photos et captures */}
          <AlkareemMockup />

          <div className="pt-4 text-center">
            <Link
              href="/realisations"
              id="case-study-cta"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#0A9678] hover:bg-[#0fb894] text-white font-semibold text-base shadow-lg shadow-[#0A9678]/30 transition-all duration-200 active:scale-[0.98]"
            >
              <span>Lire le rapport d&apos;étude de cas complet</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 5 : MÉTHODOLOGIE (Aperçu, 4 étapes)
         ============================================================ */}
      <section className="w-full bg-[#F5F5F7] py-20 md:py-28 border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-xs font-semibold text-[#0A9678] uppercase tracking-widest font-mono">
              Processus d&apos;Excellence
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#281450] font-poppins">
              Une démarche rigoureuse, du cadrage au déploiement.
            </h2>
            <p className="text-base text-gray-600 font-inter">
              Notre méthode élimine les incertitudes et garantit des livrables stables, performants et
              documentés.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Étape 1 */}
            <div className="bg-white rounded-2xl p-6 border border-[#E5E7EB] shadow-xs flex flex-col justify-between">
              <div>
                <span className="inline-block text-2xl font-extrabold text-[#462882] font-poppins bg-[#462882]/10 px-3 py-1 rounded-xl mb-4">
                  01
                </span>
                <h3 className="text-lg font-semibold text-[#281450] font-poppins mb-2">
                  Découverte &amp; Cadrage
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Analyse exhaustive de vos besoins métier, de votre écosystème technique et
                  formalisation du cahier des charges.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100 text-xs font-medium text-gray-500 font-mono">
                Spécifications validées
              </div>
            </div>

            {/* Étape 2 */}
            <div className="bg-white rounded-2xl p-6 border border-[#E5E7EB] shadow-xs flex flex-col justify-between">
              <div>
                <span className="inline-block text-2xl font-extrabold text-[#462882] font-poppins bg-[#462882]/10 px-3 py-1 rounded-xl mb-4">
                  02
                </span>
                <h3 className="text-lg font-semibold text-[#281450] font-poppins mb-2">
                  Architecture Technique
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Choix des technologies, conception des modèles de données, stratégie de cache et
                  maquettage des flux d&apos;interfaces.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100 text-xs font-medium text-gray-500 font-mono">
                Blueprint &amp; Sécurité
              </div>
            </div>

            {/* Étape 3 */}
            <div className="bg-white rounded-2xl p-6 border border-[#E5E7EB] shadow-xs flex flex-col justify-between">
              <div>
                <span className="inline-block text-2xl font-extrabold text-[#462882] font-poppins bg-[#462882]/10 px-3 py-1 rounded-xl mb-4">
                  03
                </span>
                <h3 className="text-lg font-semibold text-[#281450] font-poppins mb-2">
                  Développement &amp; Intégration
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Développement itératif avec typage strict, tests de charge, intégration continue et
                  points d&apos;étape réguliers.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100 text-xs font-medium text-gray-500 font-mono">
                Code typé &amp; révisé
              </div>
            </div>

            {/* Étape 4 */}
            <div className="bg-white rounded-2xl p-6 border border-[#E5E7EB] shadow-xs flex flex-col justify-between">
              <div>
                <span className="inline-block text-2xl font-extrabold text-[#462882] font-poppins bg-[#462882]/10 px-3 py-1 rounded-xl mb-4">
                  04
                </span>
                <h3 className="text-lg font-semibold text-[#281450] font-poppins mb-2">
                  Mise en Ligne &amp; Suivi
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Déploiement zéro downtime sur infrastructure Edge, monitoring en temps réel,
                  formation et maintenance évolutive.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100 text-xs font-medium text-gray-500 font-mono">
                Performance pérenne
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/methodologie"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#281450] hover:text-[#0A9678] transition-colors"
            >
              En savoir plus sur notre méthodologie de livraison
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 6 : CTA FINAL
         ============================================================ */}
      <section className="w-full cta-gradient text-white py-20 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="space-y-4">
            <span className="inline-block text-xs font-semibold tracking-widest text-[#0A9678] uppercase bg-white/10 px-3.5 py-1.5 rounded-full font-mono">
              COLLABORATION &amp; AUDIT
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-poppins tracking-tight">
              Discutons de votre projet.
            </h2>
            <p className="text-base sm:text-lg text-gray-200 max-w-2xl mx-auto font-inter">
              Que vous lanciez un nouveau produit ou souhaitiez moderniser une infrastructure
              existante, l&apos;ingénieur qui portera votre projet étudie votre besoin avec précision.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/contact"
              id="final-cta-btn"
              className="inline-flex items-center justify-center gap-3 px-9 py-4 rounded-xl bg-[#0A9678] hover:bg-[#0fb894] text-white font-semibold text-base shadow-xl shadow-black/20 hover:shadow-2xl transition-all duration-200 active:scale-[0.98]"
            >
              <span>Demander un cadrage gratuit</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <p className="text-xs text-gray-300 font-mono">
            Réponse sous 24h ouvrées • Échange direct avec un architecte logiciel
          </p>
        </div>
      </section>
    </div>
  );
}
