export const site = {
  name: "byMotif Studios",
  shortName: "byMotif",
  founder: "Shashank Singh",
  /** Production domain — override with NEXT_PUBLIC_SITE_URL when needed. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.bymotifstudios.in",
  email: "bymotifstudios@gmail.com",
  location: "India, working internationally",
  availability: "Currently taking on projects for 2026",
  description:
    "Independent design and development studio creating bespoke websites for wedding photographers, event studios and creative brands — so the right clients find you, trust you and enquire.",
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
