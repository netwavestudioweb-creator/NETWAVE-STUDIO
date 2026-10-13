import Link from "next/link";
import Logo from "@/components/Logo";
import { CONTACT, NAV_LINKS } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-ink text-on-dark">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-14 px-4 pb-8 pt-18 sm:px-6">
        <div className="flex flex-wrap justify-between gap-12">
          <div className="flex max-w-[360px] flex-col gap-4">
            <Logo variant="dark" />
            <p className="text-[15px] leading-relaxed">
              Studio d&apos;ingénierie web, logicielle et réseaux, basé à Cotonou. Pour les entreprises du monde
              entier qui veulent enfin être visibles en ligne.
            </p>
          </div>

          <nav aria-label="Pied de page" className="flex flex-wrap gap-12 text-[15px]">
            <div className="flex flex-col gap-3">
              <p className="eyebrow text-on-dark-faint">Studio</p>
              {NAV_LINKS.map((link) => (
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
              <span>{CONTACT.city}</span>
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
