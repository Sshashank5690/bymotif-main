"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { HeaderSocialLinks } from "@/components/layout/HeaderSocialLinks";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { Wordmark } from "@/components/layout/Wordmark";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { navigation } from "@/content/site";
import { cn } from "@/lib/utils";
import { useScrollDirection } from "@/hooks/useScrollDirection";

export function SiteHeader() {
  const { settled } = useScrollDirection();
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

  const glassOn = settled || menuOpen;

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[60]">
        {/* Glass layer fades in — keeps backdrop-filter mounted (no flicker). */}
        <div
          aria-hidden
          className={cn(
            "glass-bar pointer-events-none absolute inset-0 border-b border-line-soft transition-opacity duration-(--duration-soft) ease-editorial",
            glassOn ? "opacity-100" : "opacity-0",
          )}
        />

        <div
          className={cn(
            "relative mx-auto grid max-w-editorial grid-cols-[1fr_auto] items-center gap-4 px-gutter transition-[padding] duration-(--duration-soft) ease-editorial lg:grid-cols-[1fr_auto_1fr]",
            glassOn ? "py-3.5 lg:py-4" : "py-6 lg:py-7",
          )}
        >
          <div className="justify-self-start">
            <Wordmark
              className={cn(
                "transition-[font-size] duration-(--duration-soft) ease-editorial",
                glassOn ? "text-[22px] lg:text-[24px]" : "text-[24px] lg:text-[28px]",
              )}
            />
          </div>

          <nav aria-label="Primary" className="hidden justify-self-center lg:block">
            <ul className="flex items-center gap-8 xl:gap-10">
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

          <div className="flex items-center justify-end gap-2 sm:gap-3 justify-self-end">
            <HeaderSocialLinks className="hidden sm:flex" />
            <ThemeToggle className="sm:hidden" />

            <Link
              href="/contact"
              className={cn(
                "hidden rounded-full border border-ink/20 font-sans text-label font-medium uppercase tracking-[0.16em] text-ink transition-all duration-(--duration-soft) ease-editorial hover:border-ink/50 hover:bg-ink hover:text-ivory lg:inline-flex",
                glassOn ? "px-5 py-2.5" : "px-6 py-3",
              )}
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
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
