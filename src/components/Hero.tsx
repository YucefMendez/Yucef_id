"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/data";

const roles = [
  "Mechatronic Engineer",
  "Robotics Enthusiast",
  "Embedded Systems Developer",
  "Control Systems Designer",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => setCharIndex((c) => c + 1), 60);
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex((c) => c - 1), 35);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }

    setDisplayed(current.slice(0, charIndex));
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,212,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,212,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-violet-700/10 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto section-padding pt-32 pb-24">
        <div className="max-w-3xl">
          {/* Status badge */}
          {siteConfig.availableForWork && (
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-medium text-accent mb-8 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Open to opportunities
            </div>
          )}

          {/* Name */}
          <h1
            className="text-5xl md:text-7xl font-bold leading-tight mb-4 animate-slide-up"
            style={{ animationDelay: "0.1s", opacity: 0 }}
          >
            {siteConfig.name.split(" ").map((word, i) => (
              <span key={i} className={i === 1 ? "text-gradient block" : "block text-slate-100"}>
                {word}
              </span>
            ))}
          </h1>

          {/* Typewriter role */}
          <div
            className="h-10 flex items-center gap-2 mb-6 animate-slide-up"
            style={{ animationDelay: "0.25s", opacity: 0 }}
          >
            <span className="font-mono text-xl md:text-2xl text-accent font-light">
              {displayed}
              <span className="inline-block w-0.5 h-6 bg-accent ml-0.5 animate-pulse" />
            </span>
          </div>

          {/* Tagline */}
          <p
            className="text-lg md:text-xl text-slate-400 max-w-xl leading-relaxed mb-10 animate-slide-up"
            style={{ animationDelay: "0.4s", opacity: 0 }}
          >
            {siteConfig.tagline}
          </p>

          {/* CTAs */}
          <div
            className="flex flex-wrap gap-4 animate-slide-up"
            style={{ animationDelay: "0.55s", opacity: 0 }}
          >
            <a
              href="#projects"
              className="px-6 py-3 rounded-full bg-accent text-navy-900 font-semibold text-sm hover:bg-accent-dark hover:scale-105 transition-all duration-200 shadow-lg shadow-accent/20"
            >
              View my work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-full border border-slate-600 text-slate-300 font-semibold text-sm hover:border-accent hover:text-accent transition-all duration-200"
            >
              Get in touch
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full border border-slate-600 text-slate-300 font-semibold text-sm hover:border-accent hover:text-accent transition-all duration-200"
            >
              LinkedIn ↗
            </a>
          </div>

          {/* Location */}
          <p
            className="mt-8 text-xs text-slate-600 flex items-center gap-1.5 animate-fade-in"
            style={{ animationDelay: "0.7s", opacity: 0 }}
          >
            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {siteConfig.location}
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-xs text-slate-500 tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-accent to-transparent" />
      </div>
    </section>
  );
}
