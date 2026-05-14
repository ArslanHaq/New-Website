import Link from "next/link";
import type { Metadata } from "next";
import { AppIcon } from "@/components/icon";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { homeHero, homeMetrics, homePanels, missionPillars } from "@/lib/content";

export const metadata: Metadata = {
  title: "Precision RNA Therapeutics",
};

function HeroVisual() {
  return (
    <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[38%] overflow-hidden lg:block">
      <div className="absolute right-8 top-12 grid h-64 w-64 place-items-center rounded-full border border-sky/10">
        <div className="grid h-48 w-48 place-items-center rounded-full border border-sky/15">
          <div className="grid h-32 w-32 place-items-center rounded-full bg-sky/5">
            <div className="grid h-20 w-20 place-items-center rounded-full bg-marine/5 text-marine">
              <AppIcon name="lock" className="h-7 w-7 opacity-50" />
            </div>
          </div>
        </div>
      </div>
      <svg
        className="absolute right-7 top-0 h-full w-56 opacity-[0.055]"
        viewBox="0 0 200 600"
        fill="none"
        stroke="#154FA0"
        strokeWidth="1.4"
        aria-hidden="true"
      >
        <path d="M80 0Q55 29 80 58Q105 87 80 116Q55 145 80 174Q105 203 80 232Q55 261 80 290Q105 319 80 348Q55 377 80 406Q105 435 80 464Q55 493 80 522Q105 551 80 580" />
        <path d="M120 0Q145 29 120 58Q95 87 120 116Q145 145 120 174Q95 203 120 232Q145 261 120 290Q95 319 120 348Q145 377 120 406Q95 435 120 464Q145 493 120 522Q95 551 120 580" />
        <g strokeWidth="0.8" opacity="0.7">
          <line x1="80" y1="29" x2="120" y2="29" />
          <line x1="105" y1="58" x2="95" y2="58" />
          <line x1="80" y1="87" x2="120" y2="87" />
          <line x1="55" y1="116" x2="145" y2="116" />
          <line x1="80" y1="145" x2="120" y2="145" />
          <line x1="105" y1="174" x2="95" y2="174" />
          <line x1="80" y1="203" x2="120" y2="203" />
          <line x1="80" y1="261" x2="120" y2="261" />
          <line x1="80" y1="319" x2="120" y2="319" />
          <line x1="80" y1="377" x2="120" y2="377" />
        </g>
      </svg>
    </div>
  );
}

const panelStyles = {
  deep: "bg-blue-depth text-white shadow-[0_2px_8px_rgba(12,45,90,0.12)] hover:shadow-[0_18px_44px_rgba(12,45,90,0.22)]",
  blue: "bg-blue-flow text-white shadow-[0_2px_8px_rgba(12,45,90,0.12)] hover:shadow-[0_18px_44px_rgba(12,45,90,0.22)]",
  orange:
    "bg-orange-flow text-white shadow-[0_2px_8px_rgba(217,122,62,0.14)] hover:shadow-[0_18px_44px_rgba(217,122,62,0.28)]",
  light: "border border-line bg-panel text-ink hover:shadow-card",
};

export default function Home() {
  return (
    <>
      <section className="relative mx-auto max-w-6xl overflow-hidden px-5 pb-12 pt-14 sm:px-8 sm:pb-16 sm:pt-20 lg:px-10">
        <HeroVisual />
        <div className="relative max-w-2xl">
          <Reveal>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.14em] text-ember">
              {homeHero.eyebrow}
            </p>
            <h1 className="font-serif text-5xl font-normal leading-[1.08] text-ink sm:text-6xl">
              {homeHero.title}{" "}
              <span className="text-ember">{homeHero.accent}</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-muted sm:text-lg">
              {homeHero.description}
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-10 flex flex-wrap gap-7 sm:gap-10">
              {homeMetrics.map((metric) => (
                <div key={metric.label} className="min-w-28">
                  <p className="font-serif text-3xl leading-none text-ink">
                    {metric.value}
                  </p>
                  <p className="mt-2 text-xs font-medium text-quiet">
                    {metric.label}
                  </p>
                  <div className="mt-3 h-0.5 w-7 rounded-full bg-ember/60" />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <Section className="pt-0">
        <Reveal>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.12em] text-quiet">
            Explore
          </p>
        </Reveal>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {homePanels.map((panel, index) => (
            <Reveal
              key={panel.href}
              delay={index * 70}
              className={[
                panel.wide ? "lg:col-span-2" : "",
                panel.tall ? "lg:row-span-2" : "",
              ].join(" ")}
            >
              <Link
                href={panel.href}
                className={[
                  "group relative flex min-h-44 overflow-hidden rounded-[14px] p-7 transition duration-300 hover:-translate-y-1",
                  panel.tall ? "lg:min-h-[21rem]" : "",
                  panelStyles[panel.variant],
                ].join(" ")}
              >
                <span className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-white/10 transition duration-500 group-hover:scale-150" />
                <span className="relative flex h-full w-full flex-col justify-between gap-6">
                  <span>
                    {panel.icon ? (
                      <AppIcon
                        name={panel.icon}
                        className="mb-4 h-7 w-7 opacity-80"
                      />
                    ) : null}
                    <span className="block text-xl font-semibold">
                      {panel.title}
                    </span>
                  </span>
                  <span className="max-w-xl text-sm leading-6 opacity-75">
                    {panel.description}
                  </span>
                  <span className="absolute bottom-0 right-0 grid h-9 w-9 place-items-center rounded-full bg-white/15 text-current transition group-hover:translate-x-1">
                    <AppIcon name="arrow" className="h-4 w-4" />
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section muted>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {missionPillars.map((pillar, index) => (
            <Reveal key={pillar.title} delay={index * 70}>
              <div className="flex items-start gap-3">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-marine/10 text-marine">
                  {pillar.icon ? (
                    <AppIcon name={pillar.icon} className="h-5 w-5" />
                  ) : null}
                </div>
                <div>
                  <h2 className="text-sm font-semibold text-ink">
                    {pillar.title}
                  </h2>
                  <p className="mt-1 text-sm leading-6 text-steel">
                    {pillar.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
