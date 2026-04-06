"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    num: "01",
    title: "Discovery",
    desc: "We start with a conversation. Understand your venue, your vision, your challenges. No pitch, no pressure — just listening.",
    detail: "30-minute discovery call · Venue assessment · Scope definition",
    texture: "/textures/marble-1.jpg",
  },
  {
    num: "02",
    title: "Diagnosis",
    desc: "We assess what exists and what's needed. Full operational review, gap analysis, and a structured roadmap with clear deliverables.",
    detail: "Operational audit · Gap analysis · Deliverable roadmap",
    texture: "/textures/marble-3.jpg",
  },
  {
    num: "03",
    title: "Build",
    desc: "We do the work. Menus, SOPs, kitchen specs, training programmes, HACCP frameworks — built on-site, not from a template.",
    detail: "On-site execution · Documentation · Staff training",
    texture: "/textures/dark-stone.jpg",
  },
  {
    num: "04",
    title: "Launch",
    desc: "Soft opening, adjustment phase, grand opening. We stay until the operation runs without us. That's the measure of success.",
    detail: "Soft opening support · Evaluation · Grand opening · Handover",
    texture: "/textures/marble-1.jpg",
  },
];

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".process-step").forEach((step, i) => {
        const num = step.querySelector(".process-num");
        const content = step.querySelector(".process-content");
        const line = step.querySelector(".process-line");

        gsap.fromTo(num, { opacity: 0, scale: 0.8 }, {
          opacity: 1, scale: 1, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: step, start: "top 80%", once: true },
        });

        gsap.fromTo(content, { opacity: 0, x: 40 }, {
          opacity: 1, x: 0, duration: 0.8, ease: "power3.out", delay: 0.2,
          scrollTrigger: { trigger: step, start: "top 80%", once: true },
        });

        if (line) {
          gsap.fromTo(line, { scaleY: 0 }, {
            scaleY: 1, duration: 0.6, ease: "power2.out", delay: 0.4,
            scrollTrigger: { trigger: step, start: "top 80%", once: true },
          });
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="process" ref={containerRef} style={{ padding: "8rem 0", position: "relative", overflow: "hidden" }}>
      {/* Subtle marble background */}
      <div className="absolute inset-0 z-0">
        <img src="/textures/marble-3.jpg" alt="" className="w-full h-full object-cover" style={{ opacity: 0.06 }} />
      </div>

      <div className="wrap relative z-10">
        <div className="reveal" style={{ marginBottom: "5rem" }}>
          <span className="label">How We Work</span>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 400, color: "var(--charcoal)", lineHeight: 1.05 }}>
            Four phases.<br />One outcome.
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {steps.map((step, i) => (
            <div key={step.num} className="process-step" style={{ display: "grid", gridTemplateColumns: "140px 1fr", gap: "2rem", position: "relative", paddingBottom: i < 3 ? "4rem" : "0" }}>
              {/* Left — Big number + line */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div className="process-num" style={{ position: "relative", width: 100, height: 100, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 8, overflow: "hidden" }}>
                  <img src={step.texture} alt="" className="absolute inset-0 w-full h-full object-cover" style={{ opacity: step.texture.includes("dark") ? 0.6 : 0.3 }} />
                  <div className="absolute inset-0" style={{ background: step.texture.includes("dark") ? "rgba(0,0,0,0.3)" : "rgba(255,255,255,0.4)" }} />
                  <span style={{ position: "relative", zIndex: 1, fontFamily: "var(--font-logo)", fontSize: "2.5rem", fontWeight: 400, color: step.texture.includes("dark") ? "var(--limestone)" : "var(--charcoal)", letterSpacing: "0.02em" }}>{step.num}</span>
                </div>
                {i < 3 && (
                  <div className="process-line" style={{ width: 1, flex: 1, background: "var(--copper)", opacity: 0.2, marginTop: "0.75rem", transformOrigin: "top" }} />
                )}
              </div>

              {/* Right — Content */}
              <div className="process-content" style={{ paddingTop: "0.75rem" }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 400, color: "var(--charcoal)", marginBottom: "0.75rem" }}>{step.title}</h3>
                <p style={{ fontSize: "0.95rem", fontWeight: 300, color: "var(--stone-dark)", lineHeight: 1.85, maxWidth: "50ch", marginBottom: "1rem" }}>{step.desc}</p>
                <div style={{ fontSize: "0.5rem", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "var(--copper)", lineHeight: 1.8 }}>{step.detail}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
