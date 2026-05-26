"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { NAV_LINKS } from "../data/portfolio";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = NAV_LINKS.map((l) => l.toLowerCase());
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (section) => {
    document
      .getElementById(section.toLowerCase())
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 h-[68px] flex items-center justify-between
        px-[clamp(20px,5vw,72px)] transition-all duration-400
        ${scrolled ? "bg-[#070b14]/90 backdrop-blur-xl border-b border-white/[0.06]" : "bg-transparent border-b border-transparent"}`}
    >
      {/* Logo */}
      <span className="font-display text-[18px] font-extrabold tracking-tight text-slate-100">
        Abdul <span className="text-sky-400">Saboor</span>
      </span>

      {/* Desktop links */}
      <ul className="hidden md:flex gap-9 list-none">
        {NAV_LINKS.map((link) => (
          <li key={link}>
            <button
              onClick={() => scrollTo(link)}
              className={`text-[13px] font-medium transition-colors duration-200 bg-transparent border-none cursor-pointer font-body
                ${active === link.toLowerCase() ? "text-sky-400" : "text-slate-400 hover:text-slate-100"}`}
            >
              {link}
            </button>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href="mailto:abdulsaboorcontact@gmail.com"
        className="text-[13px] font-bold text-[#070b14] bg-sky-400 hover:bg-sky-300
          px-5 py-2.5 rounded-lg transition-all duration-200 hover:-translate-y-px
          hover:shadow-[0_8px_30px_rgba(56,189,248,0.3)]"
      >
        Contact Me
      </a>
    </motion.nav>
  );
}
