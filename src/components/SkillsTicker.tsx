"use client";

const SKILLS = [
  "Python", "SystemVerilog", "VHDL", "C / C++", "FPGA Design",
  "RTL Design", "SoC Design", "FinBERT", "LSTM", "Kalman Filter",
  "TensorFlow", "Arduino", "Raspberry Pi", "LoRa MESH", "PCB Design",
  "High-Voltage Electronics", "Embedded Systems", "Machine Learning",
  "Docker", "Linux", "Git / GitHub", "SolidWorks", "Altium Designer",
];

export default function SkillsTicker() {
  const doubled = [...SKILLS, ...SKILLS];
  return (
    <div className="overflow-hidden py-5 border-y border-accent/10">
      <div className="ticker-track flex w-max">
        {doubled.map((skill, i) => (
          <span
            key={i}
            className="mx-8 text-xs text-slate-500 font-mono whitespace-nowrap tracking-widest uppercase"
          >
            <span className="text-accent/30 mr-2">✦</span>
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
