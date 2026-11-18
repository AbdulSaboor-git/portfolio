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
  const navRef = useRef(null);

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

  /* ── close on outside click ── */
  useEffect(() => {
    if (!open) return;
    const handler = (e) => {
      if (
        navRef.current &&
        !navRef.current.contains(e.target) &&
        !e.target.closest("#nav-hamburger")
      ) {
        setOpen(false);
      }
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
          DESKTOP - centred floating pill
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
                ? "bg-[#0a0f1e]/95 backdrop-blur-2xl border-white/15 shadow-[0_8px_40px_rgba(0,0,0,0.6)]"
                : "bg-[#0a0f1e]/80 backdrop-blur-xl border-white/12 shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
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
                    className="absolute inset-0 rounded-full bg-sky-400/15 border border-sky-400/35"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                {Icon && (
                  <Icon
                    size={13}
                    className={`relative z-10 transition-colors duration-200
                      ${isActive ? "text-sky-400" : "text-slate-400 group-hover:text-white"}`}
                  />
                )}
                <span
                  className={`relative z-10 transition-colors duration-200
                  ${isActive ? "text-white" : "text-slate-300 group-hover:text-white"}`}
                >
                  {link}
                </span>
              </button>
            );
          })}
        </div>
      </motion.div>

      {/* ════════════════════════════════════════
          MOBILE - morphing icon rail → full label menu
      ════════════════════════════════════════ */}

      {/* Subtle backdrop when expanded */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[57] bg-black/45 backdrop-blur-[2px] md:hidden"
          />
        )}
      </AnimatePresence>

      {/* Hamburger toggle */}
      <button
        id="nav-hamburger"
        onClick={() => setOpen((o) => !o)}
        aria-label="Toggle menu"
        aria-expanded={open}
        className={`fixed top-3 left-3 z-[60] md:hidden
          w-11 h-9 flex items-center justify-center rounded-xl
          border transition-all duration-300 backdrop-blur-md
          shadow-[0_4px_16px_rgba(0,0,0,0.45)]
          ${
            open
              ? "bg-[#0d1526] border-sky-400/45 text-sky-400"
              : "bg-[#0a0f1e]/90 border-white/15 text-slate-200 hover:text-white hover:border-white/30"
          }`}
      >
        <motion.div
          animate={{ rotate: open ? 90 : 0, scale: open ? 0.92 : 1 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          {open ? <HiXMark size={18} /> : <HiBars3 size={18} />}
        </motion.div>
      </button>

      {/* Single unified morphing nav rail */}
      <motion.nav
        ref={navRef}
        aria-label="Mobile navigation"
        initial={false}
        animate={{
          width: open ? 184 : 44,
          padding: open ? 8 : 4,
        }}
        transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-[54px] left-3 z-[59] md:hidden flex flex-col gap-1.5 overflow-hidden
          rounded-xl border backdrop-blur-xl transition-colors duration-300
          ${
            open
              ? "opacity-80 bg-[#0a0f1e]/95 border-white/15 shadow-[0_14px_44px_rgba(0,0,0,0.75)]"
              : "opacity-70 bg-[#0a0f1e]/85 border-white/15 shadow-[0_6px_24px_rgba(0,0,0,0.45)]"
          }`}
      >
        {NAV_LINKS.map((link, i) => {
          const isActive = active === link.toLowerCase();
          const Icon = NAV_ICONS[link];
          return (
            <motion.button
              key={link}
              layout
              onClick={() => scrollTo(link)}
              aria-label={link}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className={`relative flex items-center h-9 rounded-xl border transition-colors duration-200 cursor-pointer
                ${open ? "px-3 gap-3 w-full justify-start" : "px-0 w-9 justify-center"}
                ${
                  isActive
                    ? "bg-sky-400/15 border-sky-400/45 text-sky-400 shadow-[0_0_14px_rgba(56,189,248,0.16)]"
                    : "bg-transparent border-transparent text-slate-300 hover:text-white hover:bg-white/[0.07]"
                }`}
            >
              {Icon && (
                <Icon
                  size={15}
                  className={`flex-shrink-0 transition-colors duration-200
                    ${isActive ? "text-sky-400" : "text-slate-300"}`}
                />
              )}

              <AnimatePresence initial={false}>
                {open && (
                  <motion.span
                    initial={{ opacity: 0, x: -6, width: 0 }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      width: "auto",
                      transition: {
                        duration: 0.22,
                        delay: i * 0.03,
                        ease: [0.22, 1, 0.36, 1],
                      },
                    }}
                    exit={{
                      opacity: 0,
                      x: -4,
                      width: 0,
                      transition: { duration: 0.14 },
                    }}
                    className={`text-[13px] font-medium whitespace-nowrap overflow-hidden
                      ${isActive ? "text-sky-400" : "text-slate-200"}`}
                  >
                    {link}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          );
        })}
      </motion.nav>
    </>
  );
}
