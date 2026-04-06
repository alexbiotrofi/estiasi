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
    image: "/photos/restaurant-bar.jpg",
    align: "left" as const,
  },
  {
    num: "02",
    title: "Diagnosis",
    desc: "We assess what exists and what's needed. Full operational review, gap analysis, and a structured roadmap with clear deliverables.",
    detail: "Operational audit · Gap analysis · Deliverable roadmap",
    image: "/photos/chef-kitchen.jpg",
    align: "right" as const,
  },
  {
    num: "03",
    title: "Build",
    desc: "We do the work. Menus, SOPs, kitchen specs, training programmes, HACCP frameworks — built on-site, not from a template.",
    detail: "On-site execution · Documentation · Staff training",
    image: "/photos/kitchen-team.jpg",
    align: "left" as const,
  },
  {
    num: "04",
    title: "Launch",
    desc: "Soft opening, adjustment phase, grand opening. We stay until the operation runs without us. That's the measure of success.",
    detail: "Soft opening support · Evaluation · Grand opening · Handover",
    image: "/photos/dining-room.jpg",
    align: "right" as const,
  },
];

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".process-step").forEach((step) => {
        const num = step.querySelector(".process-num");
        const content = step.querySelector(".process-content");
        const img = step.querySelector(".process-img");

        if (num) gsap.fromTo(num, { opacity: 0, scale: 0.7, y: 30 }, {
          opacity: 1, scale: 1, y: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: step, start: "top 80%", once: true },
        });

        if (content) gsap.fromTo(content, { opacity: 0, y: 40 }, {
          opacity: 1, y: 0, duration: 0.8, ease: "power3.out", delay: 0.15,
          scrollTrigger: { trigger: step, start: "top 80%", once: true },
        });

        if (img) gsap.fromTo(img, { opacity: 0, scale: 1.05 }, {
          opacity: 1, scale: 1, duration: 1, ease: "power2.out", delay: 0.25,
          scrollTrigger: { trigger: step, start: "top 80%", once: true },
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="process" ref={containerRef} style={{ padding: "8rem 0", position: "relative", overflow: "hidden" }}>
      {/* Subtle marble background */}
      <div className="absolute inset-0 z-0">
        <img src="/textures/marble-3.jpg" alt="" className="w-full h-full object-cover" style={{ opacity: 0.05 }} />
      </div>

      <div className="wrap relative z-10">
        <div className="reveal text-center" style={{ marginBottom: "5rem" }}>
          <span className="label">How We Work</span>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 400, color: "var(--charcoal)", lineHeight: 1.05 }}>
            Four phases.<br />One outcome.
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "6rem" }}>
          {steps.map((step) => (
            <div
              key={step.num}
              className="process-step grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
              style={{ direction: step.align === "right" ? "rtl" : "ltr" }}
            >
              {/* Image */}
              <div className="process-img" style={{ direction: "ltr", borderRadius: 8, overflow: "hidden", position: "relative", height: 360 }}>
                <img src={step.image} alt={step.title} className="w-full h-full object-cover" />
                {/* Big number overlay */}
                <div style={{ position: "absolute", bottom: "1rem", right: "1.5rem", fontFamily: "var(--font-logo)", fontSize: "7rem", fontWeight: 400, color: "rgba(255,255,255,0.12)", lineHeight: 1 }}>{step.num}</div>
              </div>

              {/* Content */}
              <div className="process-content" style={{ direction: "ltr" }}>
                <span style={{ fontFamily: "var(--font-logo)", fontSize: "clamp(4rem, 8vw, 6rem)", fontWeight: 400, letterSpacing: "0.02em", color: "var(--charcoal)", opacity: 0.06, display: "block", lineHeight: 0.85, marginBottom: "0.5rem" }}>{step.num}</span>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 400, color: "var(--charcoal)", marginBottom: "1rem" }}>{step.title}</h3>
                <div style={{ width: 32, height: 2, background: "var(--copper)", marginBottom: "1rem" }} />
                <p style={{ fontSize: "0.95rem", fontWeight: 300, color: "var(--stone-dark)", lineHeight: 1.9, maxWidth: "40ch", marginBottom: "1.25rem" }}>{step.desc}</p>
                <div style={{ fontSize: "0.5rem", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "var(--copper)", lineHeight: 2 }}>{step.detail}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
