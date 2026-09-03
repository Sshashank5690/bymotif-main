import { site } from "@/content/site";
import { seo, siteFaqs } from "@/content/seo";
import { pricingTiers } from "@/content/pricing";

/**
 * GEO: plain-language summary for AI systems (llms.txt convention).
 * Keep factual, short, and aligned with the public site.
 */
export async function GET() {
  const lines = [
    `# ${site.name}`,
    `> ${seo.shortDescription}`,
    "",
    site.description,
    "",
    `Tagline: ${seo.tagline}`,
    `Founder: ${site.founder}`,
    `Location: ${site.location}`,
    `Contact: ${site.email}`,
    `Website: ${site.url}`,
    `Instagram: ${site.social.instagram}`,
    "",
    "## Who we help",
    ...seo.audiences.map((item) => `- ${item}`),
    "",
    "## What we know",
    ...seo.topics.map((item) => `- ${item}`),
    "",
    "## Pricing (USD)",
    ...pricingTiers.map(
      (tier) =>
        `- ${tier.name}: $${tier.price} — ${tier.tagline} (${tier.timeline}, ${tier.support})`,
    ),
    "",
    "## Important pages",
    `- Home: ${site.url}/`,
    `- Work: ${site.url}/work`,
    `- Services: ${site.url}/services`,
    `- Pricing: ${site.url}/pricing`,
    `- Studio: ${site.url}/studio`,
    `- Contact: ${site.url}/contact`,
    "",
    "## FAQ",
    ...siteFaqs.flatMap((faq) => [
      `Q: ${faq.question}`,
      `A: ${faq.answer}`,
      "",
    ]),
    "## Optional",
    `- Sitemap: ${site.url}/sitemap.xml`,
  ];

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
