import { Reveal } from "@/components/motion/Reveal";
import { RevealLines } from "@/components/motion/RevealLines";
import { SectionLabel } from "@/components/ui/SectionLabel";
import type { CaseStudyChapter as Chapter } from "@/types";

/**
 * One chapter of the story: a label in the margin, a heading, and prose set at
 * a comfortable measure. Consistent across every case study so a reader learns
 * the rhythm once.
 */
export function CaseStudyChapter({
  chapter,
  children,
}: {
  chapter: Chapter;
  children?: React.ReactNode;
}) {
  return (
    <section className="border-t border-line-soft px-gutter py-section-sm">
      <div className="mx-auto grid max-w-editorial gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-3">
          <Reveal distance={14}>
            <SectionLabel>{chapter.label}</SectionLabel>
          </Reveal>
        </div>

        <div className="lg:col-span-9">
          <RevealLines
            as="h2"
            className="max-w-[22ch] font-serif text-display-sm font-light text-ink"
          >
            {chapter.heading}
          </RevealLines>

          <div className="mt-9 max-w-reading space-y-6">
            {chapter.body.map((paragraph, index) => (
              <Reveal key={paragraph.slice(0, 32)} delay={0.06 + index * 0.05}>
                <p className="text-balance-pretty font-sans text-body text-stone">
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>

          {children}
        </div>
      </div>
    </section>
  );
}
