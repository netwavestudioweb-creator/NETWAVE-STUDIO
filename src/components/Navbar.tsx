"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Services", href: "/services" },
    { name: "Réalisations", href: "/realisations" },
    { name: "Méthodologie", href: "/methodologie" },
    { name: "À propos", href: "/a-propos" },
    { name: "Tarifs", href: "/tarifs" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white transition-shadow duration-200 border-b ${
        isScrolled
          ? "border-gray-200 shadow-md shadow-black/[0.03]"
          : "border-[#E5E7EB]"
      }`}
      style={{ minHeight: "68px" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[68px] flex items-center justify-between">
        {/* Logo NetWave Studio */}
        <Link href="/" className="flex items-center gap-2 sm:gap-3 group focus:outline-none shrink-0">
          <div className="relative h-9 sm:h-10 w-36 sm:w-44 flex items-center overflow-hidden">
            <Image
              src="/logo.jpg"
              alt="NetWave Studio — Ingénierie & Design"
              width={176}
              height={40}
              style={{ width: "auto", maxHeight: "40px" }}
              className="object-contain object-left max-h-9 sm:max-h-10 transition-opacity group-hover:opacity-90"
              priority
            />
          </div>
        </Link>

        {/* Navigation Desktop */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2" aria-label="Navigation principale">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`px-3 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "text-[#281450] bg-[#281450]/[0.06] font-semibold"
                    : "text-gray-600 hover:text-[#281450] hover:bg-gray-100/80"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* CTA Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-4 lg:px-5 py-2.5 rounded-xl bg-[#0A9678] hover:bg-[#0fb894] active:scale-[0.98] text-white text-xs font-semibold tracking-wide uppercase font-mono transition-all shadow-xs shadow-[#0A9678]/20"
          >
            <span>Demander un devis</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Bouton Menu Mobile */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-gray-700 hover:text-[#281450] hover:bg-gray-100 focus:outline-none transition-colors"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Menu Mobile déroulant */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#E5E7EB] px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <div className="space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                    isActive
                      ? "bg-[#281450]/10 text-[#281450] font-semibold"
                      : "text-gray-700 hover:bg-gray-100 hover:text-[#281450]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="pt-3 border-t border-gray-100">
            <Link
              href="/contact"
              className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#0A9678] text-white text-sm font-semibold shadow-xs active:scale-[0.98] transition-transform"
            >
              <span>Demander un devis</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
