/**
 * Single source of truth for Paras Bhalala's Portfolio
 * Updated with exact technical arsenal and projects requested
 */

export const profile = {
  name: "PARAS BHALALA",
  callsign: "DOSSIER // 20240089010006",
  headline: "Hi, I'm Paras Bhalala",
  subheading: "Assistant Software Engineer & M.Sc IT Graduate",
  // status: "AVAILABLE FOR OPPORTUNITIES",
  location: "Ahmedabad, Gujarat, IN",
  coordinates: "23.02°N 72.57°E",
  elevation: "53M MSL",
  sector: "SECTOR 07 // WEST COMMAND",
  tagline: "Passionate about creating intuitive digital experiences. Specializing in Vue, Nuxt, JavaScript, and Modern Web Development. Based in Ahmedabad.",
  bio: [
    "I have completed my Master of Science in Information Technology at GLS University with academic distinction. Currently serving as an Assistant Software Engineer at 7Span, I engineer modular, high-fidelity web applications with structured modern architectures.",
    "I am dedicated to continuous learning, adaptation, and engineering excellence. Beyond coding, I have demonstrated leadership and discipline through my NCC 'A' & 'B' certificates and consistently ranking at the top of my semesters.",
    "Formed under the disciplined regimen of Sainik School Balachadi and the National Cadet Corps, I approach software engineering with precision, structured problem solving, and relentless operational focus."
  ],
  photoUrl: "/profile.png",
  resumeUrl: "/20240089010006_ParasBhalala.pdf",
  socials: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/paras-bhalala-954b3b247/",
      handle: "paras-bhalala-954b3b247",
      callsign: "LNKD-01"
    },
    {
      name: "GitHub",
      url: "https://github.com/Paras-Bhalala",
      handle: "Paras-Bhalala",
      callsign: "GTHB-02"
    },
    {
      name: "Email",
      url: "mailto:parasbhalala04@gmail.com",
      address: "parasbhalala04@gmail.com",
      callsign: "COMM-03"
    }
  ],
  marqueeItems: [
    "ASSISTANT SOFTWARE ENGINEER",
    "VUE & NUXT 3",
    "JAVASCRIPT (ES6+)",
    "TAILWIND CSS",
    "DIRECTUS HEADLESS CMS",
    "SAINIK SCHOOL BALACHADI",
    "ACTIVE DUTY // 7SPAN",
    "AHMEDABAD 23.02°N 72.57°E"
  ]
};

export const experience = [
  {
    role: "Assistant Software Engineer",
    organization: "7Span",
    location: "Ahmedabad, Gujarat",
    period: "Oct 2026 - Present",
    status: "PROMOTED // ACTIVE DUTY",
    badge: "PROMOTED - 7SPAN",
    description: "Promoted to Assistant Software Engineer from intern this month. Architecting responsive frontend systems, production UI components, and real-world web applications.",
    milestones: [
      "Engineering modular, high-fidelity Vue 3 and Nuxt applications with structured state and component architectures.",
      "Collaborating across cross-functional engineering sprints, contributing to frontend system design and code reviews.",
      "Transitioned from internship to core engineering responsibilities, driving performant web experiences for clients."
    ]
  },
  {
    role: "Frontend Developer Intern",
    organization: "7Span",
    location: "Ahmedabad, Gujarat",
    period: "2026 - Oct 2026",
    status: "COMPLETED",
    badge: "INTERNSHIP COMPLETED",
    description: "Assisted in developing responsive frontend components and learning real-world engineering workflows.",
    milestones: [
      "Built responsive, accessible UI modules and resolved visual fidelity and cross-device layout challenges.",
      "Adopted production engineering best practices, git branching workflows, and agile team collaboration."
    ]
  }
];

export const skills = [
  {
    id: "html-css",
    name: "HTML and CSS",
    category: "FOUNDATION",
    desc: "Semantic structure & modern styling",
    angle: 25,
    distance: 95,
    specs: ["Semantic HTML5", "Modern CSS", "Flexbox & CSS Grid", "Responsive Design"]
  },
  {
    id: "bootstrap",
    name: "Bootstrap",
    category: "FRAMEWORK",
    desc: "Responsive grid systems & rapid scaffolding",
    angle: 75,
    distance: 86,
    specs: ["12-Column Grid", "Responsive Breakpoints", "Utility Classes", "Component Scaffolding"]
  },
  {
    id: "tailwind",
    name: "Tailwind",
    category: "UTILITY CSS",
    desc: "Utility-first modern design architecture",
    angle: 125,
    distance: 92,
    specs: ["Utility-First Workflow", "Custom Config & Themes", "JIT Engine", "Design Token Systems"]
  },
  {
    id: "js",
    name: "JS",
    category: "CORE ENGINE",
    desc: "Modern JavaScript (ES6+) & DOM manipulation",
    angle: 175,
    distance: 96,
    specs: ["Modern ES6+ Syntax", "DOM Manipulation", "Async/Await & Promises", "Event-Driven Logic"]
  },
  {
    id: "vue",
    name: "Vue",
    category: "REACTIVE UI",
    desc: "Vue 3 Composition API & component architecture",
    angle: 225,
    distance: 94,
    specs: ["Composition API", "Vue Reactivity Core", "State Management", "Component Lifecycle"]
  },
  {
    id: "nuxt",
    name: "NUXT",
    category: "FULL-STACK SSG/SSR",
    desc: "Nuxt 3 universal rendering & performance",
    angle: 275,
    distance: 92,
    specs: ["SSR & Static Generation", "Auto-Import System", "Nitro Server Engine", "SEO & Meta Optimization"]
  },
  {
    id: "directus",
    name: "Directus",
    category: "HEADLESS CMS",
    desc: "Headless data platform & API management",
    angle: 325,
    distance: 88,
    specs: ["Data Modeling", "REST & GraphQL APIs", "Content Collections", "Role-Based Access"]
  }
];

export const education = [
  {
    degree: "M.Sc in Information Technology",
    institution: "GLS University",
    location: "Ahmedabad",
    period: "2024 - 2026",
    metricLabel: "Academic Merit",
    metricValue: "8.64 / 10.0 CGPA",
    achievements: [
      "Graduated with Distinction & High Academic Honors",
      "Secured 1st Rank in Sem 3, 2nd Rank in Sem 2, 3rd Rank in Sem 1"
    ],
    stamps: ["COMPLETED", "TOP RANK", "DISTINCTION"],
    callsign: "SEC-01 // POSTGRADUATE"
  },
  {
    degree: "B.Sc in Information Technology",
    institution: "Saurashtra University",
    location: "Rajkot",
    period: "2021 - 2024",
    metricLabel: "Final CGPA",
    metricValue: "8.23 / 10.0",
    achievements: [
      "Graduated with First Class Distinction",
      "Rigorous foundations in algorithms, databases, and software design"
    ],
    stamps: ["FIRST CLASS"],
    callsign: "SEC-02 // UNDERGRADUATE"
  },
  {
    degree: "HSC - CBSE Board",
    institution: "Sainik School Balachadi",
    location: "Jamnagar",
    period: "2020 - 2021",
    metricLabel: "CBSE Score",
    metricValue: "72%",
    achievements: [
      "National Cadet Corps (NCC) 'B' Certificate",
      "Leadership training, discipline, and endurance drills"
    ],
    stamps: ["NCC 'B' CERT", "CADET"],
    callsign: "SEC-03 // DEFENCE PREP"
  },
  {
    degree: "SSC - CBSE Board",
    institution: "Sainik School Balachadi",
    location: "Jamnagar",
    period: "2018 - 2019",
    metricLabel: "CBSE Score",
    metricValue: "84%",
    achievements: [
      "National Cadet Corps (NCC) 'A' Certificate",
      "Honors in academics and military training"
    ],
    stamps: ["NCC 'A' CERT", "HONOR ROLL"],
    callsign: "SEC-04 // JUNIOR CADET"
  }
];

export const projects = [
  {
    id: "d2c-guru",
    callsign: "MSN-01 // BRAND-INTEL",
    name: "D2C Guru",
    status: "OPERATIONAL",
    statusType: "success",
    summary: "D2C brands listing platform showcasing brand intelligence, media galleries, tag classifications, and category-based filtering.",
    stack: ["NUXT", "Vue", "Directus", "Tailwind", "JS"],
    objectives: [
      "Comprehensive D2C brand directory with high-res media & brand profiles",
      "Dynamic multi-category taxonomies & tag filtering system",
      "Faceted instant search across industry verticals and price tiers",
      "Direct brand exploration with organized metadata and product lines"
    ],
    debriefUrl: "https://github.com/Paras-Bhalala",
    graphicCode: "D2C-DIR-01",
    graphic: "/projects/d2cguru.svg"
  },
  {
    id: "used-cars-platform",
    callsign: "MSN-02 // AUTO-VAULT",
    name: "Used Cars Listing Platform",
    status: "OPERATIONAL",
    statusType: "success",
    summary: "Pre-owned vehicle marketplace showcasing comprehensive vehicle specs, seller inquiries, and instant test drive booking.",
    stack: ["NUXT", "Vue", "JS", "Tailwind"],
    objectives: [
      "Detailed specs matrix: engine type, color, body style, fuel type & mileage",
      "Direct 'Contact Seller' engagement channel with integrated dispatch",
      "Instant 'Book Test Drive' appointment scheduling workflow",
      "Multi-parameter vehicle filtering by transmission, fuel, and budget"
    ],
    debriefUrl: "https://github.com/Paras-Bhalala",
    graphicCode: "AUTO-SPEC-02",
    graphic: "/projects/usedcars.svg"
  },
  {
    id: "ani-help",
    callsign: "MSN-03 // RESCUE-NET",
    name: "Ani Help",
    status: "OPERATIONAL",
    statusType: "success",
    summary: "Flutter-based mobile application connecting injured animals with nearby rescue NGOs.",
    stack: ["Flutter", "Django API", "MySQL"],
    objectives: [
      "Built responsive UI using Flutter",
      "Integrated Django REST API",
      "MySQL structured database",
      "NGO filtering & emergency user dispatch system"
    ],
    debriefUrl: "https://github.com/Paras-Bhalala",
    graphicCode: "FLT-DJG-03",
    graphic: "/projects/anihelp.svg"
  },
  {
    id: "responsive-blog",
    callsign: "MSN-04 // CHRONICLE",
    name: "Responsive Blog Website",
    status: "ARCHIVED",
    statusType: "neutral",
    summary: "Multi-page blog platform with clean UI and structured category navigation.",
    stack: ["Bootstrap", "HTML and CSS", "JS"],
    objectives: [
      "Responsive grid layout across all screen breakpoints",
      "Category-based article navigation & reading system",
      "Clean typography and structured layout",
      "Mobile-optimized performance"
    ],
    debriefUrl: "https://github.com/Paras-Bhalala",
    graphicCode: "WEB-BST-04",
    graphic: "/projects/blog.svg"
  }
];
