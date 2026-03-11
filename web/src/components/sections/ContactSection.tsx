"use client";

import Reveal from "@/components/Reveal";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="section bg-gradient-to-br from-purple-100 via-fuchsia-100 to-white"
    >
      <div className="container">
        <div className="section-title">
          <h2>Get In Touch</h2>
          <div className="underline" />
        </div>

        <Reveal className="mt-14 grid gap-10 lg:grid-cols-2 items-start">
          {/* LEFT */}
          <div>
            <h3 className="text-slate-900">Let&apos;s Connect!</h3>

            <p className="mt-4 max-w-xl">
              I&apos;m always interested in hearing about new projects and opportunities.
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>

            <div className="mt-8 space-y-6">
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

          {/* RIGHT FORM */}
          <div className="card p-7 md:p-9">
            <form className="space-y-5">
              <Field label="Name" placeholder="Your name" />
              <Field label="Email" type="email" placeholder="you@example.com" />
              <Field textarea label="Message" placeholder="Tell me what you're building..." />

              <button
                type="submit"
                className="w-full rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3.5 text-sm md:text-base font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg inline-flex items-center justify-center gap-2"
              >
                <Send className="h-4 w-4" />
                Send Message
              </button>
            </form>
          </div>
        </Reveal>
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
    <div className="flex items-center gap-4">
      <div className={`h-14 w-14 rounded-2xl ${bg} flex items-center justify-center shadow-md`}>
        {icon}
      </div>
      <div>
        <p className="text-xs font-semibold text-slate-600">{title}</p>
        <p className="text-sm md:text-base font-semibold text-slate-900">{value}</p>
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
      <span className="mb-2 block text-xs font-semibold text-slate-700">{label}</span>

      {textarea ? (
        <textarea
          rows={6}
          placeholder={placeholder}
          className="w-full resize-none rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-purple-400 focus:ring-4 focus:ring-purple-100"
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-purple-400 focus:ring-4 focus:ring-purple-100"
        />
      )}
    </label>
  );
}