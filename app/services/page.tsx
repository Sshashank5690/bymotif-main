import type { Metadata } from "next";

import { ContactInvitation } from "@/components/home/ContactInvitation";
import { PageHeader } from "@/components/layout/PageHeader";
import { Reveal } from "@/components/motion/Reveal";
import { RevealLines } from "@/components/motion/RevealLines";
import { CapabilityList } from "@/components/shared/CapabilityList";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Process } from "@/components/home/Process";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Strategy, experience design, development, digital infrastructure and growth foundations — the full capability set byMotif Studios brings to a bespoke website.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services — byMotif Studios",
    description:
      "Strategy, experience design, development, digital infrastructure and growth foundations.",
    url: "/services",
  },
};

const principles = [
  {
    title: "One studio, not three vendors",
    body: "Strategy, design and engineering happen in the same place. Nothing gets lost between a designer's file and a developer's build.",
  },
  {
    title: "A small number of projects at a time",
    body: "We take on few enough projects to stay genuinely involved in each. That is a deliberate constraint, and it is why availability is limited.",
  },
  {
    title: "You own everything",
    body: "The code, the content model, the analytics, the domain. All yours from day one.",
  },
  {
    title: "No promises we cannot keep",
    body: "We build search and performance foundations properly. We will not promise a ranking position or a traffic figure. Nobody can honestly guarantee those.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        label="Services"
        title={
          <>
            Everything a website needs,{" "}
            <em className="italic text-burgundy">under one roof.</em>
          </>
        }
        intro="From the first positioning question to the last performance check after launch: strategy, design, and engineering, all in-house."
      />

      <section className="border-t border-line-soft px-gutter py-section-sm">
        <div className="mx-auto max-w-editorial">
          <CapabilityList headingLevel="h2" />
        </div>
      </section>

      <section className="border-t border-line-soft bg-canvas px-gutter py-section-sm">
        <div className="mx-auto max-w-editorial">
          <Reveal>
            <SectionLabel>How we work</SectionLabel>
          </Reveal>

          <RevealLines
            as="h2"
            className="mt-6 max-w-[24ch] font-serif text-display-md font-light text-ink"
          >
            The parts worth saying{" "}
            <em className="italic text-burgundy">out loud.</em>
          </RevealLines>

          <div className="mt-10 grid gap-x-16 gap-y-px sm:grid-cols-2">
            {principles.map((principle, index) => (
              <Reveal
                key={principle.title}
                delay={index * 0.05}
                className="border-t border-line-soft py-8"
              >
                <h3 className="max-w-[24ch] font-serif text-title font-light text-ink">
                  {principle.title}
                </h3>
                <p className="mt-3 max-w-[44ch] font-sans text-body text-stone">
                  {principle.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Process />

      <ContactInvitation />
    </>
  );
}
