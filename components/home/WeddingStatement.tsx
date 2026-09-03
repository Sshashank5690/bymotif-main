import Image from "next/image";

import { Reveal } from "@/components/motion/Reveal";
import { RevealLines } from "@/components/motion/RevealLines";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function WeddingStatement() {
  return (
    <section className="relative overflow-hidden border-t border-line-soft">
      <div className="grid lg:grid-cols-2">
        {/* Left: the laptop mockup image with the quote */}
        <div className="relative aspect-square lg:aspect-auto lg:min-h-[36rem] overflow-hidden">
          <Image
            src="/images/editorial/instagram-post.jpg"
            alt="Instagram gets them interested. Your website makes them believe."
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            quality={90}
            className="object-cover"
          />
        </div>

        {/* Right: content */}
        <div className="flex items-center px-gutter py-section-sm bg-canvas lg:px-16">
          <div className="max-w-[44ch]">
            <Reveal>
              <SectionLabel>For photographers &amp; event studios</SectionLabel>
            </Reveal>

            <RevealLines
              as="h2"
              delay={0.1}
              className="mt-6 font-serif text-display-md font-light leading-[1.2] text-ink"
            >
              Instagram gets them{" "}
              <em className="italic text-burgundy">interested.</em>
              <br />
              Your website makes them{" "}
              <em className="italic text-burgundy">believe.</em>
            </RevealLines>

            <Reveal delay={0.2} className="mt-6 space-y-4">
              <p className="font-sans text-body text-stone">
                A bespoke website turns discovery into trust, and trust into
                bookings. It&rsquo;s the place where someone stops comparing
                studios and starts imagining their own story inside your work.
              </p>
            </Reveal>

            <Reveal delay={0.28} className="mt-8">
              <ArrowLink href="/services">How we work</ArrowLink>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
