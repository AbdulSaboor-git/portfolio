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
    <span className="text-slate-300 font-mono text-[clamp(13px,2vw,18px)]">
      <span className="text-sky-400/80 mr-1 select-none">$</span>
      {typed}
      <span className="inline-block w-[2px] h-[1em] bg-sky-400 ml-0.5 align-middle animate-blink" />
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
        bg-[radial-gradient(ellipse_70%_50%_at_50%_-5%,rgba(56,189,248,0.08)_0%,transparent_70%)]"
      />
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px]
        bg-gradient-to-r from-transparent via-white/15 to-transparent"
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
            {/* Decorative lines - hidden on mobile to prevent overflow (fix #3) */}
            <span
              className="hidden sm:block h-[1px] w-14 rounded-full flex-shrink-0"
              style={{
                background:
                  "linear-gradient(to right, transparent, rgba(56,189,248,0.65))",
              }}
            />

            <span
              className="font-mono font-semibold uppercase select-none
                text-[10px] tracking-[0.16em]
                sm:text-[12px] sm:tracking-[0.28em]"
              style={{
                color: "#38bdf8",
                textShadow: "0 0 24px rgba(56,189,248,0.35)",
              }}
            >
              Hi, I&apos;m Abdul Saboor
            </span>

            <span
              className="hidden sm:block h-[1px] w-14 rounded-full flex-shrink-0"
              style={{
                background:
                  "linear-gradient(to left, transparent, rgba(56,189,248,0.65))",
              }}
            />
          </div>
        </motion.div>

        {/* ── Main heading ─────────────────────────────── */}
        <motion.h1
          variants={itemVariants}
          className="font-display font-bold tracking-[-0.03em] text-slate-100
            text-[clamp(28px,8.5vw,88px)]
            leading-[0.92] sm:leading-[0.95]
            mb-4 sm:mb-5"
        >
          I Build{" "}
          <span className="relative inline-block">
            <span className="text-sky-400">Products</span>
            <span
              className="absolute bottom-0.5 sm:bottom-1 left-0 right-0 h-[2px]
              bg-gradient-to-r from-sky-400 to-transparent opacity-50"
            />
          </span>
          <br />
          <span className="text-slate-400">That Ship.</span>
        </motion.h1>

        {/* ── Typewriter ───────────────────────────────── */}
        <motion.div
          variants={itemVariants}
          className="mb-4 sm:mb-5 min-h-[22px] sm:min-h-[28px]"
        >
          <TypeWriter />
        </motion.div>

        {/* ── Subtitle ─────────────────────────────────── */}
        <motion.p
          variants={itemVariants}
          className="text-slate-300 leading-[1.75] sm:leading-[1.9] max-w-[620px] mx-auto
            text-[13px] sm:text-[15px]
            mb-6 sm:mb-8"
        >
          Full-stack engineer specialised in React, Next.js, Node.js, and Python
          AI microservices. I turn ideas into polished, production-grade
          products - fast, scalable, built to last.
        </motion.p>

        {/* ── CTAs ─────────────────────────────────────── */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-3
            mb-10 sm:mb-16"
        >
          <button
            onClick={() => scrollTo("projects")}
            className="inline-flex items-center gap-2 bg-sky-400 hover:bg-sky-300
              text-[#06080f] font-bold rounded-full transition-all duration-200
              hover:-translate-y-0.5 shadow-[0_8px_28px_rgba(56,189,248,0.22)]
              hover:shadow-[0_12px_40px_rgba(56,189,248,0.35)]
              text-[13px] px-5 py-3
              sm:text-[14px] sm:px-7 sm:py-3.5"
          >
            View my work
          </button>

          <a
            href="https://linkedin.com/in/abdulsaboor-in"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="bg-white/[0.05] hover:bg-white/[0.1] text-slate-200 hover:text-white
              rounded-full border border-white/15 hover:border-sky-400/50
              transition-all duration-200 p-3 sm:p-3.5"
          >
            <BsLinkedin size={17} />
          </a>
          <a
            href="https://github.com/AbdulSaboor-git"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="bg-white/[0.05] hover:bg-white/[0.1] text-slate-200 hover:text-white
              rounded-full border border-white/15 hover:border-sky-400/50
              transition-all duration-200 p-3 sm:p-3.5"
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
          border-t border-white/10 py-3 sm:py-4
          [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]"
      >
        <div className="flex w-max animate-marquee gap-5 sm:gap-6">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span
              key={i}
              className={`text-[10px] sm:text-[11px] font-mono whitespace-nowrap flex-shrink-0
                ${
                  item === "·"
                    ? "text-white/25"
                    : "text-slate-400 hover:text-slate-200 transition-colors cursor-default"
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
