import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "mint" | "light" | "outline-light";

const BUTTON_STYLES: Record<ButtonVariant, string> = {
  primary: "bg-emerald text-white hover:bg-emerald-hover",
  secondary: "border-[1.5px] border-ink text-ink hover:bg-ink hover:text-white",
  mint: "bg-mint text-ink font-bold hover:bg-[#5fe3bf]",
  light: "bg-white text-ink font-bold hover:bg-mist",
  "outline-light": "border-[1.5px] border-white/70 text-white hover:bg-white hover:text-ink",
};

export function ButtonLink({
  href,
  variant = "primary",
  size = "lg",
  className = "",
  children,
}: {
  href: string;
  variant?: ButtonVariant;
  size?: "md" | "lg";
  className?: string;
  children: ReactNode;
}) {
  const sizing = size === "lg" ? "min-h-[54px] px-7 text-base" : "min-h-11 px-5 text-[15px]";
  const classes = `inline-flex items-center justify-center gap-2.5 rounded-xl font-semibold transition-colors duration-200 ${sizing} ${BUTTON_STYLES[variant]} ${className}`;
  const external = href.startsWith("http");

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

export function ArrowIcon({ className = "h-[18px] w-[18px]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function CheckIcon({ className = "h-[18px] w-[18px] text-emerald" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} className={`shrink-0 ${className}`} aria-hidden="true">
      <path d="M5 12l5 5L20 7" />
    </svg>
  );
}

export function Eyebrow({
  children,
  tone = "emerald",
  className = "",
}: {
  children: ReactNode;
  tone?: "emerald" | "mint" | "muted";
  className?: string;
}) {
  const color = tone === "mint" ? "text-mint" : tone === "muted" ? "text-muted" : "text-emerald";
  return <p className={`eyebrow ${color} ${className}`}>{children}</p>;
}

export function Container({ children, className = "", id }: { children: ReactNode; className?: string; id?: string }) {
  return (
    <div id={id} className={`mx-auto w-full max-w-[1200px] px-4 sm:px-6 ${className}`}>
      {children}
    </div>
  );
}

/** Cadre de smartphone contenant une capture d'écran réelle. */
export function PhoneFrame({
  src,
  alt,
  className = "w-[250px]",
  priority = false,
  sizes = "250px",
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <div
      className={`relative aspect-[390/812] overflow-hidden rounded-[38px] border-[9px] border-[#05030A] bg-[#05030A] shadow-[0_30px_60px_rgba(0,0,0,0.4)] ${className}`}
    >
      <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover object-top" />
    </div>
  );
}

/** Bandes obliques reprises du monogramme NW, en décor de fond. */
export function Stripes({ variant = "hero" }: { variant?: "hero" | "cta" }) {
  if (variant === "cta") {
    return (
      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 w-64">
        <div className="absolute -top-16 right-28 h-[140%] w-20 -skew-x-[22deg] bg-emerald-logo" />
        <div className="absolute -top-16 right-0 h-[140%] w-20 skew-x-[22deg] bg-emerald-hover" />
      </div>
    );
  }
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <div className="absolute -top-10 left-[8%] h-[120%] w-[70px] -skew-x-[22deg] bg-violet-deep" />
      <div className="absolute -top-10 left-[30%] h-[120%] w-[70px] skew-x-[22deg] bg-emerald-logo/90" />
      <div className="absolute -top-10 left-[58%] h-[120%] w-[70px] -skew-x-[22deg] bg-violet-mid" />
      <div className="absolute -top-10 left-[80%] h-[120%] w-[70px] skew-x-[22deg] bg-emerald-logo/55" />
    </div>
  );
}

export function Faq({ items, defaultOpen = 0 }: { items: { q: string; a: string }[]; defaultOpen?: number }) {
  return (
    <div className="border-t border-line">
      {items.map((item, i) => (
        <details key={item.q} open={i === defaultOpen} className="border-b border-line py-6">
          <summary className="flex justify-between gap-6 font-display text-xl font-semibold">
            {item.q}
            <span aria-hidden="true" className="faq-plus flex h-6 w-6 shrink-0 items-center justify-center self-start text-[26px] leading-none text-emerald transition-transform">
              +
            </span>
          </summary>
          <p className="mt-3.5 max-w-[640px] text-base leading-relaxed text-body">{item.a}</p>
        </details>
      ))}
    </div>
  );
}

export function PriceTag({
  price,
  tone,
  lang = "fr",
}: {
  price: number | null;
  tone: "emerald" | "violet";
  lang?: "fr" | "en";
}) {
  const styles = tone === "emerald" ? "bg-emerald-soft text-emerald" : "bg-violet-soft text-violet-mid";
  return (
    <span className={`rounded-full px-3 py-1.5 text-[13px] font-semibold ${styles}`}>
      {lang === "en" ? (price === null ? "On quote" : `From €${price}`) : price === null ? "Sur devis" : `Dès ${price} €`}
    </span>
  );
}
