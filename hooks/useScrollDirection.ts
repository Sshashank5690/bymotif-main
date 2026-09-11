"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { useScrollControls } from "@/components/providers/SmoothScrollProvider";

/** Glass + compact bar after this much scroll (works with Lenis via window.scrollY). */
const SETTLE_AT = 28;

function readScrollY() {
  return (
    window.scrollY ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0
  );
}

/**
 * Header scroll state for the fixed navbar.
 * - `settled`: show glass + compact height
 * - never auto-hides — stays visible while scrolling
 */
export function useScrollDirection() {
  const { subscribeToScroll } = useScrollControls();
  const pathname = usePathname();
  const [settled, setSettled] = useState(false);

  useEffect(() => {
    let frame = 0;
    let lastSettled = false;

    const update = () => {
      const next = readScrollY() > SETTLE_AT;
      // Avoid redundant React renders on every Lenis tick.
      if (next !== lastSettled) {
        lastSettled = next;
        setSettled(next);
      }
      frame = 0;
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(update);
    };

    update();
    const unsubscribe = subscribeToScroll(onScroll);
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      unsubscribe();
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [subscribeToScroll, pathname]);

  return { hidden: false, settled };
}
