import { useEffect, useLayoutEffect } from "react";

/**
 * `useLayoutEffect` warns during server rendering. Animations only ever run in
 * the browser, so fall back to `useEffect` on the server where the distinction
 * is irrelevant.
 */
export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;
