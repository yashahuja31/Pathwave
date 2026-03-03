// ─────────────────────────────────────────────────────────────
//  components/WorldQuiz.jsx  –  Pathway Coming Soon
//  "Which country suits you?" — 3-question interactive quiz.
//  Tallies scores from constants/data.js and reveals a result.
import React from "react";
// ─────────────────────────────────────────────────────────────
import { useState } from "react";
import { QUIZ_QUESTIONS, COUNTRY_RESULTS } from "../constants/data";

/* ── Sub-components ────────────────────────────────────────── */

function ProgressBar({ current, total }) {
  return (
    <div style={{ display: "flex", gap: "0.35rem", marginBottom: "1.4rem" }}>
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          style={{
            flex          : 1,
            height        : 2,
            borderRadius  : 2,
            background    : i < current
              ? "var(--gold)"
              : "rgba(240,233,223,0.12)",
            transition    : "background 0.4s ease",
          }}
        />
      ))}
    </div>
  );
}

function QuizResult({ result, onReset }) {
  return (
    <div style={{ animation: "quizReveal 0.5s var(--ease-out-expo) both" }}>
      {/* Flag + headline */}
      <div style={{ marginBottom: "1rem" }}>
        <span style={{ fontSize: "2rem", lineHeight: 1, display: "block", marginBottom: "0.5rem" }}>
          {result.flag}
        </span>
        <h3 style={{
          fontFamily  : "var(--font-display)",
          fontSize    : "clamp(1.3rem, 2.8vw, 1.8rem)",
          fontWeight  : 400,
          color       : "var(--white)",
          lineHeight  : 1.1,
          marginBottom: "0.6rem",
        }}>
          {result.headline}
        </h3>
        <p style={{
          fontSize  : "0.84rem",
          color     : "var(--muted)",
          lineHeight: 1.7,
          maxWidth  : 340,
        }}>
          {result.desc}
        </p>
      </div>

      {/* CTA + retake */}
      <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", marginTop: "1.2rem", flexWrap: "wrap" }}>
        <button className="pw-btn-primary" style={{ fontSize: "0.75rem", padding: "0.65rem 1.4rem" }}>
          Get notified when we launch
        </button>
        <button
          onClick={onReset}
          style={{
            background : "transparent",
            border     : "none",
            color      : "rgba(240,233,223,0.4)",
            fontSize   : "0.75rem",
            cursor     : "pointer",
            fontFamily : "var(--font-body)",
            letterSpacing: "0.04em",
            transition : "color 0.2s",
            padding    : "0.65rem 0",
          }}
          onMouseEnter={e => e.target.style.color = "var(--cream)"}
          onMouseLeave={e => e.target.style.color = "rgba(240,233,223,0.4)"}
        >
          ↩ Retake quiz
        </button>
      </div>
    </div>
  );
}

/* ── Main quiz component ────────────────────────────────────── */
export default function WorldQuiz() {
  const [step,    setStep   ] = useState("idle"); // idle | quiz | result
  const [qIndex,  setQIndex ] = useState(0);
  const [scores,  setScores ] = useState({});
  const [selected, setSelected] = useState(null);  // selected option index per question
  const [result,  setResult ] = useState(null);

  const totalQ = QUIZ_QUESTIONS.length;

  const startQuiz = () => {
    setStep("quiz");
    setQIndex(0);
    setScores({});
    setSelected(null);
  };

  const choose = (optionIndex) => {
    if (selected !== null) return; // already answered this question
    setSelected(optionIndex);

    // Tally scores
    const option    = QUIZ_QUESTIONS[qIndex].options[optionIndex];
    const newScores = { ...scores };
    Object.entries(option.scores).forEach(([country, pts]) => {
      newScores[country] = (newScores[country] || 0) + pts;
    });
    setScores(newScores);

    // Advance after short pause
    setTimeout(() => {
      if (qIndex + 1 < totalQ) {
        setQIndex(qIndex + 1);
        setSelected(null);
      } else {
        // Find winner
        const winner = Object.entries(newScores).sort((a, b) => b[1] - a[1])[0][0];
        setResult(COUNTRY_RESULTS[winner]);
        setStep("result");
      }
    }, 480);
  };

  const reset = () => {
    setStep("idle");
    setQIndex(0);
    setScores({});
    setSelected(null);
    setResult(null);
  };

  const currentQ = QUIZ_QUESTIONS[qIndex];

  return (
    <div
      style={{
        borderTop   : "1px solid var(--border)",
        paddingTop  : "1.6rem",
        marginTop   : "0.4rem",
      }}
    >
      {/* ── Idle state ── */}
      {step === "idle" && (
        <div style={{ animation: "quizReveal 0.5s var(--ease-out-expo) both" }}>
          <p style={{
            fontSize     : "0.6rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color        : "rgba(240,233,223,0.22)",
            marginBottom : "0.7rem",
            fontWeight   : 400,
          }}>
            While you wait
          </p>
          <p style={{
            fontFamily  : "var(--font-display)",
            fontSize    : "clamp(1rem, 2.2vw, 1.22rem)",
            fontWeight  : 300,
            color       : "var(--cream)",
            marginBottom: "0.9rem",
            fontStyle   : "italic",
            lineHeight  : 1.4,
          }}>
            Which country suits you best?
          </p>
          <p style={{
            fontSize  : "0.82rem",
            color     : "var(--muted)",
            lineHeight: 1.65,
            maxWidth  : 340,
            marginBottom: "1.1rem",
          }}>
            Answer 3 quick questions — we'll suggest the destination that fits
            your goals and lifestyle.
          </p>
          <button
            className="pw-btn-primary"
            onClick={startQuiz}
            style={{ fontSize: "0.75rem", padding: "0.65rem 1.4rem" }}
          >
            Take the quiz →
          </button>
        </div>
      )}

      {/* ── Quiz state ── */}
      {step === "quiz" && (
        <div
          key={qIndex}
          style={{ animation: "quizReveal 0.4s var(--ease-out-expo) both" }}
        >
          <ProgressBar current={qIndex} total={totalQ} />

          {/* Question counter */}
          <p style={{
            fontSize     : "0.6rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color        : "rgba(240,233,223,0.25)",
            marginBottom : "0.6rem",
          }}>
            Question {qIndex + 1} of {totalQ}
          </p>

          {/* Question text */}
          <p style={{
            fontFamily  : "var(--font-display)",
            fontSize    : "clamp(0.95rem, 2vw, 1.15rem)",
            fontWeight  : 300,
            color       : "var(--cream)",
            marginBottom: "0.9rem",
            fontStyle   : "italic",
            lineHeight  : 1.4,
          }}>
            {currentQ.question}
          </p>

          {/* Options */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {currentQ.options.map((opt, i) => (
              <button
                key={i}
                className={`pw-quiz-option${selected === i ? " selected" : ""}`}
                onClick={() => choose(i)}
                disabled={selected !== null}
                style={{ opacity: selected !== null && selected !== i ? 0.45 : 1 }}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ── Result state ── */}
      {step === "result" && result && (
        <QuizResult result={result} onReset={reset} />
      )}
    </div>
  );
}