import type { InstagramPost } from "@/types";

/**
 * Curated fallback feed.
 *
 * These render whenever the Instagram Graph API is unavailable — no token
 * configured, an expired token, a rate limit, or an outage. Captions,
 * imagery and permalinks are editable here (and later in the CMS) so the
 * section always looks intentional rather than broken.
 *
 * `shape` drives the editorial grid rhythm rather than the source aspect.
 */
export const curatedInstagramPosts: InstagramPost[] = [
  {
    id: "curated-01",
    shape: "wide",
    permalink: "https://www.instagram.com/bymotifstudios/",
    caption:
      "Type studies for a photographer's index. Two sizes, one italic, a great deal of air.",
    image: {
      src: "/images/instagram/post-01.jpg",
      alt: "Typography studies laid out on warm ivory paper",
      width: 1600,
      height: 1000,
    },
  },
  {
    id: "curated-02",
    shape: "portrait",
    permalink: "https://www.instagram.com/bymotifstudios/",
    caption: "A full-bleed frame, and nothing placed on top of it.",
    image: {
      src: "/images/instagram/post-02.jpg",
      alt: "Full-bleed wedding photograph shown on a portrait screen",
      width: 1200,
      height: 1600,
    },
  },
  {
    id: "curated-03",
    shape: "square",
    permalink: "https://www.instagram.com/bymotifstudios/",
    caption: "Colour direction: champagne, sage, and a very small amount of burgundy.",
    image: {
      src: "/images/instagram/post-03.jpg",
      alt: "Pastel colour swatches arranged on textured paper",
      width: 1200,
      height: 1200,
    },
  },
  {
    id: "curated-04",
    shape: "square",
    permalink: "https://www.instagram.com/bymotifstudios/",
    caption: "Contact sheet compositions in progress.",
    image: {
      src: "/images/instagram/post-04.jpg",
      alt: "Contact sheet of wedding photographs on a light table",
      width: 1200,
      height: 1200,
    },
  },
  {
    id: "curated-05",
    shape: "portrait",
    permalink: "https://www.instagram.com/bymotifstudios/",
    caption: "Testing how slowly an image can enter the screen before it feels stuck.",
    image: {
      src: "/images/instagram/post-05.jpg",
      alt: "Image reveal animation shown mid-transition on a screen",
      width: 1200,
      height: 1600,
    },
  },
  {
    id: "curated-06",
    shape: "square",
    permalink: "https://www.instagram.com/bymotifstudios/",
    caption: "Frosted vellum over photography. Somewhere between stationery and interface.",
    image: {
      src: "/images/instagram/post-06.jpg",
      alt: "Translucent vellum panel layered over a wedding photograph",
      width: 1200,
      height: 1200,
    },
  },
];
