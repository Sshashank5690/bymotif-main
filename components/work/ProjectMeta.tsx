import { cn } from "@/lib/utils";
import type { Project } from "@/types";

type Tone = "ink" | "light";

const tones: Record<Tone, { label: string; value: string }> = {
  ink: { label: "text-quiet", value: "text-ink" },
  light: { label: "text-ivory/55", value: "text-ivory" },
};

/**
 * The metadata block that accompanies every project: the facts a prospective
 * client scans for before they read a word of narrative.
 */
export function ProjectMeta({
  project,
  tone = "ink",
  className,
  compact = false,
}: {
  project: Project;
  tone?: Tone;
  className?: string;
  compact?: boolean;
}) {
  const entries = [
    { label: "Industry", value: project.industry },
    { label: "Location", value: project.location },
    { label: "Year", value: project.year },
  ];

  return (
    <dl
      className={cn(
        "grid gap-x-8 gap-y-5",
        compact ? "grid-cols-2 sm:grid-cols-3" : "grid-cols-2 sm:grid-cols-3",
        className,
      )}
    >
      {entries.map((entry) => (
        <div key={entry.label}>
          <dt
            className={cn(
              "font-sans text-label font-medium uppercase tracking-[0.18em]",
              tones[tone].label,
            )}
          >
            {entry.label}
          </dt>
          <dd
            className={cn(
              "mt-2 font-sans text-small",
              tones[tone].value,
            )}
          >
            {entry.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

export function ProjectServices({
  services,
  tone = "ink",
  className,
}: {
  services: Project["services"];
  tone?: Tone;
  className?: string;
}) {
  return (
    <ul className={cn("flex flex-wrap gap-x-3 gap-y-2", className)}>
      {services.map((service) => (
        <li
          key={service}
          className={cn(
            "rounded-full border px-4 py-1.5 font-sans text-label uppercase tracking-[0.14em]",
            tone === "ink"
              ? "border-ink/15 text-stone"
              : "border-ivory/25 text-ivory/75",
          )}
        >
          {service}
        </li>
      ))}
    </ul>
  );
}
