export const site = {
  name: "byMotif Studios",
  shortName: "byMotif",
  founder: "Shashank Singh",
  /** Update once the production domain is live — used for canonicals and OG. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.bymotif.studio",
  email: "bymotifstudios@gmail.com",
  location: "India, working internationally",
  availability: "Currently taking on projects for 2026",
  description:
    "byMotif Studios is an independent design and development studio creating bespoke digital experiences for wedding photographers, event studios and creative brands.",
  social: {
    instagram: "https://www.instagram.com/bymotifstudios/",
    instagramHandle: "@bymotifstudios",
    linkedin: "https://www.linkedin.com/company/bymotifstudios/",
  },
} as const;

export const navigation = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Studio", href: "/studio" },
] as const;

/** Slowly cycled beneath the hero heading. */
export const disciplines = [
  "Strategy",
  "Design",
  "Development",
  "Storytelling",
  "Digital experiences",
] as const;
