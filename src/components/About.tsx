"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/data";
import { useLang } from "@/context/LanguageContext";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

export default function About() {
  const { t } = useLang();
  const { about } = t;

  return (
    <section id="about" className="py-28 relative">
      {/* Circuit divider top */}
      <div className="max-w-6xl mx-auto section-padding mb-16">
        <div className="circuit-divider">
          <span>{about.section}</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto section-padding">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">

          {/* ── Text column ── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          >
            <motion.span variants={fadeUp} className="circuit-label block mb-4">
              {about.section}
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="font-display font-bold text-4xl md:text-5xl text-slate-100 mb-8 leading-[1.1]"
            >
              {about.heading}{" "}
              <span className="text-gradient">{about.headingGradient}</span>
            </motion.h2>

            <div className="space-y-5">
              {about.paragraphs.map((para, i) => (
                <motion.p key={i} variants={fadeUp} className="text-slate-400 leading-relaxed text-sm">
                  {para}
                </motion.p>
              ))}
            </div>

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-accent/10 text-accent text-xs font-jetbrains font-medium border border-accent/20 hover:bg-accent/20 tracking-wider uppercase transition-all"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-10 7L2 7" />
                </svg>
                {about.emailBtn}
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-white/5 text-slate-300 text-xs font-jetbrains font-medium border border-white/10 hover:border-teal/30 hover:text-teal tracking-wider uppercase transition-all"
              >
                LinkedIn ↗
              </a>
            </motion.div>

            {/* Quote */}
            <motion.blockquote
              variants={fadeUp}
              className="mt-10 border-l-2 border-accent/40 pl-5"
            >
              <p className="text-sm text-slate-400 leading-relaxed italic">
                &ldquo;{about.quote}&rdquo;
              </p>
              <cite className="mt-2 block text-xs font-jetbrains text-accent/70 not-italic tracking-wider">
                — Luis Mendez
              </cite>
            </motion.blockquote>
          </motion.div>

          {/* ── Right: photo + spec stats ── */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            {/* Profile photo in corner frame */}
            <div className="relative p-3 self-center lg:self-start">
              <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-accent/60" />
              <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-accent/60" />
              <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-accent/60" />
              <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-accent/60" />
              <div className="relative w-full max-w-xs aspect-[3/4] overflow-hidden">
                <Image
                  src="/profile.jpg"
                  alt={siteConfig.name}
                  fill
                  className="object-cover object-top"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-warm-950/40 to-transparent" />
              </div>
            </div>

            {/* Stats as engineering parameters */}
            <div className="glass rounded-sm p-1 overflow-hidden">
              {about.stats.map(({ value, label }, i) => (
                <div
                  key={label}
                  className={`flex items-center justify-between px-5 py-4 ${
                    i < about.stats.length - 1 ? "border-b border-white/5" : ""
                  }`}
                >
                  <span className="font-jetbrains text-[11px] text-slate-500 tracking-wider uppercase">{label}</span>
                  <span className="font-display font-bold text-2xl text-accent">{value}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
