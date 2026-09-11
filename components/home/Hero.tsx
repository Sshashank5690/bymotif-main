import { RevealLines } from "@/components/motion/RevealLines";
import { Reveal } from "@/components/motion/Reveal";
import { HeroAtmosphere } from "@/components/home/HeroAtmosphere";
import { HeroScreenshots } from "@/components/home/HeroScreenshots";
import { ArrowLink } from "@/components/ui/ArrowLink";

export function Hero() {
  return (
    <section
      data-site-hero
      className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden"
    >
      <HeroAtmosphere />

      <div className="relative mx-auto max-w-editorial px-gutter">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-14">

          {/* Left: headline + intro */}
          <div className="lg:col-span-6">
            <Reveal>
              <p className="font-sans text-label font-medium uppercase tracking-[0.18em] text-stone mb-6">
                Design &amp; Development Studio
              </p>
            </Reveal>

            <RevealLines
              as="h1"
              immediate
              delay={0.1}
              className="font-serif text-display-xl font-light text-ink leading-[1.12]"
            >
              Seen. Felt.{" "}
              <em className="italic text-burgundy">Booked.</em>
            </RevealLines>

            <Reveal delay={0.3} className="mt-6 max-w-[40ch]">
              <p className="font-sans text-lead text-stone leading-[1.7]">
                We build bespoke websites for wedding photographers, event
                studios, and creative brands, so the right clients find you,
                trust you, and reach out.
              </p>
            </Reveal>

            <Reveal delay={0.44} className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ArrowLink href="/work" className="font-sans text-small font-medium uppercase tracking-[0.14em]">
                View our work
              </ArrowLink>
              <span aria-hidden className="hidden sm:block h-3 w-px bg-line" />
              <ArrowLink href="/contact" className="font-sans text-small font-medium uppercase tracking-[0.14em] text-stone">
                Start a conversation
              </ArrowLink>
            </Reveal>

            {/* Seen · Felt · Booked stat from process doc */}
            <Reveal delay={0.56} className="mt-10 pt-8 border-t border-line-soft">
              <p className="font-sans text-small text-quiet">
                Jackson James Photography saw a 3× increase in enquiries since launch.
                Couples now finding the studio through Google, not just Instagram.
              </p>
            </Reveal>
          </div>

          {/* Right: layered client site screenshots */}
          <div className="hidden lg:col-span-6 lg:block">
            <HeroScreenshots />
          </div>

        </div>

        {/* Client type strip */}
        <Reveal delay={0.6} className="mt-14 pt-8 border-t border-line-soft">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            <p className="font-sans text-label uppercase tracking-[0.16em] text-quiet shrink-0">
              Built for
            </p>
            {[
              "Wedding Photographers",
              "Event Studios",
              "Floral Designers",
              "Creative Agencies",
              "Independent Brands",
            ].map((item) => (
              <span key={item} className="font-sans text-small text-stone">
                {item}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
