"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/data";
import { useLang } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLang();
  const roles = t.hero.roles as readonly string[];

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  // Reset typewriter when language changes
  useEffect(() => {
    setRoleIndex(0);
    setCharIndex(0);
    setDeleting(false);
    setDisplayed("");
  }, [roles]);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => setCharIndex((c) => c + 1), 55);
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex((c) => c - 1), 30);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }

    setDisplayed(current.slice(0, charIndex));
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex, roles]);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Warm ambient glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-accent/[0.07] blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-accent/[0.04] blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto section-padding pt-32 pb-24">
        <div className="max-w-3xl">

          {/* Available badge */}
          {siteConfig.availableForWork && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 text-xs font-medium text-accent mb-10"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              {t.hero.available}
            </motion.div>
          )}

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-6xl md:text-8xl font-bold tracking-tight leading-[1.05] mb-6"
          >
            <span className="block text-slate-100">Luis</span>
            <span className="block text-gradient">Mendez.</span>
          </motion.h1>

          {/* Typewriter role */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="h-9 flex items-center mb-6"
          >
            <span className="text-xl md:text-2xl text-slate-300 font-light tracking-wide">
              {displayed}
              <span className="inline-block w-0.5 h-5 bg-accent ml-0.5 animate-pulse align-middle" />
            </span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="text-lg text-slate-400 max-w-lg leading-relaxed mb-10"
          >
            {t.hero.tagline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="px-7 py-3 rounded-full bg-accent text-white font-semibold text-sm hover:bg-accent-dark transition-all duration-200 shadow-lg shadow-accent/20"
            >
              {t.hero.cta1}
            </a>
            <a
              href="#contact"
              className="px-7 py-3 rounded-full border border-slate-600 text-slate-300 font-semibold text-sm hover:border-accent hover:text-accent transition-all duration-200"
            >
              {t.hero.cta2}
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 rounded-full border border-slate-600 text-slate-300 font-semibold text-sm hover:border-accent hover:text-accent transition-all duration-200"
            >
              LinkedIn ↗
            </a>
          </motion.div>

          {/* Location */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-10 text-xs text-slate-600 flex items-center gap-1.5"
          >
            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {siteConfig.location}
          </motion.p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <span className="text-[10px] text-slate-500 tracking-[0.2em] uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-accent to-transparent" />
      </div>
    </section>
  );
}
