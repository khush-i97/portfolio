"use client";

import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 relative px-6 py-24 bg-gradient-to-br from-purple-100 via-fuchsia-100 to-white"
    >
      <div className="mx-auto max-w-6xl">
        {/* Title */}
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-fuchsia-600">Get In Touch</h2>
          <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-fuchsia-600" />
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2 items-start">
          {/* LEFT */}
          <div>
            <h3 className="text-4xl font-extrabold text-slate-900">
              Let&apos;s Connect!
            </h3>

            <p className="mt-4 max-w-xl text-lg leading-relaxed text-slate-600">
              I&apos;m always interested in hearing about new projects and opportunities.
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>

            <div className="mt-10 space-y-6">
              <ContactRow
                icon={<Mail className="h-6 w-6 text-white" />}
                title="Email"
                value="khushigangradeus@gmail.com"
                bg="bg-gradient-to-br from-purple-600 to-fuchsia-500"
              />
              <ContactRow
                icon={<Phone className="h-6 w-6 text-white" />}
                title="Phone"
                value="+1 (480) 876-3921"
                bg="bg-gradient-to-br from-fuchsia-600 to-pink-500"
              />
              <ContactRow
                icon={<MapPin className="h-6 w-6 text-white" />}
                title="Location"
                value="Arizona, USA"
                bg="bg-gradient-to-br from-blue-600 to-cyan-500"
              />
            </div>
          </div>

          {/* RIGHT (FORM) */}
          <div className="rounded-3xl bg-white/80 p-10 shadow-xl ring-1 ring-black/5 backdrop-blur-sm">
            <form className="space-y-6">
              <Field label="Name" placeholder="Your name" />
              <Field label="Email" type="email" placeholder="you@example.com" />
              <Field
                textarea
                label="Message"
                placeholder="Tell me what you're building..."
              />

              <button
                type="submit"
                className="w-full rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-4 text-base font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon,
  title,
  value,
  bg,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  bg: string;
}) {
  return (
    <div className="flex items-center gap-5">
      {/* Icon tile like Figma */}
      <div
        className={`h-14 w-14 rounded-2xl ${bg} flex items-center justify-center shadow-md`}
      >
        {icon}
      </div>

      <div>
        <p className="text-sm font-semibold text-slate-600">{title}</p>
        <p className="text-base font-semibold text-slate-900">{value}</p>
      </div>
    </div>
  );
}

function Field({
  label,
  type = "text",
  placeholder,
  textarea,
}: {
  label: string;
  type?: string;
  placeholder?: string;
  textarea?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-slate-700">
        {label}
      </span>

      {textarea ? (
        <textarea
          rows={6}
          placeholder={placeholder}
          className="w-full resize-none rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-purple-400 focus:ring-4 focus:ring-purple-100"
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-purple-400 focus:ring-4 focus:ring-purple-100"
        />
      )}
    </label>
  );
}