import React from "react";
// ─────────────────────────────────────────────────────────────
//  hooks/useCountdown.js  –  Pathway Coming Soon
// ─────────────────────────────────────────────────────────────
import { useState, useEffect } from "react";

/**
 * Returns live { days, hours, minutes, seconds } until `targetDate`.
 * Updates every second. All values are 0 once the date has passed.
 */
export function useCountdown(targetDate) {
  const calculate = () => {
    const diff = Math.max(0, targetDate - Date.now());
    return {
      days   : Math.floor(diff / 86_400_000),
      hours  : Math.floor((diff % 86_400_000) / 3_600_000),
      minutes: Math.floor((diff % 3_600_000)  /    60_000),
      seconds: Math.floor((diff %    60_000)  /     1_000),
    };
  };

  const [time, setTime] = useState(calculate);

  useEffect(() => {
    const id = setInterval(() => setTime(calculate()), 1_000);
    return () => clearInterval(id);
  }, [targetDate]);

  return time;
}