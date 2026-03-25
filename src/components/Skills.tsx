"use client";

import type { ReactElement } from "react";
import { motion } from "framer-motion";
import { skillCategories } from "@/lib/data";
import { useLang } from "@/context/LanguageContext";

const iconMap: Record<string, ReactElement> = {
  code: (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  cpu: (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
      <line x1="9" y1="1" x2="9" y2="4" /><line x1="15" y1="1" x2="15" y2="4" />
      <line x1="9" y1="20" x2="9" y2="23" /><line x1="15" y1="20" x2="15" y2="23" />
      <line x1="20" y1="9" x2="23" y2="9" /><line x1="20" y1="14" x2="23" y2="14" />
      <line x1="1" y1="9" x2="4" y2="9" /><line x1="1" y1="14" x2="4" y2="14" />
    </svg>
  ),
  cog: (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
    </svg>
  ),
  activity: (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  ),
  brain: (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.44-4.66z" />
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.44-4.66z" />
    </svg>
  ),
  tool: (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
    </svg>
  ),
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};
const card = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Skills() {
  const { t } = useLang();
  const { skills } = t;

  return (
    <section id="skills" className="py-28 relative">
      {/* Circuit divider top */}
      <div className="max-w-6xl mx-auto section-padding mb-16">
        <div className="circuit-divider">
          <span>{skills.section}</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="circuit-label block mb-4">{skills.section}</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-slate-100 leading-[1.1]">
            {skills.heading}{" "}
            <span className="text-gradient">{skills.headingGradient}</span>
          </h2>
          <p className="mt-4 text-slate-500 max-w-lg text-sm leading-relaxed font-jetbrains">
            {skills.subtitle}
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-accent/8 border border-accent/8 rounded-sm overflow-hidden"
        >
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.icon}
              variants={card}
              className="glass flex flex-col gap-4 p-6 group hover:bg-accent/[0.04] transition-colors duration-300 cursor-default"
            >
              {/* Module header */}
              <div className="flex items-center gap-3 pb-3 border-b border-white/5">
                <div className="w-7 h-7 shrink-0 rounded-sm bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent/15 transition-colors">
                  {iconMap[cat.icon]}
                </div>
                <div>
                  <p className="font-jetbrains text-[9px] text-accent/50 tracking-[0.2em] uppercase mb-0.5">
                    MODULE_{String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="font-display font-semibold text-slate-200 text-sm leading-none">
                    {skills.categories[i]}
                  </h3>
                </div>
              </div>

              {/* Skill tags */}
              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((skill) => (
                  <span key={skill} className="tech-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
