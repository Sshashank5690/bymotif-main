import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CaseStudyChapter } from "@/components/case-study/CaseStudyChapter";
import { CaseStudyGallery } from "@/components/case-study/CaseStudyGallery";
import { CaseStudyHero } from "@/components/case-study/CaseStudyHero";
import { DesignSystemNotes } from "@/components/case-study/DesignSystemNotes";
import { NextProject } from "@/components/case-study/NextProject";
import { ContactInvitation } from "@/components/home/ContactInvitation";
import { Reveal } from "@/components/motion/Reveal";
import { CaseStudySchema } from "@/components/seo/StructuredData";
import { getAdjacentProject, getProject, projects } from "@/content/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata(
  props: PageProps<"/work/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const project = getProject(slug);

  if (!project) return {};

  const title = `${project.client} — ${project.industry}`;

  return {
    title,
    description: project.caseStudy.overview,
    keywords: [
      project.client,
      project.industry,
      ...project.services,
      "wedding photographer website",
      "bespoke website design",
      "byMotif Studios",
    ],
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      type: "article",
      title: `${title} — byMotif Studios`,
      description: project.caseStudy.overview,
      url: `/work/${project.slug}`,
      images: [{ url: project.cover.src, alt: project.cover.alt }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} — byMotif Studios`,
      description: project.caseStudy.overview,
      images: [project.cover.src],
    },
  };
}

export default async function CaseStudyPage(props: PageProps<"/work/[slug]">) {
  const { slug } = await props.params;
  const project = getProject(slug);

  if (!project) notFound();

  const { caseStudy } = project;
  const next = getAdjacentProject(slug);

  return (
    <>
      <CaseStudySchema project={project} />

      <CaseStudyHero project={project} />

      <CaseStudyChapter chapter={caseStudy.context} />
      <CaseStudyChapter chapter={caseStudy.challenge} />
      <CaseStudyChapter chapter={caseStudy.direction} />

      <DesignSystemNotes caseStudy={caseStudy} />

      <CaseStudyChapter chapter={caseStudy.experience} />

      <CaseStudyGallery gallery={caseStudy.gallery} />

      <CaseStudyChapter chapter={caseStudy.build} />

      <CaseStudyChapter chapter={caseStudy.outcome}>
        {/* Rendered only where a real, documented figure exists. */}
        {caseStudy.measured?.length ? (
          <dl className="mt-12 grid gap-8 border-t border-line-soft pt-10 sm:grid-cols-3">
            {caseStudy.measured.map((metric, index) => (
              <Reveal key={metric.label} delay={index * 0.06}>
                <dt className="font-sans text-label uppercase tracking-[0.18em] text-quiet">
                  {metric.label}
                </dt>
                <dd className="mt-3 font-serif text-display-sm font-light text-ink">
                  {metric.value}
                </dd>
              </Reveal>
            ))}
          </dl>
        ) : null}
      </CaseStudyChapter>

      {next ? <NextProject project={next} /> : null}

      <ContactInvitation />
    </>
  );
}
