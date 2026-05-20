import Link from "next/link";
import type { Metadata } from "next";
import { AppIcon } from "@/components/icon";
import { site } from "@/lib/content";
import type { IconName } from "@/lib/types";

export const metadata: Metadata = {
  title: "Precision RNA Therapeutics",
};

type MosaicPanel = {
  title: string;
  href: string;
  eyebrow?: string;
  description: string;
  icon: IconName;
  className: string;
  tone: "image-blue" | "image-cell" | "deep" | "orange" | "light-blue";
  image?: string;
  imagePosition?: string;
  imageFit?: "cover" | "contain";
  imageOpacity?: number;
  imageFilter?: string;
};

const mosaicPanels: MosaicPanel[] = [
  {
    title: "Science",
    href: "/science",
    eyebrow: "Regulatory Layer",
    icon: "dna",
    tone: "image-blue",
    className: "lg:col-start-1 lg:col-span-4 lg:row-start-1 lg:row-span-3",
    image: "/assets/dna-presentation-bg.jpeg",
    imagePosition: "55% 50%",
    description:
      "How LockMiR reprograms tumor behavior upstream of protein targets.",
  },
  {
    title: "Pipeline",
    href: "/pipeline",
    eyebrow: "Programs",
    icon: "chart",
    tone: "image-cell",
    className: "lg:col-start-5 lg:col-span-4 lg:row-start-1 lg:row-span-5",
    image: "/assets/dna2.jpeg",
    imagePosition: "50% 50%",
    imageOpacity: 0.72,
    description:
      "Three therapeutic programs across oncology, CNS diseases, and fibrosis.",
  },
  {
    title: "Clinical",
    href: "/clinical",
    eyebrow: "Phase 1a",
    icon: "heartbeat",
    tone: "orange",
    className: "lg:col-start-9 lg:col-span-4 lg:row-start-1 lg:row-span-2",
    description:
      "Zero grade 3-4 toxicities and a 56% disease control rate in advanced solid tumors.",
  },
  {
    title: "LockMiR Platform",
    href: "/science",
    eyebrow: "Technology",
    icon: "lock",
    tone: "image-cell",
    className: "lg:col-start-9 lg:col-span-4 lg:row-start-3 lg:row-span-3",
    image: "/assets/lockmir-logo.png",
    imagePosition: "50% 50%",
    imageFit: "contain",
    imageOpacity: 0.32,
    imageFilter: "brightness(0) invert(1)",
    description:
      "A tunable LNA-based platform designed for precision, stability, and durability.",
  },
  {
    title: "Team",
    href: "/team",
    eyebrow: "Leadership",
    icon: "users",
    tone: "deep",
    className: "lg:col-start-1 lg:col-span-4 lg:row-start-4 lg:row-span-3",
    image: "/assets/dna-presentation-bg.jpeg",
    imagePosition: "18% 52%",
    description:
      "Scientific, clinical, regulatory, and company-building expertise.",
  },
  {
    title: "Phase 1a Results",
    href: "/clinical",
    eyebrow: "Clinical Data",
    icon: "shield",
    tone: "deep",
    className: "lg:col-start-5 lg:col-span-4 lg:row-start-6 lg:row-span-3",
    image: "/assets/pherrix-mark.png",
    imagePosition: "50% 34%",
    imageFit: "contain",
    imageOpacity: 0.18,
    description:
      "Safety, tolerability, pharmacodynamics, and early activity signals.",
  },
  {
    title: "Contact",
    href: "/contact",
    eyebrow: "Partner With Us",
    icon: "mail",
    tone: "light-blue",
    className: "lg:col-start-9 lg:col-span-4 lg:row-start-6 lg:row-span-3",
    description:
      "Connect with Pherrix about partnerships, investment, and collaborations.",
  },
  {
    title: "Collaborations",
    href: "/team",
    eyebrow: "Network",
    icon: "network",
    tone: "light-blue",
    className: "lg:col-start-1 lg:col-span-4 lg:row-start-7 lg:row-span-2",
    description:
      "Strategic academic and biotech relationships supporting translation.",
  },
];

const panelToneClass: Record<MosaicPanel["tone"], string> = {
  "image-blue":
    "bg-[#164c9e] text-white before:bg-[radial-gradient(circle_at_18%_12%,rgba(255,255,255,0.56),transparent_24%),radial-gradient(circle_at_86%_8%,rgba(77,168,255,0.5),transparent_36%),linear-gradient(135deg,rgba(53,137,222,0.72)_0%,rgba(22,76,158,0.62)_48%,rgba(9,47,120,0.48)_100%)]",
  "image-cell":
    "bg-[#164c9e] text-white before:bg-[radial-gradient(circle_at_18%_12%,rgba(255,255,255,0.44),transparent_24%),radial-gradient(circle_at_82%_8%,rgba(74,178,255,0.42),transparent_34%),linear-gradient(145deg,rgba(42,118,207,0.54)_0%,rgba(22,76,158,0.5)_52%,rgba(11,54,133,0.44)_100%)]",
  deep: "bg-[#164c9e] text-white before:bg-[radial-gradient(circle_at_18%_16%,rgba(255,255,255,0.26),transparent_26%),radial-gradient(circle_at_82%_10%,rgba(64,154,242,0.36),transparent_34%),linear-gradient(140deg,rgba(42,118,207,0.6)_0%,rgba(22,76,158,0.64)_50%,rgba(9,47,120,0.56)_100%)]",
  orange:
    "bg-[#164c9e] text-white before:bg-[radial-gradient(circle_at_78%_8%,rgba(255,255,255,0.38),transparent_28%),radial-gradient(circle_at_18%_18%,rgba(85,177,255,0.42),transparent_34%),linear-gradient(135deg,rgba(71,153,238,0.72)_0%,rgba(22,76,158,0.66)_50%,rgba(12,58,139,0.58)_100%)]",
  "light-blue":
    "bg-[#164c9e] text-white before:bg-[radial-gradient(circle_at_20%_18%,rgba(255,255,255,0.38),transparent_28%),radial-gradient(circle_at_82%_8%,rgba(82,182,255,0.44),transparent_34%),linear-gradient(135deg,rgba(61,146,233,0.72)_0%,rgba(22,76,158,0.62)_56%,rgba(9,47,120,0.5)_100%)]",
};

function BrandLogo() {
  return (
    <Link
      href="/"
      className="inline-flex rounded-2xl bg-white px-4 py-3 shadow-[0_18px_50px_rgba(12,45,90,0.16)] ring-1 ring-white/80"
      aria-label="Pherrix home"
    >
      <img
        src="/assets/pherrix-logo.png"
        alt="Pherrix"
        className="h-auto w-[190px] max-w-full"
      />
    </Link>
  );
}

function ScienceTexture({ variant }: { variant: "rna" | "cells" }) {
  if (variant === "cells") {
    return (
      <svg
        className="absolute inset-0 h-full w-full opacity-70 mix-blend-screen"
        viewBox="0 0 520 420"
        aria-hidden="true"
      >
        <defs>
          <filter id="blur-cells">
            <feGaussianBlur stdDeviation="1.4" />
          </filter>
        </defs>
        {Array.from({ length: 34 }).map((_, index) => {
          const x = 34 + ((index * 73) % 470);
          const y = 32 + ((index * 47) % 360);
          const r = 18 + ((index * 11) % 46);
          return (
            <circle
              key={index}
              cx={x}
              cy={y}
              r={r}
              fill="none"
              stroke="rgba(255,255,255,0.26)"
              strokeWidth="2"
              filter="url(#blur-cells)"
            />
          );
        })}
      </svg>
    );
  }

  return (
    <svg
      className="absolute inset-0 h-full w-full opacity-65 mix-blend-screen"
      viewBox="0 0 520 420"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M92 22C166 70 166 120 92 168C18 216 18 266 92 314C166 362 166 404 92 444"
        stroke="rgba(255,255,255,0.38)"
        strokeWidth="4"
      />
      <path
        d="M210 22C136 70 136 120 210 168C284 216 284 266 210 314C136 362 136 404 210 444"
        stroke="rgba(255,255,255,0.28)"
        strokeWidth="4"
      />
      {Array.from({ length: 10 }).map((_, index) => {
        const y = 48 + index * 35;
        return (
          <line
            key={index}
            x1={102 + (index % 2) * 22}
            y1={y}
            x2={198 - (index % 2) * 22}
            y2={y + 4}
            stroke="rgba(255,255,255,0.36)"
            strokeWidth="3"
            strokeLinecap="round"
          />
        );
      })}
      <circle cx="390" cy="120" r="74" stroke="rgba(255,255,255,0.24)" />
      <circle cx="390" cy="120" r="36" fill="rgba(255,255,255,0.14)" />
      <circle cx="428" cy="244" r="118" stroke="rgba(255,255,255,0.2)" />
    </svg>
  );
}

function Panel({ panel, index }: { panel: MosaicPanel; index: number }) {
  const textureVariant = panel.tone === "image-cell" ? "cells" : "rna";
  const imageFitClass =
    panel.imageFit === "contain"
      ? "object-contain scale-100 p-6 group-hover:scale-[1.03] sm:p-8 lg:p-5"
      : "object-cover scale-105 group-hover:scale-110";

  return (
    <Link
      href={panel.href}
      className={[
        "group relative flex min-h-[230px] overflow-hidden rounded-[24px] border border-white/25 p-6 shadow-[0_22px_58px_rgba(6,46,91,0.18)] transition duration-300 before:absolute before:inset-0 before:z-[1] before:content-[''] hover:z-10 hover:scale-[1.012] hover:shadow-[0_28px_80px_rgba(234,123,31,0.24)] focus-visible:z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-6px] focus-visible:outline-white sm:p-8 lg:min-h-0 lg:p-4",
        panel.className,
        panelToneClass[panel.tone],
      ].join(" ")}
      style={{ animationDelay: `${index * 55}ms` }}
    >
      {panel.image ? (
        <img
          src={panel.image}
          alt=""
          className={[
            "absolute inset-0 h-full w-full transition duration-700",
            imageFitClass,
          ].join(" ")}
          style={{
            filter: panel.imageFilter,
            objectPosition: panel.imagePosition,
            opacity:
              panel.imageOpacity ?? (panel.tone === "deep" ? 0.2 : 0.58),
          }}
        />
      ) : null}
      {panel.tone.startsWith("image") && !panel.image ? (
        <ScienceTexture variant={textureVariant} />
      ) : null}
      <span className="absolute inset-0 z-[2] bg-[linear-gradient(135deg,rgba(255,255,255,0.24),transparent_34%),linear-gradient(to_top,rgba(11,54,133,0.74),rgba(22,76,158,0.22)_56%,rgba(255,255,255,0.04))]" />
      <span className="absolute inset-x-0 top-0 z-[3] h-px bg-white/70" />
      <span className="absolute -right-12 -top-16 z-[3] h-44 w-44 rounded-full bg-white/18 blur-2xl transition duration-700 group-hover:scale-125" />
      <span className="relative z-10 flex h-full w-full flex-col justify-end">
        <span className="mb-auto inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/20 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.35)] ring-1 ring-white/35 backdrop-blur-md lg:h-8 lg:w-8">
          <AppIcon name={panel.icon} className="h-5 w-5 lg:h-4 lg:w-4" />
        </span>
        <span className="mb-4 block h-0.5 w-24 bg-white lg:mb-2 lg:w-20" />
        {panel.eyebrow ? (
          <span className="mb-2 text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-white/70 lg:mb-1 lg:text-[0.58rem]">
            {panel.eyebrow}
          </span>
        ) : null}
        <span className="flex items-end justify-between gap-5">
          <span>
            <span className="block text-2xl font-semibold tracking-normal lg:text-[1.12rem]">
              {panel.title}
            </span>
            <span className="mt-3 block max-w-md text-sm leading-6 text-white/80 lg:mt-1.5 lg:text-[0.72rem] lg:leading-[1.15rem]">
              {panel.description}
            </span>
          </span>
          <span className="grid h-10 w-10 shrink-0 translate-x-2 place-items-center rounded-full bg-white/[0.14] opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100">
            <AppIcon name="arrow" className="h-4 w-4" />
          </span>
        </span>
      </span>
    </Link>
  );
}

export default function Home() {
  return (
    <section className="min-h-svh overflow-x-hidden bg-[radial-gradient(circle_at_16%_18%,rgba(22,76,158,0.14),transparent_30%),radial-gradient(circle_at_86%_8%,rgba(72,164,255,0.18),transparent_36%),linear-gradient(135deg,#f8fbff_0%,#edf6ff_42%,#f7fbff_100%)] p-3 text-ink sm:p-4 lg:h-svh lg:p-4">
      <div className="grid min-h-[calc(100svh-1.5rem)] gap-4 lg:h-[calc(100svh-2rem)] lg:min-h-0 lg:grid-cols-[minmax(300px,360px)_1fr]">
        <aside className="relative flex min-h-[590px] flex-col justify-between overflow-hidden rounded-[30px] border border-white/75 bg-white/82 px-6 py-8 shadow-[0_28px_90px_rgba(12,45,90,0.18)] backdrop-blur-xl sm:px-9 lg:h-full lg:min-h-0 lg:px-7 lg:py-7">
          <span className="absolute inset-0 bg-[radial-gradient(circle_at_82%_10%,rgba(22,76,158,0.16),transparent_28%),radial-gradient(circle_at_14%_92%,rgba(72,164,255,0.18),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.96),rgba(255,255,255,0.68))]" />
          <img
            src="/assets/dna-presentation-bg.jpeg"
            alt=""
            className="absolute inset-x-0 bottom-0 h-[42%] w-full object-contain opacity-[0.24] mix-blend-multiply"
          />
          <span className="absolute inset-x-6 top-0 h-px bg-white" />
          <div className="relative z-10">
            <BrandLogo />
            <div className="mt-10 max-w-[18rem] lg:mt-8">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#EA7B1F]">
                Precision RNA Therapeutics
              </p>
              <h1 className="font-serif text-4xl font-normal leading-tight text-ink lg:text-[2.15rem]">
                Targeting disease-driving microRNAs
              </h1>
              <div className="mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-[#164c9e] via-[#4aa4ff] to-[#8ccaff]" />
              <p className="mt-5 text-base leading-8 text-muted lg:text-[0.88rem] lg:leading-6">
                Pherrix is a clinical-stage therapeutics company focused on
                noncoding RNA dysregulation and proprietary LockMiR technology.
              </p>
            </div>
          </div>

          <div className="relative z-10 mt-8 grid gap-4">
            <div className="grid grid-cols-3 gap-3 rounded-2xl border border-white/70 bg-white/68 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] backdrop-blur lg:p-3">
              {[
                ["Phase 1a", "completed"],
                ["3", "programs"],
                ["HCC/CRC", "focus"],
              ].map(([value, label]) => (
                <div key={label}>
                  <p className="font-serif text-2xl text-ink lg:text-xl">
                    {value}
                  </p>
                  <p className="mt-1 text-[0.65rem] uppercase tracking-[0.12em] text-muted">
                    {label}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href="/contact"
              className="group flex items-center justify-between rounded-2xl bg-gradient-to-r from-[#EA7B1F] via-[#ff8f2f] to-[#d55b13] px-5 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white shadow-[0_16px_42px_rgba(234,123,31,0.34)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_55px_rgba(234,123,31,0.44)] lg:py-3"
            >
              Contact Us
              <AppIcon
                name="arrow"
                className="h-4 w-4 transition group-hover:translate-x-1"
              />
            </Link>
            <p className="text-xs text-muted">
              &copy; {site.year} Pherrix. Clinical-stage RNA therapeutics.
            </p>
          </div>
        </aside>

        <div className="grid auto-rows-[minmax(235px,auto)] gap-3 lg:h-full lg:min-h-0 lg:grid-cols-12 lg:grid-rows-[repeat(8,minmax(0,1fr))]">
          {mosaicPanels.map((panel, index) => (
            <Panel key={panel.title} panel={panel} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
