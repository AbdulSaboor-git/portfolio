"use client";

import { useRef, useState, useCallback } from "react";

// ─── Tilt presets ───────────────────────────────────────────────
const TILT_PRESETS = {
  none: 0,
  low: 0.03,
  medium: 0.065,
  high: 0.13,
};

export default function GlowCard({
  children,
  className = "",
  onClick,
  style = {},

  // Tilt
  tiltLevel = "medium",
  perspective = 900,
  springDuration = 0.55,
  disableTilt = false,

  // Glow
  glowColor = "rgba(56,189,248,0.14)",
  glowSize = 320,
  glowIntensity = null, // null → use alpha already in glowColor
  disableGlow = false,

  // Spotlight
  spotlightSize = 180,
  spotlightOpacity = 0.11,
  spotlightBlur = 28,
  disableSpotlight = false,
}) {
  const cardRef = useRef(null);
  const rafRef = useRef(null);

  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const [spot, setSpot] = useState({ x: 0, y: 0, visible: false });

  // Resolve sensitivity from preset or raw number
  const isTiltOff = disableTilt || tiltLevel === "none";
  const sensitivity = isTiltOff
    ? 0
    : typeof tiltLevel === "number"
      ? tiltLevel
      : (TILT_PRESETS[tiltLevel] ?? TILT_PRESETS.medium);

  const handleMouseMove = useCallback(
    (e) => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const rect = cardRef.current?.getBoundingClientRect();
        if (!rect) return;

        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;

        setTilt({
          rx: -(e.clientY - cy) * sensitivity,
          ry: (e.clientX - cx) * sensitivity,
        });
        setSpot({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
          visible: true,
        });
      });
    },
    [sensitivity],
  );

  const handleMouseLeave = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    setTilt({ rx: 0, ry: 0 });
    setSpot((p) => ({ ...p, visible: false }));
  }, []);

  // Build the resolved glow colour — optionally scale intensity
  const resolvedGlow = (() => {
    if (disableGlow) return "transparent";
    if (glowIntensity === null) return glowColor;
    // Swap the alpha on an rgba() string, e.g. "rgba(56,189,248,0.14)" → "rgba(56,189,248,0.3)"
    return glowColor.replace(/rgba?\(([^)]+)\)/, (_, inner) => {
      const parts = inner.split(",").map((s) => s.trim());
      parts[3] = String(glowIntensity);
      return `rgba(${parts.join(",")})`;
    });
  })();

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="h-full"
      style={{ perspective: isTiltOff ? undefined : `${perspective}px` }}
    >
      <div
        ref={cardRef}
        onClick={onClick}
        className={`relative overflow-hidden ${className}`}
        style={{
          cursor: onClick ? "pointer" : "default",
          transform: isTiltOff
            ? undefined
            : `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
          transformStyle: "preserve-3d",
          transition: spot.visible
            ? "transform 0.08s ease-out"
            : `transform ${springDuration}s cubic-bezier(0.23, 1, 0.32, 1)`,
          willChange: "transform",
          ...style,
        }}
      >
        {/* ── Colour wash glow ── */}
        {!disableGlow && (
          <div
            aria-hidden
            style={{
              position: "absolute",
              left: spot.x - glowSize / 2,
              top: spot.y - glowSize / 2,
              width: glowSize,
              height: glowSize,
              borderRadius: "50%",
              background: `radial-gradient(circle, ${resolvedGlow} 0%, transparent 70%)`,
              opacity: spot.visible ? 1 : 0,
              transition: "opacity 0.35s ease",
              pointerEvents: "none",
              zIndex: 0,
            }}
          />
        )}

        {/* ── White spotlight ── */}
        {!disableSpotlight && (
          <div
            aria-hidden
            style={{
              position: "absolute",
              left: spot.x - spotlightSize / 2,
              top: spot.y - spotlightSize / 2,
              width: spotlightSize,
              height: spotlightSize,
              borderRadius: "50%",
              background: `radial-gradient(circle, rgba(255,255,255,${spotlightOpacity}) 0%, transparent 70%)`,
              filter: `blur(${spotlightBlur}px)`,
              opacity: spot.visible ? 1 : 0,
              transition: "opacity 0.45s ease",
              pointerEvents: "none",
              zIndex: 1,
            }}
          />
        )}

        <div className="relative z-10">{children}</div>
      </div>
    </div>
  );
}
