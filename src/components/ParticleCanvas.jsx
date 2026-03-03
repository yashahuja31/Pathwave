
// ─────────────────────────────────────────────────────────────
//  components/ParticleCanvas.jsx  –  Pathway Coming Soon
//  Renders a twinkling star field + soft ambient orbs on canvas.
import React from "react";
// ─────────────────────────────────────────────────────────────
import { useEffect, useRef } from "react";

const STAR_COUNT = 110;

const AMBIENT_ORBS = [
  { rx: 0.12, ry: 0.18, radius: 230, color: "rgba(255,107,0,0.032)"   },
  { rx: 0.88, ry: 0.62, radius: 280, color: "rgba(232,168,56,0.022)"  },
  { rx: 0.50, ry: 0.92, radius: 180, color: "rgba(13,26,46,0.55)"     },
];

export default function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx    = canvas.getContext("2d");
    let rafId;

    // ── Resize to full viewport ──────────────────────────────
    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // ── Generate stars ───────────────────────────────────────
    const stars = Array.from({ length: STAR_COUNT }, () => ({
      x    : Math.random() * window.innerWidth,
      y    : Math.random() * window.innerHeight,
      r    : Math.random() * 1.3 + 0.25,
      phase: Math.random() * Math.PI * 2,
      speed: Math.random() * 0.55 + 0.25,
    }));

    // ── Draw loop ────────────────────────────────────────────
    let t = 0;
    const draw = () => {
      t += 0.016;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Ambient orbs
      AMBIENT_ORBS.forEach(({ rx, ry, radius, color }) => {
        const x = rx * canvas.width;
        const y = ry * canvas.height;
        const g = ctx.createRadialGradient(x, y, 0, x, y, radius);
        g.addColorStop(0, color);
        g.addColorStop(1, "transparent");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Stars
      stars.forEach((s) => {
        const alpha = 0.08 + 0.78 * (0.5 + 0.5 * Math.sin(t * s.speed + s.phase));
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(240,233,223,${alpha.toFixed(3)})`;
        ctx.fill();
      });

      rafId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position   : "fixed",
        inset      : 0,
        zIndex     : 0,
        pointerEvents: "none",
        display    : "block",
      }}
    />
  );
}