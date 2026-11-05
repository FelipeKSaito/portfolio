# Felipe Saito · Portfolio

Personal portfolio in Portuguese and English, built with Next.js (App Router) and TypeScript.

## Running locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. The root redirects to `/pt` or `/en` based on the browser language.

## Editing content

All text lives in `src/i18n/dictionaries.ts`, with one block per language (`pt` and `en`). Contact links are in `profile` at the top of the same file.

To show a screenshot on a project, save the image in `public/projects/` and set `image: "/projects/<file>.png"` on that project in both languages.

## Structure

- `src/app/[lang]/` — layout, page and Open Graph image for each language
- `src/components/` — theme editor mock (hero), scroll reveal, copy email button
- `src/proxy.ts` — redirects `/` to the visitor's language
- `src/app/globals.css` — design tokens and all styles

## Deploying on Vercel

1. Push this repository to GitHub.
2. On vercel.com, choose **Add New → Project**, import the repository and keep the defaults (Next.js is detected automatically).
3. Every push to `main` deploys a new version.
