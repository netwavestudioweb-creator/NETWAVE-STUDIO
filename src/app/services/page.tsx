import type { Metadata } from "next";
import { METHOD_STEPS, SERVICES } from "@/data/site";
import { ButtonLink, CheckIcon, Container, Eyebrow, PriceTag } from "@/components/ui";

export const metadata: Metadata = {
  title: "Services : sites web, logiciels, réseaux & IA",
  description:
    "Sites web et e-commerce dès 149 €, logiciels métiers dès 290 €, réseaux et télécoms, assistants IA WhatsApp. Une méthode en 4 étapes avec un calendrier fixé dès le départ.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-line">
        <Container className="flex flex-wrap items-end justify-between gap-10 pb-16 pt-16 md:pt-24">
          <div className="flex min-w-0 flex-[1_1_600px] flex-col gap-6">
            <Eyebrow>Services</Eyebrow>
            <h1 className="font-display text-[clamp(40px,5.4vw,72px)] font-[750] leading-[1.02] tracking-[-0.035em]">
              Du site vitrine au réseau d&apos;entreprise, conçu par la même équipe.
            </h1>
          </div>
          <p className="flex-[0_1_380px] text-lg leading-relaxed text-body">
            Web, logiciel, réseau, automatisation, visibilité, maintenance : des métiers qui se parlent, pour éviter de multiplier les
            prestataires.
          </p>
        </Container>
        <Container className="pb-10">
          <nav aria-label="Aller à un service" className="flex flex-wrap gap-2.5">
            {SERVICES.map((s, i) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="inline-flex min-h-11 items-center rounded-full border border-line-strong px-4.5 text-sm font-semibold hover:border-ink"
              >
                0{i + 1} {s.title}
              </a>
            ))}
            <a href="#methode" className="inline-flex min-h-11 items-center rounded-full bg-mist px-4.5 text-sm font-semibold hover:bg-line">
              Notre méthode
            </a>
          </nav>
        </Container>
      </section>

      <Container className="pt-10">
        {SERVICES.map((s, i) => {
          const accent = s.tone === "emerald" ? "text-emerald-logo" : "text-violet";
          const check = s.tone === "emerald" ? "text-emerald" : "text-violet";
          return (
            <article
              key={s.id}
              id={s.id}
              className="flex scroll-mt-24 flex-wrap gap-x-16 gap-y-8 border-b border-line py-16 last:border-b-0"
            >
              <p className={`flex-[0_1_120px] font-display text-7xl font-[750] leading-none tracking-[-0.04em] ${accent}`}>
                0{i + 1}
              </p>
              <div className="flex min-w-0 flex-[1_1_420px] flex-col gap-4.5">
                <div className="flex flex-wrap items-center gap-3.5">
                  <h2 className="font-display text-4xl font-bold tracking-[-0.025em]">{s.title}</h2>
                  <PriceTag price={s.fromPrice} tone={s.tone} />
                </div>
                <p className="max-w-[560px] text-[17px] leading-relaxed text-body">{s.description}</p>
              </div>
              <ul className="flex flex-[1_1_320px] flex-col gap-3.5 text-base text-ink-2">
                {s.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <CheckIcon className={`mt-0.5 h-5 w-5 ${check}`} />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </Container>

      <section id="methode" className="mt-16 scroll-mt-16 bg-ink text-white">
        <Container className="py-20 md:py-30">
          <div className="mb-16 flex max-w-[760px] flex-col gap-4">
            <Eyebrow tone="mint">Notre méthode</Eyebrow>
            <h2 className="h-display text-[clamp(32px,4vw,52px)]">
              Quatre étapes, des jalons datés, aucune surprise à la livraison.
            </h2>
          </div>
          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {METHOD_STEPS.map((step, i) => (
              <li key={step.key} className="flex flex-col gap-4 rounded-[20px] border border-white/16 px-7 py-8">
                <span className="font-mono text-[13px] font-semibold uppercase text-mint">
                  0{i + 1} · {step.key}
                </span>
                <h3 className="font-display text-[22px] font-bold leading-tight">{step.title}</h3>
                <ul className="flex list-disc flex-col gap-2 pl-4.5 text-[15px] leading-snug text-on-dark">
                  {step.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
          <p className="mt-12 flex flex-wrap items-center gap-x-4 gap-y-2 rounded-2xl border border-mint/30 bg-mint/10 px-7 py-6 text-[15px] text-[#E3F5F0]">
            <strong className="text-mint">Inclus dans chaque livraison</strong>
            <span>Accessibilité (contrastes, navigation clavier, textes alternatifs) et mesure des performances.</span>
          </p>
        </Container>
      </section>

      <Container className="flex flex-wrap items-center justify-between gap-8 py-20 md:py-30">
        <h2 className="h-display flex-[1_1_520px] text-[clamp(32px,4vw,52px)]">
          Un besoin qui ne rentre dans aucune case ?{" "}
          <span className="text-emerald">C&apos;est souvent là qu&apos;on est utiles.</span>
        </h2>
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/contact">Demander une étude gratuite</ButtonLink>
          <ButtonLink href="/tarifs" variant="secondary">
            Voir les tarifs
          </ButtonLink>
        </div>
      </Container>
    </>
  );
}
