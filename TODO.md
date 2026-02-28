# Stack

## Framework
- React (with TypeScript / TSX)

## Bundler / Dev Server
- Vite

## Styling
- Tailwind CSS
  - Using `@tailwind base`, `@tailwind components`, `@tailwind utilities`
  - Configured in `tailwind.config.js` to scan `./src/**/*.{js,ts,jsx,tsx}`
- Optional plain CSS for custom overrides (`App.css`)

## PostCSS
- Configured via `postcss.config.js`:
  ```js
  module.exports = {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  }
# Common
- Backgrounds:
  - Light: #E4E0E0
  - Dark: #1D1B20 / #1D2124
- Text color: #565656
- Font: Inter


## To Do
- [ ] Add Vercel Analytics to track user interactions and page views
- [ ] Improve responsive design for mobile and tablet devices
- [ ] add newsletter subscription form