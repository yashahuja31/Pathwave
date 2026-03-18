# PathWave International — React Website

A full multi-page React website for PathWave International, a premium student admissions and study abroad consultancy.

---

## 🚀 Getting Started

### Prerequisites
- Node.js v16 or higher
- npm or yarn

### Installation

```bash
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

## 🔐 Student Portal

The portal uses demo credentials stored in `src/context/AuthContext.js`.

**Demo logins:**
- `student@pathwave.com` / `student123`
- `demo@pathwave.com` / `demo123`

For production, replace the `login()` function with a real backend API call (Firebase, Supabase, etc.).

---

## 🏗️ Build for Production

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
```

---

© 2026 PathWave International
