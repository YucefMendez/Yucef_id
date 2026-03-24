"use client";

import { aboutText, siteConfig } from "@/lib/data";

const stats = [
  { value: "B.Sc.", label: "Mechatronic Eng." },
  { value: "3+",   label: "Projects built"   },
  { value: "∞",    label: "Curiosity"         },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto section-padding">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text column */}
          <div>
            <p className="font-mono text-sm text-accent mb-3 tracking-widest uppercase">01 / About</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-8">
              The engineer <span className="text-gradient">behind the work</span>
            </h2>
            <div className="space-y-5">
              {aboutText.map((para, i) => (
                <p key={i} className="text-slate-400 leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent/10 text-accent text-sm font-medium border border-accent/20 hover:bg-accent/20 transition-all"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-10 7L2 7" />
                </svg>
                Email me
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 text-slate-300 text-sm font-medium border border-white/10 hover:border-accent/30 hover:text-accent transition-all"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>

          {/* Stats + visual column */}
          <div className="flex flex-col gap-6">
            {/* Avatar placeholder */}
            <div className="glass rounded-2xl p-1 self-center w-48 h-48 flex items-center justify-center overflow-hidden">
              <div className="w-full h-full rounded-xl bg-gradient-to-br from-accent/20 to-violet-700/20 flex items-center justify-center">
                <span className="font-mono text-5xl font-bold text-gradient select-none">
                  {siteConfig.name.split(" ").map((w) => w[0]).join("")}
                </span>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map(({ value, label }) => (
                <div key={label} className="glass glass-hover rounded-xl p-5 text-center">
                  <div className="text-2xl font-bold text-accent mb-1">{value}</div>
                  <div className="text-xs text-slate-500 font-medium uppercase tracking-wide">{label}</div>
                </div>
              ))}
            </div>

            {/* Terminal card */}
            <div className="glass rounded-xl overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 bg-black/20 border-b border-white/5">
                <span className="w-3 h-3 rounded-full bg-red-500/70" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <span className="w-3 h-3 rounded-full bg-green-500/70" />
                <span className="ml-3 text-xs text-slate-600 font-mono">~/ profile.sh</span>
              </div>
              <div className="p-4 font-mono text-xs text-slate-400 space-y-1.5">
                <div><span className="text-accent">$</span> whoami</div>
                <div className="text-slate-300 pl-4">Luis Yucef Julio Mendez Carazas</div>
                <div><span className="text-accent">$</span> cat specialisation.txt</div>
                <div className="text-slate-300 pl-4">Mechatronics → Robotics → Embedded → AI</div>
                <div><span className="text-accent">$</span> echo $LOCATION</div>
                <div className="text-slate-300 pl-4">{siteConfig.location}</div>
                <div className="flex items-center gap-1">
                  <span className="text-accent">$</span>
                  <span className="animate-pulse">▋</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
