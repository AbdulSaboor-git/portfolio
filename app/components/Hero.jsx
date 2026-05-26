"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const ROLES = [
  "Full-Stack Developer",
  "React / Next.js Engineer",
  "AI-Integrated App Builder",
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

function TypeWriter() {
  const [typed, setTyped] = useState("");
  const [roleIdx, setRoleIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIdx];
    let t;
    if (!deleting) {
      if (typed.length < current.length) {
        t = setTimeout(() => setTyped(current.slice(0, typed.length + 1)), 60);
      } else {
        t = setTimeout(() => setDeleting(true), 2400);
      }
    } else {
      if (typed.length > 0) {
        t = setTimeout(() => setTyped(typed.slice(0, -1)), 32);
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
    <span className="text-slate-400 text-[20px] font-medium">
      {typed}
      <span className="inline-block w-[2px] h-[1.1em] bg-sky-400 ml-0.5 align-middle animate-blink" />
    </span>
  );
}

const STATS = [
  { n: "6+", l: "Projects Built" },
  { n: "95%", l: "Client Satisfaction" },
  { n: "MERN", l: "Full-Stack" },
  { n: "AI/ML", l: "Integrated Apps" },
];

export default function Hero() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden
        px-[clamp(20px,6vw,80px)] pt-[120px] pb-[80px]"
    >
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(56,189,248,0.08)_0%,transparent_70%)]" />
      <div
        className="pointer-events-none absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px]
        bg-[radial-gradient(circle,rgba(167,139,250,0.05)_0%,transparent_65%)]"
      />
      {/* Grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-100"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.018) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.018) 1px,transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 100%)",
        }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-[900px]"
      >
        {/* Available badge */}
        <motion.div variants={itemVariants} className="mb-7">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
            border border-sky-400/30 bg-sky-400/5 text-sky-400 text-[12px] font-semibold"
          >
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
            Open to full-time roles &amp; freelance projects
          </span>
        </motion.div>

        {/* Eyebrow */}
        {/* <motion.p
          variants={itemVariants}
          className="text-[13px] font-medium text-slate-600 tracking-[0.06em] uppercase mb-4"
        >
          Lahore, Pakistan · BSCS (Hons.) Graduate
        </motion.p> */}

        {/* Heading */}
        <motion.h1
          variants={itemVariants}
          className="font-display text-[clamp(44px,7.5vw,75px)] font-extrabold tracking-[-0.02em] text-slate-100 leading-none mb-2"
        >
          I Build Products
          <br />
          <span className="text-sky-400">That Ship</span>
        </motion.h1>

        {/* Typewriter */}
        <motion.div variants={itemVariants} className="mb-4 h-8">
          <TypeWriter />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-[16px] text-slate-500 leading-[1.85] max-w-[700px] mb-6"
        >
          Full-stack engineer specialized in React, Next.js, Node.js, and Python
          AI integrations. I turn ideas into polished, production-grade products
          that are fast, scalable, and built to last.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-3 mb-16 "
        >
          <button
            onClick={() => scrollTo("projects")}
            className="inline-flex items-center gap-2 bg-sky-400 hover:bg-sky-300 text-[#070b14] text-[14px]
              font-bold px-7 py-3.5 rounded-[9px] transition-all duration-200 hover:-translate-y-0.5
              hover:shadow-[0_12px_40px_rgba(56,189,248,0.3)]"
          >
            View My Work →
          </button>
          <a
            href="https://github.com/AbdulSaboor-git"
            target="_blank"
            rel="noopener noreferrer"
            className=" text-slate-400 hover:text-sky-400 font-medium
              p-3.5 rounded-full border border-white/10 hover:border-sky-400/50
              transition-all duration-200 "
          >
            <BsGithub size={20} />
          </a>
          <a
            href="https://linkedin.com/in/abdulsaboor-in"
            target="_blank"
            rel="noopener noreferrer"
            className=" text-slate-400 hover:text-sky-400 font-medium
              p-3.5 rounded-full border border-white/10 hover:border-sky-400/50
              transition-all duration-200 "
          >
            <BsLinkedin size={20} />
          </a>
        </motion.div>

        {/* Stats bar */}
        <motion.div variants={itemVariants} className="flex flex-wrap">
          {STATS.map((s, i) => (
            <div
              key={i}
              className={`px-8 py-4 border border-white/[0.07] w-1/2 md:w-auto
                ${i < STATS.length - 1 ? "md:border-r-0" : ""}
                ${i === 0 ? "md:rounded-l-xl" : ""}
                ${i === STATS.length - 1 ? "md:rounded-r-xl border-r border-white/[0.07]" : ""}
                `}
            >
              <div className="font-display text-[26px] font-extrabold text-slate-100 tracking-tight">
                {s.n}
              </div>
              <div className="text-[10px] font-semibold text-slate-600 uppercase tracking-[0.08em] mt-0.5">
                {s.l}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
