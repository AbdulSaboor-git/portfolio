"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const ROLES = [
  "Full-Stack Developer",
  "React / Next.js Engineer",
  "AI-Integrated App Builder",
  "Python Microservice Architect",
];

const MARQUEE_ITEMS = [
  "Next.js",
  "·",
  "React",
  "·",
  "Node.js",
  "·",
  "PostgreSQL",
  "·",
  "FastAPI",
  "·",
  "Python",
  "·",
  "Prisma",
  "·",
  "LangGraph",
  "·",
  "Tailwind",
  "·",
  "TypeScript",
  "·",
  "Express.js",
  "·",
  "SpaCy",
  "·",
  "Framer Motion",
  "·",
  "Sentence Transformers",
  "·",
  "JWT",
  "·",
];

function TypeWriter() {
  const [typed, setTyped] = useState("");
  const [roleIdx, setRoleIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIdx];
    let t;
    if (!deleting) {
      if (typed.length < current.length) {
        t = setTimeout(() => setTyped(current.slice(0, typed.length + 1)), 55);
      } else {
        t = setTimeout(() => setDeleting(true), 2600);
      }
    } else {
      if (typed.length > 0) {
        t = setTimeout(() => setTyped(typed.slice(0, -1)), 28);
      } else {
        t = setTimeout(() => {
          setDeleting(false);
          setRoleIdx((i) => (i + 1) % ROLES.length);
        }, 0);
      }
    }
    return () => clearTimeout(t);
  }, [typed, deleting, roleIdx]);

  return (
    <span className="text-slate-400 font-mono text-[clamp(13px,2vw,18px)]">
      <span className="text-[--accent]/60 mr-1 select-none">$</span>
      {typed}
      <span className="inline-block w-[2px] h-[1em] bg-[--accent] ml-0.5 align-middle animate-blink" />
    </span>
  );
}

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center text-center
        overflow-hidden px-[clamp(20px,6vw,80px)]
        pt-[88px] sm:pt-[120px] md:pt-[140px]  
        pb-0"
    >
      {/* Radial bloom */}
      <div
        className="pointer-events-none absolute inset-0
        bg-[radial-gradient(ellipse_70%_50%_at_50%_-5%,rgba(56,189,248,0.06)_0%,transparent_70%)]"
      />
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px]
        bg-gradient-to-r from-transparent via-white/[0.08] to-transparent"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-[860px] w-full"
      >
        {/* ── Greeting ─────────────────────────────────── */}
        <motion.div
          variants={itemVariants}
          className="mb-5 sm:mb-7 flex justify-center"
        >
          <div className="relative inline-flex items-center gap-3 sm:gap-5">
            {/* Decorative lines — hidden on mobile to prevent overflow (fix #3) */}
            <span
              className="hidden sm:block h-[1px] w-14 rounded-full flex-shrink-0"
              style={{
                background:
                  "linear-gradient(to right, transparent, rgba(56,189,248,0.55))",
              }}
            />

            <span
              className="font-mono font-semibold uppercase select-none
                text-[10px] tracking-[0.16em]
                sm:text-[12px] sm:tracking-[0.28em]" /* ← fix #3: compact on mobile */
              style={{
                color: "var(--accent)",
                textShadow: "0 0 24px rgba(56,189,248,0.35)",
              }}
            >
              Hi, I&apos;m Abdul Saboor
            </span>

            <span
              className="hidden sm:block h-[1px] w-14 rounded-full flex-shrink-0"
              style={{
                background:
                  "linear-gradient(to left, transparent, rgba(56,189,248,0.55))",
              }}
            />
          </div>
        </motion.div>

        {/* ── Main heading ─────────────────────────────── */}
        {/*
          fix #2: was clamp(48px,8.5vw,88px) — 48px min overflows 330px mobile column.
          New min 28px: at 375px → 8.5vw = 31.875px (> 28, so vw wins).
          "I Build Products" in Syne bold at ~32px ≈ 290px — fits comfortably.
        */}
        <motion.h1
          variants={itemVariants}
          className="font-display font-bold tracking-[-0.03em] text-slate-100
            text-[clamp(28px,8.5vw,88px)]
            leading-[0.92] sm:leading-[0.95]
            mb-4 sm:mb-5"
        >
          I Build{" "}
          <span className="relative inline-block">
            <span className="text-[--accent]">Products</span>
            <span
              className="absolute bottom-0.5 sm:bottom-1 left-0 right-0 h-[2px]
              bg-gradient-to-r from-[--accent] to-transparent opacity-40"
            />
          </span>
          <br />
          <span className="text-slate-500">That Ship.</span>
        </motion.h1>

        {/* ── Typewriter ───────────────────────────────── */}
        {/* fix #6: h-auto + min-h instead of fixed h-7 so it never clips on mobile */}
        <motion.div
          variants={itemVariants}
          className="mb-4 sm:mb-5 min-h-[22px] sm:min-h-[28px]"
        >
          <TypeWriter />
        </motion.div>

        {/* ── Subtitle ─────────────────────────────────── */}
        <motion.p
          variants={itemVariants}
          className="text-slate-500 leading-[1.75] sm:leading-[1.9] max-w-[620px] mx-auto
            text-[13px] sm:text-[15px]    /* ← slightly smaller + tighter on mobile */
            mb-6 sm:mb-8"
        >
          Full-stack engineer specialised in React, Next.js, Node.js, and Python
          AI microservices. I turn ideas into polished, production-grade
          products — fast, scalable, built to last.
        </motion.p>

        {/* ── CTAs ─────────────────────────────────────── */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-3
            mb-10 sm:mb-16" /* ← fix #4: was always mb-16 */
        >
          <button
            onClick={() => scrollTo("projects")}
            className="inline-flex items-center gap-2 bg-[--accent] hover:bg-sky-300
              text-[--bg] font-bold rounded-full transition-all duration-200
              hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(56,189,248,0.3)]
              text-[13px] px-5 py-3        /* mobile */
              sm:text-[14px] sm:px-7 sm:py-3.5" /* desktop */
          >
            View my work
          </button>

          <a
            href="https://linkedin.com/in/abdulsaboor-in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-[--accent] rounded-full border border-white/10
              hover:border-[--accent]/40 transition-all duration-200
              p-3 sm:p-3.5"
          >
            <BsLinkedin size={17} />
          </a>
          <a
            href="https://github.com/AbdulSaboor-git"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-[--accent] rounded-full border border-white/10
              hover:border-[--accent]/40 transition-all duration-200
              p-3 sm:p-3.5"
          >
            <BsGithub size={17} />
          </a>
        </motion.div>
      </motion.div>

      {/* ── Tech marquee ─────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="relative z-10 w-full overflow-hidden
          border-t border-white/[0.05] py-3 sm:py-4
          [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]"
      >
        <div className="flex w-max animate-marquee gap-5 sm:gap-6">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span
              key={i}
              className={`text-[10px] sm:text-[11px] font-mono whitespace-nowrap flex-shrink-0
                ${
                  item === "·"
                    ? "text-white/10"
                    : "text-slate-600 hover:text-slate-400 transition-colors cursor-default"
                }`}
            >
              {item}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
