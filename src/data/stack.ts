export interface StackGroup {
  area: string;
  items: string[];
}

// Only technologies with public evidence in the repositories linked from this site.
export const stack: StackGroup[] = [
  { area: "Languages", items: ["Go", "TypeScript", "Python", "Dart", "GDScript", "Java"] },
  { area: "Backend", items: ["Gin", "REST", "WebSockets", "JWT auth", "PocketBase"] },
  {
    area: "Frontend & clients",
    items: ["React 19", "PWA (service workers, IndexedDB, Web Push)", "Flutter", "Godot 4", "tkinter"],
  },
  {
    area: "Databases & storage",
    items: ["PostgreSQL", "Redis", "SQLite", "IndexedDB", "MinIO (S3)", "Schema design & migrations", "Backup & restore"],
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
