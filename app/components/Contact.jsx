"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import GlowCard from "./GlowCard";
import SectionHeader from "./SectionHeader";
import { CONTACT_LINKS } from "../data/portfolio";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return;
    const sub = encodeURIComponent(form.subject || "Portfolio Inquiry");
    const body = encodeURIComponent(
      `Hi Abdul,\n\n${form.message}\n\n- ${form.name}\n${form.email}`,
    );
    window.open(
      `mailto:abdulsaboorcontact@gmail.com?subject=${sub}&body=${body}`,
    );
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const inputCls =
    "bg-[#0a0f1e] border border-white/15 rounded-xl px-4 py-3 text-[14px] text-slate-100 " +
    "placeholder:text-slate-500 w-full outline-none focus:border-sky-400/70 " +
    "transition-colors duration-200 font-body";

  return (
    <section
      id="contact"
      className="px-[clamp(20px,6vw,80px)] py-16 sm:py-20 md:py-28 border-t border-white/[0.08]"
    >
      <div className="max-w-[1100px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionHeader
            title={
              <>
                Let&apos;s work <span className="text-sky-400">together</span>
              </>
            }
            subtitle="Have a project or role in mind? I reply within 24 hours."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Form */}
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    label: "Name",
                    key: "name",
                    placeholder: "Abdul Saboor",
                    type: "text",
                  },
                  {
                    label: "Email",
                    key: "email",
                    placeholder: "hello@email.com",
                    type: "email",
                  },
                ].map((f) => (
                  <div key={f.key} className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-mono text-slate-300 tracking-widest uppercase">
                      {f.label}
                    </label>
                    <input
                      type={f.type}
                      className={inputCls}
                      placeholder={f.placeholder}
                      value={form[f.key]}
                      onChange={(e) =>
                        setForm({ ...form, [f.key]: e.target.value })
                      }
                    />
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-mono text-slate-300 tracking-widest uppercase">
                  Subject
                </label>
                <input
                  className={inputCls}
                  placeholder="Project inquiry"
                  value={form.subject}
                  onChange={(e) =>
                    setForm({ ...form, subject: e.target.value })
                  }
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-mono text-slate-300 tracking-widest uppercase">
                  Message
                </label>
                <textarea
                  className={`${inputCls} resize-y min-h-[130px]`}
                  placeholder="Tell me about your project..."
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                />
              </div>

              <button
                onClick={handleSubmit}
                className={`w-full py-3.5 rounded-xl text-[14px] font-bold transition-all duration-300
                  active:scale-[0.98]
                  ${
                    sent
                      ? "bg-emerald-400 text-[#06080f]"
                      : "bg-sky-400 hover:bg-sky-300 text-[#06080f] shadow-[0_8px_28px_rgba(56,189,248,0.2)] hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(56,189,248,0.35)]"
                  }`}
              >
                {sent ? "Opening email client" : "Send message →"}
              </button>
            </div>

            {/* Contact links */}
            <div className="flex flex-col gap-3">
              {CONTACT_LINKS.map((c) => (
                <GlowCard
                  key={c.label}
                  tiltLevel={0.02}
                  glowColor="rgba(56,189,248,0.08)"
                  className="group bg-[#0a0f1e] border border-white/12 rounded-2xl
                    hover:border-sky-400/40 transition-all duration-250"
                >
                  <a
                    href={c.href}
                    target={
                      c.href.startsWith("mailto") || c.href.startsWith("tel")
                        ? undefined
                        : "_blank"
                    }
                    rel="noopener noreferrer"
                    className="flex justify-between items-center px-5 py-4 no-underline"
                  >
                    <div>
                      <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest mb-1">
                        {c.label}
                      </div>
                      <div className="text-[14px] font-medium text-slate-100">
                        {c.value}
                      </div>
                    </div>
                    <span
                      className="text-slate-400 group-hover:text-sky-400
                        group-hover:translate-x-0.5 group-hover:-translate-y-0.5
                        transition-all duration-200 text-lg"
                    >
                      ↗
                    </span>
                  </a>
                </GlowCard>
              ))}

              {/* Availability indicator */}
              <GlowCard
                tiltLevel={0.02}
                glowColor="rgba(52,211,153,0.1)"
                className="mt-1 p-5 rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.04]"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[11px] font-mono text-emerald-400 tracking-wide">
                    Currently available
                  </span>
                </div>
                <p className="text-[13px] text-slate-300 leading-relaxed">
                  Open to full-time roles and ambitious freelance projects.
                  Response guaranteed within 24h.
                </p>
              </GlowCard>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
