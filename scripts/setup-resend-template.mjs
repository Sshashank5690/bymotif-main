/**
 * One-time (or re-runnable) setup for the Resend enquiry email template.
 *
 * Usage: node --env-file=.env.local scripts/setup-resend-template.mjs
 */

import { Resend } from "resend";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

// Load .env.local if --env-file wasn't used
try {
  const envPath = resolve(process.cwd(), ".env.local");
  for (const line of readFileSync(envPath, "utf8").split("\n")) {
    if (!line || line.startsWith("#") || !line.includes("=")) continue;
    const i = line.indexOf("=");
    const key = line.slice(0, i);
    let value = line.slice(i + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    if (!process.env[key]) process.env[key] = value;
  }
} catch {
  // ignore
}

const ALIAS = "bymotif-website-enquiry";

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>New enquiry</title>
</head>
<body style="margin:0;padding:0;background:#f7f5f2;color:#2c2723;font-family:Georgia,'Times New Roman',serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f7f5f2;padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border:1px solid rgba(44,39,35,0.08);border-radius:20px;overflow:hidden;">
          <tr>
            <td style="padding:28px 32px 20px;background:linear-gradient(120deg,#e8c8b4 0%,#e0b0a8 50%,#c8b8d0 100%);">
              <p style="margin:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:#2c2723;">byMotif Studios</p>
              <h1 style="margin:12px 0 0;font-weight:300;font-size:28px;line-height:1.2;color:#2c2723;">New enquiry</h1>
              <p style="margin:8px 0 0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;font-size:14px;color:rgba(44,39,35,0.72);">From {{{NAME}}}</p>
            </td>
          </tr>
          <tr>
            <td style="padding:28px 32px;">
              <p style="margin:0 0 20px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;font-size:15px;line-height:1.6;color:#38312d;">
                Someone reached out through the website. Reply to this email to continue the conversation.
              </p>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-top:1px solid rgba(44,39,35,0.08);">
                <tr>
                  <td style="padding:14px 0;border-bottom:1px solid rgba(44,39,35,0.08);font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;font-size:12px;letter-spacing:0.14em;text-transform:uppercase;color:#9a938a;width:38%;">Email</td>
                  <td style="padding:14px 0;border-bottom:1px solid rgba(44,39,35,0.08);font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;font-size:15px;color:#2c2723;">{{{EMAIL}}}</td>
                </tr>
                <tr>
                  <td style="padding:14px 0;border-bottom:1px solid rgba(44,39,35,0.08);font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;font-size:12px;letter-spacing:0.14em;text-transform:uppercase;color:#9a938a;">Brand</td>
                  <td style="padding:14px 0;border-bottom:1px solid rgba(44,39,35,0.08);font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;font-size:15px;color:#2c2723;">{{{BRAND}}}</td>
                </tr>
                <tr>
                  <td style="padding:14px 0;border-bottom:1px solid rgba(44,39,35,0.08);font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;font-size:12px;letter-spacing:0.14em;text-transform:uppercase;color:#9a938a;">Presence</td>
                  <td style="padding:14px 0;border-bottom:1px solid rgba(44,39,35,0.08);font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;font-size:15px;color:#2c2723;">{{{PRESENCE}}}</td>
                </tr>
                <tr>
                  <td style="padding:14px 0;border-bottom:1px solid rgba(44,39,35,0.08);font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;font-size:12px;letter-spacing:0.14em;text-transform:uppercase;color:#9a938a;">Project</td>
                  <td style="padding:14px 0;border-bottom:1px solid rgba(44,39,35,0.08);font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;font-size:15px;color:#2c2723;">{{{PROJECT}}}</td>
                </tr>
                <tr>
                  <td style="padding:14px 0;border-bottom:1px solid rgba(44,39,35,0.08);font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;font-size:12px;letter-spacing:0.14em;text-transform:uppercase;color:#9a938a;">Investment</td>
                  <td style="padding:14px 0;border-bottom:1px solid rgba(44,39,35,0.08);font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;font-size:15px;color:#2c2723;">{{{BUDGET}}}</td>
                </tr>
                <tr>
                  <td style="padding:14px 0;border-bottom:1px solid rgba(44,39,35,0.08);font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;font-size:12px;letter-spacing:0.14em;text-transform:uppercase;color:#9a938a;">Timeline</td>
                  <td style="padding:14px 0;border-bottom:1px solid rgba(44,39,35,0.08);font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;font-size:15px;color:#2c2723;">{{{TIMELINE}}}</td>
                </tr>
              </table>
              <p style="margin:24px 0 8px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;font-size:12px;letter-spacing:0.14em;text-transform:uppercase;color:#9a938a;">Their vision</p>
              <p style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:16px;line-height:1.7;color:#2c2723;white-space:pre-wrap;">{{{VISION}}}</p>
            </td>
          </tr>
          <tr>
            <td style="padding:0 32px 28px;">
              <p style="margin:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;font-size:12px;line-height:1.5;color:#9a938a;">Vision · Craft · Convert</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

const text = `New enquiry from {{{NAME}}}

Email: {{{EMAIL}}}
Brand: {{{BRAND}}}
Presence: {{{PRESENCE}}}
Project: {{{PROJECT}}}
Investment: {{{BUDGET}}}
Timeline: {{{TIMELINE}}}

Their vision:
{{{VISION}}}

Reply directly to this email to continue the conversation.`;

const variables = [
  { key: "NAME", type: "string", fallbackValue: "Someone" },
  { key: "EMAIL", type: "string", fallbackValue: "—" },
  { key: "BRAND", type: "string", fallbackValue: "—" },
  { key: "PRESENCE", type: "string", fallbackValue: "—" },
  { key: "PROJECT", type: "string", fallbackValue: "—" },
  { key: "BUDGET", type: "string", fallbackValue: "—" },
  { key: "TIMELINE", type: "string", fallbackValue: "—" },
  { key: "VISION", type: "string", fallbackValue: "—" },
];

const apiKey = process.env.RESEND_API_KEY;
if (!apiKey) {
  console.error("RESEND_API_KEY is missing");
  process.exit(1);
}

const resend = new Resend(apiKey);
const from =
  process.env.RESEND_FROM_EMAIL ??
  "byMotif Studios <contact@bymotifstudios.in>";

const existing = await resend.templates.list({ limit: 100 });
if (existing.error) {
  console.error("List failed:", existing.error);
  process.exit(1);
}

const found = existing.data?.data?.find(
  (template) => template.alias === ALIAS || template.name === "byMotif website enquiry",
);

let templateId = found?.id;

if (templateId) {
  console.log("Updating existing template:", templateId);
  const updated = await resend.templates.update(templateId, {
    name: "byMotif website enquiry",
    alias: ALIAS,
    from,
    subject: "Enquiry from {{{NAME}}}",
    html,
    text,
    variables,
  });
  if (updated.error) {
    console.error("Update failed:", updated.error);
    process.exit(1);
  }
  const published = await resend.templates.publish(templateId);
  if (published.error) {
    console.error("Publish failed:", published.error);
    process.exit(1);
  }
} else {
  console.log("Creating + publishing template…");
  const created = await resend.templates
    .create({
      name: "byMotif website enquiry",
      alias: ALIAS,
      from,
      subject: "Enquiry from {{{NAME}}}",
      html,
      text,
      variables,
    })
    .publish();

  if (created.error) {
    console.error("Create/publish failed:", created.error);
    process.exit(1);
  }

  templateId = created.data?.id;
}

console.log("\nTemplate ready.");
console.log("Add this to .env.local:\n");
console.log(`RESEND_ENQUIRY_TEMPLATE_ID=${templateId}`);
console.log(`\nAlias: ${ALIAS}`);
