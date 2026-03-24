// ─── SITE DATA ────────────────────────────────────────────────────────────────
// Edit this file to personalise every section of the site.
// ──────────────────────────────────────────────────────────────────────────────

export const siteConfig = {
  name: "Luis Yucef",
  fullName: "Luis Yucef Julio Mendez Carazas",
  title: "Mechatronic Engineer",
  tagline: "Building intelligent systems at the intersection of mechanics, electronics & software.",
  email: "your.email@example.com",           // TODO: replace
  linkedin: "https://www.linkedin.com/in/luis-yucef-julio-mendez-carazas/",
  github: "https://github.com/",             // TODO: replace
  location: "Lima, Perú",                    // TODO: confirm / update
  availableForWork: true,
};

export const aboutText = [
  "I am a Mechatronic Engineer passionate about designing systems where the physical and digital worlds converge. From control algorithms to PCB layouts, I enjoy every layer of the engineering stack.",
  "My work spans robotics, embedded systems, automation, and intelligent sensing — always with an eye on precision, reliability, and real-world impact.",
  "I am actively looking for opportunities where I can contribute to challenging, multidisciplinary projects and keep growing alongside great teams.",
];

// ─── SKILLS ───────────────────────────────────────────────────────────────────
export const skillCategories = [
  {
    label: "Programming",
    icon: "code",
    skills: ["Python", "C / C++", "MATLAB", "ROS / ROS 2", "Bash"],
  },
  {
    label: "Embedded & Hardware",
    icon: "cpu",
    skills: ["Arduino", "Raspberry Pi", "STM32", "ESP32", "PCB Design"],
  },
  {
    label: "Mechanical",
    icon: "cog",
    skills: ["SolidWorks", "AutoCAD", "FDM 3D Printing", "CNC Machining", "GD&T"],
  },
  {
    label: "Control & Automation",
    icon: "activity",
    skills: ["PID Control", "PLC Programming", "SCADA", "State Machines", "Simulink"],
  },
  {
    label: "AI & Data",
    icon: "brain",
    skills: ["Machine Learning", "OpenCV", "TensorFlow Lite", "Data Analysis", "NumPy / Pandas"],
  },
  {
    label: "Tools & Workflow",
    icon: "tool",
    skills: ["Git / GitHub", "Linux", "Docker", "VS Code", "Altium Designer"],
  },
];

// ─── PROJECTS ─────────────────────────────────────────────────────────────────
// Replace the placeholder entries with your real projects.
export const projects = [
  {
    id: 1,
    title: "Autonomous Mobile Robot",                // TODO: replace with real project
    summary: "Template — describe your project in 1–2 sentences. What problem does it solve?",
    tags: ["ROS 2", "Python", "LiDAR", "Navigation"],
    status: "completed" as const,
    github: "",   // TODO
    demo: "",     // TODO
    highlight: true,
  },
  {
    id: 2,
    title: "Smart Greenhouse Controller",           // TODO: replace
    summary: "Template — embedded system for automated climate and irrigation control using sensor fusion.",
    tags: ["ESP32", "MQTT", "C++", "IoT"],
    status: "completed" as const,
    github: "",
    demo: "",
    highlight: true,
  },
  {
    id: 3,
    title: "6-DOF Robotic Arm",                    // TODO: replace
    summary: "Template — design and control of a desktop robotic manipulator with trajectory planning.",
    tags: ["MATLAB", "SolidWorks", "Arduino", "Kinematics"],
    status: "in-progress" as const,
    github: "",
    demo: "",
    highlight: false,
  },
  {
    id: 4,
    title: "Your Next Project",                    // TODO: replace
    summary: "Template — add your next project here.",
    tags: [],
    status: "planned" as const,
    github: "",
    demo: "",
    highlight: false,
  },
];

// ─── EXPERIENCE ───────────────────────────────────────────────────────────────
// Replace with real entries from your CV / LinkedIn.
export const experience = [
  {
    id: 1,
    role: "Role Title",                           // TODO
    company: "Company / Organisation Name",       // TODO
    period: "Month Year – Present",               // TODO
    location: "City, Country",                    // TODO
    description: [
      "Template — describe your key responsibilities and achievements here.",
      "Use action verbs: designed, developed, implemented, optimised, led…",
    ],
    tags: ["Tag1", "Tag2"],
  },
  {
    id: 2,
    role: "Previous Role",
    company: "Previous Company",
    period: "Month Year – Month Year",
    location: "City, Country",
    description: [
      "Template — another role entry.",
    ],
    tags: [],
  },
];

// ─── EDUCATION ────────────────────────────────────────────────────────────────
export const education = [
  {
    id: 1,
    degree: "B.Sc. Mechatronic Engineering",      // TODO: confirm degree name
    institution: "Your University",               // TODO
    period: "Year – Year",                        // TODO
    description: "Template — thesis topic, GPA, honours, or notable coursework.",
    tags: ["Robotics", "Control Systems", "Embedded Systems"],
  },
];
