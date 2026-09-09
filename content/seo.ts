/**
 * SEO + GEO (generative-engine) content.
 *
 * Written for clarity and entity understanding — not keyword stuffing.
 * Used by metadata, JSON-LD, and llms.txt so every surface stays aligned.
 */

export const seo = {
  titleDefault:
    "byMotif Studios — Bespoke websites for wedding photographers & creative brands",
  titleTemplate: "%s — byMotif Studios",
  description:
    "Independent design and development studio creating bespoke websites for wedding photographers, event studios and creative brands. Custom design, CMS, enquiry systems and SEO — so the right clients find you, trust you and enquire.",
  shortDescription:
    "Bespoke digital experiences for wedding photographers, event studios and creative brands.",
  tagline: "Seen. Felt. Booked.",
  locale: "en_GB",
  /** Primary phrases we want associated with the studio — used sparingly. */
  keywords: [
    "wedding photographer website design",
    "bespoke website for photographers",
    "luxury wedding brand website",
    "event planner website design",
    "photography portfolio website",
    "creative studio website development",
    "custom Next.js website design",
    "wedding photography CMS website",
    "enquiry-focused photographer website",
    "editorial website design studio",
  ],
  topics: [
    "Website design for wedding photographers",
    "Digital experiences for luxury wedding brands",
    "Event studio and planner websites",
    "Editorial portfolio design",
    "Headless CMS for creative studios",
    "Structured wedding enquiry systems",
    "Technical SEO for creative brands",
    "Next.js design and development",
  ],
  audiences: [
    "Wedding photographers",
    "Wedding filmmakers",
    "Event planners and designers",
    "Floral designers",
    "Creative agencies",
    "Independent luxury brands",
  ],
} as const;

/** Natural-language FAQs — strong signal for Google + AI answer engines. */
export const siteFaqs = [
  {
    question: "What does byMotif Studios do?",
    answer:
      "byMotif Studios designs and builds bespoke websites for wedding photographers, event studios and creative brands. Strategy, design and development happen in one studio — from positioning and visual direction through CMS, enquiry systems and launch.",
  },
  {
    question: "Who is byMotif Studios for?",
    answer:
      "Studios and brands that already have strong work — especially wedding photographers, filmmakers, event designers and creative practices — and need a website that converts discovery into considered enquiries, not just a gallery template.",
  },
  {
    question: "How much does a website with byMotif cost?",
    answer:
      "Public investments start at Essential around $699 USD, Signature at $799 USD until November (was $999 — the recommended full engagement), and Atelier around $1,399 USD for deeper storytelling and longer support. Exact scope is confirmed before work begins.",
  },
  {
    question: "What is included in the Signature website package?",
    answer:
      "Signature includes custom design, a full site structure (often Home, About, Portfolio, Stories, Films, Journal and Contact), CMS so you can publish yourself, structured enquiry forms and dashboard, SEO foundations, hosting connection and two months of post-launch support.",
  },
  {
    question: "How long does a byMotif website project take?",
    answer:
      "Essential typically takes three to four weeks. Signature is built around a five-week timeline. Atelier usually runs six to seven weeks, depending on content and feedback.",
  },
  {
    question: "Where is byMotif Studios based?",
    answer:
      "byMotif Studios is based in India and works with clients internationally across markets including Australia, the UK, the US, Europe, Thailand and beyond.",
  },
] as const;

export const pageSeo = {
  home: {
    title: seo.titleDefault,
    description: seo.description,
    path: "/",
  },
  work: {
    title: "Work",
    description:
      "Selected websites by byMotif Studios — wedding photographers, event studios and creative brands. Case studies showing design, storytelling and enquiry-focused builds.",
    path: "/work",
  },
  services: {
    title: "Services",
    description:
      "Strategy, experience design, development, CMS, enquiry systems and growth foundations — everything a wedding photographer or creative brand website needs, under one roof.",
    path: "/services",
  },
  pricing: {
    title: "Pricing",
    description:
      "Clear website investment for creatives: Essential from $699, Signature $799 until November (was $999), Atelier from $1,399. Custom design, development and support with no theatre.",
    path: "/pricing",
  },
  studio: {
    title: "Studio",
    description:
      "Meet byMotif Studios — an independent design and development practice led by Shashank Singh, building digital homes for wedding photographers and creative brands worldwide.",
    path: "/studio",
  },
  contact: {
    title: "Start a conversation",
    description:
      "Tell byMotif Studios about your brand, your ideal clients and what you want people to feel when they find you. Every enquiry is read personally.",
    path: "/contact",
  },
} as const;
