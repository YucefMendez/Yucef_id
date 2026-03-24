"use client";

import { motion } from "framer-motion";
import { experience, education } from "@/lib/data";
import { useLang } from "@/context/LanguageContext";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function Experience() {
  const { t } = useLang();
  const { experience: exp } = t;

  return (
    <section id="experience" className="py-28 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent via-accent/25 to-transparent" />

      <div className="max-w-6xl mx-auto section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold text-accent mb-3 tracking-[0.2em] uppercase">{exp.section}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100">
            {exp.heading} <span className="text-gradient">{exp.headingGradient}</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Work experience */}
          <div>
            <h3 className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-[0.18em] mb-6 flex-wrap">
              <svg className="w-4 h-4 text-accent shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="7" width="20" height="14" rx="2" />
                <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
              </svg>
              {exp.workLabel}
            </h3>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="relative pl-6 border-l border-accent/20 space-y-7"
            >
              {experience.map((item, i) => (
                <motion.div key={item.id} variants={fadeUp} className="relative">
                  <div className="absolute -left-[25px] top-2 w-3 h-3 rounded-full bg-accent/30 border-2 border-accent" />
                  <div className="glass rounded-xl p-5 hover:border-accent/25 transition-colors">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div>
                        <h4 className="font-semibold text-slate-100 text-sm">{item.role}</h4>
                        <p className="text-sm text-accent font-medium">{item.company}</p>
                      </div>
                      <div className="text-right shrink-0">
                        <p className="text-xs text-slate-500 font-mono">{item.period}</p>
                        <p className="text-xs text-slate-600">{item.location}</p>
                      </div>
                    </div>
                    <ul className="space-y-1.5 mt-3">
                      {(exp.items[i]?.description ?? item.description).map((line, j) => (
                        <li key={j} className="text-xs text-slate-400 flex gap-2 leading-relaxed">
                          <span className="text-accent/50 shrink-0 mt-0.5">›</span>
                          {line}
                        </li>
                      ))}
                    </ul>
                    {item.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-white/5">
                        {item.tags.map((tag) => (
                          <span key={tag} className="px-2 py-0.5 text-[10px] rounded-full bg-accent/5 text-accent/60 border border-accent/10">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Education */}
          <div>
            <h3 className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-[0.18em] mb-6 flex-wrap">
              <svg className="w-4 h-4 text-accent shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
              </svg>
              {exp.educationLabel}
            </h3>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="relative pl-6 border-l border-accent/20 space-y-7"
            >
              {education.map((item, i) => (
                <motion.div key={item.id} variants={fadeUp} className="relative">
                  <div className="absolute -left-[25px] top-2 w-3 h-3 rounded-full bg-accent/30 border-2 border-accent" />
                  <div className="glass rounded-xl p-5 hover:border-accent/25 transition-colors">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div>
                        <h4 className="font-semibold text-slate-100 text-sm">
                          {exp.education[i]?.degree ?? item.degree}
                        </h4>
                        <p className="text-sm text-accent font-medium">{item.institution}</p>
                      </div>
                      <p className="text-xs text-slate-500 font-mono shrink-0">{item.period}</p>
                    </div>
                    <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                      {exp.education[i]?.description ?? item.description}
                    </p>
                    {item.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-white/5">
                        {item.tags.map((tag) => (
                          <span key={tag} className="px-2 py-0.5 text-[10px] rounded-full bg-accent/5 text-accent/60 border border-accent/10">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 glass rounded-xl p-5 flex items-center justify-between gap-4"
            >
              <div>
                <p className="text-sm font-medium text-slate-200">{exp.cvTeaser}</p>
                <p className="text-xs text-slate-500 mt-0.5">{exp.cvSub}</p>
              </div>
              <a
                href="#"
                className="shrink-0 px-4 py-2 rounded-full text-sm font-medium bg-accent/10 text-accent border border-accent/20 hover:bg-accent/20 transition-all"
              >
                {exp.cvBtn}
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
