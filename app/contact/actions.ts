"use server";

import { Resend } from "resend";

import { site } from "@/content/site";
import { enquiryTemplateHtml } from "@/lib/enquiry-email";
import { enquirySchema, type EnquiryInput } from "@/lib/enquiry";

export type EnquiryResult =
  | { ok: true }
  | { ok: false; message: string; fieldErrors?: Record<string, string[]> };

function dash(value?: string) {
  const trimmed = value?.trim();
  return trimmed ? trimmed : "—";
}

function templateVariables(enquiry: EnquiryInput) {
  return {
    NAME: enquiry.name,
    EMAIL: enquiry.email,
    BRAND: dash(enquiry.brand),
    PRESENCE: dash(enquiry.presence),
    PROJECT: enquiry.project,
    BUDGET: dash(enquiry.budget),
    TIMELINE: dash(enquiry.timeline),
    VISION: enquiry.vision,
  };
}

function formatPlainText(enquiry: EnquiryInput) {
  const vars = templateVariables(enquiry);
  return [
    `Hi — new enquiry from ${vars.NAME}.`,
    "",
    `Email: ${vars.EMAIL}`,
    `Brand: ${vars.BRAND}`,
    `Presence: ${vars.PRESENCE}`,
    `Project: ${vars.PROJECT}`,
    `Investment: ${vars.BUDGET}`,
    `Timeline: ${vars.TIMELINE}`,
    "",
    "Their vision:",
    vars.VISION,
    "",
    `Reply directly to this email to reach ${vars.EMAIL}.`,
  ].join("\n");
}

function renderFallbackHtml(enquiry: EnquiryInput) {
  const vars = templateVariables(enquiry);
  return enquiryTemplateHtml
    .replaceAll("{{{NAME}}}", escapeHtml(vars.NAME))
    .replaceAll("{{{EMAIL}}}", escapeHtml(vars.EMAIL))
    .replaceAll("{{{BRAND}}}", escapeHtml(vars.BRAND))
    .replaceAll("{{{PRESENCE}}}", escapeHtml(vars.PRESENCE))
    .replaceAll("{{{PROJECT}}}", escapeHtml(vars.PROJECT))
    .replaceAll("{{{BUDGET}}}", escapeHtml(vars.BUDGET))
    .replaceAll("{{{TIMELINE}}}", escapeHtml(vars.TIMELINE))
    .replaceAll("{{{VISION}}}", escapeHtml(vars.VISION).replaceAll("\n", "<br />"));
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export async function submitEnquiry(
  values: EnquiryInput,
): Promise<EnquiryResult> {
  const parsed = enquirySchema.safeParse(values);

  if (!parsed.success) {
    return {
      ok: false,
      message: "Some details need another look.",
      fieldErrors: parsed.error.flatten().fieldErrors as Record<
        string,
        string[]
      >,
    };
  }

  if (parsed.data.confirm_url) return { ok: true };

  const apiKey = process.env.RESEND_API_KEY;
  const subject = `Enquiry from ${parsed.data.name}`;
  const text = formatPlainText(parsed.data);

  if (!apiKey) {
    if (process.env.NODE_ENV === "development") {
      console.info(`\n[enquiry] RESEND_API_KEY not set — logging instead\n${text}\n`);
      return { ok: true };
    }

    return {
      ok: false,
      message: `Our form isn't connected yet. Please email ${site.email} and we'll reply personally.`,
    };
  }

  try {
    const resend = new Resend(apiKey);
    const from =
      process.env.RESEND_FROM_EMAIL ??
      "byMotif Studios <contact@bymotifstudios.in>";
    const to = process.env.ENQUIRY_INBOX ?? site.email;
    const templateId = process.env.RESEND_ENQUIRY_TEMPLATE_ID;
    const variables = templateVariables(parsed.data);

    const { error } = templateId
      ? await resend.emails.send({
          from,
          to,
          replyTo: parsed.data.email,
          subject,
          template: {
            id: templateId,
            variables,
          },
        })
      : await resend.emails.send({
          from,
          to,
          replyTo: parsed.data.email,
          subject,
          text,
          html: renderFallbackHtml(parsed.data),
        });

    if (error) throw new Error(error.message);

    return { ok: true };
  } catch (error) {
    console.error("[enquiry] send failed", error);
    return {
      ok: false,
      message: `Something went wrong on our side. Please email ${site.email} directly and we'll pick it up from there.`,
    };
  }
}
