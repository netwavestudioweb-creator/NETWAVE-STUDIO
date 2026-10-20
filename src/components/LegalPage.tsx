import { Container, Eyebrow } from "@/components/ui";
import type { LegalDoc } from "@/data/legal";

export default function LegalPage({ doc, eyebrow, updatedLabel }: { doc: LegalDoc; eyebrow: string; updatedLabel: string }) {
  return (
    <Container className="flex max-w-[860px] flex-col gap-10 pb-24 pt-16 md:pt-24">
      <header className="flex flex-col gap-5">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="font-display text-[clamp(34px,4.6vw,56px)] font-[750] leading-[1.05] tracking-[-0.03em]">{doc.title}</h1>
        <p className="text-lg leading-relaxed text-ink-2">{doc.intro}</p>
        <p className="text-sm text-muted">
          {updatedLabel} {doc.updated}
        </p>
      </header>
      {doc.sections.map((section) => (
        <section key={section.title} className="flex flex-col gap-3 border-t border-line pt-7">
          <h2 className="text-xl font-bold">{section.title}</h2>
          {section.paragraphs.map((p) => (
            <p key={p} className="leading-relaxed text-ink-2">
              {p}
            </p>
          ))}
        </section>
      ))}
    </Container>
  );
}
