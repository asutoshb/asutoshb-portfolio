# Asutosh Behera — 3D Portfolio

A modern, scroll-driven 3D portfolio built with React + Three.js.

[Live →](#) (deployed on Vercel)

## ✨ Features

- 🎨 **Animated 3D hero** with morphing icosahedron, orbiting particles, sparkles & stars (React Three Fiber + drei)
- 🌌 **Glassmorphism dark UI** with gradient accents (Tailwind CSS)
- 📜 **Reveal-on-scroll** animations via IntersectionObserver
- 🎯 **Interactive 3D-tilt project cards** with cursor-tracked light
- 📱 **Fully responsive** — desktop, tablet, mobile
- ⚡ **Vite + TypeScript** for fast builds and great DX

## 🛠️ Tech Stack

- **React 19** + **TypeScript**
- **Vite** — build tool
- **Three.js** + **@react-three/fiber** + **@react-three/drei** — 3D scenes
- **GSAP** — animation utilities
- **Tailwind CSS v3** — styling
- **lucide-react** + **react-icons** — icons

## 🚀 Run locally

```bash
npm install
npm run dev      # start dev server on http://localhost:5173
npm run build    # production build
npm run preview  # preview production build
```

## 📁 Structure

```
src/
├── App.tsx                # root composition
├── main.tsx               # entry
├── index.css              # tailwind + design tokens
├── data/content.ts        # all personal content (single source of truth)
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── ProjectCard.tsx    # 3D-tilt card
│   └── three/HeroScene.tsx # R3F canvas
├── hooks/useReveal.ts     # IntersectionObserver-based reveal
└── sections/
    ├── Hero.tsx
    ├── About.tsx
    ├── Experience.tsx
    ├── Projects.tsx
    ├── Skills.tsx
    └── Contact.tsx
```

To update content (projects, experience, skills, links), edit only `src/data/content.ts`.

## 🎨 Credits & inspiration

This portfolio is an **original build** in the broad genre of modern Three.js + scroll-driven portfolio sites — I drew high-level inspiration from sites like
[moncy.dev](https://www.moncy.dev) for the overall direction, but the layout, components, scenes and code are written from scratch.

3D scenes use only open-source primitives (no proprietary 3D models or paid GSAP plugins).

## 📄 License

MIT — feel free to learn from it. If you base your own portfolio on it, a link back is appreciated 🙌
