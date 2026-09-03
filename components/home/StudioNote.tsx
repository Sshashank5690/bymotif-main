import { Reveal } from "@/components/motion/Reveal";
import { RevealImage } from "@/components/motion/RevealImage";
import { RevealLines } from "@/components/motion/RevealLines";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { site } from "@/content/site";

export function StudioNote() {
  return (
    <section className="relative border-t border-line-soft px-gutter py-section-sm">
      <div className="mx-auto max-w-editorial">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 lg:items-center">
          <div className="lg:col-span-5">
            <RevealImage
              image={{
                src: "/images/editorial/studio-desk.jpg",
                alt: `${site.name} studio, creative workspace`,
                width: 1200,
                height: 1200,
              }}
              sizes="(max-width: 1024px) 100vw, 40vw"
              parallax={6}
              className="aspect-square w-full max-w-sm mx-auto lg:max-w-none rounded-2xl overflow-hidden"
            />
          </div>

          <div className="lg:col-span-7 lg:pl-8">
            <Reveal>
              <SectionLabel>The studio</SectionLabel>
            </Reveal>

            <RevealLines
              as="h2"
              className="mt-6 max-w-[20ch] font-serif text-display-md font-light text-ink"
            >
              Independent. <em className="italic text-burgundy">Hands-on.</em>
              <br />
              Working closely with a few.
            </RevealLines>

            <Reveal delay={0.1} className="mt-6 space-y-5">
              <p className="max-w-[52ch] font-sans text-body text-stone">
                byMotif is led by {site.founder}. We work with a small number of
                brands at a time, combining creative direction, design and
                engineering into one process, not three handovers.
              </p>
              <p className="max-w-[52ch] font-sans text-body text-stone">
                We care about the spacing, the pacing, the transitions. The
                details that people feel but rarely name.
              </p>
            </Reveal>

            <Reveal delay={0.18} className="mt-8">
              <ArrowLink href="/studio">About the studio</ArrowLink>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
