import { site } from "@/content/site";
import { seo, siteFaqs } from "@/content/seo";
import { pricingTiers } from "@/content/pricing";

/**
 * GEO: Markdown briefing for AI systems (llms.txt).
 * Must include an H1 and read as Markdown, not bare plain text.
 */
export async function GET() {
  const body = `# ${site.name}

> ${seo.shortDescription}

${site.description}

## Overview

- **Tagline:** ${seo.tagline}
- **Founder:** ${site.founder}
- **Location:** ${site.location}
- **Contact:** ${site.email}
- **Website:** ${site.url}
- **Instagram:** ${site.social.instagram}

## Who we help

${seo.audiences.map((item) => `- ${item}`).join("\n")}

## What we know

${seo.topics.map((item) => `- ${item}`).join("\n")}

## Pricing (USD)

${pricingTiers
  .map(
    (tier) =>
      `- **${tier.name}:** $${tier.price} — ${tier.tagline} (${tier.timeline}, ${tier.support})`,
  )
  .join("\n")}

## Important pages

- [Home](${site.url}/)
- [Work](${site.url}/work)
- [Services](${site.url}/services)
- [Pricing](${site.url}/pricing)
- [Studio](${site.url}/studio)
- [Contact](${site.url}/contact)

## FAQ

${siteFaqs
  .map((faq) => `### ${faq.question}\n\n${faq.answer}`)
  .join("\n\n")}

## Optional

- [Sitemap](${site.url}/sitemap.xml)
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
