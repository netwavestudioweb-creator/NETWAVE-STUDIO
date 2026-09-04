import React from "react";
import { Mail, MapPin, Clock, ShieldCheck, MessageSquare } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact & Devis — NetWave Studio",
  description:
    "Échangez directement avec un architecte logiciel de NetWave Studio. Demandez un devis précis et sans engagement sous 24-48h pour vos projets web, logiciels, réseaux ou IA.",
};

export default function ContactPage() {
  return (
    <div className="w-full bg-white font-inter">
      {/* En-tête */}
      <section className="bg-[#F5F5F7] py-16 md:py-24 border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-semibold text-[#0A9678] tracking-widest uppercase font-mono">
            ÉCHANGE &amp; CHIFFRAGE
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#281450] font-poppins">
            Parlons de votre projet
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Partagez-nous vos objectifs techniques et vos défis. Nous vous répondons sous 24 à 48
            heures avec une première analyse de cadrage.
          </p>
        </div>
      </section>

      {/* Contenu Contact & Formulaire */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Colonne d'informations */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#281450] font-poppins">
                NetWave Studio à votre écoute
              </h2>
              <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                Que ce soit pour la création d&apos;un site vitrine ou e-commerce, un outil de gestion
                sur mesure, une infrastructure réseau ou un agent IA, un technicien réseaux &amp; développeur
                full-stack examine personnellement votre demande.
              </p>
            </div>

            <div className="space-y-3.5">
              {/* WhatsApp Direct */}
              <a
                href="https://wa.me/2290150884670?text=Bonjour%20NetWave%20Studio,%20je%20souhaite%20un%20devis."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-5 rounded-2xl bg-[#25D366]/5 border border-[#25D366]/30 hover:bg-[#25D366]/10 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#25D366] shadow-xs shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xs font-bold text-[#281450] uppercase font-mono">
                      WhatsApp Business
                    </h3>
                    <span className="text-[10px] bg-[#25D366]/20 text-[#128C7E] px-2 py-0.5 rounded font-mono font-semibold">
                      Direct
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-gray-800 group-hover:text-[#128C7E] transition-colors">
                    +229 01 50 88 46 70
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Échange instantané pour cadrer votre demande
                  </p>
                </div>
              </a>

              {/* Email direct */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#F5F5F7] border border-[#E5E7EB]">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#0A9678] shadow-xs shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-[#281450] uppercase font-mono">Email direct</h3>
                  <a
                    href="mailto:netwave.studio.web@gmail.com"
                    className="text-sm font-semibold text-gray-800 hover:text-[#0A9678] transition-colors"
                  >
                    netwave.studio.web@gmail.com
                  </a>
                  <p className="text-xs text-gray-500 mt-0.5">Réponse garantie sous 24h ouvrées</p>
                </div>
              </div>

              {/* Localisation */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#F5F5F7] border border-[#E5E7EB]">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#0A9678] shadow-xs shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-[#281450] uppercase font-mono">Localisation</h3>
                  <p className="text-sm font-semibold text-gray-800">Cotonou, Bénin</p>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Intervention locale et accompagnement à l&apos;international
                  </p>
                </div>
              </div>

              {/* Horaires */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#F5F5F7] border border-[#E5E7EB]">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#0A9678] shadow-xs shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-[#281450] uppercase font-mono">Disponibilité</h3>
                  <p className="text-sm font-semibold text-gray-800">Du lundi au vendredi</p>
                  <p className="text-xs text-gray-500 mt-0.5">08:30 — 18:30 (GMT+1)</p>
                </div>
              </div>
            </div>

            {/* Confidentialité */}
            <div className="p-5 rounded-2xl bg-[#1E0F3D] text-white space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#0fb894] uppercase">
                <ShieldCheck className="w-4 h-4" />
                <span>Confidentialité Assurée</span>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed">
                Toutes les informations transmises concernant votre architecture ou votre projet
                restent strictement confidentielles. Un accord de confidentialité (NDA) peut être
                signé avant tout échange approfondi.
              </p>
            </div>
          </div>

          {/* Colonne Formulaire haute précision */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-[#E5E7EB] p-6 sm:p-10 shadow-lg shadow-[#281450]/5">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
