/**
 * Content shapes for byMotif Studios.
 *
 * These mirror the intended Sanity schema one-to-one so the local content
 * modules can be swapped for GROQ queries without touching components.
 */

export type ImageAsset = {
  src: string;
  alt: string;
  /** Intrinsic ratio, used to reserve layout space before the image loads. */
  width: number;
  height: number;
};

export type ProjectService =
  | "Strategy"
  | "Brand Direction"
  | "Art Direction"
  | "Experience Design"
  | "UI & UX Design"
  | "Design System"
  | "Motion Direction"
  | "Frontend Development"
  | "Full Stack Development"
  | "CMS Architecture"
  | "Performance"
  | "Technical SEO"
  | "Analytics"
  | "Automation"
  | "AI Integration";

/** Drives which editorial composition a project uses on the homepage. */
export type ProjectLayout = "cinematic" | "split" | "frames" | "offset";

export type CaseStudyChapter = {
  label: string;
  heading: string;
  body: string[];
};

export type ColourSwatch = {
  name: string;
  hex: string;
};

export type CaseStudy = {
  /** Sets the tone before the reader commits to the full story. */
  overview: string;
  context: CaseStudyChapter;
  challenge: CaseStudyChapter;
  direction: CaseStudyChapter;
  typography: {
    display: string;
    text: string;
    note: string;
  };
  palette: ColourSwatch[];
  experience: CaseStudyChapter;
  build: CaseStudyChapter;
  outcome: CaseStudyChapter;
  /** Real, documented results only. Left empty when nothing is measured. */
  measured?: { label: string; value: string }[];
  gallery: ImageAsset[];
};

export type Project = {
  slug: string;
  client: string;
  /** Short form used in tight editorial contexts. */
  shortName: string;
  industry: string;
  location: string;
  year: string;
  /** One sentence of positioning. Never a tagline, never marketing copy. */
  positioning: string;
  services: ProjectService[];
  liveUrl: string;
  cover: ImageAsset;
  /** Website screenshot used in portfolio grids. */
  screenshotSrc?: string;
  /** Secondary imagery used by the layered homepage compositions. */
  supporting: ImageAsset[];
  layout: ProjectLayout;
  /** Featured projects surface on the homepage, in `featureOrder`. */
  featured: boolean;
  featureOrder?: number;
  /** Pastel accent used for glows and rules on this project's surfaces. */
  accent: string;
  caseStudy: CaseStudy;
};

export type Capability = {
  number: string;
  title: string;
  /** The belief behind the capability, not a feature list intro. */
  premise: string;
  disciplines: string[];
};

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export type InstagramPost = {
  id: string;
  image: ImageAsset;
  caption: string;
  permalink: string;
  /** Controls the editorial grid rhythm. */
  shape: "square" | "portrait" | "wide";
};

export type JournalNote = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
};
