import { Reveal } from "@/components/motion/Reveal";
import { RevealLines } from "@/components/motion/RevealLines";
import { ButtonLink } from "@/components/ui/Button";
import { site } from "@/content/site";

export function ContactInvitation() {
  return (
    <section className="relative overflow-hidden border-t border-line-soft bg-canvas px-gutter py-section-sm">
      <div className="mx-auto max-w-editorial">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="font-sans text-label uppercase tracking-[0.16em] text-stone">
                {site.availability}
              </p>
            </Reveal>

            <RevealLines
              as="h2"
              className="mt-5 font-serif text-display-md font-light text-ink"
            >
              Seen. Felt.{" "}
              <em className="italic text-burgundy">Booked.</em>
            </RevealLines>

            <Reveal delay={0.12} className="mt-5">
              <p className="max-w-[46ch] font-sans text-body text-stone">
                Tell us about your brand, your ideal clients, and what you want
                people to feel the moment they find you.
              </p>
            </Reveal>
          </div>

          <Reveal
            delay={0.18}
            className="lg:col-span-5 flex flex-col items-start justify-center gap-5"
          >
            <ButtonLink href="/contact">Start a project</ButtonLink>
            <a
              href={`mailto:${site.email}`}
              className="link-reveal inline-flex min-h-12 items-center font-sans text-small text-stone transition-colors hover:text-ink"
            >
              {site.email}
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
