import { Reveal } from "@/components/motion/Reveal";
import { capabilities } from "@/content/capabilities";

/**
 * The numbered capability index. Shared by the homepage summary and the
 * services page so the two can never describe the studio differently.
 *
 * The heading level is a prop because the two pages nest the list differently:
 * under a section heading on the homepage, directly under the page title on
 * services.
 */
export function CapabilityList({
  headingLevel: Heading = "h3",
}: {
  headingLevel?: "h2" | "h3";
}) {
  return (
    <ul>
      {capabilities.map((capability, index) => (
        <Reveal
          as="li"
          key={capability.number}
          delay={index * 0.04}
          className="border-t border-line-soft py-10 lg:py-14"
        >
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-1">
              <span className="font-sans text-label tracking-[0.18em] text-quiet">
                {capability.number}
              </span>
            </div>

            <div className="lg:col-span-4">
              <Heading className="font-serif text-display-sm font-light text-ink">
                {capability.title}
              </Heading>
            </div>

            <div className="lg:col-span-4">
              <p className="max-w-[42ch] text-balance-pretty font-sans text-body text-stone">
                {capability.premise}
              </p>
            </div>

            <div className="lg:col-span-3">
              <ul className="space-y-2">
                {capability.disciplines.map((discipline) => (
                  <li
                    key={discipline}
                    className="font-sans text-small text-charcoal"
                  >
                    {discipline}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      ))}
    </ul>
  );
}
