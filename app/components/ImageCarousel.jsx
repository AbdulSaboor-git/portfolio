"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";

/* ─── Lightbox ─────────────────────────────────────────────────────────── */
function Lightbox({ images, startIdx, onClose }) {
  const [idx, setIdx] = useState(startIdx);
  const [dir, setDir] = useState(1);

  const go = useCallback(
    (d) => {
      setDir(d);
      setIdx((i) => (i + d + images.length) % images.length);
    },
    [images.length]
  );

  // Keyboard navigation
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [go, onClose]);

  // Prevent scroll bleed
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const slideVariants = {
    enter: (d) => ({ x: d > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1, transition: { duration: 0.32, ease: [0.22, 1, 0.36, 1] } },
    exit:   (d) => ({ x: d > 0 ? "-100%" : "100%", opacity: 0, transition: { duration: 0.22 } }),
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[200] flex flex-col bg-black/95 backdrop-blur-2xl"
      onClick={onClose}
    >
      {/* Top bar */}
      <div
        className="flex items-center justify-between px-4 sm:px-6 py-4 flex-shrink-0"
        onClick={(e) => e.stopPropagation()}
      >
        <span className="text-[12px] font-mono text-slate-500 tabular-nums">
          {idx + 1} / {images.length}
        </span>
        <button
          onClick={onClose}
          className="w-9 h-9 rounded-xl bg-white/[0.08] border border-white/10 text-slate-300
            hover:text-white hover:bg-white/15 flex items-center justify-center
            transition-all duration-200 active:scale-95"
        >
          <X size={16} />
        </button>
      </div>

      {/* Image area */}
      <div
        className="relative flex-1 flex items-center justify-center overflow-hidden px-4 sm:px-16"
        onClick={(e) => e.stopPropagation()}
      >
        <AnimatePresence custom={dir} initial={false}>
          <motion.img
            key={idx}
            src={images[idx]}
            custom={dir}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute max-w-full max-h-full object-contain rounded-xl
              select-none pointer-events-none"
            style={{ maxHeight: "calc(100vh - 160px)" }}
            alt={`Screenshot ${idx + 1}`}
            draggable={false}
          />
        </AnimatePresence>

        {/* Prev / Next */}
        {images.length > 1 && (
          <>
            <button
              onClick={() => go(-1)}
              className="absolute left-2 sm:left-4 w-11 h-11 rounded-xl
                bg-[#070b14]/90 border border-white/10 text-slate-300 hover:text-white
                flex items-center justify-center z-10 transition-all hover:bg-[#0d1526]
                hover:border-white/20 active:scale-95"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => go(1)}
              className="absolute right-2 sm:right-4 w-11 h-11 rounded-xl
                bg-[#070b14]/90 border border-white/10 text-slate-300 hover:text-white
                flex items-center justify-center z-10 transition-all hover:bg-[#0d1526]
                hover:border-white/20 active:scale-95"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}
      </div>

      {/* Thumbnail strip */}
      {images.length > 1 && (
        <div
          className="flex-shrink-0 flex items-center justify-center gap-2 px-4 py-4 overflow-x-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {images.map((src, i) => (
            <button
              key={i}
              onClick={() => { setDir(i > idx ? 1 : -1); setIdx(i); }}
              className={`relative flex-shrink-0 w-12 h-9 sm:w-16 sm:h-12 rounded-lg overflow-hidden
                border-2 transition-all duration-200 active:scale-95
                ${i === idx
                  ? "border-sky-400 opacity-100 shadow-[0_0_12px_rgba(56,189,248,0.4)]"
                  : "border-white/10 opacity-40 hover:opacity-70 hover:border-white/30"
                }`}
            >
              <img src={src} alt="" className="w-full h-full object-cover" draggable={false} />
            </button>
          ))}
        </div>
      )}

      {/* Swipe hint — mobile only */}
      <p className="text-center text-[11px] text-slate-700 pb-3 flex-shrink-0 sm:hidden">
        swipe or tap outside to close
      </p>
    </motion.div>
  );
}

/* ─── Carousel ──────────────────────────────────────────────────────────── */
export default function ImageCarousel({ images }) {
  const [idx, setIdx]         = useState(0);
  const [dir, setDir]         = useState(1);
  const [lightbox, setLightbox] = useState(false);

  if (!images || images.length === 0) return null;

  const go = (d) => {
    setDir(d);
    setIdx((i) => (i + d + images.length) % images.length);
  };

  const slideVariants = {
    enter:  (d) => ({ x: d > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1, transition: { duration: 0.38, ease: [0.22, 1, 0.36, 1] } },
    exit:   (d) => ({ x: d > 0 ? "-100%" : "100%", opacity: 0, transition: { duration: 0.28 } }),
  };

  return (
    <>
      {/* Inline carousel */}
      <div className="relative w-full rounded-xl overflow-hidden bg-black aspect-video mb-5 group">
        <AnimatePresence custom={dir} initial={false}>
          <motion.img
            key={idx}
            src={images[idx]}
            custom={dir}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 w-full h-full object-contain object-center"
            alt={`Screenshot ${idx + 1}`}
          />
        </AnimatePresence>

        {/* Expand-to-lightbox button */}
        <button
          onClick={() => setLightbox(true)}
          className="absolute top-2.5 right-2.5 w-9 h-9 rounded-lg
            bg-[#070b14]/80 border border-white/10 text-slate-400
            hover:text-white hover:bg-[#0d1526] hover:border-white/20
            flex items-center justify-center z-10 transition-all duration-200
            opacity-0 group-hover:opacity-100 active:scale-95"
          title="View fullscreen"
        >
          <ZoomIn size={15} />
        </button>

        {/* Always-visible tap target on mobile (no hover) */}
        <button
          onClick={() => setLightbox(true)}
          className="absolute inset-0 z-[5] sm:hidden"
          aria-label="View fullscreen"
        />

        {images.length > 1 && (
          <>
            <button
              onClick={(e) => { e.stopPropagation(); go(-1); }}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-lg
                bg-[#070b14]/80 border border-white/10 text-slate-300 hover:text-white
                flex items-center justify-center z-10 transition-all hover:bg-[#070b14]
                active:scale-95"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); go(1); }}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-lg
                bg-[#070b14]/80 border border-white/10 text-slate-300 hover:text-white
                flex items-center justify-center z-10 transition-all hover:bg-[#070b14]
                active:scale-95"
            >
              <ChevronRight size={18} />
            </button>

            {/* Dots — bigger tap targets */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1 z-10">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => {
                    e.stopPropagation();
                    setDir(i > idx ? 1 : -1);
                    setIdx(i);
                  }}
                  className="p-2 -m-2 flex items-center justify-center"
                  aria-label={`Go to image ${i + 1}`}
                >
                  <span
                    className={`block rounded-full transition-all duration-300
                      ${i === idx
                        ? "w-5 h-1.5 bg-sky-400"
                        : "w-1.5 h-1.5 bg-sky-400/20 border border-sky-400/50 hover:bg-white/50"
                      }`}
                  />
                </button>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Lightbox overlay */}
      <AnimatePresence>
        {lightbox && (
          <Lightbox
            images={images}
            startIdx={idx}
            onClose={() => setLightbox(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
