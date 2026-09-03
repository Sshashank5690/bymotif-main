import Link from "next/link";

import { Reveal } from "@/components/motion/Reveal";
import { RevealImage } from "@/components/motion/RevealImage";
import { RevealLines } from "@/components/motion/RevealLines";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { ProjectMeta, ProjectServices } from "@/components/work/ProjectMeta";
import { displayUrl } from "@/lib/utils";
import type { Project } from "@/types";

/**
 * Four editorial treatments for presenting a project.
 *
 * A single reusable card would have made every client look the same, which is
 * the exact failure the studio sells against. Each project declares its own
 * `layout` and is composed accordingly.
 */

type CompositionProps = { project: Project; index: number };

function Index({ index, className }: { index: number; className?: string }) {
  return (
    <span
      className={className}
      aria-hidden
    >
      {String(index + 1).padStart(2, "0")}
    </span>
  );
}

function Positioning({ project }: { project: Project }) {
  return (
    <p className="max-w-[46ch] text-balance-pretty font-serif text-title font-light italic leading-snug text-stone">
      {project.positioning}
    </p>
  );
}

function Links({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
      <ArrowLink href={`/work/${project.slug}`}>View the story</ArrowLink>
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="link-reveal font-sans text-label uppercase tracking-[0.16em] text-quiet transition-colors duration-(--duration-quick) hover:text-ink"
      >
        {displayUrl(project.liveUrl)} ↗
      </a>
    </div>
  );
}

/** One photograph, given the room it deserves, with metadata on frosted glass. */
export function CinematicProject({ project, index }: CompositionProps) {
  return (
    <article className="relative">
      <Reveal className="mb-10 flex items-baseline gap-6 px-gutter">
        <Index
          index={index}
          className="font-sans text-label tracking-[0.18em] text-quiet"
        />
        <h3 className="font-serif text-display-md font-light text-ink">
          {project.client}
        </h3>
      </Reveal>

      <Link href={`/work/${project.slug}`} className="group block">
        <div className="relative">
          <RevealImage
            image={project.cover}
            sizes="100vw"
            quality={90}
            parallax={5}
            className="h-[62svh] w-full lg:h-[86svh]"
            imageClassName="transition-transform duration-[1200ms] ease-editorial group-hover:scale-[1.02]"
          />

          {/* Anchors the glass panel so light type stays legible over any frame. */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink/45 to-transparent"
          />

          <div className="absolute inset-x-0 bottom-0 px-gutter pb-8 lg:pb-12">
            <div className="glass-dark mx-auto flex max-w-editorial flex-col gap-7 rounded-glass p-7 lg:flex-row lg:items-end lg:justify-between lg:p-10">
              <div className="max-w-[40ch]">
                <p className="font-serif text-title font-light italic text-ivory">
                  {project.positioning}
                </p>
              </div>
              <ProjectMeta
                project={project}
                tone="light"
                className="lg:min-w-[26rem]"
              />
            </div>
          </div>
        </div>
      </Link>

      <div className="mx-auto mt-9 flex max-w-editorial flex-col gap-7 px-gutter lg:flex-row lg:items-center lg:justify-between">
        <ProjectServices services={project.services} />
        <Links project={project} />
      </div>
    </article>
  );
}

/** Type and photograph share the spread, as facing pages would. */
export function SplitProject({ project, index }: CompositionProps) {
  return (
    <article className="mx-auto max-w-editorial px-gutter">
      <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal className="flex items-baseline gap-6">
            <Index
              index={index}
              className="font-sans text-label tracking-[0.18em] text-quiet"
            />
            <h3 className="font-serif text-display-md font-light text-ink">
              {project.client}
            </h3>
          </Reveal>

          <Reveal delay={0.08} className="mt-8">
            <Positioning project={project} />
          </Reveal>

          <Reveal delay={0.12} className="mt-10">
            <ProjectMeta project={project} />
          </Reveal>

          <Reveal delay={0.16} className="mt-10">
            <ProjectServices services={project.services} />
          </Reveal>

          <Reveal delay={0.2} className="mt-10">
            <Links project={project} />
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Link
            href={`/work/${project.slug}`}
            aria-label={`${project.client} — view the story`}
            className="group block"
          >
            <RevealImage
              image={project.cover}
              sizes="(max-width: 1024px) 100vw, 58vw"
              quality={90}
              parallax={7}
              className="aspect-[4/3] w-full lg:aspect-[5/4]"
              imageClassName="transition-transform duration-[1200ms] ease-editorial group-hover:scale-[1.02]"
            />
          </Link>
        </div>
      </div>
    </article>
  );
}

/** Overlapping frames, arranged the way prints are laid out on a table. */
export function FramesProject({ project, index }: CompositionProps) {
  const [portrait, landscape] = project.supporting;

  return (
    <article className="mx-auto max-w-editorial px-gutter">
      <Reveal className="flex items-baseline gap-6">
        <Index
          index={index}
          className="font-sans text-label tracking-[0.18em] text-quiet"
        />
        <h3 className="font-serif text-display-md font-light text-ink">
          {project.client}
        </h3>
      </Reveal>

      <Link
        href={`/work/${project.slug}`}
        aria-label={`${project.client} — view the story`}
        className="group mt-12 block"
      >
        <div className="relative grid gap-5 lg:grid-cols-12 lg:gap-6">
          <RevealImage
            image={project.cover}
            sizes="(max-width: 1024px) 100vw, 66vw"
            quality={90}
            parallax={5}
            className="aspect-[3/2] w-full lg:col-span-8 lg:aspect-[16/10]"
            imageClassName="transition-transform duration-[1200ms] ease-editorial group-hover:scale-[1.02]"
          />

          <div className="grid grid-cols-2 gap-5 lg:col-span-4 lg:grid-cols-1 lg:gap-6">
            {portrait ? (
              <RevealImage
                image={portrait}
                sizes="(max-width: 1024px) 46vw, 30vw"
                parallax={9}
                className="aspect-[3/4] w-full lg:aspect-[4/5]"
              />
            ) : null}
            {landscape ? (
              <RevealImage
                image={landscape}
                sizes="(max-width: 1024px) 46vw, 30vw"
                parallax={11}
                className="aspect-[3/4] w-full lg:aspect-[16/10]"
              />
            ) : null}
          </div>
        </div>
      </Link>

      <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <Reveal>
            <Positioning project={project} />
          </Reveal>
          <Reveal delay={0.1} className="mt-8">
            <Links project={project} />
          </Reveal>
        </div>
        <div className="lg:col-span-6">
          <Reveal delay={0.06}>
            <ProjectMeta project={project} />
          </Reveal>
          <Reveal delay={0.12} className="mt-8">
            <ProjectServices services={project.services} />
          </Reveal>
        </div>
      </div>
    </article>
  );
}

/** Wide photograph pushed off-centre, with the heading breaking the margin. */
export function OffsetProject({ project, index }: CompositionProps) {
  return (
    <article className="relative">
      <div className="mx-auto max-w-wide px-gutter">
        <div className="lg:ml-[18%]">
          <Link
            href={`/work/${project.slug}`}
            aria-label={`${project.client} — view the story`}
            className="group block"
          >
            <RevealImage
              image={project.cover}
              sizes="(max-width: 1024px) 100vw, 78vw"
              quality={90}
              parallax={6}
              className="aspect-[4/3] w-full lg:aspect-[2/1]"
              imageClassName="transition-transform duration-[1200ms] ease-editorial group-hover:scale-[1.02]"
            />
          </Link>
        </div>

        <div className="relative z-10 mt-10 lg:-mt-24 lg:max-w-[52%]">
          <div className="vellum rounded-glass p-8 lg:p-12">
            <Reveal className="flex items-baseline gap-6">
              <Index
                index={index}
                className="font-sans text-label tracking-[0.18em] text-quiet"
              />
              <RevealLines
                as="h3"
                className="font-serif text-display-md font-light text-ink"
              >
                {project.client}
              </RevealLines>
            </Reveal>

            <Reveal delay={0.08} className="mt-7">
              <Positioning project={project} />
            </Reveal>

            <Reveal delay={0.12} className="mt-9">
              <ProjectMeta project={project} />
            </Reveal>

            <Reveal delay={0.16} className="mt-9">
              <Links project={project} />
            </Reveal>
          </div>
        </div>
      </div>
    </article>
  );
}

const compositions = {
  cinematic: CinematicProject,
  split: SplitProject,
  frames: FramesProject,
  offset: OffsetProject,
} as const;

export function ProjectComposition({ project, index }: CompositionProps) {
  const Composition = compositions[project.layout];
  return <Composition project={project} index={index} />;
}
