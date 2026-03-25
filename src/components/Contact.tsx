"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/data";
import { useLang } from "@/context/LanguageContext";

export default function Contact() {
  const { t } = useLang();
  const { contact } = t;

  const socialLinks = [
    {
      label: "LinkedIn",
      href: siteConfig.linkedin,
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      label: "GitHub",
      href: siteConfig.github,
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
      ),
    },
    {
      label: "Email",
      href: `mailto:${siteConfig.email}`,
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 7-10 7L2 7" />
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" className="py-28 relative">
      {/* Circuit divider top */}
      <div className="max-w-6xl mx-auto section-padding mb-16">
        <div className="circuit-divider">
          <span>{contact.section}</span>
        </div>
      </div>

      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-accent/[0.05] blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto section-padding relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65 }}
          className="max-w-2xl mx-auto text-center"
        >
          <span className="circuit-label block mb-6">{contact.section}</span>

          <h2 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-slate-100 mb-5 leading-[1.05]">
            {contact.heading}{" "}
            <span className="text-gradient">{contact.headingGradient}</span>
          </h2>

          <p className="text-slate-400 leading-relaxed mb-10 text-sm max-w-md mx-auto">
            {contact.body}
          </p>

          {/* Email CTA */}
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-sm bg-accent text-warm-950 font-jetbrains font-medium text-xs tracking-[0.15em] uppercase hover:bg-accent-dark transition-all duration-200 shadow-xl shadow-accent/25 mb-12"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-10 7L2 7" />
            </svg>
            {contact.cta}
          </a>

          {/* Social links */}
          <div className="flex items-center justify-center gap-3">
            {socialLinks.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={label}
                className="w-11 h-11 rounded-sm glass glass-hover flex items-center justify-center text-slate-400 hover:text-accent transition-all"
              >
                {icon}
              </a>
            ))}
          </div>

          {/* Footer note */}
          <p className="mt-14 font-jetbrains text-[9px] text-slate-700 tracking-[0.2em] uppercase">
            {siteConfig.location} · {siteConfig.email}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
