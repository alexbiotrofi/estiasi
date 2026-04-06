"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    num: "01",
    name: "Grain",
    location: "Mediterranean, Holborn — London",
    type: "Full Launch",
    tagline: "From blank page to grand opening.",
    desc: "End-to-end launch consultancy for a modern Mediterranean restaurant. We built the concept, designed the kitchen, engineered the menu, trained the team, and stood beside them on opening night.",
    scope: ["Concept & Positioning", "Kitchen Design", "Menu Engineering", "Staff Training", "Grand Opening"],
    images: ["/photos/restaurant-interior.jpg", "/photos/fine-dining-plate.jpg", "/photos/food-overhead.jpg"],
    texture: "/textures/marble-1.jpg",
  },
  {
    num: "02",
    name: "Filos by Halepi",
    location: "London",
    type: "Restaurant Support",
    tagline: "A dining concept reimagined.",
    desc: "An established Greek restaurant needed a reset. We conducted a full operational diagnostic, reimagined the menu, redesigned service procedures, and retrained the team.",
    scope: ["Operational Review", "Menu Engineering", "Procedure Redesign", "Staff Retraining"],
    images: ["/photos/restaurant-ambience.jpg", "/photos/chef-plating.jpg", "/photos/kitchen-team.jpg"],
    texture: "/textures/marble-3.jpg",
  },
  {
    num: "03",
    name: "Mesa Stone",
    location: "Fine Dining",
    type: "Full Launch",
    tagline: "Premium fine dining, built from zero.",
    desc: "Concept creation and full operational build for a premium fine-dining venue. Every detail considered — from kitchen specification and HACCP frameworks to SOP documentation.",
    scope: ["Fine Dining Concept", "HACCP Frameworks", "SOP Documentation", "Phased Opening"],
    images: ["/photos/dining-room.jpg", "/photos/chef-kitchen.jpg", "/photos/fine-dining-plate.jpg"],
    texture: "/textures/dark-stone.jpg",
  },
  {
    num: "04",
    name: "Mauro Colagreco",
    location: "The OWO, London",
    type: "Collaboration",
    tagline: "World-class standards. No compromise.",
    desc: "Supporting the culinary programme at one of London's most prestigious new hospitality destinations. World-class fine dining operations.",
    scope: ["Fine Dining Operations", "Service Delivery", "Quality Systems"],
    images: ["/photos/restaurant-bar.jpg", "/photos/chef-portrait.jpg", "/photos/restaurant-interior.jpg"],
    texture: "/textures/marble-1.jpg",
  },
];

export default function Work() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray<HTMLElement>(".work-panel");
      panels.forEach((panel, i) => {
        ScrollTrigger.create({
          trigger: panel,
          start: "top top",
          end: "+=100%",
          pin: true,
          pinSpacing: true,
          onEnter: () => setActiveIndex(i),
          onEnterBack: () => setActiveIndex(i),
        });

        const content = panel.querySelector(".work-panel-content");
        const img2 = panel.querySelector(".work-img-2");
        const img3 = panel.querySelector(".work-img-3");

        if (content) gsap.fromTo(content, { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: panel, start: "top 60%", once: true } });
        if (img2) gsap.fromTo(img2, { opacity: 0, scale: 1.1 }, { opacity: 1, scale: 1, duration: 1, ease: "power2.out", scrollTrigger: { trigger: panel, start: "top 40%", end: "bottom top", scrub: 1 } });
        if (img3) gsap.fromTo(img3, { opacity: 0, x: 30 }, { opacity: 1, x: 0, duration: 1, ease: "power2.out", scrollTrigger: { trigger: panel, start: "top 30%", end: "bottom top", scrub: 1 } });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="work" ref={containerRef}>
      {/* Section header on marble */}
      <div style={{ padding: "8rem 0 4rem", position: "relative", overflow: "hidden" }}>
        <div className="absolute inset-0 z-0">
          <img src="/textures/marble-1.jpg" alt="" className="w-full h-full object-cover" style={{ opacity: 0.2 }} />
        </div>
        <div className="wrap relative z-10 text-center reveal">
          <span className="label">Selected Work</span>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 400, color: "var(--charcoal)", lineHeight: 1.05 }}>
            Venues we&rsquo;ve built,<br />supported, transformed.
          </h2>
          <p style={{ marginTop: "1.25rem", fontSize: "0.95rem", fontWeight: 300, color: "var(--stone-dark)", lineHeight: 1.85, maxWidth: "48ch", margin: "1.25rem auto 0" }}>
            Scroll through the stories behind the spaces.
          </p>
        </div>
      </div>

      {/* Pinned project panels — each has its material texture as base */}
      {projects.map((p, i) => (
        <div key={p.name} className="work-panel" style={{ height: "100vh", position: "relative", overflow: "hidden" }}>
          {/* Material texture as the base layer */}
          <div className="absolute inset-0 z-0">
            <img src={p.texture} alt="" className="w-full h-full object-cover" style={{ opacity: p.texture.includes("dark") ? 0.5 : 0.2 }} />
            <div className="absolute inset-0" style={{ background: p.texture.includes("dark") ? "rgba(28,28,26,0.6)" : "rgba(244,241,236,0.5)" }} />
          </div>

          {/* Photos floating on the material — right side */}
          <div className="work-img-2 absolute hidden md:block" style={{ top: "10%", right: "4%", width: "30%", aspectRatio: "3/4", borderRadius: 6, overflow: "hidden", boxShadow: "0 24px 64px rgba(0,0,0,0.2)", zIndex: 2 }}>
            <img src={p.images[0]} alt="" className="w-full h-full object-cover" />
          </div>

          <div className="work-img-3 absolute hidden md:block" style={{ bottom: "12%", right: "20%", width: "22%", aspectRatio: "4/3", borderRadius: 6, overflow: "hidden", boxShadow: "0 16px 48px rgba(0,0,0,0.18)", zIndex: 2 }}>
            <img src={p.images[1]} alt="" className="w-full h-full object-cover" />
          </div>

          {/* Small accent photo */}
          <div className="absolute hidden md:block" style={{ top: "55%", right: "8%", width: "14%", aspectRatio: "1/1", borderRadius: 6, overflow: "hidden", boxShadow: "0 12px 36px rgba(0,0,0,0.15)", zIndex: 2, opacity: 0.9 }}>
            <img src={p.images[2]} alt="" className="w-full h-full object-cover" />
          </div>

          {/* Content — left side */}
          <div className="work-panel-content absolute z-10" style={{ top: 0, left: 0, bottom: 0, display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 5%", maxWidth: "48%" }}>
            <div className="flex items-center gap-3" style={{ marginBottom: "1rem" }}>
              <span style={{ fontFamily: "var(--font-logo)", fontSize: "clamp(3rem, 6vw, 5rem)", fontWeight: 400, letterSpacing: "0.02em", color: p.texture.includes("dark") ? "rgba(255,255,255,0.06)" : "rgba(42,42,40,0.06)", lineHeight: 1 }}>{p.num}</span>
              <span style={{ fontSize: "0.42rem", fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase" as const, color: "var(--copper)", background: p.texture.includes("dark") ? "rgba(0,0,0,0.3)" : "rgba(255,255,255,0.6)", backdropFilter: "blur(4px)", padding: "0.35rem 0.75rem", borderRadius: 3 }}>{p.type}</span>
            </div>

            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4.5vw, 3.5rem)", fontWeight: 400, color: p.texture.includes("dark") ? "var(--limestone)" : "var(--charcoal)", lineHeight: 1.08, marginBottom: "0.5rem" }}>{p.name}</h3>
            <span style={{ fontSize: "0.48rem", fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase" as const, color: "var(--copper)", marginBottom: "1rem", display: "block" }}>{p.location}</span>

            <div style={{ width: 32, height: 2, background: "var(--copper)", marginBottom: "1rem" }} />

            <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1rem, 1.5vw, 1.2rem)", fontWeight: 400, color: p.texture.includes("dark") ? "rgba(255,255,255,0.5)" : "var(--stone-dark)", lineHeight: 1.5, marginBottom: "1rem", maxWidth: "28ch" }}>{p.tagline}</p>

            <p style={{ fontSize: "0.88rem", fontWeight: 300, color: p.texture.includes("dark") ? "rgba(255,255,255,0.45)" : "var(--stone-dark)", lineHeight: 1.85, maxWidth: "42ch", marginBottom: "1.5rem" }}>{p.desc}</p>

            <div className="flex flex-wrap gap-1.5">
              {p.scope.map(s => (
                <span key={s} style={{ fontSize: "0.42rem", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: p.texture.includes("dark") ? "rgba(255,255,255,0.4)" : "var(--stone)", border: `1px solid ${p.texture.includes("dark") ? "rgba(255,255,255,0.1)" : "var(--border-s)"}`, padding: "0.3rem 0.6rem", borderRadius: 3 }}>{s}</span>
              ))}
            </div>
          </div>

          {/* Progress */}
          <div className="absolute z-10" style={{ bottom: "2rem", left: "5%" }}>
            <div className="flex items-center gap-3">
              {projects.map((_, j) => (
                <div key={j} style={{ width: j === i ? 32 : 8, height: 2, borderRadius: 1, background: j === i ? "var(--copper)" : (p.texture.includes("dark") ? "rgba(255,255,255,0.15)" : "var(--border-s)"), transition: "all 0.3s" }} />
              ))}
              <span style={{ fontSize: "0.42rem", fontWeight: 500, letterSpacing: "0.2em", color: p.texture.includes("dark") ? "rgba(255,255,255,0.25)" : "var(--stone)" }}>{String(i + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}</span>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
