import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { newsHero } from "@/lib/content";

export const metadata: Metadata = {
  title: "News",
};

export default function NewsPage() {
  return (
    <>
      <PageHero hero={newsHero} />

      <Section className="pt-2">
        <Reveal>
          <div className="rounded-[18px] border border-line bg-mist p-10 text-center">
            <p className="font-serif text-4xl text-ink">Coming Soon</p>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
