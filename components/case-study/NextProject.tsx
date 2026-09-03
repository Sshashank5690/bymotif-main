import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/motion/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import type { Project } from "@/types";

/** Offers the next story rather than ending the reader on a dead page. */
export function NextProject({ project }: { project: Project }) {
  return (
    <section className="border-t border-line-soft">
      <Link href={`/work/${project.slug}`} className="group relative block">
        <div className="relative h-[46svh] overflow-hidden lg:h-[62svh]">
          <Image
            src={project.cover.src}
            alt=""
            fill
            sizes="100vw"
            className="scale-[1.04] object-cover transition-transform duration-[1600ms] ease-editorial group-hover:scale-100"
          />
          <div aria-hidden className="absolute inset-0 bg-ink/50" />

          <div className="absolute inset-0 flex items-center px-gutter">
            <div className="mx-auto w-full max-w-editorial">
              <Reveal distance={14}>
                <SectionLabel className="text-ivory/60">
                  Next project
                </SectionLabel>
              </Reveal>

              <Reveal delay={0.08}>
                <h2 className="mt-7 max-w-[16ch] font-serif text-display-md font-light text-ivory">
                  {project.client}
                </h2>
              </Reveal>

              <Reveal delay={0.14}>
                <p className="mt-6 max-w-[46ch] font-sans text-body text-ivory/75">
                  {project.industry}, {project.location}
                </p>
              </Reveal>

              <Reveal delay={0.2}>
                <span className="mt-9 inline-flex items-center gap-3 font-sans text-label-lg font-medium uppercase tracking-[0.14em] text-ivory">
                  <span className="link-reveal">Step inside the project</span>
                  <span
                    aria-hidden
                    className="transition-transform duration-(--duration-quick) ease-editorial group-hover:translate-x-1"
                  >
                    →
                  </span>
                </span>
              </Reveal>
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
}
