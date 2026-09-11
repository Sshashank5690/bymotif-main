"use client";

import { useRef } from "react";

import { gsap } from "@/lib/gsap";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

type BloomConfig = {
  depth: number;
  driftX: number;
  driftY: number;
  driftDuration: number;
  breatheOpacity: number;
};

const BLOOMS: BloomConfig[] = [
  { depth: 1.2, driftX: 40, driftY: 30, driftDuration: 16, breatheOpacity: 0.9 },
  { depth: 0.65, driftX: -46, driftY: -28, driftDuration: 21, breatheOpacity: 0.76 },
  { depth: 0.95, driftX: 32, driftY: 36, driftDuration: 18, breatheOpacity: 0.7 },
];

/**
 * Hero background that reacts to the pointer — soft atelier light.
 * Native cursor stays; blooms + spotlight shift with GSAP.
 * Idle drift lives on an outer wrapper so it never fights pointer parallax.
 */
export function HeroAtmosphere() {
  const rootRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useIsomorphicLayoutEffect(() => {
    const root = rootRef.current;
    if (!root || prefersReducedMotion) return;

    const hero = root.closest<HTMLElement>("[data-site-hero]") ?? root;
    const drifts = gsap.utils.toArray<HTMLElement>("[data-drift]", root);
    const blooms = gsap.utils.toArray<HTMLElement>("[data-bloom]", root);
    const spotlight = root.querySelector<HTMLElement>("[data-spotlight]");
    const sheen = root.querySelector<HTMLElement>("[data-sheen]");

    const context = gsap.context(() => {
      drifts.forEach((drift, index) => {
        const config = BLOOMS[index] ?? BLOOMS[0];
        const bloom = blooms[index];

        gsap.to(drift, {
          x: config.driftX,
          y: config.driftY,
          duration: config.driftDuration,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });

        if (bloom) {
          gsap.to(bloom, {
            opacity: config.breatheOpacity,
            scale: 1.12,
            duration: 9 + index * 2.2,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
            delay: index * 1.2,
          });
        }
      });

      if (spotlight) {
        gsap.set(spotlight, { xPercent: -50, yPercent: -50, opacity: 0 });
      }
      if (sheen) {
        gsap.set(sheen, { xPercent: -50, yPercent: -50, opacity: 0, scale: 0.9 });
      }

      const bloomMovers = blooms.map((bloom, index) => {
        const depth = BLOOMS[index]?.depth ?? 1;
        return {
          depth,
          x: gsap.quickTo(bloom, "x", { duration: 1.25, ease: "power3.out" }),
          y: gsap.quickTo(bloom, "y", { duration: 1.25, ease: "power3.out" }),
          rotate: gsap.quickTo(bloom, "rotation", {
            duration: 1.5,
            ease: "power3.out",
          }),
        };
      });

      const spotX = spotlight
        ? gsap.quickTo(spotlight, "x", { duration: 0.75, ease: "power3.out" })
        : null;
      const spotY = spotlight
        ? gsap.quickTo(spotlight, "y", { duration: 0.75, ease: "power3.out" })
        : null;

      const sheenX = sheen
        ? gsap.quickTo(sheen, "x", { duration: 1.05, ease: "power3.out" })
        : null;
      const sheenY = sheen
        ? gsap.quickTo(sheen, "y", { duration: 1.05, ease: "power3.out" })
        : null;

      let active = false;

      const activate = () => {
        if (active) return;
        active = true;
        if (spotlight) {
          gsap.to(spotlight, { opacity: 1, duration: 0.55, ease: "power2.out" });
        }
        if (sheen) {
          gsap.to(sheen, {
            opacity: 0.7,
            scale: 1,
            duration: 0.65,
            ease: "power2.out",
          });
        }
      };

      const deactivate = () => {
        if (!active) return;
        active = false;

        if (spotlight) {
          gsap.to(spotlight, { opacity: 0, duration: 0.75, ease: "power2.out" });
        }
        if (sheen) {
          gsap.to(sheen, {
            opacity: 0,
            scale: 0.92,
            duration: 0.85,
            ease: "power2.out",
          });
        }

        blooms.forEach((bloom) => {
          gsap.to(bloom, {
            x: 0,
            y: 0,
            rotation: 0,
            duration: 1.35,
            ease: "power3.out",
          });
        });
      };

      const onPointerMove = (event: PointerEvent) => {
        if (event.pointerType !== "mouse") return;

        const rect = hero.getBoundingClientRect();
        const inside =
          event.clientX >= rect.left &&
          event.clientX <= rect.right &&
          event.clientY >= rect.top &&
          event.clientY <= rect.bottom;

        if (!inside) {
          deactivate();
          return;
        }

        activate();

        const localX = event.clientX - rect.left;
        const localY = event.clientY - rect.top;
        const nx = localX / rect.width - 0.5;
        const ny = localY / rect.height - 0.5;

        bloomMovers.forEach((mover) => {
          const dir = mover.depth > 1 ? 1 : -1;
          mover.x(nx * mover.depth * 78 * dir);
          mover.y(ny * mover.depth * 52 * dir);
          mover.rotate(nx * mover.depth * 5);
        });

        spotX?.(localX);
        spotY?.(localY);
        sheenX?.(localX);
        sheenY?.(localY);
      };

      window.addEventListener("pointermove", onPointerMove, { passive: true });

      return () => {
        window.removeEventListener("pointermove", onPointerMove);
      };
    }, root);

    return () => context.revert();
  }, [prefersReducedMotion]);

  return (
    <div
      ref={rootRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute inset-0 bg-ivory" />

      {/* Cursor spotlight — soft warm key light */}
      <div
        data-spotlight
        className="absolute top-0 left-0 size-[min(56vw,30rem)] rounded-full blur-[80px] will-change-transform"
        style={{
          background:
            "radial-gradient(circle, rgba(255,240,228,0.9) 0%, rgba(232,200,180,0.4) 40%, transparent 70%)",
        }}
      />

      {/* Peach */}
      <div data-drift className="absolute -right-[18%] top-[-12%] will-change-transform">
        <div
          data-bloom
          className="h-[32rem] w-[40rem] rounded-full opacity-70 blur-[100px] will-change-transform"
          style={{
            background:
              "radial-gradient(circle, rgba(232, 190, 160, 0.95) 0%, transparent 68%)",
          }}
        />
      </div>

      {/* Rose */}
      <div data-drift className="absolute -left-[16%] top-[28%] will-change-transform">
        <div
          data-bloom
          className="h-[28rem] w-[36rem] rounded-full opacity-58 blur-[100px] will-change-transform"
          style={{
            background:
              "radial-gradient(circle, rgba(224, 160, 150, 0.9) 0%, transparent 68%)",
          }}
        />
      </div>

      {/* Lavender */}
      <div data-drift className="absolute right-[8%] bottom-[-8%] will-change-transform">
        <div
          data-bloom
          className="h-[26rem] w-[32rem] rounded-full opacity-50 blur-[95px] will-change-transform"
          style={{
            background:
              "radial-gradient(circle, rgba(190, 170, 210, 0.85) 0%, transparent 68%)",
          }}
        />
      </div>

      {/* Soft sheen that trails the pointer */}
      <div
        data-sheen
        className="absolute top-0 left-0 h-[min(70vw,36rem)] w-[min(70vw,36rem)] rounded-full mix-blend-soft-light will-change-transform dark:mix-blend-overlay"
        style={{
          background:
            "radial-gradient(circle, rgba(255,250,244,0.65) 0%, rgba(232,200,180,0.2) 45%, transparent 70%)",
        }}
      />
    </div>
  );
}
