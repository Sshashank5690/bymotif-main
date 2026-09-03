"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { SelectField, TextArea, TextField } from "@/components/contact/Field";
import { Button } from "@/components/ui/Button";
import { site } from "@/content/site";
import {
  budgetOptions,
  enquirySchema,
  projectOptions,
  timelineOptions,
  type EnquiryInput,
} from "@/lib/enquiry";
import { ease } from "@/lib/motion";
import { submitEnquiry } from "@/app/contact/actions";

/** Fields validated before the second step opens. */
const STEP_ONE_FIELDS = ["name", "email", "brand", "presence"] as const;

const steps = [
  { number: "01", title: "About you" },
  { number: "02", title: "About the project" },
] as const;

export function EnquiryForm() {
  const [step, setStep] = useState(0);
  const [sent, setSent] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    trigger,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm<EnquiryInput>({
    resolver: zodResolver(enquirySchema),
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      brand: "",
      presence: "",
      project: "",
      budget: "",
      timeline: "",
      vision: "",
      confirm_url: "",
    },
  });

  const goToProject = async () => {
    const valid = await trigger([...STEP_ONE_FIELDS]);
    if (valid) setStep(1);
  };

  const onSubmit = async (values: EnquiryInput) => {
    setSubmitError(null);
    const result = await submitEnquiry(values);

    if (result.ok) {
      setSent(true);
      return;
    }

    setSubmitError(result.message);
  };

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: ease.editorial }}
        role="status"
        className="py-6 text-center"
      >
        <p className="font-sans text-label uppercase tracking-[0.18em] text-stone">
          Thank you
        </p>
        <h2 className="mx-auto mt-8 max-w-[18ch] font-serif text-display-sm font-light text-ink">
          Your note is with us,{" "}
          <em className="italic text-burgundy">{getValues("name")}.</em>
        </h2>
        <p className="mx-auto mt-7 max-w-[46ch] text-balance-pretty font-sans text-body text-stone">
          We read every enquiry ourselves, so a reply will come from a person
          rather than a system, usually within two working days.
        </p>
        <p className="mt-9 font-sans text-small text-quiet">
          In the meantime, you are welcome to look through{" "}
          <a href={site.social.instagram} className="link-reveal text-ink">
            what we have been making
          </a>
          .
        </p>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="relative"
    >
      <ol className="flex items-center gap-8 border-b border-line-soft pb-6">
        {steps.map((entry, index) => (
          <li
            key={entry.number}
            aria-current={index === step ? "step" : undefined}
            className="flex items-baseline gap-3"
          >
            <span
              className={`font-sans text-label tracking-[0.18em] transition-colors duration-(--duration-quick) ${
                index === step ? "text-burgundy" : "text-quiet"
              }`}
            >
              {entry.number}
            </span>
            <span
              className={`font-sans text-label uppercase tracking-[0.16em] transition-colors duration-(--duration-quick) ${
                index === step ? "text-ink" : "text-quiet"
              }`}
            >
              {entry.title}
            </span>
          </li>
        ))}
      </ol>

      {/* Honeypot: off-screen, non-interactive, unlikely to be autofilled. */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-[10000px] h-0 w-0 overflow-hidden opacity-0"
      >
        <label htmlFor="confirm_url">Confirm url</label>
        <input
          id="confirm_url"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("confirm_url")}
        />
      </div>

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={step}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.45, ease: ease.editorial }}
          className="relative z-0 pt-12"
        >
          {step === 0 ? (
            <div className="grid gap-10 sm:grid-cols-2">
              <TextField
                id="name"
                label="Your name"
                autoComplete="name"
                placeholder="Shyani Fernando"
                error={errors.name?.message}
                {...register("name")}
              />
              <TextField
                id="email"
                label="Email"
                type="email"
                autoComplete="email"
                placeholder="you@studio.com"
                error={errors.email?.message}
                {...register("email")}
              />
              <TextField
                id="brand"
                label="Brand or studio"
                optional
                placeholder="Moments Photography & Film"
                error={errors.brand?.message}
                {...register("brand")}
              />
              <TextField
                id="presence"
                label="Website or Instagram"
                optional
                placeholder="@yourstudio"
                error={errors.presence?.message}
                {...register("presence")}
              />
            </div>
          ) : (
            <div className="grid gap-10">
              <SelectField
                id="project"
                label="What are you looking to create?"
                options={projectOptions}
                placeholder="Choose the closest one"
                error={errors.project?.message}
                {...register("project")}
              />

              <div className="grid gap-10 sm:grid-cols-2">
                <SelectField
                  id="budget"
                  label="Investment range"
                  optional
                  options={budgetOptions}
                  placeholder="Only if you know"
                  error={errors.budget?.message}
                  {...register("budget")}
                />
                <SelectField
                  id="timeline"
                  label="Timeline"
                  optional
                  options={timelineOptions}
                  placeholder="If you have one"
                  error={errors.timeline?.message}
                  {...register("timeline")}
                />
              </div>

              <TextArea
                id="vision"
                label="Tell us about your vision"
                placeholder="The work you make, who it is for, and what you want people to feel when they find it."
                error={errors.vision?.message}
                {...register("vision")}
              />
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {submitError ? (
        <p role="alert" className="relative z-10 mt-10 font-sans text-small text-burgundy">
          {submitError}
        </p>
      ) : null}

      <div className="relative z-10 mt-14 flex flex-col gap-5 border-t border-line-soft pt-10 sm:flex-row sm:items-center sm:justify-between">
        {step === 1 ? (
          <button
            type="button"
            onClick={() => setStep(0)}
            className="link-reveal w-fit font-sans text-label uppercase tracking-[0.16em] text-stone transition-colors duration-(--duration-quick) hover:text-ink"
          >
            ← Back to your details
          </button>
        ) : (
          <p className="font-sans text-small text-quiet">
            Two short steps. Nothing is sent until the end.
          </p>
        )}

        {step === 0 ? (
          <Button type="button" onClick={goToProject} className="relative z-10 shrink-0">
            Continue
          </Button>
        ) : (
          <Button
            type="submit"
            disabled={isSubmitting}
            className="relative z-10 shrink-0"
          >
            {isSubmitting ? "Sending…" : "Send your enquiry"}
          </Button>
        )}
      </div>
    </form>
  );
}
