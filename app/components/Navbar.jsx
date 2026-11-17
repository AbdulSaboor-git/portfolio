"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "../data/portfolio";
import {
  HiBars3,
  HiXMark,
  HiUser,
  HiCodeBracket,
  HiBriefcase,
  HiEnvelope,
} from "react-icons/hi2";

const NAV_ICONS = {
  About: HiUser,
  Skills: HiCodeBracket,
  Projects: HiBriefcase,
  Contact: HiEnvelope,
};

export default function Navbar() {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const panelRef = useRef(null);

  /* ── scroll spy ── */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      for (const id of [...NAV_LINKS].reverse()) {
        const el = document.getElementById(id.toLowerCase());
        if (el && window.scrollY >= el.offsetTop - 140) {
          setActive(id.toLowerCase());
          return;
        }
      }
      if (window.scrollY < 100) setActive("");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── close panel on outside click ── */
  useEffect(() => {
    if (!open) return;
    const handler = (e) => {
      if (
        panelRef.current &&
        !panelRef.current.contains(e.target) &&
        !e.target.closest("#nav-hamburger")
      )
        setOpen(false);
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, [open]);

  const scrollTo = (section) => {
    document
      .getElementById(section.toLowerCase())
      ?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <>
      {/* ════════════════════════════════════════
          DESKTOP — centred floating pill
      ════════════════════════════════════════ */}
      <motion.div
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className="fixed top-5 left-1/2 -translate-x-1/2 z-50 hidden md:block"
      >
        <div
          className={`flex items-center gap-1 px-3 py-2 rounded-full border transition-all duration-500
            ${
              scrolled
                ? "bg-[#06080f]/80 backdrop-blur-2xl border-white/10 shadow-[0_8px_40px_rgba(0,0,0,0.55)]"
                : "bg-[#06080f]/50 backdrop-blur-xl border-white/[0.07]"
            }`}
        >
          {NAV_LINKS.map((link) => {
            const isActive = active === link.toLowerCase();
            const Icon = NAV_ICONS[link];
            return (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                className="relative group px-4 py-1.5 text-[13px] font-medium rounded-full
                  cursor-pointer border-none bg-transparent flex items-center gap-1.5"
              >
                {isActive && (
                  <motion.span
                    layoutId="pill-active"
                    className="absolute inset-0 rounded-full bg-white/[0.08] border border-white/10"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                {Icon && (
                  <Icon
                    size={13}
                    className={`relative z-10 transition-colors duration-200
                      ${isActive ? "text-slate-100" : "text-slate-600"} group-hover:text-slate-300`}
                  />
                )}
                <span
                  className={`relative z-10 transition-colors duration-200
                  ${isActive ? "text-slate-100" : "text-slate-500 group-hover:text-slate-300"}`}
                >
                  {link}
                </span>
              </button>
            );
          })}
        </div>
      </motion.div>

      {/* ════════════════════════════════════════
          MOBILE — hamburger top-left
          Collapsed: slim icon-only pill
          Open: full panel slides out rightward
      ════════════════════════════════════════ */}

      {/* Hamburger button — same position as before */}
      <button
        id="nav-hamburger"
        onClick={() => setOpen((o) => !o)}
        aria-label="Toggle menu"
        className={`fixed top-3 left-3 z-[60] md:hidden
          w-9 h-9 flex items-center justify-center rounded-xl
          border transition-all duration-300 
          bg-[#06080f]/60 border-white/[0.07] text-slate-400 backdrop-blur-md
          `}
      >
        <motion.div
          animate={{ rotate: open ? 90 : 0, scale: open ? 0.9 : 1 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          {open ? <HiXMark size={18} /> : <HiBars3 size={18} />}
        </motion.div>
      </button>

      {/*
        Collapsed icon strip — always mounted, sits just below the hamburger.
        Shows icons only; no text, no background panel. Fades out when open.
      */}
      <motion.div
        animate={{
          opacity: open ? 0 : 1,
          pointerEvents: open ? "none" : "auto",
        }}
        transition={{ duration: 0.18 }}
        className="fixed top-[52px] left-3 z-[59] md:hidden flex flex-col gap-1"
      >
        {NAV_LINKS.map((link) => {
          const isActive = active === link.toLowerCase();
          const Icon = NAV_ICONS[link];
          return (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              aria-label={link}
              className={`relative w-9 h-9 flex items-center justify-center rounded-xl border
                transition-all duration-200 cursor-pointer backdrop-blur-md
                ${
                  isActive
                    ? "border-sky-400/30 text-sky-400"
                    : "border-white/[0.07] text-slate-500 hover:text-slate-300 hover:border-white/15"
                }`}
            >
              {Icon && <Icon size={15} />}
              {isActive && (
                <span className="absolute top-1 right-1 w-1 h-1 rounded-full bg-sky-400" />
              )}
            </button>
          );
        })}
      </motion.div>

      {/*
        Open panel — AnimatePresence so it mounts/unmounts cleanly.
        Fixed position stays constant; only x + opacity animate.
        Sits to the right of the hamburger, same top as before.
      */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-panel"
            ref={panelRef}
            initial={{ x: -12, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -12, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-[52px] left-3 z-[58] md:hidden
              w-[190px] p-3 rounded-[20px] flex flex-col gap-1
              bg-[#06080f]/10 backdrop-blur-lg
              border border-white/[0.07] 
              shadow-[0_0_0_1px_rgba(255,255,255,0.07),0_8px_32px_rgba(0,0,0,0.55)]"
          >
            {NAV_LINKS.map((link, i) => {
              const isActive = active === link.toLowerCase();
              const Icon = NAV_ICONS[link];
              return (
                <motion.button
                  key={link}
                  initial={{ x: -6, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    duration: 0.2,
                    delay: i * 0.04,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  onClick={() => scrollTo(link)}
                  className={`flex items-center gap-3 w-full px-3 py-3 rounded-xl text-[13px]
                    text-left cursor-pointer bg-transparent transition-all duration-200
                    ${
                      isActive
                        ? "text-sky-400 border border-sky-400/30 bg-sky-400/[0.04]"
                        : "text-slate-300 border border-transparent hover:text-white hover:bg-white/[0.05]"
                    }`}
                >
                  {Icon && (
                    <Icon
                      size={16}
                      className={`flex-shrink-0 transition-colors duration-200
                        ${isActive ? "text-sky-400" : "text-slate-500"}`}
                    />
                  )}
                  {link}
                </motion.button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
