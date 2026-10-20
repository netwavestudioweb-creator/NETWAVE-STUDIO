import type { Metadata } from "next";
import { Suspense } from "react";
import ContactFormEn from "@/components/ContactFormEn";
import { CONTACT } from "@/data/site-en";
import { Container, Eyebrow } from "@/components/ui";

export const metadata: Metadata = {
  title: "Contact & Free Quote",
  description:
    "Tell us about your business and receive a clear, fixed-price quote or free local audit within 24 business hours. Direct WhatsApp available.",
  alternates: { canonical: "/en/contact" },
};

export default function ContactPageEn() {
  return (
    <Container className="flex flex-wrap items-start gap-16 pb-24 pt-14 md:pb-30 md:pt-22">
      <div className="flex min-w-0 flex-[1_1_380px] flex-col gap-8">
        <Eyebrow>Contact Us</Eyebrow>
        <h1 className="font-display text-[clamp(40px,5vw,68px)] font-[750] leading-[1.02] tracking-[-0.035em]">
          Let’s discuss your online presence.
        </h1>
        <p className="max-w-[460px] text-lg leading-relaxed text-body">
          A few sentences are all it takes. You will receive a transparent quote and project timeline within 24 business hours.
        </p>

        <a
          href={CONTACT.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between gap-4 rounded-[18px] bg-ink px-6 py-5.5 text-white transition-colors hover:bg-violet-deep"
        >
          <span className="flex flex-col gap-1">
            <span className="eyebrow text-mint">Fastest Reply · WhatsApp</span>
            <span className="font-display text-2xl font-bold">{CONTACT.phoneDisplay}</span>
          </span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-mint" aria-hidden="true">
            <path d="M7 17L17 7M9 7h8v8" />
          </svg>
        </a>

        <dl className="border-t border-line">
          <div className="flex flex-wrap justify-between gap-x-4 gap-y-2 border-b border-line py-4.5">
            <dt className="text-[15px] text-muted">Direct Email</dt>
            <dd className="text-[15px] font-semibold">
              <a href={`mailto:${CONTACT.email}`} className="hover:text-emerald">{CONTACT.email}</a>
            </dd>
          </div>
          <div className="flex flex-wrap justify-between gap-x-4 gap-y-2 border-b border-line py-4.5">
            <dt className="text-[15px] text-muted">Working Timezone</dt>
            <dd className="text-[15px] font-semibold">GMT (Aligned with UK business hours)</dd>
          </div>
          <div className="flex flex-wrap justify-between gap-x-4 gap-y-2 border-b border-line py-4.5">
            <dt className="text-[15px] text-muted">Client Guarantee</dt>
            <dd className="text-[15px] font-semibold">10 Working Days or 20% Refunded</dd>
          </div>
        </dl>
      </div>

      <div className="relative min-w-0 flex-[1.25_1_480px]">
        <Suspense fallback={<div className="h-[500px] animate-pulse rounded-[28px] bg-mist" />}>
          <ContactFormEn />
        </Suspense>
      </div>
    </Container>
  );
}
