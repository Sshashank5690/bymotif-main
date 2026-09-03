import { Reveal } from "@/components/motion/Reveal";
import { RevealLines } from "@/components/motion/RevealLines";
import { SectionLabel } from "@/components/ui/SectionLabel";

type PageHeaderProps = {
  label: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
};

export function PageHeader({ label, title, intro }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden px-gutter pb-section-sm pt-36 lg:pt-44">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -right-[10%] top-0 h-[28rem] w-[36rem] rounded-full bg-blush/18 blur-[110px]" />
      </div>

      <div className="relative mx-auto max-w-editorial">
        <Reveal>
          <SectionLabel>{label}</SectionLabel>
        </Reveal>

        <RevealLines
          as="h1"
          immediate
          delay={0.1}
          className="mt-6 max-w-[20ch] font-serif text-display-lg font-light text-ink"
        >
          {title}
        </RevealLines>

        {intro ? (
          <Reveal delay={0.28} className="mt-7 max-w-[54ch]">
            <p className="font-sans text-body text-stone">
              {intro}
            </p>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
