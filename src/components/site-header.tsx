"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "@/lib/content";
import { Logo } from "./logo";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  if (pathname === "/") {
    return null;
  }

  const renderNavLinks = (variant: "desktop" | "mobile") => (
    <>
      {navItems.map((item) => {
        const active = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setOpen(false)}
            className={[
              "font-medium transition",
              variant === "mobile"
                ? "block w-full rounded-xl px-4 py-3 text-base"
                : "rounded-full px-3 py-2 text-sm",
              active
                ? "bg-ember/10 text-ink"
                : "text-muted hover:bg-mist hover:text-ink",
            ].join(" ")}
          >
            {item.label}
          </Link>
        );
      })}
    </>
  );

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[68px] max-w-6xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <Logo />

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {renderNavLinks("desktop")}
        </nav>

        <button
          type="button"
          className="relative z-[80] inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-ink shadow-[0_1px_8px_rgba(12,45,90,0.06)] md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label="Toggle navigation"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open ? (
        <>
          <button
            type="button"
            className="fixed inset-x-0 bottom-0 top-[68px] z-[55] cursor-default bg-ink/5 md:hidden"
            onClick={() => setOpen(false)}
            aria-label="Close navigation"
          />
          <nav
            id="mobile-navigation"
            className="absolute inset-x-0 top-full z-[70] grid gap-2 border-t border-line bg-white px-5 py-4 shadow-soft md:hidden"
            aria-label="Mobile primary"
          >
            {renderNavLinks("mobile")}
          </nav>
        </>
      ) : null}
    </header>
  );
}
