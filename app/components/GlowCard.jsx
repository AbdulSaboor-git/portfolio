"use client";

import { motion } from "framer-motion";
import { useCursorGlow } from "../hooks/useCursorGlow";

export default function GlowCard({
  children,
  className = "",
  onClick,
  glowColor = "rgba(56,189,248,0.13)",
  style = {},
}) {
  const { ref, glow, handleMouseMove, handleMouseLeave } = useCursorGlow();

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`relative overflow-hidden ${className}`}
      style={{ cursor: onClick ? "pointer" : "default", ...style }}
    >
      {/* Cursor-tracking radial glow */}
      <div
        className="pointer-events-none absolute rounded-full transition-opacity duration-300"
        style={{
          left: glow.x - 150,
          top: glow.y - 150,
          width: 300,
          height: 300,
          background: `radial-gradient(circle, ${glowColor} 0%, transparent 70%)`,
          opacity: glow.opacity,
          zIndex: 0,
        }}
      />
      {/* Content always above glow */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
