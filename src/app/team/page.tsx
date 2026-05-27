import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { Section, SectionLabel } from "@/components/section";
import { advisors, management, teamHero } from "@/lib/content";

export const metadata: Metadata = {
  title: "Team",
};

export default function TeamPage() {
  return (
    <>
      <PageHero hero={teamHero} />

      <Section className="pt-2">
        <Reveal>
          <SectionLabel>Management</SectionLabel>
        </Reveal>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {management.map((person, index) => (
            <Reveal key={person.name} delay={index * 70}>
              <article className="card-surface h-full p-7">
                {person.image ? (
                  <img
                    src={person.image}
                    alt={person.name}
                    className="mb-5 h-24 w-24 rounded-2xl object-cover shadow-[0_14px_32px_rgba(12,45,90,0.12)] ring-1 ring-line"
                  />
                ) : (
                  <div
                    className={`mb-5 grid h-14 w-14 place-items-center rounded-full text-lg font-semibold text-white ${person.tone}`}
                  >
                    {person.initials}
                  </div>
                )}
                <h2 className="text-lg font-semibold text-ink">
                  {person.name}
                </h2>
                <p className="mt-1 text-xs font-bold text-ember">
                  {person.degree}
                </p>
                <p className="mt-1 text-sm font-semibold text-marine">
                  {person.role}
                </p>
                <p className="mt-4 text-sm leading-6 text-muted">
                  {person.bio}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section muted>
        <Reveal>
          <SectionLabel>Advisors</SectionLabel>
          <h2 className="font-serif text-4xl font-normal text-ink">
            Oncology & RNA <span className="text-ember">expertise</span>
          </h2>
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {advisors.map((advisor, index) => (
            <Reveal key={advisor.name} delay={index * 60}>
              <article className="card-surface h-full p-5 text-center">
                {advisor.image ? (
                  <img
                    src={advisor.image}
                    alt={advisor.name}
                    className="mx-auto mb-4 h-20 w-20 rounded-2xl object-cover shadow-[0_12px_28px_rgba(12,45,90,0.1)] ring-1 ring-line"
                  />
                ) : (
                  <div
                    className={`mx-auto mb-4 grid h-12 w-12 place-items-center rounded-full text-sm font-semibold text-white ${advisor.tone}`}
                  >
                    {advisor.initials}
                  </div>
                )}
                <h3 className="text-base font-semibold text-ink">
                  {advisor.name}
                </h3>
                <p className="mt-1 text-xs font-bold text-ember">
                  {advisor.degree}
                </p>
                <p className="mt-3 text-xs leading-5 text-muted">
                  {advisor.bio}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
