import type { Metadata } from "next";
import Image from "next/image";

import { ContactInvitation } from "@/components/home/ContactInvitation";
import { PageHeader } from "@/components/layout/PageHeader";
import { Reveal } from "@/components/motion/Reveal";
import { RevealImage } from "@/components/motion/RevealImage";
import { RevealLines } from "@/components/motion/RevealLines";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { BreadcrumbSchema } from "@/components/seo/StructuredData";
import { site } from "@/content/site";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata("studio");

const beliefs = [
  {
    title: "Restraint is the luxury",
    body: "Almost every website we admire got there by removing things. Whitespace, pacing and one confident typeface outperform a page of effects every time.",
  },
  {
    title: "The photograph comes first",
    body: "When someone has spent years learning to see, the interface should get out of the way. We never crop to fit a layout.",
  },
  {
    title: "Motion is composition",
    body: "How an image enters the screen is a design decision, not a finishing touch. It is planned alongside the layout, always optional.",
  },
  {
    title: "Fast is part of beautiful",
    body: "An experience that stutters on a phone is not refined, however it looks on a designer's monitor.",
  },
];

const audience = [
  "Wedding photographers",
  "Wedding filmmakers",
  "Wedding planners and event stylists",
  "Floral and decor studios",
  "Creative founders and visual artists",
  "Independent premium brands",
];

export default function StudioPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Studio", path: "/studio" },
        ]}
      />
      <PageHeader
        label="The studio"
        title={
          <>
            Independent. Hands-on.{" "}
            <em className="italic text-burgundy">Working closely with a few.</em>
          </>
        }
        intro={`byMotif is led by ${site.founder}, combining creative direction, design and engineering into one process rather than three handovers.`}
      />

      <section className="border-t border-line-soft px-gutter py-section-sm">
        <div className="mx-auto grid max-w-editorial gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <RevealImage
              image={{
                src: "/images/editorial/studio-desk.jpg",
                alt: `${site.name} creative studio workspace`,
                width: 1200,
                height: 1200,
              }}
              sizes="(max-width: 1024px) 100vw, 42vw"
              quality={90}
              parallax={6}
              className="aspect-square w-full rounded-2xl overflow-hidden"
            />
          </div>

          <div className="lg:col-span-7 lg:pl-4 flex items-center">
            <div>
              <Reveal>
                <SectionLabel>Why byMotif exists</SectionLabel>
              </Reveal>

              <RevealLines
                as="h2"
                className="mt-6 max-w-[22ch] font-serif text-display-md font-light text-ink"
              >
                Beautiful work,{" "}
                <em className="italic text-burgundy">presented as it deserves.</em>
              </RevealLines>

              <Reveal delay={0.1} className="mt-6 space-y-5">
                <p className="max-w-[50ch] font-sans text-body text-stone">
                  Most of the people we work with do not have a quality problem.
                  Their photography is extraordinary, their events are considered
                  down to the napkin fold, and their clients adore them.
                </p>
                <p className="max-w-[50ch] font-sans text-body text-stone">
                  What they often have is a presentation problem. The work is
                  world-class and the website is a template. byMotif exists to
                  close that gap.
                </p>
              </Reveal>

              <Reveal delay={0.18} className="mt-8">
                <ArrowLink href="/work">Explore the work</ArrowLink>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line-soft bg-canvas px-gutter py-section-sm">
        <div className="mx-auto max-w-editorial">
          <Reveal>
            <SectionLabel>What we believe</SectionLabel>
          </Reveal>

          <RevealLines
            as="h2"
            className="mt-6 max-w-[24ch] font-serif text-display-md font-light text-ink"
          >
            Four things we keep{" "}
            <em className="italic text-burgundy">coming back to.</em>
          </RevealLines>

          <div className="mt-10 grid gap-x-16 gap-y-px sm:grid-cols-2">
            {beliefs.map((belief, index) => (
              <Reveal
                key={belief.title}
                delay={index * 0.05}
                className="border-t border-line-soft py-8"
              >
                <h3 className="max-w-[24ch] font-serif text-title font-light text-ink">
                  {belief.title}
                </h3>
                <p className="mt-3 max-w-[44ch] font-sans text-body text-stone">
                  {belief.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line-soft px-gutter py-section-sm">
        <div className="mx-auto grid max-w-editorial gap-12 lg:grid-cols-12 lg:gap-16 lg:items-center">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="photo-grain relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-2xl border border-line-soft bg-shell lg:max-w-none">
                <Image
                  src="/images/editorial/founder.jpg"
                  alt={`${site.founder}, founder of ${site.name}`}
                  width={960}
                  height={960}
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  quality={95}
                  priority
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7 lg:pl-4">
            <Reveal>
              <SectionLabel>About me</SectionLabel>
            </Reveal>

            <RevealLines
              as="h2"
              className="mt-6 max-w-[16ch] font-serif text-display-md font-light text-ink"
            >
              {site.founder}
            </RevealLines>

            <Reveal delay={0.1} className="mt-6">
              <p className="max-w-[48ch] font-sans text-body text-stone">
                I&apos;m the person behind byMotif. I design and build bespoke
                websites for wedding photographers, event studios and creative
                brands who care how their work is perceived online. Strategy,
                design and development happen in one place, with a small number
                of projects at a time so nothing gets lost between the idea and
                the launch.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-t border-line-soft px-gutter py-section-sm">
        <div className="mx-auto grid max-w-editorial gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionLabel>Who we work with</SectionLabel>
            </Reveal>

            <RevealLines
              as="h2"
              className="mt-6 max-w-[18ch] font-serif text-display-md font-light text-ink"
            >
              Visually driven{" "}
              <em className="italic text-burgundy">businesses.</em>
            </RevealLines>

            <Reveal delay={0.1} className="mt-6">
              <p className="max-w-[40ch] font-sans text-body text-stone">
                We work from India with studios across Australia, the UK, the US,
                Europe and Asia. Time zones have never been the difficult part.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <ul className="border-t border-line-soft">
              {audience.map((entry, index) => (
                <Reveal
                  as="li"
                  key={entry}
                  delay={index * 0.04}
                  className="border-b border-line-soft py-5"
                >
                  <span className="font-serif text-title font-light text-charcoal">
                    {entry}
                  </span>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <ContactInvitation />
    </>
  );
}
