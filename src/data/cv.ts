export type Lang = "en" | "es";

export interface CvProject {
  title: string;
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
    projects: string;
    skills: string;
    education: string;
    languages: string;
    print: string;
    otherLang: string;
  };
  summary: string;
  projects: CvProject[];
  skills: { area: string; items: string }[];
  education: string;
  languages: string[];
}

const repo = (name: string) => `github.com/Ranta2025/${name}`;

export const cv: Record<Lang, CvContent> = {
  en: {
    lang: "en",
    role: "Software Engineer — Backend & offline-first systems",
    location: "Havana, Cuba · relocating to La Palma, Spain",
    authorization: "Spanish citizen · EU work authorization",
    labels: {
      summary: "Profile",
      projects: "Selected projects",
      skills: "Skills",
      education: "Education",
      languages: "Languages",
      print: "Save as PDF",
      otherLang: "Versión en español",
    },
    summary:
      "Software engineer who builds systems that keep working on low-end hardware and unreliable networks. I design backends in Go and TypeScript and offline-first clients in Flutter, Godot and Python, with local data as the source of truth, explicit sync, hard performance budgets and tests against real databases. Every project below is documented and tested.",
    projects: [
      {
        title: "ChatApp — real-time messaging platform",
        period: "Jan 2026 – present",
        stack: "Go, Gin, React 19, PostgreSQL, Redis, MinIO, WebSockets, Docker, Playwright",
        repo: repo("chatapp"),
        bullets: [
          "Designed a 7-service platform (API, Postgres, Redis, MinIO, Nginx, frontend, Cloudflare Tunnel) with 1:1 and group chat, delivery receipts, presence, media, voice notes, video calls and Web Push.",
          "Hardened auth with 15-min JWTs in HttpOnly cookies, rotated revocable refresh tokens, bcrypt, account lockout and per-IP rate limits; group permissions enforced server-side on REST and WebSocket.",
          "Built a PWA with an IndexedDB offline outbox that delivers queued messages in order on reconnect; 276 test files across Go and frontend, plus Playwright e2e in GitHub Actions CI.",
        ],
      },
      {
        title: "OrtoSim CUBA — offline medical training game (undergraduate thesis)",
        period: "Oct 2026 – present",
        stack: "Godot 4, GDScript, GUT, PocketBase, Caddy, JSON Schema, Blender, Docker",
        bullets: [
          "Architected a serious game for a medical master's program targeting 2 GB RAM Android phones: < 60 MB APK, 30 FPS, < 100 draw calls, open-source tooling only due to sanctions.",
          "Applied hexagonal architecture in Godot: a pure domain behind five ports, unit-tested with GUT (150 test files) using injected clock and randomness.",
          "Made the case engine data-driven (JSON Schema-validated cases, 12 step kinds) and shipped content as signed .pck packs with a SHA-256 manifest and offline event queue synced via PocketBase.",
        ],
      },
      {
        title: "Salary Fund Distribution — Acuerdo 10199/2025",
        period: "Oct 2026",
        stack: "Python, tkinter, pytest, PyInstaller",
        repo: repo("fondo-salario-acuerdo-10199"),
        bullets: [
          "Built an offline desktop app that applies a 2025 Cuban regulation to distribute unexecuted salary funds, with configurable weights so each unit can match its own rules.",
          "Guaranteed totals reconcile to the cent with largest-remainder rounding; isolated domain logic covered by 100+ pytest tests; auditable Excel export.",
        ],
      },
      {
        title: "Salon Manager — offline-first mobile app for a real salon",
        period: "Sep 2026",
        stack: "Flutter, Dart, sqflite, Provider",
        repo: repo("gestion-salon"),
        bullets: [
          "Delivered finances, clients, appointments with reminders, cash closing and PDF/CSV reports running fully on-device with no backend.",
          "Tested repositories against real in-memory SQLite and made restore validate backups before touching any data.",
        ],
      },
      {
        title: "XILEF — offline licensing for a commercial product",
        period: "Oct 2026 – present",
        stack: "TypeScript, Node.js, Ed25519",
        bullets: [
          "Ed25519 license issuance with monotonic sequence numbers for renewal and revocation; every artifact is self-verified before it is written.",
        ],
      },
    ],
    skills: [
      { area: "Languages", items: "Go, TypeScript, Python, Dart, GDScript, Java" },
      { area: "Backend & data", items: "Gin, REST, WebSockets, PostgreSQL, Redis, SQLite, PocketBase, S3/MinIO" },
      { area: "Clients", items: "React 19, PWA (service workers, IndexedDB, Web Push), Flutter, Godot 4" },
      { area: "Quality & delivery", items: "go test, Playwright, pytest, GUT, GitHub Actions, Docker Compose, Nginx, Caddy" },
    ],
    education:
      "B.Eng. in Computer Science (Ingeniería en Ciencias Informáticas), University of Information Sciences (UCI), Havana — 3rd of 4 years, expected 2028",
    languages: ["Spanish — native", "English — B1 (certification exam March 2027)"],
  },
  es: {
    lang: "es",
    role: "Ingeniero de software — Backend y sistemas offline-first",
    location: "La Habana, Cuba · traslado a La Palma, España",
    authorization: "Ciudadano español · permiso de trabajo en la UE",
    labels: {
      summary: "Perfil",
      projects: "Proyectos destacados",
      skills: "Competencias",
      education: "Formación",
      languages: "Idiomas",
      print: "Guardar como PDF",
      otherLang: "English version",
    },
    summary:
      "Construyo sistemas que siguen funcionando en hardware modesto y con redes poco fiables. Diseño backends en Go y TypeScript y clientes offline-first en Flutter, Godot y Python, con los datos locales como fuente de verdad, sincronización explícita, presupuestos de rendimiento estrictos y pruebas contra bases de datos reales. Todos los proyectos están documentados y tienen pruebas.",
    projects: [
      {
        title: "ChatApp — plataforma de mensajería en tiempo real",
        period: "ene. 2026 – actualidad",
        stack: "Go, Gin, React 19, PostgreSQL, Redis, MinIO, WebSockets, Docker, Playwright",
        repo: repo("chatapp"),
        bullets: [
          "Diseñé una plataforma de 7 servicios (API, Postgres, Redis, MinIO, Nginx, frontend, Cloudflare Tunnel) con chat 1:1 y grupal, confirmaciones de entrega, presencia, multimedia, notas de voz, videollamadas y Web Push.",
          "Reforcé la autenticación con JWT de 15 min en cookies HttpOnly, refresh tokens rotados y revocables, bcrypt, bloqueo de cuenta y límites por IP; permisos de grupo validados en el servidor en REST y WebSocket.",
          "Construí una PWA con cola offline en IndexedDB que entrega los mensajes en orden al reconectar; 276 archivos de pruebas entre Go y frontend, más e2e con Playwright en CI de GitHub Actions.",
        ],
      },
      {
        title: "OrtoSim CUBA — juego serio de formación médica offline (tesis de grado)",
        period: "oct. 2026 – actualidad",
        stack: "Godot 4, GDScript, GUT, PocketBase, Caddy, JSON Schema, Blender, Docker",
        bullets: [
          "Arquitectura de un juego serio para una maestría médica orientado a móviles Android de 2 GB de RAM: APK < 60 MB, 30 FPS, < 100 llamadas de dibujo y solo herramientas de código abierto por las sanciones.",
          "Arquitectura hexagonal en Godot: dominio puro detrás de cinco puertos, probado con GUT (150 archivos de pruebas) con reloj y aleatoriedad inyectados.",
          "Motor de casos guiado por datos (casos validados con JSON Schema, 12 tipos de paso) y contenido distribuido en paquetes .pck con manifiesto SHA-256 y cola de eventos offline sincronizada con PocketBase.",
        ],
      },
      {
        title: "Reparto del fondo de salario — Acuerdo 10199/2025",
        period: "oct. 2026",
        stack: "Python, tkinter, pytest, PyInstaller",
        repo: repo("fondo-salario-acuerdo-10199"),
        bullets: [
          "Aplicación de escritorio offline que aplica una normativa cubana de 2025 para repartir el fondo de salario no ejecutado, con pesos configurables según el reglamento de cada unidad.",
          "Totales que cuadran al céntimo mediante el método del mayor resto; lógica de dominio aislada con más de 100 pruebas en pytest; exportación auditable a Excel.",
        ],
      },
      {
        title: "Gestión Salón — app móvil offline-first para un salón real",
        period: "sep. 2026",
        stack: "Flutter, Dart, sqflite, Provider",
        repo: repo("gestion-salon"),
        bullets: [
          "Finanzas, clientes, citas con recordatorios, cierre de caja e informes PDF/CSV funcionando íntegramente en el dispositivo, sin backend.",
          "Repositorios probados contra SQLite real en memoria; la restauración valida la copia de seguridad antes de tocar ningún dato.",
        ],
      },
      {
        title: "XILEF — licencias offline para un producto comercial",
        period: "oct. 2026 – actualidad",
        stack: "TypeScript, Node.js, Ed25519",
        bullets: [
          "Emisión de licencias Ed25519 con números de secuencia monótonos para renovación y revocación; cada artefacto se autoverifica antes de escribirse.",
        ],
      },
    ],
    skills: [
      { area: "Lenguajes", items: "Go, TypeScript, Python, Dart, GDScript, Java" },
      { area: "Backend y datos", items: "Gin, REST, WebSockets, PostgreSQL, Redis, SQLite, PocketBase, S3/MinIO" },
      { area: "Clientes", items: "React 19, PWA (service workers, IndexedDB, Web Push), Flutter, Godot 4" },
      { area: "Calidad y entrega", items: "go test, Playwright, pytest, GUT, GitHub Actions, Docker Compose, Nginx, Caddy" },
    ],
    education:
      "Ingeniería en Ciencias Informáticas — Universidad de las Ciencias Informáticas (UCI), La Habana. 3.er curso de 4, fin previsto en 2028",
    languages: ["Español — nativo", "Inglés — B1 (certificación en marzo de 2027)"],
  },
};
