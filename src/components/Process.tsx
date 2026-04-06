"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    num: "01",
    title: "Discovery",
    desc: "We start with a conversation. Your venue, your vision, your challenges. No pitch — just listening.",
    detail: "30-minute call · Assessment · Scope",
    image: "/photos/restaurant-bar.jpg",
  },
  {
    num: "02",
    title: "Diagnosis",
    desc: "Full operational review. Gap analysis. A structured roadmap with clear deliverables and timelines.",
    detail: "Audit · Analysis · Roadmap",
    image: "/photos/chef-kitchen.jpg",
  },
  {
    num: "03",
    title: "Build",
    desc: "Menus, SOPs, kitchen specs, training programmes, HACCP frameworks. Built on-site, not from a template.",
    detail: "Execution · Documentation · Training",
    image: "/photos/kitchen-team.jpg",
  },
  {
    num: "04",
    title: "Launch",
    desc: "Soft opening. Adjustment. Grand opening. We stay until the operation runs without us.",
    detail: "Opening · Evaluation · Handover",
    image: "/photos/dining-room.jpg",
  },
];

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".proc-step").forEach((el) => {
        const bigNum = el.querySelector(".proc-bignum");
        const card = el.querySelector(".proc-card");
        const img = el.querySelector(".proc-img");

        if (bigNum) gsap.fromTo(bigNum, { opacity: 0, x: -60 }, {
          opacity: 1, x: 0, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 80%", once: true },
        });

        if (card) gsap.fromTo(card, { opacity: 0, y: 50 }, {
          opacity: 1, y: 0, duration: 0.8, ease: "power3.out", delay: 0.15,
          scrollTrigger: { trigger: el, start: "top 80%", once: true },
        });

        if (img) gsap.fromTo(img, { opacity: 0, scale: 1.08 }, {
          opacity: 1, scale: 1, duration: 1.2, ease: "power2.out", delay: 0.1,
          scrollTrigger: { trigger: el, start: "top 80%", once: true },
        });
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="process" ref={ref} style={{ padding: "8rem 0", position: "relative", overflow: "hidden" }}>
      <div className="absolute inset-0 z-0">
        <img src="/textures/marble-3.jpg" alt="" className="w-full h-full object-cover" style={{ opacity: 0.05 }} />
      </div>

      <div className="wrap-wide relative z-10">
        <div className="wrap reveal text-center" style={{ marginBottom: "6rem" }}>
          <span className="label">How We Work</span>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 400, color: "var(--charcoal)", lineHeight: 1.05 }}>
            Four phases.<br />One outcome.
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          {steps.map((step, i) => {
            const isEven = i % 2 === 0;
            return (
              <div key={step.num} className="proc-step" style={{ display: "grid", gridTemplateColumns: isEven ? "1fr 1fr" : "1fr 1fr", gap: 0, minHeight: 420, borderRadius: 8, overflow: "hidden", border: "1px solid var(--border)", direction: isEven ? "ltr" : "rtl" }}>
                {/* Image half */}
                <div className="proc-img" style={{ position: "relative", overflow: "hidden", direction: "ltr" }}>
                  <img src={step.image} alt={step.title} className="w-full h-full object-cover" style={{ minHeight: 420 }} />
                  {/* Huge number overlay on image */}
                  <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ fontFamily: "var(--font-logo)", fontSize: "clamp(10rem, 20vw, 16rem)", fontWeight: 400, color: "rgba(255,255,255,0.1)", lineHeight: 1, letterSpacing: "0.02em" }}>{step.num}</span>
                  </div>
                </div>

                {/* Content half */}
                <div className="proc-card" style={{ padding: "3.5rem 3rem", background: i === 2 ? "var(--charcoal-deep)" : "#fff", display: "flex", flexDirection: "column", justifyContent: "center", direction: "ltr" }}>
                  <div className="proc-bignum" style={{ fontFamily: "var(--font-logo)", fontSize: "clamp(4rem, 8vw, 6rem)", fontWeight: 400, letterSpacing: "0.02em", color: i === 2 ? "rgba(255,255,255,0.04)" : "var(--charcoal)", opacity: i === 2 ? 1 : 0.04, lineHeight: 0.85, marginBottom: "1rem" }}>{step.num}</div>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 400, color: i === 2 ? "var(--limestone)" : "var(--charcoal)", marginBottom: "1rem" }}>{step.title}</h3>
                  <div style={{ width: 32, height: 2, background: "var(--copper)", marginBottom: "1.25rem" }} />
                  <p style={{ fontSize: "1rem", fontWeight: 300, color: i === 2 ? "var(--stone)" : "var(--stone-dark)", lineHeight: 1.9, maxWidth: "38ch", marginBottom: "1.5rem" }}>{step.desc}</p>
                  <div style={{ fontSize: "0.52rem", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase" as const, color: "var(--copper)" }}>{step.detail}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
