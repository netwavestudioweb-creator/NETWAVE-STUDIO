"use client";

import React, { useState } from "react";
import { Mail, MapPin, Phone, Send, Clock, CheckCircle2, MessageSquare } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Formulaire visuel pour la phase actuelle (non connecté à une base ou API tierce à ce stade)
    setSubmitted(true);
  };

  return (
    <div className="w-full bg-white">
      {/* En-tête */}
      <section className="bg-[#F5F5F7] py-16 md:py-24 border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-semibold text-[#0A9678] tracking-widest uppercase font-mono">
            ÉCHANGE &amp; CHIFFRAGE
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#281450] font-poppins">
            Parlons de votre projet
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-inter">
            Partagez-nous vos objectifs techniques et vos défis. Nous vous répondons sous 24 heures avec une première analyse.
          </p>
        </div>
      </section>

      {/* Contenu Contact & Formulaire */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Colonne d'informations */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#281450] font-poppins">
                NetWave Studio à votre écoute
              </h2>
              <p className="text-sm text-gray-600 mt-3 leading-relaxed font-inter">
                Que ce soit pour un projet complet de développement, un audit de performance ou du conseil architectural, un membre senior de notre équipe prendra directement contact avec vous.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#F5F5F7] border border-[#E5E7EB]">
                <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-[#0A9678] shadow-xs flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-[#281450] uppercase font-mono">Email direct</h3>
                  <a
                    href="mailto:contact@netwavestudio.com"
                    className="text-sm font-semibold text-gray-800 hover:text-[#0A9678] transition-colors"
                  >
                    contact@netwavestudio.com
                  </a>
                  <p className="text-xs text-gray-500 mt-0.5">Réponse garantie en moins de 24h ouvrées</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#F5F5F7] border border-[#E5E7EB]">
                <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-[#0A9678] shadow-xs flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-[#281450] uppercase font-mono">Localisation</h3>
                  <p className="text-sm font-semibold text-gray-800">Paris, France</p>
                  <p className="text-xs text-gray-500 mt-0.5">Intervention en France et à l&apos;international à distance</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#F5F5F7] border border-[#E5E7EB]">
                <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-[#0A9678] shadow-xs flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-[#281450] uppercase font-mono">Disponibilité</h3>
                  <p className="text-sm font-semibold text-gray-800">Du lundi au vendredi</p>
                  <p className="text-xs text-gray-500 mt-0.5">09:00 — 18:30 (CET)</p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-[#281450] text-white space-y-2">
              <span className="text-[11px] font-mono font-semibold text-[#0A9678] uppercase">
                CONFIDENTIALITÉ ASSURÉE
              </span>
              <p className="text-xs text-gray-300 leading-relaxed">
                Toutes les informations transmises concernant votre architecture ou votre idée restent strictement confidentielles. Un accord de confidentialité (NDA) peut être signé avant tout échange approfondi.
              </p>
            </div>
          </div>

          {/* Colonne Formulaire visuel haute-fidélité */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-[#E5E7EB] p-8 sm:p-10 shadow-lg shadow-[#281450]/5">
            {submitted ? (
              <div className="py-16 text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-[#0A9678]/10 text-[#0A9678] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h2 className="text-2xl font-bold text-[#281450] font-poppins">
                  Demande bien enregistrée !
                </h2>
                <p className="text-sm text-gray-600 max-w-md mx-auto">
                  Merci pour votre message. Un architecte logiciel examinera vos indications et reviendra vers vous sous 24h.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-[8px] bg-[#F5F5F7] text-[#281450] text-xs font-semibold hover:bg-gray-200 transition-colors"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-[#281450] font-poppins">
                    Formulaire de demande de devis
                  </h2>
                  <p className="text-xs text-gray-500 mt-1">
                    Remplissez les champs ci-dessous pour nous aider à qualifier votre besoin.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold text-gray-700 uppercase font-mono mb-1.5">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      required
                      placeholder="Ex. Alexandre Dumas"
                      className="w-full px-4 py-3 rounded-[8px] border border-[#E5E7EB] bg-[#F5F5F7] text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#0A9678] focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold text-gray-700 uppercase font-mono mb-1.5">
                      Adresse email *
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      required
                      placeholder="alexandre@entreprise.com"
                      className="w-full px-4 py-3 rounded-[8px] border border-[#E5E7EB] bg-[#F5F5F7] text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#0A9678] focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-type" className="block text-xs font-semibold text-gray-700 uppercase font-mono mb-1.5">
                      Type de projet *
                    </label>
                    <select
                      id="contact-type"
                      defaultValue="web-app"
                      className="w-full px-4 py-3 rounded-[8px] border border-[#E5E7EB] bg-[#F5F5F7] text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#0A9678] focus:bg-white transition-all"
                    >
                      <option value="web-app">Application Web / SaaS sur-mesure</option>
                      <option value="performance">Optimisation TTFB &amp; Performance</option>
                      <option value="migration">Modernisation / Refonte technique</option>
                      <option value="audit">Audit d&apos;architecture &amp; Sécurité</option>
                      <option value="other">Autre accompagnement</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-budget" className="block text-xs font-semibold text-gray-700 uppercase font-mono mb-1.5">
                      Budget estimé
                    </label>
                    <select
                      id="contact-budget"
                      defaultValue="standard"
                      className="w-full px-4 py-3 rounded-[8px] border border-[#E5E7EB] bg-[#F5F5F7] text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#0A9678] focus:bg-white transition-all"
                    >
                      <option value="starter">&lt; 5 000 €</option>
                      <option value="standard">5 000 € — 15 000 €</option>
                      <option value="major">15 000 € — 30 000 €</option>
                      <option value="enterprise">&gt; 30 000 €</option>
                      <option value="undetermined">À définir ensemble</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold text-gray-700 uppercase font-mono mb-1.5">
                    Description du projet &amp; objectifs *
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    placeholder="Décrivez brièvement votre projet, vos délais souhaités et toute spécificité technique utile..."
                    className="w-full px-4 py-3 rounded-[8px] border border-[#E5E7EB] bg-[#F5F5F7] text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#0A9678] focus:bg-white transition-all"
                  />
                </div>

                <button
                  type="submit"
                  id="contact-submit-btn"
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-[8px] bg-[#0A9678] hover:bg-[#0fb894] text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-200"
                >
                  <Send className="w-4 h-4" />
                  Envoyer ma demande de devis
                </button>

                <p className="text-[11px] text-gray-400 text-center">
                  En soumettant ce formulaire, vous acceptez d&apos;être recontacté dans le cadre strict de votre demande.
                </p>
              </form>
            )}
          </div>

        </div>
      </section>
    </div>
  );
}
