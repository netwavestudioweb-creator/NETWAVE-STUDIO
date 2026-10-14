import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FLAGSHIP, formatEur } from "@/data/site";
import { SECTORS, getSector, sectorPacks } from "@/data/sectors";
import { ArrowIcon, ButtonLink, CheckIcon, Container, Eyebrow, PhoneFrame } from "@/components/ui";

type Props = { params: Promise<{ secteur: string }> };

// Seuls les métiers listés existent ; toute autre adresse renvoie une 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return SECTORS.map((s) => ({ secteur: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const sector = getSector((await params).secteur);
  if (!sector) return {};
  return {
    title: `Site web pour ${sector.name.toLowerCase()} : en 10 jours, dès ${formatEur(FLAGSHIP.fromPrice)}`,
    description: `${sector.headline} ${sector.short} Livré en 10 jours ouvrés ou 20 % remboursés, moins cher qu'une agence.`,
    alternates: { canonical: `/sites-web/${sector.slug}` },
  };
}

export default async function SectorPage({ params }: Props) {
  const sector = getSector((await params).secteur);
  if (!sector) notFound();

  const packs = sectorPacks(sector);
  const mainPacks = packs.filter((p) => p.id !== "prestige");
  const prestige = packs.find((p) => p.id === "prestige")!;
  const others = SECTORS.filter((s) => s.slug !== sector.slug);

  return (
    <>
      {/* HERO */}
      <section className="border-b border-line">
        <Container className="flex flex-wrap items-center gap-14 py-16 md:py-24">
          <div className="flex min-w-0 flex-[1_1_520px] flex-col gap-7">
            <nav aria-label="Fil d'Ariane" className="text-sm text-muted">
              <Link href="/sites-web" className="hover:text-emerald">Sites web</Link>
              <span aria-hidden="true"> / </span>
              <span className="text-ink">{sector.name}</span>
            </nav>
            <Eyebrow>Site web · {sector.name}</Eyebrow>
            <h1 className="font-display text-[clamp(38px,5vw,66px)] font-[750] leading-[1.03] tracking-[-0.035em]">
              {sector.headline}
            </h1>
            <p className="max-w-[580px] text-lg leading-relaxed text-body">{sector.intro}</p>
            <ul className="flex flex-wrap gap-x-6 gap-y-2.5 text-sm text-muted">
              {[`Dès ${formatEur(FLAGSHIP.fromPrice)}`, "En 10 jours ou 20 % remboursés", "Moins cher qu'une agence"].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-emerald" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact">
                Demander mon site <ArrowIcon />
              </ButtonLink>
              <ButtonLink href="#formules" variant="secondary">
                Voir les formules
              </ButtonLink>
            </div>
          </div>

          <div className="min-w-0 flex-[1_1_400px]">
            {sector.example ? (
              <figure className="flex flex-col gap-3">
                {sector.example.phone ? (
                  <div className="flex justify-center rounded-[28px] bg-ink py-10">
                    <PhoneFrame src={sector.example.image} alt={sector.example.alt} className="w-[240px]" priority />
                  </div>
                ) : (
                  <div className="relative aspect-[16/11] overflow-hidden rounded-[28px] bg-mist">
                    <Image
                      src={sector.example.image}
                      alt={sector.example.alt}
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, 520px"
                      className="object-cover"
                    />
                  </div>
                )}
                <figcaption className="text-sm text-muted">
                  Exemple réalisé :{" "}
                  <a href={sector.example.url} target="_blank" rel="noopener noreferrer" className="font-semibold text-ink underline underline-offset-4 hover:text-emerald">
                    {sector.example.name} ↗
                  </a>
                </figcaption>
              </figure>
            ) : (
              <div className="flex flex-col gap-4 rounded-[28px] bg-ink p-8 text-white sm:p-10">
                <p className="eyebrow text-mint">Les pages de votre site</p>
                <ol className="flex flex-col">
                  {sector.pages.map((page, i) => (
                    <li key={page} className="flex items-center gap-4 border-b border-white/12 py-3.5 last:border-b-0">
                      <span className="font-mono text-xs font-semibold text-mint">0{i + 1}</span>
                      <span className="text-[17px]">{page}</span>
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </div>
        </Container>
      </section>

      {/* PROBLÈMES */}
      <section className="bg-mist">
        <Container className="py-20 md:py-24">
          <h2 className="h-display mb-10 max-w-[720px] text-[clamp(28px,3.4vw,42px)]">Ce qui vous fait perdre des clients aujourd&apos;hui</h2>
          <ul className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {sector.problems.map((p, i) => (
              <li key={p} className="flex flex-col gap-3 rounded-[20px] border border-line bg-white p-7">
                <span className="font-display text-3xl font-[750] text-emerald-logo">0{i + 1}</span>
                <p className="text-base leading-relaxed text-ink-2">{p}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* CE QUE VOUS RECEVEZ */}
      <Container className="flex flex-wrap gap-14 py-20 md:py-28">
        <div className="flex min-w-0 flex-[1_1_320px] flex-col gap-5">
          <Eyebrow>Ce que vous recevez</Eyebrow>
          <h2 className="h-display text-[clamp(30px,3.6vw,44px)]">Les pages de votre site</h2>
          <ul className="flex flex-wrap gap-2.5">
            {sector.pages.map((page) => (
              <li key={page} className="rounded-full border border-line px-4 py-2 text-sm font-semibold">
                {page}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex min-w-0 flex-[1.4_1_480px] flex-col gap-5">
          <h3 className="font-display text-2xl font-bold">Les outils inclus</h3>
          <ul className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            {sector.tools.map((tool) => (
              <li key={tool.name} className="flex gap-3 border-t border-line pt-5">
                <CheckIcon className="mt-1 h-5 w-5 text-emerald" />
                <div className="flex flex-col gap-1">
                  <strong className="text-base">{tool.name}</strong>
                  <span className="text-[15px] leading-relaxed text-body">{tool.text}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      {/* FORMULES */}
      <section id="formules" className="scroll-mt-20 border-y border-line bg-mist">
        <Container className="py-20 md:py-28">
          <div className="mb-12 flex max-w-[760px] flex-col gap-4">
            <Eyebrow>Les formules</Eyebrow>
            <h2 className="h-display text-[clamp(32px,4vw,52px)]">Les formules pour {sector.name.toLowerCase()}.</h2>
            <p className="text-[17px] leading-relaxed text-body">
              Prix fixes, payables en 3 fois sans frais et dans votre monnaie.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
            {mainPacks.map((pack) => {
              const dark = pack.featured;
              return (
                <article
                  key={pack.id}
                  className={`flex flex-col gap-6 rounded-3xl px-8 py-10 ${dark ? "bg-ink text-white" : "border border-line bg-white"}`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-display text-[26px] font-bold">{pack.name}</h3>
                    {dark && <span className="eyebrow rounded-full bg-mint px-2.5 py-1 text-[11px] text-ink">Recommandée</span>}
                  </div>
                  <div>
                    <p className="font-display text-[clamp(44px,5vw,56px)] font-[750] leading-none tracking-[-0.035em]">
                      {pack.fromPrefix && <span className="text-xl font-semibold tracking-normal">dès </span>}
                      {formatEur(pack.price)}
                    </p>
                    <p className={`mt-2 text-sm ${dark ? "text-on-dark" : "text-muted"}`}>
                      ou 3 × {formatEur(pack.installment)} sans frais
                    </p>
                  </div>
                  <div className="flex flex-col gap-3">
                    <p className={`eyebrow text-[11px] ${dark ? "text-mint" : "text-emerald"}`}>Pour votre activité</p>
                    <ul className="flex flex-col gap-2.5 text-[15px] leading-snug">
                      {pack.sectorFeatures.map((f) => (
                        <li key={f} className="flex gap-2.5">
                          <CheckIcon className={`mt-0.5 h-[18px] w-[18px] ${dark ? "text-mint" : "text-emerald"}`} />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <ul className={`flex flex-col gap-2 border-t pt-5 text-sm ${dark ? "border-white/14 text-on-dark" : "border-[#EFEDF3] text-muted"}`}>
                    {pack.commonFeatures.map((f) => (
                      <li key={f}>· {f}</li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`mt-auto inline-flex min-h-[50px] items-center justify-center rounded-xl text-[15px] font-semibold transition-colors ${
                      dark ? "bg-mint font-bold text-ink hover:bg-[#5fe3bf]" : "border-[1.5px] border-ink text-ink hover:bg-ink hover:text-white"
                    }`}
                  >
                    {pack.cta}
                  </Link>
                </article>
              );
            })}
          </div>

          {/* Prestige à part : l'ancre haute. */}
          <article className="mt-10 flex flex-wrap items-start justify-between gap-8 rounded-3xl border border-line bg-white px-8 py-9 sm:px-10">
            <div className="flex min-w-0 max-w-[680px] flex-col gap-3">
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <h3 className="font-display text-[26px] font-bold">{prestige.name}</h3>
                <p className="font-display text-3xl font-[750] tracking-[-0.03em]">
                  <span className="text-lg font-semibold tracking-normal">dès </span>
                  {formatEur(prestige.price)}
                </p>
              </div>
              <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-ink-2">
                {[...prestige.sectorFeatures, ...prestige.commonFeatures].map((f) => (
                  <li key={f} className="flex gap-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 text-emerald" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <Link
              href="/contact"
              className="inline-flex min-h-[50px] items-center justify-center rounded-xl border-[1.5px] border-ink px-6 text-[15px] font-semibold text-ink transition-colors hover:bg-ink hover:text-white"
            >
              {prestige.cta}
            </Link>
          </article>
          <p className="mt-6 text-[15px] text-body">
            Options, abonnements sans engagement et combo :{" "}
            <Link href="/tarifs" className="font-semibold text-ink underline underline-offset-4">voir tous les tarifs</Link>.
          </p>
        </Container>
      </section>

      {/* CALENDRIER */}
      <Container className="py-20 md:py-28">
        <div className="mb-12 flex max-w-[720px] flex-col gap-4">
          <Eyebrow>Comment ça se passe</Eyebrow>
          <h2 className="h-display text-[clamp(30px,3.6vw,44px)]">En ligne en 10 jours ouvrés, à distance.</h2>
        </div>
        <ol className="grid grid-cols-1 gap-y-6 border-t-2 border-ink sm:grid-cols-2 lg:grid-cols-5">
          {FLAGSHIP.timeline.map((step) => (
            <li key={step.day} className="flex flex-col gap-2 pr-6 pt-6">
              <span className="font-display text-2xl font-[750] text-emerald">{step.day}</span>
              <h3 className="font-bold">{step.title}</h3>
              <p className="text-[15px] leading-relaxed text-body">{step.text}</p>
            </li>
          ))}
        </ol>
        <p className="mt-10 text-sm text-muted">
          Garantie : en ligne au 10e jour ouvré, ou 20 % du prix remboursés.{" "}
          <Link href="/sites-web#conditions" className="font-semibold text-ink underline underline-offset-4">
            Lire les conditions
          </Link>
        </p>
      </Container>

      {/* AUTRES MÉTIERS + CTA */}
      <section className="bg-ink text-white">
        <Container className="flex flex-wrap items-start justify-between gap-12 py-20 md:py-24">
          <div className="flex max-w-[560px] flex-col gap-5">
            <h2 className="h-display text-[clamp(32px,4vw,48px)]">Parlons de votre site.</h2>
            <p className="text-lg leading-relaxed text-on-dark">
              Décrivez votre activité en quelques lignes : devis gratuit, réponse sous 24 h ouvrées.
            </p>
            <ButtonLink href="/contact" variant="mint" className="self-start">
              Demander mon site <ArrowIcon />
            </ButtonLink>
          </div>
          <nav aria-label="Autres métiers" className="flex flex-col gap-3">
            <p className="eyebrow text-on-dark-faint">Autres métiers</p>
            {others.map((s) => (
              <Link key={s.slug} href={`/sites-web/${s.slug}`} className="text-[17px] font-semibold text-white hover:text-mint">
                {s.name} →
              </Link>
            ))}
          </nav>
        </Container>
      </section>
    </>
  );
}
