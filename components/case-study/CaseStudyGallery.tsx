import { RevealImage } from "@/components/motion/RevealImage";
import { Reveal } from "@/components/motion/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import type { ImageAsset } from "@/types";

/**
 * Selected screens. Deliberately not a uniform grid — the wide frames run full
 * measure and the tall frame is inset, so the sequence has a rhythm.
 */
export function CaseStudyGallery({ gallery }: { gallery: ImageAsset[] }) {
  const [first, second, third] = gallery;

  return (
    <section className="border-t border-line-soft px-gutter py-section-sm">
      <div className="mx-auto max-w-editorial">
        <Reveal distance={14}>
          <SectionLabel>Selected screens</SectionLabel>
        </Reveal>

        <div className="mt-12 space-y-6 lg:space-y-8">
          {first ? (
            <RevealImage
              image={first}
              sizes="(max-width: 1024px) 100vw, 88vw"
              quality={90}
              parallax={5}
              className="aspect-[16/10] w-full"
            />
          ) : null}

          {second || third ? (
            <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
              {second ? (
                <RevealImage
                  image={second}
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  quality={90}
                  parallax={9}
                  className="aspect-[4/5] w-full lg:col-span-5"
                />
              ) : null}
              {third ? (
                <RevealImage
                  image={third}
                  sizes="(max-width: 1024px) 100vw, 52vw"
                  quality={90}
                  parallax={6}
                  className="aspect-[4/3] w-full lg:col-span-7"
                />
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
