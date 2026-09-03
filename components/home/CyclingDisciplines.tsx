"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

import { disciplines } from "@/content/site";
import { ease } from "@/lib/motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const INTERVAL = 2800;

/**
 * A single word cycling slowly beneath the hero.
 *
 * The full list is always present for assistive technology; only the visual
 * layer rotates. When reduced motion is preferred the words are listed plainly
 * instead of animating.
 */
export function CyclingDisciplines() {
  const [index, setIndex] = useState(0);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const timer = window.setInterval(
      () => setIndex((current) => (current + 1) % disciplines.length),
      INTERVAL,
    );

    return () => window.clearInterval(timer);
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) {
    return (
      <p className="font-sans text-label-lg uppercase tracking-[0.14em] text-stone">
        {disciplines.join(" · ")}
      </p>
    );
  }

  return (
    <p className="flex items-baseline gap-3 font-sans text-label-lg uppercase tracking-[0.14em] text-stone">
      <span className="sr-only">{disciplines.join(", ")}</span>
      <span
        aria-hidden
        className="relative block h-[1.3em] w-[15ch] overflow-hidden"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={disciplines[index]}
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.8, ease: ease.editorial }}
            className="absolute inset-0 block"
          >
            {disciplines[index]}
          </motion.span>
        </AnimatePresence>
      </span>
    </p>
  );
}
