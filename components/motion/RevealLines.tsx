"use client";

import { useRef } from "react";

import { gsap, SplitText } from "@/lib/gsap";
import { gsapEase, revealStart, stagger } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

type RevealLinesProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  /** Begin as soon as the element mounts rather than waiting for scroll. */
  immediate?: boolean;
  /**
   * Selector for an ancestor to trigger from. Required inside `position:
   * sticky` scenes, where an element's own position no longer tracks the
   * scroll in a way ScrollTrigger can measure.
   */
  trigger?: string;
  as?: "h1" | "h2" | "h3" | "p" | "div";
};

/**
 * Reveals text one line at a time, each line rising out of its own clipping
 * mask — the typographic equivalent of a page being turned.
 *
 * SplitText rewraps automatically on resize, so line boxes stay correct when
 * the fluid type scale reflows.
 */
export function RevealLines({
  children,
  className,
  delay = 0,
  immediate = false,
  trigger,
  as = "div",
}: RevealLinesProps) {
  // Widening to ElementType keeps the polymorphic `as` prop from forcing a
  // ref type that satisfies every possible tag at once.
  const Tag = as as React.ElementType;
  const ref = useRef<HTMLElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useIsomorphicLayoutEffect(() => {
    const element = ref.current;
    if (!element || prefersReducedMotion) return;

    const scrollTrigger = (trigger && element.closest(trigger)) || element;
    let split: SplitText | undefined;

    const context = gsap.context(() => {
      split = new SplitText(element, {
        type: "lines",
        linesClass: "reveal-line",
        // Each line gets a wrapper that clips its own overflow, so lines
        // emerge independently instead of sliding as one block.
        mask: "lines",
        autoSplit: true,
        // aria-label is forbidden on <p>/<div> (generic roles). Keep the
        // visible text readable instead of injecting invalid ARIA.
        aria: "none",
        onSplit: (self) => {
          return gsap.from(self.lines, {
            // Stay inside the padded mask so descenders (g, y, p) aren’t clipped.
            yPercent: 100,
            opacity: 0,
            duration: 1.15,
            delay,
            ease: gsapEase.expressive,
            stagger: stagger.lines,
            scrollTrigger: immediate
              ? undefined
              : { trigger: scrollTrigger, start: revealStart, once: true },
          });
        },
      });
    }, element);

    return () => {
      split?.revert();
      context.revert();
    };
  }, [delay, immediate, prefersReducedMotion, trigger]);

  return (
    <Tag ref={ref} data-reveal className={cn(className)}>
      {children}
    </Tag>
  );
}
