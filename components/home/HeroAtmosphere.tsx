"use client";

import { useRef } from "react";

import { gsap } from "@/lib/gsap";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

/**
 * Quiet hero atmosphere on warm white:
 * three soft colour blooms drift and breathe — noticeable, never loud.
 * Palette borrowed gently from the footer landscape (peach, rose, lavender).
 */
export function HeroAtmosphere() {
  const rootRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useIsomorphicLayoutEffect(() => {
    const root = rootRef.current;
    if (!root || prefersReducedMotion) return;

    const blooms = gsap.utils.toArray<HTMLElement>("[data-bloom]", root);

    const context = gsap.context(() => {
      blooms.forEach((bloom, index) => {
        gsap.to(bloom, {
          x: index === 0 ? 40 : index === 1 ? -36 : 28,
          y: index === 0 ? 28 : index === 1 ? -24 : 32,
          duration: 14 + index * 4,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });

        gsap.to(bloom, {
          opacity: index === 0 ? 0.85 : index === 1 ? 0.72 : 0.65,
          scale: 1.12,
          duration: 8 + index * 2,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          delay: index * 1.5,
        });
      });
    }, root);

    return () => context.revert();
  }, [prefersReducedMotion]);

  return (
    <div
      ref={rootRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Original warm white base */}
      <div className="absolute inset-0 bg-ivory" />

      {/* Peach — soft, top-right */}
      <div
        data-bloom
        className="absolute -right-[18%] top-[-12%] h-[32rem] w-[40rem] rounded-full opacity-70 blur-[100px]"
        style={{
          background:
            "radial-gradient(circle, rgba(232, 190, 160, 0.95) 0%, transparent 68%)",
        }}
      />

      {/* Rose — mid-left */}
      <div
        data-bloom
        className="absolute -left-[16%] top-[28%] h-[28rem] w-[36rem] rounded-full opacity-58 blur-[100px]"
        style={{
          background:
            "radial-gradient(circle, rgba(224, 160, 150, 0.9) 0%, transparent 68%)",
        }}
      />

      {/* Lavender — lower right */}
      <div
        data-bloom
        className="absolute right-[8%] bottom-[-8%] h-[26rem] w-[32rem] rounded-full opacity-50 blur-[95px]"
        style={{
          background:
            "radial-gradient(circle, rgba(190, 170, 210, 0.85) 0%, transparent 68%)",
        }}
      />
    </div>
  );
}
