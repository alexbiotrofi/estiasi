"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { num: "01", title: "Discovery", desc: "We start with a conversation. Your venue, your vision, your challenges. No pitch — just listening. A 30-minute call that defines everything that follows." },
  { num: "02", title: "Diagnosis", desc: "Full operational review. Gap analysis. A structured roadmap with clear deliverables, timelines, and costs. You know exactly what you're getting before we start." },
  { num: "03", title: "Build", desc: "Menus, SOPs, kitchen specs, training programmes, HACCP frameworks. Built on-site, in your kitchen, with your team. Not from a template. Not from a distance." },
  { num: "04", title: "Launch", desc: "Soft opening. Adjustment phase. Grand opening. We stay until the operation runs without us. That's the measure. When we leave, the system stays." },
];

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".proc-item").forEach((el, i) => {
        gsap.fromTo(el, { opacity: 0, y: 50 }, {
          opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
          delay: (i % 2) * 0.15,
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
        });
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="process" ref={ref} style={{ padding: "80px 0", position: "relative" }}>
      {/* Copper glow top */}
      <div style={{ position: "absolute", left: "50%", top: "-100px", transform: "translateX(-50%)", width: "2000px", height: "300px", background: "radial-gradient(50% 50% at 50% 50%, rgba(176,115,64,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />
      {/* Copper glow bottom */}
      <div style={{ position: "absolute", left: "50%", bottom: "-100px", transform: "translateX(-50%)", width: "2000px", height: "300px", background: "radial-gradient(50% 50% at 50% 50%, rgba(176,115,64,0.04) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div className="wrap" style={{ position: "relative" }}>
        <div className="flex justify-between items-start gap-8 flex-col md:flex-row" style={{ marginBottom: "3rem" }}>
          <div>
            <span className="label">How We Work</span>
            <span className="sect-num">[ 03 / 07 ]</span>
          </div>
          <div style={{ maxWidth: "550px" }}>
            <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, color: "var(--charcoal)", lineHeight: 1.2, letterSpacing: "-0.02em" }}>
              It&rsquo;s not a leap of faith.<br />It&rsquo;s a system.
            </p>
            <p style={{ fontSize: "0.85rem", fontWeight: 300, color: "var(--stone)", lineHeight: 1.8, marginTop: "1rem" }}>
              (Four phases. One outcome. Your venue, operational.)
            </p>
          </div>
        </div>

        <div className="proc-grid grid grid-cols-1 md:grid-cols-2" style={{ gap: "6px" }}>
          {steps.map((s) => (
            <div key={s.num} className="proc-item glass-card" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: "320px", background: "#fff", border: "1px solid var(--border)" }}>
              <div>
                <span style={{ fontFamily: "var(--font-display)", fontSize: "4rem", fontWeight: 400, color: "var(--copper)", lineHeight: 1, display: "block", marginBottom: "1.5rem", opacity: 0.3 }}>{s.num}</span>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 400, color: "var(--charcoal)", letterSpacing: "-0.01em", marginBottom: "1rem" }}>{s.title}</h3>
              </div>
              <p style={{ fontSize: "0.85rem", fontWeight: 300, color: "var(--stone-dark)", lineHeight: 1.8 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
