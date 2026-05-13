export const profile = {
  name: "Asutosh Behera",
  initials: "AB",
  role: "Software Engineer",
  tagline: "I build scalable web platforms, AI-powered tools and delightful user experiences.",
  location: "Bhubaneswar, Odisha — India",
  email: "asutoshbehera5@gmail.com",
  socials: {
    github: "https://github.com/asutoshb",
    linkedin: "https://www.linkedin.com/in/asutosh-behera-491908190/",
    twitter: "https://twitter.com/asutoshbehera5",
    hashnode: "https://asutoshblog.hashnode.dev",
  },
  about: [
    "I'm a passionate full-stack engineer focused on building products that scale and feel effortless to use.",
    "Currently shipping AI-powered features and security-critical workflows at Tessell, while also driving growth-impacting work at Vyapar.",
    "I love clean abstractions, performance budgets, design systems and learning something new every week.",
  ],
  hobbies: ["Reading novels", "Playing cricket", "Writing tech blogs", "Travelling"],
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  location?: string;
  bullets: string[];
  tags?: string[];
};

export const experience: Experience[] = [
  {
    company: "Tessell",
    role: "SDE 2",
    period: "Apr 2025 — Present",
    location: "Bangalore, India",
    bullets: [
      "Built an AI-powered MCP blog publishing pipeline that turns GitHub commits into SEO-optimised posts and auto-publishes to Sanity CMS & Hashnode — days to minutes.",
      "Shipped Alert Policy (ECIF) for the Observability platform — metric-based alerts with multi-channel delivery for enterprise customers.",
      "Hardened auth by moving access tokens in-memory and refresh tokens to HttpOnly cookies — mitigating XSS/CSRF and unblocking PCI compliance.",
      "Added Subresource Integrity (SRI) for third-party scripts and styles to block tampered CDN resources.",
      "Rolled out MFA with email OTP as a second authentication factor across the product.",
    ],
    tags: ["React", "TypeScript", "MCP", "AI", "Security", "Observability"],
  },
  {
    company: "Vyapar",
    role: "Software Engineer II",
    period: "Dec 2021 — Mar 2025",
    location: "Bangalore, India",
    bullets: [
      "Designed and shipped User Role Permissions over WebSocket + React, expanding license sales by enabling multi-role company sharing.",
      "Built in-app + push notifications using Electron Push Receiver, Firebase and Clevertap to power campaign delivery for marketing teams.",
      "Integrated E-invoice onboarding via Master India APIs for seamless invoice management.",
      "Launched WhatsApp marketing flows with personalized branding templates, partnering with Brands.live to lift sales conversions.",
      "Led Redux integration in the Electron app, anchoring state management for the next product release.",
    ],
    tags: ["React", "Electron", "Redux", "WebSocket", "Firebase"],
  },
  {
    company: "IIT Guwahati",
    role: "Student Intern",
    period: "Mar 2019 — Jul 2019",
    bullets: [
      "Built a portable vein-viewer device on Raspberry Pi to help nurses locate veins while administering injections.",
    ],
    tags: ["Raspberry Pi", "Hardware", "Python"],
  },
];

export type Project = {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  blog?: string;
  highlight?: boolean;
};

export const projects: Project[] = [
  {
    title: "Welth — AI Finance Platform",
    description:
      "AI-powered financial management platform that tracks, analyzes and optimizes spending with real-time insights.",
    tech: ["Next.js", "TypeScript", "Prisma", "Tailwind", "Resend", "Inngest"],
    github: "https://github.com/asutoshb/Welth-Ai-Finance-platform",
    live: "https://welth-ai-finance-platform-taupe.vercel.app/",
    highlight: true,
  },
  {
    title: "Quora Clone",
    description:
      "A knowledge-sharing platform where users ask questions and connect with people contributing unique insights.",
    tech: ["React", "Firebase", "Node.js", "JavaScript"],
    github: "https://github.com/santoshmcode/quora-clone",
    live: "https://quora-app.netlify.app/",
    blog: "https://asutoshblog.hashnode.dev/experience-of-cloning-quora",
  },
  {
    title: "Medium Clone",
    description:
      "A blogging platform where users read and write blogs from creators around the world.",
    tech: ["React", "MongoDB", "Node.js", "CSS"],
    github: "https://github.com/shivam-singh-au17/ProjectMediumClone",
    blog: "https://asutoshblog.hashnode.dev/medium-clone",
  },
  {
    title: "Frontend Masters Clone",
    description:
      "An e-learning platform aggregating frontend courses with full backend support.",
    tech: ["Express", "MongoDB", "Node.js", "CSS"],
    github: "https://github.com/asutoshb/Frontend-Masters",
    blog: "https://asutoshblog.hashnode.dev/frontend-masters-clone-using-mongodb-database",
  },
  {
    title: "Grocery App",
    description: "A simple, fast grocery management app for everyday users.",
    tech: ["React", "CSS"],
    github: "https://github.com/asutoshb/grocery-store",
    live: "https://asutoshb.github.io/grocery-store/",
  },
  {
    title: "Tic-Tac-Toe",
    description: "A classic tic-tac-toe game with full move history.",
    tech: ["React", "CSS"],
    github: "https://github.com/asutoshb/Tic-Tac-Toe-react",
    live: "https://asutoshb.github.io/Tic-Tac-Toe-react/",
  },
];

export const skills = {
  Languages: ["JavaScript", "TypeScript", "Python", "HTML", "CSS"],
  Frameworks: ["React", "Next.js", "Node.js", "Express", "Electron", "Redux"],
  Databases: ["MongoDB", "PostgreSQL", "Firebase"],
  Tools: ["Git", "GitHub", "VS Code", "Postman", "Vercel", "AWS"],
  Concepts: ["REST APIs", "WebSockets", "System Design", "Auth & MFA", "AI Integration"],
};

export type Education = {
  school: string;
  course: string;
  period: string;
  notes?: string[];
};

export const education: Education[] = [
  {
    school: "Masai School",
    course: "Full Stack Web Development",
    period: "Apr 2021 — Dec 2021",
    notes: [
      "1300+ hours of hands-on coding experience",
      "Solved 300+ Data Structures & Algorithms problems",
      "100+ hours of soft-skills training",
    ],
  },
  {
    school: "NIT Meghalaya",
    course: "B.Tech, Electronics & Communication Engineering",
    period: "2016 — 2020",
    notes: ["CGPA 8.94 — First Class with Distinction"],
  },
  {
    school: "Kendriya Vidyalaya, Bhubaneswar",
    course: "12th — CBSE",
    period: "2015 — 2016",
    notes: ["90% aggregate"],
  },
  {
    school: "Kendriya Vidyalaya, Bhubaneswar",
    course: "10th — CBSE",
    period: "2013 — 2014",
    notes: ["CGPA 10"],
  },
];

export type Achievement = {
  title: string;
  detail: string;
  icon: "trophy" | "cricket" | "award";
};

export const achievements: Achievement[] = [
  {
    title: "Annual College Tech Fest — Hackathon Winner",
    detail:
      "Won a ₹22,000 cash prize as a 4-member team at NIT Meghalaya's annual technical fest, building working bots that competed against other teams.",
    icon: "trophy",
  },
  {
    title: "Intra-Collegiate Cricket Tournament — 1st Place",
    detail:
      "Won first place in the Intra-Collegiate Cricket Tournament representing my batch.",
    icon: "cricket",
  },
];
