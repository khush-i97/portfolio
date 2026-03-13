import { NextResponse } from "next/server";
import { resend } from "@/lib/resend";
import { requireEnv } from "@/lib/env";

type ContactPayload = {
  name: string;
  email: string;
  message: string;
  company?: string; // honeypot for bots
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  try {
    const { name, email, message, company }: ContactPayload = await req.json();

    // Honeypot: bots often fill hidden fields
    if (company && company.trim().length > 0) {
      return NextResponse.json({ ok: true });
    }

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { ok: false, error: "Please fill in all fields." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { ok: false, error: "Please enter a valid email." },
        { status: 400 }
      );
    }

    const to = requireEnv("CONTACT_TO_EMAIL");
    const from = requireEnv("CONTACT_FROM_EMAIL");

    // 1) Email to you
    const toYou = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: `Portfolio contact: ${name}`,
      html: `
        <div style="font-family:ui-sans-serif,system-ui">
          <h2>New contact message</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Message:</strong></p>
          <pre style="white-space:pre-wrap;line-height:1.4">${escapeHtml(message)}</pre>
        </div>
      `,
    });

    if (toYou.error) {
      console.error("Resend error (toYou):", toYou.error);
      return NextResponse.json(
        { ok: false, error: toYou.error.message || "Failed to send message." },
        { status: 500 }
      );
    }

    // 2) Copy to sender
    const copy = await resend.emails.send({
      from,
      to: [email],
      subject: "Copy of your message",
      html: `
        <div style="font-family:ui-sans-serif,system-ui">
          <p>Hi ${escapeHtml(name)},</p>
          <p>Thanks for reaching out! Here's a copy of your message:</p>
          <hr/>
          <pre style="white-space:pre-wrap;line-height:1.4">${escapeHtml(message)}</pre>
          <hr/>
          <p>I’ll get back to you soon.</p>
        </div>
      `,
    });

    if (copy.error) {
      console.error("Resend error (copy):", copy.error);
      // still allow success if the first email sent
      return NextResponse.json({ ok: true, warning: "Copy failed." });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json(
      { ok: false, error: "Unexpected error. Please try again." },
      { status: 500 }
    );
  }
}

function escapeHtml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}