import { z } from "zod";

/**
 * One schema, validated on the client for immediate feedback and again on the
 * server, which never trusts the browser.
 */
export const enquirySchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please tell us your name.")
    .max(120, "That name seems unusually long."),
  email: z
    .string()
    .trim()
    .min(1, "We need an email address to reply to.")
    .email("That email address doesn't look quite right."),
  brand: z
    .string()
    .trim()
    .max(160, "That is longer than we can store.")
    .optional()
    .or(z.literal("")),
  presence: z
    .string()
    .trim()
    .max(300, "That is longer than we can store.")
    .optional()
    .or(z.literal("")),
  project: z.string().min(1, "Let us know roughly what you have in mind."),
  budget: z.string().optional().or(z.literal("")),
  timeline: z.string().optional().or(z.literal("")),
  vision: z
    .string()
    .trim()
    .min(20, "A sentence or two helps us understand what you're imagining.")
    .max(4000, "Please keep this under 4000 characters."),
  /**
   * Honeypot — must NOT be named like a real profile field (e.g. "company"),
   * or password managers autofill it and the form silently fails validation.
   */
  confirm_url: z.string().optional().or(z.literal("")),
});

export type EnquiryInput = z.infer<typeof enquirySchema>;

export const projectOptions = [
  "A new website",
  "A redesign of an existing website",
  "Brand direction and a website",
  "A private wedding or event website",
  "Something else entirely",
] as const;

export const budgetOptions = [
  "Still figuring out the investment",
  "Essential — around $699",
  "Signature — around $999 (recommended)",
  "Atelier — around $1,399",
  "Something custom / open to discuss",
] as const;

export const timelineOptions = [
  "As soon as possible",
  "In the next one to three months",
  "In three to six months",
  "Later this year",
  "Just exploring for now",
] as const;
