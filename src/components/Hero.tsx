"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { siteConfig } from "@/lib/data";
import { useLang } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLang();
  const roles = t.hero.roles as readonly string[];
  const { scrollY } = useScroll();
  const glowY = useTransform(scrollY, [0, 600], [0, -80]);
  const contentOpacity = useTransform(scrollY, [0, 400], [1, 0.25]);

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

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
      timeout = setTimeout(() => setCharIndex((c) => c + 1), 50);
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex((c) => c - 1), 28);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }

    setDisplayed(current.slice(0, charIndex));
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex, roles]);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Engineering grid overlay */}
      <div className="absolute inset-0 engineering-grid pointer-events-none" />

      {/* Ambient glow */}
      <motion.div style={{ y: glowY }} className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[500px] rounded-full bg-accent/[0.06] blur-[160px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[350px] rounded-full bg-accent/[0.04] blur-[120px]" />
        <div className="absolute top-1/2 right-0 w-[300px] h-[300px] rounded-full bg-teal/[0.03] blur-[100px]" />
      </motion.div>

      {/* Top-right system readout */}
      <div className="absolute top-24 right-8 lg:right-16 hidden md:flex flex-col gap-0.5 tech-readout text-right">
        <span>SYS ─ ONLINE</span>
        <span>LOC ─ -12.046°, -77.043°</span>
        <span>REV ─ 2026.03.{String(new Date().getDate()).padStart(2, "0")}</span>
        <span>STK ─ HW / AI / FW</span>
      </div>

      {/* Bottom-left coordinates */}
      <div className="absolute bottom-20 left-8 lg:left-16 hidden md:flex flex-col gap-0.5 tech-readout">
        <span>LIMA, PERÚ</span>
        <span>UTC -5</span>
      </div>

      <motion.div style={{ opacity: contentOpacity }} className="relative z-10 max-w-6xl mx-auto section-padding pt-32 pb-24">
        <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-20">

          {/* ── Photo column — top on mobile, right on desktop ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="order-first lg:order-last shrink-0 flex justify-center lg:justify-end"
          >
            <div className="relative p-3 lg:p-4">
              {/* Corner brackets */}
              <div className="absolute top-0 left-0 w-5 h-5 lg:w-6 lg:h-6 border-t-2 border-l-2 border-accent/70" />
              <div className="absolute top-0 right-0 w-5 h-5 lg:w-6 lg:h-6 border-t-2 border-r-2 border-accent/70" />
              <div className="absolute bottom-0 left-0 w-5 h-5 lg:w-6 lg:h-6 border-b-2 border-l-2 border-accent/70" />
              <div className="absolute bottom-0 right-0 w-5 h-5 lg:w-6 lg:h-6 border-b-2 border-r-2 border-accent/70" />

              {/* Photo */}
              <div className="relative w-44 sm:w-52 lg:w-56 xl:w-64 aspect-[3/4] overflow-hidden">
                <Image
                  src="/profile.jpg"
                  alt={siteConfig.name}
                  fill
                  className="object-cover object-top"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-warm-950/50 via-transparent to-transparent" />
              </div>

              {/* Label beneath photo */}
              <div className="mt-2 lg:mt-3 text-center tech-readout">
                <span>{siteConfig.fullName.toUpperCase()}</span>
              </div>
            </div>
          </motion.div>

          {/* ── Left column: text ── */}
          <div className="flex-1 max-w-2xl">

            {/* Available badge */}
            {siteConfig.availableForWork && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-sm border border-accent/25 bg-accent/5 text-xs font-jetbrains text-accent mb-8 lg:mb-10 tracking-wider"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                {t.hero.available}
              </motion.div>
            )}

            {/* Name — Syne display font */}
            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.1 }}
              className="font-display font-extrabold tracking-tight leading-[0.95] mb-6"
            >
              <span className="block text-[52px] sm:text-[68px] md:text-[84px] lg:text-[72px] xl:text-[88px] text-slate-100">Luis</span>
              <span className="block text-[52px] sm:text-[68px] md:text-[84px] lg:text-[72px] xl:text-[88px] text-gradient">Mendez.</span>
            </motion.h1>

            {/* Typewriter role */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="min-h-[2.25rem] flex items-center mb-6"
            >
              <span className="font-jetbrains text-sm md:text-base text-accent/80 tracking-[0.12em] uppercase">
                {displayed}
                <span className="inline-block w-0.5 h-4 bg-accent ml-0.5 animate-pulse align-middle" />
              </span>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="text-base md:text-lg text-slate-400 max-w-lg leading-relaxed mb-10 font-light"
            >
              {t.hero.tagline}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-3"
            >
              <a
                href="#projects"
                className="px-6 py-2.5 rounded-sm bg-accent text-warm-950 font-jetbrains font-medium text-xs tracking-[0.12em] uppercase hover:bg-accent-dark transition-all duration-200 shadow-lg shadow-accent/25"
              >
                {t.hero.cta1}
              </a>
              <a
                href="#contact"
                className="px-6 py-2.5 rounded-sm border border-accent/30 text-accent font-jetbrains font-medium text-xs tracking-[0.12em] uppercase hover:bg-accent/10 transition-all duration-200"
              >
                {t.hero.cta2}
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-sm border border-slate-700 text-slate-400 font-jetbrains font-medium text-xs tracking-[0.12em] uppercase hover:border-teal/40 hover:text-teal transition-all duration-200"
              >
                LinkedIn ↗
              </a>
            </motion.div>

          </div>

        </div>
      </motion.div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-25">
        <span className="font-jetbrains text-[9px] text-slate-500 tracking-[0.25em] uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-accent to-transparent" />
      </div>
    </section>
  );
}
