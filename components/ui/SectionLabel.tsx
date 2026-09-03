import { cn } from "@/lib/utils";

type SectionLabelProps = {
  children: React.ReactNode;
  className?: string;
  /** Renders a hairline rule before the text, as on a printed contents page. */
  rule?: boolean;
};

export function SectionLabel({
  children,
  className,
  rule = true,
}: SectionLabelProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-4 font-sans text-label font-medium uppercase tracking-[0.18em] text-stone",
        className,
      )}
    >
      {rule ? (
        <span aria-hidden className="h-px w-8 bg-current opacity-40" />
      ) : null}
      {children}
    </span>
  );
}
