"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef } from "react";

import { HeaderSocialLinks } from "@/components/layout/HeaderSocialLinks";
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
          <div className="flex items-center justify-between gap-4 px-gutter py-7">
            <Wordmark className="text-[24px]" />
            <div className="flex items-center gap-2">
              <HeaderSocialLinks />
              <button
                type="button"
                onClick={onClose}
                className="-m-3 p-3 font-sans text-label font-medium uppercase tracking-[0.18em] text-stone"
              >
                Close
              </button>
            </div>
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
                >
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="flex items-baseline justify-between py-5 font-serif text-display-sm font-light text-ink"
                  >
                    <span>{link.label}</span>
                    <span className="font-sans text-label uppercase tracking-[0.18em] text-quiet">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.6, ease: ease.editorial }}
            className="grid grid-cols-3 gap-2 px-gutter pb-4"
          >
            {featuredProjects.slice(0, 3).map((project) => (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                onClick={onClose}
                className="relative aspect-[4/5] overflow-hidden rounded-xl"
                aria-label={`${project.client} — view the story`}
              >
                <Image
                  src={project.cover.src}
                  alt=""
                  fill
                  sizes="33vw"
                  className="object-cover"
                />
              </Link>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.55, ease: ease.editorial }}
            className="flex flex-col gap-2 px-gutter pb-10 font-sans text-small text-stone"
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
