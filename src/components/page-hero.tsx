import type { PageHero as PageHeroContent } from "@/lib/types";
import { Reveal } from "./reveal";

type PageHeroProps = {
  hero: PageHeroContent;
};

export function PageHero({ hero }: PageHeroProps) {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-10 pt-14 sm:px-8 sm:pt-16 lg:px-10">
      <Reveal>
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-ember">
          {hero.eyebrow}
        </p>
        <h1 className="max-w-3xl font-serif text-4xl font-normal leading-[1.12] text-ink sm:text-5xl">
          {hero.title} <span className="text-ember">{hero.accent}</span>
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-8 text-muted sm:text-lg">
          {hero.description}
        </p>
      </Reveal>
    </section>
  );
}
