import type { Metadata } from "next";
import { AppIcon } from "@/components/icon";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { Section, SectionLabel } from "@/components/section";
import { publicationsHero } from "@/lib/content";
import type { IconName } from "@/lib/types";

export const metadata: Metadata = {
  title: "Publications",
};

type Publication = {
  title: string;
  authors: string;
  journal: string;
  description: string;
  href?: string;
  featured?: boolean;
};

const publicationGroups: Array<{
  title: string;
  icon: IconName;
  publications: Publication[];
}> = [
  {
    title: "Foundational Preclinical Studies",
    icon: "flask",
    publications: [
      {
        title:
          "In vitro and in vivo anti-tumor activity of miR-221/222 inhibitors in multiple myeloma",
        authors: "Maria Teresa Di Martino et al.",
        journal: "Oncotarget (2013)",
        description:
          "Demonstrated anti-myeloma activity of miR-221/222 inhibition in preclinical models.",
        href: "https://pubmed.ncbi.nlm.nih.gov/23479461/",
      },
      {
        title:
          "A 13-mer LNA-i-miR-221 inhibitor restores drug sensitivity in melphalan-refractory multiple myeloma cells",
        authors:
          "Annamaria Gulla, Maria Teresa Di Martino, Pierfrancesco Tassone et al.",
        journal: "Clinical Cancer Research (2016)",
        description:
          "Showed reversal of drug resistance using LNA-i-miR-221.",
        href: "https://aacrjournals.org/clincancerres/article/22/5/1222/79628/",
      },
      {
        title:
          "Pharmacokinetics and Biodistribution of Locked Nucleic Acid miR-221 Inhibitor",
        authors: "Pierfrancesco Tassone et al.",
        journal: "Blood / ASH Proceedings (2015)",
        description:
          "Evaluated biodistribution and safety of LNA-i-miR-221 in animal models.",
        href: "https://pubmed.ncbi.nlm.nih.gov/?term=LNA-i-miR-221+pharmacokinetics+biodistribution+tassone",
      },
    ],
  },
  {
    title: "Pharmacology & Translational Development",
    icon: "activity",
    publications: [
      {
        title:
          "Dose-Finding Study and Pharmacokinetics Profile of the Novel 13-Mer Antisense miR-221 Inhibitor in Sprague-Dawley Rats",
        authors: "Maria Teresa Di Martino et al.",
        journal: "Molecular Therapy Nucleic Acids (2020)",
        description:
          "Defined PK profile and dose optimization of LNA-i-miR-221.",
        href: "https://pubmed.ncbi.nlm.nih.gov/?term=dose-finding+13-mer+miR-221+sprague-dawley+di+martino",
      },
      {
        title:
          "Allometric Scaling Approaches for Predicting Human Pharmacokinetic of a Locked Nucleic Acid Oligonucleotide Targeting Cancer-Associated miR-221",
        authors: "Maria Teresa Di Martino et al.",
        journal: "(2019)",
        description:
          "Predicted human pharmacokinetics using interspecies scaling models.",
        href: "https://pubmed.ncbi.nlm.nih.gov/?term=allometric+scaling+LNA+miR-221+di+martino",
      },
      {
        title:
          "Development and validation of bioanalytical methods for LNA-i-miR-221 quantification in human plasma and urine by LC-MS/MS",
        authors: "Samantha Franzoni et al.",
        journal: "(2020)",
        description:
          "Developed analytical assays supporting clinical translation.",
        href: "https://pubmed.ncbi.nlm.nih.gov/?term=bioanalytical+LNA-i-miR-221+LC-MS+franzoni",
      },
    ],
  },
  {
    title: "Clinical Translation",
    icon: "heartbeat",
    publications: [
      {
        title:
          "Safety and activity of the first-in-class locked nucleic acid (LNA) miR-221 selective inhibitor in refractory advanced cancer patients: a first-in-human, phase 1, open-label, dose-escalation study",
        authors: "Pierfrancesco Tassone, Maria Teresa Di Martino et al.",
        journal: "ESMO Open (2023)",
        description:
          "First-in-human clinical trial of LNA-i-miR-221 in advanced cancer patients.",
        href: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10294514/",
        featured: true,
      },
      {
        title: "NCT04811898 - A Dose Escalation Study of LNA-i-miR-221",
        authors: "ClinicalTrials.gov",
        journal: "Clinical trial listing",
        description: "ClinicalTrials.gov listing for the first-in-human trial.",
        href: "https://clinicaltrials.gov/study/NCT04811898",
        featured: true,
      },
    ],
  },
  {
    title: "Reviews & Broader miR-221 Biology",
    icon: "grid",
    publications: [
      {
        title:
          "miR-221/222 as biomarkers and targets for therapeutic intervention on cancer and other diseases: A systematic review",
        authors: "Maria Teresa Di Martino et al.",
        journal: "Molecular Therapy Nucleic Acids (2022)",
        description:
          "Comprehensive review of miR-221 biology, oncology relevance, and therapeutic targeting.",
        href: "https://pubmed.ncbi.nlm.nih.gov/?term=miR-221+222+biomarkers+targets+therapeutic+systematic+review+di+martino+2022",
      },
      {
        title:
          "MicroRNA in cancer therapy: breakthroughs and challenges in early clinical applications",
        authors: "Maria Teresa Di Martino, Pierfrancesco Tassone et al.",
        journal: "(2025)",
        description:
          "Review discussing clinical development of miRNA therapeutics including miR-221 inhibition.",
        href: "https://pubmed.ncbi.nlm.nih.gov/?term=microRNA+cancer+therapy+breakthroughs+challenges+clinical+di+martino+tassone+2025",
      },
    ],
  },
];

function PublicationCard({ publication }: { publication: Publication }) {
  const content = (
    <>
      <h3 className="text-base font-semibold leading-7 text-ink">
        {publication.title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-muted">
        {publication.authors}
      </p>
      <p className="mt-1 text-sm italic text-marine">{publication.journal}</p>
      <p className="mt-3 text-sm leading-6 text-quiet">
        {publication.description}
      </p>
    </>
  );

  return (
    <article
      className={[
        "card-surface h-full p-6",
        publication.featured ? "border-l-4 border-l-ember" : "",
      ].join(" ")}
    >
      {publication.href ? (
        <a
          href={publication.href}
          target="_blank"
          rel="noreferrer"
          className="group block"
        >
          {content}
          <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-marine transition group-hover:text-ink">
            View resource
            <AppIcon name="external" className="h-4 w-4" />
          </span>
        </a>
      ) : (
        content
      )}
    </article>
  );
}

export default function PublicationsPage() {
  return (
    <>
      <PageHero hero={publicationsHero} />

      <Section className="pt-2">
        {publicationGroups.map((group, groupIndex) => (
          <div key={group.title} className={groupIndex > 0 ? "mt-12" : ""}>
            <Reveal>
              <div className="flex items-center gap-3 border-b border-line pb-4">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-marine/10 text-marine">
                  <AppIcon name={group.icon} className="h-5 w-5" />
                </span>
                <div>
                  <SectionLabel>Publication Category</SectionLabel>
                  <h2 className="font-serif text-3xl font-normal text-ink">
                    {group.title}
                  </h2>
                </div>
              </div>
            </Reveal>

            <div className="mt-6 grid gap-5 lg:grid-cols-2">
              {group.publications.map((publication, index) => (
                <Reveal key={publication.title} delay={index * 70}>
                  <PublicationCard publication={publication} />
                </Reveal>
              ))}
            </div>
          </div>
        ))}
      </Section>
    </>
  );
}
