import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "gma-research-assistant",
    title: "GMA Research Assistant",
    shortDescription:
      "An AI regulatory research web application for approved-knowledge retrieval, AI-assisted drafting, researcher review, and Excel export.",
    positioningStatement:
      "Regulatory research where every answer shows its sources, and nothing ships until a person approves it.",
    highlights: ["Source citations", "Reviewer approvals", "Excel export"],
    categories: ["AI", "Research", "Data", "Automation", "Web"],
    featured: true,
    status: "Prototype",
    role: "Full-stack and AI workflow developer, UL Solutions",
    contributionSummary:
      "Designed and implemented the interface, API workflow, data services, AI-provider layer, review controls, and export path represented in this prototype.",
    timeframe: "2026",
    technologies: ["Next.js", "React", "TypeScript", "Python", "FastAPI", "PostgreSQL", "pgvector", "SQLAlchemy", "Alembic", "Docker", "Pytest"],
    icon: { src: "/images/projects/gma/gma-icon.svg", alt: "GMA Research Assistant icon: a source document under a review lens with an approval check" },
    cover: {
      src: "/images/projects/gma/dashboard.jpg",
      alt: "GMA Research Assistant dashboard in dark mode showing the research workspace, record counts, recent research, and the review backlog",
      caption: "The dashboard of the demonstration workspace.",
      width: 1440,
      height: 900,
    },
    gallery: [
      {
        src: "/images/projects/gma/regulatory-search.jpg",
        alt: "GMA Research Assistant regulatory search: a research request form beside the Finder and Currency Checker steps and a conditional answer with official source links",
        caption:
          "Regulatory Search. Finder and Currency Checker investigate independently, then one answer is prepared with its status and source links.",
        width: 1440,
        height: 900,
      },
      {
        src: "/images/projects/gma/review-queue.jpg",
        alt: "GMA Research Assistant review queue: pending records on the left and a proposed value with reviewer comments and approve or reject actions on the right",
        caption:
          "Review Queue. A person edits the proposed value, checks its source, and approves or rejects it before it becomes a current record.",
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
      "Started during my AI internship with the GMA Research Team at UL Solutions. I mapped Chem-Envi workflows into requirements, refined the prototype through researcher feedback, testing, and documentation, and integrated source citations, versioned records, and reviewer approvals to trace findings from workbook ingestion through Excel export. I worked across the Next.js interface and FastAPI services, including workspace flows, research orchestration, provider abstraction, records, reviews, source policy, storage, and export behavior. The current repository also includes test coverage for authentication, tenant boundaries, migrations, AI providers, files, and end-to-end workflow scenarios.",
    approach: [
      "Map the research journey from upload and validation through search, review, approval, and export.",
      "Separate source retrieval, draft generation, and human approval so each state remains visible.",
      "Represent permissions, audit data, and organization rules in backend services rather than only in the interface.",
      "Test core workflows against local demonstration data and a repeatable Spain workbook regression case.",
    ],
    keyFeatures: [
      {
        title: "Independent verification",
        description:
          "A Finder locates the applicable requirements while a Currency Checker separately checks amendments and dates. Their evidence is compared before one answer is returned.",
      },
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
      "Screens show the app's demonstration workspace with seeded example data, not live research. The prototype is not legal advice.",
    seo: {
      title: "GMA Research Assistant Case Study",
      description:
        "A case study of a review-centered regulatory research and AI-assisted workflow prototype by Yvan Ramirez.",
    },
  },
  {
    slug: "gma-dataready",
    title: "GMA DataReady",
    shortDescription:
      "Microsoft 365 workbook automation that converts and validates research workbooks before upload.",
    positioningStatement:
      "Workbook preparation cut from 2–3 hours to 10–15 minutes.",
    highlights: ["2–3 hours down to 10–15 minutes", "Microsoft 365 automation"],
    categories: ["Automation", "Data"],
    featured: true,
    status: "Workplace Tool",
    role: "Workbook automation developer, UL Solutions",
    timeframe: "2026",
    technologies: ["Power Automate", "Excel Office Scripts", "OneDrive for Business", "Microsoft Teams"],
    icon: { src: "/images/projects/dataready/dataready-icon.svg", alt: "GMA DataReady icon: a workbook grid with an automation bolt" },
    gallery: [],
    problem:
      "Preparing research workbooks meant converting files and running checks by hand before upload, which took 2–3 hours.",
    users: "Researchers who prepare regulatory research workbooks.",
    constraints: [],
    approach: [],
    keyFeatures: [
      { title: "Workbook conversion", description: "Conversion is automated with Power Automate and Excel Office Scripts instead of being done by hand." },
      { title: "Pre-upload checks", description: "Validation checks run on each workbook before it is uploaded." },
      { title: "Inside Microsoft 365", description: "The tools run on OneDrive for Business and Teams, alongside the Excel files they work on." },
    ],
    architecture: [],
    outcomes: ["Workbook preparation went from 2–3 hours to 10–15 minutes by automating conversion and pre-upload checks."],
    lessons: [],
    challenges: [],
    visibilityNote:
      "GMA DataReady is a workplace tool. Its screens, files, and workflow details are not shown publicly.",
    seo: {
      title: "GMA DataReady Case Study",
      description:
        "Microsoft 365 workbook automation by Yvan Ramirez that cut workbook preparation from 2–3 hours to 10–15 minutes.",
    },
  },
  {
    slug: "fitness-buddy",
    title: "Fitness Buddy",
    shortDescription:
      "An Android app for personalized cardio training and NCD risk mitigation, with goal setting, adaptive training, a RAG chatbot, and social gamification.",
    positioningStatement:
      "An AI cardio coach for Filipino adults, tested on whether its answers are backed by evidence.",
    highlights: ["Faithfulness 0.90 with RAG", "Fine-tuned FLAN-T5 vs Llama 4 Scout", "Usability 3.69 out of 4"],
    aiSystem: {
      eyebrow: "Fine-tuning, retrieval, and evaluation",
      headline: "Four model setups, one held-out test.",
      intro:
        "The chatbot was built two ways: a FLAN-T5 model fine-tuned on health questions and answers, and Llama 4 Scout grounded by retrieval. Both were scored on 28 expert-written cases that were never used for training or retrieval.",
      stats: [
        { value: "0.90", label: "faithfulness of the deployed Llama 4 Scout pipeline with RAG: the share of its claims supported by the retrieved evidence" },
        { value: "1,333", label: "question-and-answer records used to fine-tune FLAN-T5, filtered for cardio, NCD, and fitness topics" },
        { value: "677", label: "passages in the retrieval corpus, from 11 documents by WHO, CDC, HHS, NIDDK, NHLBI, NCI, and DOST-FNRI" },
        { value: "28", label: "held-out reference cases from named health experts, reserved for evaluation only" },
      ],
      retrievalTitle: "How it was built",
      retrieval: [
        { label: "Fine-tuning data", detail: "Questions and answers from the ChatDoctor/HealthCareMagic dataset were filtered with terms such as hypertension, diabetes, exercise, and blood pressure. That gave 1,330 records, plus three hand-written safety examples, split into training and validation sets." },
        { label: "Fine-tuning FLAN-T5", detail: "FLAN-T5 was fine-tuned in two rounds, with the second performing better. The aim was to test whether a small, locally hosted model could work within the project's hardware limits." },
        { label: "Retrieval corpus", detail: "A separate knowledge base of 677 passages from 11 authoritative documents. Each passage keeps its source organization, title, topic, license, link, and retrieval date." },
        { label: "Retrieval and context", detail: "A question is matched by keyword and semantic similarity. The best passages are combined with the question and the user's profile and activity history from Firebase." },
        { label: "Two pipelines", detail: "Fine-tuned FLAN-T5 with RAG, and Llama 4 Scout with RAG. Llama was not fine-tuned because it was too large for the available hardware. The released app uses Llama 4 Scout." },
      ],
      tuningTitle: "What the results showed",
      tuning: [
        { label: "Fine-tuning plus retrieval", value: "Answer relevancy 0.32 to 0.66", detail: "The small FLAN-T5 model improved on every answer-quality metric once fine-tuning and retrieval were added. Semantic similarity rose from 0.53 to 0.65." },
        { label: "Grounding", value: "Faithfulness 0.99 and 0.90", detail: "Both RAG pipelines kept their claims supported by the retrieved passages, above the project's 0.85 screening threshold." },
        { label: "An honest negative", value: "RAG did not raise Llama's similarity", detail: "Llama 4 Scout scored 0.76 on semantic similarity without retrieval and 0.73 with it. Retrieval made answers checkable, not more similar to the references." },
        { label: "Next to fix", value: "Context recall 0.54", detail: "Context precision and recall fell below the 0.85 threshold for both pipelines, which points to retrieval coverage and ranking as the main limitation." },
      ],
      results: [
        {
          title: "Answer quality",
          caption: "Mean scores across the 28 held-out cases. Higher is better.",
          columns: ["ROUGE‑L F1", "Semantic similarity", "Answer relevancy"],
          rows: [
            { label: "FLAN-T5 base, no RAG", values: ["0.0584", "0.5322", "0.3214"] },
            { label: "FLAN-T5 fine-tuned, with RAG", values: ["0.0802", "0.6521", "0.6607"] },
            { label: "Llama 4 Scout, no RAG", values: ["0.1406", "0.7610", "0.9821"] },
            { label: "Llama 4 Scout, with RAG", values: ["0.1349", "0.7269", "0.9554"], deployed: true },
          ],
        },
        {
          title: "Evidence grounding",
          caption: "RAGAS-style metrics, which need retrieved passages, so only the two RAG pipelines are scored.",
          columns: ["Faithfulness", "Context precision", "Context recall"],
          rows: [
            { label: "FLAN-T5 fine-tuned, with RAG", values: ["0.9911", "0.7054", "0.5446"] },
            { label: "Llama 4 Scout, with RAG", values: ["0.9018", "0.7679", "0.5446"], deployed: true },
          ],
        },
      ],
      resultsNote:
        "These metrics measure similarity to reference answers and support from retrieved evidence. They are not percentages of medical correctness.",
    },
    categories: ["Mobile", "AI", "Machine Learning"],
    featured: true,
    status: "Thesis Project",
    role: "Mobile, full-stack, and AI developer on a three-person thesis team",
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
    icon: { src: "/images/projects/fitness/fitness-buddy-icon.png", alt: "Fitness Buddy icon: an orange wellness robot with a heart-rate display" },
    gallery: [],
    problem:
      "Physical inactivity is a modifiable risk factor for non-communicable diseases, yet many Filipino adults lack access to structured guidance and support.",
    users: "Filipino adults aged 20 to 59, both gym-goers and people who do not go to a gym.",
    constraints: [
      "The experience must not present itself as medical advice or a medical device.",
      "AI-supported guidance needs clear limits and curated information sources.",
      "Personal fitness context should be handled carefully and explained clearly.",
    ],
    approach: [],
    keyFeatures: [
      { title: "Goals and adaptive training", description: "Users set their own cardio goals. A rule-based system reads their session history and suggests adjustments, which they can accept or decline." },
      { title: "A chatbot that looks things up", description: "Questions are answered from retrieved health passages and the user's own profile, and stay within fitness and NCD prevention." },
      { title: "Safety first", description: "Messages that describe high-risk symptoms during exercise, such as chest pain or dizziness, get safety guidance instead of more workout advice." },
      { title: "Social gamification", description: "Points, badges, leaderboards, group challenges, and a customizable avatar keep people coming back." },
    ],
    architecture: [
      { id: "app", label: "Android app", detail: "The Kotlin client for workouts, progress tracking, gamification, and chat with the coach." },
      { id: "api", label: "FastAPI backend", detail: "A Python service hosted on Render that receives requests from the app and assembles each prompt." },
      { id: "firebase", label: "Firebase", detail: "Stores user accounts, profiles, goals, and activity history, which personalize each reply." },
      { id: "retrieval", label: "Retrieval layer", detail: "Keyword and semantic search over the 677-passage health corpus." },
      { id: "model", label: "Llama 4 Scout", detail: "The released app calls Llama 4 Scout through Groq, with the retrieved passages and user context in the prompt." },
      { id: "eval", label: "Evaluation", detail: "Four model setups scored on 28 held-out cases with ROUGE-L, semantic answer similarity, and RAGAS-style metrics." },
    ],
    outcomes: [
      "35 people tested the app, 17 gym-goers and 18 non-gym-goers. The overall usability rating was 3.692 out of 4.00, with no significant difference between the two groups (p = 0.661).",
      "All 31 unit tests and 14 integration tests passed across four Scrum sprints.",
      "Requirements came from a survey of 84 adults before development started.",
    ],
    lessons: [
      "High faithfulness does not mean complete answers. An answer can be fully supported by what was retrieved and still miss what was never retrieved.",
      "Keeping one evaluation set and one set of metrics from the second sprint onward made the final comparison simple.",
      "The next improvement is in retrieval: a larger, cleaner corpus and better ranking.",
    ],
    challenges: [],
    visibilityNote:
      "Results are from the team's undergraduate thesis. Fitness Buddy is an educational app and does not give medical advice.",
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
    icon: { src: "/images/projects/space-invaders/space-invader-icon.png", alt: "Space Invaders Clone icon: a black pixel alien" },
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
