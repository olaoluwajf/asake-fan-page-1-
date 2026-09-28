# Asake — Unofficial Fan Site

An unofficial, fan-made tribute site for Nigerian Afrobeats artist Asake. Built with React, TypeScript, Vite,
Tailwind CSS, React Router and Framer Motion.

This project is **not affiliated with Asake or his management**. It's a fan tribute only.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Structure

```
src/
├── components/   Reusable UI pieces (Navbar, Hero, cards, gallery, timeline, footer)
├── pages/        Route-level pages (Home, Music, Album, Videos, Gallery, About)
├── data/         Content: albums, songs, videos, timeline entries
└── App.tsx       Routes and layout
```

## Notes on content

- Album covers, video thumbnails and gallery photos use placeholder stock photography (Unsplash) rendered in
  grayscale to match the site's monochrome direction — swap these for real, licensed imagery before using this
  publicly.
- The site does not stream any copyrighted audio or embed unlicensed video; the Music section links out to
  official streaming platforms instead.
- Biography and discography copy is a short, factual fan summary — verify details before publishing anywhere
  public-facing.
