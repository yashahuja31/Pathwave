
// ─────────────────────────────────────────────────────────────
//  components/StatsStrip.jsx  –  Pathway Coming Soon
import React from "react";
// ─────────────────────────────────────────────────────────────
import { STATS } from "../constants/data";

export default function StatsStrip() {
  return (
    <div>
      {/* Section label */}
      <p
        style={{
          fontSize     : "0.6rem",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color        : "rgba(240,233,223,0.22)",
          marginBottom : "0.9rem",
          fontWeight   : 400,
        }}
      >
        Our impact so far
      </p>

      {/* Grid */}
      <div
        className="stats-resp"
        style={{
          display             : "grid",
          gridTemplateColumns : "repeat(4, 1fr)",
          gap                 : "1px",
          background          : "rgba(240,233,223,0.06)",
          border              : "1px solid rgba(240,233,223,0.06)",
          borderRadius        : 12,
          overflow            : "hidden",
        }}
      >
        {STATS.map(({ value, label }) => (
          <div key={label} className="pw-stat-card">
            {/* Value */}
            <div
              style={{
                fontFamily          : "var(--font-display)",
                fontSize            : "clamp(1.6rem, 3vw, 2.3rem)",
                fontWeight          : 400,
                lineHeight          : 1.1,
                background          : "linear-gradient(135deg, var(--white) 0%, var(--gold) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor : "transparent",
              }}
            >
              {value}
            </div>

            {/* Label */}
            <div
              style={{
                fontSize     : "0.62rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color        : "rgba(240,233,223,0.3)",
                marginTop    : "0.38rem",
                fontWeight   : 400,
              }}
            >
              {label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}