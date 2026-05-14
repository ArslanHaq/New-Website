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

function buildEmail(payload: ContactPayload) {
  const subject = `Pherrix website inquiry: ${payload.interest}`;
  const lines = [
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Organization: ${payload.organization || "Not provided"}`,
    `Interest: ${payload.interest}`,
    "",
    payload.message,
  ];

  const html = `
    <div style="font-family:Arial,sans-serif;color:#0C2D5A;line-height:1.55">
      <h2 style="margin:0 0 16px">New Pherrix website inquiry</h2>
      <p><strong>Name:</strong> ${escapeHtml(payload.name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
      <p><strong>Organization:</strong> ${escapeHtml(payload.organization || "Not provided")}</p>
      <p><strong>Interest:</strong> ${escapeHtml(payload.interest)}</p>
      <hr style="border:none;border-top:1px solid #E0E8F0;margin:20px 0" />
      <p style="white-space:pre-wrap">${escapeHtml(payload.message)}</p>
    </div>
  `;

  return {
    subject,
    text: lines.join("\n"),
    html,
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

  if (!host || !to || !from) {
    throw new Error("SMTP email is not configured.");
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: user && pass ? { user, pass } : undefined,
  });
  const email = buildEmail(payload);

  await transporter.sendMail({
    from,
    to,
    replyTo: payload.email,
    subject: email.subject,
    text: email.text,
    html: email.html,
  });
}

async function sendWithResend(payload: ContactPayload) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL || process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !from || !to) {
    throw new Error("Resend email is not configured.");
  }

  const email = buildEmail(payload);
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to,
      reply_to: payload.email,
      subject: email.subject,
      text: email.text,
      html: email.html,
    }),
  });

  if (!response.ok) {
    throw new Error("Resend failed to send the email.");
  }
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

  const email = buildEmail(payload);
  console.info("[contact-form]", email.subject, email.text);
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
      message: "Thank you. Your inquiry has been sent.",
    });
  } catch (error) {
    console.error("[contact-form]", error);
    return NextResponse.json(
      { message: "Unable to send your inquiry right now." },
      { status: 500 },
    );
  }
}
