"use client";

import { useEffect, useRef } from "react";

import { gsap } from "@/lib/gsap";
import { cn } from "@/lib/utils";

type PromoPriceProps = {
  children: string;
  className?: string;
  /** Larger display for the detail panel. */
  size?: "compact" | "display";
};

/**
 * Sale price with a warm peach→rose→lavender gradient and a soft GSAP shimmer.
 */
export function PromoPrice({
  children,
  className,
  size = "compact",
}: PromoPriceProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        element,
        { opacity: 0, y: 10, scale: 0.94 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.75,
          ease: "power3.out",
        },
      );

      gsap.to(element, {
        backgroundPosition: "100% 50%",
        duration: 2.8,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      gsap.to(element, {
        filter: "drop-shadow(0 0 10px rgba(224, 176, 168, 0.55))",
        duration: 1.9,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    }, element);

    return () => ctx.revert();
  }, [children]);

  return (
    <span
      ref={ref}
      className={cn(
        "pricing-promo-price inline-block bg-[length:220%_100%] bg-clip-text font-serif font-light leading-none tracking-[-0.02em] text-transparent",
        size === "display" && "text-[2.25rem] sm:text-[2.5rem]",
        size === "compact" && "text-[1.75rem] sm:text-[2rem]",
        className,
      )}
      style={{
        backgroundImage:
          "linear-gradient(110deg, #b86a5c 0%, #e0a898 28%, #9a7bb0 55%, #e8c8b4 78%, #c47a6a 100%)",
        backgroundPosition: "0% 50%",
      }}
    >
      {children}
    </span>
  );
}
