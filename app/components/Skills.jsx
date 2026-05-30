"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { SKILLS } from "../data/portfolio";

const POSITIONS = [
  { cx: "20%", cy: "28%" },  // Frontend
  { cx: "50%", cy: "15%" },  // Backend
  { cx: "80%", cy: "28%" },  // Databases
  { cx: "20%", cy: "72%" },  // AI/ML
  { cx: "50%", cy: "85%" },  // Tools
  { cx: "80%", cy: "72%" },  // Soft Skills
];

const CONNECTIONS = [
  [0,1],[1,2],[3,4],[4,5],[0,3],[1,4],[2,5],[1,3],[1,5]
];

function useElementSize(ref) {
  const [size, setSize] = useState({ w: 0, h: 0 });
  useEffect(() => {
    if (!ref.current) return;
    const ro = new ResizeObserver(([e]) => {
      setSize({ w: e.contentRect.width, h: e.contentRect.height });
    });
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);
  return size;
}

function pct(p, total) {
  return (parseFloat(p) / 100) * total;
}

export default function Skills() {
  // hover-driven — default to first node so panel is never empty
  const [active, setActive] = useState(0);
  const containerRef = useRef(null);
  const { w, h } = useElementSize(containerRef);

  const activeSkill = SKILLS[active];

  return (
    <section id="skills" className="px-[clamp(20px,6vw,80px)] py-28 border-t border-white/[0.04]">
      <div className="max-w-[1100px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionHeader
            title={<>The tools I <span className="text-[--accent]">live in</span></>}
            subtitle="Hover any node to explore the stack."
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-8 items-start">

          {/* ── Constellation canvas ── */}
          <div
            ref={containerRef}
            className="relative w-full"
            style={{ height: "clamp(360px, 50vw, 520px)" }}
          >
            {/* SVG connection lines */}
            {w > 0 && (
              <svg className="constellation-canvas" viewBox={`0 0 ${w} ${h}`}>
                <defs>
                  <filter id="glow-line">
                    <feGaussianBlur stdDeviation="2" result="blur"/>
                    <feMerge>
                      <feMergeNode in="blur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                {CONNECTIONS.map(([a, b], i) => {
                  const hot = active === a || active === b;
                  return (
                    <line
                      key={i}
                      x1={pct(POSITIONS[a].cx, w)} y1={pct(POSITIONS[a].cy, h)}
                      x2={pct(POSITIONS[b].cx, w)} y2={pct(POSITIONS[b].cy, h)}
                      stroke={hot ? "rgba(56,189,248,0.4)" : "rgba(255,255,255,0.05)"}
                      strokeWidth={hot ? 1.5 : 1}
                      filter={hot ? "url(#glow-line)" : undefined}
                      style={{ transition: "stroke 0.25s, stroke-width 0.25s" }}
                    />
                  );
                })}
              </svg>
            )}

            {/* Nodes — hover triggers active */}
            {SKILLS.map((sk, i) => {
              const pos = POSITIONS[i];
              const isActive = active === i;
              return (
                <motion.div
                  key={sk.category}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5, type: "spring", stiffness: 260, damping: 20 }}
                  onMouseEnter={() => setActive(i)}
                  className="absolute flex flex-col items-center gap-1.5 cursor-default
                    -translate-x-1/2 -translate-y-1/2 group"
                  style={{ left: pos.cx, top: pos.cy }}
                >
                  {/* Orb */}
                  <motion.div
                    animate={{
                      scale: isActive ? 1.2 : 1,
                      boxShadow: isActive
                        ? `0 0 0 5px ${sk.color}22, 0 0 24px ${sk.color}44`
                        : `0 0 0 0px ${sk.color}00`,
                    }}
                    transition={{ duration: 0.25 }}
                    className="w-12 h-12 rounded-full flex items-center justify-center text-xl
                      border-2 transition-colors duration-250"
                    style={{
                      background: isActive ? `${sk.color}16` : "rgba(255,255,255,0.03)",
                      borderColor: isActive ? sk.color : "rgba(255,255,255,0.09)",
                    }}
                  >
                    {sk.icon}
                  </motion.div>

                  {/* Label */}
                  <span
                    className="text-[10px] font-mono font-medium tracking-wide whitespace-nowrap
                      transition-colors duration-200"
                    style={{ color: isActive ? sk.color : "rgba(148,163,184,0.6)" }}
                  >
                    {sk.category}
                  </span>

                  {/* Pulse ring */}
                  {isActive && (
                    <motion.div
                      className="absolute rounded-full pointer-events-none"
                      initial={{ width: 48, height: 48, opacity: 0.5, border: `1.5px solid ${sk.color}` }}
                      animate={{ width: 76, height: 76, opacity: 0 }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* ── Info panel — always populated (defaults to index 0) ── */}
          <div className="lg:sticky lg:top-28">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
                className="bg-[#0a0d18] border border-white/[0.06] rounded-2xl p-6"
              >
                <div className="flex items-center gap-2.5 mb-5">
                  <span className="text-2xl">{activeSkill.icon}</span>
                  <span
                    className="font-display text-[16px] font-bold"
                    style={{ color: activeSkill.color }}
                  >
                    {activeSkill.category}
                  </span>
                </div>
                <div className="flex flex-col gap-2.5">
                  {activeSkill.items.map((item) => (
                    <div key={item} className="flex items-center gap-2.5">
                      <span
                        className="w-1 h-1 rounded-full flex-shrink-0"
                        style={{ background: activeSkill.color }}
                      />
                      <span className="text-[13px] text-slate-300 font-mono">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
