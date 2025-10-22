<div align="center">

# 🌍 Quick News

Lightweight, mobile‑first news app built with React + Vite and Tailwind CSS. Browse the latest headlines in your preferred language with a polished, responsive UI.

</div>

---

## Features

- **Language selector** with on-demand reload
- **Responsive grid** of news cards with graceful image fallback
- **Sticky header** and smooth UI transitions
- **Skeleton loading** for fast perceived performance

## Tech stack

- React 19 + Vite
- Tailwind CSS with PostCSS + Autoprefixer
- Fetches from newsdata.io API

## Getting started

Prereqs: Node 18+ (or recent LTS) and npm.

1. Install dependencies

```bash
npm install
```

2. Create a `.env` in project root with your API key

```bash
VITE_NEWS_API=your_newsdata_api_key
```

3. Start dev server

```bash
npm run dev
```

4. Build for production

```bash
npm run build
npm run preview
```

Open the preview URL shown in the terminal to test the production build locally.

## Available scripts

- `npm run dev` – start Vite dev server with HMR
- `npm run build` – production build
- `npm run preview` – preview the production build
- `npm run lint` – run ESLint

## Project structure

```text
quick-news/
├─ public/
│  └─ favicon.png
├─ src/
│  ├─ components/
│  │  ├─ Header.jsx
│  │  └─ NewsCard.jsx
│  ├─ data/
│  │  └─ langList.js
│  ├─ App.jsx
│  ├─ main.jsx
│  └─ index.css
├─ index.html
├─ tailwind.config.js
├─ postcss.config.js
└─ vite.config.js
```

## Environment variables

- `VITE_NEWS_API` – API key for newsdata.io

Vite exposes variables prefixed with `VITE_` at build-time. See usages in `src/App.jsx`.

## Notes

- Tailwind is imported in `src/main.jsx` via `src/index.css`. Do not link CSS directly in `index.html`.
- The language list is defined in `src/data/langList.js`.
