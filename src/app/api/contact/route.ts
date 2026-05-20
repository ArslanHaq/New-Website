import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

type ContactPayload = {
  name: string;
  email: string;
  organization: string;
  interest: string;
  message: string;
  companyWebsite?: string;
};

type EmailContent = {
  subject: string;
  text: string;
  html: string;
};

const rateLimit = new Map<string, { count: number; resetAt: number }>();
const WINDOW_MS = 60_000;
const MAX_REQUESTS = 5;

function getIp(request: NextRequest) {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}

function checkRateLimit(ip: string) {
  const now = Date.now();
  const current = rateLimit.get(ip);

  if (!current || current.resetAt < now) {
    rateLimit.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return true;
  }

  if (current.count >= MAX_REQUESTS) {
    return false;
  }

  current.count += 1;
  return true;
}

function readString(input: unknown) {
  return typeof input === "string" ? input.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function sanitizeHeader(value: string) {
  return value.replace(/[\r\n]+/g, " ").trim();
}

function normalizePayload(input: unknown): ContactPayload {
  const source = input && typeof input === "object" ? input : {};
  const record = source as Record<string, unknown>;

  return {
    name: readString(record.name),
    email: readString(record.email).toLowerCase(),
    organization: readString(record.organization),
    interest: readString(record.interest),
    message: readString(record.message),
    companyWebsite: readString(record.companyWebsite),
  };
}

function validatePayload(payload: ContactPayload) {
  if (payload.companyWebsite) {
    return "ok";
  }

  if (payload.name.length < 2 || payload.name.length > 120) {
    return "Please provide a valid name.";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
    return "Please provide a valid email address.";
  }

  if (payload.organization.length > 160) {
    return "Organization is too long.";
  }

  if (payload.interest.length < 2 || payload.interest.length > 80) {
    return "Please select an area of interest.";
  }

  if (payload.message.length < 10 || payload.message.length > 4000) {
    return "Message must be between 10 and 4000 characters.";
  }

  return null;
}

function detailRow(label: string, value: string) {
  return `
    <tr>
      <td style="padding:12px 0;border-bottom:1px solid #E6EDF5;color:#6380A8;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em">${label}</td>
      <td style="padding:12px 0;border-bottom:1px solid #E6EDF5;color:#003A70;font-size:15px;font-weight:700;text-align:right">${escapeHtml(value)}</td>
    </tr>
  `;
}

function renderEmailShell({
  preheader,
  headline,
  intro,
  children,
}: {
  preheader: string;
  headline: string;
  intro: string;
  children: string;
}) {
  return `
    <!doctype html>
    <html>
      <body style="margin:0;background:#F3F8FC;padding:0;font-family:Arial,Helvetica,sans-serif;color:#003A70">
        <div style="display:none;max-height:0;overflow:hidden;opacity:0">${escapeHtml(preheader)}</div>
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#F3F8FC;padding:32px 16px">
          <tr>
            <td align="center">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:640px;overflow:hidden;border-radius:24px;background:#FFFFFF;box-shadow:0 22px 60px rgba(12,45,90,0.12)">
                <tr>
                  <td style="background:linear-gradient(135deg,#003A70 0%,#0067B4 56%,#00CCD6 100%);padding:30px 32px;color:#FFFFFF">
                    <div style="font-size:30px;font-weight:800;letter-spacing:-0.02em;line-height:1">Pherrix</div>
                    <div style="margin-top:12px;width:72px;height:4px;border-radius:999px;background:#EA7B1F"></div>
                    <h1 style="margin:24px 0 0;font-size:30px;line-height:1.18;font-weight:800">${escapeHtml(headline)}</h1>
                    <p style="margin:12px 0 0;color:#EAF6FF;font-size:16px;line-height:1.65">${escapeHtml(intro)}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:30px 32px 34px">
                    ${children}
                    <p style="margin:28px 0 0;color:#6380A8;font-size:13px;line-height:1.7">
                      This email was sent from the Pherrix website contact form.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;
}

function buildAdminEmail(payload: ContactPayload): EmailContent {
  const subject = sanitizeHeader(`Pherrix website inquiry: ${payload.interest}`);
  const lines = [
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Organization: ${payload.organization || "Not provided"}`,
    `Interest: ${payload.interest}`,
    "",
    payload.message,
  ];

  const details = `
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin:0 0 24px">
      ${detailRow("Name", payload.name)}
      ${detailRow("Email", payload.email)}
      ${detailRow("Organization", payload.organization || "Not provided")}
      ${detailRow("Interest", payload.interest)}
    </table>
    <div style="border-left:4px solid #EA7B1F;border-radius:16px;background:#F8FBFF;padding:20px 22px">
      <div style="margin:0 0 10px;color:#EA7B1F;font-size:12px;font-weight:800;text-transform:uppercase;letter-spacing:0.12em">Message</div>
      <div style="white-space:pre-wrap;color:#003A70;font-size:15px;line-height:1.75">${escapeHtml(payload.message)}</div>
    </div>
  `;

  return {
    subject,
    text: lines.join("\n"),
    html: renderEmailShell({
      preheader: `New inquiry from ${payload.name}`,
      headline: "New website inquiry",
      intro: "A visitor submitted the Pherrix contact form.",
      children: details,
    }),
  };
}

function buildSenderCopyEmail(
  payload: ContactPayload,
  contactEmail: string,
): EmailContent {
  const subject = "We received your Pherrix inquiry";
  const firstName = payload.name.split(/\s+/)[0] || "there";
  const lines = [
    `Hi ${firstName},`,
    "",
    "Thank you for contacting Pherrix. We received your inquiry and our team will review it.",
    "",
    "Here is a copy of your submission:",
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Organization: ${payload.organization || "Not provided"}`,
    `Interest: ${payload.interest}`,
    "",
    payload.message,
    "",
    `You can also reach us directly at ${contactEmail}.`,
    "",
    "Pherrix",
  ];

  const details = `
    <p style="margin:0 0 20px;color:#5D789D;font-size:16px;line-height:1.75">
      Hi ${escapeHtml(firstName)}, thank you for contacting Pherrix. We received your inquiry and our team will review it.
    </p>
    <div style="margin:0 0 24px;border-radius:18px;background:linear-gradient(135deg,#FFF6EE,#F3FAFF);padding:22px;border:1px solid #E8EEF5">
      <div style="margin:0 0 14px;color:#EA7B1F;font-size:12px;font-weight:800;text-transform:uppercase;letter-spacing:0.12em">Your submission copy</div>
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
        ${detailRow("Name", payload.name)}
        ${detailRow("Email", payload.email)}
        ${detailRow("Organization", payload.organization || "Not provided")}
        ${detailRow("Interest", payload.interest)}
      </table>
    </div>
    <div style="border-left:4px solid #EA7B1F;border-radius:16px;background:#F8FBFF;padding:20px 22px">
      <div style="margin:0 0 10px;color:#EA7B1F;font-size:12px;font-weight:800;text-transform:uppercase;letter-spacing:0.12em">Message</div>
      <div style="white-space:pre-wrap;color:#003A70;font-size:15px;line-height:1.75">${escapeHtml(payload.message)}</div>
    </div>
    <p style="margin:24px 0 0;color:#5D789D;font-size:15px;line-height:1.7">
      For anything urgent, you can reach us directly at
      <a href="mailto:${escapeHtml(contactEmail)}" style="color:#EA7B1F;font-weight:700;text-decoration:none">${escapeHtml(contactEmail)}</a>.
    </p>
  `;

  return {
    subject,
    text: lines.join("\n"),
    html: renderEmailShell({
      preheader: "A copy of your Pherrix contact form submission.",
      headline: "We received your inquiry",
      intro: "Here is a copy of the message you sent to Pherrix.",
      children: details,
    }),
  };
}

async function sendWithSmtp(payload: ContactPayload) {
  const { default: nodemailer } = await import("nodemailer");
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASSWORD;
  const secure = process.env.SMTP_SECURE === "true";
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;
  const replyTo = process.env.CONTACT_REPLY_TO_EMAIL || to;

  if (!host || !to || !from) {
    throw new Error("SMTP email is not configured.");
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: user && pass ? { user, pass } : undefined,
  });
  const adminEmail = buildAdminEmail(payload);
  const senderCopyEmail = buildSenderCopyEmail(payload, to);

  await transporter.sendMail({
    from,
    to,
    replyTo: payload.email,
    subject: adminEmail.subject,
    text: adminEmail.text,
    html: adminEmail.html,
  });

  await transporter.sendMail({
    from,
    to: payload.email,
    replyTo,
    subject: senderCopyEmail.subject,
    text: senderCopyEmail.text,
    html: senderCopyEmail.html,
  });
}

async function sendWithResend(payload: ContactPayload) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL || process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !from || !to) {
    throw new Error("Resend email is not configured.");
  }

  const replyTo = process.env.CONTACT_REPLY_TO_EMAIL || to;

  async function sendEmail({
    recipient,
    replyToEmail,
    email,
  }: {
    recipient: string;
    replyToEmail: string;
    email: EmailContent;
  }) {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: recipient,
        reply_to: replyToEmail,
        subject: email.subject,
        text: email.text,
        html: email.html,
      }),
    });

    if (!response.ok) {
      throw new Error("Resend failed to send the email.");
    }
  }

  await sendEmail({
    recipient: to,
    replyToEmail: payload.email,
    email: buildAdminEmail(payload),
  });
  await sendEmail({
    recipient: payload.email,
    replyToEmail: replyTo,
    email: buildSenderCopyEmail(payload, to),
  });
}

async function sendConsole(payload: ContactPayload) {
  const to = process.env.CONTACT_TO_EMAIL || "Pherrix";
  const adminEmail = buildAdminEmail(payload);
  const senderCopyEmail = buildSenderCopyEmail(payload, to);

  console.info(
    "[contact-form]",
    JSON.stringify(
      {
        admin: {
          to,
          subject: adminEmail.subject,
          text: adminEmail.text,
        },
        senderCopy: {
          to: payload.email,
          subject: senderCopyEmail.subject,
          text: senderCopyEmail.text,
        },
      },
      null,
      2,
    ),
  );
}

async function deliverEmail(payload: ContactPayload) {
  const provider = (process.env.EMAIL_PROVIDER || "console").toLowerCase();

  if (provider === "smtp") {
    await sendWithSmtp(payload);
    return;
  }

  if (provider === "resend") {
    await sendWithResend(payload);
    return;
  }

  await sendConsole(payload);
}

export async function POST(request: NextRequest) {
  const ip = getIp(request);
  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { message: "Too many requests. Please try again in a minute." },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { message: "Invalid request body." },
      { status: 400 },
    );
  }

  const payload = normalizePayload(body);
  const validationError = validatePayload(payload);

  if (validationError === "ok") {
    return NextResponse.json({
      message: "Thank you. Your inquiry has been received.",
    });
  }

  if (validationError) {
    return NextResponse.json({ message: validationError }, { status: 400 });
  }

  try {
    await deliverEmail(payload);
    return NextResponse.json({
      message: "Thank you. Your inquiry has been sent. A copy has also been emailed to you.",
    });
  } catch (error) {
    console.error("[contact-form]", error);
    return NextResponse.json(
      { message: "Unable to send your inquiry right now." },
      { status: 500 },
    );
  }
}
