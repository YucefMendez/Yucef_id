"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "@/lib/data";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navLinks.map((l) => l.href.slice(1));
      let current = "";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) current = id;
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-lg shadow-black/20" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-mono text-sm font-semibold tracking-widest text-accent hover:glow-text transition-all"
        >
          {siteConfig.name.split(" ")[0]}
          <span className="text-slate-500">.</span>
          <span className="text-slate-400">dev</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className={`text-sm font-medium transition-all duration-200 hover:text-accent ${
                  activeSection === href.slice(1)
                    ? "text-accent glow-text"
                    : "text-slate-400"
                }`}
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={`mailto:${siteConfig.email}`}
              className="px-4 py-2 text-sm font-medium rounded-full border border-accent/40 text-accent hover:bg-accent hover:text-navy-900 transition-all duration-200"
            >
              Hire me
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-slate-300 transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-slate-300 transition-all ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-slate-300 transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden glass border-t border-accent/10 transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-64 py-4" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-2 px-6">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                onClick={() => setMenuOpen(false)}
                className="block py-2 text-sm text-slate-300 hover:text-accent transition-colors"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
