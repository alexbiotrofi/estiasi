"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import gsap from "gsap";

const tiers = [
  {
    id: "core", name: "Culinary Core", price: "€3,500",
    desc: "The kitchen essentials. Everything to launch or fix the culinary side.",
    sections: [
      { label: "Culinary", items: ["Concept creation & positioning", "Menu creation & engineering", "Food cost control frameworks", "Kitchen design consultancy", "HACCP & food safety compliance", "Staff training programmes", "Standard Operating Procedures", "Opening support"] },
    ],
  },
  {
    id: "ops", name: "Complete Operations", price: "€6,500",
    desc: "Culinary Core plus the systems that make a venue run like clockwork.",
    sections: [
      { label: "Culinary", items: ["Concept creation & positioning", "Menu creation & engineering", "Food cost control frameworks", "Kitchen design consultancy", "HACCP & food safety compliance", "Staff training programmes", "Standard Operating Procedures", "Opening support"] },
      { label: "Operations", items: ["Booking & reservation systems", "Lead tracking & CRM", "Staff scheduling & management", "Stock management systems", "Invoicing & payment workflows", "Supplier management", "Performance tracking & reporting"] },
    ],
  },
  {
    id: "full", name: "Full Package", price: "€9,500",
    desc: "The complete build. Culinary, operations, and the brand that fills the room.",
    sections: [
      { label: "Culinary", items: ["Concept creation & positioning", "Menu creation & engineering", "Food cost control frameworks", "Kitchen design consultancy", "HACCP & food safety compliance", "Staff training programmes", "Standard Operating Procedures", "Opening support"] },
      { label: "Operations", items: ["Booking & reservation systems", "Lead tracking & CRM", "Staff scheduling & management", "Stock management systems", "Invoicing & payment workflows", "Supplier management", "Performance tracking & reporting"] },
      { label: "Brand & Digital", items: ["Brand identity & visual design", "Website design & development", "SEO & digital visibility", "Google Business Profile", "Social media foundations", "Photography direction", "Ongoing brand consultation"] },
    ],
    highlight: true,
  },
];

export default function Pricing() {
  const [active, setActive] = useState("full");
  const gridRef = useRef<HTMLDivElement>(null);
  const isAnimating = useRef(false);
  const t = tiers.find(t => t.id === active)!;

  useEffect(() => {
    if (!gridRef.current) return;
    const cards = gridRef.current.querySelectorAll<HTMLElement>(".price-card");
    gsap.fromTo(cards, {
      opacity: 0,
      scale: 0.93,
      y: 15,
    }, {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 0.45,
      ease: "power2.out",
      stagger: 0.07,
    });
  }, [active]);

  const switchTier = useCallback((newId: string) => {
    if (newId === active) return;
    setActive(newId);
  }, [active]);

  return (
    <section id="pricing" style={{ padding: "128px 0" }}>
      <div className="wrap">
        <div className="flex justify-between items-start gap-8 flex-col md:flex-row" style={{ marginBottom: "4rem" }}>
          <div>
            <span className="label">Pricing</span>
            <span className="sect-num">[ 07 / 07 ]</span>
          </div>
          <div style={{ maxWidth: "550px" }}>
            <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, color: "var(--charcoal)", lineHeight: 1.2, letterSpacing: "-0.02em" }}>
              Three tiers.<br />One standard.
            </p>
            <p style={{ fontSize: "0.85rem", fontWeight: 300, color: "var(--stone)", lineHeight: 1.8, marginTop: "1rem" }}>
              (Every engagement scoped to your venue. Discovery call defines the rest.)
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2" style={{ marginBottom: "2rem" }}>
          {tiers.map(tier => (
            <button key={tier.id} onClick={() => switchTier(tier.id)} className="btn" style={{
              padding: "0.6rem 1.5rem", fontSize: "0.55rem",
              background: active === tier.id ? "var(--charcoal)" : "transparent",
              borderColor: active === tier.id ? "var(--charcoal)" : "var(--border)",
              color: active === tier.id ? "#fff" : "var(--stone-dark)",
            }}>
              {tier.name}
              {tier.highlight && <span style={{ width: 5, height: 5, borderRadius: "50%", background: active === tier.id ? "#fff" : "var(--copper)", marginLeft: 8, display: "inline-block" }} />}
            </button>
          ))}
        </div>

        <div className="rounded-section" style={{ background: t.highlight ? "var(--charcoal-deep)" : "var(--warm-white)", overflow: "hidden", position: "relative" }}>
          {t.highlight && (
            <div className="absolute inset-0 z-0">
              <img src="/textures/granite.jpg" alt="" className="w-full h-full object-cover" style={{ opacity: 0.35 }} />
            </div>
          )}

          <div className="relative z-10" style={{ padding: "clamp(2rem, 4vw, 4rem)" }}>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6" style={{ marginBottom: "2.5rem" }}>
              <div>
                <div className="flex items-center gap-3" style={{ marginBottom: "0.75rem" }}>
                  <span style={{ fontSize: "0.5rem", fontWeight: 500, letterSpacing: "0.3em", textTransform: "uppercase" as const, color: "var(--copper)" }}>{t.name}</span>
                  {t.highlight && <span style={{ fontSize: "0.4rem", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase" as const, color: "#fff", background: "var(--copper)", padding: "3px 8px", borderRadius: "80px" }}>Recommended</span>}
                </div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(3rem, 6vw, 4.5rem)", fontWeight: 400, color: t.highlight ? "var(--limestone)" : "var(--charcoal)", letterSpacing: "-0.02em", lineHeight: 1 }}>{t.price}</div>
                <span style={{ fontSize: "0.65rem", fontWeight: 300, color: t.highlight ? "var(--stone)" : "var(--stone)" }}>starting from</span>
              </div>
              <p style={{ fontSize: "0.9rem", fontWeight: 300, color: t.highlight ? "var(--stone-light)" : "var(--stone-dark)", lineHeight: 1.8, maxWidth: "38ch" }}>{t.desc}</p>
            </div>

            <div
              ref={gridRef}
              className={`grid grid-cols-1 ${t.sections.length >= 2 ? "md:grid-cols-2" : ""} ${t.sections.length >= 3 ? "lg:grid-cols-3" : ""}`}
              style={{ gap: "6px" }}
            >
              {t.sections.map((section, si) => {
                const isNew = si === t.sections.length - 1 && t.sections.length > 1;
                return (
                  <div key={`${t.id}-${section.label}`} className="price-card" style={{
                    borderRadius: "16px",
                    padding: "1.5rem",
                    border: isNew ? "1px solid rgba(176,115,64,0.3)" : "1px solid var(--border)",
                    boxShadow: isNew ? "0 0 40px rgba(176,115,64,0.06), inset 0 1px 0 rgba(176,115,64,0.1)" : "none",
                    background: "#fff",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    overflow: "hidden",
                  }}>
                    <div className="flex items-center justify-between" style={{ marginBottom: "1.25rem" }}>
                      <span style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", fontWeight: 400, color: "var(--charcoal)" }}>{section.label}</span>
                      {isNew && <span style={{ fontSize: "0.38rem", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase" as const, color: "var(--copper)" }}>+ This tier</span>}
                    </div>
                    {section.items.map((item, ii) => (
                      <div key={item}>
                        <div style={{ padding: "0.6rem 0", fontSize: "0.82rem", fontWeight: 300, color: "var(--charcoal)", lineHeight: 1.5 }}>
                          {item}
                        </div>
                        {ii < section.items.length - 1 && <div style={{ height: "1px", background: "var(--border)" }} />}
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>

            <div style={{ marginTop: "2.5rem" }}>
              <a href="#contact" className="btn btn-copper" style={{ width: "100%", justifyContent: "center" }}>Book a Discovery Call</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
