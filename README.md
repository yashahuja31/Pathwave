
# PathWave International — React Website

A full multi-page React website for PathWave International, a premium student admissions and study abroad consultancy.
=======
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

- Node.js v16 or higher
- npm or yarn
=======

- [Node.js](https://nodejs.org/) v18 or higher
- npm v9 or higher
>>>>>>> 955175eb393304db0238c5bbdf01eb86840f8286

### Installation

```bash
<<<<<<< HEAD
# 1. Unzip the project folder
cd pathwave

# 2. Install dependencies
npm install

# 3. Start the development server
npm start
```

The site will open at **http://localhost:3000**

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.js / .css         # Fixed navigation with mobile menu
│   ├── Footer.js / .css         # Footer with all links
│   ├── WhatsAppButton.js / .css # Floating WhatsApp chat button
│   ├── PageTransition.js        # Framer Motion page animations
│   ├── ProtectedRoute.js        # Auth guard for student portal
│   └── StarRating.js / .css     # Reusable star rating widget
├── context/
│   └── AuthContext.js           # Student login/logout state
├── pages/
│   ├── Home.js / .css           # Landing page
│   ├── Destinations.js / .css   # Study destinations
│   ├── About.js / .css          # About page with team
│   ├── Contact.js / .css        # Consultation + feedback forms
│   ├── Blog.js / .css           # Blog listing with tag filter
│   ├── BlogPost.js / .css       # Individual blog post
│   ├── Login.js / .css          # Student portal login
│   ├── Portal.js / .css         # Student dashboard
│   └── NotFound.js              # 404 page
└── utils/
    ├── data.js                  # All site content / data
    └── sheets.js                # Google Sheets form integration
```

---

## 🔗 Google Sheets Integration

All consultation and feedback form data is sent to a Google Sheet.

### Setup (5 steps):

**Step 1:** Go to [script.google.com](https://script.google.com) and create a New Project.

**Step 2:** Paste this code into the editor:

```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.openById('YOUR_SHEET_ID').getActiveSheet();
  var data = JSON.parse(e.postData.contents);
  var row = [
    new Date(),
    data.formType || '',
    data.name || '',
    data.email || '',
    data.phone || '',
    data.destination || '',
    data.level || '',
    data.message || '',
    data.recommend || '',
    data.overallRating || '',
    data.guidanceRating || '',
    data.visaRating || '',
  ];
  sheet.appendRow(row);
  return ContentService
    .createTextOutput(JSON.stringify({ result: 'success' }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

**Step 3:** Create a Google Sheet using your **pathwaveinternational.com** account.
Add these headers in Row 1:
`Timestamp | Form Type | Name | Email | Phone | Destination | Level | Message | Recommend | Overall Rating | Guidance Rating | Visa Rating`

**Step 4:** Copy the Sheet ID from the URL:
`https://docs.google.com/spreadsheets/d/`**YOUR_SHEET_ID**`/edit`
Paste it into the Apps Script.

**Step 5:** Click **Deploy → New Deployment → Web App**
- Execute as: **Me**
- Who has access: **Anyone**
- Click **Deploy** and copy the Web App URL.

**Step 6:** Open `src/utils/sheets.js` and replace:
```js
const SHEETS_WEBHOOK_URL = 'https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec';
```

---

## 💬 WhatsApp Button

Open `src/components/WhatsAppButton.js` and update:
```js
const WA_NUMBER = '919810000000'; // Your number with country code
```

---

## 🔐 Student Portal (Future Feature)

The portal uses demo credentials stored in `src/context/AuthContext.js`.

**Demo logins:**
- `student@pathwave.com` / `student123`
- `demo@pathwave.com` / `demo123`

For production, replace the `login()` function with a real backend API call (Firebase, Supabase, etc.).

---

## 🏗️ Build for Production
=======
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
>>>>>>> 955175eb393304db0238c5bbdf01eb86840f8286

```bash
npm run build
```


This creates an optimized production build in the `/build` folder, ready to deploy to Vercel, Netlify, or any static host.

---

## 🎨 Customisation

All site content (services, destinations, blog posts, team) lives in:
```
src/utils/data.js
```

Colors and fonts are CSS variables in:
```
src/index.css
=======
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


© 2026 PathWave International
=======
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

P.S. :- This project is a client work for the Pathwave foundation, there are no fictionaries about this project since the company is all live and in the functioning.
