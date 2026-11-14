---
name: portfolio-design
description: Design rules for Yvan's portfolio site. Use BEFORE editing anything visual or interactive in this repo — CSS, components, pages, layout, colors, fonts, icons, animation, hover/focus states, forms, navigation. Covers the brand palette (Cream / Ink / Orchid Pink), the Söhne Mono type system, 20 UX and animation principles, and 20 design terms, each turned into a concrete rule to apply and check.
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
| Orchid Pink | `#E65BC4` | The one accent: primary buttons, active states, emphasis |

- Two themes: Ink dark (default) and Cream light, switched by `data-theme` on `<html>`.
  Every change must look right in both. Check both before finishing.
- Orchid Pink as a fill always carries Ink text (`--on-accent`), never Cream or white.
- Orchid Pink as small text fails contrast on Cream. Use `--accent-text`, which is the
  pure pink on dark and a darker orchid on light.
- No other hues. No blue, green, purple or gradient-rainbow accents. Status and
  emphasis are expressed with the accent, weight, or borders.
- One accent moment per view. If everything is pink, nothing is.

## 2. Typography

- Display face: **Söhne Mono** (`--font-mono`). It is a paid Klim font, so the stack
  is `"Söhne Mono", Geist Mono, system mono`. Geist Mono ships with the site as the
  free stand-in. If licensed `.woff2` files are ever added, register them with
  `next/font/local` in `src/app/layout.tsx` and put that variable first in `--font-mono`.
- Mono is for headings, navigation, buttons, labels, tags, numbers and code.
  Paragraphs use the sans (`--font-sans`, Geist Sans) for comfortable reading.
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
   `+0.08em`; large mono headings get `-0.03em`; body text gets none.
6. **Optimistic update** — show the result immediately and reconcile after (copy
   email flips to "copied" at once; filters apply on click with no spinner).
7. **x-height** — height of lowercase letters. Paired fonts must have similar
   x-heights (Geist Sans and Geist Mono do); do not mix in a face that looks smaller
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

## 5. Non-negotiables

- `prefers-reduced-motion: reduce` removes movement; opacity changes may stay.
- Visible `:focus-visible` outline on every interactive element.
- Body text contrast at least 4.5:1, large text and UI borders at least 3:1, in both themes.
- No horizontal scroll at 390px wide.

## 6. Project icons

Every project in `src/content/projects.ts` has an `icon`. Icons are always rendered
through `ProjectIcon` (`src/components/project-icon.tsx`), which frames them as a
rounded app-icon tile so mixed artwork looks like one set. New project → add an icon
(SVG preferred, square, in `public/images/projects/<slug>/`). Icons drawn for the
site use only the three brand colors.

## 7. Checklist before finishing a UI change

1. Tokens only: no new hex/rgba, font-family, duration or easing literals.
2. Looks right in dark and light theme.
3. Looks right at 390px and 1440px; no horizontal scroll.
4. Every new interactive element: ≥44px target, hover + active + focus-visible states.
5. Motion: eased, ≤600ms, interruptible, respects reduced motion.
6. Text: ≥12px, headings balanced, paragraphs ≤65ch.
7. `npm run verify` passes.
