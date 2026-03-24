"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { useLang } from "@/context/LanguageContext";

const statusStyles = {
  completed:    "bg-green-500/10 text-green-400 border-green-500/20",
  "in-progress": "bg-amber-500/10 text-amber-400 border-amber-500/20",
  planned:      "bg-slate-500/10 text-slate-400 border-slate-500/20",
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const card = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function Projects() {
  const { t } = useLang();
  const { projects: proj } = t;

  const highlighted = projects.filter((p) => p.highlight);
  const others = projects.filter((p) => !p.highlight);

  return (
    <section id="projects" className="py-28 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent via-accent/25 to-transparent" />

      <div className="max-w-6xl mx-auto section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold text-accent mb-3 tracking-[0.2em] uppercase">{proj.section}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100">
            {proj.heading} <span className="text-gradient">{proj.headingGradient}</span>
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid md:grid-cols-2 gap-6 mb-6"
        >
          {highlighted.map((project) => (
            <ProjectCard key={project.id} project={project} featured />
          ))}
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {others.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  featured = false,
}: {
  project: (typeof projects)[0];
  featured?: boolean;
}) {
  const { t } = useLang();
  const { projects: proj } = t;
  const item = proj.items[project.id - 1];

  return (
    <motion.div
      variants={card}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className={`glass rounded-xl p-6 flex flex-col gap-4 ${featured ? "border-accent/20" : ""}`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className={`inline-block px-2.5 py-0.5 text-[10px] font-semibold rounded-full border mb-2 ${statusStyles[project.status]}`}>
            {proj.statusLabel[project.status]}
          </span>
          <h3 className="font-semibold text-slate-100 text-base leading-snug">{item?.title ?? project.title}</h3>
        </div>
        <div className="shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" />
          </svg>
        </div>
      </div>

      <p className="text-sm text-slate-400 leading-relaxed flex-1">{item?.summary ?? project.summary}</p>

      {project.tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span key={tag} className="px-2.5 py-0.5 text-xs rounded-full bg-accent/5 text-accent/70 border border-accent/10">
              {tag}
            </span>
          ))}
        </div>
      )}

      <div className="flex items-center gap-4 pt-1 border-t border-white/5">
        {project.github ? (
          <a href={project.github} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-accent transition-colors">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            GitHub
          </a>
        ) : (
          <span className="text-xs text-slate-700 italic">{proj.privateLabel}</span>
        )}
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-accent transition-colors">
            {proj.liveDemo}
          </a>
        )}
      </div>
    </motion.div>
  );
}
