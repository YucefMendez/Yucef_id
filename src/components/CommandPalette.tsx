"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SECTIONS = [
  { label: "About", id: "about" },
  { label: "Expertise", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Contact", id: "contact" },
];

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const scrollTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
    setQuery("");
  }, []);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", down);
    return () => window.removeEventListener("keydown", down);
  }, []);

  const filtered = SECTIONS.filter((s) =>
    s.label.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="fixed inset-0 z-[998] bg-black/60 backdrop-blur-sm flex items-start justify-center pt-24 px-4"
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.97 }}
            transition={{ duration: 0.15 }}
            onClick={(e) => e.stopPropagation()}
            className="glass rounded-2xl w-full max-w-md overflow-hidden border border-accent/25 shadow-2xl shadow-black/50"
          >
            <div className="flex items-center gap-3 px-4 py-3 border-b border-accent/10">
              <svg className="w-4 h-4 text-slate-500 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
              </svg>
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Navigate to..."
                className="flex-1 bg-transparent text-slate-100 placeholder-slate-500 text-sm outline-none"
              />
              <kbd className="hidden sm:inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-mono text-slate-600 border border-slate-700">ESC</kbd>
            </div>
            <ul className="py-1.5">
              {filtered.map((section) => (
                <li key={section.id}>
                  <button
                    className="w-full px-4 py-2.5 text-left text-sm text-slate-300 hover:bg-accent/10 hover:text-accent transition-colors flex items-center gap-3"
                    onClick={() => scrollTo(section.id)}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/40 shrink-0" />
                    {section.label}
                  </button>
                </li>
              ))}
            </ul>
            <div className="px-4 py-2 border-t border-accent/10 flex items-center gap-3">
              <span className="text-[10px] text-slate-600 font-mono">⌘K to toggle</span>
              <span className="text-[10px] text-slate-600 font-mono">↑↓ navigate</span>
              <span className="text-[10px] text-slate-600 font-mono">↵ select</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
