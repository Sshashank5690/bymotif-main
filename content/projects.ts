import type { Project } from "@/types";

/**
 * Selected work.
 *
 * Case study narratives are written from the studio's point of view and
 * deliberately contain no performance figures. `caseStudy.measured` stays
 * undefined until a real, documented number exists for that project.
 */
export const projects: Project[] = [
  {
    slug: "jackson-james-photography",
    client: "Jackson James Photography",
    shortName: "Jackson James",
    industry: "Wedding Photography & Film",
    location: "India · photographing worldwide",
    year: "2025",
    positioning:
      "A photographer whose work argues that love outlives every category we invent for it, given a website with the same conviction.",
    services: [
      "Strategy",
      "Art Direction",
      "Experience Design",
      "Motion Direction",
      "Frontend Development",
      "CMS Architecture",
      "Technical SEO",
    ],
    liveUrl: "https://www.jacksonjames.in/",
    layout: "cinematic",
    featured: true,
    featureOrder: 1,
    accent: "var(--color-rose)",
    screenshotSrc: "/images/work/jackson-james-photography/screenshot.png",
    cover: {
      src: "/images/work/jackson-james-photography/cover.jpg",
      alt: "Jackson James Photography website shown on a wide screen, a full-bleed wedding portrait behind an editorial serif headline",
      width: 2400,
      height: 1600,
    },
    supporting: [
      {
        src: "/images/work/jackson-james-photography/detail-01.jpg",
        alt: "Portrait-orientation gallery view from the Jackson James website",
        width: 1200,
        height: 1600,
      },
      {
        src: "/images/work/jackson-james-photography/detail-02.jpg",
        alt: "Film stills section from the Jackson James website",
        width: 1600,
        height: 1000,
      },
    ],
    caseStudy: {
      overview:
        "Jackson James photographs weddings the way a documentarian would, searching for the unguarded second rather than the arranged one. The studio needed a home that carried that same refusal to perform.",
      context: {
        label: "Context",
        heading: "A body of work with a point of view",
        body: [
          "Jackson James is not a neutral observer. The studio photographs weddings with an explicit belief: that love moves through borders, race, gender and every other construct we place around it, and that the camera's job is to look past those constructs entirely.",
          "That conviction was present in every frame. It was almost entirely absent from the way the work was being presented online, a gallery, arranged chronologically, that asked visitors to admire the photographs without ever telling them what the photographer believed.",
        ],
      },
      challenge: {
        label: "The challenge",
        heading: "Photographs that were being scrolled, not read",
        body: [
          "Couples were arriving from Instagram already convinced of the craft. What they could not find was the reason to choose this photographer over the several others they had saved that week.",
          "The work also spanned stills and films, two very different ways of watching. Presented in one undifferentiated stream, each diluted the other.",
          "And the enquiry sat at the bottom of a long page, arriving after the visitor's attention had already been spent.",
        ],
      },
      direction: {
        label: "Creative direction",
        heading: "Let the frame hold the room",
        body: [
          "We built the site around single, uninterrupted photographs. One image at a time, given the full viewport, with type placed to the side of the composition rather than across it, no photograph is ever cropped to accommodate a headline.",
          "The palette was drawn from the work itself: warm neutral paper, deep cocoa text, and a dusty rose that appears only in small moments. Nothing competes with the colour inside the frames.",
          "Language carries the studio's position early. The first thing a visitor reads is what the photographer believes, not what the photographer offers.",
        ],
      },
      typography: {
        display: "Cormorant Garamond",
        text: "Manrope",
        note: "A high-contrast garamond set large and loose for the editorial voice, with a low-contrast grotesque holding captions, metadata and interface at a size that stays comfortable on a phone held at arm's length.",
      },
      palette: [
        { name: "Warm Ivory", hex: "#F7F2EA" },
        { name: "Deep Cocoa", hex: "#2C2723" },
        { name: "Dusty Rose", hex: "#D7B5B1" },
        { name: "Muted Burgundy", hex: "#76525A" },
      ],
      experience: {
        label: "Experience design",
        heading: "Two ways of watching, kept separate",
        body: [
          "Stills and films were split into distinct journeys. Photography is browsed, paced, quiet, scroll-driven. Film is watched, full-bleed, sound-aware, with the interface receding as playback begins.",
          "Images reveal through a soft mask as they enter the viewport and drift marginally slower than the scroll, so the page reads as depth rather than as a list.",
          "The enquiry appears at the end of a story rather than the end of a page, arriving when a visitor has already decided they want to talk.",
        ],
      },
      build: {
        label: "Development",
        heading: "Heavy imagery, light delivery",
        body: [
          "Built in Next.js with the App Router, rendering the gallery structure on the server and reserving client JavaScript for the motion and media layers.",
          "Every photograph is served through responsive AVIF and WebP with correctly sized sources per breakpoint, so a phone never downloads a desktop-scale image.",
          "Galleries, films and collections are modelled in the CMS, so new work is published by the studio without a developer.",
        ],
      },
      outcome: {
        label: "Outcome",
        heading: "A position, stated before the portfolio",
        body: [
          "The site now opens with what the studio stands for and lets the photographs argue the case. Couples arrive at the enquiry form having read a point of view, not just scrolled a grid.",
        ],
      },
      gallery: [
        {
          src: "/images/work/jackson-james-photography/gallery-01.jpg",
          alt: "Full-bleed wedding portrait with editorial serif type set beside the composition",
          width: 2000,
          height: 1250,
        },
        {
          src: "/images/work/jackson-james-photography/gallery-02.jpg",
          alt: "Two-column spread pairing a portrait photograph with a quiet caption",
          width: 1400,
          height: 1750,
        },
        {
          src: "/images/work/jackson-james-photography/gallery-03.jpg",
          alt: "Film section of the site with a cinematic still and minimal playback interface",
          width: 2000,
          height: 1250,
        },
      ],
    },
  },
  {
    slug: "estera-events",
    client: "Estera Events",
    shortName: "Estera Events",
    industry: "Wedding Planning & Event Design",
    location: "United States · planning worldwide",
    year: "2025",
    positioning:
      "An award-winning planning duo whose events are never repeated, presented through a site that treats each celebration as its own world.",
    services: [
      "Strategy",
      "Brand Direction",
      "Experience Design",
      "UI & UX Design",
      "Frontend Development",
      "CMS Architecture",
      "Analytics",
    ],
    liveUrl: "https://www.esteraevents.com/",
    layout: "split",
    featured: true,
    featureOrder: 2,
    accent: "var(--color-champagne)",
    screenshotSrc: "/images/work/estera-events/screenshot.png",
    cover: {
      src: "/images/work/estera-events/cover.jpg",
      alt: "Estera Events website showing a tablescape photograph beside large editorial typography",
      width: 2400,
      height: 1600,
    },
    supporting: [
      {
        src: "/images/work/estera-events/detail-01.jpg",
        alt: "Portfolio index from the Estera Events website",
        width: 1200,
        height: 1600,
      },
      {
        src: "/images/work/estera-events/detail-02.jpg",
        alt: "Press and recognition section from the Estera Events website",
        width: 1600,
        height: 1000,
      },
    ],
    caseStudy: {
      overview:
        "Estera Events has spent over a decade building celebrations that are never duplicated. The website had to hold that promise without ever making two events look alike.",
      context: {
        label: "Context",
        heading: "A decade of events, none of them repeated",
        body: [
          "Bianca and Erica build weddings from the ground up, assembling a new team of creative partners for every couple and refusing to reproduce something that has already been done.",
          "Their work has been recognised widely across editorial press. That recognition is meaningful, but it is not the reason couples book them.",
        ],
      },
      challenge: {
        label: "The challenge",
        heading: "A portfolio that flattened what made it distinct",
        body: [
          "A conventional portfolio grid, equal tiles, equal weight, quietly contradicts the studio's central promise. Presented identically, an intimate seaside dinner and a full country club takeover start to look like variations on one house style.",
          "Press recognition was also doing too much of the persuading. Logos establish credibility, but they do not communicate taste.",
        ],
      },
      direction: {
        label: "Creative direction",
        heading: "Give each event its own air",
        body: [
          "Rather than a single template, each event is presented through a composition suited to its own scale and mood, a seaside gathering breathes differently from a ballroom, and the layout reflects that.",
          "Champagne and warm neutral tones sit underneath, restrained enough that the florals, linens and light in the photography define each event's colour.",
          "Recognition was moved to a quiet, typographic line rather than a wall of logos. It reads as fact rather than as persuasion.",
        ],
      },
      typography: {
        display: "Cormorant Garamond",
        text: "Manrope",
        note: "Display type is set at generous sizes with wide leading so headings feel placed rather than fitted. Small uppercase labels with open tracking carry event metadata, venue, location, year, in the register of a printed programme.",
      },
      palette: [
        { name: "Soft Paper", hex: "#FBF8F3" },
        { name: "Champagne", hex: "#D7C6A5" },
        { name: "Deep Cocoa", hex: "#2C2723" },
        { name: "Olive Mist", hex: "#A8AA91" },
      ],
      experience: {
        label: "Experience design",
        heading: "Planned like an event, not a page",
        body: [
          "The journey is paced deliberately: an establishing view, then the philosophy behind the work, then the events themselves, and only then the invitation to begin a conversation.",
          "Each event opens as its own chapter with a full-width establishing image, so a visitor commits to one celebration at a time rather than skimming twelve.",
          "The enquiry asks about the celebration being imagined rather than requesting a quote, matching the tone of a first conversation with a planner.",
        ],
      },
      build: {
        label: "Development",
        heading: "Composable, so nothing repeats",
        body: [
          "Every event page is assembled from a small set of composable section types, letting the studio arrange full-bleed spreads, paired portraits and quiet detail sequences differently for each celebration.",
          "The whole system is editable in the CMS, so a new event can be published in a distinct layout without a developer.",
          "Analytics were configured around the enquiry journey so the studio can see which events lead to conversations.",
        ],
      },
      outcome: {
        label: "Outcome",
        heading: "A portfolio that argues its own promise",
        body: [
          "The site demonstrates the studio's central claim structurally: no two events are presented the same way, because no two events were the same.",
        ],
      },
      gallery: [
        {
          src: "/images/work/estera-events/gallery-01.jpg",
          alt: "Full-width establishing photograph opening an event chapter",
          width: 2000,
          height: 1250,
        },
        {
          src: "/images/work/estera-events/gallery-02.jpg",
          alt: "Paired detail photographs of florals and table settings",
          width: 1400,
          height: 1750,
        },
        {
          src: "/images/work/estera-events/gallery-03.jpg",
          alt: "Event index showing varied composition sizes",
          width: 2000,
          height: 1250,
        },
      ],
    },
  },
  {
    slug: "moments-photography",
    client: "Moments Photography & Film",
    shortName: "Moments",
    industry: "Wedding Photography & Super 8 Film",
    location: "Sydney, Australia",
    year: "2025",
    positioning:
      "A Sydney duo shooting real film alongside digital, given a site with the warmth and grain of the medium they love.",
    services: [
      "Strategy",
      "Art Direction",
      "Experience Design",
      "Motion Direction",
      "Frontend Development",
      "CMS Architecture",
      "Technical SEO",
    ],
    liveUrl: "https://www.momentsphotography.com.au/",
    layout: "frames",
    featured: true,
    featureOrder: 3,
    accent: "var(--color-peach)",
    screenshotSrc: "/images/work/moments-photography/screenshot.png",
    cover: {
      src: "/images/work/moments-photography/cover.jpg",
      alt: "Moments Photography website with a colourful candid wedding photograph and warm editorial typography",
      width: 2400,
      height: 1600,
    },
    supporting: [
      {
        src: "/images/work/moments-photography/detail-01.jpg",
        alt: "Super 8 film section of the Moments Photography website",
        width: 1200,
        height: 1600,
      },
      {
        src: "/images/work/moments-photography/detail-02.jpg",
        alt: "Contact sheet style gallery from the Moments Photography website",
        width: 1600,
        height: 1000,
      },
    ],
    caseStudy: {
      overview:
        "Shyani and Simon shoot on authentic Super 8 alongside digital, and edit true to life. The site needed to feel like their film does, warm, textured, unmistakably analogue, without imitating a filter.",
      context: {
        label: "Context",
        heading: "Two people, two mediums, one sensibility",
        body: [
          "Moments photographs weddings across Sydney, the Southern Highlands, the South Coast, the Blue Mountains and beyond. The work is bold with colour, generous with laughter, and edited true to life rather than pushed toward a trend.",
          "The studio also shoots genuine Super 8 film on real stock, a deliberate, expensive, slower choice that most competitors do not make.",
        ],
      },
      challenge: {
        label: "The challenge",
        heading: "The most distinctive thing was the least visible",
        body: [
          "Super 8 was the studio's clearest point of difference and the hardest thing to convey in a static layout. Described in a paragraph, it reads as a service. Seen moving, it explains itself instantly.",
          "The photography also relies on accurate colour. Any site treatment that tinted, overlaid or dimmed the images would undermine the exact thing the studio promises.",
          "There was a great deal of warmth in the couple's voice and their clients' words, and very little room in the existing layout for either.",
        ],
      },
      direction: {
        label: "Creative direction",
        heading: "Grain in the paper, not on the photographs",
        body: [
          "Texture was moved into the interface rather than onto the imagery. A fine paper grain sits on the background surfaces; every photograph is rendered untouched, at full colour accuracy.",
          "Peach cream and warm ivory carry the analogue warmth in the surrounding space, letting the photographs stay exactly as the studio graded them.",
          "Occasional ivory borders and contact-sheet groupings reference the physical language of film without pastiching it.",
        ],
      },
      typography: {
        display: "Cormorant Garamond",
        text: "Manrope",
        note: "Italic serif is used for the couple's own voice, the sections written in first person, so the studio's warmth reads visually distinct from descriptive copy.",
      },
      palette: [
        { name: "Warm Ivory", hex: "#F7F2EA" },
        { name: "Peach Cream", hex: "#E8C8B4" },
        { name: "Deep Cocoa", hex: "#2C2723" },
        { name: "Blush", hex: "#E8CCC7" },
      ],
      experience: {
        label: "Experience design",
        heading: "Let the film play early",
        body: [
          "Super 8 footage appears high in the journey, playing silently and automatically at low weight, so the flicker and grain do the explaining before any copy is read.",
          "Photography is grouped into contact-sheet clusters that expand into full-bleed viewing, echoing the way a photographer actually reviews a roll.",
          "The couple's introduction is written and set in their own voice, placed before the portfolio rather than buried on a separate about page.",
        ],
      },
      build: {
        label: "Development",
        heading: "Motion that never costs the first paint",
        body: [
          "Film loops are lazily mounted, poster-framed and paused entirely when out of view or when the visitor prefers reduced motion.",
          "Photography is delivered through responsive modern formats at a quality setting chosen with the studio, since colour fidelity mattered more here than shaving the last few kilobytes.",
          "Location and service structure was built into the page architecture so the studio's regional coverage is legible to search engines without keyword padding.",
        ],
      },
      outcome: {
        label: "Outcome",
        heading: "The difference is now the first thing you see",
        body: [
          "Super 8 moved from a line of copy to a moment in the journey. Visitors encounter the studio's rarest capability within seconds of arriving.",
        ],
      },
      gallery: [
        {
          src: "/images/work/moments-photography/gallery-01.jpg",
          alt: "Super 8 film still with soft grain and warm colour",
          width: 2000,
          height: 1250,
        },
        {
          src: "/images/work/moments-photography/gallery-02.jpg",
          alt: "Contact sheet cluster of candid wedding photographs",
          width: 1400,
          height: 1750,
        },
        {
          src: "/images/work/moments-photography/gallery-03.jpg",
          alt: "Full-bleed colourful wedding photograph with ivory border",
          width: 2000,
          height: 1250,
        },
      ],
    },
  },
  {
    slug: "sarah-and-anshul",
    client: "Sarah & Anshul",
    shortName: "Sarah & Anshul",
    industry: "Private Wedding Experience",
    location: "India & Ireland",
    year: "2026",
    positioning:
      "A private, password-held wedding website built as a single guest's invitation rather than a public page.",
    services: [
      "Brand Direction",
      "Experience Design",
      "UI & UX Design",
      "Motion Direction",
      "Full Stack Development",
      "Automation",
    ],
    liveUrl: "https://www.sarahandanshul.com/",
    layout: "offset",
    featured: true,
    featureOrder: 4,
    accent: "var(--color-lavender)",
    screenshotSrc: "/images/work/sarah-and-anshul/screenshot.png",
    cover: {
      src: "/images/work/sarah-and-anshul/cover.jpg",
      alt: "Sarah and Anshul wedding website password screen with a soft botanical illustration",
      width: 2400,
      height: 1600,
    },
    supporting: [
      {
        src: "/images/work/sarah-and-anshul/detail-01.jpg",
        alt: "Schedule of ceremonies from the Sarah and Anshul wedding website",
        width: 1200,
        height: 1600,
      },
      {
        src: "/images/work/sarah-and-anshul/detail-02.jpg",
        alt: "Travel and stay guidance from the Sarah and Anshul wedding website",
        width: 1600,
        height: 1000,
      },
    ],
    caseStudy: {
      overview:
        "A wedding spanning two countries and several days of ceremony, with guests travelling from both. The website had to function as a private invitation, a travel guide and a piece of stationery at once.",
      context: {
        label: "Context",
        heading: "One celebration, two countries, many arrivals",
        body: [
          "Sarah and Anshul's celebration brought together families and traditions across two countries, over a sequence of ceremonies rather than a single day.",
          "Guests needed genuinely practical information, what happens when, what to wear, how to get there, where to stay, delivered in a way that still felt like part of the wedding rather than a logistics document.",
        ],
      },
      challenge: {
        label: "The challenge",
        heading: "Private by nature, practical by necessity",
        body: [
          "A wedding website holds details a couple does not want publicly indexed: addresses, timings, family names, travel arrangements. It had to be genuinely private, not merely unlisted.",
          "At the same time, guests arriving from abroad would open it repeatedly, often on a phone, often while travelling. It needed to be fast and immediately legible under those conditions.",
          "And it had to carry the tone of the invitation. A functional schedule table would have broken the spell entirely.",
        ],
      },
      direction: {
        label: "Creative direction",
        heading: "Digital stationery",
        body: [
          "The site was designed as an extension of the couple's printed invitation, lavender mist, soft ivory paper, fine botanical linework and generous margins.",
          "Each ceremony is given its own spread, with its own colour weighting drawn from that day's traditions, so the sequence reads as a series of moments rather than a list of appointments.",
          "The password screen was treated as the first page of the invitation rather than a security gate, a considered, quiet threshold.",
        ],
      },
      typography: {
        display: "Cormorant Garamond",
        text: "Manrope",
        note: "Italic display serif carries the couple's names and the ceremony titles. Practical guest information is set in a clear sans at a comfortable reading size, because a guest checking a start time at an airport should never have to decipher anything.",
      },
      palette: [
        { name: "Soft Paper", hex: "#FBF8F3" },
        { name: "Lavender Mist", hex: "#CEC6D8" },
        { name: "Blush", hex: "#E8CCC7" },
        { name: "Deep Cocoa", hex: "#2C2723" },
      ],
      experience: {
        label: "Experience design",
        heading: "Written for a guest in transit",
        body: [
          "Everything a guest needs most often, the next ceremony, its time, its location, sits above anything decorative on small screens.",
          "Travel, stay and dress guidance are separated into short, scannable passages rather than long paragraphs, since they are read in fragments while moving.",
          "RSVP was designed as a warm exchange with a personal confirmation, not a form submission.",
        ],
      },
      build: {
        label: "Development",
        heading: "A private site that still loads instantly",
        body: [
          "Access is held behind a shared password validated on the server, with a session that persists for a day so guests are not repeatedly challenged.",
          "The site is excluded from search indexing at both the response and crawler level, so private details stay private.",
          "RSVP responses flow directly into the couple's own records and trigger an immediate, personally worded confirmation.",
        ],
      },
      outcome: {
        label: "Outcome",
        heading: "An invitation that happened to be a website",
        body: [
          "Guests across two countries used one private, calm place for everything they needed, and it read like part of the wedding rather than an administrative appendix to it.",
        ],
      },
      gallery: [
        {
          src: "/images/work/sarah-and-anshul/gallery-01.jpg",
          alt: "Wedding website opening spread with the couple's names in italic serif",
          width: 2000,
          height: 1250,
        },
        {
          src: "/images/work/sarah-and-anshul/gallery-02.jpg",
          alt: "Ceremony detail spread with botanical linework",
          width: 1400,
          height: 1750,
        },
        {
          src: "/images/work/sarah-and-anshul/gallery-03.jpg",
          alt: "Travel and stay guidance laid out on soft ivory paper",
          width: 2000,
          height: 1250,
        },
      ],
    },
  },
  {
    slug: "eshan-traju-photography",
    client: "Eshan Traju Photography",
    shortName: "Eshan Traju",
    industry: "Wedding Photography",
    location: "India · photographing worldwide",
    year: "2025",
    positioning:
      "A quiet, restrained portfolio built so the photographs are the only thing asking for attention.",
    services: [
      "Art Direction",
      "Experience Design",
      "UI & UX Design",
      "Frontend Development",
      "CMS Architecture",
      "Performance",
    ],
    liveUrl: "https://www.eshantrajuphotography.com/",
    layout: "split",
    featured: false,
    accent: "var(--color-sage)",
    screenshotSrc: "/images/work/eshan-traju-photography/screenshot.png",
    cover: {
      src: "/images/work/eshan-traju-photography/cover.jpg",
      alt: "Eshan Traju Photography website with a restrained full-bleed wedding photograph",
      width: 2400,
      height: 1600,
    },
    supporting: [
      {
        src: "/images/work/eshan-traju-photography/detail-01.jpg",
        alt: "Gallery view from the Eshan Traju Photography website",
        width: 1200,
        height: 1600,
      },
    ],
    caseStudy: {
      overview:
        "A photographer whose strength is restraint, given an interface with the same discipline.",
      context: {
        label: "Context",
        heading: "Work that does not need help",
        body: [
          "Eshan Traju's photography is composed and unhurried. It does not rely on saturation or spectacle, which means it rewards a viewer who slows down, and suffers in an interface that hurries them.",
        ],
      },
      challenge: {
        label: "The challenge",
        heading: "Everything else was too loud",
        body: [
          "Interface elements, hover states and dense grids were all competing quietly with the photographs for a visitor's attention.",
          "The galleries also loaded heavily, which meant the first photograph a visitor saw was often not the one they were meant to see first.",
        ],
      },
      direction: {
        label: "Creative direction",
        heading: "Subtract until only the work remains",
        body: [
          "The interface was reduced to what a visitor genuinely needs: a way in, a way through, and a way to make contact.",
          "Soft sage and warm neutral surfaces sit beneath the imagery, present enough to feel considered, quiet enough to disappear.",
          "Navigation recedes while scrolling and returns on the way back up, so nothing sits over a photograph unnecessarily.",
        ],
      },
      typography: {
        display: "Cormorant Garamond",
        text: "Manrope",
        note: "One display size, one body size, one label size. The restraint in the type system mirrors the restraint in the photography.",
      },
      palette: [
        { name: "Warm Ivory", hex: "#F7F2EA" },
        { name: "Soft Sage", hex: "#B8BEA7" },
        { name: "Deep Cocoa", hex: "#2C2723" },
        { name: "Warm Grey", hex: "#777069" },
      ],
      experience: {
        label: "Experience design",
        heading: "Pacing as an art direction decision",
        body: [
          "Galleries are sequenced deliberately rather than chronologically, so each set of photographs builds and resolves.",
          "Images enter through a slow mask reveal and settle without bounce, keeping the rhythm even across a long scroll.",
        ],
      },
      build: {
        label: "Development",
        heading: "Fast enough to feel effortless",
        body: [
          "Galleries render on the server with responsive image sources, and only the motion layer ships as client JavaScript.",
          "Below-the-fold imagery loads lazily with a warm-toned placeholder, so the page never flashes empty white while a photograph resolves.",
        ],
      },
      outcome: {
        label: "Outcome",
        heading: "Nothing left to remove",
        body: [
          "The result is a portfolio where the only thing a visitor notices is the photography, which is the entire point.",
        ],
      },
      gallery: [
        {
          src: "/images/work/eshan-traju-photography/gallery-01.jpg",
          alt: "Restrained full-bleed wedding photograph with minimal interface",
          width: 2000,
          height: 1250,
        },
        {
          src: "/images/work/eshan-traju-photography/gallery-02.jpg",
          alt: "Portrait gallery view with generous surrounding space",
          width: 1400,
          height: 1750,
        },
      ],
    },
  },
  {
    slug: "dreamlife-wedding",
    client: "Dreamlife Wedding",
    shortName: "Dreamlife",
    industry: "Wedding Photography & Cinematography",
    location: "Australia",
    year: "2025",
    positioning:
      "A photography and film studio working at volume, given an architecture that stays fast and organised as the work grows.",
    services: [
      "Strategy",
      "Experience Design",
      "Frontend Development",
      "CMS Architecture",
      "Performance",
      "Technical SEO",
      "Analytics",
    ],
    liveUrl: "https://www.dreamlifewedding.com.au/",
    layout: "cinematic",
    featured: false,
    accent: "var(--color-powder)",
    screenshotSrc: "/images/work/dreamlife-wedding/screenshot.png",
    cover: {
      src: "/images/work/dreamlife-wedding/cover.jpg",
      alt: "Dreamlife Wedding website showing a cinematic wedding still and clear navigation",
      width: 2400,
      height: 1600,
    },
    supporting: [
      {
        src: "/images/work/dreamlife-wedding/detail-01.jpg",
        alt: "Films index from the Dreamlife Wedding website",
        width: 1200,
        height: 1600,
      },
    ],
    caseStudy: {
      overview:
        "A studio producing both photography and cinematography at pace needed a site that could absorb a growing body of work without slowing down or becoming difficult to navigate.",
      context: {
        label: "Context",
        heading: "Two disciplines, published continuously",
        body: [
          "Dreamlife covers weddings across Australia in both stills and film, adding new work regularly. The site is not a fixed portfolio, it is a living archive.",
        ],
      },
      challenge: {
        label: "The challenge",
        heading: "Growth was making the site harder to use",
        body: [
          "As the archive expanded, browsing became a matter of endurance rather than discovery. Prospective couples could not easily find work resembling their own wedding.",
          "Video-heavy pages were also expensive to load, particularly on mobile connections where a large share of visitors arrive.",
        ],
      },
      direction: {
        label: "Creative direction",
        heading: "Structure as a design decision",
        body: [
          "Work is organised so a visitor can move toward what resembles their own celebration, by venue character, by scale, by whether they came for photography or film.",
          "Powder blue and warm cream keep the interface calm around imagery that is often highly saturated.",
          "Films and stills each get a presentation suited to how they are actually consumed rather than a shared template.",
        ],
      },
      typography: {
        display: "Cormorant Garamond",
        text: "Manrope",
        note: "Because the archive is dense, the type system leans harder on hierarchy than on expression, clear headings, consistent metadata, and labels that stay legible at small sizes across a long index.",
      },
      palette: [
        { name: "Warm Cream", hex: "#F3EDE4" },
        { name: "Powder Blue", hex: "#C8D5DA" },
        { name: "Deep Cocoa", hex: "#2C2723" },
        { name: "Warm Grey", hex: "#777069" },
      ],
      experience: {
        label: "Experience design",
        heading: "Finding, not wading",
        body: [
          "The archive is browsable by the qualities couples actually search on, so relevant work surfaces within a few interactions rather than a few minutes.",
          "Film pages open with a poster frame and clear playback affordance, so a visitor chooses to watch rather than being played at.",
        ],
      },
      build: {
        label: "Development",
        heading: "Built to keep scaling",
        body: [
          "Galleries and films are modelled in the CMS so the studio publishes continuously without developer involvement.",
          "Video is poster-framed and deferred until requested, and imagery is served responsively, keeping mobile payloads proportionate.",
          "Structured data was added for the organisation and its work so search engines can interpret the archive's shape.",
        ],
      },
      outcome: {
        label: "Outcome",
        heading: "An archive that stays navigable",
        body: [
          "The site now grows without degrading. New work slots into a structure that keeps it findable rather than burying it.",
        ],
      },
      gallery: [
        {
          src: "/images/work/dreamlife-wedding/gallery-01.jpg",
          alt: "Cinematic wedding still from the Dreamlife films section",
          width: 2000,
          height: 1250,
        },
        {
          src: "/images/work/dreamlife-wedding/gallery-02.jpg",
          alt: "Archive index showing organised galleries",
          width: 1400,
          height: 1750,
        },
      ],
    },
  },
  {
    slug: "gold-leaf-event",
    client: "Gold Leaf Event Design",
    shortName: "Gold Leaf",
    industry: "Luxury Wedding & Event Planning",
    location: "Aspen, Colorado · working worldwide",
    year: "2026",
    positioning:
      "A destination wedding and event design studio known for once-in-a-lifetime celebrations, given an immersive brand website that matches their ambition.",
    services: [
      "Strategy",
      "Brand Direction",
      "Experience Design",
      "UI & UX Design",
      "Frontend Development",
      "CMS Architecture",
      "Analytics",
    ],
    liveUrl: "https://www.goldleafevent.com/",
    layout: "split",
    featured: false,
    accent: "var(--color-champagne)",
    screenshotSrc: "/images/work/gold-leaf-event/screenshot.png",
    cover: {
      src: "/images/work/gold-leaf-event/screenshot.png",
      alt: "Gold Leaf Event website showing a destination wedding in the mountains of Aspen",
      width: 1024,
      height: 655,
    },
    supporting: [],
    caseStudy: {
      overview:
        "Gold Leaf Event Design & Production creates elevated destination weddings across Aspen, New York City and worldwide. The website needed to hold that global ambition without ever losing its warmth.",
      context: {
        label: "Context",
        heading: "A studio setting the gold standard",
        body: [
          "Based in Aspen and New York, Gold Leaf has built a reputation for celebrations that are distinctive by design, never duplicated, always rooted in the couple's story.",
        ],
      },
      challenge: {
        label: "The challenge",
        heading: "Global reach, personal feel",
        body: [
          "Destination event studios need to communicate both their international credentials and the warmth of working closely with a couple.",
        ],
      },
      direction: {
        label: "Creative direction",
        heading: "Elevation without coldness",
        body: [
          "Natural mountain landscapes and warm editorial imagery carry the ambiance. The interface stays light so the events define the colour.",
        ],
      },
      typography: {
        display: "Cormorant Garamond",
        text: "Manrope",
        note: "Display serif carries warmth; the sans-serif holds operational copy at a comfortable size.",
      },
      palette: [
        { name: "Warm White", hex: "#FDFCFB" },
        { name: "Champagne", hex: "#D7C6A5" },
        { name: "Deep Cocoa", hex: "#2C2723" },
        { name: "Sage", hex: "#B8BEA7" },
      ],
      experience: {
        label: "Experience design",
        heading: "Curated, not catalogued",
        body: [
          "Events are presented as individual moments, each one given room to breathe before the next arrives.",
        ],
      },
      build: {
        label: "Development",
        heading: "Built to represent a global studio",
        body: [
          "Performance-optimised imagery and structured data ensure the studio appears in search results for destination wedding planning across its key markets.",
        ],
      },
      outcome: {
        label: "Outcome",
        heading: "A presence that matches the ambition",
        body: [
          "The site now reflects the quality of the events, elevated, considered, and impossible to confuse with a template.",
        ],
      },
      gallery: [
        {
          src: "/images/work/gold-leaf-event/screenshot.png",
          alt: "Gold Leaf Event website showing a mountain wedding in Aspen",
          width: 1024,
          height: 655,
        },
      ],
    },
  },
  {
    slug: "damion-mower-photography",
    client: "Damion Mower Photography",
    shortName: "Damion Mower",
    industry: "Wedding Photography",
    location: "United Kingdom · photographing worldwide",
    year: "2026",
    positioning:
      "Editorial, understated, refined, proof that we shift design language completely to match each brand.",
    services: [
      "Art Direction",
      "Experience Design",
      "UI & UX Design",
      "Frontend Development",
      "CMS Architecture",
      "Technical SEO",
      "Performance",
    ],
    liveUrl: "https://damionmowerphotography.co.uk/",
    layout: "cinematic",
    featured: false,
    accent: "var(--color-stone)",
    screenshotSrc: "/images/work/damion-mower-photography/screenshot.png",
    cover: {
      src: "/images/work/damion-mower-photography/screenshot.png",
      alt: "Damion Mower Photography, elegant black and white UK wedding photography",
      width: 1024,
      height: 655,
    },
    supporting: [],
    caseStudy: {
      overview:
        "A Buckinghamshire-based wedding photographer with over a decade of experience, given a website as understated and confident as the work.",
      context: {
        label: "Context",
        heading: "Ten years, hundreds of weddings",
        body: [
          "Damion photographs with a calm, unobtrusive approach, capturing real moments rather than directing them. The website had to carry that same restraint.",
        ],
      },
      challenge: {
        label: "The challenge",
        heading: "Standing apart in a crowded UK market",
        body: [
          "The UK wedding photography market is heavily SEO-driven. The site needed to rank well while also feeling genuinely different from every other photographer's template.",
        ],
      },
      direction: {
        label: "Creative direction",
        heading: "Let the photography hold the room",
        body: [
          "The design shifts toward monochrome and restraint, reflecting the editorial quality of Damion's work. Everything that isn't the photography is quiet.",
        ],
      },
      typography: {
        display: "Cormorant Garamond",
        text: "Manrope",
        note: "One display weight, one body weight. The type system reinforces the editorial approach.",
      },
      palette: [
        { name: "Near White", hex: "#FDFCFB" },
        { name: "Deep Cocoa", hex: "#2C2723" },
        { name: "Warm Grey", hex: "#777069" },
        { name: "Stone", hex: "#9A938A" },
      ],
      experience: {
        label: "Experience design",
        heading: "Timeless, not trendy",
        body: [
          "The journey is clean and unhurried, portfolio, approach, testimonials, contact, each given space without competing for attention.",
        ],
      },
      build: {
        label: "Development",
        heading: "UK search foundations",
        body: [
          "Location-structured pages and venue-specific content ensure Damion appears in search results for couples across Buckinghamshire, Hertfordshire, Oxfordshire and beyond.",
        ],
      },
      outcome: {
        label: "Outcome",
        heading: "A website as refined as the work",
        body: [
          "Proof that design language shifts completely between studios, what works for an Indian destination photographer is not what this market needs.",
        ],
      },
      gallery: [
        {
          src: "/images/work/damion-mower-photography/screenshot.png",
          alt: "Damion Mower Photography website, clean, editorial, restrained",
          width: 1024,
          height: 655,
        },
      ],
    },
  },
];

export const featuredProjects = projects
  .filter((project) => project.featured)
  .sort((a, b) => (a.featureOrder ?? 99) - (b.featureOrder ?? 99));

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

/** Used to offer the next story at the end of a case study. */
export function getAdjacentProject(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index === -1) return undefined;
  return projects[(index + 1) % projects.length];
}
