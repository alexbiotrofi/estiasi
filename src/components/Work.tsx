"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Project = {
  num: string;
  name: string;
  fullName: string;
  location: string;
  type: string;
  paragraphs: string[];
  scope: string[];
  images: string[];
  imageFits?: ("cover" | "contain")[];
  michelin?: boolean;
  status?: string;
};

const projects: Project[] = [
  {
    num: "01",
    name: "Mauro Colagreco at Raffles London",
    fullName: "Mauro Colagreco at Raffles London at The OWO",
    location: "London, 2023",
    type: "Pre-opening",
    michelin: true,
    paragraphs: [
      "Dimitris Kamaritis was a member of the pre-opening team for Mauro Colagreco at Raffles London at The OWO—one of the most anticipated restaurant launches in London in a generation, set within the landmark Grade II-listed Old War Office building on Whitehall.",
      "Mauro Colagreco is the Italian-Argentine chef behind Mirazur on the Côte d'Azur — a three-Michelin-starred restaurant that was crowned the World's Best Restaurant by the World's 50 Best in 2019, and the only restaurant in the world to hold that title for three consecutive years. Colagreco is also a UNESCO Goodwill Ambassador for Biodiversity, and sustainability sits at the very core of his culinary philosophy.",
      "Working in close collaboration with Mauro Colagreco and the Mirazur development team, Dimitris contributed across every operational dimension of the project: designing the kitchen, establishing the standard operating procedures, and co-developing the opening menu. A key part of his role was sourcing and building relationships with local British suppliers whose values aligned with Colagreco's deep commitment to sustainability, seasonality, and ethical provenance — ensuring the restaurant's philosophy was embedded from the ground up. Dimitris then led the team through the full launch and opening of the restaurant.",
      "The restaurant was awarded a Michelin star following its opening and is today regarded as one of London's premier fine dining destinations.",
    ],
    scope: ["Kitchen Design", "SOPs", "Menu Co-development", "Supplier Sourcing", "Launch & Opening"],
    images: ["/photos/mauro-dining.jpg", "/photos/mauro-building.jpg"],
  },
  {
    num: "02",
    name: "Grain Mediterranean",
    fullName: "Grain Mediterranean",
    location: "Holborn, London",
    type: "Executive Chef Consultant",
    paragraphs: [
      "Dimitris Kamaritis served as Executive Chef Consultant for Grain Mediterranean, the UK's first clean-label Mediterranean quick-service restaurant, located in Holborn, London.",
      "Grain is built around a simple but powerful idea: that fast food can be genuinely good for you. The menu draws on the diets of the world's Blue Zones — regions associated with exceptional longevity — with every dish cooked in extra-virgin olive and cold-pressed avocado oils, sourdough breads replacing refined alternatives, and a build-your-own bowl format that brings Mediterranean eating to the high street without compromise.",
      "Dimitris oversaw the full scope of the restaurant's development and launch. This included kitchen design, the creation of standard operating procedures and HACCP compliance frameworks, menu development and engineering, and full staff training. Beyond the kitchen, his involvement extended to shaping the restaurant's marketing policy and supporting the brand management strategy through the launch phase — ensuring that the culinary identity and the brand story were aligned from day one.",
      "With the restaurant now open and an ambitious expansion plan targeting ten further UK sites in 2026 and 50 locations by the end of the decade, Dimitris's foundational work underpins a concept built to scale without sacrificing quality or integrity.",
    ],
    scope: ["Kitchen Design", "SOPs & HACCP", "Menu Development", "Menu Engineering", "Staff Training", "Marketing Policy", "Brand Management"],
    images: ["/photos/grain-exterior.jpg", "/photos/grain-dishes.jpg"],
    imageFits: ["contain", "cover"],
  },
  {
    num: "03",
    name: "Filos by Halepi",
    fullName: "Filos by Halepi",
    location: "Notting Hill, London",
    type: "Chef Consultant",
    status: "Opening Soon",
    paragraphs: [
      "Dimitris Kamaritis served as Chef Consultant for Filos by Halepi, a new Cypriot café and restaurant opening in Notting Hill, London — located alongside the legendary Halepi, one of the most beloved Greek Cypriot institutions in the city.",
      "Filos is the latest venture of Kostas Kazolides, whose family has been at the heart of London's Greek Cypriot dining scene since founding Halepi in 1966. Where Halepi has long been celebrated for its taverna spirit and authentic Cypriot cooking, Filos takes a different and deeply personal direction — a daytime destination dedicated to the sweeter, more intimate side of Cypriot food culture. The concept is built around a journey through Cypriot tradition: homemade pastries, traditional sweets, and a breakfast and lunch menu that brings the warmth and heritage of the island to Notting Hill.",
      "Dimitris oversaw the full operational and creative development of the concept, encompassing kitchen design, standard operating procedures, HACCP compliance, menu development and engineering, and full staff training. His involvement also extended to shaping the restaurant's marketing policy and supporting brand management through the launch strategy — ensuring that the identity of Filos feels both rooted in Cypriot tradition and ready for its new London home.",
      "Filos by Halepi is opening soon.",
    ],
    scope: ["Kitchen Design", "SOPs & HACCP", "Menu Development", "Menu Engineering", "Staff Training", "Marketing Policy", "Brand Management"],
    images: ["/photos/filos-halepi-exterior.jpg", "/photos/filos-3d-kitchen.jpg"],
  },
  {
    num: "04",
    name: "Mesa Stone",
    fullName: "Mesa Stone",
    location: "Walthamstow, London",
    type: "Chef Consultant",
    status: "Opening Soon",
    paragraphs: [
      "Dimitris Kamaritis joined Mesa Stone as Chef Consultant from the very beginning, bringing his full expertise to bear on one of London's most distinctive upcoming food concepts.",
      "Mesa Stone is a fast casual restaurant rooted in Native American culinary tradition, launching its first site in Walthamstow with plans to expand across the UK. The concept takes traditional Native American recipes as its foundation and reinterprets them through a contemporary lens — honouring the integrity and depth of indigenous food culture while making it accessible, exciting and relevant to a modern British audience. It is a project with both a strong identity and real ambition.",
      "Dimitris's role spanned the entire pre-opening journey. He led the kitchen design and built out the operational backbone of the business through detailed standard operating procedures and HACCP frameworks. Working closely with the team, he developed and engineered a menu that stays true to the concept's cultural roots while functioning seamlessly within a fast casual format. Staff training, marketing policy and brand management support through the launch phase rounded out his contribution — ensuring Mesa Stone opens with a clear voice, a well-drilled team and a kitchen built to grow with the brand.",
      "Mesa Stone is opening soon in Walthamstow, with UK expansion to follow.",
    ],
    scope: ["Kitchen Design", "SOPs & HACCP", "Menu Development", "Menu Engineering", "Staff Training", "Marketing Policy", "Brand Management"],
    images: ["/photos/mesa-kitchen-design.jpg", "/photos/mesa-corn.jpg"],
  },
];

export default function Work() {
  const ref = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState<Project | null>(null);

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
                  {p.images.map((img, j) => {
                    const fit = p.imageFits?.[j] ?? "cover";
                    return (
                      <div key={j} style={{ height: "clamp(200px, 25vw, 320px)", overflow: "hidden", position: "relative", background: fit === "contain" ? "#f4f1ec" : undefined }}>
                        <img src={img} alt="" className="w-full h-full" style={{ objectFit: fit, transition: "transform 0.6s ease" }} onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.04)"; }} onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; }} />
                        {j === 0 && (
                          <div style={{ position: "absolute", bottom: "1.5rem", left: "1.5rem", fontFamily: "var(--font-display)", fontSize: "clamp(3rem, 6vw, 5rem)", fontWeight: 400, color: "rgba(255,255,255,0.1)", lineHeight: 1 }}>{p.num}</div>
                        )}
                      </div>
                    );
                  })}
                </div>
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4" style={{ padding: "1.5rem 2rem" }}>
                  <div>
                    <div className="flex items-center gap-3" style={{ marginBottom: "0.4rem" }}>
                      <span style={{ fontSize: "0.5rem", fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase" as const, color: "var(--copper)" }}>{p.type}</span>
                      <span style={{ fontSize: "0.5rem", color: "var(--stone-light)" }}>·</span>
                      <span style={{ fontSize: "0.5rem", fontWeight: 400, letterSpacing: "0.15em", textTransform: "uppercase" as const, color: "var(--stone)" }}>{p.location}</span>
                    </div>
                    <div className="flex items-center flex-wrap" style={{ gap: "0.75rem" }}>
                      <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2.2rem)", fontWeight: 400, color: "var(--charcoal)", letterSpacing: "-0.01em" }}>{p.name}</h3>
                      {p.michelin && (
                        <img src="/michelin-star.png" alt="Michelin star" style={{ width: "clamp(1.25rem, 2vw, 1.6rem)", height: "clamp(1.25rem, 2vw, 1.6rem)", objectFit: "contain" }} />
                      )}
                      {p.status && (
                        <span style={{ fontSize: "0.55rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "var(--copper)", border: "1px solid var(--copper)", borderRadius: "999px", padding: "0.3rem 0.7rem", whiteSpace: "nowrap" }}>{p.status}</span>
                      )}
                    </div>
                  </div>
                  <div className="flex items-end gap-4">
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

          {/* Close button — stays visible no matter how far you scroll inside the card */}
          <button
            onClick={e => { e.stopPropagation(); setSelected(null); }}
            style={{
              position: "fixed",
              top: "1.25rem",
              right: "1.25rem",
              zIndex: 102,
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.3)",
              background: "rgba(28,28,26,0.7)",
              backdropFilter: "blur(8px)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1rem",
              color: "#fff",
              transition: "all 0.2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.background = "var(--copper)"; e.currentTarget.style.borderColor = "var(--copper)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "rgba(28,28,26,0.7)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)"; }}
            aria-label="Close"
          >✕</button>

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

            {/* Hero image */}
            <div style={{ height: "clamp(200px, 30vw, 350px)", overflow: "hidden", borderRadius: "24px 24px 0 0", position: "relative" }}>
              <img src={selected.images[0]} alt="" className="w-full h-full object-cover" />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.4), transparent)" }} />
              <div style={{ position: "absolute", bottom: "2rem", left: "2rem", right: "2rem" }}>
                <span style={{ fontSize: "0.45rem", fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase" as const, color: "var(--copper-light)", display: "block", marginBottom: "0.35rem" }}>{selected.type} · {selected.location}</span>
                <div className="flex items-center flex-wrap" style={{ gap: "0.75rem" }}>
                  <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3.2vw, 2.4rem)", fontWeight: 400, color: "#fff", letterSpacing: "-0.02em", lineHeight: 1.15 }}>{selected.fullName}</h2>
                  {selected.michelin && (
                    <img src="/michelin-star.png" alt="Michelin star" style={{ width: "clamp(1.4rem, 2.2vw, 1.8rem)", height: "clamp(1.4rem, 2.2vw, 1.8rem)", objectFit: "contain" }} />
                  )}
                  {selected.status && (
                    <span style={{ fontSize: "0.55rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "#fff", border: "1px solid rgba(255,255,255,0.6)", borderRadius: "999px", padding: "0.3rem 0.7rem", whiteSpace: "nowrap" }}>{selected.status}</span>
                  )}
                </div>
              </div>
              <div style={{ position: "absolute", top: "2rem", left: "2rem", fontFamily: "var(--font-display)", fontSize: "5rem", fontWeight: 400, color: "rgba(255,255,255,0.08)", lineHeight: 1 }}>{selected.num}</div>
            </div>

            {/* Content */}
            <div style={{ padding: "2.5rem" }}>
              {selected.paragraphs.map((para, i) => (
                <p key={i} style={{ fontSize: i === 0 ? "1rem" : "0.95rem", fontWeight: 300, color: "var(--stone-dark)", lineHeight: 1.9, marginBottom: "1.5rem" }}>
                  {para}
                </p>
              ))}

              {/* Second image */}
              <div style={{ borderRadius: "12px", overflow: "hidden", height: "clamp(150px, 20vw, 250px)", margin: "2rem 0" }}>
                <img src={selected.images[1]} alt="" className="w-full h-full object-cover" />
              </div>

              <div style={{ borderTop: "1px solid var(--border)", paddingTop: "2rem" }}>
                <span style={{ fontSize: "0.45rem", fontWeight: 500, letterSpacing: "0.3em", textTransform: "uppercase" as const, color: "var(--copper)", display: "block", marginBottom: "0.75rem" }}>Scope of Work</span>
                <div className="flex flex-wrap gap-2">
                  {selected.scope.map(s => (
                    <span key={s} style={{ fontSize: "0.5rem", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "var(--charcoal)", border: "1px solid var(--border-s)", padding: "0.35rem 0.7rem", borderRadius: "3px" }}>{s}</span>
                  ))}
                </div>
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
