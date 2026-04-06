"use client";

import { useRef, useEffect } from "react";
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
    images: ["/photos/restaurant-interior.jpg", "/photos/fine-dining-plate.jpg"],
  },
  {
    num: "02",
    name: "Filos by Halepi",
    location: "London",
    type: "Restaurant Support",
    desc: "Operational diagnostic and improvement for an established Greek dining concept. Full review, menu reimagination, procedural redesign.",
    scope: ["Operational Review", "Menu Engineering", "Procedure Redesign", "Staff Retraining"],
    images: ["/photos/restaurant-ambience.jpg", "/photos/food-overhead.jpg"],
  },
  {
    num: "03",
    name: "Mesa Stone",
    location: "Fine Dining",
    type: "Full Launch",
    desc: "Concept creation and full operational build for a premium fine-dining venue. From blank page to opening night.",
    scope: ["Fine Dining Concept", "HACCP Frameworks", "SOP Documentation", "Phased Opening"],
    images: ["/photos/chef-plating.jpg", "/photos/dining-room.jpg"],
  },
  {
    num: "04",
    name: "Mauro Colagreco",
    location: "The OWO, London",
    type: "Collaboration",
    desc: "Supporting the culinary programme at one of London's most prestigious hospitality destinations.",
    scope: ["Fine Dining Operations", "Service Delivery", "Quality Systems"],
    images: ["/photos/restaurant-bar.jpg", "/photos/chef-kitchen.jpg"],
  },
];

export default function Work() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".work-project").forEach((el) => {
        gsap.fromTo(el, { opacity: 0, y: 80 }, {
          opacity: 1, y: 0, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="work" ref={sectionRef} style={{ padding: "8rem 0", background: "var(--limestone)", position: "relative", overflow: "hidden" }}>
      {/* Subtle marble */}
      <div className="absolute inset-0 z-0">
        <img src="/textures/marble-1.jpg" alt="" className="w-full h-full object-cover" style={{ opacity: 0.1 }} />
      </div>

      <div className="wrap relative z-10">
        <div className="reveal" style={{ marginBottom: "5rem" }}>
          <span className="label">Selected Work</span>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 400, color: "var(--charcoal)", lineHeight: 1.05 }}>
            Venues we&rsquo;ve built,<br />supported, transformed.
          </h2>
        </div>

        {/* Projects — stacked full-width cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
          {projects.map((p) => (
            <div key={p.name} className="work-project" style={{ borderRadius: 8, overflow: "hidden", border: "1px solid var(--border)" }}>
              {/* Image row — two photos side by side */}
              <div className="grid grid-cols-2 gap-px" style={{ background: "var(--border)" }}>
                {p.images.map((img, j) => (
                  <div key={j} style={{ height: 320, position: "relative", overflow: "hidden" }}>
                    <img src={img} alt={`${p.name} ${j + 1}`} className="w-full h-full object-cover" style={{ transition: "transform 0.6s ease" }} onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.03)"; }} onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; }} />
                    {j === 0 && (
                      <>
                        <div style={{ position: "absolute", top: "1.25rem", left: "1.25rem" }}>
                          <span style={{ fontSize: "0.42rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "#fff", background: "rgba(0,0,0,0.5)", backdropFilter: "blur(4px)", padding: "0.35rem 0.75rem", borderRadius: 3 }}>{p.type}</span>
                        </div>
                        <div style={{ position: "absolute", bottom: "1.5rem", left: "1.5rem", fontFamily: "var(--font-logo)", fontSize: "5rem", fontWeight: 400, color: "rgba(255,255,255,0.12)", lineHeight: 1 }}>{p.num}</div>
                      </>
                    )}
                  </div>
                ))}
              </div>

              {/* Content */}
              <div style={{ padding: "2rem 2.5rem", background: "#fff" }}>
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                  <div>
                    <span style={{ fontSize: "0.45rem", fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase" as const, color: "var(--copper)", display: "block", marginBottom: "0.5rem" }}>{p.location}</span>
                    <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 400, color: "var(--charcoal)", marginBottom: "0.5rem" }}>{p.name}</h3>
                    <p style={{ fontSize: "0.9rem", fontWeight: 300, color: "var(--stone-dark)", lineHeight: 1.8, maxWidth: "55ch" }}>{p.desc}</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 shrink-0">
                    {p.scope.map(s => (
                      <span key={s} style={{ fontSize: "0.45rem", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "var(--stone)", border: "1px solid var(--border-s)", padding: "0.3rem 0.6rem", borderRadius: 3 }}>{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
