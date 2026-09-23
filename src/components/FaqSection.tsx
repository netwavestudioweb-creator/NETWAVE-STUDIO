"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, MessageSquare } from "lucide-react";
import Link from "next/link";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: "Combien de temps prend la livraison d'un site ou logiciel sur-mesure ?",
    answer:
      "Pour un site web ou une plateforme e-commerce, le délai moyen de réalisation est de 7 à 14 jours ouvrés. Pour une application métier ou un logiciel sur-mesure complexe, comptez entre 2 et 4 semaines. Nous fixons un calendrier ferme et tenu au jour près dès la validation du cahier des charges.",
  },
  {
    question: "Comment fonctionnent le règlement et les modalités de paiement ?",
    answer:
      "Les projets sont réglés de manière échelonnée : 50% à l'acompte de démarrage et 50% à la livraison finale après vos tests de recette. Nous acceptons les virements bancaires ainsi que les paiements directs par Mobile Money (MTN & Moov).",
  },
  {
    question: "Mon site sera-t-il vraiment rapide sur les connexions mobiles 3G/4G locales ?",
    answer:
      "Oui, c'est notre signature d'ingénierie. Nous construisons des architectures logicielles sur-mesure adaptées à tous les langages et besoins, distribuées sur un réseau global. Zéro plugin lourd. Vos pages chargent sous la barre des 1.5 seconde, même avec du réseau restreint.",
  },
  {
    question: "Puis-je intégrer les paiements Mobile Money et des notifications WhatsApp ?",
    answer:
      "Absolument. C'est l'une de nos spécialités d'intégration locale. Vos clients peuvent payer par MTN ou Moov Money en direct, et les confirmations de commande ou reçus électroniques peuvent être expédiés instantanément sur WhatsApp.",
  },
  {
    question: "Quelle est votre garantie après le lancement du projet ?",
    answer:
      "Chaque projet inclut une garantie d'ingénierie écrite de 30 jours après la mise en ligne pour traiter le moindre réajustement. Par la suite, nous proposons des contrats de maintenance évolutive et de supervision pour assurer la continuité d'exploitation.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-4xl mx-auto my-12">
      <div className="text-center space-y-3 mb-10">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#0A9678] font-mono">
          Des réponses claires à vos questions
        </span>
        <h3 className="text-2xl sm:text-4xl font-bold font-poppins text-[#281450]">
          Foire aux Questions &amp; Réassurance
        </h3>
        <p className="text-sm text-gray-600 max-w-lg mx-auto font-inter">
          Tout ce que vous devez savoir avant de nous confier votre projet numérique.
        </p>
      </div>

      <div className="space-y-4">
        {FAQS.map((faq, idx) => {
          const isOpen = openIndex === idx;

          return (
            <div
              key={idx}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                isOpen
                  ? "bg-white border-[#0A9678]/50 shadow-md shadow-[#281450]/5"
                  : "bg-white border-[#E5E7EB] hover:border-gray-300"
              }`}
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-poppins focus:outline-none"
              >
                <span className="text-base sm:text-lg font-bold text-[#281450]">
                  {faq.question}
                </span>
                <span
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen ? "bg-[#0A9678] text-white rotate-180" : "bg-[#F5F5F7] text-gray-500"
                  }`}
                >
                  <ChevronDown className="w-5 h-5" />
                </span>
              </button>

              {isOpen && (
                <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-sm text-gray-600 leading-relaxed font-inter border-t border-gray-100 pt-4">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-10 p-6 rounded-2xl bg-[#F5F5F7] border border-[#E5E7EB] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#281450] text-white flex items-center justify-center shrink-0">
            <MessageSquare className="w-5 h-5" />
          </div>
          <div>
            <p className="text-sm font-bold text-[#281450] font-poppins">
              Vous avez une question spécifique ?
            </p>
            <p className="text-xs text-gray-500 font-inter">
              Échangez directement avec notre architecte logiciel par message ou appel.
            </p>
          </div>
        </div>

        <Link
          href="/contact"
          className="px-5 py-2.5 rounded-full bg-[#0A9678] hover:bg-[#0fb894] text-white text-xs font-bold transition-all shadow-sm shrink-0"
        >
          Poser ma question
        </Link>
      </div>
    </div>
  );
}
