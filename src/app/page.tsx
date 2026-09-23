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
  Calculator,
} from "lucide-react";
import HeroAppVisual from "@/components/HeroAppVisual";
import InteractiveBrochure from "@/components/InteractiveBrochure";
import BentoMethodology from "@/components/BentoMethodology";
import ComparisonMatrix from "@/components/ComparisonMatrix";
import FaqSection from "@/components/FaqSection";

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
          SECTION 1 : HERO MODERNISÉ (Pill Design & Green Pulse)
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
              {/* Badge vert avec impulsion lumineuse (Green Pulse) */}
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#F5F5F7] border border-[#E5E7EB] shadow-xs">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0A9678] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#0A9678] shadow-[0_0_8px_2px_rgba(10,150,120,0.4)]" />
                </span>
                <span className="text-xs font-semibold text-[#281450] tracking-wide font-mono">
                  Disponible pour nouveaux projets • Cotonou &amp; International
                </span>
              </div>

              {/* Accroche Hybride (Ingénierie + Conversion) */}
              <h1 className="text-[30px] sm:text-[46px] lg:text-[58px] font-extrabold text-[#281450] tracking-tight leading-[1.12] font-poppins">
                Des sites &amp; logiciels qui convertissent. Bâtis sur une ingénierie d&apos;élite.
              </h1>

              <p className="text-[17px] sm:text-[18px] text-[#1F2937]/80 leading-relaxed max-w-2xl font-inter">
                Design sur-mesure, code ultra-rapide (3G/4G), SEO &amp; Mobile Money intégrés. Votre prochaine plateforme numérique ne sera pas un template — elle sera votre meilleur actif commercial.
              </p>

              {/* Boutons CTA Pill Shape */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <Link
                  href="/contact"
                  id="hero-cta-contact"
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#0A9678] hover:bg-[#0fb894] text-white font-bold text-[15px] shadow-md shadow-[#0A9678]/25 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 active:scale-[0.98]"
                >
                  <span>Démarrer un projet</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/#estimateur"
                  id="hero-cta-estimator"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border-2 border-[#281450] bg-transparent text-[#281450] hover:bg-[#281450] hover:text-white font-bold text-[15px] hover:-translate-y-0.5 transition-all duration-200 active:scale-[0.98]"
                >
                  <Calculator className="w-4 h-4 text-[#0A9678]" />
                  <span>Simuler mon devis</span>
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
          SECTION 2 : BANDEAU PREUVE SOCIALE & CIBLES (Sociétés & Particuliers)
         ============================================================ */}
      <section className="w-full bg-[#F5F5F7] py-10 border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-1">
            <p className="text-xs font-semibold text-[#0A9678] uppercase tracking-widest font-mono">
              Accompagnement Sur-Mesure
            </p>
            <h3 className="text-base sm:text-lg font-bold text-[#281450] font-poppins">
              Des solutions adaptées aux Sociétés comme aux Particuliers
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
            {/* Cible 1 : Sociétés & Entreprises */}
            <div className="p-4 rounded-2xl bg-white border border-[#E5E7EB] flex items-center gap-3.5 shadow-xs card-hover-glow">
              <div className="w-10 h-10 rounded-xl bg-[#281450]/10 text-[#281450] flex items-center justify-center font-bold shrink-0">
                <LayoutDashboard className="w-5 h-5 text-[#281450]" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#281450] font-poppins">Sociétés &amp; Entreprises</h4>
                <p className="text-xs text-gray-500 font-inter">Logiciels métiers &amp; plateformes scalables</p>
              </div>
            </div>

            {/* Cible 2 : Particuliers & Indépendants */}
            <div className="p-4 rounded-2xl bg-white border border-[#E5E7EB] flex items-center gap-3.5 shadow-xs card-hover-glow">
              <div className="w-10 h-10 rounded-xl bg-[#0A9678]/10 text-[#0A9678] flex items-center justify-center font-bold shrink-0">
                <Sparkles className="w-5 h-5 text-[#0A9678]" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#281450] font-poppins">Particuliers &amp; Porteurs de Projets</h4>
                <p className="text-xs text-gray-500 font-inter">Sites vitrines &amp; solutions personnalisées</p>
              </div>
            </div>

            {/* Cible 3 : Client Réel (Al Kareem Parfumerie) */}
            <Link
              href="/realisations"
              className="group p-4 rounded-2xl bg-white border border-[#E5E7EB] hover:border-[#0A9678]/50 transition-all duration-300 flex items-center justify-between shadow-xs card-hover-glow"
            >
              <div className="flex items-center gap-3 shrink-0">
                <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-gray-100 shrink-0">
                  <Image
                    src="/assets/alkareem/logo.jpg"
                    alt="Al Kareem Parfumerie Cotonou"
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#281450] tracking-wider font-poppins">AL KAREEM PARFUMERIE</h4>
                  <p className="text-[11px] text-gray-500 group-hover:text-[#0A9678] transition-colors font-mono">E-commerce &amp; Luxe</p>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-[#0A9678] group-hover:translate-x-1 transition-transform shrink-0 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 3 : DÉPLIANT PORTFOLIO INTERACTIF (Le Catalogue qui se déplie)
         ============================================================ */}
      <section className="w-full bg-white py-20 md:py-28 border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 mb-8">
          <span className="text-xs font-semibold text-[#0A9678] uppercase tracking-widest font-mono">
            Projets &amp; Portfolio interactif
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#281450] font-poppins">
            Explorez nos réalisations déployées en production
          </h2>
          <p className="text-base text-gray-600 font-inter max-w-2xl mx-auto">
            Dépliez notre catalogue interactif ci-dessous et cliquez sur un projet pour accéder à ses détails complets.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Nouveau dépliant interactif qui s'ouvre au clic */}
          <InteractiveBrochure />

          <div className="pt-8 text-center">
            <Link
              href="/realisations"
              id="case-study-cta"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#0A9678] hover:bg-[#0fb894] text-white font-bold text-base shadow-lg shadow-[#0A9678]/25 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 active:scale-[0.98]"
            >
              <span>Voir la page d&apos;études de cas complète</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 4 : EXPERTISES CLÉS (Les 4 Pôles d'Ingénierie)
         ============================================================ */}
      <section className="w-full bg-[#F5F5F7] py-20 md:py-28 border-b border-[#E5E7EB]">
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
          SECTION 5 : INVITATION ESTIMATEUR DE BUDGET & TARIFS
         ============================================================ */}
      <section className="w-full bg-white py-16 md:py-24 border-b border-[#E5E7EB]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-[#1E0F3D] via-[#281450] to-[#0B0318] p-8 sm:p-12 text-white text-center space-y-6 shadow-2xl relative overflow-hidden">
            {/* Effet de fond lumineux */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#0A9678]/20 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#462882]/40 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />

            <div className="relative z-10 space-y-4 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md text-[#0fb894] text-xs font-mono font-semibold uppercase tracking-wider">
                <Calculator className="w-4 h-4" />
                <span>Simulation de Budget &amp; Délais</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold font-poppins text-white leading-tight">
                Estimez le budget et le délai de votre projet en quelques clics.
              </h2>

              <p className="text-sm sm:text-base text-gray-300 font-inter leading-relaxed">
                Que vous soyez une <strong>société</strong> ou un <strong>particulier</strong>, découvrez notre grille tarifaire transparente et simulez votre devis en direct sur notre page Tarifs.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/tarifs"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl cta-shimmer text-white font-bold font-poppins shadow-lg shadow-[#0A9678]/30 hover:scale-105 transition-all duration-300"
                >
                  <span>Accéder au simulateur de tarif</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 6 : MÉTHODOLOGIE BENTO GRID INTERACTIVE
         ============================================================ */}
      <section className="w-full bg-[#F5F5F7] py-20 md:py-28 border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-xs font-semibold text-[#0A9678] uppercase tracking-widest font-mono">
              Un processus clair, zéro surprise
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#281450] font-poppins">
              Une démarche rigoureuse, du cadrage au déploiement.
            </h2>
            <p className="text-base text-gray-600 font-inter">
              Notre méthode élimine les incertitudes et garantit des livrables stables, performants et
              documentés.
            </p>
          </div>

          {/* Grille Bento interactives pour la méthode */}
          <BentoMethodology />
        </div>
      </section>

      {/* ============================================================
          SECTION 7 : MATRICE COMPARATIVE NETWAVE VS AGENCES
         ============================================================ */}
      <section className="w-full bg-white py-20 md:py-28 border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ComparisonMatrix />
        </div>
      </section>

      {/* ============================================================
          SECTION 8 : FOIRE AUX QUESTIONS & RÉASSURANCE
         ============================================================ */}
      <section className="w-full bg-[#F5F5F7] py-20 md:py-28 border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FaqSection />
        </div>
      </section>

      {/* ============================================================
          SECTION 9 : CTA FINAL DE CONVERSION
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
              className="inline-flex items-center justify-center gap-3 px-9 py-4 rounded-full bg-[#0A9678] hover:bg-[#0fb894] text-white font-bold text-base shadow-xl shadow-black/20 hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-200 active:scale-[0.98]"
            >
              <span>Démarrer une étude de cadrage</span>
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
