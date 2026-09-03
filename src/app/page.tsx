import React from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  ShoppingCart,
  LayoutDashboard,
  Network,
  MessageSquareCode,
  Sparkles, 
  CheckCircle2, 
  Zap, 
  ShieldCheck, 
  TrendingDown, 
  Clock, 
  Award,
  ExternalLink
} from "lucide-react";
import LogoGeometricWave from "@/components/LogoGeometricWave";
import AlkareemMockup from "@/components/AlkareemMockup";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      
      {/* ============================================================
          SECTION 2 : HERO
          Fond blanc, overlay dégradé subtil Indigo->Violet (5-8%),
          H1 Poppins Extra Bold 44px-56px, sous-titre Inter 18px,
          CTA Teal + CTA contour Indigo, illustration géométrique zigzag à droite
         ============================================================ */}
      <section className="relative w-full bg-white pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden border-b border-[#F5F5F7]">
        {/* Overlay diagonal très subtil Indigo -> Violet (5-7%) */}
        <div 
          className="absolute inset-0 pointer-events-none hero-gradient-overlay"
          aria-hidden="true" 
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Colonne gauche : Contenu rédactionnel */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Badge d'introduction */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5F5F7] border border-[#E5E7EB]">
                <span className="w-2 h-2 rounded-full bg-[#0A9678]" />
                <span className="text-xs font-semibold text-[#281450] tracking-wide uppercase font-inter">
                  Agence d&apos;ingénierie web &amp; logicielle
                </span>
              </div>

              {/* H1 Poppins Extra Bold responsive 44px à 56px */}
              <h1 className="text-[40px] sm:text-[48px] lg:text-[56px] font-extrabold text-[#281450] tracking-tight leading-[1.1] font-poppins">
                L&apos;ingénierie web d&apos;élite pour vos projets digitaux les plus ambitieux.
              </h1>

              {/* Sous-titre Inter Regular 18px */}
              <p className="text-[18px] text-[#1F2937] leading-relaxed max-w-2xl font-inter">
                NetWave Studio allie rigueur architecturale, performances web extrêmes et conception sur-mesure pour propulser les entreprises en quête d&apos;excellence.
              </p>

              {/* Groupe de boutons d'action */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                {/* CTA principal : fond Teal, texte blanc, ombre légère */}
                <Link
                  href="/contact"
                  id="hero-cta-contact"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-[8px] bg-[#0A9678] hover:bg-[#0fb894] text-white font-semibold text-[16px] shadow-sm hover:shadow-lg hover:shadow-[#0A9678]/25 transition-all duration-200 active:scale-[0.98]"
                >
                  Démarrer un projet
                  <ArrowRight className="w-4 h-4" />
                </Link>

                {/* Bouton secondaire : contour Indigo, fond transparent */}
                <Link
                  href="/realisations"
                  id="hero-cta-portfolio"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-[8px] border-2 border-[#281450] bg-transparent text-[#281450] hover:bg-[#281450] hover:text-white font-semibold text-[16px] transition-all duration-200 active:scale-[0.98]"
                >
                  Voir nos réalisations
                </Link>
              </div>

              {/* Micro-preuves de qualité */}
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
                  Next.js &amp; Edge Ready
                </span>
              </div>
            </div>

            {/* Colonne droite : Illustration géométrique en traits fins reprenant le zigzag du logo */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <LogoGeometricWave />
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 3 : BANDEAU PREUVE SOCIALE
          Fond gris très clair (#F5F5F7), texte discret "Ils nous font confiance",
          logos clients réels en niveaux de gris passant en couleur au survol
         ============================================================ */}
      <section className="w-full bg-[#F5F5F7] py-12 border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            <div className="text-center md:text-left">
              <p className="text-sm font-medium text-gray-500 uppercase tracking-widest font-inter">
                Ils nous font confiance
              </p>
              <p className="text-xs text-gray-400 mt-0.5">
                Des collaborations fondées sur la haute exigence technique
              </p>
            </div>

            {/* Logo client réel : Alkareem Parfumerie */}
            <div className="flex items-center justify-center">
              <Link
                href="/realisations"
                className="group flex items-center gap-3 px-6 py-3 rounded-xl bg-white/60 border border-[#E5E7EB] hover:border-[#0A9678]/50 hover:bg-white transition-all duration-300 shadow-xs"
              >
                <div className="w-9 h-9 rounded-lg bg-gray-200 group-hover:bg-[#281450] text-gray-600 group-hover:text-[#0A9678] flex items-center justify-center font-serif font-bold text-sm transition-colors duration-300">
                  AK
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-sm font-serif font-bold text-gray-400 group-hover:text-[#281450] transition-colors duration-300 tracking-wider">
                    ALKAREEM PARFUMERIE
                  </span>
                  <span className="text-[10px] text-gray-400 group-hover:text-[#0A9678] transition-colors duration-300 font-mono">
                    E-Commerce Luxe &amp; Haute Parfumerie
                  </span>
                </div>
              </Link>
            </div>

            <div className="text-center md:text-right">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0A9678] hover:text-[#281450] transition-colors">
                <Link href="/realisations" className="flex items-center gap-1">
                  Découvrir nos cas d&apos;études
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 4 : SECTION SERVICES (Aperçu, 4 blocs)
          Fond blanc, titre Poppins Bold Indigo, cartes icône Teal trait fin,
          titre Inter Semi-Bold, description courte, bordure 1px gris clair,
          coins arrondis 12px, hover translateY -4px
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
              Nous intervenons sur les défis techniques les plus critiques pour concevoir des plateformes pérennes, rapides et faciles à maintenir.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Bloc 1 */}
            <div className="card-elevation-hover p-6 rounded-[12px] bg-white border border-[#E5E7EB] flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#F5F5F7] border border-[#E5E7EB] flex items-center justify-center text-[#0A9678] mb-5">
                  <ShoppingCart className="w-6 h-6 stroke-[1.75]" />
                </div>
                <h3 className="text-lg font-semibold text-[#281450] font-inter mb-2.5">
                  Développement Web &amp; E-commerce
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Sites vitrines et boutiques en ligne pensés pour les conditions réelles du terrain : performance sur réseau 3G/4G, paiement Mobile Money, parcours d&apos;achat simplifié.
                </p>
              </div>
              <div className="pt-6 mt-4 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-[#0A9678]">
                <span>En savoir plus</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Bloc 2 */}
            <div className="card-elevation-hover p-6 rounded-[12px] bg-white border border-[#E5E7EB] flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#F5F5F7] border border-[#E5E7EB] flex items-center justify-center text-[#0A9678] mb-5">
                  <LayoutDashboard className="w-6 h-6 stroke-[1.75]" />
                </div>
                <h3 className="text-lg font-semibold text-[#281450] font-inter mb-2.5">
                  Logiciels &amp; Outils de gestion sur mesure
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Applications de gestion, tableaux de bord et rapports automatisés, construits autour des processus réels du client.
                </p>
              </div>
              <div className="pt-6 mt-4 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-[#0A9678]">
                <span>En savoir plus</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Bloc 3 */}
            <div className="card-elevation-hover p-6 rounded-[12px] bg-white border border-[#E5E7EB] flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#F5F5F7] border border-[#E5E7EB] flex items-center justify-center text-[#0A9678] mb-5">
                  <Network className="w-6 h-6 stroke-[1.75]" />
                </div>
                <h3 className="text-lg font-semibold text-[#281450] font-inter mb-2.5">
                  Infrastructures Réseaux &amp; Télécoms
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Conception, installation et sécurisation de réseaux d&apos;entreprise, téléphonie VoIP et câblage structuré.
                </p>
              </div>
              <div className="pt-6 mt-4 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-[#0A9678]">
                <span>En savoir plus</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Bloc 4 */}
            <div className="card-elevation-hover p-6 rounded-[12px] bg-white border border-[#E5E7EB] flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#F5F5F7] border border-[#E5E7EB] flex items-center justify-center text-[#0A9678] mb-5">
                  <MessageSquareCode className="w-6 h-6 stroke-[1.75]" />
                </div>
                <h3 className="text-lg font-semibold text-[#281450] font-inter mb-2.5">
                  IA conversationnelle &amp; Automatisation
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Agents conversationnels et automatisations intelligentes, une expertise en développement actif documentée honnêtement.
                </p>
              </div>
              <div className="pt-6 mt-4 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-[#0A9678]">
                <span>En savoir plus</span>
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
          SECTION 5 : ÉTUDE DE CAS MISE EN AVANT (Fond Indigo profond #281450)
          Seule grande section sombre de la page.
          Titre en blanc, chiffres clés en Teal clair visibles (TTFB -75%),
          capture navigateur clair, bouton "Voir l'étude de cas complète" en Teal
         ============================================================ */}
      <section className="w-full bg-[#281450] text-white py-20 md:py-28 overflow-hidden relative">
        {/* Lueur subtile en arrière-plan */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#462882]/40 rounded-full blur-3xl -z-0 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0A9678]/15 rounded-full blur-3xl -z-0 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Colonne métriques et explications */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-mono font-medium text-[#0A9678]">
                <Sparkles className="w-3.5 h-3.5" />
                ÉTUDE DE CAS // PRODUCTION
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold font-poppins text-white leading-tight">
                Alkareem Parfumerie : Diviser les temps d&apos;accès par 4 pour une marque de luxe.
              </h2>

              <p className="text-gray-300 text-base leading-relaxed font-inter">
                Face à une boutique en ligne pénalisée par des lenteurs serveur, NetWave Studio a repensé l&apos;architecture e-commerce sur une pile moderne Next.js et Edge Caching, créant une expérience instantanée digne de la haute parfumerie.
              </p>

              {/* Métrique vérifiée en Teal clair */}
              <div className="pt-2">
                <div className="p-5 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex items-center gap-1.5 text-xs text-gray-400 font-mono mb-1.5">
                    <TrendingDown className="w-4 h-4 text-[#0A9678]" />
                    <span>TEMPS DE RÉPONSE (TTFB)</span>
                  </div>
                  <p className="text-3xl font-extrabold text-[#0fb894] font-poppins">
                    -75%
                  </p>
                  <p className="text-sm text-gray-200 mt-1 font-medium">
                    TTFB réduit de 3-6s à ~1s sur réseau 3G (-75%)
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/realisations"
                  id="case-study-cta"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-[8px] bg-[#0A9678] hover:bg-[#0fb894] text-white font-semibold text-[15px] shadow-lg shadow-[#0A9678]/30 transition-all duration-200 active:scale-[0.98]"
                >
                  Voir l&apos;étude de cas complète
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </div>

            {/* Colonne visuelle : Mockup navigateur clair */}
            <div className="lg:col-span-7 flex justify-center">
              <AlkareemMockup />
            </div>

          </div>

        </div>
      </section>

      {/* ============================================================
          SECTION 6 : MÉTHODOLOGIE (Aperçu, 4 étapes)
          Fond #F5F5F7, 4 colonnes (empilées en mobile),
          numérotées en gros chiffres Poppins violet en fond léger,
          titre d'étape en Inter Semi-Bold, description courte
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
              Notre méthode élimine les incertitudes et garantit des livrables stables, performants et documentés.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Étape 1 */}
            <div className="bg-white rounded-xl p-6 border border-[#E5E7EB] shadow-xs flex flex-col justify-between">
              <div>
                <span className="inline-block text-3xl font-extrabold text-[#462882] font-poppins bg-[#462882]/10 px-3 py-1 rounded-lg mb-4">
                  01
                </span>
                <h3 className="text-lg font-semibold text-[#281450] font-inter mb-2">
                  Découverte &amp; Cadrage
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Analyse exhaustive de vos besoins métier, de votre écosystème technique et formalisation du cahier des charges fonctionnel.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100 text-xs font-medium text-gray-500">
                Spécifications validées
              </div>
            </div>

            {/* Étape 2 */}
            <div className="bg-white rounded-xl p-6 border border-[#E5E7EB] shadow-xs flex flex-col justify-between">
              <div>
                <span className="inline-block text-3xl font-extrabold text-[#462882] font-poppins bg-[#462882]/10 px-3 py-1 rounded-lg mb-4">
                  02
                </span>
                <h3 className="text-lg font-semibold text-[#281450] font-inter mb-2">
                  Architecture Technique
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Choix des technologies, conception des modèles de données, stratégie de cache et maquettage des flux d&apos;interfaces.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100 text-xs font-medium text-gray-500">
                Blueprint &amp; Sécurité
              </div>
            </div>

            {/* Étape 3 */}
            <div className="bg-white rounded-xl p-6 border border-[#E5E7EB] shadow-xs flex flex-col justify-between">
              <div>
                <span className="inline-block text-3xl font-extrabold text-[#462882] font-poppins bg-[#462882]/10 px-3 py-1 rounded-lg mb-4">
                  03
                </span>
                <h3 className="text-lg font-semibold text-[#281450] font-inter mb-2">
                  Développement &amp; Intégration
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Développement itératif avec typage strict, tests de charge, intégration continue et points d&apos;étape réguliers.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100 text-xs font-medium text-gray-500">
                Code typé &amp; révisé
              </div>
            </div>

            {/* Étape 4 */}
            <div className="bg-white rounded-xl p-6 border border-[#E5E7EB] shadow-xs flex flex-col justify-between">
              <div>
                <span className="inline-block text-3xl font-extrabold text-[#462882] font-poppins bg-[#462882]/10 px-3 py-1 rounded-lg mb-4">
                  04
                </span>
                <h3 className="text-lg font-semibold text-[#281450] font-inter mb-2">
                  Mise en Ligne &amp; Suivi
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Déploiement zéro downtime sur infrastructure Edge, monitoring en temps réel, formation et maintenance évolutive.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100 text-xs font-medium text-gray-500">
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
          SECTION 7 : CTA FINAL
          Bande pleine largeur, fond dégradé Indigo->Violet (#281450 -> #462882)
          Titre blanc incitatif ("Discutons de votre projet"),
          Bouton Teal plein, grande taille, centré, menant à /contact
         ============================================================ */}
      <section className="w-full cta-gradient text-white py-20 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          
          <div className="space-y-4">
            <span className="inline-block text-xs font-semibold tracking-widest text-[#0A9678] uppercase bg-white/10 px-3 py-1 rounded-full font-mono">
              COLLABORATION &amp; AUDIT
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-poppins tracking-tight">
              Discutons de votre projet.
            </h2>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto font-inter">
              Que vous lanciez un nouveau produit ou souhaitiez moderniser une infrastructure existante, nos ingénieurs étudient votre besoin avec précision.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/contact"
              id="final-cta-btn"
              className="inline-flex items-center justify-center gap-3 px-9 py-4 rounded-[8px] bg-[#0A9678] hover:bg-[#0fb894] text-white font-semibold text-lg shadow-xl shadow-black/20 hover:shadow-2xl transition-all duration-200 active:scale-[0.98]"
            >
              Demander un cadrage gratuit
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <p className="text-xs text-gray-300">
            Réponse sous 24h ouvrées • Échange direct avec un architecte logiciel
          </p>

        </div>
      </section>

    </div>
  );
}
