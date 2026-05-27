import type { ContentCard, IconName, Metric, NavItem, PageHero } from "./types";

export const site = {
  name: "Pherrix",
  email: "vivek@pherrixtx.com",
  year: 2026,
  description:
    "Clinical-stage precision RNA therapeutics company developing LockMiR technology for solid tumors and related diseases.",
};

export const navItems: NavItem[] = [
  { label: "Science", href: "/science" },
  { label: "Pipeline", href: "/pipeline" },
  { label: "Clinical", href: "/clinical" },
  { label: "Team", href: "/team" },
  { label: "Collaborations", href: "/collaborations" },
  { label: "Publications", href: "/publications" },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" },
];

export const homeHero: PageHero = {
  eyebrow: "Precision RNA Therapeutics",
  title: "Targeting disease-driving",
  accent: "microRNAs",
  description:
    "Pherrix is a clinical-stage therapeutics company focused on noncoding RNA dysregulation. Our proprietary LockMiR technology has a clear path to market with demonstrable safety, tolerability, and preliminary efficacy in patients with advanced solid tumors in a Phase 1a trial.",
};

export const homeMetrics: Metric[] = [
  { value: "Phase 1a", label: "completed" },
  { value: "3", label: "programs in pipeline" },
  { value: "HCC & CRC", label: "initial focus" },
];

export const homePanels: Array<
  ContentCard & {
    href: string;
    variant: "blue" | "deep" | "orange" | "light";
    wide?: boolean;
    tall?: boolean;
  }
> = [
  {
    title: "Science",
    href: "/science",
    icon: "dna",
    variant: "deep",
    wide: true,
    description:
      "How LockMiR reprograms tumor behavior at the regulatory layer, acting upstream of protein targets to address resistance and amplify existing cancer therapies.",
  },
  {
    title: "Pipeline",
    href: "/pipeline",
    icon: "chart",
    variant: "blue",
    tall: true,
    description:
      "Three therapeutic programs targeting oncology, CNS diseases, and fibrosis, from preclinical through Phase 1.",
  },
  {
    title: "Clinical Highlights",
    href: "/clinical",
    icon: "heartbeat",
    variant: "orange",
    description:
      "Phase 1a completed: zero grade 3-4 toxicities, 56% disease control rate, and 44+ month durable response in CRC.",
  },
  {
    title: "Our Team",
    href: "/team",
    icon: "users",
    variant: "light",
    description:
      "Deep miRNA expertise, successful preclinical-to-clinical translation, and regulatory experience.",
  },
  {
    title: "Contact",
    href: "/contact",
    icon: "mail",
    variant: "light",
    wide: true,
    description:
      "Partner with us to advance precision RNA therapeutics for patients worldwide.",
  },
];

export const missionPillars: ContentCard[] = [
  {
    icon: "dna",
    title: "Precision",
    description: "Deliver precision medicine through ncRNA therapeutics.",
  },
  {
    icon: "lock",
    title: "LockMiR",
    description: "Establish LockMiR as a therapeutic standard of care.",
  },
  {
    icon: "grid",
    title: "Platform",
    description: "Build a platform company with multiple therapeutic programs.",
  },
  {
    icon: "target",
    title: "Unmet need",
    description:
      "Address unmet needs across oncology, CIPN, neurology, and fibrosis.",
  },
];

export const scienceHero: PageHero = {
  eyebrow: "Science",
  title: "Why single-target therapies",
  accent: "fail",
  description:
    "Solid tumors are governed by adaptive oncogenic networks that evolve under therapeutic pressure. Current approaches inhibit one target, so tumors reroute and recur.",
};

export const scienceProblems: ContentCard[] = [
  {
    title: "Adaptive networks",
    description:
      "Solid tumors are governed by adaptive oncogenic networks that evolve under therapeutic pressure.",
  },
  {
    title: "Single-target limits",
    description:
      "Current therapies inhibit single targets without altering underlying regulatory programs.",
  },
  {
    title: "Resistance & recurrence",
    description:
      "Tumors reroute signaling and recur despite sequential or combination regimens.",
  },
  {
    title: "Regulatory control needed",
    description:
      "Modulating regulatory control is required to sensitize tumors and extend therapeutic benefit.",
  },
];

export const lockmirCards: Array<ContentCard & { tone: "deep" | "blue" | "navy" }> =
  [
    {
      tone: "deep",
      title: "What it does",
      description:
        "Selectively modulates microRNA activity to reprogram tumor behavior. Acts upstream of protein targets to dampen multiple oncogenic pathways simultaneously while preserving compatibility with current standard-of-care therapies.",
    },
    {
      tone: "blue",
      title: "Why it matters",
      description:
        "Addresses resistance driven by pathway redundancy, extends durability of existing treatments, and enables combination strategies without replacing approved drugs.",
    },
    {
      tone: "navy",
      title: "What makes it different",
      description:
        "Proprietary LNA-based design enables precision, stability, and durability. The platform is tunable across solid tumors, including HCC and CRC.",
    },
  ];

export const pipelineHero: PageHero = {
  eyebrow: "Pipeline",
  title: "Advancing LockMiR to treat",
  accent: "multiple diseases",
  description:
    "Our pipeline spans oncology, CNS diseases, and fibrosis, with lead candidate PRX-474 in clinical development for advanced solid tumors and emerging evidence of benefit in chemotherapy-induced peripheral neuropathy.",
};

export const pipelineStages = [
  "Preclinical",
  "IND Enabling",
  "Phase 1",
  "Phase 2",
  "Phase 3",
] as const;

export const pipelinePrograms = [
  {
    program: "PRX-474",
    indication: "Advanced Solid Tumors",
    highlight: true,
    progress: [100, 100, 60, 0, 0],
  },
  {
    program: "PRX-334",
    indication: "CNS Diseases",
    progress: [100, 40, 0, 0, 0],
  },
  {
    program: "PRX-376",
    indication: "Cancer & Fibrosis",
    progress: [70, 0, 0, 0, 0],
  },
];

export const targetCards: ContentCard[] = [
  {
    icon: "trophy",
    title: "First-in-class opportunity",
    description:
      "Represents a first-in-class therapeutic opportunity to directly target miR-221 in oncology.",
  },
  {
    icon: "network",
    title: "Widely overexpressed",
    description:
      "Overexpressed across multiple cancer types including hematological malignancies and solid tumors.",
  },
  {
    icon: "shield",
    title: "Suppresses tumor suppressors",
    description:
      "Directly suppresses CDKN1B/p27 for cell cycle control and PTEN for tumor suppression.",
  },
  {
    icon: "trending",
    title: "Strong preclinical evidence",
    description:
      "Inhibiting miR-221 using PRX-474 leads to impressive anti-tumor activity and upregulation of tumor suppressor genes.",
  },
];

export const clinicalHero: PageHero = {
  eyebrow: "First-in-Human Oncology",
  title: "Phase 1a clinical results:",
  accent: "PRX-474",
  description:
    "Completed dose-escalation trial in 17 patients with advanced solid tumors who had failed all prior standard-of-care therapies.",
};

export const trialOverview: ContentCard[] = [
  {
    title: "Study Design",
    description:
      "3+3 dose-escalation trial conducted 2019-2021. ClinicalTrials.gov: NCT04811898.",
  },
  {
    title: "Patients Enrolled",
    description:
      "17 cancer patients evaluated for response. Diagnoses included pancreatic, glioblastoma, CRC, HCC, breast, ovarian, gastric, and peritoneal mesothelioma.",
  },
  {
    title: "Dose Range",
    description:
      "0.5 to 5 mg/kg tested. All patients had failed previous standard-of-care therapies.",
  },
];

export const clinicalResults = [
  {
    icon: "shield" as IconName,
    label: "Safety (Primary Outcome)",
    metrics: [
      {
        value: "0",
        label: "grade 3-4 toxicities",
        detail:
          "Well tolerated across all dose levels (0.5-5 mg/kg). MTD was not reached.",
      },
      {
        value: "5 mg/kg",
        label: "",
        detail: "Recommended dose for future trials.",
      },
    ],
  },
  {
    icon: "chart" as IconName,
    label: "Efficacy (Secondary Outcome)",
    metrics: [
      {
        value: "56%",
        label: "disease control rate",
        detail:
          "Stable disease in 50% of patients, partial response in 6.25% (CRC). Total SD + PR: 56.25%.",
      },
      {
        value: "44+",
        label: "months durable response",
        detail:
          "Metastatic CRC patient alive with excellent performance status at 44+ months.",
      },
    ],
  },
];

export const nextSteps: ContentCard[] = [
  { title: "Primary Endpoints", description: "Safety and tolerability." },
  {
    title: "Secondary Endpoints",
    description: "PK/PD and immunogenicity.",
  },
  {
    title: "Exploratory Endpoints",
    description:
      "Disease Control Rate (DCR), Objective Response Rate (ORR), Progression-Free Survival (PFS), biomarker profile, and CIPN.",
  },
];

export const teamHero: PageHero = {
  eyebrow: "Our Team",
  title: "Leadership with deep",
  accent: "miRNA expertise",
  description:
    "Our team combines scientific discovery, regulatory experience, clinical translation, and business development to advance precision RNA therapeutics.",
};

export const management = [
  {
    image: "/Vivek.png",
    initials: "VS",
    name: "Vivek Shinde Patil",
    degree: "PhD",
    role: "Co-Founder & CEO",
    tone: "bg-ink",
    bio: "Accomplished biotech professional and entrepreneur with expertise bringing products to market and startup commercialization and scale-up.",
  },
  {
    image: "/Zdravka.png",
    initials: "ZM",
    name: "Zdravka Medarova",
    degree: "PhD",
    role: "Co-Founder & Consulting CSO",
    tone: "bg-marine",
    bio: "Internationally recognized geneticist and non-coding RNA researcher. Associate Professor of Radiology at Harvard Medical School, founder and CSO of Transcode Therapeutics.",
  },
  {
    image: "/Elizabeth.png",
    initials: "EQ",
    name: "Elizabeth Quackenbush",
    degree: "MD PhD",
    role: "Translational Medicine & Clinical Advisor",
    tone: "bg-[#0F3D7A]",
    bio: "Physician scientist with 20+ years of leadership in drug development across preclinical discovery and late-stage clinical trials. Senior roles at Merck, Roche, Agennix, Celldex, and Elstar.",
  },
  {
    image: "/Anna.jpeg",
    initials: "AM",
    name: "Anna Moore",
    degree: "PhD",
    role: "Co-Founder & Pre-Clinical Advisor",
    tone: "bg-steel",
    bio: "Associate Dean for Research Development and Director of Precision Health Program at MSU. Successful startup commercialization, fundraising, and exits.",
  },
  {
    image: "/Tania.png",
    initials: "TM",
    name: "Tania Montgomery",
    degree: "MBA",
    role: "Co-Founder & Advisor",
    tone: "bg-ember",
    bio: "Business development and biopharma marketing expert who has led multiple strategic partnerships around nucleic acid therapeutics for cancer.",
  },
];

export const advisors = [
  {
    image: "/Lubomir.png",
    initials: "LN",
    name: "Lubomir Nechev",
    degree: "PhD",
    tone: "bg-marine",
    bio: "Chief CMC Officer, Alnylam Pharmaceuticals.",
  },
  {
    image: "/mike.jpeg",
    initials: "ME",
    name: "Mike Exton",
    degree: "PhD",
    tone: "bg-steel",
    bio: "CEO at Lexicon Pharmaceuticals. Executive leadership at Novartis.",
  },
  {
    image: "/piefrancesco.png",
    initials: "PT",
    name: "Pierfrancesco Tassone",
    degree: "MD",
    tone: "bg-ember",
    bio: "Full Professor and Director of Medical Oncology, Magna Graecia University.",
  },
];

export const partners: Array<ContentCard & { logo?: string; logoAlt?: string }> = [
  {
    title: "Magna Graecia University",
    logo: "/assets/partners/magna-graecia-department.png",
    logoAlt: "Magna Graecia University department logo",
    description:
      "Medical Oncology Laboratory Scientific Team led by Pierfrancesco Tassone MD, Pierosandro Tagliaferri MD, and Maria Teresa Di Martino PhD.",
  },
  {
    title: "Michigan State University",
    logo: "/assets/partners/michigan-state.png",
    logoAlt: "Michigan State University logo",
    description:
      "Laboratory of Dr. Anna Moore, Director of MSU's Precision Health Program and Associate Dean for Research Development.",
  },
  {
    title: "SSI",
    logo: "/assets/partners/ssi-strategy.png",
    logoAlt: "SSI Strategy logo",
    description:
      "Combines deep expertise with strategic insight to offer multidisciplinary support to biotechs.",
  },
];

export const partnerFocus = [
  "Platform inventors & clinical trial partners",
  "Pre-clinical R&D & therapeutic pipeline development",
  "Pre-clinical & clinical development planning and go-to-market strategy",
];

export const collaborationsHero: PageHero = {
  eyebrow: "Collaborations",
  title: "Strategic",
  accent: "partnerships",
  description:
    "Pherrix works with academic, clinical, and strategic partners to support translational development of LockMiR therapeutics.",
};

export const newsHero: PageHero = {
  eyebrow: "News",
  title: "Company",
  accent: "updates",
  description:
    "News, announcements, and company updates from Pherrix will be available here.",
};

export const publicationsHero: PageHero = {
  eyebrow: "Research & Publications",
  title: "Advancing microRNA",
  accent: "therapeutics",
  description:
    "Peer-reviewed publications and clinical resources from the Pherrix team and collaborators, spanning preclinical discovery through first-in-human clinical translation.",
};

export const contactHero: PageHero = {
  eyebrow: "Contact",
  title: "Partner with",
  accent: "Pherrix",
  description:
    "We welcome inquiries from potential partners, investors, and collaborators interested in advancing precision RNA therapeutics.",
};

export const interestOptions = [
  "Strategic partnership",
  "Investment inquiry",
  "Clinical collaboration",
  "Academic research",
  "CMC & manufacturing",
  "Other",
];
