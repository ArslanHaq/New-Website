import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { Section, SectionLabel } from "@/components/section";
import { collaborationsHero, partnerFocus, partners } from "@/lib/content";

export const metadata: Metadata = {
  title: "Collaborations",
};

export default function CollaborationsPage() {
  return (
    <>
      <PageHero hero={collaborationsHero} />

      <Section className="pt-2">
        <Reveal>
          <SectionLabel>Strategic Partnerships</SectionLabel>
          <h2 className="font-serif text-4xl font-normal text-ink">
            Translational <span className="text-ember">network</span>
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-muted">
            These partnerships support platform invention, pre-clinical
            development, clinical translation, and go-to-market planning.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {partners.map((partner, index) => (
            <Reveal key={partner.title} delay={index * 70}>
              <article className="card-surface h-full overflow-hidden p-0">
                {partner.logo ? (
                  <div className="grid h-28 place-items-center border-b border-line bg-white px-6">
                    <img
                      src={partner.logo}
                      alt={partner.logoAlt ?? partner.title}
                      className="max-h-16 max-w-full object-contain"
                    />
                  </div>
                ) : null}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-ink">
                    {partner.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted">
                    {partner.description}
                  </p>
                  <p className="mt-5 text-xs font-semibold uppercase tracking-[0.08em] text-marine">
                    {partnerFocus[index]}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
