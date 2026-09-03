import type { MetadataRoute } from "next";

import { site } from "@/content/site";

/**
 * Allow search + AI answer engines. GEO depends on clear crawl access
 * for assistants that cite the open web.
 */
export default function robots(): MetadataRoute.Robots {
  const allowAll = { userAgent: "*", allow: "/" as const };

  return {
    rules: [
      allowAll,
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "anthropic-ai", allow: "/" },
      { userAgent: "Applebot-Extended", allow: "/" },
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
