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

    // Send contact notification to portfolio owner
    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: `Portfolio contact: ${name}`,
      html: `
        <div style="font-family:ui-sans-serif,system-ui;max-width:600px;margin:0 auto">
          <h2 style="color:#9333ea">New Contact Message</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
          <p><strong>Message:</strong></p>
          <pre style="white-space:pre-wrap;line-height:1.6;background:#f5f5f5;padding:12px;border-radius:6px">${escapeHtml(message)}</pre>
          <p style="color:#888;font-size:12px">Sent via your portfolio contact form. Reply directly to this email to respond to ${escapeHtml(name)}.</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { ok: false, error: error.message || "Failed to send message." },
        { status: 500 }
      );
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