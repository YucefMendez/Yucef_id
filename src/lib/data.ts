// ─── SITE DATA ────────────────────────────────────────────────────────────────
// Edit this file to personalise every section of the site.
// ──────────────────────────────────────────────────────────────────────────────

export const siteConfig = {
  name: "Luis Mendez",
  fullName: "Luis Yucef Julio Mendez Carazas",
  title: "Mechatronic Engineer",
  tagline: "I bridge hardware and intelligence — building precision systems from high-voltage actuators to AI-driven prediction models.",
  email: "yucefmendez@gmail.com",
  linkedin: "https://www.linkedin.com/in/luis-yucef-julio-mendez-carazas/",
  github: "https://github.com/",
  location: "Lima, Perú",
  availableForWork: true,
};

export const aboutText = [
  "I am a Mechatronic Engineer (UTEC, Feb 2026) with hands-on experience spanning chip design, embedded systems, IT infrastructure, and AI-driven prediction models. My work bridges the physical and digital worlds — from designing 20 kV high-voltage drivers for soft robotics to building FPGA-based SoC applications and long-range IoT networks.",
  "I thrive in multidisciplinary environments and absorb new domains quickly, whether it is SystemVerilog for RTL design in Canada or Python and Kalman Filters for financial modelling. I care about precision, reliability, and pushing systems to their limits.",
  "Currently serving as CTO at Quadro — an art marketplace where I build the full website framework and platform tools — and pursuing my engineering license in 2026, while actively looking for opportunities where rigorous engineering meets real-world innovation.",
];

// ─── SKILLS ───────────────────────────────────────────────────────────────────
export const skillCategories = [
  {
    label: "Languages",
    icon: "code",
    skills: ["Python", "C / C++", "SystemVerilog", "VHDL", "MATLAB", "Assembler", "R"],
  },
  {
    label: "Chip & FPGA Design",
    icon: "cpu",
    skills: ["RTL Design", "SoC Design", "FPGA", "Logic Synthesis", "Timing Analysis", "Vivado", "Quartus"],
  },
  {
    label: "Embedded & Power",
    icon: "cog",
    skills: ["Arduino", "Raspberry Pi", "NI MyRIO", "STM32", "PCB Design", "High-Voltage Electronics", "Solar Systems"],
  },
  {
    label: "Control & Automation",
    icon: "activity",
    skills: ["PID Control", "State Machines", "Real-time Control", "Kalman Filter", "LoRa MESH", "Simulink"],
  },
  {
    label: "AI & Data Science",
    icon: "brain",
    skills: ["Machine Learning", "NLP / FinBERT", "LSTM", "Kalman Filter", "TensorFlow", "NumPy / Pandas"],
  },
  {
    label: "Tools & Infrastructure",
    icon: "tool",
    skills: ["Git / GitHub", "Linux", "Docker", "Altium Designer", "VS Code", "SolidWorks"],
  },
];

// ─── PROJECTS ─────────────────────────────────────────────────────────────────
export const projects = [
  {
    id: 1,
    title: "HASEL Robot High-Voltage Power System",
    summary: "Soft robots need precise high-voltage control that off-the-shelf drivers cannot provide. I designed a multichannel 20 kV generator with closed-loop feedback — secondary transformer windings, precision voltage dividers, and microcontroller ADC — to safely drive HASEL actuators for my thesis robot.",
    tags: ["HASEL", "High-Voltage", "Microcontrollers", "Power Electronics", "Control Systems", "Soft Robotics"],
    status: "completed" as const,
    github: "",
    demo: "",
    highlight: true,
  },
  {
    id: 2,
    title: "FinBERT Stock Prediction Model",
    summary: "Markets react to news before price data catches up — I exploited that gap. Built a hybrid forecasting system fusing FinBERT sentiment analysis, LSTM time-series modelling, and a Kalman Filter for state estimation. Achieved 97% accuracy in closed testing through multi-modal signal fusion.",
    tags: ["FinBERT", "LSTM", "Kalman Filter", "NLP", "Python", "Machine Learning"],
    status: "completed" as const,
    github: "",
    demo: "",
    highlight: true,
  },
  {
    id: 3,
    title: "Highway Barrier Control System",
    summary: "Highway infrastructure demands zero-failure tolerance. I built the full control stack for an automated barrier system — NI MyRIO handling real-time motor control, Raspberry Pi managing supervisory logic, state machines enforcing safety interlocks — deployed and operating in the field.",
    tags: ["NI MyRIO", "Raspberry Pi", "C", "Embedded Systems", "Real-time Control"],
    status: "completed" as const,
    github: "",
    demo: "",
    highlight: false,
  },
  {
    id: 4,
    title: "LoRa MESH Long-Range IoT Network",
    summary: "Standard wireless fails in remote industrial environments. I designed and deployed a LoRa MESH network that carries sensor data and actuator commands across distances where WiFi and cellular cannot reach, with custom firmware and protocol layers for reliable multi-hop communication.",
    tags: ["LoRa", "MESH Networking", "IoT", "Firmware", "Long-Range Comms"],
    status: "completed" as const,
    github: "",
    demo: "",
    highlight: false,
  },
  {
    id: 5,
    title: "Solar Energy System Installation",
    summary: "Delivered full off-grid and hybrid solar installations for real-world clients — from PV layout and inverter selection through to battery bank sizing for both Lithium and Lead Acid chemistries. Every system was engineered, not assembled: load analysis, fault tolerance, and long-term reliability built in.",
    tags: ["Solar", "Inverters", "Lithium Batteries", "Power Systems", "Renewable Energy"],
    status: "completed" as const,
    github: "",
    demo: "",
    highlight: false,
  },
];

// ─── EXPERIENCE ───────────────────────────────────────────────────────────────
export const experience = [
  {
    id: 1,
    role: "CTO",
    company: "Quadro",
    period: "Aug 2025 – Present",
    location: "Lima, Peru",
    description: [
      "Building the full technical framework for an art marketplace — from website architecture to the platform tools available to buyers and sellers.",
      "Own the entire stack end-to-end: frontend, backend, integrations, and product tooling.",
    ],
    tags: ["Art Marketplace", "Full-Stack", "Platform Architecture"],
  },
  {
    id: 2,
    role: "IT Manager",
    company: "2B Latam",
    period: "Oct 2019 – Present",
    location: "Lima, Peru",
    description: [
      "Lead technical support across all company projects as team leader, personally involved in every solution.",
      "Manage cross-functional teams and deliver end-to-end technical resolutions for critical infrastructure.",
      "Responsible for IT infrastructure reliability, performance, and scalability across the organisation.",
    ],
    tags: ["IT Infrastructure", "Team Leadership", "Technical Support"],
  },
  {
    id: 3,
    role: "Co-Op Hardware Engineer",
    company: "DSLI",
    period: "Aug 2025 – Dec 2025",
    location: "Ontario, Canada",
    description: [
      "Co-op position focused on hardware engineering and chip design projects.",
      "Contributed to FPGA-based system design and RTL development pipelines.",
    ],
    tags: ["Hardware Design", "FPGA", "RTL"],
  },
  {
    id: 4,
    role: "System-on-Chip Design Engineer",
    company: "DSLI",
    period: "Apr 2022 – Jun 2022",
    location: "Ontario, Canada",
    description: [
      "Developed high-speed FPGA applications using SystemVerilog and VHDL.",
      "Implemented RTL designs for embedded processing pipelines, from specification through synthesis.",
    ],
    tags: ["SystemVerilog", "VHDL", "FPGA", "SoC", "RTL Design"],
  },
];

// ─── EDUCATION ────────────────────────────────────────────────────────────────
export const education = [
  {
    id: 1,
    degree: "B.Sc. Mechatronic Engineering — pursuing License (2026)",
    institution: "UTEC — Universidad de Ingeniería y Tecnología",
    period: "Jan 2019 – Present",
    description: "Comprehensive engineering programme covering robotics, control systems, embedded electronics, mechanical design, and intelligent systems. Graduated February 2026; currently pursuing engineering license. Thesis on high-voltage power electronics for HASEL actuator-driven soft robots.",
    tags: ["Robotics", "Control Systems", "Embedded Systems", "Power Electronics", "FPGA"],
  },
];
