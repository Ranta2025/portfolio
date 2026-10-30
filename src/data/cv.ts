export type Lang = "en" | "es";

export interface CvProject {
  title: string;
  /** Who the work was delivered to, for client work. */
  client?: string;
  period: string;
  stack: string;
  repo?: string;
  bullets: string[];
}

export interface CvContent {
  lang: Lang;
  role: string;
  location: string;
  authorization: string;
  labels: {
    summary: string;
    experience: string;
    ai: string;
    projects: string;
    skills: string;
    education: string;
    languages: string;
    print: string;
    otherLang: string;
  };
  summary: string;
  experience: CvProject[];
  ai: string[];
  projects: CvProject[];
  skills: { area: string; items: string }[];
  education: string;
  languages: string[];
}

const repo = (name: string) => `github.com/Ranta2025/${name}`;

export const cv: Record<Lang, CvContent> = {
  en: {
    lang: "en",
    role: "Software Engineer — Backend, offline-first systems & AI-assisted delivery",
    location: "Havana, Cuba · relocating to La Palma, Spain",
    authorization: "Spanish citizen · EU work authorization",
    labels: {
      summary: "Profile",
      experience: "Freelance experience",
      ai: "AI-assisted engineering",
      projects: "Selected projects",
      skills: "Skills",
      education: "Education",
      languages: "Languages",
      print: "Save as PDF",
      otherLang: "Versión en español",
    },
    summary:
      "Software engineer who ships complete products for real users, from requirements to tests, packaging and support. Backends in Go and TypeScript; offline-first clients in Flutter, Godot and Python for low-end hardware and unreliable networks. I work AI-first: I direct coding agents through written specs, reviewable units and tests and own every line that ships.",
    experience: [
      {
        title: "Salon Manager — offline-first mobile app",
        client: "Freelance · hair salon",
        period: "Sep 2026",
        stack: "Flutter, Dart, sqflite, Provider",
        repo: repo("gestion-salon"),
        bullets: [
          "Gathered requirements with the owner and delivered finances, clients, appointments with reminders, cash closing and PDF/CSV reports, fully on-device with no backend or recurring cost.",
          "Repositories tested against real in-memory SQLite; restore validates the backup before touching data.",
        ],
      },
      {
        title: "Salary Fund Distribution — Acuerdo 10199/2025",
        client: "Freelance · client organization",
        period: "Oct 2026",
        stack: "Python, tkinter, pytest, PyInstaller",
        repo: repo("fondo-salario-acuerdo-10199"),
        bullets: [
          "Turned a 2025 Cuban regulation into an offline desktop app that distributes unexecuted salary funds, with configurable weights so each unit can match its own rules.",
          "Totals reconcile to the cent (largest-remainder rounding); domain logic isolated and covered by 100+ pytest tests; auditable Excel export.",
        ],
      },
    ],
    ai: [
      "Agent-driven workflow: requirements become numbered specs; coding agents (Claude Code, opencode) implement them in reviewable units; every change passes tests, multi-lens AI review and my own diff review.",
      "Built agent-bridge (github.com/Ranta2025/agent-bridge, MIT): links Claude Code to gentle-shell agents (orchestrated by gentle-ai) and tracks tasks to completion — state machine with delivery confirmation and retries, policy-driven auto-approver that never allows push, force or secret paths, RAM guard, 197 tests.",
      "Extended the tools: a Claude Code side-panel mod, an opencode background-agents plugin, and custom skills such as one that makes the agent challenge a design with evidence before building.",
    ],
    projects: [
      {
        title: "ChatApp — real-time messaging platform",
        period: "Jan 2026 – present",
        stack: "Go, Gin, React 19, PostgreSQL, Redis, MinIO, WebSockets, Docker, Playwright",
        repo: repo("chatapp"),
        bullets: [
          "Designed a 7-service platform: 1:1 and group chat, receipts, presence, media, voice notes, video calls and Web Push; group permissions enforced server-side.",
          "Hardened auth (15-min JWTs in HttpOnly cookies, rotated refresh tokens, lockout, rate limits); PWA offline outbox delivers queued messages in order; 276 test files plus Playwright e2e in CI.",
        ],
      },
      {
        title: "OrtoSim CUBA — offline medical training game (undergraduate thesis)",
        period: "Oct 2026 – present",
        stack: "Godot 4, GDScript, GUT, PocketBase, Caddy, JSON Schema, Docker",
        bullets: [
          "Serious game for 2 GB RAM Android phones under hard budgets (< 60 MB APK, 30 FPS, < 100 draw calls); hexagonal domain behind five ports, 150 GUT test files.",
          "Data-driven case engine (JSON Schema, 12 step kinds) shipped as signed content packs with a SHA-256 manifest; offline event queue synced via PocketBase.",
        ],
      },
    ],
    skills: [
      { area: "Languages", items: "Go, TypeScript, Python, Dart, GDScript, Java" },
      { area: "Backend & data", items: "Gin, REST, WebSockets, PostgreSQL, Redis, SQLite, PocketBase, S3/MinIO" },
      { area: "Clients", items: "React 19, PWA (service workers, IndexedDB, Web Push), Flutter, Godot 4" },
      { area: "AI tooling", items: "Claude Code, opencode, MCP, agent skills/hooks/plugins, spec-driven dev, AI review" },
      { area: "Quality & delivery", items: "go test, Playwright, pytest, GUT, GitHub Actions, Docker Compose, Nginx, Caddy" },
    ],
    education:
      "B.Eng. in Computer Science, University of Information Sciences (UCI), Havana — 3rd of 4 years, expected 2028",
    languages: ["Spanish — native", "English — B1 (certification exam March 2027)"],
  },
  es: {
    lang: "es",
    role: "Ingeniero de software — Backend, sistemas offline-first y desarrollo asistido por IA",
    location: "La Habana, Cuba · traslado a La Palma, España",
    authorization: "Ciudadano español · permiso de trabajo en la UE",
    labels: {
      summary: "Perfil",
      experience: "Experiencia freelance",
      ai: "Ingeniería asistida por IA",
      projects: "Proyectos destacados",
      skills: "Competencias",
      education: "Formación",
      languages: "Idiomas",
      print: "Guardar como PDF",
      otherLang: "English version",
    },
    summary:
      "Ingeniero de software que entrega productos completos a usuarios reales, desde los requisitos hasta las pruebas, el empaquetado y el soporte. Backends en Go y TypeScript; clientes offline-first en Flutter, Godot y Python para hardware modesto y redes poco fiables. Trabajo con IA como primera herramienta: dirijo agentes de código con especificaciones, unidades revisables y pruebas y respondo por cada línea entregada.",
    experience: [
      {
        title: "Gestión Salón — app móvil offline-first",
        client: "Freelance · salón de peluquería",
        period: "sep. 2026",
        stack: "Flutter, Dart, sqflite, Provider",
        repo: repo("gestion-salon"),
        bullets: [
          "Levanté los requisitos con la dueña y entregué finanzas, clientes, citas con recordatorios, cierre de caja e informes PDF/CSV, todo en el dispositivo, sin backend ni costes recurrentes.",
          "Repositorios probados contra SQLite real en memoria; la restauración valida la copia antes de tocar datos.",
        ],
      },
      {
        title: "Reparto del fondo de salario — Acuerdo 10199/2025",
        client: "Freelance · organización cliente",
        period: "oct. 2026",
        stack: "Python, tkinter, pytest, PyInstaller",
        repo: repo("fondo-salario-acuerdo-10199"),
        bullets: [
          "Convertí una normativa cubana de 2025 en una app de escritorio offline que reparte el fondo de salario no ejecutado, con pesos configurables por unidad.",
          "Totales que cuadran al céntimo (mayor resto); dominio aislado con más de 100 pruebas en pytest; exportación auditable a Excel.",
        ],
      },
    ],
    ai: [
      "Flujo dirigido por agentes: requisitos en especificaciones numeradas; agentes de código (Claude Code, opencode) las implementan por unidades revisables; cada cambio pasa pruebas, revisión por IA y mi revisión del diff.",
      "Construí agent-bridge (github.com/Ranta2025/agent-bridge, MIT): conecta Claude Code con los agentes de gentle-shell (orquestados en el entorno de gentle-ai) y sigue las tareas delegadas hasta el final — máquina de estados con confirmación de entrega y reintentos, autoaprobador por políticas que nunca permite push, force ni rutas de secretos, límite de RAM, 197 pruebas.",
      "Extendí las herramientas: un mod de panel lateral para Claude Code, un plugin de agentes en segundo plano para opencode y skills propias, como una que obliga al agente a cuestionar el diseño con evidencia.",
    ],
    projects: [
      {
        title: "ChatApp — plataforma de mensajería en tiempo real",
        period: "ene. 2026 – actualidad",
        stack: "Go, Gin, React 19, PostgreSQL, Redis, MinIO, WebSockets, Docker, Playwright",
        repo: repo("chatapp"),
        bullets: [
          "Plataforma de 7 servicios: chat 1:1 y grupal, confirmaciones, presencia, multimedia, notas de voz, videollamadas y Web Push; permisos de grupo validados en el servidor.",
          "Autenticación reforzada (JWT de 15 min en cookies HttpOnly, refresh tokens rotados, bloqueo, límites por IP); cola offline en la PWA que entrega en orden; 276 archivos de pruebas y e2e con Playwright en CI.",
        ],
      },
      {
        title: "OrtoSim CUBA — juego serio de formación médica offline (tesis de grado)",
        period: "oct. 2026 – actualidad",
        stack: "Godot 4, GDScript, GUT, PocketBase, Caddy, JSON Schema, Docker",
        bullets: [
          "Juego serio para Android de 2 GB de RAM con presupuestos estrictos (APK < 60 MB, 30 FPS, < 100 draw calls); dominio hexagonal detrás de cinco puertos, 150 archivos de pruebas GUT.",
          "Motor de casos guiado por datos (JSON Schema, 12 tipos de paso) en paquetes firmados con manifiesto SHA-256; cola de eventos offline sincronizada con PocketBase.",
        ],
      },
    ],
    skills: [
      { area: "Lenguajes", items: "Go, TypeScript, Python, Dart, GDScript, Java" },
      { area: "Backend y datos", items: "Gin, REST, WebSockets, PostgreSQL, Redis, SQLite, PocketBase, S3/MinIO" },
      { area: "Clientes", items: "React 19, PWA (service workers, IndexedDB, Web Push), Flutter, Godot 4" },
      { area: "Herramientas de IA", items: "Claude Code, opencode, MCP, skills/hooks/plugins de agentes, especificaciones, revisión con IA" },
      { area: "Calidad y entrega", items: "go test, Playwright, pytest, GUT, GitHub Actions, Docker Compose, Nginx, Caddy" },
    ],
    education:
      "Ingeniería en Ciencias Informáticas, UCI (La Habana) — 3.er curso de 4, fin previsto en 2028",
    languages: ["Español — nativo", "Inglés — B1 (certificación en marzo de 2027)"],
  },
};
