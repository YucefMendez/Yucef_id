export type Lang = "es" | "en";

export const translations = {
  en: {
    nav: {
      about: "About",
      expertise: "Expertise",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact",
      hire: "Hire me",
      lightMode: "Switch to Light Mode",
      darkMode: "Switch to Dark Mode",
    },
    hero: {
      available: "Available for new roles",
      roles: [
        "Mechatronic Engineer",
        "Co-Founder @ Quadro",
        "Hardware Systems Designer",
        "Embedded AI Developer",
      ],
      tagline:
        "I bridge hardware and intelligence — building precision systems from high-voltage actuators to AI-driven prediction models.",
      cta1: "View my work",
      cta2: "Get in touch",
    },
    about: {
      section: "About",
      heading: "The engineer",
      headingGradient: "behind the work",
      paragraphs: [
        "I am a Mechatronic Engineering student at UTEC with hands-on experience spanning chip design, embedded systems, IT infrastructure, and AI-driven prediction models. My work bridges the physical and digital worlds — from designing 20 kV high-voltage drivers for soft robotics to building FPGA-based SoC applications and long-range IoT networks.",
        "I thrive in multidisciplinary environments and absorb new domains quickly, whether it is SystemVerilog for RTL design in Canada or Python and Kalman Filters for financial modelling. I care about precision, reliability, and pushing systems to their limits.",
        "Currently co-founding Quadro while finishing my degree at UTEC (graduating February 2026), and actively looking for opportunities where rigorous engineering meets real-world innovation.",
      ],
      emailBtn: "Email me",
      stats: [
        { value: "5+", label: "Years in IT" },
        { value: "2", label: "Intl. Co-ops" },
        { value: "97%", label: "Model Accuracy" },
      ],
      quote:
        "From 20 kV robotics drivers to AI trading models — I build systems that perform at the edge.",
    },
    skills: {
      section: "Expertise",
      heading: "From silicon to",
      headingGradient: "intelligence",
      subtitle:
        "Hardware and software disciplines across the full mechatronics stack.",
      categories: [
        "Languages",
        "Chip & FPGA Design",
        "Embedded & Power",
        "Control & Automation",
        "AI & Data Science",
        "Tools & Infrastructure",
      ],
    },
    projects: {
      section: "Projects",
      heading: "Things I've",
      headingGradient: "built",
      statusLabel: {
        completed: "Completed",
        "in-progress": "In progress",
        planned: "Planned",
      },
      privateLabel: "Private",
      liveDemo: "Live demo ↗",
      items: [
        {
          title: "HASEL Robot High-Voltage Power System",
          summary:
            "Soft robots need precise high-voltage control that off-the-shelf drivers cannot provide. I designed a multichannel 20 kV generator with closed-loop feedback — secondary transformer windings, precision voltage dividers, and microcontroller ADC — to safely drive HASEL actuators for my thesis robot.",
        },
        {
          title: "FinBERT Stock Prediction Model",
          summary:
            "Markets react to news before price data catches up — I exploited that gap. Built a hybrid forecasting system fusing FinBERT sentiment analysis, LSTM time-series modelling, and a Kalman Filter for state estimation. Achieved 97% accuracy in closed testing through multi-modal signal fusion.",
        },
        {
          title: "Highway Barrier Control System",
          summary:
            "Highway infrastructure demands zero-failure tolerance. I built the full control stack for an automated barrier system — NI MyRIO handling real-time motor control, Raspberry Pi managing supervisory logic, state machines enforcing safety interlocks — deployed and operating in the field.",
        },
        {
          title: "LoRa MESH Long-Range IoT Network",
          summary:
            "Standard wireless fails in remote industrial environments. I designed and deployed a LoRa MESH network that carries sensor data and actuator commands across distances where WiFi and cellular cannot reach, with custom firmware and protocol layers for reliable multi-hop communication.",
        },
        {
          title: "Solar Energy System Installation",
          summary:
            "Delivered full off-grid and hybrid solar installations for real-world clients — from PV layout and inverter selection through to battery bank sizing for both Lithium and Lead Acid chemistries. Every system was engineered, not assembled: load analysis, fault tolerance, and long-term reliability built in.",
        },
      ],
    },
    experience: {
      section: "Experience",
      heading: "Where I've",
      headingGradient: "worked & studied",
      workLabel: "Work Experience",
      educationLabel: "Education",
      cvTeaser: "Want the full picture?",
      cvSub: "Download my CV for more detail.",
      cvBtn: "CV ↓",
      items: [
        {
          description: [
            "Co-founded a technology venture focused on engineering-driven product solutions.",
            "Leading product direction, technical architecture, and business development strategy.",
          ],
        },
        {
          description: [
            "Lead technical support across all company projects as team leader, personally involved in every solution.",
            "Manage cross-functional teams and deliver end-to-end technical resolutions for critical infrastructure.",
            "Responsible for IT infrastructure reliability, performance, and scalability across the organisation.",
          ],
        },
        {
          description: [
            "Co-op position focused on hardware engineering and chip design projects.",
            "Contributed to FPGA-based system design and RTL development pipelines.",
          ],
        },
        {
          description: [
            "Developed high-speed FPGA applications using SystemVerilog and VHDL.",
            "Implemented RTL designs for embedded processing pipelines, from specification through synthesis.",
          ],
        },
      ],
      education: [
        {
          degree: "B.Sc. Mechatronic Engineering",
          description:
            "Comprehensive engineering programme covering robotics, control systems, embedded electronics, mechanical design, and intelligent systems. Thesis on high-voltage power electronics for HASEL actuator-driven soft robots.",
        },
      ],
    },
    contact: {
      section: "Contact",
      heading: "Let's",
      headingGradient: "work together",
      body: "Whether you have a project in mind, want to collaborate, or just want to say hello — my inbox is always open. I'll get back to you promptly.",
      cta: "Say hello",
    },
  },

  // ─── ESPAÑOL ──────────────────────────────────────────────────────────────────
  es: {
    nav: {
      about: "Sobre mí",
      expertise: "Habilidades",
      projects: "Proyectos",
      experience: "Experiencia",
      contact: "Contacto",
      hire: "Contrátame",
      lightMode: "Cambiar a modo claro",
      darkMode: "Cambiar a modo oscuro",
    },
    hero: {
      available: "Disponible para nuevas oportunidades",
      roles: [
        "Ingeniero Mecatrónico",
        "Co-Fundador @ Quadro",
        "Diseñador de Hardware",
        "Desarrollador de IA Embebida",
      ],
      tagline:
        "Conecto hardware e inteligencia — construyendo sistemas de precisión desde actuadores de alto voltaje hasta modelos predictivos con IA.",
      cta1: "Ver mi trabajo",
      cta2: "Contáctame",
    },
    about: {
      section: "Sobre mí",
      heading: "El ingeniero",
      headingGradient: "detrás del trabajo",
      paragraphs: [
        "Soy estudiante de Ingeniería Mecatrónica en UTEC con experiencia práctica en diseño de chips, sistemas embebidos, infraestructura TI y modelos de predicción con IA. Mi trabajo conecta el mundo físico y el digital — desde diseñar drivers de alto voltaje de 20 kV para robótica blanda hasta construir aplicaciones SoC en FPGA y redes IoT de largo alcance.",
        "Me desenvuelvo bien en entornos multidisciplinarios y absorbo nuevos dominios con rapidez, ya sea SystemVerilog para diseño RTL en Canadá o Python con Filtros de Kalman para modelos financieros. Me importa la precisión, la confiabilidad y llevar los sistemas al límite.",
        "Actualmente co-fundando Quadro mientras termino mi carrera en UTEC (graduándome en febrero 2026), y buscando activamente oportunidades donde la ingeniería rigurosa se encuentre con la innovación real.",
      ],
      emailBtn: "Escríbeme",
      stats: [
        { value: "5+", label: "Años en TI" },
        { value: "2", label: "Co-ops Intl." },
        { value: "97%", label: "Prec. del Modelo" },
      ],
      quote:
        "De drivers robóticos de 20 kV a modelos de trading con IA — construyo sistemas que operan al límite.",
    },
    skills: {
      section: "Habilidades",
      heading: "Del silicio a la",
      headingGradient: "inteligencia",
      subtitle:
        "Disciplinas de hardware y software a lo largo del stack de mecatrónica.",
      categories: [
        "Lenguajes",
        "Diseño de Chips y FPGAs",
        "Embebidos y Potencia",
        "Control y Automatización",
        "IA y Ciencia de Datos",
        "Herramientas e Infraestructura",
      ],
    },
    projects: {
      section: "Proyectos",
      heading: "Lo que he",
      headingGradient: "construido",
      statusLabel: {
        completed: "Completado",
        "in-progress": "En progreso",
        planned: "Planificado",
      },
      privateLabel: "Privado",
      liveDemo: "Demo en vivo ↗",
      items: [
        {
          title: "Sistema de Alta Tensión para Robot HASEL",
          summary:
            "Los robots blandos necesitan control preciso de alto voltaje que los drivers comerciales no pueden proveer. Diseñé un generador multicanal de 20 kV con retroalimentación de lazo cerrado — devanados secundarios de transformador, divisores de tensión de precisión y ADC de microcontrolador — para accionar con seguridad actuadores HASEL en mi robot de tesis.",
        },
        {
          title: "Modelo de Predicción Bursátil con FinBERT",
          summary:
            "Los mercados reaccionan a las noticias antes de que los precios lo reflejen — aproveché esa ventaja. Construí un sistema de predicción híbrido que fusiona análisis de sentimiento con FinBERT, modelado de series temporales con LSTM y un Filtro de Kalman para estimación de estado. Logré un 97% de precisión en pruebas cerradas.",
        },
        {
          title: "Sistema de Control para Barrera de Carretera",
          summary:
            "La infraestructura vial exige tolerancia cero a fallos. Construí el stack de control completo para un sistema de barrera automatizada — NI MyRIO gestionando el control de motor en tiempo real, Raspberry Pi con la lógica supervisora, máquinas de estado imponiendo enclavamientos de seguridad — desplegado y operativo en campo.",
        },
        {
          title: "Red IoT LoRa MESH de Largo Alcance",
          summary:
            "Las redes inalámbricas estándar fallan en entornos industriales remotos. Diseñé y desplegué una red LoRa MESH que transporta datos de sensores y comandos de actuadores a distancias donde WiFi y celular no llegan, con firmware personalizado y capas de protocolo para comunicación multi-salto confiable.",
        },
        {
          title: "Instalación de Sistema de Energía Solar",
          summary:
            "Entregué instalaciones solares aisladas e híbridas para clientes reales — desde el diseño del arreglo fotovoltaico y selección del inversor hasta el dimensionamiento del banco de baterías para Litio y Plomo-Ácido. Cada sistema fue ingenierizado, no ensamblado: análisis de carga, tolerancia a fallos y confiabilidad a largo plazo.",
        },
      ],
    },
    experience: {
      section: "Experiencia",
      heading: "Dónde he",
      headingGradient: "trabajado y estudiado",
      workLabel: "Experiencia Laboral",
      educationLabel: "Educación",
      cvTeaser: "¿Quieres ver más detalles?",
      cvSub: "Descarga mi CV para más información.",
      cvBtn: "CV ↓",
      items: [
        {
          description: [
            "Co-fundé una empresa tecnológica enfocada en soluciones de productos basadas en ingeniería.",
            "Lidero la dirección del producto, la arquitectura técnica y la estrategia de desarrollo de negocio.",
          ],
        },
        {
          description: [
            "Lidero el soporte técnico de todos los proyectos de la empresa como líder de equipo, con participación personal en cada solución.",
            "Gestiono equipos multifuncionales y entrego soluciones técnicas integrales para infraestructura crítica.",
            "Responsable de la confiabilidad, el rendimiento y la escalabilidad de la infraestructura TI en toda la organización.",
          ],
        },
        {
          description: [
            "Puesto de co-op enfocado en ingeniería de hardware y proyectos de diseño de chips.",
            "Contribuí al diseño de sistemas basados en FPGA y pipelines de desarrollo RTL.",
          ],
        },
        {
          description: [
            "Desarrollé aplicaciones FPGA de alta velocidad utilizando SystemVerilog y VHDL.",
            "Implementé diseños RTL para pipelines de procesamiento embebido, desde especificación hasta síntesis.",
          ],
        },
      ],
      education: [
        {
          degree: "Licenciatura en Ingeniería Mecatrónica",
          description:
            "Programa integral de ingeniería que cubre robótica, sistemas de control, electrónica embebida, diseño mecánico y sistemas inteligentes. Tesis sobre electrónica de potencia de alto voltaje para robots blandos con actuadores HASEL.",
        },
      ],
    },
    contact: {
      section: "Contacto",
      heading: "Trabajemos",
      headingGradient: "juntos",
      body: "Si tienes un proyecto en mente, quieres colaborar o simplemente saludar — mi correo siempre está abierto. Te respondo con prontitud.",
      cta: "Escríbeme",
    },
  },
} as const;
