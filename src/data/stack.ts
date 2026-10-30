export interface StackGroup {
  area: string;
  items: string[];
}

// Only technologies with public evidence in the repositories linked from this site.
export const stack: StackGroup[] = [
  { area: "Languages", items: ["Go", "TypeScript", "Python", "Dart", "GDScript", "Java"] },
  {
    area: "Backend & data",
    items: ["Gin", "REST", "WebSockets", "PostgreSQL", "Redis", "SQLite", "PocketBase", "MinIO (S3)"],
  },
  {
    area: "Clients",
    items: ["React 19", "PWA (service workers, IndexedDB, Web Push)", "Flutter", "Godot 4", "tkinter"],
  },
  {
    area: "AI tooling",
    items: ["Claude Code", "opencode", "MCP servers", "Agent skills, hooks & plugins", "Spec-driven development", "AI code review"],
  },
  {
    area: "Quality & delivery",
    items: ["go test", "Playwright", "pytest", "GUT", "GitHub Actions", "Docker Compose", "Nginx", "Caddy"],
  },
];
