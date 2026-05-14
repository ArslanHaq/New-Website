import type { Metadata } from "next";
import { AppIcon } from "@/components/icon";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { Section, SectionLabel } from "@/components/section";
import {
  lockmirCards,
  scienceHero,
  scienceProblems,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Science",
};

const toneClass = {
  deep: "bg-ink",
  blue: "bg-marine",
  navy: "bg-[#0F3D7A]",
};

export default function SciencePage() {
  return (
    <>
      <PageHero hero={scienceHero} />

      <Section className="pt-2">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {scienceProblems.map((problem, index) => (
            <Reveal key={problem.title} delay={index * 70}>
              <article className="h-full rounded-xl border-l-4 border-marine bg-mist p-6">
                <h2 className="text-base font-semibold text-ink">
                  {problem.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-muted">
                  {problem.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section muted>
        <Reveal>
          <SectionLabel>The Solution</SectionLabel>
          <h2 className="font-serif text-4xl font-normal text-ink">
            LockMiR Technology
          </h2>
          <p className="mt-3 max-w-2xl text-lg leading-8 text-muted">
            A regulatory-layer approach that amplifies existing cancer
            therapies.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {lockmirCards.map((card, index) => (
            <Reveal key={card.title} delay={index * 80}>
              <article
                className={`h-full rounded-[14px] p-7 text-white ${toneClass[card.tone]}`}
              >
                <h3 className="text-xs font-semibold uppercase tracking-[0.1em] text-white/70">
                  {card.title}
                </h3>
                <p className="mt-5 text-sm leading-7 text-white/80">
                  {card.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={140}>
          <div className="mt-8 flex flex-col gap-5 rounded-[14px] bg-orange-flow p-7 text-white shadow-[0_16px_40px_rgba(217,122,62,0.22)] sm:flex-row sm:items-start">
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white/15">
              <AppIcon name="sparkles" className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Novel Benefit</h3>
              <p className="mt-2 text-sm leading-7 text-white/90">
                Preclinical and early clinical evidence suggests LockMiR may
                alleviate chemotherapy-induced peripheral neuropathy (CIPN), a
                debilitating side effect with no current FDA-approved treatment.
              </p>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
