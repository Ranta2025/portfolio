export interface Project {
  id: string;
  type: "featured" | "standard" | "mini";
  title: string;
  description: string;
  tech: string[];
  links: { github: string; live?: string };
  features?: string[];
  highlight?: string;
}

export const projects: Project[] = [
  {
    id: "whatsapp-fake",
    type: "featured",
    title: "WhatsApp-Fake",
    description:
      "Real-time chat platform — a full WhatsApp-style backend + frontend with WebSocket messaging, JWT auth, MinIO multimedia, and ZegoCloud videocalls, orchestrated across 7 Docker services behind Nginx + Cloudflare Tunnel.",
    tech: [
      "Go 1.25",
      "Gin",
      "React 19",
      "PostgreSQL 16",
      "Redis",
      "MinIO",
      "Docker",
      "Nginx",
      "Cloudflare Tunnel",
    ],
    links: { github: "https://github.com/Ranta2025/WhatsApp-Fake" },
    highlight:
      "Flagship real-time chat platform — 7 Docker services, WebSocket 1:1 + group chat.",
    features: [
      "WebSocket real-time 1:1 + group chat",
      "JWT auth (access + refresh) with bcrypt, account lockout, and email verification",
      "Message edit / delete / reply / forward, presence, contact management",
      "MinIO multimedia storage",
      "ZegoCloud videocalls",
    ],
  },
  {
    id: "tienda-virtual",
    type: "standard",
    title: "Tienda-Virtual",
    description:
      "Full-stack multi-app commerce platform: NestJS + Prisma + PostgreSQL backend, React + Vite storefront, and a Flutter offline inventory app with sync.",
    tech: ["NestJS", "Prisma", "PostgreSQL", "React", "Vite", "Flutter"],
    links: { github: "https://github.com/Ranta2025/Tienda-Virtual" },
  },
  {
    id: "shophub-ecommerce",
    type: "standard",
    title: "shophub-ecommerce",
    description:
      "Full-stack e-commerce application built with Next.js and TypeScript, backed by Prisma and PostgreSQL.",
    tech: ["Next.js", "TypeScript", "Prisma"],
    links: { github: "https://github.com/Ranta2025/shophub-ecommerce" },
  },
  {
    id: "data-structures-ii",
    type: "mini",
    title: "Data Structures II — Study Guide",
    description:
      "220+ bilingual Java exercises covering Heap, Sorting, Searching, Hash Tables, Skip Lists, Graphs (DFS / BFS / Dijkstra / Floyd-Warshall / Prim / Kruskal), and Union-Find.",
    tech: ["Java"],
    links: {
      github: "https://github.com/Ranta2025/data-structures-ii-study-guide",
    },
  },
];
