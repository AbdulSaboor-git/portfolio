"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const TERMINAL_LINES = [
  { prompt: "whoami",        out: "Abdul Saboor" },
  { prompt: "location",      out: "Lahore, Pakistan" },
  { prompt: "degree",        out: "BSCS (Hons.) · GCU · 2022–2026" },
  { prompt: "gpa",           out: "3.39 / 4.00" },
  { prompt: "status",        out: "✓ Available for hire" },
  { prompt: "focus",         out: "Full-Stack + AI/ML" },
];

const STACK = [
  { label: "React.js",  color: "#38bdf8" },
  { label: "Next.js",   color: "#a78bfa" },
  { label: "Node.js",   color: "#34d399" },
  { label: "FastAPI",   color: "#fb923c" },
  { label: "PostgreSQL",color: "#38bdf8" },
  { label: "Python",    color: "#fbbf24" },
  { label: "LangGraph", color: "#f472b6" },
  { label: "TypeScript",color: "#a78bfa" },
];

function TerminalCard() {
  const [visibleLines, setVisibleLines] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    if (visibleLines < TERMINAL_LINES.length) {
      timerRef.current = setTimeout(
        () => setVisibleLines((n) => n + 1),
        visibleLines === 0 ? 400 : 320
      );
    }
    return () => clearTimeout(timerRef.current);
  }, [visibleLines]);

  return (
    <div className="bg-[#0a0d18] border border-white/[0.06] rounded-2xl overflow-hidden
      font-mono text-[13px] shadow-[0_24px_80px_rgba(0,0,0,0.6)]">

      {/* Window chrome */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.05] bg-white/[0.02]">
        <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
        <span className="w-3 h-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 text-[11px] text-slate-600">~/portfolio — zsh</span>
      </div>

      {/* Terminal body */}
      <div className="px-5 py-5 space-y-2 min-h-[240px]">
        {TERMINAL_LINES.slice(0, visibleLines).map((line, i) => (
          <div key={i} className="flex gap-2">
            <span className="text-[--accent]/60 select-none flex-shrink-0">❯</span>
            <div className="flex flex-col gap-0.5">
              <span className="text-[--accent]">{line.prompt}</span>
              <span className="text-slate-400 pl-0">{line.out}</span>
            </div>
          </div>
        ))}
        {/* Blinking cursor on last line */}
        {visibleLines < TERMINAL_LINES.length && (
          <div className="flex gap-2">
            <span className="text-[--accent]/60 select-none">❯</span>
            <span className="inline-block w-[8px] h-[14px] bg-[--accent]/60 animate-blink align-middle mt-0.5" />
          </div>
        )}
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="px-[clamp(20px,6vw,80px)] py-28 border-t border-white/[0.04]">
      <div className="max-w-[1100px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionHeader
            title="About me"
            subtitle="A builder who cares about the craft."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left: terminal */}
            <TerminalCard />

            {/* Right: bio + stack */}
            <div>
              {[
                "I'm a full-stack developer who's spent the last several years obsessing over building products that feel as good as they perform.",
                "My work spans the full stack: pixel-perfect React frontends, robust Node.js APIs, PostgreSQL data models, and Python-powered AI microservices. I've shipped everything from multi-seller e-commerce platforms to NLP-driven SaaS tools with real users.",
                "What drives me isn't writing code — it's understanding the business problem first, then engineering the cleanest, most scalable path to a solution.",
              ].map((text, i) => (
                <p key={i} className="text-[15px] text-slate-500 leading-[1.85] mb-4 last:mb-0">
                  {text}
                </p>
              ))}

              {/* Stack board */}
              <div className="mt-8 pt-7 border-t border-white/[0.05]">
                <p className="text-[11px] font-mono text-slate-600 tracking-widest uppercase mb-4">
                  Current stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {STACK.map((s) => (
                    <span
                      key={s.label}
                      className="text-[12px] font-mono px-3 py-1.5 rounded-lg border transition-all duration-200
                        cursor-default hover:-translate-y-0.5"
                      style={{
                        color: s.color,
                        borderColor: `${s.color}25`,
                        background: `${s.color}08`,
                      }}
                    >
                      {s.label}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="mt-7 flex gap-3">
                <a
                  href="https://github.com/AbdulSaboor-git"
                  target="_blank" rel="noopener noreferrer"
                  className="text-[12px] font-medium text-slate-500 hover:text-slate-100
                    border border-white/[0.07] hover:border-white/20 px-4 py-2 rounded-lg
                    transition-all duration-200"
                >
                  GitHub ↗
                </a>
                <a
                  href="https://linkedin.com/in/abdulsaboor-in"
                  target="_blank" rel="noopener noreferrer"
                  className="text-[12px] font-medium text-slate-500 hover:text-[--accent]
                    border border-white/[0.07] hover:border-[--accent]/30 px-4 py-2 rounded-lg
                    transition-all duration-200"
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
