export interface Decision {
  choice: string;
  why: string;
}

export interface Metric {
  value: string;
  label: string;
}

export type Repo = { url: string } | { private: true };

export type Frame = "browser" | "phone" | "landscape" | "window";

export interface Shot {
  /** File name inside src/assets/work/<slug>/. Missing files are skipped at build time. */
  file: string;
  alt: string;
  frame: Frame;
}

export interface CaseStudy {
  slug: string;
  title: string;
  summary: string;
  period: string;
  status: string;
  kind: string;
  stack: string[];
  repo: Repo;
  live?: string;
  shots: Shot[];
  metrics: Metric[];
  context: string;
  constraints: string[];
  decisions: Decision[];
  built: string[];
  note?: string;
}

export interface SideProject {
  title: string;
  summary: string;
  stack: string[];
  repo: Repo;
  status?: string;
}

const gh = (repo: string): Repo => ({ url: `https://github.com/Ranta2025/${repo}` });
const privateRepo: Repo = { private: true };

export const caseStudies: CaseStudy[] = [
  {
    slug: "chatapp",
    title: "ChatApp — real-time messaging",
    summary:
      "A complete real-time messaging platform: Go backend, React 19 PWA that keeps working offline, seven Docker services.",
    period: "Jan 2026 — present",
    status: "Active development",
    kind: "Full stack · Real-time · PWA",
    stack: ["Go", "Gin", "React 19", "PostgreSQL 16", "Redis", "MinIO", "WebSockets", "Playwright", "Docker", "Nginx"],
    repo: gh("chatapp"),
    shots: [
      { file: "chatapp-desktop-chat.png", alt: "ChatApp desktop: conversation list and an open 1:1 chat", frame: "browser" },
      { file: "chatapp-desktop-group.png", alt: "ChatApp desktop: group chat with roles", frame: "browser" },
      { file: "chatapp-mobile.png", alt: "ChatApp installed as a PWA on a phone", frame: "phone" },
    ],
    metrics: [
      { value: "128", label: "Go test files" },
      { value: "148", label: "frontend test files" },
      { value: "7", label: "Docker services" },
      { value: "CI", label: "unit, integration and e2e" },
    ],
    context:
      "A product-grade project to own a real-time system end to end: authentication, delivery semantics, media, groups, calls and offline behavior — not a tutorial chat.",
    constraints: [
      "Users on unreliable connections: messages written offline must not be lost.",
      "Sessions must survive token theft attempts and brute force.",
      "Must run on free tiers (Render + Vercel) or on a single machine behind Cloudflare Tunnel.",
    ],
    decisions: [
      {
        choice: "15-minute JWT in an HttpOnly cookie plus an opaque, rotated, revocable refresh token",
        why: "No token is readable from JavaScript, and a leaked access token expires fast.",
      },
      {
        choice: "Layered defenses on auth",
        why: "bcrypt, account lockout after 5 failed attempts, one-time codes and per-IP rate limits on login, codes and email sending.",
      },
      {
        choice: "Group permissions enforced on the server for both REST and WebSocket",
        why: "The client only reflects permissions; it never decides them.",
      },
      {
        choice: "Service worker caches the app shell only",
        why: "API, WebSocket and media always go to the network, so users never see stale data. Updates wait for user confirmation instead of replacing a running tab.",
      },
      {
        choice: "Offline outbox in IndexedDB",
        why: "Text messages written without a connection survive reloads and are sent in order on reconnect.",
      },
      {
        choice: "S3-compatible object storage (MinIO)",
        why: "Media storage can move to any S3 provider without code changes.",
      },
    ],
    built: [
      "1:1 and group chat with sent → delivered → seen states, typing indicators and presence.",
      "Edit, delete-for-everyone, reply and forward, voice notes, stickers and media uploads with content verification.",
      "Group roles and WhatsApp-style permissions with persisted system messages.",
      "Voice and video calls through ZegoCloud with per-room tokens, plus call history.",
      "Web Push notifications (VAPID) that open the right chat.",
      "Go unit and integration tests behind build tags, and Playwright e2e covering login, groups with media, offline sending and Web Push, all in GitHub Actions.",
    ],
  },
  {
    slug: "salon-manager",
    title: "Salon Manager",
    summary:
      "Offline-first mobile app that runs a beauty salon's income, expenses, clients and appointments on the phone, with no backend.",
    period: "Sep 2026",
    status: "Feature-complete",
    kind: "Client work · Mobile · Offline-first",
    stack: ["Flutter", "Dart", "sqflite", "Provider", "fl_chart", "PDF/CSV export"],
    repo: gh("gestion-salon"),
    shots: [
      { file: "salon-dashboard.png", alt: "Dashboard with monthly balance and charts", frame: "phone" },
      { file: "salon-appointments.png", alt: "Appointments agenda", frame: "phone" },
      { file: "salon-clients.png", alt: "Client list with visit history", frame: "phone" },
      { file: "salon-reports.png", alt: "Reports with filters and export", frame: "phone" },
    ],
    metrics: [
      { value: "100%", label: "offline" },
      { value: "0", label: "servers to pay for" },
      { value: "Real", label: "SQLite in tests, no DB mocks" },
      { value: "2", label: "platforms (Android, iOS)" },
    ],
    context:
      "Built for a real, independent beauty salon. The owner needed to manage income, expenses and appointments and see whether the business was profitable, without paying for a server or depending on mobile data.",
    constraints: [
      "No backend and no running cost.",
      "Must work without data for days.",
      "Data loss is unacceptable: it is the business's only record.",
    ],
    decisions: [
      {
        choice: "SQLite on the device as the single source of truth",
        why: "Zero infrastructure, instant reads and nothing to sync.",
      },
      {
        choice: "UI → controllers → repositories → database, with Provider and no code generation",
        why: "The simplest structure that keeps business logic out of widgets at this size.",
      },
      {
        choice: "Repository tests against real in-memory SQLite (sqflite_common_ffi)",
        why: "Tests catch real SQL and migration bugs that mocks would hide.",
      },
      {
        choice: "Validated JSON backup and restore",
        why: "Restore checks format and version first and never touches existing data if the file is invalid.",
      },
    ],
    built: [
      "Income and expense capture with service catalog, suggested prices and payment methods.",
      "Dashboard with balance by day, week, month and year, category breakdown and monthly trend.",
      "Clients with visit history, appointments with local reminders, daily cash closing and monthly goals.",
      "PDF and Excel-compatible CSV reports generated on the device.",
    ],
  },
  {
    slug: "salary-fund",
    title: "Salary Fund Distribution",
    summary:
      "Offline desktop app that distributes a public unit's unexecuted salary fund under Cuba's Acuerdo 10199/2025 — reconciled to the cent.",
    period: "Oct 2026",
    status: "Feature-complete",
    kind: "Client work · Desktop · Finance",
    stack: ["Python", "tkinter", "pytest", "ruff", "PyInstaller", "Excel export"],
    repo: gh("fondo-salario-acuerdo-10199"),
    shots: [
      { file: "fondo-results.png", alt: "Results tab with per-worker amounts", frame: "window" },
      { file: "fondo-workers.png", alt: "Workers tab with evaluations", frame: "window" },
    ],
    metrics: [
      { value: "100+", label: "pytest tests" },
      { value: "0.00", label: "rounding drift" },
      { value: "1", label: "folder to install" },
      { value: "4", label: "weighted indicators" },
    ],
    context:
      "Acuerdo 10199 (Official Gazette, Aug 2025) lets budgeted units use unexecuted salary funds as staff incentives, but it does not fix the distribution criteria: each unit approves its own. Payroll staff were doing the math by hand.",
    constraints: [
      "Offline, on office PCs, for non-technical users.",
      "Criteria change from one unit to another.",
      "The money must add up exactly, and every number must be auditable.",
    ],
    decisions: [
      {
        choice: "Configurable weights and scales instead of hard-coded rules",
        why: "Defaults follow the reference document (25 / 40 / 20 / 15), but each unit can match its own regulation.",
      },
      {
        choice: "Largest-remainder rounding to the cent",
        why: "The per-worker amounts always add up to the exact amount being distributed.",
      },
      {
        choice: "Separate domain, persistence, importers, export and UI packages",
        why: "The calculation is tested on its own, without opening a window.",
      },
      {
        choice: "PyInstaller single-folder build with a --selftest flag",
        why: "Nothing to install on the target PC, and the built executable proves it starts.",
      },
    ],
    built: [
      "Areas, positions and workers, editable in the app or imported from Excel/CSV.",
      "Per-area allocation from vacancies × salary × unexecuted months, then individual coefficients from four indicators.",
      "Excel report with area amounts, coefficients, pre-payroll and the parameters used, ready to print.",
    ],
  },
  {
    slug: "ortosim",
    title: "OrtoSim CUBA: Shoulder",
    summary:
      "Offline serious game that teaches shoulder orthopedics on low-end Android phones, built entirely with open-source tools.",
    period: "Oct 2026 — present",
    status: "Undergraduate thesis · prototype in active development",
    kind: "Thesis · Mobile · Game engine",
    stack: ["Godot 4", "GDScript", "GUT", "PocketBase", "Caddy", "JSON Schema", "Blender", "Docker"],
    repo: privateRepo,
    shots: [
      { file: "ortosim-menu.png", alt: "OrtoSim main menu: the virtual consultation room", frame: "landscape" },
      { file: "ortosim-anatomy.png", alt: "3D shoulder anatomy library with toggleable layers", frame: "landscape" },
      { file: "ortosim-case.png", alt: "A clinical case step in progress", frame: "landscape" },
    ],
    metrics: [
      { value: "150", label: "test files (GUT)" },
      { value: "< 60 MB", label: "APK budget" },
      { value: "2 GB", label: "RAM target device" },
      { value: "12", label: "typed case-step kinds" },
    ],
    context:
      "My undergraduate thesis. A medical master's program designed a game to train students in shoulder examination and diagnosis, and I turned its design document into software. The students use low-end Android phones in Cuba, where data is scarce and expensive and app stores are not an option.",
    constraints: [
      "Android 7.0+, OpenGL ES 3.0, 2 GB RAM, locked at 30 FPS.",
      "Fully usable offline; the network is only for updates and optional sync.",
      "No Play Store: distribution by APK and a self-hosted update server.",
      "US sanctions block tools like Unity in Cuba, so only open-source software without account activation.",
      "Clinicians must be able to add new cases without writing code.",
    ],
    decisions: [
      {
        choice: "Godot 4 with the Compatibility renderer",
        why: "Open source, no account activation, and its GLES3 renderer runs on the target phones.",
      },
      {
        choice: "Data-driven case engine",
        why: "A clinical case is a JSON document of typed steps validated with JSON Schema, so content grows without touching code.",
      },
      {
        choice: "Hexagonal architecture inside Godot",
        why: "The domain is pure GDScript behind ports (ContentRepository, ProgressStore, EventLog, SyncGateway, Clock). It is unit-tested with GUT without opening a scene, with clock and randomness injected for determinism.",
      },
      {
        choice: "Versioned .pck content packs with a SHA-256 manifest",
        why: "Content updates ship without reinstalling the APK, and integrity is verified on download.",
      },
      {
        choice: "PocketBase for sync, ranking and research telemetry",
        why: "One self-hosted binary. Events are queued locally as JSONL and synced when a connection appears.",
      },
      {
        choice: "Hard performance budgets",
        why: "< 50k triangles for the shoulder model with LOD, ≤ 1024 px ETC2 textures, < 100 draw calls per frame — checked, not hoped for.",
      },
    ],
    built: [
      "Interactive 3D anatomy library with toggleable layers (bones, muscles, nerves, bursae), processed from Z-Anatomy with headless Blender in Docker.",
      "Case engine with 12 step kinds: anamnesis, palpation on the 3D model, special tests driven by joint angles, differential ranking, treatment timeline and more.",
      "Configurable gamification, including confidence calibration before each diagnosis.",
      "A naming contract between 3D assets and code (bone_, muscle_, landmark_…) so draft models can be replaced without code changes.",
    ],
    note: "All clinical content is a draft pending validation by a physician.",
  },
];

export const sideProjects: SideProject[] = [
  {
    title: "XILEF licensing",
    summary:
      "Offline license system for a commercial product I'm building. Ed25519-signed licenses bound to the customer's machine, monotonic sequence numbers for renewal and revocation, and every artifact self-verified before it is written.",
    stack: ["TypeScript", "Node.js", "Ed25519"],
    repo: privateRepo,
    status: "Product in development",
  },
  {
    title: "Math III exam prep",
    summary: "Interactive site with step-by-step theory and auto-graded exercises.",
    stack: ["JavaScript"],
    repo: gh("matematica-iii-suficiencia"),
  },
  {
    title: "Data Structures II study guide",
    summary: "220+ bilingual Java exercises: heaps, hashing, skip lists, graphs, union-find.",
    stack: ["Java"],
    repo: gh("data-structures-ii-study-guide"),
  },
];
