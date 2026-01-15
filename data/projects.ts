// src/data/projects.ts
export type Project = {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  repo?: string;
  images?: string[];
};

export const PROJECTS: Project[] = [
  {
    title: "Meu Projeto 1",
    description: "Descrição curta e objetiva.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    repo: "https://github.com/...",
    href: "https://...",
    images: ["/projects/p1-1.png", "/projects/p1-2.png"],
  },
];
