"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { num: "01", name: "Mauro Colagreco", location: "Raffles London, The OWO", type: "Collaboration", desc: "World-class culinary programme. One of London's most prestigious destinations.", detail: "Part of the team supporting the culinary programme at one of London's most prestigious new hospitality destinations. Working alongside world-class standards in fine dining operations, service delivery, and quality systems under three-Michelin-star chef Mauro Colagreco.", scope: ["Fine Dining Operations", "Service Delivery", "Quality Systems", "World-Class Standards"], images: ["/photos/mauro-dining.jpg", "/photos/mauro-building.jpg"] },
  { num: "02", name: "Grain", location: "Holborn, London", type: "Full Launch", desc: "Modern Mediterranean. Concept to grand opening. Every system, every hire, every plate.", detail: "End-to-end launch consultancy for a modern Mediterranean restaurant in the heart of London. We defined the concept, designed the kitchen layout, engineered the full menu with food costing, recruited and trained the team, wrote every SOP, and managed the soft opening through to grand opening.", scope: ["Concept & Positioning", "Kitchen Design", "Menu Creation", "Food Cost Control", "Staff Recruitment & Training", "SOPs", "Soft Opening", "Grand Opening"], images: ["/photos/grain-exterior.jpg", "/photos/grain-dishes.jpg"] },
  { num: "03", name: "Filos by Halepi", location: "London", type: "Restaurant Support", desc: "Greek dining reimagined. Operational evaluation, menu overhaul, procedural redesign.", detail: "Full operational evaluation and improvement programme for an established Greek dining concept. We conducted a complete review, reimagined the menu, redesigned kitchen workflows, retrained the team on new service standards, and implemented new procedures that reduced waste and improved consistency.", scope: ["Operational Review", "Menu Reimagination", "Procedure Redesign", "Kitchen Workflow", "Staff Retraining", "Waste Reduction"], images: ["/photos/filos-kitchen.jpg", "/photos/filos-3d-kitchen.jpg"] },
  { num: "04", name: "Mesa Stone", location: "Fine Dining", type: "Full Launch", desc: "Premium fine dining from zero. Kitchen spec, HACCP, SOPs, phased opening.", detail: "Concept creation and full operational build for a premium fine-dining venue. From positioning and kitchen specification to HACCP frameworks, SOP documentation, and phased opening management. Every detail considered from the first sketch to the last plate.", scope: ["Fine Dining Concept", "Kitchen Specification", "HACCP Frameworks", "SOP Documentation", "Phased Opening", "Quality Systems"], images: ["/photos/dining-room.jpg", "/photos/chef-plating.jpg"] },
];

export default function Work() {
  const ref = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState<typeof projects[0] | null>(null);

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

  // Lock ALL scroll when modal is open (including Lenis)
  useEffect(() => {
    if (selected) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      const lenis = (window as unknown as { lenis?: { stop: () => void; start: () => void; destroy: () => void } }).lenis;
      if (lenis) lenis.stop();

      // Block wheel events from reaching anything below the modal
      const blockWheel = (e: WheelEvent) => {
        const modal = document.querySelector("[data-modal-content]");
        if (modal && modal.contains(e.target as Node)) return; // allow scroll inside modal
        e.preventDefault();
      };
      window.addEventListener("wheel", blockWheel, { passive: false });

      return () => {
        window.removeEventListener("wheel", blockWheel);
        document.body.style.overflow = "";
        document.documentElement.style.overflow = "";
        const l = (window as unknown as { lenis?: { start: () => void } }).lenis;
        if (l) l.start();
      };
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      const lenis = (window as unknown as { lenis?: { start: () => void } }).lenis;
      if (lenis) lenis.start();
    }
  }, [selected]);

  return (
    <>
      <section id="work" ref={ref} style={{ padding: "128px 0" }}>
        <div className="wrap">
          <div className="flex justify-between items-start gap-8 flex-col md:flex-row" style={{ marginBottom: "5rem" }}>
            <div>
              <span className="label">Track Record</span>
              <span className="sect-num">[ 06 / 07 ]</span>
            </div>
            <div style={{ maxWidth: "550px" }}>
              <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, color: "var(--charcoal)", lineHeight: 1.2, letterSpacing: "-0.02em" }}>
                The work that built the consultancy.
              </p>
              <p style={{ fontSize: "0.9rem", fontWeight: 300, color: "var(--stone-dark)", lineHeight: 1.7, marginTop: "1rem" }}>
                Projects led by Dimitris prior to founding estιasι.
              </p>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            {projects.map((p) => (
              <div key={p.num} className="work-item rounded-section" style={{ background: "#fff", overflow: "hidden", cursor: "pointer" }} onClick={() => setSelected(p)}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-px">
                  {p.images.map((img, j) => (
                    <div key={j} style={{ height: "clamp(200px, 25vw, 320px)", overflow: "hidden", position: "relative" }}>
                      <img src={img} alt="" className="w-full h-full object-cover" style={{ transition: "transform 0.6s ease" }} onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.04)"; }} onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; }} />
                      {j === 0 && (
                        <div style={{ position: "absolute", bottom: "1.5rem", left: "1.5rem", fontFamily: "var(--font-display)", fontSize: "clamp(3rem, 6vw, 5rem)", fontWeight: 400, color: "rgba(255,255,255,0.1)", lineHeight: 1 }}>{p.num}</div>
                      )}
                    </div>
                  ))}
                </div>
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4" style={{ padding: "1.5rem 2rem" }}>
                  <div>
                    <div className="flex items-center gap-3" style={{ marginBottom: "0.4rem" }}>
                      <span style={{ fontSize: "0.5rem", fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase" as const, color: "var(--copper)" }}>{p.type}</span>
                      <span style={{ fontSize: "0.5rem", color: "var(--stone-light)" }}>·</span>
                      <span style={{ fontSize: "0.5rem", fontWeight: 400, letterSpacing: "0.15em", textTransform: "uppercase" as const, color: "var(--stone)" }}>{p.location}</span>
                    </div>
                    <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2.2rem)", fontWeight: 400, color: "var(--charcoal)", letterSpacing: "-0.01em" }}>{p.name}</h3>
                  </div>
                  <div className="flex items-end gap-4">
                    <p style={{ fontSize: "0.82rem", fontWeight: 300, color: "var(--stone-dark)", lineHeight: 1.7, maxWidth: "35ch" }}>{p.desc}</p>
                    <span style={{ flexShrink: 0, fontSize: "0.5rem", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase" as const, color: "var(--copper)", border: "1px solid var(--copper)", borderRadius: "4px", padding: "0.4rem 0.8rem", transition: "all 0.2s", whiteSpace: "nowrap" }}>Read More</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal popup */}
      {selected && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",
            animation: "modalBgIn 0.3s ease-out",
            overscrollBehavior: "contain",
          }}
          onClick={() => setSelected(null)}
          onWheel={e => e.stopPropagation()}
        >
          {/* Backdrop */}
          <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.6)", backdropFilter: "blur(8px)" }} />

          {/* Modal card */}
          <div
            data-modal-content
            data-lenis-prevent
            style={{
              position: "relative",
              zIndex: 1,
              background: "#fff",
              borderRadius: "24px",
              maxWidth: "900px",
              width: "100%",
              maxHeight: "90vh",
              overflowY: "auto",
              overflowX: "hidden",
              overscrollBehavior: "contain",
              WebkitOverflowScrolling: "touch",
              touchAction: "pan-y",
              animation: "modalIn 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
            onClick={e => e.stopPropagation()}
            onTouchMove={e => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelected(null)}
              style={{
                position: "absolute",
                top: "1.25rem",
                right: "1.25rem",
                zIndex: 2,
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                border: "1px solid var(--border)",
                background: "rgba(255,255,255,0.9)",
                backdropFilter: "blur(8px)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1rem",
                color: "var(--charcoal)",
                transition: "all 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.background = "var(--copper)"; e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = "var(--copper)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.9)"; e.currentTarget.style.color = "var(--charcoal)"; e.currentTarget.style.borderColor = "var(--border)"; }}
            >✕</button>

            {/* Hero image */}
            <div style={{ height: "clamp(200px, 30vw, 350px)", overflow: "hidden", borderRadius: "24px 24px 0 0", position: "relative" }}>
              <img src={selected.images[0]} alt="" className="w-full h-full object-cover" />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.4), transparent)" }} />
              <div style={{ position: "absolute", bottom: "2rem", left: "2rem" }}>
                <span style={{ fontSize: "0.45rem", fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase" as const, color: "var(--copper-light)", display: "block", marginBottom: "0.35rem" }}>{selected.type} · {selected.location}</span>
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, color: "#fff", letterSpacing: "-0.02em" }}>{selected.name}</h2>
              </div>
              <div style={{ position: "absolute", top: "2rem", left: "2rem", fontFamily: "var(--font-display)", fontSize: "5rem", fontWeight: 400, color: "rgba(255,255,255,0.08)", lineHeight: 1 }}>{selected.num}</div>
            </div>

            {/* Content */}
            <div style={{ padding: "2.5rem" }}>
              <p style={{ fontSize: "1rem", fontWeight: 300, color: "var(--stone-dark)", lineHeight: 1.9, marginBottom: "2rem" }}>
                {selected.detail}
              </p>

              <div style={{ marginBottom: "2rem" }}>
                <span style={{ fontSize: "0.45rem", fontWeight: 500, letterSpacing: "0.3em", textTransform: "uppercase" as const, color: "var(--copper)", display: "block", marginBottom: "0.75rem" }}>Scope of Work</span>
                <div className="flex flex-wrap gap-2">
                  {selected.scope.map(s => (
                    <span key={s} style={{ fontSize: "0.5rem", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "var(--charcoal)", border: "1px solid var(--border-s)", padding: "0.35rem 0.7rem", borderRadius: "3px" }}>{s}</span>
                  ))}
                </div>
              </div>

              {/* Second image */}
              <div style={{ borderRadius: "12px", overflow: "hidden", height: "clamp(150px, 20vw, 250px)", marginBottom: "2rem" }}>
                <img src={selected.images[1]} alt="" className="w-full h-full object-cover" />
              </div>

              {/* Extended detail — placeholder */}
              <div style={{ borderTop: "1px solid var(--border)", paddingTop: "2rem" }}>
                <span style={{ fontSize: "0.45rem", fontWeight: 500, letterSpacing: "0.3em", textTransform: "uppercase" as const, color: "var(--copper)", display: "block", marginBottom: "0.75rem" }}>The Process</span>
                <p style={{ fontSize: "0.92rem", fontWeight: 300, color: "var(--stone-dark)", lineHeight: 1.9, marginBottom: "1.5rem" }}>
                  The engagement began with a comprehensive discovery phase — understanding the client&rsquo;s vision, target audience, and operational constraints. From there, we developed a detailed roadmap covering every phase of the project from concept through to opening night.
                </p>
                <p style={{ fontSize: "0.92rem", fontWeight: 300, color: "var(--stone-dark)", lineHeight: 1.9, marginBottom: "1.5rem" }}>
                  On the culinary side, Dimitris led menu development with full food costing, recipe standardisation, and supplier sourcing. Kitchen design was specified down to equipment placement and workflow optimisation. Staff were recruited, onboarded, and trained on every procedure before the first service.
                </p>
                <p style={{ fontSize: "0.92rem", fontWeight: 300, color: "var(--stone-dark)", lineHeight: 1.9, marginBottom: "1.5rem" }}>
                  The operational framework included complete SOP documentation, HACCP compliance, health and safety protocols, and fire maintenance procedures. Every system was built to run independently — the measure of success is when we leave and nothing changes.
                </p>

                <span style={{ fontSize: "0.45rem", fontWeight: 500, letterSpacing: "0.3em", textTransform: "uppercase" as const, color: "var(--copper)", display: "block", marginBottom: "0.75rem", marginTop: "2rem" }}>Outcome</span>
                <p style={{ fontSize: "0.92rem", fontWeight: 300, color: "var(--stone-dark)", lineHeight: 1.9 }}>
                  A fully operational venue with documented systems, a trained team, and a clear identity — ready to serve from day one. The kind of opening where nothing is left to chance.
                </p>
              </div>
            </div>
          </div>

          <style>{`
            @keyframes modalBgIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            @keyframes modalIn {
              from { opacity: 0; transform: scale(0.92) translateY(20px); }
              to { opacity: 1; transform: scale(1) translateY(0); }
            }
          `}</style>
        </div>
      )}
    </>
  );
}
