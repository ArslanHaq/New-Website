"use client";

import { usePathname } from "next/navigation";
import { site } from "@/lib/content";

export function Footer() {
  const pathname = usePathname();

  if (pathname === "/") {
    return null;
  }

  return (
    <footer className="mx-auto flex max-w-6xl flex-col gap-2 border-t border-line px-5 py-7 text-sm text-quiet sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
      <span>&copy; {site.year} Pherrix. All rights reserved.</span>
      <a href={`mailto:${site.email}`} className="transition hover:text-ink">
        {site.email}
      </a>
    </footer>
  );
}
