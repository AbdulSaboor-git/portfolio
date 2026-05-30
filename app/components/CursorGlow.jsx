"use client";

import { useEffect } from "react";

export default function CursorGlow() {
  useEffect(() => {
    const glow = document.getElementById("cursor-glow");
    if (!glow) return;

    const move = (e) => {
      const cx = `${e.clientX}px`;
      const cy = `${e.clientY}px`;
      // Set on the glow element for the cursor blob
      glow.style.setProperty("--cx", cx);
      glow.style.setProperty("--cy", cy);
      // Set on :root so .dot-grid mask can read them
      document.documentElement.style.setProperty("--cx", cx);
      document.documentElement.style.setProperty("--cy", cy);
    };

    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      {/* Dot grid — masked to cursor area via CSS (vars on :root) */}
      <div className="dot-grid" aria-hidden />
      {/* Mouse-tracking soft glow blob */}
      <div id="cursor-glow" className="cursor-glow" aria-hidden />
    </>
  );
}
