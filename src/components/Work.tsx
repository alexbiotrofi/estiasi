"use client";

import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    num: "01",
    name: "Grain",
    location: "Mediterranean, Holborn — London",
    type: "Full Launch",
    desc: "End-to-end launch consultancy for a modern Mediterranean restaurant. Concept positioning through to grand opening execution.",
    scope: ["Concept & Positioning", "Kitchen Design", "Menu Engineering", "Staff Training", "Grand Opening"],
    image: "/textures/marble-1.jpg",
  },
  {
    num: "02",
    name: "Filos by Halepi",
    location: "London",
    type: "Restaurant Support",
    desc: "Operational diagnostic and improvement for an established Greek dining concept. Full review, menu reimagination, procedural redesign.",
    scope: ["Operational Review", "Menu Engineering", "Procedure Redesign", "Staff Retraining"],
    image: "/textures/marble-3.jpg",
  },
  {
    num: "03",
    name: "Mesa Stone",
    location: "Fine Dining",
    type: "Full Launch",
    desc: "Concept creation and full operational build for a premium fine-dining venue. From blank page to opening night.",
    scope: ["Fine Dining Concept", "HACCP Frameworks", "SOP Documentation", "Phased Opening"],
    image: "/textures/dark-stone.jpg",
  },
  {
    num: "04",
    name: "Mauro Colagreco",
    location: "The OWO, London",
    type: "Collaboration",
    desc: "Supporting the culinary programme at one of London's most prestigious hospitality destinations. World-class standards.",
    scope: ["Fine Dining Operations", "Service Delivery", "Quality Systems"],
    image: "/textures/marble-1.jpg",
  },
];

export default function Work() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const p = projects[active];

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".work-card").forEach((card, i) => {
        gsap.fromTo(card, { opacity: 0, y: 40 }, {
          opacity: 1, y: 0, duration: 0.6, ease: "power3.out",
          scrollTrigger: { trigger: card, start: "top 85%", once: true },
          delay: i * 0.1,
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="work" ref={sectionRef} style={{ padding: "8rem 0", background: "var(--limestone)" }}>
      <div className="wrap">
        <div className="reveal" style={{ marginBottom: "4rem" }}>
          <span className="label">Selected Work</span>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 400, color: "var(--charcoal)", lineHeight: 1.05 }}>
            Venues we&rsquo;ve built,<br />supported, transformed.
          </h2>
        </div>

        {/* Project selector tabs */}
        <div className="flex gap-1 mb-8 overflow-x-auto reveal" style={{ transitionDelay: "0.15s" }}>
          {projects.map((proj, i) => (
            <button
              key={proj.name}
              onClick={() => setActive(i)}
              className="work-card"
              style={{
                padding: "0.75rem 1.5rem",
                background: active === i ? "var(--charcoal)" : "transparent",
                color: active === i ? "var(--limestone)" : "var(--stone-dark)",
                border: active === i ? "none" : "1px solid var(--border-s)",
                borderRadius: 4,
                cursor: "pointer",
                fontSize: "0.55rem",
                fontWeight: 500,
                letterSpacing: "0.15em",
                textTransform: "uppercase" as const,
                fontFamily: "var(--font-body)",
                transition: "all 0.3s",
                whiteSpace: "nowrap" as const,
              }}
            >
              {proj.name}
            </button>
          ))}
        </div>

        {/* Active project — full width card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 reveal" style={{ border: "1px solid var(--border)", borderRadius: 8, overflow: "hidden", transitionDelay: "0.2s" }}>
          {/* Image side */}
          <div style={{ position: "relative", minHeight: 400, overflow: "hidden" }}>
            <img
              src={p.image}
              alt={p.name}
              className="w-full h-full object-cover"
              style={{ position: "absolute", inset: 0, transition: "opacity 0.5s" }}
              key={p.name}
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, transparent 50%, rgba(0,0,0,0.1) 100%)" }} />
            <div style={{ position: "absolute", top: "1.5rem", left: "1.5rem" }}>
              <span style={{ fontSize: "0.45rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "#fff", background: "rgba(0,0,0,0.5)", backdropFilter: "blur(4px)", padding: "0.35rem 0.75rem", borderRadius: 3 }}>{p.type}</span>
            </div>
            {/* Big number overlay */}
            <div style={{ position: "absolute", bottom: "1.5rem", right: "2rem", fontFamily: "var(--font-logo)", fontSize: "8rem", fontWeight: 400, color: "rgba(255,255,255,0.1)", lineHeight: 1 }}>{p.num}</div>
          </div>

          {/* Content side */}
          <div style={{ padding: "3rem", background: "#fff", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <span style={{ fontSize: "0.45rem", fontWeight: 500, letterSpacing: "0.3em", textTransform: "uppercase" as const, color: "var(--copper)", marginBottom: "1rem", display: "block" }}>{p.location}</span>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 400, color: "var(--charcoal)", marginBottom: "1rem", lineHeight: 1.1 }}>{p.name}</h3>
            <p style={{ fontSize: "0.95rem", fontWeight: 300, color: "var(--stone-dark)", lineHeight: 1.85, marginBottom: "2rem" }}>{p.desc}</p>

            <div style={{ borderTop: "1px solid var(--border)", paddingTop: "1.5rem" }}>
              <span style={{ fontSize: "0.42rem", fontWeight: 600, letterSpacing: "0.3em", textTransform: "uppercase" as const, color: "var(--stone)", marginBottom: "0.75rem", display: "block" }}>Scope</span>
              <div className="flex flex-wrap gap-2">
                {p.scope.map(s => (
                  <span key={s} style={{ fontSize: "0.5rem", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "var(--charcoal)", border: "1px solid var(--border-s)", padding: "0.35rem 0.7rem", borderRadius: 3 }}>{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
