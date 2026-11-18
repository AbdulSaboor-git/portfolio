"use client";

import { useEffect } from "react";

export default function CursorGlow() {
  useEffect(() => {
    const glow = document.getElementById("cursor-glow");
    if (!glow) return;

    const move = (e) => {
      glow.style.setProperty("--cx", `${e.clientX}px`);
      glow.style.setProperty("--cy", `${e.clientY}px`);
    };

    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return <div id="cursor-glow" className="cursor-glow" aria-hidden />;
}
