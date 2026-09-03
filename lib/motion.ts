/**
 * Shared motion values.
 *
 * Kept in one place so every reveal across the site shares the same sense of
 * weight. Durations are seconds (GSAP) — the CSS equivalents live in
 * `globals.css` as `--duration-*`.
 */

export const ease = {
  editorial: [0.22, 1, 0.36, 1] as const,
  vellum: [0.16, 1, 0.3, 1] as const,
  settle: [0.33, 1, 0.68, 1] as const,
};

/** GSAP-native easing names, for tweens driven by ScrollTrigger. */
export const gsapEase = {
  editorial: "power3.out",
  expressive: "power4.out",
  drift: "expo.out",
} as const;

export const duration = {
  quick: 0.32,
  soft: 0.62,
  slow: 1.1,
  drift: 1.6,
} as const;

/** Delay between siblings in a staggered reveal. */
export const stagger = {
  tight: 0.045,
  lines: 0.085,
  editorial: 0.12,
} as const;

/** Fraction of the viewport an element must reach before it reveals. */
export const revealStart = "top 85%";
