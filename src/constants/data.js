// ─────────────────────────────────────────────────────────────
//  constants/data.js  –  Pathway Coming Soon
//  Edit this file to update all page content.
// ─────────────────────────────────────────────────────────────

// ── Launch date ─────────────────────────────────────────────
// Set this to your real go-live date/time (ISO string)
export const LAUNCH_DATE = new Date("2026-03-10T00:00:00");

// ── Destination countries ───────────────────────────────────
export const COUNTRIES = [
  "Canada",
  "USA",
  "UK",
  "Germany",
  "Australia",
  "Ireland",
  "New Zealand",
];

// ── Impact stats ────────────────────────────────────────────
// Update these once you have real numbers
// These are just some example stats to show on the page. You can change the labels and values as needed.
export const STATS = [
  { value: "10K+", label: "Students Guided"      },
  { value: "50+",  label: "Partner Universities"  },
  { value: "7",    label: "Countries Covered"     },
  { value: "98%",  label: "Visa Success Rate"     },
];

// ── Social links ────────────────────────────────────────────
// Replace "#" with your actual profile URLs
export const SOCIALS = [
  { name: "Instagram", href: "https://www.instagram.com/pathwaveinternational?igsh=cHJuNTFpNXJ6a2sy&utm_source=qr" },
  { name: "LinkedIn",  href: "#" },
  { name: "Twitter",   href: "#" },
  { name: "WhatsApp",  href: "+91 96500 69340" },
];

// ── "Which country suits you?" quiz ────────────────────────
// Each question has options; each option maps to country scores.
// Scores are tallied — highest wins.
export const QUIZ_QUESTIONS = [
  {
    id: "q1",
    question: "What matters most to you in a country?",
    options: [
      { label: "Affordable tuition & PR pathway",    scores: { Canada: 3, Germany: 2, Ireland: 1 } },
      { label: "Top-ranked global universities",     scores: { USA: 3, UK: 2, Australia: 1 } },
      { label: "Work culture & quality of life",     scores: { Australia: 3, "New Zealand": 2, Canada: 1 } },
      { label: "Low/no tuition fees",                scores: { Germany: 3, Ireland: 1, Canada: 1 } },
    ],
  },
  {
    id: "q2",
    question: "Which climate do you prefer?",
    options: [
      { label: "Cold winters, warm summers",  scores: { Canada: 3, Germany: 2, USA: 1 } },
      { label: "Mild & temperate year-round", scores: { UK: 3, Ireland: 3, Germany: 1 } },
      { label: "Warm & sunny most of year",   scores: { Australia: 3, "New Zealand": 2, USA: 1 } },
      { label: "No strong preference",        scores: { Canada: 1, UK: 1, Germany: 1, USA: 1, Australia: 1, Ireland: 1, "New Zealand": 1 } },
    ],
  },
  {
    id: "q3",
    question: "How soon do you want to settle abroad permanently?",
    options: [
      { label: "Immediately after studies",    scores: { Canada: 3, Australia: 2, "New Zealand": 2 } },
      { label: "Open to it, not a priority",   scores: { UK: 2, USA: 2, Ireland: 2 } },
      { label: "Just want the degree, may return", scores: { Germany: 3, UK: 1, USA: 1 } },
      { label: "Undecided for now",            scores: { Canada: 1, Australia: 1, Ireland: 1, "New Zealand": 1 } },
    ],
  },
];

// ── Country result descriptions ─────────────────────────────
export const COUNTRY_RESULTS = {
  Canada: {
    flag: "🍁",
    headline: "Canada is your match",
    desc: "With one of the most welcoming immigration systems in the world, Canada offers a smooth post-study PR pathway, affordable education, and a thriving Indian diaspora.",
  },
  USA: {
    flag: "🦅",
    headline: "USA is your match",
    desc: "Home to the world's most prestigious universities and a dynamic job market. Ideal if you're aiming for top-tier research or tech careers.",
  },
  UK: {
    flag: "🏛",
    headline: "UK is your match",
    desc: "Shorter degree durations, world-class institutions, and the Graduate Route visa make the UK a smart, efficient choice for ambitious students.",
  },
  Germany: {
    flag: "🎓",
    headline: "Germany is your match",
    desc: "With little to no tuition fees at public universities and a strong engineering & research culture, Germany is a hidden gem for cost-conscious scholars.",
  },
  Australia: {
    flag: "🌏",
    headline: "Australia is your match",
    desc: "Excellent quality of life, generous post-study work rights, and globally respected degrees — Australia balances lifestyle and academics beautifully.",
  },
  Ireland: {
    flag: "☘️",
    headline: "Ireland is your match",
    desc: "A gateway to Europe with English-medium education, a booming tech sector, and a warm community — Ireland punches well above its size.",
  },
  "New Zealand": {
    flag: "🌿",
    headline: "New Zealand is your match",
    desc: "Safe, scenic, and progressive — New Zealand offers outstanding education, an open work culture, and a deeply welcoming society for Indian students.",
  },
};