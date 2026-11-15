---
name: portfolio-design
description: Design rules for Yvan's portfolio site. Use BEFORE editing anything visual or interactive in this repo — CSS, components, pages, layout, colors, fonts, icons, animation, hover/focus states, forms, navigation. Covers the brand palette (Cream / Ink / Pastel Pink), the Fraunces + DM Sans type system, the motion system, 20 UX and animation principles, and 20 design terms, each turned into a concrete rule to apply and check.
---

# Portfolio design rules

Yvan asked that every UI change to this site follows these rules. Read them before
editing, apply them while editing, and run the checklist at the end before finishing.

## 1. Brand tokens

All tokens live at the top of `src/app/globals.css`. Never hard-code a color, font,
duration or easing in a component or rule: use the token. If a new shade is needed,
derive it with `color-mix(in oklch, …)` from an existing token.

| Name        | Hex       | Role                                                     |
|-------------|-----------|----------------------------------------------------------|
| Cream       | `#ECE6DC` | Text on dark theme, background on light theme            |
| Ink         | `#050505` | Background on dark theme, text on light theme            |
| Pastel Pink | `#F7B9CB` | The one accent: primary buttons, active states, emphasis |

- Two themes: Ink dark (default) and Cream light, switched by `data-theme` on `<html>`.
  Every change must look right in both. Check both before finishing.
- Yvan rejected hot pink (Orchid `#E65BC4`) and salmon (`#FA9189`). The accent is a
  soft pastel pink. Never reintroduce a saturated magenta or an orange-leaning pink.
- Pastel pink as a fill always carries Ink text (`--on-accent`), never Cream or white.
- Pastel pink is nearly invisible on Cream, so on the light theme it is only used for
  fills. Text uses `--accent-text` (deep rose on light); large headings, numbers,
  thin lines, dots and sparks use `--accent-display` (mid rose on light). On dark all
  three are the pure pastel pink.
- `--accent-deep` is the darker edge under 3D buttons.
- No other hues. No blue, green, purple or gradient-rainbow accents. Status and
  emphasis are expressed with the accent, weight, or borders.
- One accent moment per view. If everything is pink, nothing is.

## 2. Typography

Yvan wants the site to feel personal, not techy, and only uses free fonts.

- Display face: **Fraunces** (`--font-display`), a warm soft serif. Used for headings,
  the wordmark, big numbers and pull-out phrases. Weight 400, `"SOFT" 100`.
  Emphasis inside a heading is `<em>`: italic and `--accent-text`.
- Text face: **DM Sans** (`--font-sans`). Used for paragraphs, navigation, buttons,
  labels and tags.
- Both are SIL Open Font License, self-hosted in `src/fonts/` and loaded with
  `next/font/local` in `src/app/layout.tsx`. Never add a paid font or a font CDN link.
- No monospace for design purposes. `--font-mono` exists only for `<kbd>` and code.
- Smallest text on the site is `0.75rem` (12px). Nothing smaller, ever.

## 3. Twenty principles of UX and animation

Each line is the principle, then the rule this site follows.

1. **Squash & stretch** — pressed controls compress: `:active { transform: scale(.97) }`.
   Never stretch text or images out of proportion.
2. **Anticipation wind-up** — hint before the action: hover moves an arrow 2–3px in the
   direction the click will go, a card lifts before it opens.
3. **Staging the focus** — one focal point per screen. One primary button per view;
   everything else is secondary or a text link. Remove decoration that competes.
4. **Pose to pose** — design the start and end states first (closed/open, idle/hover),
   then let a CSS transition interpolate. No hand-timed keyframe chains for UI state.
5. **Follow through** — secondary parts settle slightly after the main one (icon after
   label, image after card) using a short delay or a soft spring, never a bounce loop.
6. **Slow in & slow out** — always ease. Use `--ease-out` for things entering or
   responding to input, `--ease-in-out` for things moving between two places.
   Never `linear` (except scroll-linked progress).
7. **Moving in arcs** — when something travels on two axes, combine translate with a
   small rotate or scale so the path curves; avoid robotic diagonal slides.
8. **Secondary action** — support the main action with a small one (arrow nudges,
   underline grows, border tints). It must never steal attention from the main one.
9. **Snappy timing** — `--dur-fast` (150ms) for hover/press, `--dur` (250ms) for
   state changes, `--dur-slow` (500ms) only for large entrances. Nothing in the UI
   over 600ms.
10. **Exaggerated feedback** — every action gets an unmistakable response: copied →
    label and icon change, selected → filled accent, error → explained in words.
11. **Solid drawing in 3D** — depth must be consistent: one light direction, shadows
    from the `--shadow` token, layers ordered by the z-index scale in globals.css.
12. **Overall appeal** — consistency is the appeal: same radius scale, same spacing
    rhythm, same icon family (lucide, 1.5–2px stroke), same framed app-icon tiles.
13. **Fitts's law** — important targets are big and close to where the pointer or
    thumb already is. Primary actions sit right under the content they act on.
14. **Bigger hit areas** — every interactive element is at least 44×44px. Extend with
    padding or a `::after` overlay rather than enlarging the visual. Whole cards are
    clickable through a stretched link.
15. **Hick's law** — fewer choices decide faster. Header holds navigation plus at most
    two utilities. Do not add a button if an existing one already leads there.
16. **Miller's law** — chunk content into groups of roughly 5–7. Long lists get
    grouped under headings or disclosed progressively.
17. **Doherty threshold** — respond within 400ms. Feedback is instant (optimistic),
    above-the-fold images are prioritized, nothing blocks interaction on animation.
18. **Postel's law** — be liberal in what you accept: search trims whitespace and
    ignores case; inputs never reject on formatting the code could fix itself.
19. **Jakob's law** — people expect this site to work like others: logo links home,
    nav on top, underlined or arrowed links, `Esc` closes overlays, `⌘/Ctrl K` searches.
20. **Frequency of use** — the most-used actions are the most reachable (projects,
    contact); rarely used ones (theme, résumé download) are present but quieter.

## 4. Twenty design terms

1. **Kerning** — spacing between specific letter pairs. Leave `font-kerning: normal`
   on; never fake kerning with manual spaces.
2. **Optical centre** — things look centred slightly above/aside the mathematical
   centre. Nudge icons in buttons and play/arrow glyphs by eye, not by numbers.
3. **Tabular numbers** — equal-width digits. Use `font-variant-numeric: tabular-nums`
   on counters, dates, indexes and anything that changes or aligns in columns.
4. **Layout shift** — content jumping as things load. Every image has width/height or
   an aspect-ratio; status text reserves its line; fonts use `display: swap` with a
   metric-similar fallback.
5. **Tracking** — spacing across a whole run of text. Uppercase labels get
   `+0.08em`; large serif headings get `-0.02em` to `-0.03em`; body text gets none.
6. **Optimistic update** — show the result immediately and reconcile after (copy
   email flips to "copied" at once; filters apply on click with no spinner).
7. **x-height** — height of lowercase letters. Paired fonts must have similar
   x-heights (Fraunces and DM Sans are close); do not mix in a face that looks smaller
   at the same size.
8. **Touch target** — the tappable area, minimum 44×44px with at least 8px between
   neighbouring targets.
9. **Leading** — line height. Headings 1.05–1.15, body 1.6–1.7, labels 1.3–1.4.
10. **Origin-aware animation** — things grow from where they were triggered. Set
    `transform-origin` toward the trigger (menus from the menu button, dialogs from
    the top, tooltips from their anchor).
11. **OKLCH** — a perceptually uniform color space. Derive tints and shades with
    `color-mix(in oklch, …)` so mixes keep even lightness across both themes.
12. **Widow** — a lone word on the last line. Headings use `text-wrap: balance`,
    paragraphs `text-wrap: pretty`.
13. **Safe area** — the part of a screen not covered by notches or home bars. Fixed
    and edge-hugging elements pad with `env(safe-area-inset-*)`.
14. **Stagger** — sibling items animate in sequence, 40–80ms apart, capped at about
    six steps so the last item never waits long.
15. **Line length** — 45–75 characters per line for paragraphs (`max-width: 65ch`).
16. **Affordance** — an element should look like what it does. Buttons look
    pressable, links are underlined or arrowed, disabled looks disabled, and
    non-interactive things never get a pointer cursor or hover effect.
17. **Combobox** — a text input paired with a filtered list (the command palette).
    Keep the ARIA combobox pattern: `role="combobox"`, `aria-controls`,
    `aria-activedescendant`, arrow keys, Enter, Escape.
18. **Interruptible animation** — an animation can be reversed mid-way without
    jumping. Prefer CSS transitions and springs over fixed keyframes for anything
    the user can toggle; never lock input while animating.
19. **Progressive disclosure** — show the essentials, reveal detail on demand
    (`<details>`, tabs, "view case study"). Do not dump everything on first view.
20. **Shared element transition** — the same element visually persists between two
    states or pages (the nav indicator's `layoutId`; a project icon carrying from
    card to case study). Use it for continuity, one shared element at a time.

## 4b. Motion system (how the principles are built here)

Reuse these before inventing anything new. All live in the "Motion" block of
`src/app/globals.css`.

| Need | Use | Principles |
|------|-----|------------|
| Block enters on scroll | `<Reveal variant="rise|fade|mask">` or `data-reveal` | slow in/out, pose to pose |
| List or grid enters on scroll | `data-reveal-group=""` on the parent; children stagger 60ms, capped at six | stagger, follow through |
| Page intro | children of `.page-hero`, `.case-hero`, `.contact-intro` stagger in automatically | staging, stagger |
| Press | `:active { transform: scale(.97) }` on every control | squash & stretch |
| Hover hint | arrow nudges 3px toward where the click goes; nav underline draws from the left | anticipation, secondary action |
| Card hover | card lifts, then image scales and icon tilts a beat later | follow through, arcs |
| Confirmation | `pop` keyframe on the swapped icon, label text changes | exaggerated feedback |
| Panel content swap | wrap in `<div key={id} className="swap-in">` | snappy timing |
| Disclosure | `<details>`; content uses the `disclose` keyframe, the `+` rotates to `×` | progressive disclosure |
| Overlay opens | `dialog-in` with `transform-origin` pointing at the trigger | origin-aware |
| Theme switch | view transition circle spreading from the toggle button | origin-aware |
| Moving highlight | `motion` `layoutId` (nav indicator) | shared element |

### 3D and press feedback (Yvan asked for these explicitly, on mobile too)

Yvan wants obvious 3D motion and exaggerated feedback on every click and tap. Lean
toward more feedback, not less. `src/components/feedback.tsx` provides it site-wide:

| Need | Use |
|------|-----|
| Anything clickable answers a press | Add its selector to `PRESSABLE` in `feedback.tsx`. It then gets `.is-pressed` (held at least 170ms so quick taps show), `.did-press` on release, a spark at the contact point, and a haptic tick on phones. Style those two classes. |
| Bigger burst for primary actions | Add the selector to `BIG`. |
| 3D tilt that follows the pointer | `data-tilt=""` on the element. It reads `--rx/--ry` (rotation), `--px/--py` (-1..1 position), `--gx/--gy` (glare). On touch screens (`hover: none`) the same variables are driven by **scroll position**, because a tap is too short to see a tilt. Yvan tested on an iPhone and reported tilt "not working" when it only reacted to presses: always check tilt in a touch-emulated browser while scrolling. |
| Tilt values without transforming the element itself | `data-tilt-source=""` (the hero stack). |
| Physical button | `.button`: sits on a 4px `--edge` and sinks into it when pressed. |
| Release bounce | `animation: boing` on `.did-press` (uses the `scale` property so it never fights `transform`). |
| 3D scroll entrance | `data-reveal-group` children rotate up from `rotateX(-16deg)`. |
| 3D showpiece | `HeroStack`: exploded layers in `preserve-3d`, auto-plays until touched. Layers above the selected one lift away and become dashed outlines so the selected layer is never hidden. |

Every new interactive element must have a visible `.is-pressed` state. Feedback must
work with touch: never rely on `:hover` alone.

Rules for adding motion:
- State changes use CSS transitions so they can be reversed mid-way. Keyframes are
  only for one-shot entrances and confirmations.
- `RevealObserver` removes the `data-reveal*` attributes after the entrance, so
  entrance delays never slow down later hover or press feedback. Keep it that way.
- The hidden pre-reveal state is scoped to `html.js`; content must stay visible with
  JavaScript off.
- Any new animated selector must be added to the `prefers-reduced-motion` block.
- Infinite animations stay slow and small: the hero stack float and the status dot.
  Do not add more.

## 5. Non-negotiables

- `prefers-reduced-motion: reduce` removes movement; opacity changes may stay.
- Visible `:focus-visible` outline on every interactive element.
- Body text contrast at least 4.5:1, large text and UI borders at least 3:1, in both themes.
- No horizontal scroll at 390px wide.

## 6. Icons

Yvan wants one uniform, hand-drawn-looking icon language. Illustrated or
AI-generated-looking art (the old cartoon robot) and emoji read as cheap to him.

- **No emoji and no text symbols as icons.** Never use emoji, and never use characters
  such as `→ ↗ ✓ ★ ⌘ +` in place of an icon. Use a lucide icon component instead.
- **UI icons:** lucide only, default stroke, sized by CSS. A standalone icon that
  introduces a block sits in an `.icon-tile` (soft pink rounded tile).
- **Brand marks:** GitHub and LinkedIn use the real marks from
  `src/components/brand-icons.tsx`. Do not substitute generic icons for a brand.
- **Project icons:** every project in `src/content/projects.ts` has an `icon`, always
  rendered through `ProjectIcon`, which frames it as a rounded app-icon tile.
  - Fitness Buddy (orange robot) and Space Invaders (black pixel alien) keep their
    **original PNG artwork**. A redraw was tried and Yvan asked for the originals
    back. Do not redraw, recolor or replace these two.
  - Icons drawn for the site (GMA Research Assistant, GMA DataReady, any new
    project without its own artwork) share one style: SVG, 512 viewBox, Ink
    background, Cream line work, one Pastel Pink accent element.
- Project cards always lead with the icon, never a screenshot.
- Screenshots always sit inside the CSS browser frame (gallery buttons and
  `.case-hero-shot`). A case study may set `cover` to show one under its title.
- GMA Research Assistant screenshots are captured from the app's own demo mode in
  **dark theme** at 1440×900 @2x (Yvan found the earlier light captures ugly). To
  retake them: export `web/` from the `codex/production-sites` branch of
  `MrLister17/GMAResearchAssistant`, run `NEXT_PUBLIC_DEMO_MODE=true npx vinext dev`,
  switch to dark theme, and screenshot. Never use light-theme captures.

## 7. Checklist before finishing a UI change

1. Tokens only: no new hex/rgba, font-family, duration or easing literals. Free fonts only.
2. Looks right in dark and light theme.
3. Looks right at 390px and 1440px; no horizontal scroll.
4. Every new interactive element: ≥44px target, hover + active + focus-visible states.
5. Motion: eased, ≤600ms, interruptible, respects reduced motion.
6. Text: ≥12px, headings balanced, paragraphs ≤65ch.
7. `npm run verify` passes.

## 8. Voice and content

- The site's hook is "I build AI that shows its work." Headlines should be short,
  first-person and concrete, not job-title labels.
- Each project leads with a one-line hook (`positioningStatement`) and two or three
  `highlights` chips.
- AI projects put their retrieval and tuning design directly under the case-study
  hero via `aiSystem` in `src/content/projects.ts` (rendered by `AiSpotlight`).
- Yvan's current position is Research Analyst, AI Development & Automation, UL
  Solutions (Oct 2026 – Present); he was an AI Intern there Jun – Sep 2026. It lives in `portfolioConfig.currentRole`; experience, skills and
  certifications live in `src/content/experience.ts`. The résumé PDF is the source of
  truth: when Yvan says to update his info, sync these files and every page with it.
- Yvan is a BS Computer Science graduate (Mapúa MCL, Aug 2022 – Jul 2026, Machine
  Learning specialization). Never describe him as a student.
- The résumé page mirrors `public/documents/resume/Ramirez-Resume.pdf`. When the PDF
  changes, update `src/app/resume/page.tsx` to match. Keep the phone number in the
  PDF only.
- Fitness Buddy facts come from the team thesis (three authors; Yvan's co-authors are
  not named on the site): FLAN-T5 fine-tuned on 1,333 ChatDoctor/HealthCareMagic
  records, a 677-passage RAG corpus, and 28 held-out gold cases used only for
  evaluation. Never say the gold cases were used for retrieval or training. Report
  results honestly, including that RAG did not raise Llama's similarity scores.
- Write plainly and confidently. No defensive or legal-sounding copy ("verified",
  "public-safe", "clear boundaries", "intentionally"). Yvan is employed, so never
  mention entry-level roles, practicum, or student status.
- Only state facts that are in the project's code or that Yvan supplied. Do not
  invent metrics, and do not claim weight fine-tuning unless Yvan provides the details.
