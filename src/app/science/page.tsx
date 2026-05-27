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

const unmetNeedCards = [
  {
    label: "Hepatocellular Carcinoma (HCC)",
    value: "22%",
    metric: "five-year relative survival across all stages",
    description:
      "Survival falls for regional and distant-stage disease, while advanced HCC remains associated with limited treatment options.",
    source: "American Cancer Society / SEER Database",
    href: "https://www.cancer.org/cancer/types/liver-cancer/detection-diagnosis-staging/survival-rates.html",
  },
  {
    label: "Metastatic Colorectal Cancer (CRC)",
    value: "13%",
    metric: "five-year survival for distant-stage colon cancer",
    description:
      "Most advanced tumors eventually develop resistance to standard therapies, and pMMR/MSS disease limits immunotherapy efficacy.",
    source: "American Cancer Society / SEER Database",
    href: "https://www.cancer.org/cancer/types/colon-rectal-cancer/detection-diagnosis-staging/survival-rates.html",
  },
  {
    label: "CIPN",
    value: "0",
    metric: "FDA-approved treatments",
    description:
      "Peripheral neuropathy can persist after chemotherapy, and there is currently no approved therapy to prevent or treat CIPN.",
  },
];

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
          <SectionLabel>The Unmet Need</SectionLabel>
          <h2 className="font-serif text-4xl font-normal text-ink">
            Patients are running out of <span className="text-ember">options</span>
          </h2>
          <p className="mt-3 max-w-3xl text-lg leading-8 text-muted">
            Despite advances in targeted therapy and immunotherapy, treatment
            resistance remains the defining challenge in oncology.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {unmetNeedCards.map((card, index) => (
            <Reveal key={card.label} delay={index * 80}>
              <article className="card-surface h-full border-t-4 border-t-marine p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.1em] text-marine">
                  {card.label}
                </p>
                <div className="mt-5 flex items-baseline gap-3">
                  <span className="font-serif text-5xl text-ink">
                    {card.value}
                  </span>
                  <span className="text-sm leading-6 text-muted">
                    {card.metric}
                  </span>
                </div>
                <div className="my-5 h-px bg-line" />
                <p className="text-sm leading-7 text-muted">
                  {card.description}
                </p>
                {card.href ? (
                  <a
                    href={card.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex text-xs font-semibold text-marine transition hover:text-ink"
                  >
                    Source: {card.source}
                  </a>
                ) : null}
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
