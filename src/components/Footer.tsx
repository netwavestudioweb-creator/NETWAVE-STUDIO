import React from "react";
import Link from "next/link";
import { Mail, MapPin, Phone, ArrowUpRight, ShieldCheck, Heart } from "lucide-react";
import LogoNetWave from "@/components/LogoNetWave";

export default function Footer() {
  return (
    <footer className="bg-[#1E0F3D] text-white border-t border-white/10 font-inter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Colonne 1 : Marque & Identité */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <LogoNetWave variant="light" />
            </Link>

            <p className="text-gray-300 text-[14px] leading-relaxed max-w-sm pt-2">
              Studio d'ingénierie web, logicielle et télécoms de référence. Nous concevons des
              systèmes performants, ergonomiques et résilients pensés pour les réalités du terrain.
            </p>

            <div className="pt-3">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-gray-300">
                <ShieldCheck className="w-3.5 h-3.5 text-[#0fb894]" />
                <span>Code propriétaire • Zéro dépendance bloquante</span>
              </div>
            </div>
          </div>

          {/* Colonne 2 : Services */}
          <div className="space-y-3">
            <div className="text-xs font-semibold text-[#0A9678] uppercase tracking-wider font-mono">
              Expertises
            </div>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Web &amp; E-commerce
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Logiciels sur mesure
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Réseaux &amp; Télécoms
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  IA &amp; Automatisation
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 3 : Studio */}
          <div className="space-y-3">
            <div className="text-xs font-semibold text-[#0A9678] uppercase tracking-wider font-mono">
              Navigation
            </div>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/realisations" className="hover:text-white transition-colors">
                  Études de cas
                </Link>
              </li>
              <li>
                <Link href="/methodologie" className="hover:text-white transition-colors">
                  Notre méthode
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="hover:text-white transition-colors">
                  À propos du fondateur
                </Link>
              </li>
              <li>
                <Link href="/tarifs" className="hover:text-white transition-colors">
                  Grille tarifaire
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 4 : Contact direct */}
          <div className="space-y-3">
            <div className="text-xs font-semibold text-[#0A9678] uppercase tracking-wider font-mono">
              Contact direct
            </div>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#0A9678] shrink-0" />
                <span>Cotonou, Bénin</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#0A9678] shrink-0" />
                <a href="mailto:netwave.studio.web@gmail.com" className="hover:text-white transition-colors">
                  netwave.studio.web@gmail.com
                </a>
              </li>
              <li className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0fb894] hover:underline"
                >
                  <span>Formulaire de cadrage</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Pied de page inférieur */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div>
            &copy; {new Date().getFullYear()} NetWave Studio. Tous droits réservés.
          </div>
          <div className="flex items-center gap-6">
            <span>Conçu avec rigueur et passion d'ingénieur.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
