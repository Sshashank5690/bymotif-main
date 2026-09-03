"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef } from "react";

import { Wordmark } from "@/components/layout/Wordmark";
import { featuredProjects } from "@/content/projects";
import { navigation, site } from "@/content/site";
import { ease } from "@/lib/motion";
import { useScrollControls } from "@/components/providers/SmoothScrollProvider";

const links = [...navigation, { label: "Get in touch", href: "/contact" }];

export function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  const { lockScroll, unlockScroll } = useScrollControls();

  useEffect(() => {
    if (!open) return;

    lockScroll();
    // Move focus into the overlay so keyboard users are not left behind the
    // menu on the page underneath.
    panelRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      unlockScroll();
    };
  }, [open, onClose, lockScroll, unlockScroll]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          ref={panelRef}
          tabIndex={-1}
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: ease.editorial }}
          className="fixed inset-0 z-[80] flex flex-col bg-ivory outline-none lg:hidden"
        >
          <div className="flex items-center justify-between px-gutter py-7">
            <Wordmark className="text-[24px]" />
            <button
              type="button"
              onClick={onClose}
              className="-m-3 p-3 font-sans text-label font-medium uppercase tracking-[0.18em] text-stone"
            >
              Close
            </button>
          </div>

          <nav className="flex flex-1 flex-col justify-center px-gutter">
            <ul>
              {links.map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.1 + index * 0.06,
                    ease: ease.editorial,
                  }}
                  className="border-b border-line-soft"
                >
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="flex items-baseline justify-between py-5 font-serif text-display-sm font-light text-ink"
                  >
                    {link.label}
                    <span
                      aria-hidden
                      className="font-sans text-label tracking-[0.18em] text-quiet"
                    >
                      0{index + 1}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.35, ease: ease.editorial }}
              className="mt-12"
            >
              <p className="font-sans text-label font-medium uppercase tracking-[0.18em] text-quiet">
                Recent work
              </p>
              <div className="mt-5 flex gap-3">
                {featuredProjects.slice(0, 3).map((project) => (
                  <Link
                    key={project.slug}
                    href={`/work/${project.slug}`}
                    onClick={onClose}
                    aria-label={`${project.client} — view the story`}
                    className="relative aspect-[3/4] w-full overflow-hidden bg-shell"
                  >
                    <Image
                      src={project.cover.src}
                      alt={project.cover.alt}
                      fill
                      sizes="30vw"
                      className="object-cover"
                    />
                  </Link>
                ))}
              </div>
            </motion.div>
          </nav>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.45, ease: ease.editorial }}
            className="flex flex-col gap-1 px-gutter pb-10 pt-8 font-sans text-small text-stone"
          >
            <a href={`mailto:${site.email}`} className="link-reveal w-fit">
              {site.email}
            </a>
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="link-reveal w-fit"
            >
              {site.social.instagramHandle}
            </a>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
