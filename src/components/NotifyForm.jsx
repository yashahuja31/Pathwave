
// ─────────────────────────────────────────────────────────────
//  components/NotifyForm.jsx  –  Pathway Coming Soon
import React from "react";
// ─────────────────────────────────────────────────────────────
import { useState } from "react";

export default function NotifyForm() {
  const [email,     setEmail    ] = useState("");
  const [error,     setError    ] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    const valid = email.trim() && email.includes("@") && email.includes(".");
    if (!valid) { setError(true); return; }

    // TODO: wire to your backend / email service (Mailchimp, ConvertKit, etc.)
    console.log("New subscriber:", email.trim());
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <p
        style={{
          color      : "var(--gold)",
          fontSize   : "0.92rem",
          fontStyle  : "italic",
          fontFamily : "var(--font-display)",
          fontWeight : 300,
          letterSpacing: "0.02em",
          opacity    : 0,
          animation  : "slideIn 0.6s var(--ease-out-expo) 0s forwards",
        }}
      >
        You're on the list. We'll reach out soon ✦
      </p>
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      <div style={{ display: "flex", gap: "0.65rem", flexWrap: "wrap" }}>
        <input
          className={`pw-input${error ? " error" : ""}`}
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => { setEmail(e.target.value); setError(false); }}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          aria-label="Email address"
        />
        <button className="pw-btn-primary" onClick={handleSubmit}>
          Notify Me
        </button>
      </div>

      {/* Inline error message */}
      {error && (
        <span style={{ fontSize: "0.75rem", color: "rgba(255,110,110,0.8)", paddingLeft: "0.2rem" }}>
          Please enter a valid email address.
        </span>
      )}
    </div>
  );
}