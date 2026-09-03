import { site } from "@/content/site";
import { capabilities } from "@/content/capabilities";
import { pricingTiers } from "@/content/pricing";
import { seo, siteFaqs } from "@/content/seo";
import type { Project } from "@/types";

/**
 * JSON-LD is rendered from the same content modules that drive the visible
 * page, so the structured description can never drift from what a reader sees.
 */
function Schema({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      // Content is authored in this repository, not user supplied.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function OrganizationSchema() {
  const orgId = `${site.url}/#organization`;
  const websiteId = `${site.url}/#website`;
  const personId = `${site.url}/#founder`;

  return (
    <Schema
      data={[
        {
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id": orgId,
          name: site.name,
          alternateName: [site.shortName, "byMotifStudios"],
          url: site.url,
          email: site.email,
          description: seo.description,
          slogan: seo.tagline,
          foundingDate: "2024",
          founder: { "@id": personId },
          employee: { "@id": personId },
          address: {
            "@type": "PostalAddress",
            addressCountry: "IN",
            addressRegion: "India",
          },
          areaServed: [
            { "@type": "Country", name: "India" },
            { "@type": "Country", name: "Australia" },
            { "@type": "Country", name: "United Kingdom" },
            { "@type": "Country", name: "United States" },
            { "@type": "Country", name: "Thailand" },
            { "@type": "Place", name: "Europe" },
            "Worldwide",
          ],
          knowsAbout: [...seo.topics],
          audience: seo.audiences.map((name) => ({
            "@type": "Audience",
            audienceType: name,
          })),
          sameAs: [site.social.instagram, site.social.linkedin],
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "sales",
            email: site.email,
            availableLanguage: ["English"],
            url: `${site.url}/contact`,
          },
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Website design & development",
            itemListElement: [
              ...capabilities.map((capability, index) => ({
                "@type": "Offer",
                position: index + 1,
                itemOffered: {
                  "@type": "Service",
                  name: capability.title,
                  description: capability.premise,
                  provider: { "@id": orgId },
                },
              })),
              ...pricingTiers.map((tier, index) => ({
                "@type": "Offer",
                position: capabilities.length + index + 1,
                name: `${tier.name} website package`,
                description: tier.summary,
                price: tier.price,
                priceCurrency: tier.currency,
                url: `${site.url}/pricing`,
                availability: "https://schema.org/InStock",
                itemOffered: {
                  "@type": "Service",
                  name: `${tier.name} — bespoke website`,
                  description: tier.tagline,
                  provider: { "@id": orgId },
                },
              })),
            ],
          },
        },
        {
          "@context": "https://schema.org",
          "@type": "Person",
          "@id": personId,
          name: site.founder,
          jobTitle: "Founder & designer-developer",
          worksFor: { "@id": orgId },
          url: `${site.url}/studio`,
          sameAs: [site.social.instagram, site.social.linkedin],
          knowsAbout: [...seo.topics],
        },
        {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "@id": websiteId,
          url: site.url,
          name: site.name,
          description: seo.shortDescription,
          publisher: { "@id": orgId },
          inLanguage: "en-GB",
          copyrightHolder: { "@id": orgId },
        },
      ]}
    />
  );
}

export function FaqSchema({
  faqs = siteFaqs,
}: {
  faqs?: readonly { question: string; answer: string }[];
}) {
  return (
    <Schema
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      }}
    />
  );
}

export function BreadcrumbSchema({
  items,
}: {
  items: { name: string; path: string }[];
}) {
  return (
    <Schema
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: item.path === "/" ? site.url : `${site.url}${item.path}`,
        })),
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
          dateCreated: String(project.year),
          image: `${site.url}${project.cover.src}`,
          creator: { "@id": `${site.url}/#organization` },
          about: {
            "@type": "Organization",
            name: project.client,
            url: project.liveUrl,
            location: project.location,
          },
          keywords: [
            ...project.services,
            "wedding photographer website",
            "bespoke website design",
            project.industry,
          ].join(", "),
          inLanguage: "en",
        }}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Work", path: "/work" },
          { name: project.client, path: `/work/${project.slug}` },
        ]}
      />
    </>
  );
}
