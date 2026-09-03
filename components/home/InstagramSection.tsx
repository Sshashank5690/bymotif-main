import Image from "next/image";

import { Reveal } from "@/components/motion/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { site } from "@/content/site";
import { getInstagramPosts } from "@/lib/instagram";
import { cn } from "@/lib/utils";
import type { InstagramPost } from "@/types";

const shapeSpans: Record<InstagramPost["shape"], string> = {
  wide: "col-span-2",
  portrait: "col-span-1",
  square: "col-span-1",
};

const shapeRatios: Record<InstagramPost["shape"], string> = {
  wide: "aspect-[16/10]",
  portrait: "aspect-[3/4]",
  square: "aspect-square",
};

const shapeSizes: Record<InstagramPost["shape"], string> = {
  wide: "(max-width: 768px) 100vw, 44vw",
  portrait: "(max-width: 768px) 50vw, 22vw",
  square: "(max-width: 768px) 50vw, 22vw",
};

export async function InstagramSection() {
  const posts = await getInstagramPosts();

  return (
    <section className="border-t border-line-soft px-gutter py-section-sm">
      <div className="mx-auto max-w-editorial">
        {/* Header row */}
        <div className="mb-8 flex items-end justify-between gap-8">
          <div>
            <Reveal>
              <SectionLabel>From the studio</SectionLabel>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-3 font-serif text-display-sm font-light text-ink">
                Recently at byMotif
              </h2>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="shrink-0 pb-1">
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="link-reveal font-sans text-small text-stone hover:text-ink transition-colors"
            >
              {site.social.instagramHandle} ↗
            </a>
          </Reveal>
        </div>

        <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {posts.map((post, index) => (
            <Reveal
              as="li"
              key={post.id}
              delay={index * 0.05}
              className={shapeSpans[post.shape]}
            >
              <a
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "group relative block w-full overflow-hidden rounded-xl bg-canvas border border-line-soft",
                  shapeRatios[post.shape],
                )}
              >
                <Image
                  src={post.image.src}
                  alt={post.image.alt}
                  fill
                  sizes={shapeSizes[post.shape]}
                  className="object-cover transition-transform duration-[1200ms] ease-editorial group-hover:scale-[1.04]"
                />

                {post.caption ? (
                  <span className="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-ink/70 to-transparent p-4 pt-10 font-sans text-small leading-snug text-ivory opacity-0 transition-all duration-(--duration-soft) ease-editorial group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="line-clamp-2">{post.caption}</span>
                  </span>
                ) : null}
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
