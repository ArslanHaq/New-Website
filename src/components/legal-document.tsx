import { AppIcon } from "@/components/icon";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { site } from "@/lib/content";
import type { LegalDocument as LegalDocumentContent } from "@/lib/legal";

type LegalDocumentProps = {
  document: LegalDocumentContent;
};

function getSectionId(title: string) {
  return title
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function LegalDocument({ document }: LegalDocumentProps) {
  return (
    <>
      <PageHero hero={document.hero} />

      <Section className="pt-0">
        <Reveal>
          <div className="mb-8 rounded-[18px] border border-line bg-[linear-gradient(135deg,rgba(22,76,158,0.08),rgba(242,250,252,0.82)_52%,rgba(255,255,255,0.96))] p-5 shadow-soft sm:flex sm:items-center sm:justify-between sm:gap-8 sm:p-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ember">
                Last updated
              </p>
              <p className="mt-1 font-serif text-2xl text-ink">
                {document.lastUpdated}
              </p>
            </div>
            <a
              href={site.legalDocumentUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-[#164c9e] px-4 py-3 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(22,76,158,0.2)] transition hover:-translate-y-0.5 hover:bg-ink sm:mt-0"
            >
              View original PDF
              <AppIcon name="external" className="h-4 w-4" />
            </a>
          </div>
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-[260px_minmax(0,1fr)]">
          <Reveal>
            <aside className="rounded-[18px] border border-line bg-white/88 p-5 shadow-[0_12px_32px_rgba(12,45,90,0.06)] lg:sticky lg:top-24">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ember">
                Contents
              </p>
              <nav className="mt-4 grid gap-2 text-sm text-muted">
                {document.sections.map((section, index) => (
                  <a
                    key={section.title}
                    href={`#${getSectionId(section.title)}`}
                    className="flex gap-3 rounded-xl px-3 py-2 transition hover:bg-mist hover:text-ink"
                  >
                    <span className="font-semibold text-marine">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>{section.title}</span>
                  </a>
                ))}
              </nav>
            </aside>
          </Reveal>

          <Reveal delay={100}>
            <article className="rounded-[18px] border border-line bg-white p-6 shadow-[0_14px_36px_rgba(12,45,90,0.06)] sm:p-8 lg:p-10">
              <div className="border-l-4 border-[#164c9e] pl-5">
                <p className="text-base leading-8 text-muted">
                  {document.summary}
                </p>
              </div>

              <div className="mt-10 space-y-9">
                {document.sections.map((section) => (
                  <section
                    key={section.title}
                    id={getSectionId(section.title)}
                    className="scroll-mt-24"
                  >
                    <h2 className="text-2xl font-semibold leading-tight text-ink">
                      {section.title}
                    </h2>
                    <div className="mt-4 space-y-4 text-base leading-8 text-muted">
                      {section.blocks.map((block, index) => {
                        if (block.type === "subheading") {
                          return (
                            <h3
                              key={`${block.type}-${index}`}
                              className="pt-2 text-lg font-semibold text-ink"
                            >
                              {block.text}
                            </h3>
                          );
                        }

                        if (block.type === "bullets") {
                          return (
                            <ul
                              key={`${block.type}-${index}`}
                              className="space-y-3"
                            >
                              {block.items.map((item) => (
                                <li key={item} className="flex gap-3">
                                  <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-ember" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          );
                        }

                        return (
                          <p key={`${block.type}-${index}`}>{block.text}</p>
                        );
                      })}
                    </div>
                  </section>
                ))}
              </div>
            </article>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
