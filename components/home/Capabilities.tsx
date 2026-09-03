import { Reveal } from "@/components/motion/Reveal";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { capabilities } from "@/content/capabilities";

export function Capabilities() {
  return (
    <section id="capabilities" className="border-t border-line-soft px-gutter py-section-sm">
      <div className="mx-auto max-w-editorial">
        <div className="mb-10 flex items-end justify-between gap-8">
          <div>
            <Reveal>
              <SectionLabel>Capabilities</SectionLabel>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-4 font-serif text-display-md font-light text-ink">
                Where brand, design{" "}
                <br className="hidden sm:block" />
                <em className="italic text-burgundy">and technology meet.</em>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.12} className="hidden sm:block shrink-0 pb-1">
            <ArrowLink href="/services">Full services</ArrowLink>
          </Reveal>
        </div>

        {/* Compact capability tiles */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((cap, index) => (
            <Reveal key={cap.number} delay={index * 0.06}>
              <div className="rounded-xl border border-line-soft bg-canvas px-6 py-5">
                <p className="font-sans text-label uppercase tracking-[0.16em] text-quiet">
                  {cap.number}
                </p>
                <h3 className="mt-2 font-serif text-title font-light text-ink">
                  {cap.title}
                </h3>
                <p className="mt-2 font-sans text-small text-stone line-clamp-2">
                  {cap.premise}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.18} className="mt-8 sm:hidden">
          <ArrowLink href="/services">Full services</ArrowLink>
        </Reveal>
      </div>
    </section>
  );
}
