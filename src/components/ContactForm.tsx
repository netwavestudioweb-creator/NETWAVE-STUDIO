"use client";

import React, { useState } from "react";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  MessageSquare,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

const serviceLabels: Record<string, string> = {
  web: "Développement Web & E-commerce",
  logiciel: "Logiciels & Outils de gestion sur mesure",
  reseaux: "Infrastructures Réseaux & Télécoms",
  ia: "IA conversationnelle & Automatisation",
  audit: "Audit de performance & Sécurité",
};

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "web",
    budget: "base",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const selectedServiceLabel =
    serviceLabels[formData.service] || "votre projet";

  // URL WhatsApp dynamique avec message pré-rempli
  const whatsappMessage = encodeURIComponent(
    `Bonjour NetWave Studio, je souhaite un devis pour ${selectedServiceLabel}.${
      formData.name.trim() ? ` Mon nom : ${formData.name.trim()}.` : ""
    }`
  );
  const whatsappUrl = `https://wa.me/2290150884670?text=${whatsappMessage}`;

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMessage) setErrorMessage(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Validation client
    if (!formData.name.trim()) {
      setErrorMessage("Veuillez indiquer votre nom complet.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      setErrorMessage("Veuillez renseigner une adresse email valide.");
      return;
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      setErrorMessage(
        "Veuillez décrire votre besoin avec un minimum de 10 caractères."
      );
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(
          data.error || "Une erreur est survenue lors de l'envoi."
        );
      }

      setSubmitted(true);
    } catch (err: any) {
      setErrorMessage(
        err.message ||
          "Impossible d'acheminer votre message pour l'instant. Vous pouvez nous joindre directement via WhatsApp."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setErrorMessage(null);
    setFormData({
      name: "",
      email: "",
      service: "web",
      budget: "base",
      message: "",
    });
  };

  if (submitted) {
    return (
      <div className="py-12 px-6 text-center space-y-6 animate-in fade-in duration-300">
        <div className="w-16 h-16 rounded-2xl bg-[#0A9678]/10 text-[#0A9678] flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-9 h-9" />
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#281450] font-poppins">
            Demande envoyée avec succès !
          </h2>
          <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
            Merci pour votre confiance, <span className="font-semibold text-gray-800">{formData.name}</span>.
            Un architecte logiciel de NetWave Studio a bien reçu vos indications et reviendra vers vous sous 24h ouvrées.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-[#F5F5F7] border border-[#E5E7EB] max-w-md mx-auto text-left text-xs space-y-1 text-gray-600">
          <div className="flex justify-between">
            <span className="font-mono uppercase text-gray-400">Objet :</span>
            <span className="font-semibold text-gray-800">{selectedServiceLabel}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-mono uppercase text-gray-400">Confirmation :</span>
            <span className="text-[#0A9678] font-mono">Transmission validée</span>
          </div>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            type="button"
            onClick={handleReset}
            className="px-6 py-3 rounded-xl bg-[#F5F5F7] text-[#281450] text-xs font-semibold hover:bg-gray-200 transition-colors active:scale-[0.98]"
          >
            Envoyer un autre message
          </button>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0A9678] hover:bg-[#0fb894] text-white text-xs font-semibold transition-all shadow-sm active:scale-[0.98]"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Poursuivre sur WhatsApp</span>
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center justify-between flex-wrap gap-2">
          <h2 className="text-xl font-bold text-[#281450] font-poppins">
            Formulaire de demande de devis
          </h2>
          <span className="text-[11px] font-mono text-[#0A9678] bg-[#0A9678]/10 px-2.5 py-0.5 rounded-full font-semibold">
            Réponse &lt; 24h
          </span>
        </div>
        <p className="text-xs text-gray-500 mt-1">
          Remplissez les champs ci-dessous pour nous aider à qualifier votre besoin avec précision.
        </p>
      </div>

      {errorMessage && (
        <div className="p-4 rounded-xl bg-red-50 border border-red-200 flex items-start gap-3 text-red-800 text-xs animate-in fade-in">
          <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="font-semibold">{errorMessage}</p>
            <p className="text-red-600">
              En cas d&apos;urgence, écrivez-nous directement sur WhatsApp au +229 01 50 88 46 70.
            </p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="contact-name"
              className="block text-xs font-semibold text-gray-700 uppercase font-mono mb-1.5"
            >
              Nom complet *
            </label>
            <input
              type="text"
              id="contact-name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              disabled={isLoading}
              required
              placeholder="Ex. Alexandre Dumas"
              className="w-full px-4 py-3 rounded-xl border border-[#E5E7EB] bg-[#F5F5F7] text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#0A9678] focus:bg-white transition-all disabled:opacity-50"
            />
          </div>

          <div>
            <label
              htmlFor="contact-email"
              className="block text-xs font-semibold text-gray-700 uppercase font-mono mb-1.5"
            >
              Adresse email *
            </label>
            <input
              type="email"
              id="contact-email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              disabled={isLoading}
              required
              placeholder="alexandre@entreprise.com"
              className="w-full px-4 py-3 rounded-xl border border-[#E5E7EB] bg-[#F5F5F7] text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#0A9678] focus:bg-white transition-all disabled:opacity-50"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="contact-type"
              className="block text-xs font-semibold text-gray-700 uppercase font-mono mb-1.5"
            >
              Domaine d&apos;intervention *
            </label>
            <select
              id="contact-type"
              name="service"
              value={formData.service}
              onChange={handleChange}
              disabled={isLoading}
              className="w-full px-4 py-3 rounded-xl border border-[#E5E7EB] bg-[#F5F5F7] text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#0A9678] focus:bg-white transition-all disabled:opacity-50"
            >
              <option value="web">Développement Web &amp; E-commerce (dès 100k FCFA)</option>
              <option value="logiciel">Logiciels &amp; Outils de gestion (dès 150k FCFA)</option>
              <option value="reseaux">Infrastructures Réseaux &amp; Télécoms (Sur devis)</option>
              <option value="ia">IA conversationnelle &amp; Automatisation (Sur devis)</option>
              <option value="audit">Audit de performance &amp; Sécurité</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="contact-budget"
              className="block text-xs font-semibold text-gray-700 uppercase font-mono mb-1.5"
            >
              Budget envisagé
            </label>
            <select
              id="contact-budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              disabled={isLoading}
              className="w-full px-4 py-3 rounded-xl border border-[#E5E7EB] bg-[#F5F5F7] text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#0A9678] focus:bg-white transition-all disabled:opacity-50"
            >
              <option value="base">100 000 — 300 000 FCFA</option>
              <option value="intermediaire">300 000 — 800 000 FCFA</option>
              <option value="avance">800 000 — 2 500 000 FCFA</option>
              <option value="surmesure">&gt; 2 500 000 FCFA / Projet d&apos;envergure</option>
              <option value="undetermined">À cadrer ensemble</option>
            </select>
          </div>
        </div>

        <div>
          <label
            htmlFor="contact-message"
            className="block text-xs font-semibold text-gray-700 uppercase font-mono mb-1.5"
          >
            Description du projet &amp; objectifs *
          </label>
          <textarea
            id="contact-message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            disabled={isLoading}
            required
            rows={4}
            placeholder="Décrivez brièvement votre besoin, vos délais souhaités et vos contraintes techniques..."
            className="w-full px-4 py-3 rounded-xl border border-[#E5E7EB] bg-[#F5F5F7] text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#0A9678] focus:bg-white transition-all disabled:opacity-50"
          />
        </div>

        <div className="space-y-3 pt-1">
          <button
            type="submit"
            id="contact-submit-btn"
            disabled={isLoading}
            className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-[#0A9678] hover:bg-[#0fb894] text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-200 active:scale-[0.98] disabled:opacity-60 cursor-pointer"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Transmission en cours...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Demander un devis détaillé, réponse sous 24-48h</span>
              </>
            )}
          </button>

          {/* Option WhatsApp Business direct */}
          <div className="relative flex py-2 items-center">
            <div className="flex-grow border-t border-gray-200" />
            <span className="flex-shrink mx-4 text-[11px] font-mono uppercase text-gray-400">
              Ou échange direct
            </span>
            <div className="flex-grow border-t border-gray-200" />
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="contact-whatsapp-btn"
            className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/15 text-[#128C7E] font-semibold text-xs border border-[#25D366]/30 transition-all active:scale-[0.98]"
          >
            <MessageSquare className="w-4 h-4 text-[#25D366]" />
            <span>Discuter sur WhatsApp Business (+229 01 50 88 46 70)</span>
          </a>
        </div>

        <div className="flex items-center justify-center gap-2 text-[11px] text-gray-400 text-center pt-2">
          <ShieldCheck className="w-3.5 h-3.5 text-[#0A9678]" />
          <span>Données strictement confidentielles • Réponse humaine sans intermédiaire</span>
        </div>
      </form>
    </div>
  );
}
