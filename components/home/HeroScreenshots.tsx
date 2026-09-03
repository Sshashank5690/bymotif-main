"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import { gsap } from "@/lib/gsap";
import { gsapEase } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { useScrollControls } from "@/components/providers/SmoothScrollProvider";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const cards = [
  {
    src: "/images/work/moments-photography/screenshot.png",
    alt: "Moments Photography website",
    label: "momentsphotography.com.au",
    depth: 1,
    rotation: 2,
    className:
      "absolute top-0 right-0 w-[80%] rounded-2xl overflow-hidden shadow-float border border-line-soft",
    enter: { x: 56, y: -36, scale: 0.9 },
    scatter: { x: 48, y: -32, rotation: -4 },
  },
  {
    src: "/images/work/estera-events/screenshot.png",
    alt: "Estera Events website",
    label: "esteraevents.com",
    depth: 2,
    rotation: -1,
    className:
      "absolute top-[14%] left-[4%] w-[75%] rounded-2xl overflow-hidden shadow-float border border-line-soft",
    enter: { x: -48, y: 28, scale: 0.92 },
    scatter: { x: -56, y: 24, rotation: 3 },
  },
  {
    src: "/images/work/jackson-james-photography/screenshot.jpg",
    alt: "Jackson James Photography website",
    label: "jacksonjames.in",
    depth: 3,
    rotation: 0.5,
    priority: true,
    className:
      "absolute bottom-0 right-[2%] w-[78%] rounded-2xl overflow-hidden shadow-float border border-line-soft",
    enter: { x: 32, y: 64, scale: 0.94 },
    scatter: { x: 36, y: 40, rotation: -2 },
  },
] as const;

const EXPANDED_WIDTH = 920;

type LightboxPhase = "idle" | "opening" | "open" | "closing";

export function HeroScreenshots() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const lightboxRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLButtonElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const phaseRef = useRef<LightboxPhase>("idle");
  const activeIndexRef = useRef<number | null>(null);
  const parallaxRef = useRef<{ x: gsap.QuickToFunc; y: gsap.QuickToFunc; depth: number }[]>(
    [],
  );
  const prefersReducedMotion = usePrefersReducedMotion();
  const { lockScroll, unlockScroll } = useScrollControls();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  activeIndexRef.current = activeIndex;

  useEffect(() => setMounted(true), []);

  const getExpandedHeight = useCallback(
    () => Math.round((EXPANDED_WIDTH * 3) / 4),
    [],
  );

  useIsomorphicLayoutEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    const layers = gsap.utils.toArray<HTMLElement>("[data-hero-card]", scene);

    const context = gsap.context(() => {
      if (prefersReducedMotion) {
        gsap.set(layers, { opacity: 1, x: 0, y: 0, scale: 1 });
        layers.forEach((layer, index) => {
          gsap.set(layer, { rotation: cards[index].rotation });
        });
        return;
      }

      layers.forEach((layer, index) => {
        const card = cards[index];
        gsap.set(layer, {
          opacity: 0,
          x: card.enter.x,
          y: card.enter.y,
          scale: card.enter.scale,
          rotation: card.rotation,
        });
      });

      gsap.to(layers, {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        rotation: (index: number) => cards[index].rotation,
        duration: 1.35,
        ease: gsapEase.drift,
        stagger: 0.16,
        delay: 0.4,
      });

      parallaxRef.current = layers.map((layer) => ({
        depth: Number(layer.dataset.depth ?? 0),
        x: gsap.quickTo(layer, "x", { duration: 1.15, ease: "power3.out" }),
        y: gsap.quickTo(layer, "y", { duration: 1.15, ease: "power3.out" }),
      }));

      const onPointerMove = (event: PointerEvent) => {
        if (event.pointerType !== "mouse" || activeIndexRef.current !== null) return;

        const offsetX = event.clientX / window.innerWidth - 0.5;
        const offsetY = event.clientY / window.innerHeight - 0.5;

        parallaxRef.current.forEach((mover) => {
          mover.x(offsetX * mover.depth * 28);
          mover.y(offsetY * mover.depth * 18);
        });
      };

      window.addEventListener("pointermove", onPointerMove, { passive: true });
      return () => window.removeEventListener("pointermove", onPointerMove);
    }, scene);

    return () => context.revert();
  }, [prefersReducedMotion]);

  const runOpenAnimation = useCallback(
    (index: number) => {
      const source = cardRefs.current[index];
      const lightbox = lightboxRef.current;
      const backdrop = backdropRef.current;
      if (!source || !lightbox || !backdrop) {
        phaseRef.current = "idle";
        setActiveIndex(null);
        return;
      }

      const rect = source.getBoundingClientRect();
      const expandedHeight = getExpandedHeight();
      const targetLeft = (window.innerWidth - EXPANDED_WIDTH) / 2;
      const targetTop = (window.innerHeight - expandedHeight) / 2;

      timelineRef.current?.kill();

      gsap.set(lightbox, {
        visibility: "visible",
        pointerEvents: "auto",
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height,
        rotation: cards[index].rotation,
        x: 0,
        y: 0,
        scale: 1,
        opacity: 1,
      });

      gsap.set(backdrop, { opacity: 0, pointerEvents: "auto" });
      gsap.set(source, { opacity: 0 });

      const others = cardRefs.current
        .map((el, i) => ({ el, i }))
        .filter(({ i }) => i !== index);

      if (prefersReducedMotion) {
        gsap.set(lightbox, {
          top: targetTop,
          left: targetLeft,
          width: EXPANDED_WIDTH,
          height: expandedHeight,
          rotation: 0,
        });
        gsap.set(backdrop, { opacity: 1 });
        gsap.set(
          others.map(({ el }) => el),
          { opacity: 0 },
        );
        phaseRef.current = "open";
        return;
      }

      const tl = gsap.timeline({
        defaults: { ease: "power4.inOut" },
        onComplete: () => {
          phaseRef.current = "open";
        },
      });

      tl.to(
        backdrop,
        { opacity: 1, duration: 0.55, ease: gsapEase.editorial },
        0,
      );

      others.forEach(({ el, i: cardIndex }, order) => {
        if (!el) return;
        const scatter = cards[cardIndex].scatter;
        tl.to(
          el,
          {
            opacity: 0,
            x: scatter.x,
            y: scatter.y,
            rotation: cards[cardIndex].rotation + scatter.rotation,
            scale: 0.88,
            duration: 0.65,
            ease: "power3.out",
          },
          order * 0.04,
        );
      });

      tl.to(
        lightbox,
        {
          top: targetTop,
          left: targetLeft,
          width: EXPANDED_WIDTH,
          height: expandedHeight,
          rotation: 0,
          duration: 1.05,
        },
        0.04,
      ).to(
        lightbox,
        {
          boxShadow: "0 40px 90px rgba(44, 39, 35, 0.28)",
          duration: 0.8,
        },
        0.2,
      );

      timelineRef.current = tl;
    },
    [getExpandedHeight, prefersReducedMotion],
  );

  useIsomorphicLayoutEffect(() => {
    if (phaseRef.current !== "opening" || activeIndex === null) return;
    runOpenAnimation(activeIndex);
  }, [activeIndex, runOpenAnimation]);

  const openLightbox = useCallback((index: number) => {
    if (phaseRef.current !== "idle") return;
    phaseRef.current = "opening";
    setActiveIndex(index);
  }, []);

  const closeLightbox = useCallback(() => {
    if (phaseRef.current !== "open" || activeIndex === null) return;

    const index = activeIndex;
    const source = cardRefs.current[index];
    const lightbox = lightboxRef.current;
    const backdrop = backdropRef.current;
    if (!source || !lightbox || !backdrop) {
      phaseRef.current = "idle";
      setActiveIndex(null);
      return;
    }

    phaseRef.current = "closing";
    timelineRef.current?.kill();

    gsap.set(backdrop, { pointerEvents: "none" });
    gsap.set(lightbox, { pointerEvents: "none" });

    const rect = source.getBoundingClientRect();
    const others = cardRefs.current
      .map((el, i) => ({ el, i }))
      .filter(({ i }) => i !== index);

    const finishClose = () => {
      gsap.set(lightbox, { visibility: "hidden", pointerEvents: "none" });
      gsap.set(backdrop, { opacity: 0, pointerEvents: "none" });
      phaseRef.current = "idle";
      setActiveIndex(null);
    };

    if (prefersReducedMotion) {
      gsap.set(source, { opacity: 1 });
      others.forEach(({ el, i: cardIndex }) => {
        if (!el) return;
        gsap.set(el, {
          opacity: 1,
          x: 0,
          y: 0,
          rotation: cards[cardIndex].rotation,
          scale: 1,
        });
      });
      finishClose();
      return;
    }

    const tl = gsap.timeline({ onComplete: finishClose });

    tl.to(backdrop, { opacity: 0, duration: 0.45, ease: gsapEase.editorial }, 0);

    tl.to(
      lightbox,
      {
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height,
        rotation: cards[index].rotation,
        boxShadow: "0 18px 50px rgba(44, 39, 35, 0.12)",
        duration: 0.85,
      },
      0,
    );

    tl.to(source, { opacity: 1, duration: 0.35, ease: gsapEase.editorial }, 0.55);

    others.forEach(({ el, i: cardIndex }, order) => {
      if (!el) return;
      tl.to(
        el,
        {
          opacity: 1,
          x: 0,
          y: 0,
          rotation: cards[cardIndex].rotation,
          scale: 1,
          duration: 0.7,
          ease: gsapEase.drift,
        },
        0.35 + order * 0.06,
      );
    });

    timelineRef.current = tl;
  }, [activeIndex, prefersReducedMotion]);

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeLightbox();
    };

    lockScroll();
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      unlockScroll();
    };
  }, [activeIndex, closeLightbox, lockScroll, unlockScroll]);

  const activeCard = activeIndex !== null ? cards[activeIndex] : null;

  return (
    <>
      <div ref={sceneRef} className="relative h-[38rem]">
        {cards.map((card, index) => (
          <button
            key={card.src}
            ref={(el) => {
              cardRefs.current[index] = el;
            }}
            type="button"
            data-hero-card
            data-depth={card.depth}
            disabled={activeIndex !== null}
            aria-label={`Expand ${card.alt}`}
            aria-expanded={activeIndex === index}
            onClick={() => openLightbox(index)}
            className={cn(
              card.className,
              "cursor-pointer bg-canvas text-left transition-[box-shadow] duration-500",
              "hover:shadow-[0_24px_60px_rgba(44,39,35,0.16)]",
              "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-burgundy/40",
              activeIndex !== null && "pointer-events-none",
            )}
          >
            <Image
              src={card.src}
              alt={card.alt}
              width={700}
              height={525}
              priority={"priority" in card ? card.priority : false}
              className="w-full object-cover object-top pointer-events-none"
              style={{ aspectRatio: "4/3" }}
            />
          </button>
        ))}
      </div>

      {mounted && activeCard
        ? createPortal(
            <div className="fixed inset-0 z-[100]">
              <button
                ref={backdropRef}
                type="button"
                aria-label="Close preview"
                onClick={(event) => {
                  event.stopPropagation();
                  closeLightbox();
                }}
                className="absolute inset-0 bg-ink/50 backdrop-blur-[14px] opacity-0"
              />

              <div
                ref={lightboxRef}
                className="fixed overflow-hidden rounded-2xl border border-line-soft bg-canvas shadow-float invisible pointer-events-none"
                style={{ boxShadow: "0 18px 50px rgba(44, 39, 35, 0.12)" }}
                onClick={(event) => event.stopPropagation()}
              >
                <div className="flex items-center gap-1.5 border-b border-line-soft bg-shell px-4 py-2.5">
                  <span className="h-2 w-2 rounded-full bg-rose/60" />
                  <span className="h-2 w-2 rounded-full bg-champagne/60" />
                  <span className="h-2 w-2 rounded-full bg-sage/60" />
                  <span className="ml-3 flex-1 truncate rounded bg-ivory/80 px-2 py-0.5 font-sans text-[0.65rem] text-stone">
                    {activeCard.label}
                  </span>
                  <button
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation();
                      closeLightbox();
                    }}
                    aria-label="Close"
                    className="ml-2 font-sans text-label uppercase tracking-[0.14em] text-stone transition-colors hover:text-ink"
                  >
                    Close
                  </button>
                </div>
                <Image
                  src={activeCard.src}
                  alt={activeCard.alt}
                  width={EXPANDED_WIDTH}
                  height={Math.round((EXPANDED_WIDTH * 3) / 4)}
                  className="w-full object-cover object-top"
                  style={{ aspectRatio: "4/3" }}
                />
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
