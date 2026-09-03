import type { Metadata } from "next";

import { ContactInvitation } from "@/components/home/ContactInvitation";
import { PageHeader } from "@/components/layout/PageHeader";
import { PricingExperience } from "@/components/pricing/PricingExperience";
import { Reveal } from "@/components/motion/Reveal";
import { RevealLines } from "@/components/motion/RevealLines";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { pricingNotes } from "@/content/pricing";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Clear investment tiers for bespoke websites — Essential, Signature and Atelier. Design, development and systems under one roof.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "Pricing — byMotif Studios",
    description:
      "Essential, Signature and Atelier — clear investment for a website that feels like your brand.",
    url: "/pricing",
  },
};

const reassurances = [
  {
    label: "Payment",
    value: pricingNotes.payment,
  },
  {
    label: "Currency",
    value: pricingNotes.currency,
  },
  {
    label: "Scope",
    value: pricingNotes.notIncluded,
  },
] as const;

export default function PricingPage() {
  return (
    <>
      <PageHeader
        label="Pricing"
        title={
          <>
            Clear investment.{" "}
            <em className="italic text-burgundy">No theatre.</em>
          </>
        }
        intro="Three engagements. One studio. Slide the scale to see what grows with the investment — then start a conversation when it feels right."
      />

      <section className="border-t border-line-soft px-gutter pb-section-sm pt-10">
        <PricingExperience />
      </section>

      <section className="border-t border-line-soft bg-canvas px-gutter py-section-sm">
        <div className="mx-auto max-w-editorial">
          <Reveal>
            <SectionLabel>Before you enquire</SectionLabel>
          </Reveal>

          <RevealLines
            as="h2"
            className="mt-6 max-w-[22ch] font-serif text-display-md font-light text-ink"
          >
            The quiet details{" "}
            <em className="italic text-burgundy">worth knowing.</em>
          </RevealLines>

          <div className="mt-10 grid gap-px sm:grid-cols-3">
            {reassurances.map((item, index) => (
              <Reveal
                key={item.label}
                delay={index * 0.06}
                className="border-t border-line-soft py-8 sm:border-t-0 sm:border-l sm:border-line-soft sm:px-8 sm:first:border-l-0 sm:first:pl-0"
              >
                <p className="font-sans text-label font-medium uppercase tracking-[0.18em] text-quiet">
                  {item.label}
                </p>
                <p className="mt-4 max-w-[34ch] font-sans text-small text-stone">
                  {item.value}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ContactInvitation />
    </>
  );
}
