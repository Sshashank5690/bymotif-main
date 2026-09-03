"use client";

import { useId, useRef, useState } from "react";
import { Check, Minus } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

import { ButtonLink } from "@/components/ui/Button";
import { pricingTiers } from "@/content/pricing";
import { ease } from "@/lib/motion";
import { cn } from "@/lib/utils";

function formatPrice(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

export function PricingExperience() {
  const defaultIndex = pricingTiers.findIndex((tier) => tier.highlight);
  const [index, setIndex] = useState(defaultIndex >= 0 ? defaultIndex : 1);
  const sliderId = useId();
  const trackRef = useRef<HTMLDivElement>(null);
  const tier = pricingTiers[index];
  const max = pricingTiers.length - 1;
  const progress = max === 0 ? 0 : index / max;

  const setFromClientX = (clientX: number) => {
    const track = trackRef.current;
    if (!track) return;
    const rect = track.getBoundingClientRect();
    const ratio = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
    setIndex(Math.round(ratio * max));
  };

  return (
    <div className="mx-auto max-w-3xl lg:max-w-4xl">
      {/* Compact Apple-like investment control */}
      <div className="relative overflow-hidden rounded-[1.75rem] border border-line-soft bg-paper/90 px-5 py-5 shadow-lift sm:px-7 sm:py-6">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
        >
          <div className="absolute -right-8 -top-10 h-32 w-40 rounded-full bg-peach/30 blur-[50px]" />
          <div className="absolute -bottom-12 -left-6 h-28 w-36 rounded-full bg-lavender/25 blur-[50px]" />
        </div>

        <div className="relative flex items-baseline justify-between gap-4">
          <div>
            <p className="font-sans text-[0.65rem] font-medium uppercase tracking-[0.18em] text-quiet">
              Investment
            </p>
            <p className="mt-1 font-sans text-small text-stone">
              Slide to shape the engagement
            </p>
          </div>
          <AnimatePresence mode="wait">
            <motion.p
              key={tier.id}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.28, ease: ease.editorial }}
              className="font-serif text-[1.75rem] font-light leading-none tracking-[-0.02em] text-ink sm:text-[2rem]"
            >
              {formatPrice(tier.price)}
            </motion.p>
          </AnimatePresence>
        </div>

        <div className="relative mt-7 sm:mt-8">
          <div
            ref={trackRef}
            className="relative mx-1 h-11 touch-none select-none"
            onPointerDown={(event) => {
              (event.currentTarget as HTMLElement).setPointerCapture(
                event.pointerId,
              );
              setFromClientX(event.clientX);
            }}
            onPointerMove={(event) => {
              if (event.buttons !== 1) return;
              setFromClientX(event.clientX);
            }}
          >
            {/* Soft recessed track — Apple volume style */}
            <div className="absolute inset-x-0 top-1/2 h-2 -translate-y-1/2 rounded-full bg-shell shadow-[inset_0_1px_2px_rgba(44,39,35,0.08)]" />

            {/* Warm fill that follows the thumb */}
            <motion.div
              className="absolute left-0 top-1/2 h-2 origin-left -translate-y-1/2 rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, #e8c8b4 0%, #e0b0a8 52%, #c8b8d0 100%)",
                boxShadow: "0 0 16px rgba(224, 176, 168, 0.45)",
              }}
              animate={{ width: `${progress * 100}%` }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
            />

            {/* Stop ticks */}
            {pricingTiers.map((_, stopIndex) => (
              <span
                key={stopIndex}
                aria-hidden
                className={cn(
                  "absolute top-1/2 size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full transition-colors duration-(--duration-quick)",
                  stopIndex <= index ? "bg-ivory/90" : "bg-ink/20",
                )}
                style={{ left: `${(stopIndex / max) * 100}%` }}
              />
            ))}

            {/* Glass thumb */}
            <motion.div
              aria-hidden
              className="absolute top-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
              animate={{ left: `${progress * 100}%` }}
              transition={{ type: "spring", stiffness: 380, damping: 34 }}
            >
              <span className="block size-7 rounded-full border border-white/80 bg-[linear-gradient(180deg,#fffdf9_0%,#f3ebe3_100%)] shadow-[0_2px_8px_rgba(44,39,35,0.18),0_0_0_4px_rgba(232,200,180,0.28)] ring-1 ring-ink/5" />
            </motion.div>

            <input
              id={sliderId}
              type="range"
              min={0}
              max={max}
              step={1}
              value={index}
              onChange={(event) => setIndex(Number(event.target.value))}
              className="pricing-slider-native absolute inset-0 z-20 h-full w-full cursor-pointer opacity-0"
              aria-valuetext={`${tier.name}, ${formatPrice(tier.price)}`}
            />
          </div>

          <div className="mt-3 grid grid-cols-3 gap-2">
            {pricingTiers.map((item, itemIndex) => {
              const selected = itemIndex === index;
              const signatureActive = item.highlight && selected;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setIndex(itemIndex)}
                  className={cn(
                    "rounded-xl px-2 py-2.5 text-center transition-all duration-(--duration-soft) ease-editorial",
                    signatureActive &&
                      "pricing-signature-cta shadow-[0_6px_20px_rgba(184,140,130,0.32)] ring-1 ring-ink/10",
                    selected &&
                      !signatureActive &&
                      "bg-ivory shadow-[0_1px_3px_rgba(44,39,35,0.08)] ring-1 ring-ink/8",
                    !selected && "hover:bg-shell/70",
                  )}
                >
                  <span
                    className={cn(
                      "block font-sans text-[0.62rem] font-medium uppercase tracking-[0.16em]",
                      selected ? "text-ink" : "text-quiet",
                    )}
                  >
                    {item.name}
                  </span>
                  <span
                    className={cn(
                      "mt-1 block font-serif text-[0.95rem] font-light",
                      selected ? "text-ink" : "text-stone",
                    )}
                  >
                    {formatPrice(item.price)}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Slimmer active panel */}
      <AnimatePresence mode="wait">
        <motion.article
          key={tier.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35, ease: ease.editorial }}
          className="relative mt-5 overflow-hidden rounded-[1.75rem] border border-line-soft bg-canvas shadow-lift"
        >
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute -right-[8%] top-[-25%] h-40 w-52 rounded-full bg-peach/28 blur-[70px]" />
            <div className="absolute -left-[6%] bottom-[-35%] h-36 w-48 rounded-full bg-lavender/22 blur-[70px]" />
          </div>

          <div className="relative grid gap-8 p-6 sm:p-7 lg:grid-cols-12 lg:gap-10 lg:p-8">
            <div className="lg:col-span-5">
              <div className="flex flex-wrap items-center gap-2.5">
                <p className="font-sans text-[0.65rem] font-medium uppercase tracking-[0.18em] text-stone">
                  {tier.name}
                </p>
                {"badge" in tier && tier.badge ? (
                  <span className="rounded-full bg-ink px-2.5 py-0.5 font-sans text-[0.6rem] font-medium uppercase tracking-[0.14em] text-ivory">
                    {tier.badge}
                  </span>
                ) : null}
              </div>

              <h2 className="mt-3 font-serif text-[2.25rem] font-light leading-none tracking-[-0.02em] text-ink sm:text-[2.5rem]">
                {formatPrice(tier.price)}
                <span className="ml-2 align-middle font-sans text-[0.7rem] uppercase tracking-[0.14em] text-quiet">
                  {tier.currency}
                </span>
              </h2>

              <p className="mt-3 max-w-[32ch] font-serif text-[1.05rem] font-light italic leading-snug text-stone">
                {tier.tagline}
              </p>

              <p className="mt-3 max-w-[40ch] font-sans text-small text-stone">
                {tier.summary}
              </p>

              <dl className="mt-5 grid grid-cols-2 gap-3 border-t border-line-soft pt-4">
                <div>
                  <dt className="font-sans text-[0.62rem] uppercase tracking-[0.16em] text-quiet">
                    Timeline
                  </dt>
                  <dd className="mt-1.5 font-sans text-small text-ink">
                    {tier.timeline}
                  </dd>
                </div>
                <div>
                  <dt className="font-sans text-[0.62rem] uppercase tracking-[0.16em] text-quiet">
                    Support
                  </dt>
                  <dd className="mt-1.5 font-sans text-small text-ink">
                    {tier.support}
                  </dd>
                </div>
              </dl>

              <div className="mt-6">
                {tier.highlight ? (
                  <ButtonLink
                    href="/contact"
                    variant="ghost"
                    className="pricing-signature-cta px-6 py-3.5 text-[0.7rem] text-ink shadow-[0_8px_24px_rgba(184,140,130,0.28)] hover:text-ink hover:opacity-95 hover:shadow-[0_10px_28px_rgba(184,140,130,0.34)]"
                  >
                    Start with {tier.name}
                  </ButtonLink>
                ) : (
                  <ButtonLink
                    href="/contact"
                    className="px-6 py-3.5 text-[0.7rem]"
                  >
                    Start with {tier.name}
                  </ButtonLink>
                )}
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-[1.25rem] border border-line-soft bg-ivory/90 p-5 sm:p-6">
                <p className="font-sans text-[0.65rem] font-medium uppercase tracking-[0.18em] text-quiet">
                  What&apos;s included
                </p>
                <ul className="mt-4 columns-1 gap-x-8 space-y-2.5 sm:columns-2">
                  {tier.includes.map((item) => (
                    <li
                      key={item}
                      className="flex break-inside-avoid items-start gap-2.5 font-sans text-[0.8125rem] leading-snug text-ink"
                    >
                      <Check
                        className="mt-0.5 size-3.5 shrink-0 text-burgundy"
                        strokeWidth={1.75}
                        aria-hidden
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {tier.excludes.length > 0 ? (
                  <div className="mt-5 border-t border-line-soft pt-4">
                    <p className="font-sans text-[0.65rem] font-medium uppercase tracking-[0.18em] text-quiet">
                      Not included
                    </p>
                    <ul className="mt-3 space-y-2">
                      {tier.excludes.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 font-sans text-[0.8125rem] text-stone"
                        >
                          <Minus
                            className="mt-0.5 size-3.5 shrink-0 text-quiet"
                            strokeWidth={1.75}
                            aria-hidden
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </motion.article>
      </AnimatePresence>
    </div>
  );
}
