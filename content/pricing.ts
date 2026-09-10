/**
 * Public investment tiers — grounded in the byMotif proposal scope
 * (Cinematic Affairs / full studio engagement).
 *
 * Signature ($999) ≈ the complete proposal: custom design, full structure,
 * CMS, enquiry systems, SEO, hosting, 5-week build, 2 months support.
 * Essential is a focused site without publishing systems.
 * Atelier expands craft, content depth and post-launch care.
 */
export const pricingTiers = [
  {
    id: "essential",
    name: "Essential",
    price: 699,
    currency: "USD",
    tagline: "A considered digital home — design and pages, ready to launch.",
    summary:
      "Custom design and a polished core website for studios that need to look and feel right now, without CMS or long-form storytelling systems.",
    timeline: "3–4 weeks",
    support: "2 weeks post-launch",
    highlight: false,
    includes: [
      "Custom design built around your brand — no template",
      "Core pages: Home, About, Work / Portfolio, Contact",
      "Responsive composition recomposed for mobile",
      "Simple enquiry form (name, email, message + key fields)",
      "SEO foundation: metadata, URLs, sitemap, indexing-ready",
      "Performance-focused, image-aware delivery",
      "SSL / HTTPS and secure delivery",
      "Hosting included for the engagement · domain connection",
      "One design revision round per major phase",
      "Launch polish, testing and handover",
      "2 weeks post-launch support (bugs & small fixes)",
    ],
    excludes: [
      "CMS for self-publishing stories and portfolio",
      "Wedding Stories / Films / Journal systems",
      "Enquiry dashboard for managing leads",
      "Instagram / social feed integration",
      "Extended post-launch support window",
    ],
  },
  {
    id: "signature",
    name: "Signature",
    price: 999,
    currency: "USD",
    tagline: "The full byMotif engagement — our recommended investment.",
    summary:
      "The complete studio experience from the proposal: design, development, CMS, enquiry systems and two months of care — so visitors discover, feel the work, and enquire with clarity.",
    timeline: "5 weeks",
    support: "2 months post-launch",
    highlight: true,
    badge: "Recommended",
    includes: [
      "Everything in Essential",
      "Full site structure: Home, About, Portfolio, Stories, Films, Journal, Contact",
      "CMS independence — manage stories, portfolio, films, journal and images yourself",
      "Wedding story narrative pages (couple, place, celebration, stills + film)",
      "Dedicated Films section — cinematic, not buried in a gallery",
      "Structured wedding enquiry form (date, location, venue, needs, source)",
      "Enquiry dashboard — view and manage leads in one place",
      "Social integration alongside Instagram (discovery in, depth on site)",
      "Analytics ready from day one",
      "AI-ready, machine-readable content structure",
      "Two design revision rounds per major phase",
      "5-week build to launch",
      "2 months support: bugs, small adjustments, CMS guidance",
    ],
    excludes: [
      "Domain purchase (we connect it; you buy it)",
      "Photography or film content production",
      "Work beyond the agreed scope after support ends",
    ],
  },
  {
    id: "atelier",
    name: "Atelier",
    price: 1399,
    currency: "USD",
    tagline: "Deeper storytelling, more design exploration, longer partnership.",
    summary:
      "For established brands that want everything in Signature, plus more narrative depth at launch, an extra design pass, and a longer runway of support.",
    timeline: "6–7 weeks",
    support: "3 months post-launch",
    highlight: false,
    includes: [
      "Everything in Signature",
      "Expanded storytelling architecture for more story / film templates",
      "Launch content setup: up to 4 wedding stories + films structured in CMS",
      "Additional design exploration round before build lock",
      "Brand / direction workshop session (90 minutes)",
      "Advanced enquiry fields tailored to your booking flow",
      "Deeper SEO & content strategy pass for search + social loop",
      "Performance & media polish package (image / film delivery)",
      "Live CMS training session for you or your team",
      "3 months post-launch support",
      "One guidance call in the support window",
    ],
    excludes: [
      "Domain purchase",
      "Ongoing monthly retainer beyond the support window",
      "Unlimited new feature development",
    ],
  },
] as const;

export type PricingTierId = (typeof pricingTiers)[number]["id"];

export const pricingNotes = {
  payment: "50% to begin · 50% before launch",
  currency: "Prices in USD. Local currency equivalents available on request.",
  notIncluded:
    "Domain purchase, photography or film production, and work beyond the agreed scope are not included. After the support window, redesigns, major structural changes or new feature builds are quoted separately.",
} as const;
