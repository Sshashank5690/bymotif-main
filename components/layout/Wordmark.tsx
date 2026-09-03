import Link from "next/link";

import { cn } from "@/lib/utils";

export function Wordmark({
  className,
  variant = "dark",
  label = "byMotif Studios home",
  showTagline = false,
}: {
  className?: string;
  /** "dark" = ink on light backgrounds. "light" = ivory on dark backgrounds. */
  variant?: "dark" | "light";
  label?: string;
  showTagline?: boolean;
}) {
  const ink = variant === "light" ? "text-ivory" : "text-ink";
  const muted = variant === "light" ? "text-ivory/45" : "text-stone";

  return (
    <Link
      href="/"
      aria-label={label}
      className={cn(
        "group inline-block transition-opacity duration-(--duration-quick) hover:opacity-70",
        className,
      )}
    >
      <span
        className={cn(
          "block font-brand font-light leading-none tracking-[-0.03em]",
          ink,
        )}
      >
        <span className="block text-[0.72em] leading-none">by</span>
        <span className="mt-[0.04em] block text-[1em] leading-[0.9]">
          motifStudios.
        </span>
        {showTagline ? (
          <span
            className={cn(
              "mt-[0.42em] block font-sans text-[0.24em] font-medium uppercase tracking-[0.2em]",
              muted,
            )}
          >
            Vision · Craft · Convert
          </span>
        ) : null}
      </span>
    </Link>
  );
}
