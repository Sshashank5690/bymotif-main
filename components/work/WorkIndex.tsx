import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/motion/Reveal";
import { projects } from "@/content/projects";

/**
 * Portfolio grid — each project shown as a browser-framed screenshot card.
 * Clean, Starline-inspired layout. Three columns on desktop, two on tablet,
 * single column on mobile.
 */
export function WorkIndex() {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <Reveal key={project.slug} delay={index * 0.06} as="div">
          <Link
            href={`/work/${project.slug}`}
            className="group block"
            aria-label={`${project.client} — view case study`}
          >
            {/* Screenshot card */}
            <div className="relative overflow-hidden rounded-2xl border border-line-soft bg-canvas shadow-lift transition-shadow duration-500 group-hover:shadow-float">
              {/* Browser chrome */}
              <div className="flex items-center gap-1.5 border-b border-line-soft px-4 py-2.5 bg-shell">
                <span className="h-2 w-2 rounded-full bg-rose/50" />
                <span className="h-2 w-2 rounded-full bg-champagne/50" />
                <span className="h-2 w-2 rounded-full bg-sage/50" />
                <span className="ml-3 flex-1 rounded bg-ivory/80 px-2 py-0.5 font-sans text-[0.6rem] text-stone truncate">
                  {project.liveUrl.replace(/^https?:\/\/www\./, "").replace(/\/$/, "")}
                </span>
              </div>

              {project.screenshotSrc ? (
                <Image
                  src={project.screenshotSrc}
                  alt={`${project.client} website`}
                  width={600}
                  height={375}
                  className="w-full object-cover object-top transition-transform duration-700 ease-editorial group-hover:scale-[1.03]"
                  style={{ aspectRatio: "8/5" }}
                />
              ) : (
                <Image
                  src={project.cover.src}
                  alt={project.cover.alt}
                  width={600}
                  height={375}
                  className="w-full object-cover object-top transition-transform duration-700 ease-editorial group-hover:scale-[1.03]"
                  style={{ aspectRatio: "8/5" }}
                />
              )}
            </div>

            {/* Project info */}
            <div className="mt-4">
              <div className="flex items-start justify-between gap-3">
                <h2 className="font-serif text-title font-light text-ink group-hover:text-burgundy transition-colors duration-300">
                  {project.client}
                </h2>
                <span className="font-sans text-label uppercase tracking-[0.14em] text-quiet mt-1 shrink-0">
                  {project.year}
                </span>
              </div>
              <p className="mt-1 font-sans text-small text-stone">
                {project.industry}
              </p>
              <p className="mt-2 font-sans text-small text-quiet line-clamp-2">
                {project.positioning}
              </p>
            </div>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
