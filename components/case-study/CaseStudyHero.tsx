import Link from "next/link";

import { RevealImage } from "@/components/motion/RevealImage";
import { Reveal } from "@/components/motion/Reveal";
import { RevealLines } from "@/components/motion/RevealLines";
import { ProjectServices } from "@/components/work/ProjectMeta";
import { displayUrl } from "@/lib/utils";
import type { Project } from "@/types";

export function CaseStudyHero({ project }: { project: Project }) {
  const facts = [
    { label: "Client", value: project.client },
    { label: "Industry", value: project.industry },
    { label: "Location", value: project.location },
    { label: "Year", value: project.year },
  ];

  return (
    <header className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute -right-[10%] -top-[20%] h-[36rem] w-[42rem] rounded-full blur-[140px] opacity-40"
          style={{ backgroundColor: project.accent }}
        />
      </div>

      <div className="relative mx-auto max-w-editorial px-gutter pb-16 pt-40 lg:pt-48">
        <Reveal distance={14}>
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-3 font-sans text-label uppercase tracking-[0.18em] text-quiet">
              <li>
                <Link href="/work" className="link-reveal hover:text-ink">
                  Work
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-stone">{project.shortName}</li>
            </ol>
          </nav>
        </Reveal>

        <RevealLines
          as="h1"
          immediate
          delay={0.1}
          className="mt-10 max-w-[18ch] font-serif text-display-lg font-light text-ink"
        >
          {project.client}
        </RevealLines>

        <Reveal delay={0.35} className="mt-9 max-w-[54ch]">
          <p className="text-balance-pretty font-serif text-title font-light italic text-stone">
            {project.positioning}
          </p>
        </Reveal>
      </div>

      <RevealImage
        image={project.cover}
        sizes="100vw"
        quality={90}
        priority
        revealOnScroll={false}
        parallax={4}
        className="h-[52svh] w-full lg:h-[78svh]"
      />

      <div className="mx-auto max-w-editorial px-gutter">
        <dl className="grid gap-x-10 gap-y-8 border-b border-line-soft py-12 sm:grid-cols-2 lg:grid-cols-4">
          {facts.map((fact, index) => (
            <Reveal key={fact.label} delay={index * 0.05}>
              <dt className="font-sans text-label font-medium uppercase tracking-[0.18em] text-quiet">
                {fact.label}
              </dt>
              <dd className="mt-3 font-sans text-body text-ink">{fact.value}</dd>
            </Reveal>
          ))}
        </dl>

        <div className="flex flex-col gap-8 py-12 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          <Reveal className="lg:max-w-[52%]">
            <p className="text-balance-pretty font-serif text-lead font-light leading-relaxed text-charcoal">
              {project.caseStudy.overview}
            </p>
          </Reveal>

          <Reveal delay={0.1} className="lg:max-w-[40%]">
            <p className="font-sans text-label uppercase tracking-[0.18em] text-quiet">
              What we did
            </p>
            <ProjectServices services={project.services} className="mt-5" />

            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex items-center gap-3 font-sans text-label-lg font-medium uppercase tracking-[0.14em] text-ink"
            >
              <span className="link-reveal">
                Visit {displayUrl(project.liveUrl)}
              </span>
              <span
                aria-hidden
                className="transition-transform duration-(--duration-quick) ease-editorial group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              >
                ↗
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </header>
  );
}
