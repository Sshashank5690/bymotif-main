/**
 * Generates soft pastel placeholder photography.
 *
 * These exist so the layout can be reviewed and shipped before real imagery is
 * supplied. Every file written here is disposable: drop a real photograph at
 * the same path and nothing in the application needs to change.
 *
 *   node scripts/generate-placeholders.mjs
 *
 * Existing files are never overwritten, so real photography is safe once added.
 */

import { mkdir, writeFile, access } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import sharp from "sharp";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = join(root, "public");

/** Palettes drawn from the site's own token set. */
const PALETTES = [
  ["#E8CCC7", "#D7B5B1", "#F7F2EA"],
  ["#D7C6A5", "#B8BEA7", "#FBF8F3"],
  ["#C8D5DA", "#F3EDE4", "#BFA5AD"],
  ["#CEC6D8", "#E8CCC7", "#FBF8F3"],
  ["#E8C8B4", "#D7C6A5", "#F7F2EA"],
  ["#B8BEA7", "#A8AA91", "#F3EDE4"],
];

function hash(value) {
  let total = 0;
  for (let i = 0; i < value.length; i += 1) {
    total = (total * 31 + value.charCodeAt(i)) >>> 0;
  }
  return total;
}

function svg(width, height, seed) {
  const palette = PALETTES[seed % PALETTES.length];
  const [a, b, c] = palette;
  const angle = (seed % 4) * 45;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <defs>
    <linearGradient id="base" gradientTransform="rotate(${angle} 0.5 0.5)">
      <stop offset="0%" stop-color="${c}"/>
      <stop offset="55%" stop-color="${a}"/>
      <stop offset="100%" stop-color="${b}"/>
    </linearGradient>
    <radialGradient id="light" cx="${28 + (seed % 40)}%" cy="${20 + (seed % 35)}%" r="70%">
      <stop offset="0%" stop-color="#FFFDF9" stop-opacity="0.75"/>
      <stop offset="100%" stop-color="#FFFDF9" stop-opacity="0"/>
    </radialGradient>
    <filter id="grain">
      <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" stitchTiles="stitch"/>
      <feColorMatrix type="saturate" values="0"/>
    </filter>
  </defs>
  <rect width="${width}" height="${height}" fill="url(#base)"/>
  <rect width="${width}" height="${height}" fill="url(#light)"/>
  <rect width="${width}" height="${height}" filter="url(#grain)" opacity="0.09"/>
</svg>`;
}

async function exists(path) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

async function generate(relativePath, width, height) {
  const target = join(publicDir, relativePath);

  if (await exists(target)) {
    console.log(`· kept    ${relativePath}`);
    return;
  }

  await mkdir(dirname(target), { recursive: true });

  const buffer = await sharp(Buffer.from(svg(width, height, hash(relativePath))))
    .blur(Math.max(6, Math.round(width / 90)))
    .jpeg({ quality: 82, mozjpeg: true })
    .toBuffer();

  await writeFile(target, buffer);
  console.log(`✓ wrote   ${relativePath}`);
}

const RATIOS = {
  cover: [2400, 1600],
  wide: [2000, 1250],
  portrait: [1200, 1600],
  landscape: [1600, 1000],
  square: [1200, 1200],
  tall: [1400, 1750],
};

const PROJECT_SLUGS = [
  "jackson-james-photography",
  "estera-events",
  "moments-photography",
  "sarah-and-anshul",
  "eshan-traju-photography",
  "dreamlife-wedding",
];

const targets = [
  ["images/hero/frame-01.jpg", ...RATIOS.portrait],
  ["images/hero/frame-02.jpg", ...RATIOS.landscape],
  ["images/hero/frame-03.jpg", 1000, 1400],
  ["images/editorial/wedding-statement.jpg", 2400, 1500],
  ["images/editorial/studio-portrait.jpg", ...RATIOS.portrait],
  ["images/editorial/process.jpg", ...RATIOS.landscape],
  ...PROJECT_SLUGS.flatMap((slug) => [
    [`images/work/${slug}/cover.jpg`, ...RATIOS.cover],
    [`images/work/${slug}/detail-01.jpg`, ...RATIOS.portrait],
    [`images/work/${slug}/detail-02.jpg`, ...RATIOS.landscape],
    [`images/work/${slug}/gallery-01.jpg`, ...RATIOS.wide],
    [`images/work/${slug}/gallery-02.jpg`, ...RATIOS.tall],
    [`images/work/${slug}/gallery-03.jpg`, ...RATIOS.wide],
  ]),
  ["images/instagram/post-01.jpg", ...RATIOS.landscape],
  ["images/instagram/post-02.jpg", ...RATIOS.portrait],
  ["images/instagram/post-03.jpg", ...RATIOS.square],
  ["images/instagram/post-04.jpg", ...RATIOS.square],
  ["images/instagram/post-05.jpg", ...RATIOS.portrait],
  ["images/instagram/post-06.jpg", ...RATIOS.square],
];

await Promise.all(targets.map((target) => generate(...target)));
console.log(`\nDone — ${targets.length} placeholder targets processed.`);
