"use client";

import { useRef } from "react";

import { gsap } from "@/lib/gsap";
import { gsapEase, revealStart } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Seconds to wait after the trigger fires. */
  delay?: number;
  /** Vertical offset in pixels the element rises from. */
  distance?: number;
  /**
   * Selector for an ancestor to trigger from. Required inside `position:
   * sticky` scenes, where an element's own position no longer tracks the
   * scroll in a way ScrollTrigger can measure.
   */
  trigger?: string;
  as?: "div" | "section" | "article" | "li" | "span";
};

/**
 * The baseline entrance: a short rise with a long fade.
 *
 * The hidden state is applied from JavaScript rather than CSS so that content
 * remains readable if scripts never run.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  distance = 28,
  trigger,
  as = "div",
}: RevealProps) {
  // Widening to ElementType keeps the polymorphic `as` prop from forcing a
  // ref type that satisfies every possible tag at once.
  const Tag = as as React.ElementType;
  const ref = useRef<HTMLElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useIsomorphicLayoutEffect(() => {
    const element = ref.current;
    if (!element || prefersReducedMotion) return;

    const scrollTrigger =
      (trigger && element.closest(trigger)) || element;

    const context = gsap.context(() => {
      gsap.set(element, { opacity: 0, y: distance });

      gsap.to(element, {
        opacity: 1,
        y: 0,
        duration: 1.1,
        delay,
        ease: gsapEase.editorial,
        scrollTrigger: { trigger: scrollTrigger, start: revealStart, once: true },
      });
    }, element);

    return () => context.revert();
  }, [delay, distance, prefersReducedMotion, trigger]);

  return (
    <Tag ref={ref} data-reveal className={cn(className)}>
      {children}
    </Tag>
  );
}
