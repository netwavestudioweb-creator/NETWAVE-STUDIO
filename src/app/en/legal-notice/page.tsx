import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { LEGAL_NOTICE_EN } from "@/data/legal";

export const metadata: Metadata = {
  title: LEGAL_NOTICE_EN.title,
  description: LEGAL_NOTICE_EN.intro,
  alternates: { canonical: "/en/legal-notice" },
};

export default function Page() {
  return <LegalPage doc={LEGAL_NOTICE_EN} eyebrow="Legal" updatedLabel="Last updated:" />;
}
