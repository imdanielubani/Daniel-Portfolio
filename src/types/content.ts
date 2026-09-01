export type ProjectSlug =
  | "retiro-del-rocio"
  | "cviqli"
  | "pavocard"
  | "cardcentrals"
  | "nexryl-estate-os";

export type Project = {
  slug: ProjectSlug;
  index: string;
  title: string;
  descriptor: string;
  industry: string;
  summary: string;
  coverImage: string;
  coverAlt: string;
  role: string;
  year: string;
  technologies: string[];
  challenge: string;
  solution: string;
  architecture: string[];
  features: string[];
  status?: string;
  accent: "orange" | "lime" | "white";
};

export type Experience = {
  year: string;
  company: string;
  role: string;
  dates: string;
  contribution: string;
  technologies: string[];
};

export type TechnologyCategory = {
  category: string;
  items: { name: string; projects: ProjectSlug[] }[];
};
