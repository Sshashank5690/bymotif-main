import { Reveal } from "@/components/motion/Reveal";
import { RevealLines } from "@/components/motion/RevealLines";
import { SectionLabel } from "@/components/ui/SectionLabel";
import type { CaseStudy } from "@/types";

/**
 * The typographic and chromatic decisions, shown rather than described — a
 * prospective client should be able to see the reasoning, not just read it.
 */
export function DesignSystemNotes({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <section className="border-t border-line-soft bg-canvas px-gutter py-section-sm">
      <div className="mx-auto grid max-w-editorial gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-3">
          <Reveal distance={14}>
            <SectionLabel>The system</SectionLabel>
          </Reveal>
        </div>

        <div className="lg:col-span-9">
          <RevealLines
            as="h2"
            className="max-w-[22ch] font-serif text-display-sm font-light text-ink"
          >
            Typography and colour
          </RevealLines>

          <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <Reveal>
                <p className="font-sans text-label uppercase tracking-[0.18em] text-quiet">
                  Display
                </p>
                <p className="mt-4 font-serif text-display-sm font-light leading-none text-ink">
                  {caseStudy.typography.display}
                </p>
                <p className="mt-3 font-serif text-title font-light italic text-stone">
                  Aa &mdash; Bb &mdash; Cc
                </p>
              </Reveal>

              <Reveal delay={0.08} className="mt-10">
                <p className="font-sans text-label uppercase tracking-[0.18em] text-quiet">
                  Text
                </p>
                <p className="mt-4 font-sans text-title font-medium leading-none text-ink">
                  {caseStudy.typography.text}
                </p>
                <p className="mt-3 font-sans text-body text-stone">
                  Aa &mdash; Bb &mdash; Cc
                </p>
              </Reveal>

              <Reveal delay={0.14} className="mt-10">
                <p className="max-w-[44ch] text-balance-pretty font-sans text-small text-stone">
                  {caseStudy.typography.note}
                </p>
              </Reveal>
            </div>

            <div>
              <Reveal>
                <p className="font-sans text-label uppercase tracking-[0.18em] text-quiet">
                  Palette
                </p>
              </Reveal>

              <ul className="mt-6 space-y-px">
                {caseStudy.palette.map((swatch, index) => (
                  <Reveal
                    as="li"
                    key={swatch.hex}
                    delay={0.05 + index * 0.05}
                    className="flex items-center gap-5 border-t border-line-soft py-4"
                  >
                    <span
                      aria-hidden
                      className="size-11 shrink-0 rounded-full ring-1 ring-inset ring-ink/10"
                      style={{ backgroundColor: swatch.hex }}
                    />
                    <span className="flex-1 font-sans text-small text-ink">
                      {swatch.name}
                    </span>
                    <span className="font-sans text-label uppercase tracking-[0.14em] text-quiet">
                      {swatch.hex}
                    </span>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
