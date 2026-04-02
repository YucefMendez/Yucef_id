"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
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
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeInOut" } },
};

export default function Projects() {
  const { t } = useLang();
  const { projects: proj } = t;

  const highlighted = projects.filter((p) => p.highlight);
  const others = projects.filter((p) => !p.highlight);

  return (
    <section id="projects" className="py-28 relative">
      {/* Circuit divider top */}
      <div className="max-w-6xl mx-auto section-padding mb-16">
        <div className="circuit-divider">
          <span>{proj.section}</span>
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
          <span className="circuit-label block mb-4">{proj.section}</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-slate-100 leading-[1.1]">
            {proj.heading}{" "}
            <span className="text-gradient">{proj.headingGradient}</span>
          </h2>
        </motion.div>

        {/* Featured projects — 3D tilt */}
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

        {/* Other projects */}
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

function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(mouseY, [0, 1], [5, -5]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-5, 5]), { stiffness: 300, damping: 30 });

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  }

  function onMouseLeave() {
    mouseX.set(0.5);
    mouseY.set(0.5);
  }

  return (
    <div style={{ perspective: "900px" }}>
      <motion.div
        ref={cardRef}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className={className}
      >
        {children}
      </motion.div>
    </div>
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

  const cardContent = (
    <motion.div
      variants={fadeUp}
      className={`glass flex flex-col gap-4 p-6 relative overflow-hidden h-full rounded-sm transition-colors duration-300 ${
        featured
          ? "border-accent/20 hover:border-accent/35"
          : "hover:border-accent/20"
      }`}
    >
      {/* Featured: left accent bar */}
      {featured && (
        <div className="absolute left-0 inset-y-0 w-0.5 bg-gradient-to-b from-transparent via-accent/60 to-transparent" />
      )}

      {/* Top: status + icon */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className={`inline-flex items-center gap-1 font-jetbrains px-2 py-0.5 text-[9px] rounded-sm border tracking-widest uppercase mb-2 ${statusStyles[project.status]}`}>
            {proj.statusLabel[project.status]}
          </span>
          <h3 className={`font-display font-semibold text-slate-100 leading-snug ${featured ? "text-lg" : "text-base"}`}>
            {item?.title ?? project.title}
          </h3>
        </div>
        <div className="shrink-0 w-9 h-9 rounded-sm bg-accent/10 flex items-center justify-center text-accent">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" />
          </svg>
        </div>
      </div>

      {/* Summary */}
      <p className="text-sm text-slate-400 leading-relaxed flex-1">
        {item?.summary ?? project.summary}
      </p>

      {/* Tags */}
      {project.tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span key={tag} className="tech-tag">{tag}</span>
          ))}
        </div>
      )}

      {/* Footer links */}
      <div className="flex items-center gap-4 pt-2 border-t border-white/5">
        {project.github ? (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-jetbrains text-[10px] text-slate-500 hover:text-accent transition-colors tracking-wider uppercase"
          >
            GitHub ↗
          </a>
        ) : (
          <span className="font-jetbrains text-[10px] text-slate-700 tracking-wider uppercase">
            {proj.privateLabel}
          </span>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="font-jetbrains text-[10px] text-slate-500 hover:text-teal transition-colors tracking-wider uppercase"
          >
            {proj.liveDemo}
          </a>
        )}
      </div>
    </motion.div>
  );

  if (featured) {
    return <TiltCard className="h-full">{cardContent}</TiltCard>;
  }

  return cardContent;
}
