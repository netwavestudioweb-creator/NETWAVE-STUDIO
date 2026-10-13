"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "@/components/Logo";
import { NAV_LINKS } from "@/data/site";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-6 px-4 py-3 sm:px-6">
        <Link href="/" aria-label="NetWave Studio — accueil" onClick={close}>
          <Logo />
        </Link>

        <nav aria-label="Navigation principale" className="hidden items-center gap-6 text-[15px] font-medium lg:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={
                  active
                    ? "text-emerald underline decoration-2 underline-offset-[6px]"
                    : "text-ink-2 transition-colors hover:text-emerald"
                }
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/contact"
          className="hidden min-h-11 items-center rounded-[10px] bg-emerald px-5 text-[15px] font-semibold text-white transition-colors hover:bg-emerald-hover lg:inline-flex"
        >
          Démarrer un projet
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-line lg:hidden"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" className="h-5 w-5" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h10" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Navigation mobile" className="border-t border-line bg-white px-4 pb-6 pt-2 lg:hidden">
          <ul className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={close}
                  aria-current={pathname === link.href ? "page" : undefined}
                  className="flex min-h-14 items-center border-b border-line font-display text-xl font-semibold text-ink"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            onClick={close}
            className="mt-5 flex min-h-[52px] items-center justify-center rounded-xl bg-emerald font-semibold text-white"
          >
            Démarrer un projet
          </Link>
        </nav>
      )}
    </header>
  );
}
