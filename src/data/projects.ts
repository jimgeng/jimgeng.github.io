export interface Project {
  title: string;
  description: string;
  href: string;
  technologies: string[];
}

export const projects: Project[] = [
  {
    title: "split.jimgeng",
    description: "A (WIP) modern lightweight expense splitting application.",
    href: "#",
    technologies: ["TypeScript", "React", "Cloudflare"],
  },
  {
    title: "This website",
    description: "Not Vercel.",
    href: "#",
    technologies: ["Python", "Databricks"],
  },
];