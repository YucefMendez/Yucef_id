"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "@/lib/data";
import { useLang } from "@/context/LanguageContext";

export default function Navigation() {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isDark, setIsDark] = useState(true);

  const navLinks = [
    { href: "#about",      label: t.nav.about },
    { href: "#skills",     label: t.nav.expertise },
    { href: "#projects",   label: t.nav.projects },
    { href: "#experience", label: t.nav.experience },
    { href: "#contact",    label: t.nav.contact },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = ["about", "skills", "projects", "experience", "contact"];
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

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const dark = stored !== "light";
    setIsDark(dark);
    document.documentElement.classList.toggle("dark", dark);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

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

          {/* Language toggle */}
          <li>
            <button
              onClick={() => setLang(lang === "es" ? "en" : "es")}
              aria-label="Toggle language"
              className="flex items-center gap-1 text-xs font-semibold text-slate-400 hover:text-accent transition-colors border border-transparent hover:border-accent/30 rounded-full px-2.5 py-1"
            >
              <span className={lang === "es" ? "text-accent" : "text-slate-500"}>ES</span>
              <span className="text-slate-600">|</span>
              <span className={lang === "en" ? "text-accent" : "text-slate-500"}>EN</span>
            </button>
          </li>

          {/* Theme toggle */}
          <li>
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="w-9 h-9 rounded-full flex items-center justify-center text-slate-400 hover:text-accent transition-colors border border-transparent hover:border-accent/30"
            >
              {isDark ? (
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              ) : (
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>
          </li>

          <li>
            <a
              href={`mailto:${siteConfig.email}`}
              className="px-4 py-2 text-sm font-medium rounded-full border border-accent/40 text-accent hover:bg-accent hover:text-white transition-all duration-200"
            >
              {t.nav.hire}
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-6 bg-slate-300 transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-0.5 w-6 bg-slate-300 transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-slate-300 transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden glass border-t border-accent/10 transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-80 py-4" : "max-h-0"
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
          <li>
            <button
              onClick={() => setLang(lang === "es" ? "en" : "es")}
              className="flex items-center gap-1 py-2 text-sm text-slate-300 hover:text-accent transition-colors"
            >
              {lang === "es" ? "Switch to English" : "Cambiar a Español"}
            </button>
          </li>
          <li>
            <button
              onClick={toggleTheme}
              className="flex items-center gap-2 py-2 text-sm text-slate-300 hover:text-accent transition-colors"
            >
              {isDark ? t.nav.lightMode : t.nav.darkMode}
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
