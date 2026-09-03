import { site } from "@/content/site";
import { capabilities } from "@/content/capabilities";
import type { Project } from "@/types";

/**
 * JSON-LD is rendered from the same content modules that drive the visible
 * page, so the structured description can never drift from what a reader sees.
 */
function Schema({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // Content is authored in this repository, not user supplied.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function OrganizationSchema() {
  return (
    <Schema
      data={{
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "@id": `${site.url}/#organization`,
        name: site.name,
        alternateName: site.shortName,
        url: site.url,
        email: site.email,
        description: site.description,
        founder: { "@type": "Person", name: site.founder },
        areaServed: [
          "Australia",
          "United Kingdom",
          "United States",
          "Italy",
          "Thailand",
          "India",
          "Europe",
        ],
        knowsAbout: [
          "Website design for wedding photographers",
          "Luxury wedding brand digital experiences",
          "Editorial portfolio design",
          "Next.js development",
          "Headless CMS architecture",
          "Technical SEO",
        ],
        sameAs: [site.social.instagram, site.social.linkedin],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Capabilities",
          itemListElement: capabilities.map((capability) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: capability.title,
              description: capability.premise,
            },
          })),
        },
      }}
    />
  );
}

export function CaseStudySchema({ project }: { project: Project }) {
  const url = `${site.url}/work/${project.slug}`;

  return (
    <>
      <Schema
        data={{
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          "@id": `${url}/#project`,
          name: `${project.client} — ${project.industry}`,
          headline: project.positioning,
          description: project.caseStudy.overview,
          url,
          dateCreated: project.year,
          image: `${site.url}${project.cover.src}`,
          creator: { "@id": `${site.url}/#organization` },
          about: {
            "@type": "Organization",
            name: project.client,
            url: project.liveUrl,
            location: project.location,
          },
          keywords: project.services.join(", "),
        }}
      />
      <Schema
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: site.url },
            {
              "@type": "ListItem",
              position: 2,
              name: "Work",
              item: `${site.url}/work`,
            },
            { "@type": "ListItem", position: 3, name: project.client, item: url },
          ],
        }}
      />
    </>
  );
}
