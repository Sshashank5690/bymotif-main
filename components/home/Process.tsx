import { Reveal } from "@/components/motion/Reveal";
import { RevealLines } from "@/components/motion/RevealLines";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { processSteps } from "@/content/capabilities";

/**
 * Process without a timeline diagram: six numbered entries in a quiet grid,
 * each reading as a paragraph rather than a stage in a funnel.
 */
export function Process() {
  return (
    <section className="border-t border-line-soft px-gutter py-section">
      <div className="mx-auto max-w-editorial">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Reveal>
              <SectionLabel>How a project moves</SectionLabel>
            </Reveal>

            <RevealLines
              as="h2"
              className="mt-10 max-w-[16ch] font-serif text-display-md font-light text-ink"
            >
              Six stages, and{" "}
              <em className="italic text-burgundy">no surprises.</em>
            </RevealLines>
          </div>

          <Reveal delay={0.12} className="lg:col-span-5 lg:pb-3">
            <p className="max-w-[40ch] font-sans text-body text-stone">
              Every project runs the same way. You always know what is happening
              now, what happens next, and what we need from you.
            </p>
          </Reveal>
        </div>

        <ol className="mt-section-sm grid gap-x-12 gap-y-px sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, index) => (
            <Reveal
              as="li"
              key={step.number}
              delay={index * 0.05}
              className="border-t border-line-soft pb-10 pt-8"
            >
              <span className="font-sans text-label tracking-[0.18em] text-quiet">
                {step.number}
              </span>
              <h3 className="mt-5 font-serif text-title font-light text-ink">
                {step.title}
              </h3>
              <p className="mt-4 max-w-[36ch] text-balance-pretty font-sans text-small text-stone">
                {step.description}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
