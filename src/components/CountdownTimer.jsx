
// ─────────────────────────────────────────────────────────────
//  components/CountdownTimer.jsx  –  Pathway Coming Soon
import React from "react";
// ─────────────────────────────────────────────────────────────
import { useCountdown } from "../hooks/useCountdown";
import { LAUNCH_DATE }  from "../constants/data";

// A single time unit box
function Box({ value, label }) {
  const display = String(value).padStart(2, "0");

  return (
    <div className="pw-cd-box">
      {/* Number — gradient text */}
      <span
        key={display} // re-mounts on change, triggering CSS animation
        style={{
          fontFamily  : "var(--font-display)",
          fontWeight  : 300,
          fontSize    : "clamp(1.9rem, 4vw, 2.8rem)",
          lineHeight  : 1,
          background  : "linear-gradient(135deg, var(--white) 0%, var(--gold) 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor : "transparent",
          animation   : "countFlip 0.28s var(--ease-out-expo) both",
        }}
      >
        {display}
      </span>

      {/* Label */}
      <span
        style={{
          fontSize     : "0.58rem",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color        : "rgba(240,233,223,0.28)",
          marginTop    : "0.45rem",
          fontWeight   : 400,
        }}
      >
        {label}
      </span>
    </div>
  );
}

export default function CountdownTimer() {
  const { days, hours, minutes, seconds } = useCountdown(LAUNCH_DATE);

  return (
    <div>
      {/* Eyebrow */}
      <p
        style={{
          fontSize     : "0.62rem",
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color        : "rgba(240,233,223,0.25)",
          marginBottom : "0.9rem",
          fontWeight   : 400,
        }}
      >
        ✦ &ensp; Launching in
      </p>

      {/* Boxes row */}
      <div style={{ display: "flex", gap: "0.65rem", flexWrap: "wrap" }}>
        <Box value={days}    label="Days"    />
        <Box value={hours}   label="Hours"   />
        <Box value={minutes} label="Minutes" />
        <Box value={seconds} label="Seconds" />
      </div>
    </div>
  );
}