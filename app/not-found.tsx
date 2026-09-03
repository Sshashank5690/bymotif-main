import { ArrowLink } from "@/components/ui/ArrowLink";
import { ButtonLink } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80svh] items-center overflow-hidden px-gutter py-section">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-[10%] left-[30%] h-[32rem] w-[38rem] rounded-full bg-blush/25 blur-[140px]" />
      </div>

      <div className="relative mx-auto w-full max-w-editorial">
        <SectionLabel>Not found</SectionLabel>

        <h1 className="mt-9 max-w-[16ch] font-serif text-display-lg font-light text-ink">
          This page seems to have{" "}
          <em className="italic text-burgundy">wandered off.</em>
        </h1>

        <p className="mt-9 max-w-[46ch] text-balance-pretty font-sans text-lead text-stone">
          The link may be old, or we may have moved something. The work is still
          where you left it.
        </p>

        <div className="mt-12 flex flex-col gap-6 sm:flex-row sm:items-center">
          <ButtonLink href="/work">Explore the work</ButtonLink>
          <ArrowLink href="/">Back to the beginning</ArrowLink>
        </div>
      </div>
    </section>
  );
}
