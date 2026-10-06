export const personalInfo = {
  name: "Tanishk Patidar",
  role: "Full-Stack Developer / Software Engineer",
  headline: "Full-Stack Developer | DSA in C++ | Node.js | Express.js | MongoDB",
  avatar: "/images/profile/tanishk-avatar.png",
  summary:
    "Information Technology student at IIPS, DAVV passionate about building modern web applications, scalable backend systems, and solving algorithmic problems in C++. Focused on turning ideas into practical, high-impact digital solutions.",
  bio: [
    "I'm an Information Technology student at IIPS, DAVV, passionate about building practical software and solving real-world problems through technology.",
    "My development journey spans both frontend and backend development. I enjoy creating responsive interfaces, building REST APIs, working with databases, and turning ideas into functional applications using JavaScript, React, Next.js, Node.js, Express.js, and MongoDB.",
    "Alongside development, I'm strengthening my Data Structures & Algorithms skills in C++ through pattern-based problem solving.",
    "I believe the best way to learn is by building, experimenting, and solving problems that push me beyond what I already know.",
    "My goal is to grow into a Full-Stack Developer and Software Engineer capable of building reliable, scalable, and meaningful digital products.",
  ],
  socials: {
    github: "https://github.com/patidartanishk",
    linkedin: "https://www.linkedin.com/in/tanishk-patidar-663b53378",
  },
  university: "IIPS, DAVV, Indore",
  degree: "B.Tech + M.Tech (IT) Dual Degree",
  cgpa: "9.41 / 10",
};

export const skillsData = {
  languages: [
    { name: "C++", level: "DSA & Core", category: "Language" },
    { name: "C", level: "Foundations", category: "Language" },
    { name: "JavaScript", level: "ES6+ / Modern", category: "Language" },
    { name: "Java", level: "OOP Basics", category: "Language" },
  ],
  frontend: [
    { name: "React.js", category: "Frontend" },
    { name: "Next.js", category: "Frontend" },
    { name: "Tailwind CSS", category: "Frontend" },
    { name: "HTML5", category: "Frontend" },
    { name: "CSS3", category: "Frontend" },
  ],
  backend: [
    { name: "Node.js", category: "Backend" },
    { name: "Express.js", category: "Backend" },
    { name: "REST APIs", category: "Backend" },
    { name: "CRUD Operations", category: "Backend" },
  ],
  database: [
    { name: "MongoDB", category: "Database" },
    { name: "Mongoose", category: "Database" },
    { name: "MongoDB Compass", category: "Database" },
  ],
  tools: [
    { name: "Git", category: "Tools" },
    { name: "GitHub", category: "Tools" },
    { name: "Postman", category: "Tools" },
    { name: "VS Code", category: "Tools" },
  ],
  currentLearning: {
    title: "Data Structures & Algorithms (C++)",
    status: "Active Problem Solving & Pattern Mastery",
    patterns: [
      "Two Pointer",
      "Sliding Window",
      "Kadane's Algorithm",
      "Prefix Sum",
      "Merge Intervals",
      "Hash Map",
      "Binary Search",
      "Linked List",
      "Stack",
      "Queue",
      "Trees",
      "Graphs",
    ],
  },
};

export const experienceData = [
  {
    company: "AntiLabs",
    role: "Junior Web Developer",
    period: "June 2026 – July 2026",
    type: "Internship / Practical Engineering",
    points: [
      "Developed responsive and scalable web applications using Next.js, React.js, JavaScript, HTML5, CSS3, Tailwind CSS, and Bootstrap Icons.",
      "Contributed to frontend development for real-world client projects across education, healthcare, and non-profit sectors.",
      "Designed intuitive, user-focused interfaces and converted UI/UX concepts into responsive and reusable frontend components.",
      "Participated in pre-development testing, design validation, and requirement analysis.",
      "Redesigned and enhanced existing websites, improving visual consistency, accessibility, responsiveness, and user experience.",
      "Built interactive landing pages, navigation systems, reusable UI components, legal pages, and donation workflows.",
      "Tested, debugged, and optimized frontend functionality, collaborating with cross-functional teams to deliver client-aligned solutions.",
    ],
    selectedContributions: [
      {
        project: "Competitor SEO Optimizer",
        detail: "Frontend UI and SEO-related implementation for competitor analyzer",
      },
      {
        project: "Healing Coach",
        detail: "Landing-page experience, hero section, and responsive frontend UI",
      },
      {
        project: "Preschool Website",
        detail: "Responsive educational website development and child journey UI",
      },
      {
        project: "Orphanage Website",
        detail: "Responsive non-profit website with donation-focused user experience",
      },
      {
        project: "Healthcare / AI Clinic",
        detail: "Healthcare-oriented frontend presentation and digital triage layout",
      },
    ],
    technologies: [
      "Next.js",
      "React.js",
      "JavaScript",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
      "Bootstrap Icons",
      "Component Architecture",
    ],
  },
];

export const projectsData = [
  {
    id: "sagar-netra",
    featured: true,
    title: "Sagar Netra",
    subtitle: "Maritime Oil-Spill Detection & Satellite Monitoring",
    description:
      "Smart India Hackathon 2026 prototype solution developed by Team Straw Hat Pirates. Focuses on satellite-based ocean monitoring, automated oil spill detection, vessel AIS telemetry integration, and interactive coastal mapping for rapid response.",
    image: "/images/projects/sagar-netra-cover.svg",
    tags: ["SIH 2026", "Maritime AI", "Satellite Monitoring"],
    contribution:
      "Team Leader: Problem statement analysis, technical research, prototype architecture, UI design, and presentation.",
    technologies: [
      "Python",
      "Satellite Telemetry",
      "Next.js",
      "React.js",
      "Tailwind CSS",
      "Data Analytics",
    ],
    demoUrl: null,
    githubUrl: "https://github.com/patidartanishk",
    badge: "Smart India Hackathon 2026 Qualified",
  },
  {
    id: "clothing-store",
    featured: true,
    title: "Boutique Clothing Store Platform",
    subtitle: "Modern Responsive E-Commerce & Lookbook Showcase",
    description:
      "A modern, responsive clothing store website and product showcase designed with high visual fidelity. Features curated collections, responsive customer inquiries, seamless catalog browsing, and an admin workflow allowing store owners to update imagery without editing source code.",
    image: "/images/projects/clothing-store-cover.svg",
    tags: ["Client Project", "E-Commerce", "Responsive UI"],
    contribution:
      "Full frontend development, product presentation, responsive UI, customer inquiry channels, and dynamic content update integration.",
    technologies: [
      "Next.js",
      "React.js",
      "Tailwind CSS",
      "Dynamic Catalog Engine",
      "Responsive UI",
    ],
    demoUrl: null,
    githubUrl: "https://github.com/patidartanishk",
  },
  {
    id: "competitor-seo-optimizer",
    featured: true,
    title: "Competitor SEO Optimizer",
    subtitle: "AI-Powered Website & Competitor SEO Intelligence",
    description:
      "An AI-powered web application that analyzes and compares websites and generates actionable SEO recommendations to identify optimization opportunities. Features competitor domain benchmarking, robots.txt and sitemap.xml audits, and multi-provider AI recommendations.",
    image: "/images/projects/competitor-seo-cover.svg",
    tags: ["Internship Project", "AI / SEO", "Web App"],
    contribution:
      "Practical frontend/UI development for the Competitor Analyzer landing page (frontend/src/app/competitor-analyzer/page.tsx), SEO-related implementation, and AntiLabs branding assets.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Python",
      "FastAPI",
      "Google Gemini",
    ],
    demoUrl: null,
    githubUrl: "https://github.com/patidartanishk",
    badge: "AntiLabs Internship Project",
  },
  {
    id: "healing-coach",
    featured: false,
    title: "Healing Coach",
    subtitle: "Modern Wellness-Focused Web Experience",
    description:
      "A modern wellness and mindfulness landing page developed during the AntiLabs internship. Designed with an editorial aesthetic, featuring a tranquil first-screen hero experience, responsive navigation, and wellness-oriented branding.",
    image: "/images/projects/healing-coach-cover.svg",
    tags: ["Internship Project", "Frontend Development", "Wellness Web"],
    contribution:
      "Frontend/UI development for the landing page experience, specifically focusing on the hero section, responsive navigation, typography styling, and branding assets.",
    technologies: [
      "Next.js (App Router)",
      "TypeScript",
      "Tailwind CSS",
      "next/font",
      "Inter & Cormorant Garamond",
    ],
    demoUrl: null,
    githubUrl: "https://github.com/patidartanishk",
  },
  {
    id: "ebenezer-childcare",
    featured: false,
    title: "Ebenezer Child Care Centre",
    subtitle: "Non-Profit Child Care & Community Welfare Web Platform",
    description:
      "A warm, purpose-driven web platform developed for a child-care and non-profit organization. Features hero impact storytelling, organization statistics, program missions, and an intuitive, accessible donation UX workflow.",
    image: "/images/projects/ebenezer-childcare-cover.svg",
    tags: ["Client Project", "Non-Profit", "Donation UX"],
    contribution:
      "Frontend development for landing page, reusable UI components, program showcases, and donation-focused user experience.",
    technologies: [
      "Next.js",
      "React.js",
      "Tailwind CSS",
      "Accessible UI",
      "Donation UX",
    ],
    demoUrl: null,
    githubUrl: "https://github.com/patidartanishk",
  },
  {
    id: "preschool-website",
    featured: false,
    title: "Early Discovery Preschool Portal",
    subtitle: "Interactive Early Childhood Educational Landing Platform",
    description:
      "A bright, responsive educational platform built for early-childhood learning. Features interactive child developmental journeys, curriculum learning pillars, parent reviews, and responsive component architecture.",
    image: "/images/projects/preschool-cover.svg",
    tags: ["Client Project", "Education", "Interactive UI"],
    contribution:
      "Frontend web development, educational landing UI, child learning journey sections, and parent testimonial components.",
    technologies: [
      "Next.js",
      "React.js",
      "Tailwind CSS",
      "Educational UI",
    ],
    demoUrl: null,
    githubUrl: "https://github.com/patidartanishk",
  },
  {
    id: "ai-clinic",
    featured: false,
    title: "AI Medical Clinic Digital Platform",
    subtitle: "Modern Healthcare & Intelligent Intake Interface",
    description:
      "A modern healthcare web project showcasing AI-oriented clinical triage flows, interactive doctor appointment scheduling, responsive patient telemetry presentation, and clean healthcare UI aesthetics.",
    image: "/images/projects/ai-clinic-cover.svg",
    tags: ["Client Project", "Healthcare", "Web App"],
    contribution:
      "Healthcare-oriented frontend UI implementation, medical service sections, responsive layouts, and patient intake presentation.",
    technologies: [
      "Next.js",
      "React.js",
      "Tailwind CSS",
      "Healthcare UI",
    ],
    demoUrl: null,
    githubUrl: "https://github.com/patidartanishk",
  },
  {
    id: "amazon-clone",
    featured: false,
    secondary: true,
    title: "Amazon Web Clone",
    subtitle: "Frontend E-Commerce Experience Recreation",
    description:
      "Responsive frontend replication of core e-commerce shopping workflows, featuring multi-category navigation, product listing grids, cart state interactions, and layout responsiveness.",
    image: "/images/projects/amazon-clone-cover.svg",
    tags: ["Practice Project", "Frontend"],
    contribution: "Frontend coding, layout recreation, and interactive styling.",
    technologies: ["JavaScript", "HTML5", "CSS3", "Responsive UI"],
    demoUrl: null,
    githubUrl: "https://github.com/patidartanishk",
  },
  {
    id: "tic-tac-toe",
    featured: false,
    secondary: true,
    title: "Interactive Tic-Tac-Toe",
    subtitle: "Two-Player Game with Dynamic Game State",
    description:
      "Classic strategy game implementation using pure JavaScript logic. Handles turn alternation, win-matrix verification, draw detection, score tracking, and smooth board resets.",
    image: "/images/projects/tictactoe-cover.svg",
    tags: ["Interactive Game", "Vanilla JS"],
    contribution: "Game state algorithm, turn logic, DOM manipulation, and styling.",
    technologies: ["JavaScript", "DOM Manipulation", "CSS3"],
    demoUrl: null,
    githubUrl: "https://github.com/patidartanishk",
  },
];

export const achievementsData = [
  {
    id: "codeneeti-2026",
    title: "2nd Runner-Up — CodeNeeti 2026",
    track: "Cybersecurity Track",
    badge: "🏆 2nd Runner-Up",
    organization:
      "Prestige Institute of Engineering Management & Research (PIEMR), Indore",
    projectTitle: "ML-based Intrusion Detection System",
    description:
      "Developed an ML-based Intrusion Detection System designed to monitor network traffic in real time and identify known and evolving attack patterns. Also engineered a bot simulator to rigorously test the system against simulated cyber attacks under tight hackathon time constraints.",
    team: ["Tanishk Patidar", "Pratham Shalya", "Yash Baswal"],
    skills: [
      "Machine Learning",
      "Cybersecurity",
      "System Development",
      "Bot Simulator Testing",
      "Team Collaboration",
      "Problem Solving",
    ],
  },
  {
    id: "sih-2026",
    title: "Smart India Hackathon 2026",
    track: "Internal Hackathon Qualified",
    badge: "🏅 Qualified Finalist",
    organization: "Devi Ahilya Vishwavidyalaya (DAVV), Indore",
    role: "Team Leader — Team Straw Hat Pirates",
    projectTitle: "Sagar Netra (Maritime Oil-Spill Detection)",
    description:
      "Led team Straw Hat Pirates through problem statement analysis, technical research, solution architecture, prototype development, and final presentation for maritime satellite oil-spill monitoring.",
    team: [
      "Tanishk Patidar (Team Leader)",
      "Yash Baswal",
      "Yash Soni",
      "Yugal Varshney",
      "Rudrak Patidar",
      "Nandini Rathore",
    ],
    skills: [
      "Technical Leadership",
      "Problem Solving",
      "Solution Design",
      "Technical Research",
      "Team Coordination",
      "Presentation",
    ],
    projectLink: "#projects",
  },
];

export const certificationsData = [
  {
    title: "Introduction to Programming Using Python",
    category: "Programming & Foundations",
  },
  {
    title: "Certificate of Completion — Basics of C",
    category: "Core Computing",
  },
  {
    title: "CodeNeeti 2026 — Certificate of Participation & Achievement",
    category: "Hackathon & Cybersecurity",
  },
  {
    title: "Certificate of Completion — Introduction to C++",
    category: "DSA & OOP Foundations",
  },
];

export const educationData = [
  {
    institution:
      "International Institute of Professional Studies (IIPS), DAVV, Indore",
    degree: "B.Tech + M.Tech in Information Technology",
    type: "Dual Degree — 5-Year Integrated Program",
    period: "September 2025 – June 2030",
    cgpa: "9.41 / 10 CGPA",
    description:
      "Comprehensive program covering Core Computer Science, Software Engineering, Data Structures & Algorithms, Database Systems, Computer Networks, and Advanced IT Architecture.",
    location: "Indore, Madhya Pradesh",
  },
  {
    institution: "New Talent Public H.S. School, Rajgarh",
    degree: "Higher Secondary (Class XII)",
    type: "Physics, Chemistry, Mathematics (PCM)",
    period: "June 2023 – April 2024",
    location: "Rajgarh, Madhya Pradesh",
  },
  {
    institution: "SRV Sanskar Dham, Rajgarh",
    degree: "Secondary School (Class X)",
    type: "General High School Studies",
    period: "June 2021 – April 2022",
    location: "Rajgarh, Madhya Pradesh",
  },
];
