import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import { test } from "node:test";

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8");

test("all required routes have page modules", () => {
  for (const route of ["src/app/page.tsx", "src/app/about/page.tsx", "src/app/projects/page.tsx", "src/app/projects/[slug]/page.tsx", "src/app/practicum/page.tsx", "src/app/resume/page.tsx", "src/app/contact/page.tsx", "src/app/lab/page.tsx", "src/app/not-found.tsx"]) {
    assert.equal(existsSync(new URL(`../${route}`, import.meta.url)), true, `${route} is missing`);
  }
});

test("Vercel-native Next.js configuration excludes GitHub Pages settings", () => {
  const config = read("next.config.ts");
  for (const forbidden of ["output: \"export\"", "basePath", "assetPrefix", ".nojekyll"]) {
    assert.equal(config.includes(forbidden), false, `Found forbidden setting: ${forbidden}`);
  }
});

test("public profile and project content avoids placeholder controls", () => {
  const files = ["src/config/portfolio.ts", "src/content/projects.ts", "src/app/page.tsx", "src/app/contact/page.tsx"];
  const content = files.map(read).join("\n");
  assert.match(content, /Lester Yvan P\. Ramirez/);
  assert.match(content, /yvanmain28@gmail\.com/);
  assert.doesNotMatch(content, /href=["']#["']/);
  assert.doesNotMatch(content, /TODO|lorem ipsum/i);
});

test("sitemap, robots, and manifest are configured", () => {
  for (const file of ["src/app/sitemap.ts", "src/app/robots.ts", "public/manifest.webmanifest"]) {
    assert.equal(existsSync(new URL(`../${file}`, import.meta.url)), true, `${file} is missing`);
  }
});
