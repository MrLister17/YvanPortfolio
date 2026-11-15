import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "gma-research-assistant",
    title: "GMA Research Assistant",
    shortDescription:
      "A structured regulatory research workflow for evidence review, approval, grounded drafting, and spreadsheet export.",
    positioningStatement:
      "Regulatory research where every answer shows its sources, and nothing ships until a person approves it.",
    highlights: ["Source-backed answers", "Human approval gate", "Spreadsheet handoff"],
    categories: ["AI", "Research", "Data", "Automation", "Web"],
    featured: true,
    status: "Prototype",
    role: "AI Intern, GMA Research Team at UL Solutions",
    contributionSummary:
      "Designed and implemented the interface, API workflow, data services, AI-provider layer, review controls, and export path represented in this prototype.",
    timeframe: "Jun 2026 – Present",
    technologies: ["Next.js", "React", "TypeScript", "Python", "FastAPI", "PostgreSQL", "pgvector", "SQLAlchemy", "Alembic", "Docker", "Pytest"],
    icon: { src: "/images/projects/gma/gma-icon.svg", alt: "GMA Research Assistant icon: a source document under a review lens with an approval check" },
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
      "Regulatory researchers and reviewers on the GMA Research Team who work with structured, source-backed records.",
    constraints: [
      "Generated drafts must remain reviewable and attributable to their supporting sources.",
      "Workspace and role boundaries must be respected throughout the workflow.",
      "Spreadsheet inputs and outputs need validation rather than silent transformation.",
    ],
    contribution:
      "Built during my AI internship with the GMA Research Team at UL Solutions. I mapped the Chem-Envi regulatory research workflow, turned researcher feedback into requirements, and worked across the Next.js interface and FastAPI services, including workspace flows, research orchestration, provider abstraction, records, reviews, source policy, storage, and export behavior. The current repository also includes test coverage for authentication, tenant boundaries, migrations, AI providers, files, and end-to-end workflow scenarios.",
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
      "A cardio coaching app for preventing lifestyle diseases, where a retrieval-grounded Llama model answers from expert-verified health references.",
    positioningStatement:
      "An AI cardio coach that answers from expert-verified health references, not from memory.",
    highlights: ["RAG over 28 expert answers", "549-passage health knowledge base", "ROUGE-L evaluated"],
    aiSystem: {
      eyebrow: "Retrieval and model tuning",
      headline: "The coach looks it up before it speaks.",
      intro:
        "Fitness Buddy does not let the model answer health questions from memory. Each reply is assembled from the user's profile, expert-verified references, and a fixed exercise library, then generated under rules tuned for each task.",
      stats: [
        { value: "28", label: "expert-verified reference answers from Stanford Medicine, Healthline, Vancouver Coastal Health Research Institute, and Shirley Ryan AbilityLab" },
        { value: "549", label: "sourced passages on non-communicable diseases, cardio, and Filipino nutrition from DOH, WHO, FNRI, and the Philippine Heart Association" },
        { value: "5", label: "task-specific prompts: workouts, 14-day plans, health tips, progress reminders, and evaluation" },
        { value: "Top 2", label: "passages retrieved per question, each labelled with where it came from" },
      ],
      retrievalTitle: "How an answer is retrieved",
      retrieval: [
        { label: "Read the person", detail: "The backend loads the user's profile from Firebase: age, BMI status, fitness level, session length, weekly activity goal, medical constraints, and lifestyle notes remembered from earlier chats." },
        { label: "Expert references first", detail: "The question is scored against 28 gold-standard answers written by named health experts. The two best matches are passed on with their source and expert attached." },
        { label: "Knowledge-base fallback", detail: "If no expert answer matches, retrieval falls back to a 549-passage knowledge base on non-communicable diseases, each passage stored with its source link." },
        { label: "Exercise menu", detail: "Workouts can only use exercises from the app's own library. The model receives that menu with intensity and MET values and is forbidden to invent anything outside it." },
        { label: "Grounded generation", detail: "Llama 4 Scout writes the reply from that context. The prompt tells it which facts are expert-verified and which come from the general knowledge base." },
      ],
      tuningTitle: "How the model is tuned for each job",
      tuning: [
        { label: "Evaluation answers", value: "Temperature 0.01", detail: "Near-deterministic output so results can be reproduced and scored with ROUGE-L against the expert reference answers." },
        { label: "Workouts and 14-day plans", value: "Temperature 0.1", detail: "Low randomness for safety. Sessions must add up to the user's exact minutes, and plans return only valid exercise IDs, one line per day." },
        { label: "Tips and reminders", value: "Temperature 0.7", detail: "More variety for daily motivation, capped at one or two short sentences and matched to how the user's week is going." },
        { label: "Domain guardrails", value: "Cardio, NCDs, Filipino nutrition", detail: "Anything outside that scope gets a fixed refusal. Higher-risk suggestions add a see-your-doctor disclaimer." },
      ],
    },
    categories: ["Mobile", "AI", "Machine Learning"],
    featured: true,
    status: "Academic Project",
    role: "Mobile, full-stack, and AI application developer",
    technologies: [
      "Android APK",
      "Kotlin",
      "Jetpack Compose",
      "Python",
      "JSON HTTP API",
      "Groq Llama 4 Scout",
      "FLAN-T5",
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
    icon: { src: "/images/projects/fitness/fitness-buddy-icon.svg", alt: "Fitness Buddy icon: a heart with a heart-rate pulse line" },
    gallery: [],
    problem:
      "Generic fitness plans can overlook user context and make progress difficult to interpret. Fitness Buddy explores a more adaptive application experience while keeping AI-supported guidance educational rather than medical.",
    users: "Busy Filipino adults who want structured cardio training, clear progress feedback, and help building daily movement habits that lower the risk of non-communicable diseases.",
    constraints: [
      "The experience must not present itself as medical advice or a medical device.",
      "AI-supported guidance needs clear limits and curated information sources.",
      "Personal fitness context should be handled carefully and explained clearly.",
    ],
    approach: [],
    keyFeatures: [
      { title: "Workouts that fit the minutes you have", description: "Warm-up, main set, and cool-down are generated to add up to the user's exact session length, using only exercises from the app's library." },
      { title: "A 14-day plan with real rest days", description: "The planner follows the user's chosen workout days and returns a strict two-week schedule the app can render directly." },
      { title: "Tips that know your week", description: "Daily tips react to the last logged activity and weekly progress, switching between building on progress, recovery, and catching up." },
      { title: "Reminders with the right tone", description: "Four reminder styles cover a strong week, a nearly finished goal, a few missed sessions, and a long break, each written to encourage rather than guilt." },
    ],
    architecture: [
      { id: "app", label: "Android app", detail: "Kotlin and Jetpack Compose interface for workouts, progress tracking, and chat with the coach." },
      { id: "api", label: "FastAPI backend", detail: "Separate routes for workouts, weekly plans, health tips, progress reminders, and evaluation, each with its own prompt and settings." },
      { id: "firebase", label: "Firebase", detail: "Holds user profiles, goals, logged activities, chat memory, generated schedules, and the exercise library." },
      { id: "retrieval", label: "Retrieval layer", detail: "Searches expert-verified reference answers first, then the non-communicable disease knowledge base, and labels where each fact came from." },
      { id: "model", label: "Llama 4 Scout", detail: "The 17B instruct model generates replies from the retrieved context under task-specific rules." },
      { id: "eval", label: "Evaluation", detail: "A dedicated endpoint produces answers that are scored with ROUGE-L against the expert reference set." },
    ],
    outcomes: [],
    lessons: [],
    challenges: [],
    visibilityNote:
      "Retrieval and tuning details are taken from the Fitness Buddy backend code. The app is an educational fitness project and does not provide medical advice or medical-device functionality.",
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
    highlights: ["Playable in the browser", "Keyboard and multi-touch"],
    categories: ["Web", "Mobile"],
    featured: false,
    status: "Completed",
    role: "Creator and browser game developer",
    technologies: ["JavaScript", "HTML5 Canvas", "HTML", "CSS"],
    icon: { src: "/images/projects/space-invaders/space-invader-icon.svg", alt: "Space Invaders Clone icon: a pixel alien" },
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
