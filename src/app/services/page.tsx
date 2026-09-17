import React from "react";
import Link from "next/link";
import {
  ShoppingCart,
  LayoutDashboard,
  Network,
  MessageSquareCode,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services & Domaines d'Intervention",
  description:
    "Découvrez les domaines d'expertise de NetWave Studio : Développement Web & E-commerce, Logiciels sur mesure, Réseaux & Télécoms, IA conversationnelle & Automatisation.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Services & Expertises — NetWave Studio",
    description:
      "Applications Web, E-commerce, Logiciels métier sur-mesure, Réseaux & Automatisation IA.",
    url: "https://www.netwave-studio.company/services",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Services NetWave Studio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services & Expertises — NetWave Studio",
    description: "Développement Web, Logiciels sur mesure & Infrastructures.",
    images: ["/twitter-image"],
  },
};

export default function ServicesPage() {
  const services = [
    {
      icon: ShoppingCart,
      title: "Développement Web & E-commerce",
      badge: "À partir de 100 000 FCFA",
      description:
        "Un site qui met dix secondes à charger, c'est un client qui referme l'onglet avant d'avoir vu l'offre. Nous concevons des sites vitrines et boutiques en ligne pensés pour les conditions réelles du terrain : connexions mobiles parfois instables, habitudes de paiement locales (Mobile Money), parcours d'achat simplifié — y compris via WhatsApp quand c'est pertinent pour l'activité du client.",
      points: [
        "Sites vitrines et boutiques e-commerce performantes",
        "Optimisation des performances sur réseaux 3G/4G",
        "Intégration de paiement Mobile Money et Cartes Bancaires",
        "Panels d'administration sur mesure et sécurisés",
      ],
    },
    {
      icon: LayoutDashboard,
      title: "Logiciels & Outils de gestion sur mesure",
      badge: "À partir de 150 000 FCFA",
      description:
        "Les outils génériques ne collent jamais exactement aux besoins d'une structure. Nous développons des applications de gestion, tableaux de bord et systèmes de génération automatisée de rapports, construits autour des processus réels du client plutôt que l'inverse.",
      points: [
        "Tableaux de bord opérationnels et applications métier",
        "Génération automatisée de rapports (exports PDF / Excel)",
        "Bases de données relationnelles et intégrité des données",
        "Automatisation de tâches récurrentes chronophages",
      ],
    },
    {
      icon: Network,
      title: "Infrastructures Réseaux & Télécoms",
      badge: "Sur devis",
      description:
        "Une infrastructure réseau ne se voit pas quand elle fonctionne — elle se remarque seulement le jour où elle manque. Nous intervenons sur la conception, l'installation et la sécurisation de réseaux d'entreprise, la téléphonie VoIP et le câblage structuré, avec la même rigueur que sur nos projets logiciels.",
      points: [
        "Architecture et déploiement réseau LAN / WAN",
        "Téléphonie VoIP et serveurs Asterisk",
        "Sécurisation des accès (VPN, pare-feu, segmentation)",
        "Supervision et maintenance préventive des équipements",
      ],
    },
    {
      icon: MessageSquareCode,
      title: "IA conversationnelle & Automatisation",
      badge: "Sur devis",
      description:
        "Un agent conversationnel ou un assistant automatisé bien conçu absorbe une charge de travail que personne n'a le temps de traiter manuellement. Nous développons des agents intelligents connectés à vos API et vos bases de connaissances, documentés avec honnêteté et rigueur technique.",
      points: [
        "Agents intelligents et assistants conversationnels sur mesure",
        "Intégration WhatsApp Business et automatisation de flux clients",
        "Connexion à des API tierces et orchestration multi-outils",
        "Protection des données d'entreprise et confidentialité",
      ],
    },
  ];

  return (
    <div className="w-full bg-white font-inter">
      {/* En-tête de page */}
      <section className="bg-[#F5F5F7] py-16 md:py-24 border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-semibold text-[#0A9678] tracking-widest uppercase font-mono">
            NOTRE SAVOIR-FAIRE
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#281450] font-poppins">
            Nos Domaines d'Intervention
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Une ingénierie rigoureuse articulée autour de 4 expertises clés pour répondre aux besoins
            concrets et mesurables de votre activité.
          </p>
        </div>
      </section>

      {/* Grille des 4 services */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="rounded-2xl border border-[#E5E7EB] p-8 bg-white card-elevation-hover flex flex-col justify-between"
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-[#0A9678]/10 text-[#0A9678] flex items-center justify-center shrink-0">
                      <Icon className="w-7 h-7 stroke-[1.75]" />
                    </div>
                    <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-gray-100 text-[#281450] border border-gray-200">
                      {service.badge}
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold text-[#281450] font-poppins">
                    {service.title}
                  </h2>

                  <p className="text-sm text-gray-600 leading-relaxed font-inter">
                    {service.description}
                  </p>

                  <div className="pt-3 border-t border-gray-100">
                    <p className="text-xs font-semibold text-[#281450] uppercase tracking-wider mb-3 font-mono">
                      Points clés :
                    </p>
                    <ul className="space-y-2.5">
                      {service.points.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2 text-xs text-gray-700 font-medium">
                          <CheckCircle2 className="w-4 h-4 text-[#0A9678] mt-0.5 shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-8 mt-6 border-t border-gray-100 flex items-center justify-between">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#281450] hover:text-[#0A9678] transition-colors"
                  >
                    <span>Discuter de ce besoin</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <Link
                    href="/tarifs"
                    className="text-xs font-semibold text-[#0A9678] hover:underline"
                  >
                    Voir la grille tarifaire
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Bandeau d'appel à l'action */}
      <section className="bg-[#1E0F3D] text-white py-16 md:py-20 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold font-poppins text-white">
            Un projet en vue ?
          </h3>
          <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Contactez NetWave Studio pour échanger sur vos besoins et planifier une étude de cadrage
            technique détaillée.
          </p>
          <div className="flex justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-[#0A9678] hover:bg-[#0fb894] text-white font-semibold text-sm sm:text-base transition-all shadow-lg active:scale-[0.98] w-full sm:w-auto"
            >
              <span>Prendre contact</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
