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

### Header
- [ ] Logo (position: absolute; width: 185px; height: 201px; top: 21px; left: calc(50% - 185px/2 + 0.5px); image: C0D744E3-6324-4130-8333-949F8DCF5AFC.png)

## Footer
- [ ] Upcoming Releases Carousel
  - [ ] Black background section
  - [ ] Moving carousel
  - [ ] Song name
  - [ ] Date
- [ ] Black logo with two suns
- [ ] Navigation links: TikTok, Instagram, Spotify, YouTube
- [ ] Contact form
  - [ ] Name field
  - [ ] Email field
  - [ ] Message field
  - [ ] Submit button

# Index Page

## Hero
- [ ] Full-width hero section
  - Rectangle: width 1512px; height 982px; top 0; left 0; background: #D9D9D9
- [ ] Background image
  - IMG_0946 2.png: position absolute; width 2090px; height 1568px; left -28px; top -644px; transform: rotate(90deg)
- [ ] Text overlay (right side of image)
  - "Music that shapes story": width 170px; height 193px; left calc(50% - 170px/2 + 566px); top 754px; font: Inter 300 40px/48px; letter-spacing 0.1em; colour #FFFFFF
- [ ] Short biography text
  - width 1150px; height 242px; left 181px; top 1556px; font: Inter 400 34px; line-height 140%; color #565656
- [ ] Main biography title
  - width 600px; height 88px; left calc(50% - 600px/2 - 275px); top 1481px; font: Inter 600 60px; line-height 73px; color #000000
- [ ] "Scroll to explore more" text
  - width 345px; height 29px; left calc(50% - 345px/2 - 36.5px); top 1769px; font: Inter 500 32px; line-height 39px; text-align center; color #6F6F6F
- [ ] Down arrow icon
  - width 59px; height 47px; left 690px; top 1829px; transform: matrix(1, 0, 0, -1, 0, 0)

## Selected Works
- [ ] Section title
- [ ] 3 song cards
  - [ ] Cover image
  - [ ] Song title
  - [ ] Description
- [ ] "View all songs" button
- [ ] Separator line

## Videos Highlight
### Scores
- [ ] Rectangle score video
- [ ] Title
- [ ] Description
- [ ] "View all scores" button

### Performances
- [ ] Rectangle performance video
- [ ] Title
- [ ] Description
- [ ] "View all performances" button

# Songs Page

## Header

## Singles & EPs
- [ ] Section title
- [ ] Song cards
  - [ ] Cover art
  - [ ] Title
  - [ ] Release info
  - [ ] Stream button
- [ ] Streaming platform links

## Albums
- [ ] Section title
- [ ] Album cards
  - [ ] Cover art
  - [ ] Album title
  - [ ] Year
  - [ ] Stream button

# Videos Page
- Carousels, Spotify style

## Performances
- [ ] Section title
- [ ] Performance video cards

## Music Videos
- [ ] Section title
- [ ] Music video cards

## Scores
- [ ] Section title
- [ ] Score video cards

# Community Page

## Main Section
- [ ] Centre title: "A place for everything"
- [ ] Description text
- [ ] "Leave a word" prompt
- [ ] Text input with placeholder
- [ ] Submit button

## Submissions
- [ ] Magazine-style layout
- [ ] Grid / masonry display
- [ ] Submitted text entries

Newsletter sign-up