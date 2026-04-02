"use client";

import { motion } from "framer-motion";
import { experience, education } from "@/lib/data";
import { useLang } from "@/context/LanguageContext";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeInOut" } },
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
      {/* Circuit divider top */}
      <div className="max-w-6xl mx-auto section-padding mb-16">
        <div className="circuit-divider">
          <span>{exp.section}</span>
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
          <span className="circuit-label block mb-4">{exp.section}</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-slate-100 leading-[1.1]">
            {exp.heading}{" "}
            <span className="text-gradient">{exp.headingGradient}</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14">

          {/* ── Work Experience ── */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="circuit-node active" />
              <h3 className="font-jetbrains text-[10px] text-slate-500 uppercase tracking-[0.22em]">
                {exp.workLabel}
              </h3>
            </div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="relative pl-7"
            >
              {/* Vertical circuit trace */}
              <div className="absolute left-[4px] top-2 bottom-2 w-px circuit-line" />

              <div className="space-y-6">
                {experience.map((item, i) => (
                  <motion.div key={item.id} variants={fadeUp} className="relative">
                    {/* Circuit node */}
                    <div className="absolute -left-[28px] top-3 circuit-node" />

                    <div className="glass rounded-sm p-5 hover:border-accent/20 transition-colors">
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div>
                          <h4 className="font-display font-semibold text-slate-100 text-sm mb-0.5">
                            {item.role}
                          </h4>
                          <p className="font-jetbrains text-xs text-accent tracking-wider">
                            {item.company}
                          </p>
                        </div>
                        <div className="text-right shrink-0">
                          <p className="font-jetbrains text-[10px] text-slate-500 tracking-wider">{item.period}</p>
                          <p className="font-jetbrains text-[10px] text-slate-600 mt-0.5">{item.location}</p>
                        </div>
                      </div>

                      <ul className="space-y-1.5 mb-3">
                        {(exp.items[i]?.description ?? item.description).map((line, j) => (
                          <li key={j} className="flex gap-2 text-xs text-slate-400 leading-relaxed">
                            <span className="text-accent/40 shrink-0 mt-0.5 font-jetbrains">›</span>
                            {line}
                          </li>
                        ))}
                      </ul>

                      {item.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                          {item.tags.map((tag) => (
                            <span key={tag} className="tech-tag">{tag}</span>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ── Education ── */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="circuit-node active" />
              <h3 className="font-jetbrains text-[10px] text-slate-500 uppercase tracking-[0.22em]">
                {exp.educationLabel}
              </h3>
            </div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="relative pl-7"
            >
              {/* Vertical circuit trace */}
              <div className="absolute left-[4px] top-2 bottom-2 w-px circuit-line" />

              <div className="space-y-6">
                {education.map((item, i) => (
                  <motion.div key={item.id} variants={fadeUp} className="relative">
                    <div className="absolute -left-[28px] top-3 circuit-node" />

                    <div className="glass rounded-sm p-5 hover:border-accent/20 transition-colors">
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <div>
                          <h4 className="font-display font-semibold text-slate-100 text-sm mb-0.5">
                            {exp.education[i]?.degree ?? item.degree}
                          </h4>
                          <p className="font-jetbrains text-xs text-accent tracking-wider">
                            {item.institution}
                          </p>
                        </div>
                        <p className="font-jetbrains text-[10px] text-slate-500 shrink-0 tracking-wider">{item.period}</p>
                      </div>
                      <p className="text-xs text-slate-400 mt-3 leading-relaxed">
                        {exp.education[i]?.description ?? item.description}
                      </p>
                      {item.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-white/5">
                          {item.tags.map((tag) => (
                            <span key={tag} className="tech-tag">{tag}</span>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CV download */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeInOut" }}
              className="mt-8 glass rounded-sm p-5 flex items-center justify-between gap-4"
            >
              <div>
                <p className="font-display font-semibold text-sm text-slate-200">{exp.cvTeaser}</p>
                <p className="font-jetbrains text-[10px] text-slate-500 mt-1 tracking-wide">{exp.cvSub}</p>
              </div>
              <a
                href="#"
                className="shrink-0 px-4 py-2 rounded-sm font-jetbrains text-[10px] font-medium bg-accent/10 text-accent border border-accent/20 hover:bg-accent/20 tracking-widest uppercase transition-all"
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
