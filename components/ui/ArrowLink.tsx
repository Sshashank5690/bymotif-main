import Link from "next/link";

import { cn } from "@/lib/utils";

type ArrowLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  /** Opens in a new tab and swaps the glyph for an outward arrow. */
  external?: boolean;
};

/**
 * The studio's standard forward link: a quiet label with a rule that draws in
 * and an arrow that steps forward on hover.
 */
export function ArrowLink({
  href,
  children,
  className,
  external = false,
}: ArrowLinkProps) {
  const content = (
    <>
      <span className="link-reveal">{children}</span>
      <span
        aria-hidden
        className={cn(
          "transition-transform duration-(--duration-quick) ease-editorial",
          external
            ? "group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            : "group-hover:translate-x-1",
        )}
      >
        {external ? "↗" : "→"}
      </span>
    </>
  );

  const className_ = cn(
    "group inline-flex items-center gap-3 font-sans text-label-lg font-medium uppercase tracking-[0.14em] text-ink",
    className,
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className_}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={className_}>
      {content}
    </Link>
  );
}
