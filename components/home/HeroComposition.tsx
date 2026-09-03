"use client";

import Image from "next/image";
import { useRef } from "react";

import { gsap } from "@/lib/gsap";
import { gsapEase } from "@/lib/motion";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import type { ImageAsset } from "@/types";

type Frame = {
  image: ImageAsset;
  /** How far this frame travels with the cursor. Higher reads as nearer. */
  depth: number;
  className: string;
  sizes: string;
  priority?: boolean;
};

/**
 * Layered photographic frames that shift fractionally with the cursor.
 *
 * The whole range of movement is a handful of pixels — enough to read as
 * physical depth, never enough to notice as an effect.
 */
export function HeroComposition({ frames }: { frames: Frame[] }) {
  const sceneRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useIsomorphicLayoutEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    const layers = gsap.utils.toArray<HTMLElement>("[data-depth]", scene);

    const context = gsap.context(() => {
      // Frames settle into place on load, deepest first.
      gsap.from(layers, {
        opacity: 0,
        y: 40,
        scale: 0.97,
        duration: 1.8,
        ease: gsapEase.drift,
        stagger: 0.14,
        delay: 0.25,
      });

      if (prefersReducedMotion) return;

      // quickTo keeps pointer tracking on GSAP's ticker rather than
      // allocating a new tween on every mousemove event.
      const movers = layers.map((layer) => ({
        depth: Number(layer.dataset.depth ?? 0),
        x: gsap.quickTo(layer, "x", { duration: 1.1, ease: "power3.out" }),
        y: gsap.quickTo(layer, "y", { duration: 1.1, ease: "power3.out" }),
      }));

      const onPointerMove = (event: PointerEvent) => {
        if (event.pointerType !== "mouse") return;

        const offsetX = event.clientX / window.innerWidth - 0.5;
        const offsetY = event.clientY / window.innerHeight - 0.5;

        movers.forEach((mover) => {
          mover.x(offsetX * mover.depth * 34);
          mover.y(offsetY * mover.depth * 22);
        });
      };

      window.addEventListener("pointermove", onPointerMove, { passive: true });
      return () => window.removeEventListener("pointermove", onPointerMove);
    }, scene);

    return () => context.revert();
  }, [prefersReducedMotion]);

  return (
    <div ref={sceneRef} className="relative h-full w-full" aria-hidden={false}>
      {frames.map((frame, index) => (
        <div
          key={frame.image.src}
          data-depth={frame.depth}
          className={frame.className}
        >
          <div className="relative h-full w-full overflow-hidden bg-shell shadow-[var(--shadow-float)]">
            <Image
              src={frame.image.src}
              alt={frame.image.alt}
              fill
              sizes={frame.sizes}
              priority={frame.priority}
              quality={index === 0 ? 90 : 75}
              className="object-cover"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
