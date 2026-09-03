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
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on page transition
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
      className={`sticky top-0 z-50 w-full bg-white transition-shadow duration-300 ${
        isScrolled ? "shadow-md shadow-[#281450]/6" : "border-b border-[#F5F5F7]"
      }`}
      style={{ minHeight: "72px" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[72px] flex items-center justify-between">
        {/* Logo NetWave Studio (taille réelle, jamais recoloré) */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative h-10 w-44 flex items-center">
            <Image
              src="/logo.jpg"
              alt="NetWave Studio"
              width={176}
              height={42}
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Navigation Desktop */}
        <nav className="hidden md:flex items-center space-x-7" aria-label="Navigation principale">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-[15px] font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-[#0A9678] font-semibold"
                    : "text-[#1F2937] hover:text-[#0A9678]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* CTA Desktop */}
        <div className="hidden md:flex items-center">
          <Link
            href="/contact"
            id="nav-cta-quote"
            className="inline-flex items-center justify-center px-5 py-2.5 text-[14px] font-semibold text-white bg-[#281450] hover:bg-[#462882] rounded-[8px] transition-all duration-200 shadow-sm hover:shadow-md hover:shadow-[#281450]/20 active:scale-[0.98]"
          >
            Demander un devis
          </Link>
        </div>

        {/* Bouton Menu Mobile */}
        <div className="flex md:hidden items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[#1F2937] hover:text-[#0A9678] hover:bg-[#F5F5F7] transition-colors focus:outline-none"
            aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Menu Déroulant Mobile */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#F5F5F7] bg-white px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2.5 rounded-md text-[15px] font-medium transition-colors ${
                    isActive
                      ? "bg-[#F5F5F7] text-[#0A9678] font-semibold"
                      : "text-[#1F2937] hover:bg-[#F5F5F7] hover:text-[#0A9678]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="pt-2">
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-[15px] font-semibold text-white bg-[#281450] hover:bg-[#462882] rounded-[8px] transition-colors"
              >
                Demander un devis
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
