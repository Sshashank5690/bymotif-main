import type { Metadata } from "next";

import { site } from "@/content/site";
import { pageSeo, seo } from "@/content/seo";

type PageKey = keyof typeof pageSeo;

export function buildPageMetadata(key: PageKey): Metadata {
  const page = pageSeo[key];
  const url = page.path === "/" ? site.url : `${site.url}${page.path}`;
  const title =
    key === "home"
      ? { absolute: page.title }
      : page.title;

  return {
    title,
    description: page.description,
    alternates: { canonical: page.path },
    openGraph: {
      title: key === "home" ? page.title : `${page.title} — ${site.name}`,
      description: page.description,
      url: page.path,
      siteName: site.name,
      locale: seo.locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: key === "home" ? page.title : `${page.title} — ${site.name}`,
      description: page.description,
    },
  };
}

export function absoluteUrl(path = "/") {
  if (path === "/") return site.url;
  return `${site.url}${path.startsWith("/") ? path : `/${path}`}`;
}
