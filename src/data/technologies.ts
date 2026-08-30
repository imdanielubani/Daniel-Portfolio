import type { TechnologyCategory } from "@/types/content";

export const technologyCategories: TechnologyCategory[] = [
  { category: "Frontend", items: [
    { name: "React", projects: ["cardcentrals"] },
    { name: "Next.js", projects: ["cviqli", "pavocard", "cardcentrals", "nexryl-estate-os"] },
    { name: "Vue.js", projects: ["pavocard"] },
    { name: "TypeScript", projects: ["cviqli", "pavocard", "cardcentrals", "nexryl-estate-os"] },
    { name: "Tailwind CSS", projects: ["cviqli", "pavocard", "cardcentrals"] },
  ] },
  { category: "Backend", items: [
    { name: "Node.js / Express", projects: ["pavocard", "cardcentrals"] },
    { name: "Laravel", projects: ["retiro-del-rocio"] },
    { name: "NestJS", projects: ["nexryl-estate-os"] },
    { name: "REST / GraphQL", projects: ["cviqli", "pavocard", "nexryl-estate-os"] },
  ] },
  { category: "Mobile", items: [
    { name: "Flutter", projects: ["retiro-del-rocio", "cviqli", "pavocard", "cardcentrals", "nexryl-estate-os"] },
    { name: "React Native", projects: [] },
  ] },
  { category: "Data", items: [
    { name: "PostgreSQL", projects: ["pavocard", "cardcentrals", "nexryl-estate-os"] },
    { name: "MySQL", projects: ["retiro-del-rocio"] },
    { name: "MongoDB", projects: ["cviqli"] },
    { name: "Redis", projects: ["pavocard", "cardcentrals", "nexryl-estate-os"] },
  ] },
  { category: "Infrastructure", items: [
    { name: "Docker / AWS", projects: ["pavocard", "nexryl-estate-os"] },
    { name: "Vercel / CI/CD", projects: ["cviqli", "pavocard", "cardcentrals"] },
    { name: "Nginx", projects: ["retiro-del-rocio"] },
  ] },
  { category: "AI + Integrations", items: [
    { name: "LLM / RAG Systems", projects: ["cviqli", "nexryl-estate-os"] },
    { name: "Paystack / Flutterwave", projects: ["pavocard", "cardcentrals", "nexryl-estate-os"] },
    { name: "Firebase / Twilio", projects: ["pavocard", "nexryl-estate-os"] },
    { name: "Reloadly / Monnify", projects: ["pavocard", "cardcentrals"] },
  ] },
];
