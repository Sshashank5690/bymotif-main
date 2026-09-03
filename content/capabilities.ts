import type { Capability, ProcessStep } from "@/types";

export const capabilities: Capability[] = [
  {
    number: "01",
    title: "Strategy",
    premise:
      "Before anything is drawn, we work out what the brand is actually claiming and who needs to believe it.",
    disciplines: [
      "Brand positioning",
      "Digital direction",
      "Audience understanding",
      "Content architecture",
      "Experience planning",
    ],
  },
  {
    number: "02",
    title: "Experience Design",
    premise:
      "Composition, pacing and typography carry more of the feeling than any single visual decision does.",
    disciplines: [
      "Art direction",
      "UI and UX design",
      "Typography systems",
      "Layout systems",
      "Interaction design",
      "Motion direction",
    ],
  },
  {
    number: "03",
    title: "Development",
    premise:
      "The design is only real once it is fast, responsive and stable on the device it is actually opened on.",
    disciplines: [
      "Next.js",
      "React",
      "TypeScript",
      "Custom frontend systems",
      "CMS integration",
      "APIs and backend",
      "Performance",
    ],
  },
  {
    number: "04",
    title: "Digital Infrastructure",
    premise:
      "A website is also an operation. Enquiries have to arrive somewhere, and you have to be able to change your own words.",
    disciplines: [
      "CMS architecture",
      "Analytics",
      "Enquiry flows",
      "CRM integrations",
      "Automation",
      "AI integrations",
    ],
  },
  {
    number: "05",
    title: "Growth Foundations",
    premise:
      "Discoverability is structural. We build the foundations properly and let the work earn attention on its own terms.",
    disciplines: [
      "Technical SEO",
      "Structured data",
      "Content architecture",
      "Search discoverability",
      "AI search readiness",
      "Performance optimisation",
    ],
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We learn the brand, the business, the audience and the ambition, including the parts that are difficult to articulate.",
  },
  {
    number: "02",
    title: "Direction",
    description:
      "We establish the creative system, the content hierarchy and the shape of the experience before any pixel is committed to.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "The visual language and interaction system are built together, so motion and composition are designed rather than added.",
  },
  {
    number: "04",
    title: "Build",
    description:
      "Development happens with modern tooling and a real content model, not a static mock waiting to be filled in.",
  },
  {
    number: "05",
    title: "Refine",
    description:
      "Performance, responsiveness, interaction and detail are tested on real devices until nothing feels approximate.",
  },
  {
    number: "06",
    title: "Launch",
    description:
      "We deploy, measure what matters, and keep improving. Launch is a milestone in the work, not the end of it.",
  },
];
