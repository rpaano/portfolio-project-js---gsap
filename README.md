# Romel Nino Paano — Portfolio

Personal portfolio built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion. Content is tailored from my resume: overview, skills, experience timeline, and a projects section with a Web / AI / Web+AI filter.

## Stack

- Next.js 14, React 18, TypeScript
- Tailwind CSS
- Framer Motion (scroll/entrance animations)
- lucide-react (icons)

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Project structure

```
app/            # App Router entry (layout, page, global styles)
components/     # Navbar, Hero, About, Skills, Experience, Projects, Contact, Footer
lib/data.ts     # All resume/profile/project content lives here — edit this file to update copy
public/images/  # Profile photo + project thumbnails (SVG placeholders)
```

## Updating content

- Personal info, skills, experience, education: `lib/data.ts` (`profile`, `skillGroups`, `experience`, `education`)
- Projects: `lib/data.ts` (`projects` array). Each project has a `category` of `"web"`, `"ai"`, or `"both"`, which drives the filter tabs on the Projects section. Swap `image`, `demoUrl`, and `repoUrl` for real links as projects go live — placeholder SVG thumbnails live in `public/images/projects/`.
- Profile photo: replace `public/images/profile.jpg`.

## Deploying to Vercel

1. Push this repo to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Framework preset auto-detects as Next.js — no config needed. Click **Deploy**.

Every push to the main branch redeploys automatically.
