"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { featuredProjects, projects } from "@/content/projects";

export function SelectedWork() {
  return (
    <section id="work" className="py-section border-t border-line-soft">
      <div className="mx-auto max-w-editorial px-gutter">
        {/* Header row */}
        <div className="mb-12 flex items-end justify-between gap-8">
          <div>
            <Reveal>
              <SectionLabel>Selected Work</SectionLabel>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-4 font-serif text-display-md font-light text-ink max-w-[22ch]">
                Brands we&rsquo;ve translated into{" "}
                <em className="italic text-burgundy">digital experiences.</em>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.15} className="hidden sm:block shrink-0 pb-1">
            <ArrowLink href="/work">All {projects.length} projects</ArrowLink>
          </Reveal>
        </div>

        {/* 2-column grid */}
        <div className="grid gap-6 sm:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.08}>
              <Link
                href={`/work/${project.slug}`}
                className="group block"
                aria-label={`${project.client} — view case study`}
              >
                {/* Screenshot card */}
                <div className="relative overflow-hidden rounded-2xl border border-line-soft bg-canvas shadow-lift transition-shadow duration-500 group-hover:shadow-float">
                  {/* Browser bar mockup */}
                  <div className="flex items-center gap-1.5 border-b border-line-soft px-4 py-2.5 bg-shell">
                    <span className="h-2 w-2 rounded-full bg-rose/60" />
                    <span className="h-2 w-2 rounded-full bg-champagne/60" />
                    <span className="h-2 w-2 rounded-full bg-sage/60" />
                    <span className="ml-3 flex-1 rounded bg-ivory/80 px-2 py-0.5 font-sans text-[0.6rem] text-stone truncate">
                      {project.liveUrl.replace(/^https?:\/\/www\./, "").replace(/\/$/, "")}
                    </span>
                  </div>
                  {project.screenshotSrc ? (
                    <Image
                      src={project.screenshotSrc}
                      alt={`${project.client} website`}
                      width={819}
                      height={500}
                      className="w-full object-cover object-top transition-transform duration-700 ease-editorial group-hover:scale-[1.02]"
                      style={{ aspectRatio: "4/2.5" }}
                    />
                  ) : (
                    <div
                      className="w-full bg-canvas"
                      style={{ aspectRatio: "4/2.5", background: project.accent }}
                    />
                  )}
                </div>

                {/* Meta */}
                <div className="mt-4 flex items-start justify-between gap-4">
                  <div>
                    <p className="font-serif text-title font-light text-ink group-hover:text-burgundy transition-colors duration-300">
                      {project.client}
                    </p>
                    <p className="mt-1 font-sans text-small text-stone">
                      {project.industry}
                    </p>
                  </div>
                  <div className="shrink-0 text-right">
                    <p className="font-sans text-label uppercase tracking-[0.14em] text-quiet">
                      {project.year}
                    </p>
                    <p className="mt-1 font-sans text-label uppercase tracking-[0.14em] text-quiet">
                      {project.location.split("·")[0].trim()}
                    </p>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-8 sm:hidden">
          <ArrowLink href="/work">All {projects.length} projects</ArrowLink>
        </Reveal>
      </div>
    </section>
  );
}
