export interface SkillGroup {
  category: string;
  skills: string[];
  accent: string;
}

export const skills: SkillGroup[] = [
  {
    category: "Backend Languages",
    skills: ["Go", "TypeScript", "Python", "Java"],
    accent: "--color-accent",
  },
  {
    category: "Frameworks & Runtimes",
    skills: ["Gin", "Express", "NestJS", "FastAPI", "React"],
    accent: "--color-accent-2",
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Redis"],
    accent: "--color-accent-3",
  },
  {
    category: "Tooling & DevOps",
    skills: ["Docker", "Git"],
    accent: "--color-accent",
  },
  {
    category: "Human Languages",
    skills: ["Spanish (native)", "English (professional)"],
    accent: "--color-muted",
  },
];
