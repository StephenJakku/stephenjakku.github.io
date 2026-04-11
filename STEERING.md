# Portfolio Website — Project Guide

## Project Overview

Personal portfolio website for Stephen Jakku. Built as a **Next.js static export** deployed to **GitHub Pages** at `stephenjakku.github.io`.

Single-page application (SPA) with smooth scroll navigation across five sections: Intro, Skills, Experience, Projects, Contact.

---

## Tech Stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 12 (React 17) |
| Styling | Tailwind CSS v3 |
| Deployment | GitHub Pages via GitHub Actions |
| Build output | Static (`next export` → `/out`) |
| Extras | `hamburger-react` (mobile nav), `tailwind-scrollbar-hide` |

---

## Directory Structure

```
/
├── pages/
│   ├── _app.js              # Global app wrapper (imports globals.css)
│   ├── index.js             # Entry point — wires refs + renders all sections
│   └── api/hello.js         # Unused Next.js API template (safe to ignore)
│
├── Components/
│   ├── Navbar.js            # Fixed top nav with smooth scroll + mobile hamburger
│   ├── Intro.js             # Hero/landing section
│   ├── Skills.js            # Skills grid (renders Skill.js for each item)
│   ├── Skill.js             # Single skill logo card
│   ├── Education.js         # Education cards (renders from data/education.js)
│   ├── Experience.js        # Work experience cards (renders from data/experience.js)
│   ├── Projects.js          # Projects grid (renders Project.js for each item)
│   ├── Project.js           # Single project card
│   └── Contact.js           # Contact CTA + social links + footer
│
├── data/                    # All site content lives here — edit this, not components
│   ├── personal.js          # Name, bio, email, social links
│   ├── skills.js            # Skill list with name + logo URL
│   ├── education.js         # Education history (institution, degree, field, duration)
│   ├── experience.js        # Work history (company, role, dates, bullets)
│   └── projects.js          # Project cards (name, description, image, URL, tags)
│
├── public/                  # Static assets served at root
│   ├── ghub.svg             # GitHub icon
│   ├── linkedin.svg         # LinkedIn icon
│   ├── insta.svg            # Instagram icon
│   ├── twitter.svg          # Twitter icon
│   ├── mile.png             # Accenture logo
│   ├── monitoring.png       # Virtual Sketcher project image
│   └── UttamJakku_Resume.pdf  # Resume (replace this file to update resume)
│
├── styles/
│   ├── globals.css          # Tailwind directives + base html/body styles
│   └── Home.module.css      # Legacy (commented out, safe to ignore)
│
├── tailwind.config.js       # Tailwind config — extend here for custom colors/fonts
├── next.config.js           # Next.js config (React Strict Mode enabled)
├── postcss.config.js        # Tailwind + Autoprefixer
└── package.json
```

---

## How Navigation Works

`pages/index.js` creates `useRef` for each section and passes them down:
- Each section component receives a `refer` prop and attaches it to its root `div`
- `Navbar.js` receives `executeScroll` + `refs` props and calls `ref.current.scrollIntoView({ behavior: 'smooth' })` on nav clicks
- Mobile nav uses `hamburger-react` (Sling animation) toggled by `isOpen` state

---

## How to Update Content

**All content is centralized in `data/` files.** Do not hardcode content in components.

| What to update | File to edit |
|----------------|-------------|
| Name, bio, tagline | `data/personal.js` |
| Email, social URLs | `data/personal.js` |
| Education history | `data/education.js` |
| Skills list | `data/skills.js` |
| Work experience | `data/experience.js` |
| Projects | `data/projects.js` |
| Resume PDF | Replace `public/UttamJakku_Resume.pdf` |

---

## Styling Conventions

- All styling via **Tailwind utility classes** — no custom CSS classes
- Color scheme: black background (`bg-black`), white text
- Section accent colors used in nav hover states:
  - Skills → `red-600`
  - Experience → `cyan-400`
  - Projects → `orange-400`
  - Contact → `green-500`
  - Resume → `fuchsia-600`
- Responsive breakpoints: `md:` (768px tablet), `lg:` (1024px desktop)
- Each full-screen section uses `h-full` (html/body are set to `height: 100%` in globals.css)

---

## Deployment

Automated via `.github/workflows/cr.yml`:
1. Push to `main` branch triggers the workflow
2. Runs `npm install` + `npm run build` (which runs `next build && next export`)
3. Deploys the `/out` folder to the `gh-pages` branch
4. GitHub Pages serves from `gh-pages`

**Local development:**
```bash
npm run dev        # Dev server at localhost:3000 (hot reload)
npm run build      # Build static export to /out
npm run serve      # Serve /out at localhost:3000
```

---

## Known Issues / Gotchas

- Next.js `<Image>` component requires special config for static export; use plain `<img>` tags for now
- Skill logos are loaded from external URLs (Wikimedia, vectorlogo.zone) — network dependent
- The Resume link in Navbar points to `/UttamJakku_Resume.pdf` — update the filename if the PDF changes
- No TypeScript — all files are `.js`
