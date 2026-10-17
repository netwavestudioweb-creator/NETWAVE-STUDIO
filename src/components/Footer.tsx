"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/Logo";
import { CONTACT, NAV_LINKS } from "@/data/site";
import { NAV_LINKS_EN } from "@/data/site-en";

export default function Footer() {
  const pathname = usePathname();
  const isEn = pathname.startsWith("/en");
  const links = isEn ? NAV_LINKS_EN : NAV_LINKS;

  return (
    <footer className="bg-ink text-on-dark">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-14 px-4 pb-8 pt-18 sm:px-6">
        <div className="flex flex-wrap justify-between gap-12">
          <div className="flex max-w-[360px] flex-col gap-4">
            <Logo variant="dark" />
            <p className="text-[15px] leading-relaxed">
              {isEn
                ? "Turnkey online presence studio: website, Google Business Profile, local SEO and WhatsApp Business. Helping local trades and independent businesses turn searchers into loyal customers."
                : "Studio de présence en ligne : site web, Google Maps, réseaux sociaux et WhatsApp. Pour les petites entreprises et commerces indépendants qui veulent enfin être trouvés."}
            </p>
          </div>

          <nav aria-label={isEn ? "Footer navigation" : "Pied de page"} className="flex flex-wrap gap-12 text-[15px]">
            <div className="flex flex-col gap-3">
              <p className="eyebrow text-on-dark-faint">{isEn ? "Studio" : "Studio"}</p>
              {links.map((link) => (
                <Link key={link.href} href={link.href} className="text-white hover:text-mint">
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              <p className="eyebrow text-on-dark-faint">Contact</p>
              <a href={`mailto:${CONTACT.email}`} className="text-white hover:text-mint">
                {CONTACT.email}
              </a>
              <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:text-mint">
                {CONTACT.phoneDisplay}
              </a>
              <span>{isEn ? "Timezone: GMT (UK hours)" : CONTACT.city}</span>
            </div>
            <div className="flex flex-col gap-3">
              <p className="eyebrow text-on-dark-faint">Language</p>
              <Link href="/" className={`hover:text-mint ${!isEn ? "font-bold text-mint" : "text-white"}`}>
                Français (FR)
              </Link>
              <Link href="/en" className={`hover:text-mint ${isEn ? "font-bold text-mint" : "text-white"}`}>
                English (UK)
              </Link>
            </div>
          </nav>
        </div>

        <div className="flex flex-wrap justify-between gap-3 border-t border-white/12 pt-6 text-[13px] text-on-dark-faint">
          <span>© {new Date().getFullYear()} NetWave Studio</span>
          <span className="flex gap-4">
            <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white">
              LinkedIn
            </a>
            <a href={CONTACT.github} target="_blank" rel="noopener noreferrer" className="hover:text-white">
              GitHub
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
