"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { num: "01", name: "Grain", location: "Holborn, London", type: "Full Launch", desc: "Modern Mediterranean. Concept to grand opening. Every system, every hire, every plate.", images: ["/photos/grain-exterior.jpg", "/photos/grain-dishes.jpg"] },
  { num: "02", name: "Filos by Halepi", location: "London", type: "Restaurant Support", desc: "Greek dining reimagined. Operational diagnostic, menu overhaul, procedural redesign.", images: ["/photos/filos-kitchen.jpg", "/photos/filos-3d-kitchen.jpg"] },
  { num: "03", name: "Mesa Stone", location: "Fine Dining", type: "Full Launch", desc: "Premium fine dining from zero. Kitchen spec, HACCP, SOPs, phased opening.", images: ["/photos/dining-room.jpg", "/photos/chef-plating.jpg"] },
  { num: "04", name: "Mauro Colagreco", location: "Raffles London, The OWO", type: "Collaboration", desc: "World-class culinary programme. One of London's most prestigious destinations.", images: ["/photos/mauro-dining.jpg", "/photos/mauro-building.jpg"] },
];

export default function Work() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".work-item").forEach((el) => {
        gsap.fromTo(el, { opacity: 0, y: 60 }, {
          opacity: 1, y: 0, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
        });
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} style={{ padding: "128px 0" }}>
      <div className="wrap">
        <div className="flex justify-between items-start gap-8 flex-col md:flex-row" style={{ marginBottom: "5rem" }}>
          <div>
            <span className="label">Track Record</span>
            <span className="sect-num">[ 06 / 07 ]</span>
          </div>
          <div style={{ maxWidth: "550px" }}>
            <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, color: "var(--limestone)", lineHeight: 1.2, letterSpacing: "-0.02em" }}>
              The work that built the consultancy.
            </p>
            <p style={{ fontSize: "0.78rem", fontWeight: 300, color: "var(--white-50)", lineHeight: 1.7, marginTop: "1rem" }}>
              Projects led by Dimitris prior to founding estιasι.
            </p>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          {projects.map((p) => (
            <div key={p.num} className="work-item rounded-section" style={{ background: "var(--dark-2)", overflow: "hidden" }}>
              {/* Images row */}
              <div className="grid grid-cols-2 gap-px">
                {p.images.map((img, j) => (
                  <div key={j} style={{ height: "clamp(250px, 30vw, 400px)", overflow: "hidden", position: "relative" }}>
                    <img src={img} alt="" className="w-full h-full object-cover" style={{ transition: "transform 0.6s ease" }} onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.04)"; }} onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; }} />
                    {j === 0 && (
                      <div style={{ position: "absolute", bottom: "1.5rem", left: "1.5rem", fontFamily: "var(--font-display)", fontSize: "clamp(3rem, 6vw, 5rem)", fontWeight: 400, color: "rgba(255,255,255,0.08)", lineHeight: 1 }}>{p.num}</div>
                    )}
                  </div>
                ))}
              </div>
              {/* Content */}
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4" style={{ padding: "2rem 2.5rem" }}>
                <div>
                  <div className="flex items-center gap-3" style={{ marginBottom: "0.5rem" }}>
                    <span style={{ fontSize: "0.5rem", fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase" as const, color: "var(--copper)" }}>{p.type}</span>
                    <span style={{ fontSize: "0.5rem", color: "var(--white-30)" }}>·</span>
                    <span style={{ fontSize: "0.5rem", fontWeight: 400, letterSpacing: "0.15em", textTransform: "uppercase" as const, color: "var(--white-30)" }}>{p.location}</span>
                  </div>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2.2rem)", fontWeight: 400, color: "var(--limestone)", letterSpacing: "-0.01em" }}>{p.name}</h3>
                </div>
                <p style={{ fontSize: "0.85rem", fontWeight: 300, color: "var(--white-50)", lineHeight: 1.7, maxWidth: "40ch" }}>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
