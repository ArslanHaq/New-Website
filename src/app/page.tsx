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
};

const mosaicPanels: MosaicPanel[] = [
  {
    title: "Science",
    href: "/science",
    eyebrow: "Regulatory Layer",
    icon: "dna",
    tone: "image-blue",
    className: "lg:col-start-1 lg:col-span-4 lg:row-start-1 lg:row-span-3",
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
    "bg-[#0b6f91] text-white before:bg-[radial-gradient(circle_at_18%_22%,rgba(255,255,255,0.92)_0_2px,transparent_3px),radial-gradient(circle_at_72%_32%,rgba(255,255,255,0.7)_0_1px,transparent_2px),radial-gradient(circle_at_46%_64%,rgba(255,255,255,0.55)_0_2px,transparent_3px),linear-gradient(135deg,rgba(6,46,91,0.12),rgba(73,157,232,0.42))]",
  "image-cell":
    "bg-[#078b9c] text-white before:bg-[radial-gradient(ellipse_at_42%_46%,rgba(255,255,255,0.72)_0_8%,transparent_9%),repeating-radial-gradient(ellipse_at_50%_50%,rgba(255,255,255,0.2)_0_2px,transparent_3px_12px),linear-gradient(135deg,rgba(6,46,91,0.28),rgba(0,196,202,0.35))]",
  deep: "bg-[#08213f] text-white before:bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_55%)]",
  orange:
    "bg-orange-flow text-white before:bg-[radial-gradient(circle_at_78%_12%,rgba(255,255,255,0.18),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.1),transparent_60%)]",
  "light-blue":
    "bg-[#168ac3] text-white before:bg-[linear-gradient(135deg,rgba(255,255,255,0.16),transparent_52%)]",
};

function WhiteLogo() {
  return (
    <Link href="/" className="inline-flex items-center" aria-label="Pherrix home">
      <span className="text-4xl font-bold leading-none tracking-normal text-white">
        Pherri
      </span>
      <svg
        width="28"
        height="38"
        viewBox="0 0 24 36"
        fill="none"
        className="-ml-0.5 translate-y-0.5"
        aria-hidden="true"
      >
        <path
          d="M4 4C7 8 10 12 12 18C14 12 17 8 20 4"
          stroke="#E8893A"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M4 32C7 28 10 24 12 18C14 24 17 28 20 32"
          stroke="#E8893A"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <line
          x1="6"
          y1="10"
          x2="8"
          y2="10"
          stroke="#E8893A"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="18"
          y1="10"
          x2="20"
          y2="10"
          stroke="#E8893A"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="20" cy="14" r="1.5" fill="#E8893A" />
        <line
          x1="6"
          y1="26"
          x2="8"
          y2="26"
          stroke="#E8893A"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="5" cy="22" r="1.5" fill="#E8893A" />
      </svg>
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

  return (
    <Link
      href={panel.href}
      className={[
        "group relative flex min-h-[230px] overflow-hidden border border-[#071a2f] p-6 transition duration-300 before:absolute before:inset-0 before:content-[''] hover:z-10 hover:scale-[1.012] focus-visible:z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-6px] focus-visible:outline-white sm:p-8 lg:min-h-0 lg:p-6",
        panel.className,
        panelToneClass[panel.tone],
      ].join(" ")}
      style={{ animationDelay: `${index * 55}ms` }}
    >
      <span className="absolute inset-0 before:absolute before:inset-0" />
      {panel.tone.startsWith("image") ? (
        <ScienceTexture variant={textureVariant} />
      ) : null}
      <span className="absolute inset-0 bg-gradient-to-t from-[#031b31]/82 via-[#031b31]/18 to-transparent" />
      <span className="relative z-10 flex h-full w-full flex-col justify-end">
        <span className="mb-auto inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/[0.12] text-white ring-1 ring-white/20">
          <AppIcon name={panel.icon} className="h-5 w-5" />
        </span>
        <span className="mb-4 block h-0.5 w-24 bg-white" />
        {panel.eyebrow ? (
          <span className="mb-2 text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-white/70">
            {panel.eyebrow}
          </span>
        ) : null}
        <span className="flex items-end justify-between gap-5">
          <span>
            <span className="block text-2xl font-semibold tracking-normal lg:text-[1.35rem]">
              {panel.title}
            </span>
            <span className="mt-3 block max-w-md text-sm leading-6 text-white/80 lg:text-[0.82rem] lg:leading-5">
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
    <section className="bg-[#081018] text-white">
      <div className="grid min-h-svh lg:h-svh lg:grid-cols-[minmax(300px,360px)_1fr] lg:overflow-hidden">
        <aside className="flex min-h-[560px] flex-col justify-between border-b border-[#071a2f] bg-[#151a20] px-6 py-10 sm:px-10 lg:h-svh lg:border-b-0 lg:border-r lg:overflow-hidden lg:py-8">
          <div>
            <WhiteLogo />
            <div className="mt-10 max-w-[18rem]">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-ember">
                Precision RNA Therapeutics
              </p>
              <h1 className="font-serif text-4xl font-normal leading-tight text-white lg:text-[2.15rem]">
                Targeting disease-driving microRNAs
              </h1>
              <div className="mt-5 h-0.5 w-16 bg-white" />
              <p className="mt-5 text-base leading-8 text-white/70 lg:text-[0.9rem] lg:leading-6">
                Pherrix is a clinical-stage therapeutics company focused on
                noncoding RNA dysregulation and proprietary LockMiR technology.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-4">
            <div className="grid grid-cols-3 gap-3 border-y border-white/10 py-5">
              {[
                ["Phase 1a", "completed"],
                ["3", "programs"],
                ["HCC/CRC", "focus"],
              ].map(([value, label]) => (
                <div key={label}>
                  <p className="font-serif text-2xl text-white">{value}</p>
                  <p className="mt-1 text-[0.65rem] uppercase tracking-[0.12em] text-white/50">
                    {label}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href="/contact"
              className="group flex items-center justify-between border border-white/[0.15] bg-white/[0.03] px-5 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:border-ember hover:bg-ember"
            >
              Contact Us
              <AppIcon
                name="arrow"
                className="h-4 w-4 transition group-hover:translate-x-1"
              />
            </Link>
            <p className="text-xs text-white/40">
              &copy; {site.year} Pherrix. Clinical-stage RNA therapeutics.
            </p>
          </div>
        </aside>

        <div className="grid auto-rows-[minmax(220px,auto)] lg:h-svh lg:grid-cols-12 lg:grid-rows-8">
          {mosaicPanels.map((panel, index) => (
            <Panel key={panel.title} panel={panel} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
