import type { Metadata } from "next";

import { EnquiryForm } from "@/components/contact/EnquiryForm";
import { Reveal } from "@/components/motion/Reveal";
import { RevealLines } from "@/components/motion/RevealLines";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Start a conversation",
  description:
    "Tell byMotif Studios about your brand, the work you make and what you want people to feel when they find it. We read every enquiry ourselves.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Start a conversation — byMotif Studios",
    description:
      "Tell us about your brand, the work you make and what you want people to feel when they find it.",
    url: "/contact",
  },
};

const reassurances = [
  {
    label: "Who replies",
    value: `${site.founder} reads and answers every enquiry personally.`,
  },
  {
    label: "How long",
    value: "Usually within two working days, occasionally three.",
  },
  {
    label: "What happens next",
    value:
      "If it feels like a fit, we arrange a call to talk properly before anything is proposed.",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden px-gutter pb-section pt-40 lg:pt-48">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -left-[10%] -top-[20%] h-[34rem] w-[40rem] rounded-full bg-blush/25 blur-[140px]" />
          <div className="absolute bottom-[10%] right-[-8%] h-[30rem] w-[34rem] rounded-full bg-powder/25 blur-[140px]" />
        </div>

        <div className="relative mx-auto max-w-editorial">
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal distance={16}>
                <SectionLabel>Start a conversation</SectionLabel>
              </Reveal>

              <RevealLines
                as="h1"
                immediate
                delay={0.1}
                className="mt-9 max-w-[14ch] font-serif text-display-lg font-light text-ink"
              >
                Tell us what you&rsquo;re{" "}
                <em className="italic text-burgundy">dreaming about.</em>
              </RevealLines>

              <Reveal delay={0.35} className="mt-10">
                <p className="max-w-[42ch] text-balance-pretty font-sans text-lead text-stone">
                  There is no wrong way to start. A few sentences about your work
                  and what you are imagining is plenty.
                </p>
              </Reveal>

              <Reveal delay={0.45} className="mt-14">
                <dl className="space-y-px">
                  {reassurances.map((item) => (
                    <div
                      key={item.label}
                      className="border-t border-line-soft py-5"
                    >
                      <dt className="font-sans text-label font-medium uppercase tracking-[0.18em] text-quiet">
                        {item.label}
                      </dt>
                      <dd className="mt-2.5 max-w-[38ch] font-sans text-small text-stone">
                        {item.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </Reveal>

              <Reveal delay={0.55} className="mt-12">
                <p className="font-sans text-small text-quiet">
                  Prefer email?{" "}
                  <a
                    href={`mailto:${site.email}`}
                    className="link-reveal text-ink"
                  >
                    {site.email}
                  </a>
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <div className="glass relative z-10 rounded-glass p-8 sm:p-12 lg:p-14">
                <EnquiryForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
