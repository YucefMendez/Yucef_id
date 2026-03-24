"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/data";
import { useLang } from "@/context/LanguageContext";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

export default function About() {
  const { t } = useLang();
  const { about } = t;

  return (
    <section id="about" className="py-28 relative">
      <div className="max-w-6xl mx-auto section-padding">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Text column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          >
            <motion.p variants={fadeUp} className="text-xs font-semibold text-accent mb-3 tracking-[0.2em] uppercase">
              {about.section}
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-slate-100 mb-8 leading-snug">
              {about.heading} <span className="text-gradient">{about.headingGradient}</span>
            </motion.h2>
            <div className="space-y-5">
              {about.paragraphs.map((para, i) => (
                <motion.p key={i} variants={fadeUp} className="text-slate-400 leading-relaxed">
                  {para}
                </motion.p>
              ))}
            </div>

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent/10 text-accent text-sm font-medium border border-accent/20 hover:bg-accent/20 transition-all"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-10 7L2 7" />
                </svg>
                {about.emailBtn}
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 text-slate-300 text-sm font-medium border border-white/10 hover:border-accent/30 hover:text-accent transition-all"
              >
                LinkedIn ↗
              </a>
            </motion.div>
          </motion.div>

          {/* Photo + stats column */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col gap-6 items-center"
          >
            {/* Profile photo */}
            <div className="relative w-full max-w-xs aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-accent/20">
              <Image
                src="/profile.jpg"
                alt={siteConfig.name}
                fill
                className="object-cover object-top"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-warm-950/30 to-transparent" />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 w-full max-w-xs">
              {about.stats.map(({ value, label }) => (
                <div key={label} className="glass glass-hover rounded-xl p-4 text-center">
                  <div className="text-xl font-bold text-accent mb-0.5">{value}</div>
                  <div className="text-[10px] text-slate-500 font-medium leading-tight break-words hyphens-auto">{label}</div>
                </div>
              ))}
            </div>

            {/* Quote */}
            <div className="glass rounded-xl p-5 w-full max-w-xs">
              <p className="text-sm text-slate-400 leading-relaxed italic">
                &ldquo;{about.quote}&rdquo;
              </p>
              <p className="mt-2 text-xs text-accent font-medium">— Luis Mendez</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
