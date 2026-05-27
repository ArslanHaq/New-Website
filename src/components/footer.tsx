"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/lib/content";

export function Footer() {
  const pathname = usePathname();

  if (pathname === "/") {
    return null;
  }

  return (
    <footer className="mx-auto flex max-w-6xl flex-col gap-4 border-t border-line px-5 py-7 text-sm text-quiet sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
      <span>&copy; {site.year} Pherrix. All rights reserved.</span>
      <div className="flex flex-wrap gap-x-5 gap-y-2 md:justify-end">
        <Link href="/terms-of-use" className="transition hover:text-ink">
          Terms of Use
        </Link>
        <Link href="/privacy-policy" className="transition hover:text-ink">
          Privacy Policy
        </Link>
        <a href={`mailto:${site.email}`} className="transition hover:text-ink">
          {site.email}
        </a>
      </div>
    </footer>
  );
}
