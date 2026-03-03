
// ─────────────────────────────────────────────────────────────
//  pages/ComingSoon.jsx  –  Pathway Coming Soon
//  Main page — assembles all components.
import React from "react";
// ─────────────────────────────────────────────────────────────
import ParticleCanvas   from "../components/ParticleCanvas";
import CountdownTimer   from "../components/CountdownTimer";
import StatsStrip       from "../components/StatsStrip";
import NotifyForm       from "../components/NotifyForm";
import SocialBar        from "../components/SocialBar";
import WorldQuiz        from "../components/WorldQuiz";
import { COUNTRIES }    from "../constants/data";

/* ── Globe + Arc background (purely decorative) ─────────────── */
function SceneBackground() {
  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 1, overflow: "hidden", pointerEvents: "none" }}>
      {/* Globe */}
      <div
        className="globe-el globe-resp"
        style={{
          position   : "absolute",
          right      : "-10vw",
          bottom     : "-15vw",
          width      : "70vw",
          height     : "70vw",
          borderRadius: "50%",
          background : "radial-gradient(circle at 38% 38%, #142040 0%, #09111f 60%, #040c18 100%)",
          border     : "1px solid rgba(232,168,56,0.15)",
          boxShadow  : "inset 0 0 140px rgba(255,107,0,0.06), 0 0 140px rgba(4,12,24,0.9)",
          opacity    : 0,
          animation  : "fadeUp 1.4s 0.2s var(--ease-out-expo) forwards",
        }}
      />

      {/* Arc 1 — saffron dot */}
      <div
        className="arc-resp-1"
        style={{
          position   : "absolute",
          top        : "50%",
          left       : "50%",
          width      : "44vw",
          height     : "44vw",
          borderRadius: "50%",
          border     : "1px dashed rgba(255,107,0,0.22)",
          transform  : "translate(-50%,-50%) rotate(-30deg)",
          animation  : "spinCW 44s linear infinite",
        }}
      >
        <div style={{
          position   : "absolute",
          width      : 9,
          height     : 9,
          borderRadius: "50%",
          background : "var(--saffron)",
          top        : 0,
          left       : "50%",
          transform  : "translateX(-50%)",
          animation  : "pulseOrb 2.4s ease-in-out infinite",
        }} />
      </div>

      {/* Arc 2 — gold dot */}
      <div
        className="arc-resp-2"
        style={{
          position   : "absolute",
          top        : "50%",
          left       : "50%",
          width      : "60vw",
          height     : "60vw",
          borderRadius: "50%",
          border     : "1px dashed rgba(232,168,56,0.12)",
          animation  : "spinCCW 64s linear infinite",
        }}
      >
        <div style={{
          position   : "absolute",
          width      : 7,
          height     : 7,
          borderRadius: "50%",
          background : "var(--gold)",
          top        : "50%",
          left       : "100%",
          transform  : "translateY(-50%)",
          boxShadow  : "0 0 12px var(--gold)",
        }} />
      </div>
    </div>
  );
}

/* ── Grain texture overlay ───────────────────────────────────── */
function Grain() {
  return (
    <div style={{
      position      : "fixed",
      inset         : 0,
      zIndex        : 2,
      pointerEvents : "none",
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.78' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.07'/%3E%3C/svg%3E")`,
      backgroundSize: "200px",
      opacity       : 0.38,
    }} />
  );
}

/* ── Shimmer divider ─────────────────────────────────────────── */
function Divider() {
  return (
    <div style={{
      height    : 1,
      background: "linear-gradient(to right, var(--saffron), var(--gold) 40%, transparent)",
      backgroundSize: "200% auto",
      animation : "shimmer 5s 2s linear infinite",
    }} />
  );
}

/* ── Country strip ───────────────────────────────────────────── */
function CountryStrip() {
  return (
    <div style={{ display: "flex", gap: "0.9rem", flexWrap: "wrap" }}>
      {COUNTRIES.map((c) => (
        <span
          key={c}
          style={{
            display      : "flex",
            alignItems   : "center",
            gap          : "0.38rem",
            fontSize     : "0.68rem",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color        : "rgba(240,233,223,0.3)",
          }}
        >
          <span style={{
            width       : 4,
            height      : 4,
            borderRadius: "50%",
            background  : "var(--gold)",
            opacity     : 0.5,
          }} />
          {c}
        </span>
      ))}
    </div>
  );
}

/* ── Page ────────────────────────────────────────────────────── */
export default function ComingSoon() {
  return (
    <div style={{ minHeight: "100vh", overflowX: "hidden" }}>

      {/* Layers behind content */}
      <ParticleCanvas />
      <SceneBackground />
      <Grain />

      {/* ── Content shell ── */}
      <div style={{
        position      : "relative",
        zIndex        : 3,
        maxWidth      : 820,
        margin        : "0 auto",
        padding       : "2.6rem 2.5rem 3rem",
        display       : "flex",
        flexDirection : "column",
        minHeight     : "100vh",
      }}>

        {/* ════ LOGO ════ */}
        {/*
          ════════════════════════════════════════════════════
          LOGO IMAGE SECTION
          Replace the `src` below with your actual logo path.
            e.g.  src="/assets/pathway-logo.svg"
                  src="https://yourdomain.com/logo.png"

          Tips:
            · SVG or transparent-background PNG preferred
            · Adjust `height` on the <img> to size it
            · Remove the `filter` style if your logo is
              already light-coloured / white
          ════════════════════════════════════════════════════
        */}
        <div className="animate-in delay-1" style={{ marginBottom: "3rem" }}>
          {/* DEMO IMAGE — replace src with your actual logo */}
          <img
            src="../assets/logo.png"
            alt="Pathways"
            style={{
              height      : 106,
              width       : "auto",
              objectFit   : "contain",
              display     : "block",
              // filter      : "brightness(1) invert(1)", // remove if logo is already light
            }}
          />
        </div>
        {/*
          FALLBACK TEXT LOGO — uncomment + remove the img block above if preferred.
        */}
        <div className="animate-in delay-1" style={{
          fontFamily: "var(--font-display)", fontWeight: 300,
          fontSize: "clamp(1rem,2.5vw,1.2rem)", letterSpacing: "0.42em",
          textTransform: "uppercase", color: "var(--gold)",
          display: "flex", alignItems: "center", gap: "0.6rem",
          marginBottom: "3rem",
        }}>
          <span style={{ display:"inline-block", width:"2rem", height:1, background:"var(--saffron)" }} />
          Pathways
        </div>


        {/* ════ HEADLINE ════ */}
        <h1
          className="animate-in delay-2"
          style={{
            fontFamily   : "var(--font-display)",
            fontWeight   : 300,
            fontSize     : "clamp(2.8rem, 8vw, 6rem)",
            lineHeight   : 1.0,
            color        : "var(--white)",
            margin       : 0,
          }}
        >
          Your world<br />
          <em style={{ fontStyle: "italic", color: "var(--gold)" }}>awaits.</em>
        </h1>

        {/* ════ TAGLINE ════ */}
        <p
          className="animate-in delay-3"
          style={{
            marginTop : "1.4rem",
            fontWeight: 300,
            color     : "var(--muted)",
            lineHeight: 1.8,
            fontSize  : "clamp(0.88rem, 1.8vw, 1rem)",
            maxWidth  : 440,
          }}
        >
          We're building something for every Indian student ready to take the
          leap — guidance, resources, and a clear path to studying abroad.
        </p>

        {/* ════ SHIMMER DIVIDER ════ */}
        <div className="animate-in delay-3" style={{ margin: "2rem 0" }}>
          <Divider />
        </div>

        {/* ════ COUNTDOWN ════ */}
        <div className="animate-in delay-4">
          <CountdownTimer />
        </div>

        {/* ════ NOTIFY FORM ════ */}
        <div className="animate-in delay-5" style={{ marginTop: "1.8rem" }}>
          <NotifyForm />
        </div>

        {/* ════ STATS ════ */}
        <div className="animate-in delay-6" style={{ marginTop: "3rem" }}>
          <StatsStrip />
        </div>

        {/* ════ QUIZ (waiting activity) ════ */}
        <div className="animate-in delay-7" style={{ marginTop: "2.4rem" }}>
          <WorldQuiz />
        </div>

        {/* ════ BOTTOM BAR ════ */}
        <div
          className="animate-in delay-8"
          style={{
            marginTop     : "auto",
            paddingTop    : "2.6rem",
            display       : "flex",
            alignItems    : "center",
            justifyContent: "space-between",
            flexWrap      : "wrap",
            gap           : "1.2rem",
          }}
        >
          <CountryStrip />
          <SocialBar />
        </div>

        {/* Copyright */}
        <p
          className="animate-in delay-8"
          style={{
            marginTop    : "1.4rem",
            fontSize     : "0.6rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color        : "rgba(240,233,223,0.13)",
          }}
        >
          Pathway &nbsp;·&nbsp; Coming Soon &nbsp;·&nbsp; © 2025
        </p>

      </div>
    </div>
  );
}