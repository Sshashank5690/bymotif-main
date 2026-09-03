"use client";

import { useEffect, useState } from "react";

import { useScrollControls } from "@/components/providers/SmoothScrollProvider";

/** Pixels of travel required before the header changes state, to stop jitter. */
const THRESHOLD = 8;
/** How far down the page the header starts wearing its glass surface. */
const SETTLE_AT = 64;

export function useScrollDirection() {
  const { subscribeToScroll } = useScrollControls();
  const [hidden, setHidden] = useState(false);
  const [settled, setSettled] = useState(false);

  useEffect(() => {
    let previous = window.scrollY;
    let frame = 0;

    const update = () => {
      const current = window.scrollY;
      const delta = current - previous;

      setSettled(current > SETTLE_AT);

      if (Math.abs(delta) > THRESHOLD) {
        // Never hide near the very top, where the header is part of the
        // composition rather than an overlay.
        setHidden(delta > 0 && current > SETTLE_AT * 2);
        previous = current;
      }

      frame = 0;
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(update);
    };

    update();
    const unsubscribe = subscribeToScroll(onScroll);

    return () => {
      unsubscribe();
      if (frame) cancelAnimationFrame(frame);
    };
  }, [subscribeToScroll]);

  return { hidden, settled };
}
