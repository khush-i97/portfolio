"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500 via-purple-600 to-blue-500" />

      {/* Pink glow blob */}
      <div className="absolute -top-40 -left-40 w-[520px] h-[520px] bg-pink-500 rounded-full blur-[160px] opacity-40" />

      {/* Blue glow blob */}
      <div className="absolute bottom-0 -right-40 w-[520px] h-[520px] bg-blue-500 rounded-full blur-[160px] opacity-40" />

      {/* Soft center glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.22),transparent_55%)]" />

      {/* Slight vignette */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Content */}
      <motion.div
        className="relative z-10 px-6"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold text-white"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.7, ease: "easeOut" }}
        >
          Data Engineer
        </motion.h1>

        <motion.p
          className="mt-6 text-xl md:text-2xl text-white/95"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.7, ease: "easeOut" }}
        >
          Turning Data into{" "}
          <span className="text-yellow-300 font-semibold">Insights</span>
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col sm:flex-row gap-6 justify-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
        >
          <a
            href="#contact"
            className="px-8 py-3 rounded-full border border-white/80 text-white font-medium hover:bg-white hover:text-purple-700 transition shadow-sm"
          >
            Get in Touch
          </a>

          <a
            href="#projects"
            className="px-8 py-3 rounded-full border border-white/80 text-white font-medium hover:bg-white hover:text-purple-700 transition shadow-sm"
          >
            View Projects
          </a>
        </motion.div>

        <motion.div
          className="mt-10 flex justify-center gap-6 text-white"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.28, duration: 0.7, ease: "easeOut" }}
        >
          <a
            href="https://github.com/khush-i97"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="p-2 rounded-full hover:bg-white/10 transition"
          >
            <Github className="h-6 w-6" />
          </a>

          <a
            href="https://www.linkedin.com/in/khushigangrade/"
            aria-label="LinkedIn"
            className="p-2 rounded-full hover:bg-white/10 transition"
          >
            <Linkedin className="h-6 w-6" />
          </a>

          <a
            href="mailto:khushigangradeus@gmail.com"
            aria-label="Email"
            className="p-2 rounded-full hover:bg-white/10 transition"
          >
            <Mail className="h-6 w-6" />
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="h-6 w-6" />
      </motion.a>
    </section>
  );
}