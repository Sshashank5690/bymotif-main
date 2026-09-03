"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { MobileMenu } from "@/components/layout/MobileMenu";
import { Wordmark } from "@/components/layout/Wordmark";
import { navigation } from "@/content/site";
import { cn } from "@/lib/utils";
import { useScrollDirection } from "@/hooks/useScrollDirection";

export function SiteHeader() {
  const { hidden, settled } = useScrollDirection();
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const [menuPathname, setMenuPathname] = useState(pathname);

  // A navigation should never leave the overlay hanging open — including one
  // triggered by the browser's back button, which never fires our handlers.
  // Adjusting during render avoids a second pass with the menu still shown.
  if (pathname !== menuPathname) {
    setMenuPathname(pathname);
    setMenuOpen(false);
  }

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-[60] transition-transform duration-(--duration-soft) ease-editorial",
          hidden && !menuOpen ? "-translate-y-full" : "translate-y-0",
        )}
      >
        <div
          className={cn(
            "transition-colors duration-(--duration-soft) ease-editorial",
            settled && !menuOpen
              ? "glass-bar border-b border-line-soft"
              : "border-b border-transparent",
          )}
        >
          <div className="flex items-center justify-between px-gutter py-6 lg:py-7">
            <Wordmark className="text-[24px] lg:text-[28px]" />

            <nav aria-label="Primary" className="hidden lg:block">
              <ul className="flex items-center gap-10">
                {navigation.map((link) => {
                  const active = pathname.startsWith(link.href);
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        aria-current={active ? "page" : undefined}
                        className={cn(
                          "link-reveal font-sans text-label-lg font-medium uppercase tracking-[0.14em] transition-colors duration-(--duration-quick)",
                          active ? "text-ink" : "text-stone hover:text-ink",
                        )}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="flex items-center gap-6">
              <Link
                href="/contact"
                className="hidden rounded-full border border-ink/20 px-6 py-3 font-sans text-label font-medium uppercase tracking-[0.16em] text-ink transition-colors duration-(--duration-quick) ease-editorial hover:border-ink/50 hover:bg-ink hover:text-ivory lg:inline-flex"
              >
                Get in touch
              </Link>

              <button
                type="button"
                onClick={() => setMenuOpen(true)}
                aria-expanded={menuOpen}
                aria-label="Open menu"
                className="-m-3 flex flex-col items-end gap-[5px] p-3 lg:hidden"
              >
                <span aria-hidden className="block h-px w-6 bg-ink" />
                <span aria-hidden className="block h-px w-4 bg-ink" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
