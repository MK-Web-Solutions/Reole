# React + Vite Artist Platform

A modern React application built with **TypeScript**, **Vite**, and **Tailwind CSS**. This project serves as a platform for music, videos, and community content, featuring responsive design, scrolling marquees, and interactive components.

---

## Stack

### Framework
- React (with TypeScript / TSX)

### Bundler / Dev Server
- Vite

### Styling
- Tailwind CSS
  - Using `@tailwind base`, `@tailwind components`, `@tailwind utilities`
  - Configured in `tailwind.config.js` to scan `./src/**/*.{js,ts,jsx,tsx}`
- Optional plain CSS for custom overrides (`App.css`)

### PostCSS
Configured via `postcss.config.js`:

```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

```

## Project  Structure
root
│
├─ src
│  ├─ components
│  │  ├─ Footer.tsx
│  │  ├─ Header.tsx
│  │  ├─ PageWrapper.tsx
│  │  ├─ ScrollToTop.tsx
│  │  └─ (other reusable components)
│  │
│  ├─ data
│  │  ├─ boxes.ts
│  │  ├─ releases.ts
│  │  └─ videosData.ts
│  │
│  ├─ pages
│  │  ├─ Community.tsx
│  │  ├─ Gallery.tsx
│  │  ├─ HomePage.tsx
│  │  ├─ SelectedWorks.tsx
│  │  ├─ Songs.tsx
│  │  └─ Video.tsx
│  │
│  ├─ App.tsx
│  ├─ main.tsx
│  ├─ router.tsx
│  ├─ index.css
│  └─ App.css
│
├─ tailwind.config.js
├─ postcss.config.js
├─ package.json
└─ tsconfig.json

## Features
- Responsive layout with Tailwind CSS
- Scrolling marquee for upcoming releases
- Contact form integrated with Formspree
- Footer with social icons and logo
- Smooth scroll to top on route changes
- Pages for community, gallery, songs, and videos
- Vercel Analytics integration for tracking page views

## Design
- Backgrounds:
  - Light: #E4E0E0
  - Dark: #1D1B20 / #1D2124
- Text color: #565656
- Font: Inter

## Getting Started
1. Clone the repository:
    ```bash
    git clone
    ```
2. Navigate to the project directory:
    ```bash
    cd reole
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Start the development server:
    ```bash
    npm run dev
    ```
5. Open your browser and go to `http://localhost:3000` to see the application in action.
\