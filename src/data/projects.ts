import type { Project } from "@/types/content";

export const projects: Project[] = [
  {
    slug: "retiro-del-rocio",
    index: "01",
    title: "Retiro Del Rocio",
    descriptor: "Hotel operations ecosystem.",
    industry: "Hospitality / Operations",
    summary:
      "A connected hotel operating system spanning Laravel administration, Flutter guest and staff tablets, payments, access control, and real-time communication.",
    coverImage: "/images/projects/project-damas.avif",
    coverAlt: "Retiro Del Rocio hotel operations product interface",
    role: "Full Stack Engineer",
    year: "2026",
    technologies: ["Laravel", "Livewire", "Flutter", "WebSockets", "Agora", "TTLock"],
    challenge:
      "Bring rooms, bookings, service teams, guest requests, billing, devices, and live communication into one coherent operational system.",
    solution:
      "A central Laravel API and administration layer coordinates role-specific tablet experiences for guests and hotel teams, with real-time events linking every operational surface.",
    architecture: ["Laravel API", "Admin", "Guest Tablet", "Staff Tablets", "Database", "Real-time Layer", "Flutter"],
    features: ["Rooms and bookings", "Guest services", "Kitchen and bar Tablet", "Housekeeping Tablet", "Maintenance Tablet", "Security Tablet", "Billing and payments", "Device management" ],
    accent: "orange",
  },
  {
    slug: "cviqli",
    index: "02",
    title: "Cviqli",
    descriptor: "Civic intelligence powered by AI.",
    industry: "Civic Technology / AI",
    summary:
      "A multilingual civic intelligence platform built around asking, clarifying, comprehending, and counselling across web and mobile.",
    coverImage: "/images/projects/project-najm.avif",
    coverAlt: "Cviqli civic intelligence product interface",
    role: "Full Stack Engineer",
    year: "2026",
    technologies: ["Next.js", "Flutter", "AI Streaming", "Voice", "Moderation"],
    challenge:
      "Make complex civic information accessible, conversational, multilingual, and safe across multiple devices and participation modes.",
    solution:
      "A streaming AI experience combines voice dictation, threaded discussion, mentions, moderation, and language-aware interfaces for English, Hausa, Yoruba, Igbo, and Pidgin.",
    architecture: ["Web Client", "Mobile Client", "AI Orchestration", "Streaming API", "Moderation", "Content Store", "Flutter"],
    features: ["Streaming AI", "Voice dictation", "Threaded comments", "Mentions", "Moderation", "Multilingual UX", "Webapp", "Admin Dashboard","PostgrelSQL"],
    accent: "lime",
  },
  {
    slug: "pavocard",
    index: "03",
    title: "Pavocard",
    descriptor: "Multi-market financial infrastructure.",
    industry: "Fintech",
    summary:
      "A Nigeria and Ghana fintech system connecting mobile, web, administration, payments, utilities, and resilient transaction infrastructure.",
    coverImage: "/images/projects/project-kavi.avif",
    coverAlt: "Pavocard multi-market fintech product interface",
    role: "Full Stack Engineer",
    year: "2026",
    technologies: ["Flutter", "Next.js", "Node.js", "PostgreSQL", "Redis", "Paystack"],
    challenge:
      "Coordinate financial workflows across markets, interfaces, payment providers, utility integrations, and operational teams.",
    solution:
      "A shared Node.js service layer supports Flutter and Next.js clients, backed by PostgreSQL and Redis with provider integrations isolated behind consistent domain workflows.",
    architecture: ["Flutter", "Next.js", "Admin", "Node API", "PostgreSQL", "Redis", "Provider Layer"],
    features: ["Multi-market accounts", "Payments", "Utility services", "Administration", "Notifications", "Media workflows"],
    accent: "white",
  },
  {
    slug: "cardcentrals",
    index: "04",
    title: "Cardcentrals",
    descriptor: "Gift card trading, end to end.",
    industry: "Digital Commerce / Fintech",
    summary:
      "A gift card trading platform spanning customer mobile and web experiences, internal administration, pricing, settlement, and provider integrations.",
    coverImage: "/images/projects/project-postwing.avif",
    coverAlt: "Cardcentrals gift card trading product interface",
    role: "Full Stack Engineer",
    year: "2025",
    technologies: ["Flutter", "Next.js", "React", "Express", "PostgreSQL", "Redis"],
    challenge:
      "Create a reliable path from card submission and review through pricing, settlement, and internal operational control.",
    solution:
      "Purpose-built customer and administration surfaces share a transactional backend with cached pricing data and isolated payment and utility integrations.",
    architecture: ["Mobile", "Web", "React Admin", "Express API", "PostgreSQL", "Redis", "Docker"],
    features: ["Gift card trading", "Rate management", "Trade review", "Settlement", "User accounts", "Operational admin"],
    accent: "orange",
  },
  {
    slug: "nexryl-estate-os",
    index: "LAB / 001",
    title: "Nexryl EstateOS",
    descriptor: "A living operating system for estates.",
    industry: "Property Technology / Lab",
    summary:
      "An in-development estate platform connecting residents, operations, visitors, payments, maintenance, safety, and predictive intelligence.",
    coverImage: "/images/projects/project-damas.avif",
    coverAlt: "Nexryl EstateOS property operations product interface",
    role: "Creator / Full Stack Engineer",
    year: "2026",
    technologies: ["Flutter", "Next.js", "NestJS", "PostgreSQL", "Redis", "AI"],
    challenge:
      "Replace fragmented estate workflows with one secure operating layer for residents, teams, visitors, services, and emergencies.",
    solution:
      "A modular NestJS platform joins resident and administration clients with events, payments, QR visitor access, reminders, maintenance, and an extensible intelligence layer.",
    architecture: ["Resident App", "Operations Web", "NestJS", "PostgreSQL", "Redis", "Firebase", "AI Layer"],
    features: ["QR visitors", "Maintenance", "SOS", "Payments", "Reminders", "Predictive analytics"],
    status: "In development",
    accent: "lime",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
