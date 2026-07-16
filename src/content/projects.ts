import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "gma-research-assistant",
    title: "GMA Research Assistant",
    shortDescription:
      "A structured regulatory research workflow for evidence review, approval, grounded drafting, and spreadsheet export.",
    positioningStatement:
      "Making source-backed research easier to inspect, review, and hand off.",
    categories: ["AI", "Research", "Data", "Automation", "Web"],
    featured: true,
    status: "Prototype",
    role: "Full-stack and AI workflow developer",
    contributionSummary:
      "Designed and implemented the interface, API workflow, data services, AI-provider layer, review controls, and export path represented in this prototype.",
    timeframe: "2026",
    technologies: ["Next.js", "TypeScript", "FastAPI", "Python", "PostgreSQL", "pgvector"],
    gallery: [
      {
        src: "/images/projects/gma/regulatory-search.png",
        alt: "GMA Research Assistant regulatory search result with source status, summary, actions, and requirements table",
        caption:
          "A source-backed result separates the research summary, evidence state, review action, and export workflow.",
        width: 1440,
        height: 900,
      },
      {
        src: "/images/projects/gma/review-queue.png",
        alt: "GMA Research Assistant review queue showing approved batches and a structured review summary",
        caption:
          "The review queue keeps human approval visible before researched records move into approved use.",
        width: 1440,
        height: 900,
      },
    ],
    problem:
      "Regulatory research can span repetitive spreadsheet work, fragmented evidence, draft generation, and multi-step human review. The prototype explores how those steps can become one inspectable workflow without treating generated text as final authority.",
    users:
      "Researchers and reviewers working with structured, source-backed regulatory records.",
    constraints: [
      "Generated drafts must remain reviewable and attributable to their supporting sources.",
      "Workspace and role boundaries must be respected throughout the workflow.",
      "Spreadsheet inputs and outputs need validation rather than silent transformation.",
    ],
    contribution:
      "I worked across the Next.js interface and FastAPI services, including workspace flows, research orchestration, provider abstraction, records, reviews, source policy, storage, and export behavior. The current repository also includes test coverage for authentication, tenant boundaries, migrations, AI providers, files, and end-to-end workflow scenarios.",
    approach: [
      "Map the research journey from upload and validation through search, review, approval, and export.",
      "Separate source retrieval, draft generation, and human approval so each state remains visible.",
      "Represent permissions, audit data, and organization rules in backend services rather than only in the interface.",
      "Test core workflows against local demonstration data and a repeatable Spain workbook regression case.",
    ],
    keyFeatures: [
      {
        title: "Source-backed research",
        description:
          "Structured results retain evidence context and distinguish approved internal records from generated proposals.",
      },
      {
        title: "Human approval gates",
        description:
          "Review queues surface exceptions and keep approval decisions explicit before records are reused.",
      },
      {
        title: "Provider-aware drafting",
        description:
          "A configurable AI layer supports multiple providers while preserving validation and draft parsing boundaries.",
      },
      {
        title: "Workbook handoff",
        description:
          "The export path creates structured spreadsheet deliverables from reviewed research results.",
      },
    ],
    architecture: [
      { id: "interface", label: "Next.js interface", detail: "Research, review, records, and export task flows." },
      { id: "api", label: "FastAPI service", detail: "Typed workflow endpoints and organization-aware policies." },
      { id: "research", label: "Research orchestration", detail: "Provider selection, source tracking, normalization, and contracts." },
      { id: "storage", label: "Data layer", detail: "PostgreSQL records, vector retrieval, files, and audit history." },
      { id: "review", label: "Review & export", detail: "Human approval decisions and spreadsheet generation." },
    ],
    outcomes: [
      "A working prototype connects research, draft, review, approved-record search, and export states.",
      "The repository includes a production-oriented API structure and regression fixtures for repeatable validation.",
      "The experience makes human review a visible part of the product rather than a hidden operational step.",
    ],
    lessons: [
      "Source governance and review states are product-design concerns as much as backend concerns.",
      "Provider flexibility is useful only when contracts, validation, and failure states remain consistent.",
      "Spreadsheet fidelity needs explicit regression checks because small formatting changes can affect downstream work.",
    ],
    challenges: [
      {
        challenge: "Keeping AI-assisted results grounded",
        response:
          "The workflow separates retrieved context, generated proposals, evidence references, and approval status.",
      },
      {
        challenge: "Handling spreadsheet-oriented work",
        response:
          "Inputs are parsed and validated, while regression fixtures compare generated workbook sheets with known references.",
      },
    ],
    visibilityNote:
      "This case study uses local demonstration data and sanitized interface captures. It does not represent legal advice, a production compliance system, or a guarantee of regulatory accuracy.",
    seo: {
      title: "GMA Research Assistant Case Study",
      description:
        "A case study of a review-centered regulatory research and AI-assisted workflow prototype by Yvan Ramirez.",
    },
  },
  {
    slug: "fitness-buddy",
    title: "Fitness Buddy",
    shortDescription:
      "An academic mobile application exploring adaptive cardio training, progress tracking, and retrieval-supported guidance.",
    positioningStatement:
      "Exploring how personalized context can make fitness guidance clearer and more relevant.",
    categories: ["Mobile", "AI", "Machine Learning"],
    featured: true,
    status: "Academic Project",
    role: "Mobile, full-stack, and AI application developer",
    technologies: [
      "Android APK",
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "Python",
      "JSON HTTP API",
      "Groq Llama 4 Scout",
      "sentence-transformers",
      "FAISS",
      "NumPy",
      "SQLite",
      "Drizzle",
      "CSV / JSON",
      "Firebase Admin",
      "Vercel",
      "Cloudflare Workers",
      "vinext",
      "OpenAI libraries",
      "Hugging Face libraries",
      "Pandas",
      "Uvicorn",
      "FastAPI",
    ],
    gallery: [{
      src: "/images/projects/fitness/fitness-buddy-icon.png",
      alt: "Fitness Buddy orange wellness robot icon with a heart-rate display",
      caption: "Fitness Buddy project icon supplied by Yvan Ramirez.",
      width: 1254,
      height: 1254,
    }],
    problem:
      "Generic fitness plans can overlook user context and make progress difficult to interpret. Fitness Buddy explores a more adaptive application experience while keeping AI-supported guidance educational rather than medical.",
    users: "The supplied project summary describes people seeking structured cardiovascular training and progress feedback.",
    constraints: [
      "The experience must not present itself as medical advice or a medical device.",
      "AI-supported guidance needs clear limits and curated information sources.",
      "Personal fitness context should be handled carefully and explained clearly.",
    ],
    approach: [],
    keyFeatures: [
      { title: "Adaptive cardio training", description: "Identified in the available high-level project description." },
      { title: "Progress tracking", description: "Identified in the available high-level project description." },
      { title: "AI-supported guidance", description: "Described at a high level; implementation details remain unverified." },
    ],
    architecture: [],
    outcomes: [],
    lessons: [],
    challenges: [],
    visibilityNote:
      "This public overview reflects the supplied Fitness Buddy build stack. The project remains an educational fitness application and does not provide medical advice or medical-device functionality.",
    seo: {
      title: "Fitness Buddy Case Study",
      description:
        "An academic mobile and AI application case study focused on adaptive fitness experiences and retrieval-supported guidance.",
    },
  },
  {
    slug: "space-invaders-browser",
    title: "Space Invaders Clone",
    shortDescription:
      "A playable, endless Space Invaders-style browser game built for keyboard, touch, and mobile play.",
    positioningStatement:
      "A responsive arcade game that keeps the classic loop fast, readable, and playable across devices.",
    categories: ["Web", "Mobile"],
    featured: false,
    status: "Completed",
    role: "Creator and browser game developer",
    technologies: ["JavaScript", "HTML5 Canvas", "HTML", "CSS"],
    gallery: [],
    visualType: "game",
    liveUrl: "https://mrlister17.github.io/space-invaders-browser/",
    embedUrl: "https://mrlister17.github.io/space-invaders-browser/",
    repositoryUrl: "https://github.com/MrLister17/space-invaders-browser",
    problem:
      "Classic arcade controls can feel cramped or inaccessible when a browser game is designed for only one screen size or input method. Space Invaders Clone explores a responsive, touch-friendly version of the classic arcade loop.",
    users:
      "Desktop and mobile browser players who want a lightweight arcade game without an account, installation, or backend service.",
    constraints: [
      "The game must remain playable with keyboard, mouse, and simultaneous multi-touch controls.",
      "The canvas needs to stay readable across desktop and mobile browser sizes.",
      "The static game must run entirely in the browser without a build step, account, or paid service.",
    ],
    contribution:
      "I created the vanilla HTML, CSS, and JavaScript game experience, including its Canvas rendering loop, responsive input controls, game states, local high-score behavior, audio controls, and GitHub Pages deployment.",
    approach: [
      "Build the arcade loop around a responsive 3:2 Canvas playfield rather than a fixed desktop-only layout.",
      "Separate entities, collision handling, assets, input, and game state into focused JavaScript modules.",
      "Support keyboard, mouse, and multi-touch movement and firing so the same game works across devices.",
      "Keep deployment static and lightweight by publishing the finished game through GitHub Pages.",
    ],
    keyFeatures: [
      { title: "Endless waves", description: "Alien speed and fire frequency increase as each wave is cleared." },
      { title: "Responsive controls", description: "Keyboard, mouse, and simultaneous multi-touch controls support desktop and mobile play." },
      { title: "Arcade progression", description: "Score, wave, lives, wave bonuses, and browser-local high-score tracking provide a complete game loop." },
      { title: "Game-state polish", description: "Pause, mute, tab-visibility pause, visual feedback, sprites, sound effects, and looping music are part of the experience." },
    ],
    architecture: [
      { id: "canvas", label: "Canvas renderer", detail: "A 900 × 600 logical playfield scales for browser and device density constraints." },
      { id: "entities", label: "Game entities", detail: "Player, alien, projectile, shield, mystery enemy, and explosion behavior are modeled in focused modules." },
      { id: "input", label: "Input layer", detail: "Keyboard, mouse drag and click, and multi-touch controls map into the same game actions." },
      { id: "assets", label: "Assets & audio", detail: "Graphics, sprites, font, music, and sound effects load through relative static paths." },
      { id: "state", label: "Game state", detail: "Start, pause, wave completion, game-over, muted audio, and local high-score states stay explicit." },
    ],
    outcomes: [
      "A public, playable browser game is deployed through GitHub Pages.",
      "The experience supports desktop and mobile controls without a backend or account requirement.",
      "Players can pause, mute, and retain a high score in their browser when local storage is available.",
    ],
    lessons: [
      "Responsive canvas games need input and layout decisions to be designed together.",
      "A small static project can still benefit from clear module boundaries and explicit game states.",
      "Touch controls require simultaneous input handling rather than a desktop control scheme scaled down visually.",
    ],
    challenges: [
      { challenge: "Making one control system work across devices", response: "Keyboard, mouse, and multi-touch interactions are translated into a shared movement and firing model." },
      { challenge: "Keeping play readable on small screens", response: "The responsive canvas preserves a 3:2 playfield while the interface provides mobile-safe controls and a landscape suggestion." },
    ],
    visibilityNote:
      "The playable demo is hosted on GitHub Pages. Scores and sound preferences are stored locally in the player’s browser when browser storage is available; the game does not use a backend or account system.",
    seo: {
      title: "Space Invaders Clone Browser Game",
      description:
        "A playable Space Invaders-style browser game by Yvan Ramirez, built with JavaScript and the HTML5 Canvas API.",
    },
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
