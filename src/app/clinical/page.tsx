import type { Metadata } from "next";
import { AppIcon } from "@/components/icon";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { Section, SectionLabel } from "@/components/section";
import {
  clinicalHero,
  clinicalResults,
  nextSteps,
  trialOverview,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Clinical Data",
};

export default function ClinicalPage() {
  return (
    <>
      <PageHero hero={clinicalHero} />

      <Section className="pt-2">
        <Reveal>
          <SectionLabel>Trial Overview</SectionLabel>
        </Reveal>
        <div className="grid gap-4 md:grid-cols-3">
          {trialOverview.map((item, index) => (
            <Reveal key={item.title} delay={index * 70}>
              <article className="h-full rounded-xl bg-mist p-6">
                <h2 className="text-base font-semibold text-ink">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-muted">
                  {item.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section muted>
        <Reveal>
          <SectionLabel>Key Results</SectionLabel>
          <h2 className="font-serif text-4xl font-normal text-ink">
            Safety and Efficacy
          </h2>
        </Reveal>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {clinicalResults.map((result, index) => (
            <Reveal key={result.label} delay={index * 80}>
              <article className="card-surface h-full p-7">
                <h3 className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.08em] text-quiet">
                  <AppIcon name={result.icon} className="h-4 w-4" />
                  {result.label}
                </h3>
                {result.metrics.map((metric, metricIndex) => (
                  <div key={`${metric.value}-${metric.label}`}>
                    {metricIndex > 0 ? (
                      <div className="my-5 h-px bg-line" />
                    ) : null}
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <span className="font-serif text-4xl text-ink">
                        {metric.value}
                      </span>
                      {metric.label ? (
                        <span className="text-base text-muted">
                          {metric.label}
                        </span>
                      ) : null}
                    </div>
                    <p className="mt-2 text-sm leading-6 text-quiet">
                      {metric.detail}
                    </p>
                  </div>
                ))}
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150}>
          <blockquote className="mt-8 rounded-xl border-l-4 border-ember bg-white p-6 text-base italic leading-8 text-muted">
            The excellent safety profile, the promising bio-modulatory and the
            anti-tumor activity strongly support translation into a Phase 1b /
            Phase 2a trial.
          </blockquote>
          <a
            href="https://clinicaltrials.gov/study/NCT04811898"
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-marine transition hover:text-ink"
          >
            <AppIcon name="external" className="h-4 w-4" />
            View on ClinicalTrials.gov
          </a>
        </Reveal>
      </Section>

      <Section>
        <Reveal>
          <SectionLabel>Pharmacodynamics</SectionLabel>
          <h2 className="font-serif text-4xl font-normal text-ink">
            Mechanism <span className="text-ember">confirmed</span>
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-muted">
            The trial demonstrated concentration-dependent downregulation of
            miR-221 and upregulation of its canonical targets, confirming the
            LockMiR mechanism of action in patients.
          </p>
        </Reveal>
      </Section>

      <Section muted>
        <Reveal>
          <div className="flex flex-col gap-5 rounded-[14px] bg-orange-flow p-7 text-white shadow-[0_16px_40px_rgba(217,122,62,0.2)] sm:flex-row sm:items-start md:p-9">
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white/15">
              <AppIcon name="sparkles" className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-xl font-semibold">
                Unexpected Clinical Benefit: CIPN
              </h2>
              <p className="mt-3 text-sm leading-7 text-white/90">
                During the Phase 1a trial, symptomatic clinical benefit was
                observed in patients affected by chemotherapy-induced peripheral
                neuropathy (CIPN), a debilitating side effect with no current
                FDA-approved treatment. Among 13 patients who experienced CIPN,
                improvement was documented on the PGC neurological assessment
                scale.
              </p>
            </div>
          </div>
        </Reveal>
      </Section>

      <Section>
        <Reveal>
          <SectionLabel>What's Next</SectionLabel>
          <h2 className="font-serif text-4xl font-normal text-ink">
            Path to <span className="text-ember">Phase 1b/2a</span>
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-muted">
            The excellent safety profile and promising anti-tumor activity
            support advancement into a confirmatory dose optimization and
            expansion trial as a single agent and/or combination in advanced HCC
            and CRC.
          </p>
        </Reveal>
        <div className="mt-7 grid gap-4 md:grid-cols-3">
          {nextSteps.map((step, index) => (
            <Reveal key={step.title} delay={index * 70}>
              <article className="h-full rounded-xl bg-mist p-6">
                <h3 className="text-base font-semibold text-ink">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted">
                  {step.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
