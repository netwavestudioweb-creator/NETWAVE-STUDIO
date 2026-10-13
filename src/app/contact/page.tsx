import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { CONTACT } from "@/data/site";
import { Container, Eyebrow } from "@/components/ui";

export const metadata: Metadata = {
  title: "Contact : demander un devis gratuit",
  description:
    "Décrivez votre projet en quelques lignes et recevez un devis clair et gratuit sous 24 h ouvrées. WhatsApp +229 01 50 88 46 70, Cotonou, Bénin.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <Container className="flex flex-wrap items-start gap-16 pb-24 pt-14 md:pb-30 md:pt-22">
      <div className="flex min-w-0 flex-[1_1_380px] flex-col gap-8">
        <Eyebrow>Contact</Eyebrow>
        <h1 className="font-display text-[clamp(40px,5vw,68px)] font-[750] leading-[1.02] tracking-[-0.035em]">
          Parlez-nous de votre projet.
        </h1>
        <p className="max-w-[460px] text-lg leading-relaxed text-body">
          Quelques lignes suffisent. Vous recevez un devis clair et gratuit, sous 24 h ouvrées.
        </p>

        <a
          href={CONTACT.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between gap-4 rounded-[18px] bg-ink px-6 py-5.5 text-white transition-colors hover:bg-violet-deep"
        >
          <span className="flex flex-col gap-1">
            <span className="eyebrow text-mint">Le plus rapide · WhatsApp</span>
            <span className="font-display text-2xl font-bold">{CONTACT.phoneDisplay}</span>
          </span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-mint" aria-hidden="true">
            <path d="M7 17L17 7M9 7h8v8" />
          </svg>
        </a>

        <dl className="border-t border-line">
          <div className="flex flex-wrap justify-between gap-x-4 gap-y-2 border-b border-line py-4.5">
            <dt className="text-[15px] text-muted">Email</dt>
            <dd className="text-[15px] font-semibold">
              <a href={`mailto:${CONTACT.email}`} className="hover:text-emerald">{CONTACT.email}</a>
            </dd>
          </div>
          <div className="flex flex-wrap justify-between gap-x-4 gap-y-2 border-b border-line py-4.5">
            <dt className="text-[15px] text-muted">Studio</dt>
            <dd className="text-[15px] font-semibold">{CONTACT.city}</dd>
          </div>
          <div className="flex flex-wrap justify-between gap-x-4 gap-y-2 border-b border-line py-4.5">
            <dt className="text-[15px] text-muted">Clients</dt>
            <dd className="text-[15px] font-semibold">Côte d&apos;Ivoire, Gabon, Cameroun, Sénégal, Congo, Maroc, Europe</dd>
          </div>
        </dl>
      </div>

      <div className="relative min-w-0 flex-[1.25_1_480px]">
        <ContactForm />
      </div>
    </Container>
  );
}
