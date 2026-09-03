import React from "react";
import Link from "next/link";
import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#281450] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Colonne 1 : Brand & Identité */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3">
              {/* Logo vectoriel officiel en version claire pour fond sombre */}
              <div className="flex items-center gap-3">
                <svg
                  className="w-10 h-10 flex-shrink-0"
                  viewBox="0 0 160 140"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Left chevron Violet */}
                  <path
                    d="M38 120 L10 120 L58 20 L84 20 L50 90 L68 90 L88 48 L102 48 L68 120 Z"
                    fill="#6A46B0"
                  />
                  {/* Center fold Teal */}
                  <path
                    d="M60 120 L35 120 L82 20 L108 20 L76 86 L96 86 L118 42 L132 42 L94 120 Z"
                    fill="#0A9678"
                  />
                  {/* Right W element */}
                  <path
                    d="M106 120 L86 120 L118 55 L134 55 L120 85 L136 85 L152 55 L166 55 L136 120 Z"
                    fill="#8E65D8"
                  />
                </svg>
                <div className="flex flex-col leading-none">
                  <span className="font-extrabold text-[22px] tracking-tight text-white font-poppins">
                    NetWave
                  </span>
                  <span className="font-semibold text-[15px] tracking-wide text-[#0A9678] font-poppins">
                    Studio
                  </span>
                </div>
              </div>
            </Link>

            <p className="text-gray-300 text-[14px] leading-relaxed max-w-sm pt-2">
              Agence d&apos;ingénierie web et logicielle d&apos;élite. Nous concevons des architectures robustes, performantes et scalables pour les marques ambitieuses.
            </p>

            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn NetWave Studio"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#0A9678] text-gray-300 hover:text-white flex items-center justify-center transition-all duration-200"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub NetWave Studio"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#0A9678] text-gray-300 hover:text-white flex items-center justify-center transition-all duration-200"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter NetWave Studio"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#0A9678] text-gray-300 hover:text-white flex items-center justify-center transition-all duration-200"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Colonne 2 : Navigation */}
          <div className="space-y-4">
            <h3 className="text-white text-[15px] font-semibold tracking-wider font-poppins uppercase">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-[14px]">
              <li>
                <Link href="/services" className="text-gray-300 hover:text-[#0A9678] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/realisations" className="text-gray-300 hover:text-[#0A9678] transition-colors">
                  Réalisations
                </Link>
              </li>
              <li>
                <Link href="/methodologie" className="text-gray-300 hover:text-[#0A9678] transition-colors">
                  Méthodologie
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="text-gray-300 hover:text-[#0A9678] transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/tarifs" className="text-gray-300 hover:text-[#0A9678] transition-colors">
                  Tarifs
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 3 : Expertise & Offres */}
          <div className="space-y-4">
            <h3 className="text-white text-[15px] font-semibold tracking-wider font-poppins uppercase">
              Expertise
            </h3>
            <ul className="space-y-2.5 text-[14px] text-gray-300">
              <li>Développement Web sur-mesure</li>
              <li>Applications Web & SaaS</li>
              <li>Architecture & Optimisation TTFB</li>
              <li>Modernisation de plateformes</li>
              <li>Accompagnement & Conseil Tech</li>
            </ul>
          </div>

          {/* Colonne 4 : Coordonnées */}
          <div className="space-y-4">
            <h3 className="text-white text-[15px] font-semibold tracking-wider font-poppins uppercase">
              Contact
            </h3>
            <ul className="space-y-3 text-[14px] text-gray-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#0A9678] mt-0.5 flex-shrink-0" />
                <span>Paris, France &amp; International</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#0A9678] flex-shrink-0" />
                <a href="mailto:contact@netwavestudio.com" className="hover:text-white transition-colors">
                  contact@netwavestudio.com
                </a>
              </li>
              <li className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0A9678] hover:text-white transition-colors"
                >
                  Ouvrir le formulaire
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Ligne inférieure de Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>© {new Date().getFullYear()} NetWave Studio. Tous droits réservés.</p>
          <div className="flex items-center space-x-6">
            <Link href="/contact" className="hover:text-gray-300 transition-colors">
              Mentions Légales
            </Link>
            <Link href="/contact" className="hover:text-gray-300 transition-colors">
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
