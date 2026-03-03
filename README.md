# Pathwave – Student Education & Immigration Services
### Coming Soon Page

A premium, minimal coming soon page for **Pathways** — a student immigration consultancy helping Indian students find their path to studying abroad.

Built with **React + Vite**.

---

## ✨ Features

- **Live countdown timer** — counts down to your exact launch date
- **Email notify form** — captures early interest from visitors
- **Impact stats strip** — showcases student reach, universities, and visa success rate
- **"Which country suits you?" quiz** — an interactive 3-question activity for waiting visitors that recommends a destination based on their goals
- **Animated star field** — canvas-rendered twinkling stars with ambient orbs
- **Animated globe + arcs** — decorative orbiting arcs with glowing dots
- **Social media links** — Instagram, LinkedIn, X/Twitter, WhatsApp
- **Destination countries strip** — Canada, USA, UK, Germany, Australia, Ireland, New Zealand
- **Fully responsive** — works on mobile, tablet, and desktop
- **Premium minimal aesthetic** — Cormorant Garamond display font, navy + saffron + gold palette

---

## 🗂 Project Structure

```
src/
├── main.jsx                        # React entry point
├── App.jsx                         # Root component
├── styles/
│   └── globals.css                 # CSS variables, keyframes, utility classes
├── constants/
│   └── data.js                     # ✏️ Edit this to update all page content
├── hooks/
│   └── useCountdown.js             # Reusable countdown hook
├── components/
│   ├── ParticleCanvas.jsx          # Animated star field (canvas)
│   ├── CountdownTimer.jsx          # Live ticking countdown boxes
│   ├── StatsStrip.jsx              # Impact numbers grid
│   ├── NotifyForm.jsx              # Email capture with validation
│   ├── SocialBar.jsx               # Social media icon links
│   └── WorldQuiz.jsx               # Interactive country match quiz
└── pages/
    └── ComingSoon.jsx              # Main page — assembles all components
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm v9 or higher

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/pathway-coming-soon.git

# 2. Navigate into the project
cd pathway-coming-soon

# 3. Install dependencies
npm install

# 4. Start the dev server
npm run dev
```

The app will be live at **http://localhost:5173**

### Build for Production

```bash
npm run build
```

Output goes into the `dist/` folder — ready to deploy to any static host.

---

## ✏️ Customisation

All editable content lives in one file: **`src/constants/data.js`**

| What to change | Where |
|---|---|
| Launch date | `LAUNCH_DATE` |
| Impact stats (numbers + labels) | `STATS` array |
| Destination countries | `COUNTRIES` array |
| Social media links | `SOCIALS` array (replace `"#"` with real URLs) |
| Quiz questions & options | `QUIZ_QUESTIONS` array |
| Country result descriptions | `COUNTRY_RESULTS` object |

### Swapping the Logo

1. Place your logo file in `src/assets/` (SVG or PNG with transparent background preferred)
2. In `src/pages/ComingSoon.jsx`, find the logo `<img>` tag and update the `src`:

```jsx
<img
  src="/src/assets/your-logo.png"
  alt="Pathways"
  style={{ height: 90, width: "auto", mixBlendMode: "lighten" }}
/>
```

> **Tip:** `mixBlendMode: "lighten"` blends away the white background of the logo on the dark navy page. Remove it if your logo already has a transparent background.

---

## 🌐 Deployment

### Netlify (recommended — free)

```bash
# Build the project
npm run build

# Drag and drop the dist/ folder to netlify.com/drop
```

Or connect your GitHub repo to Netlify for automatic deploys on every push.

### Vercel

```bash
npm install -g vercel
vercel
```

### GitHub Pages

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
# "deploy": "gh-pages -d dist"

npm run build
npm run deploy
```

---

## 🛠 Tech Stack

| Tool | Purpose |
|---|---|
| [React 18](https://react.dev/) | UI framework |
| [Vite](https://vitejs.dev/) | Build tool & dev server |
| [Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) | Particle animation |
| [Google Fonts](https://fonts.google.com/) | Cormorant Garamond + DM Sans |
| CSS Custom Properties | Design tokens & theming |

---

## 📄 License

This project is proprietary. Built exclusively for **Pathways – Student Education & Immigration Services**.

---

*Built with ❤️ for every Indian student ready to take the leap.*
