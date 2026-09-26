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
  title: "NetWave Studio — Accélérateur de Notoriété, Visibilité & Croissance Ventes",
  description:
    "NetWave Studio transforme votre entreprise en une machine d'attraction client. Multipliez votre visibilité, faites connaître votre marque et convertissez la curiosité en chiffre d'affaires.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "NetWave Studio — Moteur de Notoriété & d'Acquisition Client",
    description:
      "Positionnez votre marque au sommet. Plus de visibilité, plus de prospects qualifiés au courant de vos offres, plus de ventes.",
    url: "https://www.netwave-studio.company",
    siteName: "NetWave Studio",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "NetWave Studio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NetWave Studio — Moteur de Notoriété & d'Acquisition Client",
    description: "Visibilité maximale, captation de prospects qualifiés & augmentation des ventes.",
    images: ["/twitter-image"],
  },
};

export default function HomePage() {
  return (
    <div className="flex flex-col w-full overflow-hidden font-inter">
      {/* ============================================================
          SECTION 1 : HERO MODERNISÉ (Attraction Client & Visibilité)
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
                  Moteur d&apos;Acquisition Client &amp; Notoriété • Cotonou &amp; International
                </span>
              </div>

              {/* Accroche Principale (Visibilité & Croissance Ventes) */}
              <h1 className="text-[32px] sm:text-[48px] lg:text-[58px] font-extrabold text-[#281450] tracking-tight leading-[1.12] font-poppins">
                Soyez vu. Soyez choisi. Multipliez vos ventes.
              </h1>

              <p className="text-[17px] sm:text-[18px] text-[#1F2937]/80 leading-relaxed max-w-2xl font-inter">
                Nous transformons votre entreprise en une machine d&apos;attraction client. Faites connaître votre marque auprès de milliers de prospects qualifiés et convertissez chaque visiteur en chiffre d&apos;affaires réel.
              </p>

              {/* Boutons CTA Pill Shape */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <Link
                  href="/contact"
                  id="hero-cta-contact"
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#0A9678] hover:bg-[#0fb894] text-white font-bold text-[15px] shadow-md shadow-[#0A9678]/25 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 active:scale-[0.98] cta-shimmer"
                >
                  <span>Propulser ma visibilité</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/#estimateur"
                  id="hero-cta-estimator"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border-2 border-[#281450] bg-transparent text-[#281450] hover:bg-[#281450] hover:text-white font-bold text-[15px] hover:-translate-y-0.5 transition-all duration-200 active:scale-[0.98]"
                >
                  <Calculator className="w-4 h-4 text-[#0A9678]" />
                  <span>Calculer mon potentiel d&apos;acquisition</span>
                </Link>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-gray-500 font-medium">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0A9678]" />
                  Impact visuel immédiat
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0A9678]" />
                  Flux de prospects au courant
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0A9678]" />
                  Conversion d&apos;audience max
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
          SECTION 2 : BANDEAU PREUVE SOCIALE & MOTEUR D'ACQUISITION
         ============================================================ */}
      <section className="w-full bg-[#F5F5F7] py-10 border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-1">
            <p className="text-xs font-semibold text-[#0A9678] uppercase tracking-widest font-mono">
              Accélération de Marque &amp; Confiance
            </p>
            <h3 className="text-base sm:text-lg font-bold text-[#281450] font-poppins">
              Une présence digitale conçue pour capturer l&apos;attention de votre marché
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
                <p className="text-xs text-gray-500 font-inter">Notoriété institutionnelle &amp; plateformes captivantes</p>
              </div>
            </div>

            {/* Cible 2 : Particuliers & Indépendants */}
            <div className="p-4 rounded-2xl bg-white border border-[#E5E7EB] flex items-center gap-3.5 shadow-xs card-hover-glow">
              <div className="w-10 h-10 rounded-xl bg-[#0A9678]/10 text-[#0A9678] flex items-center justify-center font-bold shrink-0">
                <Sparkles className="w-5 h-5 text-[#0A9678]" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#281450] font-poppins">Marques &amp; Porteurs de Projets</h4>
                <p className="text-xs text-gray-500 font-inter">Positionnement premium &amp; acquisition directe</p>
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
                  <p className="text-[11px] text-[#0A9678] group-hover:text-[#0fb894] transition-colors font-mono">+280% Notoriété Client</p>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-[#0A9678] group-hover:translate-x-1 transition-transform shrink-0 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 3 : DÉPLIANT PORTFOLIO INTERACTIF (Vitrine de Notoriété)
         ============================================================ */}
      <section className="w-full bg-white py-20 md:py-28 border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 mb-8">
          <span className="text-xs font-semibold text-[#0A9678] uppercase tracking-widest font-mono">
            Systèmes d&apos;Acquisition &amp; De Visibilité
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#281450] font-poppins">
            Explorez des marques qui captent l&apos;attention et génèrent des ventes
          </h2>
          <p className="text-base text-gray-600 font-inter max-w-2xl mx-auto">
            Dépliez notre catalogue interactif ci-dessous et découvrez comment nous propulsons nos partenaires au centre de leur marché.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Dépliant interactif */}
          <InteractiveBrochure />

          <div className="pt-8 text-center">
            <Link
              href="/realisations"
              id="case-study-cta"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#0A9678] hover:bg-[#0fb894] text-white font-bold text-base shadow-lg shadow-[#0A9678]/25 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 active:scale-[0.98]"
            >
              <span>Voir les réussites et histoires de croissance</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 4 : LES 4 LEVIERS DE VISIBILITÉ & DE VENTES
         ============================================================ */}
      <section className="w-full bg-[#F5F5F7] py-20 md:py-28 border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-xs font-semibold text-[#0A9678] uppercase tracking-widest font-mono">
              Les 4 Leviers de Notoriété
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#281450] font-poppins">
              Un dispositif complet pour attirer, impacter et convertir.
            </h2>
            <p className="text-base text-gray-600 font-inter">
              De la mise en avant de votre image à la fermeture des ventes, nous activons les piliers digitaux qui rendent votre entreprise incontournable.
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
                  Attraction &amp; Ventes E-Commerce
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Transformez la curiosité en paniers validés : vitrines hypnotiques, expérience Mobile Money instantanée (MTN, Moov, Wave) et zéro friction d&apos;achat.
                </p>
              </div>
              <div className="pt-6 mt-4 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-[#0A9678]">
                <span>Dispositif dès 100 000 FCFA</span>
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
                  Plateformes d&apos;Autorité &amp; Notoriété
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Affirmez votre statut de leader de marché avec un positionnement haut de gamme, des rapports dynamiques et une image de marque irréprochable.
                </p>
              </div>
              <div className="pt-6 mt-4 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-[#0A9678]">
                <span>Dispositif dès 150 000 FCFA</span>
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
                  Infrastructures de Croissance
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Supportez des flux massifs de visiteurs sans ralentissement. Disponibilité 99.9% et réponse réseau ultrarapide sur mobile 3G/4G.
                </p>
              </div>
              <div className="pt-6 mt-4 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-[#0A9678]">
                <span>Sur mesure</span>
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
                  Relance Client &amp; Bots WhatsApp
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Automatisez la prise de rendez-vous et le support WhatsApp pour ne plus jamais manquer une opportunité commerciale, 24/7.
                </p>
              </div>
              <div className="pt-6 mt-4 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-[#0A9678]">
                <span>Sur mesure</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#281450] hover:text-[#0A9678] transition-colors"
            >
              Découvrir comment nos leviers propulsent vos ventes
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
                <span>Plan d&apos;Acquisition &amp; Devis Transparent</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold font-poppins text-white leading-tight">
                Calculez le potentiel de visibilité de votre entreprise.
              </h2>

              <p className="text-sm sm:text-base text-gray-300 font-inter leading-relaxed">
                Que vous soyez une <strong>entreprise établie</strong> ou un <strong>créateur ambitieux</strong>, simulez votre dispositif d&apos;acquisition client et découvrez votre plan d&apos;action sur-mesure.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/tarifs"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl cta-shimmer text-white font-bold font-poppins shadow-lg shadow-[#0A9678]/30 hover:scale-105 transition-all duration-300"
                >
                  <span>Simuler mon plan d&apos;acquisition</span>
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
              Le Système d&apos;Accélération NETWAVE
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#281450] font-poppins">
              Une stratégie d&apos;impact guidée par la performance.
            </h2>
            <p className="text-base text-gray-600 font-inter">
              Notre méthode élimine l&apos;improvisation et garantit une prise de parole percutante, captivante et rentable.
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
              STRATÉGIE &amp; ACCÉLÉRATION
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-poppins tracking-tight">
              Prêt à faire passer votre marque à la vitesse supérieure ?
            </h2>
            <p className="text-base sm:text-lg text-gray-200 max-w-2xl mx-auto font-inter">
              Faites connaître vos produits et services à un flux ininterrompu de nouveaux clients. Échangez directement avec notre équipe pour construire votre dispositif de visibilité.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/contact"
              id="final-cta-btn"
              className="inline-flex items-center justify-center gap-3 px-9 py-4 rounded-full bg-[#0A9678] hover:bg-[#0fb894] text-white font-bold text-base shadow-xl shadow-black/20 hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-200 active:scale-[0.98]"
            >
              <span>Activer ma visibilité &amp; mes ventes</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <p className="text-xs text-gray-300 font-mono">
            Réponse sous 24h ouvrées • Diagnostic d&apos;acquisition offert
          </p>
        </div>
      </section>
    </div>
  );
}
