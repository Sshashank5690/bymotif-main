"use client";

import Lenis from "lenis";
import { createContext, useCallback, useContext, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

import { gsap, ScrollTrigger } from "@/lib/gsap";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

type ScrollControls = {
  /** Freezes scrolling while a full-screen overlay is open. */
  lockScroll: () => void;
  unlockScroll: () => void;
  /**
   * Notifies on every scroll tick. Lenis takes wheel input over and moves the
   * page itself, so the window's own `scroll` event never fires while it is
   * running; anything reacting to scroll position has to listen here instead.
   */
  subscribeToScroll: (listener: () => void) => () => void;
};

const ScrollContext = createContext<ScrollControls>({
  lockScroll: () => {},
  unlockScroll: () => {},
  subscribeToScroll: () => () => {},
});

export const useScrollControls = () => useContext(ScrollContext);

/**
 * Drives smooth scrolling and keeps ScrollTrigger in step with it.
 *
 * Lenis is skipped entirely when reduced motion is preferred — the browser's
 * native scrolling is left alone rather than being smoothed more gently.
 */
export function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);
  const listenersRef = useRef(new Set<() => void>());
  const lockCountRef = useRef(0);

  // Held in a ref so subscribers never depend on which scroll source is live.
  const notify = useCallback(() => {
    for (const listener of listenersRef.current) listener();
  }, []);

  const subscribeToScroll = useCallback((listener: () => void) => {
    listenersRef.current.add(listener);
    return () => {
      listenersRef.current.delete(listener);
    };
  }, []);

  // The fallback source: the only one that fires under reduced motion, and
  // dormant while Lenis is driving.
  useEffect(() => {
    window.addEventListener("scroll", notify, { passive: true });
    return () => window.removeEventListener("scroll", notify);
  }, [notify]);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      // Snappier than a long ease — still smooth, but no “heavy” lag.
      duration: 0.85,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      wheelMultiplier: 1,
      touchMultiplier: 1.4,
      // Touch devices already have momentum scrolling that feels correct.
      syncTouch: false,
    });

    lenisRef.current = lenis;
    lenis.on("scroll", ScrollTrigger.update);
    lenis.on("scroll", notify);

    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    // Lag smoothing fights Lenis during heavy frames and causes visible jumps.
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.off("scroll", ScrollTrigger.update);
      lenis.off("scroll", notify);
      gsap.ticker.remove(raf);
      gsap.ticker.lagSmoothing(500, 33);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [prefersReducedMotion, notify]);

  // Triggers measured against the previous page's layout are stale after a
  // client navigation, so recalculate once the new route has painted.
  useEffect(() => {
    const id = requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => cancelAnimationFrame(id);
  }, [pathname]);

  const lockScroll = useCallback(() => {
    lockCountRef.current += 1;
    if (lockCountRef.current > 1) return;

    lenisRef.current?.stop();
    // Also covers the reduced-motion path, where Lenis is never created.
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
  }, []);

  const unlockScroll = useCallback(() => {
    if (lockCountRef.current === 0) return;

    lockCountRef.current -= 1;
    if (lockCountRef.current > 0) return;

    lenisRef.current?.start();
    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";

    requestAnimationFrame(() => ScrollTrigger.refresh());
  }, []);

  useEffect(
    () => () => {
      lockCountRef.current = 0;
      lenisRef.current?.start();
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    },
    [],
  );

  return (
    <ScrollContext.Provider
      value={{ lockScroll, unlockScroll, subscribeToScroll }}
    >
      {children}
    </ScrollContext.Provider>
  );
}
