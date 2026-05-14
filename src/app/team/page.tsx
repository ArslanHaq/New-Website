import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { Section, SectionLabel } from "@/components/section";
import {
  advisors,
  management,
  partnerFocus,
  partners,
  teamHero,
} from "@/lib/content";

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
                <div
                  className={`mb-5 grid h-14 w-14 place-items-center rounded-full text-lg font-semibold text-white ${person.tone}`}
                >
                  {person.initials}
                </div>
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
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {advisors.map((advisor, index) => (
            <Reveal key={advisor.name} delay={index * 60}>
              <article className="card-surface h-full p-5 text-center">
                <div
                  className={`mx-auto mb-4 grid h-12 w-12 place-items-center rounded-full text-sm font-semibold text-white ${advisor.tone}`}
                >
                  {advisor.initials}
                </div>
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

      <Section>
        <Reveal>
          <SectionLabel>Collaborations</SectionLabel>
          <h2 className="font-serif text-4xl font-normal text-ink">
            Strategic <span className="text-ember">partnerships</span>
          </h2>
        </Reveal>
        <div className="mt-7 grid gap-5 lg:grid-cols-3">
          {partners.map((partner, index) => (
            <Reveal key={partner.title} delay={index * 70}>
              <article className="h-full rounded-xl border-t-4 border-marine bg-mist p-6">
                <h3 className="text-base font-semibold text-ink">
                  {partner.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted">
                  {partner.description}
                </p>
                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.08em] text-marine">
                  {partnerFocus[index]}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
