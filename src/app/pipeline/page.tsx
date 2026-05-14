import Link from "next/link";
import type { Metadata } from "next";
import { AppIcon } from "@/components/icon";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { Section, SectionLabel } from "@/components/section";
import {
  pipelineHero,
  pipelinePrograms,
  pipelineStages,
  targetCards,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Pipeline",
};

function ProgressBar({ value }: { value: number }) {
  return (
    <div className="h-2.5 rounded-full bg-line">
      {value > 0 ? (
        <div
          className={[
            "h-full rounded-full",
            value < 100 ? "bg-gradient-to-r from-marine to-ember" : "bg-marine",
          ].join(" ")}
          style={{ width: `${value}%` }}
        />
      ) : null}
    </div>
  );
}

export default function PipelinePage() {
  return (
    <>
      <PageHero hero={pipelineHero} />

      <Section className="pt-2">
        <Reveal>
          <div className="overflow-x-auto rounded-[14px] border border-line bg-white shadow-[0_1px_3px_rgba(12,45,90,0.04)]">
            <table className="w-full min-w-[760px] border-collapse">
              <thead>
                <tr>
                  <th className="border-b-2 border-line px-5 py-4 text-left text-xs font-semibold uppercase tracking-[0.08em] text-quiet">
                    Program
                  </th>
                  <th className="border-b-2 border-line px-5 py-4 text-left text-xs font-semibold uppercase tracking-[0.08em] text-quiet">
                    Indication
                  </th>
                  {pipelineStages.map((stage) => (
                    <th
                      key={stage}
                      className="border-b-2 border-line px-5 py-4 text-center text-xs font-semibold uppercase tracking-[0.08em] text-quiet"
                    >
                      {stage}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {pipelinePrograms.map((program) => (
                  <tr key={program.program}>
                    <td
                      className={[
                        "border-b border-line px-5 py-5 text-sm font-bold",
                        program.highlight ? "text-ember" : "text-ink",
                      ].join(" ")}
                    >
                      {program.program}
                    </td>
                    <td className="border-b border-line px-5 py-5 text-sm text-muted">
                      {program.indication}
                    </td>
                    {program.progress.map((progress, index) => (
                      <td
                        key={`${program.program}-${pipelineStages[index]}`}
                        className="border-b border-line px-5 py-5"
                      >
                        <ProgressBar value={progress} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </Section>

      <Section muted>
        <Reveal>
          <SectionLabel>Lead Candidate</SectionLabel>
          <h2 className="font-serif text-4xl font-normal text-ink">
            PRX-474 <span className="text-ember">Inhibits miR-221</span>
          </h2>
          <p className="mt-3 max-w-3xl text-lg leading-8 text-muted">
            Broad therapeutic potential across multiple tumor types, covering
            75-80% of all cancer indications.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {targetCards.map((card, index) => (
            <Reveal key={card.title} delay={index * 70}>
              <article className="h-full rounded-xl border-l-4 border-ember bg-white p-6 shadow-[0_1px_3px_rgba(12,45,90,0.04)]">
                <h3 className="flex items-center gap-2 text-base font-semibold text-ink">
                  {card.icon ? (
                    <AppIcon name={card.icon} className="h-5 w-5 text-ember" />
                  ) : null}
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted">
                  {card.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <Reveal>
          <div className="flex flex-col gap-8 rounded-[14px] bg-blue-depth p-7 text-white shadow-soft md:flex-row md:items-center md:justify-between md:p-9">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-ember">
                Phase 1a Results: PRX-474
              </p>
              <div className="flex flex-wrap gap-x-10 gap-y-4">
                {[
                  ["0", "grade 3-4 toxicities"],
                  ["56%", "disease control rate"],
                  ["44+", "months durable response"],
                ].map(([value, label]) => (
                  <div key={label} className="flex items-baseline gap-2">
                    <span className="font-serif text-4xl">{value}</span>
                    <span className="text-sm text-white/70">{label}</span>
                  </div>
                ))}
              </div>
            </div>
            <Link
              href="/clinical"
              className="inline-flex w-fit items-center gap-2 rounded-xl bg-ember px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(217,122,62,0.32)]"
            >
              View Clinical Data
              <AppIcon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
