"use client";

import { useState } from "react";

const tiers = [
  {
    id: "core", name: "Culinary Core", price: "€3,500",
    desc: "The kitchen essentials. Everything to launch or fix the culinary side.",
    items: ["Concept creation & positioning", "Menu creation & engineering", "Food cost control frameworks", "Kitchen design consultancy", "HACCP & food safety compliance", "Staff training programmes", "Standard Operating Procedures", "Opening support"],
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

  return (
    <section style={{ padding: "128px 0" }}>
      <div className="wrap">
        <div className="flex justify-between items-start gap-8 flex-col md:flex-row" style={{ marginBottom: "4rem" }}>
          <div>
            <span className="label">Pricing</span>
            <span className="sect-num">[ 06 / 07 ]</span>
          </div>
          <div style={{ maxWidth: "550px" }}>
            <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, color: "var(--limestone)", lineHeight: 1.2, letterSpacing: "-0.02em" }}>
              Three tiers.<br />One standard.
            </p>
            <p style={{ fontSize: "0.85rem", fontWeight: 300, color: "var(--white-30)", lineHeight: 1.8, marginTop: "1rem" }}>
              (Every engagement scoped to your venue. Discovery call defines the rest.)
            </p>
          </div>
        </div>

        {/* Tier tabs */}
        <div className="flex gap-2" style={{ marginBottom: "2rem" }}>
          {tiers.map(t => (
            <button key={t.id} onClick={() => setActive(t.id)} className="btn" style={{
              padding: "0.6rem 1.5rem", fontSize: "0.55rem",
              background: active === t.id ? "var(--copper)" : "transparent",
              borderColor: active === t.id ? "var(--copper)" : "var(--border-dark)",
              color: active === t.id ? "#fff" : "var(--white-50)",
            }}>
              {t.name}
              {t.highlight && <span style={{ width: 5, height: 5, borderRadius: "50%", background: active === t.id ? "#fff" : "var(--copper)", marginLeft: 8, display: "inline-block" }} />}
            </button>
          ))}
        </div>

        {/* Active tier */}
        {tiers.filter(t => t.id === active).map(t => (
          <div key={t.id} className="rounded-section" style={{ background: t.highlight ? "var(--dark-2)" : "var(--dark-3)", overflow: "hidden", position: "relative" }}>
            {/* Marble texture for Full Package */}
            {t.highlight && (
              <div className="absolute inset-0 z-0" style={{ opacity: 0.04 }}>
                <img src="/textures/marble-hero.jpg" alt="" className="w-full h-full object-cover" />
              </div>
            )}

            <div className="relative z-10" style={{ padding: "clamp(2rem, 4vw, 4rem)" }}>
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6" style={{ marginBottom: "3rem" }}>
                <div>
                  <div className="flex items-center gap-3" style={{ marginBottom: "0.75rem" }}>
                    <span style={{ fontSize: "0.5rem", fontWeight: 500, letterSpacing: "0.3em", textTransform: "uppercase" as const, color: "var(--copper)" }}>{t.name}</span>
                    {t.highlight && <span style={{ fontSize: "0.4rem", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase" as const, color: "#fff", background: "var(--copper)", padding: "3px 8px", borderRadius: "80px" }}>Recommended</span>}
                  </div>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(3rem, 6vw, 4.5rem)", fontWeight: 400, color: "var(--limestone)", letterSpacing: "-0.02em", lineHeight: 1 }}>{t.price}</div>
                  <span style={{ fontSize: "0.65rem", fontWeight: 300, color: "var(--white-30)" }}>starting from</span>
                </div>
                <p style={{ fontSize: "0.9rem", fontWeight: 300, color: "var(--white-50)", lineHeight: 1.8, maxWidth: "38ch" }}>{t.desc}</p>
              </div>

              {/* Items */}
              {"sections" in t && t.sections ? (
                // Full Package — 3 columns, inherited items dimmer
                <div style={{ display: "grid", gridTemplateColumns: `repeat(${t.sections.length}, 1fr)`, gap: "2rem", marginTop: "2rem" }}>
                  {t.sections.map((section: { label: string; items: string[] }, si: number) => {
                    const isNew = si === t.sections.length - 1;
                    return (
                      <div key={section.label}>
                        <div className="flex items-center gap-2" style={{ marginBottom: "1.25rem", paddingBottom: "0.75rem", borderBottom: isNew ? "1px solid var(--copper)" : "1px solid var(--border-dark)" }}>
                          <span style={{ fontSize: "0.52rem", fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase" as const, color: isNew ? "var(--copper)" : "var(--white-50)" }}>{section.label}</span>
                          {isNew && <span style={{ fontSize: "0.4rem", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase" as const, color: "#fff", background: "var(--copper)", padding: "2px 8px", borderRadius: "80px" }}>Added</span>}
                        </div>
                        {section.items.map((item: string) => (
                          <div key={item} className="flex items-start gap-3" style={{ marginBottom: "0.65rem" }}>
                            <span style={{ width: 5, height: 5, borderRadius: "50%", background: isNew ? "var(--copper)" : "var(--white-30)", marginTop: "0.45rem", flexShrink: 0 }} />
                            <span style={{ fontSize: "0.88rem", fontWeight: isNew ? 400 : 300, color: isNew ? "var(--limestone)" : "var(--white-50)", lineHeight: 1.55 }}>{item}</span>
                          </div>
                        ))}
                      </div>
                    );
                  })}
                </div>
              ) : (
                // Other tiers — flat list
                <>
                  <div className="divider-dark" />
                  {t.items.map((item: string) => (
                    <div key={item}>
                      <div className="flex items-center gap-3" style={{ padding: "1rem 0" }}>
                        <span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--copper)", opacity: 0.5, flexShrink: 0 }} />
                        <span style={{ fontSize: "0.9rem", fontWeight: 300, color: "var(--limestone)" }}>{item}</span>
                      </div>
                      <div className="divider-dark" />
                    </div>
                  ))}
                </>
              )}

              <div style={{ marginTop: "2.5rem" }}>
                <a href="#contact" className="btn btn-copper" style={{ width: "100%", justifyContent: "center" }}>Book a Discovery Call</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
