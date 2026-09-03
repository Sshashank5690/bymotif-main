/**
 * Resend template: byMotif website enquiry notification.
 * Variables use {{{NAME}}} syntax required by Resend Templates.
 */
export const ENQUIRY_TEMPLATE_ALIAS = "bymotif-website-enquiry";

export const enquiryTemplateHtml = `<!DOCTYPE html>
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
              <p style="margin:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;font-size:12px;line-height:1.5;color:#9a938a;">
                Vision · Craft · Convert
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

export const enquiryTemplateText = `New enquiry from {{{NAME}}}

Email: {{{EMAIL}}}
Brand: {{{BRAND}}}
Presence: {{{PRESENCE}}}
Project: {{{PROJECT}}}
Investment: {{{BUDGET}}}
Timeline: {{{TIMELINE}}}

Their vision:
{{{VISION}}}

Reply directly to this email to continue the conversation.`;

export const enquiryTemplateVariables = [
  { key: "NAME", type: "string" as const, fallbackValue: "Someone" },
  { key: "EMAIL", type: "string" as const, fallbackValue: "—" },
  { key: "BRAND", type: "string" as const, fallbackValue: "—" },
  { key: "PRESENCE", type: "string" as const, fallbackValue: "—" },
  { key: "PROJECT", type: "string" as const, fallbackValue: "—" },
  { key: "BUDGET", type: "string" as const, fallbackValue: "—" },
  { key: "TIMELINE", type: "string" as const, fallbackValue: "—" },
  { key: "VISION", type: "string" as const, fallbackValue: "—" },
];
