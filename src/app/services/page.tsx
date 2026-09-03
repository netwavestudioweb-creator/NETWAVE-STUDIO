import React from "react";
import Link from "next/link";
import { 
  ShoppingCart, 
  LayoutDashboard, 
  Network, 
  MessageSquareCode, 
  ArrowRight, 
  CheckCircle2 
} from "lucide-react";

export const metadata = {
  title: "Services — NetWave Studio",
  description: "Découvrez les 4 domaines d'intervention de NetWave Studio : Développement Web & E-commerce, Logiciels sur mesure, Réseaux & Télécoms, IA conversationnelle & Automatisation.",
};

export default function ServicesPage() {
  const services = [
    {
      icon: ShoppingCart,
      title: "Développement Web & E-commerce",
      description:
        "Un site qui met dix secondes à charger, c'est un client qui referme l'onglet avant d'avoir vu l'offre. Je conçois des sites vitrines et boutiques en ligne pensés pour les conditions réelles du terrain : connexions mobiles parfois instables, habitudes de paiement locales (Mobile Money), parcours d'achat simplifié — y compris via WhatsApp quand c'est pertinent pour l'activité du client.",
      points: [
        "Sites vitrines et boutiques e-commerce",
        "Optimisation des performances sur réseaux 3G/4G",
        "Intégration de paiement Mobile Money",
        "Panels d'administration sur mesure",
      ],
    },
    {
      icon: LayoutDashboard,
      title: "Logiciels & Outils de gestion sur mesure",
      description:
        "Les outils génériques ne collent jamais exactement aux besoins d'une structure. Je développe des applications de gestion, tableaux de bord et systèmes de génération automatisée de rapports, construits autour des processus réels du client plutôt que l'inverse.",
      points: [
        "Tableaux de bord et applications métier",
        "Génération automatisée de rapports (exports PDF/Excel)",
        "Bases de données et architectures de gestion de données",
        "Automatisation de tâches répétitives",
      ],
    },
    {
      icon: Network,
      title: "Infrastructures Réseaux & Télécoms",
      description:
        "Une infrastructure réseau ne se voit pas quand elle fonctionne — elle se remarque seulement le jour où elle manque. J'interviens sur la conception, l'installation et la sécurisation de réseaux d'entreprise, la téléphonie VoIP et le câblage structuré, avec la même rigueur que sur mes projets logiciels.",
      points: [
        "Architecture et déploiement réseau LAN/WAN",
        "Téléphonie VoIP et serveurs Asterisk",
        "Sécurisation des accès (VPN, pare-feu, segmentation)",
        "Supervision et maintenance des systèmes",
      ],
    },
    {
      icon: MessageSquareCode,
      title: "IA conversationnelle & Automatisation",
      description:
        "Un agent vocal ou un assistant automatisé bien conçu absorbe une charge de travail que personne n'a le temps de traiter manuellement. Je développe des agents conversationnels et des automatisations intelligentes, un domaine d'expertise en développement actif que je documente honnêtement à mesure qu'il avance plutôt que de le présenter comme acquis.",
      points: [
        "Agents vocaux et assistants conversationnels",
        "Intégration WhatsApp Business et automatisation de workflows",
        "Connexion à des API tierces et orchestration multi-outils",
      ],
    },
  ];

  return (
    <div className="w-full bg-white">
      {/* En-tête de page */}
      <section className="bg-[#F5F5F7] py-16 md:py-24 border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-semibold text-[#0A9678] tracking-widest uppercase font-mono">
            NOTRE SAVOIR-FAIRE
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#281450] font-poppins">
            Nos Services
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-inter">
            Une ingénierie rigoureuse articulée autour de 4 expertises clés pour répondre aux besoins concrets de votre activité.
          </p>
        </div>
      </section>

      {/* Grille des 4 services détaillés */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="rounded-2xl border border-[#E5E7EB] p-8 bg-white card-elevation-hover flex flex-col justify-between"
              >
                <div className="space-y-5">
                  <div className="w-14 h-14 rounded-xl bg-[#F5F5F7] border border-[#E5E7EB] flex items-center justify-center text-[#0A9678]">
                    <Icon className="w-7 h-7 stroke-[1.75]" />
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
                          <CheckCircle2 className="w-4 h-4 text-[#0A9678] mt-0.5 flex-shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-8 mt-6 border-t border-gray-100">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#281450] hover:text-[#0A9678] transition-colors"
                  >
                    Discuter de ce besoin
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Bandeau d'appel à l'action */}
      <section className="bg-[#281450] text-white py-16 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h3 className="text-2xl sm:text-3xl font-bold font-poppins">
            Un projet en vue ?
          </h3>
          <p className="text-gray-300 text-sm max-w-xl mx-auto">
            Contactez notre équipe pour échanger sur vos besoins et planifier une étude de cadrage.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-[8px] bg-[#0A9678] hover:bg-[#0fb894] text-white font-semibold transition-all shadow-lg"
          >
            Prendre contact
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
