# PathWave International — React Website

## Quick Start

```bash
npm install
npm start
```

Opens at **http://localhost:3000**

---

## Folder Structure

```
src/
├── components/
│   ├── Navbar.js          — Fixed nav with mobile hamburger
│   ├── Footer.js          — Footer with all links
│   ├── WhatsAppButton.js  — Floating WhatsApp button
│   ├── UniScrollTicker.js — Scroll-driven university ticker
│   ├── PageTransition.js  — Framer Motion page animations
│   ├── ProtectedRoute.js  — Auth guard for student portal
│   └── StarRating.js      — Star rating widget
├── context/
│   └── AuthContext.js     — Student login/logout state
├── pages/
│   ├── Home.js            — Landing page
│   ├── Destinations.js    — Study destinations
│   ├── About.js           — About + team + values
│   ├── Contact.js         — Consultation + feedback forms
│   ├── Blog.js            — Blog listing
│   ├── BlogPost.js        — Individual blog post
│   ├── Login.js           — Student portal login
│   ├── Portal.js          — Student dashboard
│   └── NotFound.js        — 404 page
└── utils/
    ├── data.js            — ALL site content (edit this!)
    └── sheets.js          — Google Sheets integration
```

---

## Editing Content

**Everything lives in `src/utils/data.js`** — open it to change:
- Blog posts (title, content, author, date)
- Team members (name, role, bio)
- Services list
- Destinations & features
- Testimonials
- Partner universities (shown in scroll ticker)
- Contact details

---

## Google Sheets Setup

1. Create a Google Sheet with your pathwaveinternational.com account
2. Add Row 1 headers: `Timestamp | Form Type | Name | Email | Phone | Destination | Level | Message | Recommend | Overall Rating | Guidance Rating | Visa Rating`
3. Go to script.google.com → New Project → paste this code:

```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.openById('YOUR_SHEET_ID').getActiveSheet();
  var data = JSON.parse(e.postData.contents);
  sheet.appendRow([
    new Date(), data.formType, data.name, data.email,
    data.phone, data.destination, data.level, data.message,
    data.recommend, data.overallRating, data.guidanceRating, data.visaRating
  ]);
  return ContentService.createTextOutput(JSON.stringify({ result: 'success' })).setMimeType(ContentService.MimeType.JSON);
}
```

4. Replace `YOUR_SHEET_ID` with your Sheet's ID (from its URL)
5. Deploy → New Deployment → Web App → Execute as Me → Anyone → Deploy
6. Copy the Web App URL into `src/utils/sheets.js`

---

## WhatsApp Button

Open `src/components/WhatsAppButton.js` and change:
```js
const WA_NUMBER = '919810000000'; // Your number: country code + number
```

---

## Deploy

```bash
npm run build
```

Upload the `/build` folder to Vercel or Netlify.

---

## Student Portal Demo Logins

- student@pathwave.com / student123
- demo@pathwave.com / demo123
