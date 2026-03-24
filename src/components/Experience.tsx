"use client";

import { experience, education } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-accent/30 to-transparent" />

      <div className="max-w-6xl mx-auto section-padding">
        <div className="text-center mb-16">
          <p className="font-mono text-sm text-accent mb-3 tracking-widest uppercase">04 / Experience</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100">
            Where I&apos;ve <span className="text-gradient">worked & studied</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Work experience */}
          <div>
            <h3 className="flex items-center gap-2 text-sm font-semibold text-slate-500 uppercase tracking-widest mb-6">
              <svg className="w-4 h-4 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="7" width="20" height="14" rx="2" />
                <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
              </svg>
              Work experience
            </h3>

            <div className="relative pl-6 border-l border-accent/20 space-y-8">
              {experience.map((item) => (
                <div key={item.id} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute -left-[25px] top-1.5 w-3 h-3 rounded-full bg-accent/30 border-2 border-accent" />

                  <div className="glass glass-hover rounded-xl p-5">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div>
                        <h4 className="font-semibold text-slate-100">{item.role}</h4>
                        <p className="text-sm text-accent">{item.company}</p>
                      </div>
                      <div className="text-right shrink-0">
                        <p className="text-xs text-slate-500 font-mono">{item.period}</p>
                        <p className="text-xs text-slate-600">{item.location}</p>
                      </div>
                    </div>
                    <ul className="space-y-1.5 mt-3">
                      {item.description.map((line, i) => (
                        <li key={i} className="text-sm text-slate-400 flex gap-2">
                          <span className="text-accent/50 shrink-0 mt-1">›</span>
                          {line}
                        </li>
                      ))}
                    </ul>
                    {item.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-white/5">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 text-[10px] rounded-full bg-accent/5 text-accent/60 border border-accent/10 font-mono"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="flex items-center gap-2 text-sm font-semibold text-slate-500 uppercase tracking-widest mb-6">
              <svg className="w-4 h-4 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
              </svg>
              Education
            </h3>

            <div className="relative pl-6 border-l border-accent/20 space-y-8">
              {education.map((item) => (
                <div key={item.id} className="relative">
                  <div className="absolute -left-[25px] top-1.5 w-3 h-3 rounded-full bg-accent/30 border-2 border-accent" />

                  <div className="glass glass-hover rounded-xl p-5">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div>
                        <h4 className="font-semibold text-slate-100">{item.degree}</h4>
                        <p className="text-sm text-accent">{item.institution}</p>
                      </div>
                      <p className="text-xs text-slate-500 font-mono shrink-0">{item.period}</p>
                    </div>
                    <p className="text-sm text-slate-400 mt-2">{item.description}</p>
                    {item.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-white/5">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 text-[10px] rounded-full bg-accent/5 text-accent/60 border border-accent/10 font-mono"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA to download CV */}
            <div className="mt-8 glass rounded-xl p-5 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-slate-200">Want the full picture?</p>
                <p className="text-xs text-slate-500 mt-0.5">Download my CV for more detail.</p>
              </div>
              <a
                href="#"   /* TODO: replace with /cv.pdf after adding your CV */
                className="shrink-0 px-4 py-2 rounded-full text-sm font-medium bg-accent/10 text-accent border border-accent/20 hover:bg-accent/20 transition-all"
              >
                CV ↓
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
