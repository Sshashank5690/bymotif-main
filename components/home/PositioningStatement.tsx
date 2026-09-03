import { Reveal } from "@/components/motion/Reveal";
import { RevealLines } from "@/components/motion/RevealLines";

export function PositioningStatement() {
  return (
    <section className="px-gutter py-section-sm border-t border-line-soft">
      <div className="mx-auto max-w-editorial">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16 lg:items-center">
          <div className="lg:col-span-7">
            <RevealLines
              as="p"
              className="font-serif text-display-md font-light leading-[1.22] text-ink"
            >
              The first five seconds{" "}
              <em className="italic text-burgundy">decide everything.</em>
            </RevealLines>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <p className="max-w-[44ch] font-sans text-body text-stone">
                Someone has several tabs open, several studios side by side. A
                bespoke website&rsquo;s job is to end that comparison before it
                starts, so the person doesn&rsquo;t feel like they&rsquo;re
                choosing, they feel like they&rsquo;ve already found the one.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
