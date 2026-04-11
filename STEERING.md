# Portfolio Website — Project Guide

## Project Overview

Personal portfolio website for Stephen Jakku. Built as a **Next.js static export** deployed to **GitHub Pages** at `stephenjakku.github.io`.

Single-page application (SPA) with snap-scroll navigation across six sections: Intro, Education, Skills, Experience, Projects, Contact.

---

## Tech Stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 16.2.3 (React 18) |
| Styling | Tailwind CSS v3 (pinned — do not upgrade to v4, it's a breaking change) |
| Animations | framer-motion 12 (intro section only) |
| Deployment | GitHub Pages via GitHub Actions |
| Build output | Static export via `output: 'export'` in `next.config.js` → `/out` |
| Extras | `hamburger-react` (mobile nav), `tailwind-scrollbar-hide` |

---

## Directory Structure

```
/
├── pages/
│   ├── _app.js              # Global app wrapper (imports globals.css)
│   └── index.js             # Entry point — wires refs, scroll container, renders sections
│
├── Components/
│   ├── Navbar.js            # Fixed top nav with smooth scroll + mobile hamburger
│   ├── Intro.js             # Hero/landing section (has Framer Motion animation)
│   ├── Education.js         # Education cards (renders from data/education.js)
│   ├── Skills.js            # Skills as white pill chips (renders from data/skills.js)
│   ├── Experience.js        # Work experience cards (renders from data/experience.js)
│   ├── Projects.js          # Projects grid (renders Project.js for each item)
│   ├── Project.js           # Single project card with tags + GitHub link
│   └── Contact.js           # Contact CTA + social links + footer
│
├── data/                    # All site content lives here — edit this, not components
│   ├── personal.js          # Name, bio, email, resume URL, social links
│   ├── skills.js            # Skills grouped by category (category, glow, items[])
│   ├── education.js         # Education history (institution, degree, field, duration)
│   ├── experience.js        # Work history (company, role, team, location, duration, bullets[])
│   └── projects.js          # Projects (name, description, image, url, tags[])
│
├── public/                  # Static assets served at root
│   ├── ghub.svg             # GitHub icon
│   ├── linkedin.svg         # LinkedIn icon
│   ├── insta.svg            # Instagram icon
│   ├── twitter.svg          # Twitter icon
│   ├── monitoring.png       # Virtual Sketcher project image
│   ├── spotify-svgrepo-com.svg  # Spotify Clone project image
│   └── UttamJakku_Resume.pdf   # Resume (replace this file to update resume)
│
├── styles/
│   └── globals.css          # Inter font import, Tailwind directives, section-title component
│
├── tailwind.config.js       # Extends theme: Inter font, accent color (#38bdf8), hero gradient
├── next.config.js           # output: export, reactStrictMode, images.unoptimized
├── postcss.config.js        # Tailwind + Autoprefixer
└── package.json
```

---

## How Navigation Works

`pages/index.js` is the scroll container:
- The `<main>` element has `h-screen overflow-y-scroll snap-y snap-mandatory` — it is the scroll root
- Each section has `min-h-screen snap-start` so it snaps cleanly into the viewport
- `useRef` is created for each section (intRef, eduRef, sklRef, expRef, prjRef, conRef)
- `executeScroll` calls `ref.current.scrollIntoView({ behavior: 'smooth' })`
- `Navbar` is `position: fixed` to the viewport (outside the scroll container), `z-50`, fully transparent — no background or blur
- Mobile nav uses `hamburger-react` (Sling animation) toggled by `isOpen` state
- Experience section has no fixed height — it's taller than the viewport and scrolls naturally through 4 roles before snapping to the next section

---

## How to Update Content

**All content is centralized in `data/` files.** Do not hardcode content in components.

| What to update | File to edit |
|----------------|-------------|
| Name, bio, tagline | `data/personal.js` |
| Email, resume URL, social links | `data/personal.js` |
| Education history | `data/education.js` |
| Skills (add/remove/recategorize) | `data/skills.js` |
| Work experience | `data/experience.js` |
| Projects | `data/projects.js` |
| Resume PDF | Replace `public/UttamJakku_Resume.pdf` |

---

## Styling Conventions

- All styling via **Tailwind utility classes** — no custom CSS classes except `section-title`
- **Font**: Inter (loaded via `@import` in `globals.css`, configured in `tailwind.config.js`)
- **Color scheme**: `bg-black` and `bg-zinc-950` alternating per section, white text
- **Accent color**: `#38bdf8` (sky-400) — used for borders, glows, highlights. Available as `text-accent`, `bg-accent`, `border-accent` via Tailwind config
- **`section-title`** CSS component class: centers section headings with a sky-blue underline accent — defined in `globals.css`
- **Sections**: `min-h-screen snap-start flex flex-col justify-center` — each section fills the viewport and centers its content
- **Nav accent colors** (hover border per nav item):
  - Education → `yellow-400`
  - Skills → `red-500`
  - Experience → `accent` (sky-400)
  - Projects → `orange-400`
  - Contact → `green-400`
  - Resume → styled as an outline button with `accent` color
- Responsive breakpoints: `md:` (768px tablet), `lg:` (1024px desktop)

---

## Deployment

Automated via `.github/workflows/cr.yml`:
1. Push to `main` branch triggers the workflow
2. Runs `npm install` + `npm run build` (`next build` — static export handled by `output: 'export'` in config)
3. Deploys the `/out` folder to the `gh-pages` branch
4. GitHub Pages serves from `gh-pages`

**Local development:**
```bash
npm run dev        # Dev server at localhost:3000 (hot reload, Turbopack)
npm run build      # Build static export to /out
npm run serve      # Serve /out at localhost:3000
```

---

## Known Issues / Gotchas

- **Tailwind pinned to v3** — `tailwindcss@latest` installs v4 which has a completely different config format. Do not upgrade without a planned migration.
- **`next export` is removed** in Next.js 13+ — static export is configured via `output: 'export'` in `next.config.js`. The build script is just `next build`.
- **Skill logos** use the devicons CDN (`cdn.jsdelivr.net/gh/devicons/devicon`) — network dependent, but more reliable than the old Wikimedia/vectorlogo.zone mix.
- **Framer Motion** is only used in `Intro.js` — do not add `whileInView` animations to other sections (intentional decision for cleaner UX).
- **Next.js `<Image>`** requires `images.unoptimized: true` for static export — already configured. Use plain `<img>` tags or the Next.js Image component, both work.
- **Resume filename**: Navbar and Intro buttons use `personal.resumeUrl` from `data/personal.js`. Update that field if the PDF filename changes.
- No TypeScript — all files are `.js`
