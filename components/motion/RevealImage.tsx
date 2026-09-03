"use client";

import Image from "next/image";
import { useRef } from "react";

import { gsap } from "@/lib/gsap";
import { gsapEase } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import type { ImageAsset } from "@/types";

type RevealImageProps = {
  image: ImageAsset;
  sizes: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  /** 90 for hero and case study work, where artefacts would be visible. */
  quality?: 75 | 90;
  /**
   * Percentage of its own height the photograph drifts across the scroll.
   * 0 disables parallax. Keep low — this should register as depth, not motion.
   */
  parallax?: number;
  /** Disables the mask so the image is simply present (used above the fold). */
  revealOnScroll?: boolean;
};

/**
 * A photograph that unveils behind a soft mask and drifts slightly slower than
 * the page.
 *
 * The image is rendered at 112% height so parallax translation never exposes
 * an edge of the frame.
 */
export function RevealImage({
  image,
  sizes,
  className,
  imageClassName,
  priority = false,
  quality = 75,
  parallax = 6,
  revealOnScroll = true,
}: RevealImageProps) {
  const frameRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useIsomorphicLayoutEffect(() => {
    const frame = frameRef.current;
    if (!frame || prefersReducedMotion) return;

    const inner = frame.querySelector<HTMLElement>("[data-image-inner]");
    if (!inner) return;

    const context = gsap.context(() => {
      if (revealOnScroll) {
        gsap.set(frame, { clipPath: "inset(0% 0% 100% 0%)" });
        gsap.set(inner, { scale: 1.14 });

        const reveal = gsap.timeline({
          scrollTrigger: { trigger: frame, start: "top 88%", once: true },
        });

        reveal
          .to(frame, {
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1.5,
            ease: gsapEase.drift,
          })
          .to(inner, { scale: 1, duration: 1.8, ease: gsapEase.drift }, 0);
      }

      if (parallax > 0) {
        gsap.fromTo(
          inner,
          { yPercent: -parallax },
          {
            yPercent: parallax,
            ease: "none",
            scrollTrigger: {
              trigger: frame,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        );
      }
    }, frame);

    return () => context.revert();
  }, [parallax, prefersReducedMotion, revealOnScroll]);

  return (
    <div
      ref={frameRef}
      data-reveal
      className={cn("relative overflow-hidden bg-shell", className)}
    >
      <div data-image-inner className="absolute inset-x-0 -top-[6%] h-[112%]">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={sizes}
          priority={priority}
          quality={quality}
          className={cn("object-cover", imageClassName)}
        />
      </div>
    </div>
  );
}
