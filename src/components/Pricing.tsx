"use client";

import { useState } from "react";

const tiers = [
  {
    id: "core",
    name: "Culinary Core",
    price: "€3,500",
    desc: "The kitchen essentials. Everything you need to launch or fix the culinary side of your operation.",
    highlight: false,
    items: [
      { name: "Concept creation & positioning", detail: "Market research, competitor analysis, concept definition, and brand positioning for your venue." },
      { name: "Menu creation & engineering", detail: "Full menu design, recipe development, costing, and engineering for profitability and guest appeal." },
      { name: "Food cost control frameworks", detail: "Waste tracking, portion control, supplier negotiation strategies, and margin optimisation." },
      { name: "Kitchen design consultancy", detail: "Equipment specification, workflow optimisation, and kitchen layout planning." },
      { name: "HACCP & food safety compliance", detail: "Full HACCP framework, documentation, staff training, and ongoing compliance systems." },
      { name: "Staff training programmes", detail: "Service standards, kitchen procedures, management training, and team development." },
      { name: "Standard Operating Procedures", detail: "Complete SOP documentation covering every operational process in your venue." },
      { name: "Opening support", detail: "Soft opening planning, execution, evaluation, adjustment, and grand opening." },
    ],
  },
  {
    id: "ops",
    name: "Complete Operations",
    price: "€6,500",
    desc: "Culinary Core plus the operational systems that make a venue run like clockwork.",
    highlight: false,
    items: [
      { name: "Everything in Culinary Core", detail: "All 8 deliverables from the Culinary Core tier included." },
      { name: "Booking & reservation systems", detail: "Selection, setup, and configuration of the right booking platform for your venue type." },
      { name: "Lead tracking & CRM", detail: "Client management systems for private dining, events, and B2B relationships." },
      { name: "Staff scheduling & management", detail: "Digital scheduling, shift management, performance tracking, and HR workflows." },
      { name: "Stock management systems", detail: "Inventory tracking, automated ordering, waste monitoring, and cost reporting." },
      { name: "Invoicing & payment workflows", detail: "Invoice generation, payment collection, financial reporting, and supplier payments." },
      { name: "Supplier management", detail: "Supplier evaluation, contract negotiation, quality control, and relationship management." },
      { name: "Performance tracking", detail: "KPI dashboards, weekly reporting, and continuous improvement frameworks." },
    ],
  },
  {
    id: "full",
    name: "Full Package",
    price: "€9,500",
    desc: "The complete build. Culinary, operations, and the brand presence that fills the room.",
    highlight: true,
    items: [
      { name: "Everything in Complete Operations", detail: "All deliverables from both previous tiers — culinary and operational." },
      { name: "Brand identity & visual design", detail: "Logo, colour palette, typography, brand guidelines, and visual language for your venue." },
      { name: "Website design & development", detail: "Professional hospitality website — strategy, design, development, and launch." },
      { name: "SEO & digital visibility", detail: "Search engine optimisation, local SEO, and digital discovery strategy." },
      { name: "Google Business Profile", detail: "Full setup and optimisation of your Google Business listing for local search." },
      { name: "Social media foundations", detail: "Platform setup, content strategy, visual templates, and posting guidelines." },
      { name: "Photography direction", detail: "Art direction for venue and food photography — shot lists, styling, and brand consistency." },
      { name: "Ongoing brand consultation", detail: "Post-launch brand support, design reviews, and strategic brand guidance." },
    ],
  },
];

export default function Pricing() {
  const [expandedTier, setExpandedTier] = useState<string>("full");
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  return (
    <section id="pricing" style={{ padding: "8rem 0", background: "var(--limestone)", position: "relative", overflow: "hidden" }}>
      <div className="absolute inset-0 z-0">
        <img src="/textures/marble-1.jpg" alt="" className="w-full h-full object-cover" style={{ opacity: 0.2 }} />
      </div>

      <div className="wrap relative z-10">
        <div className="text-center reveal" style={{ marginBottom: "4rem" }}>
          <span className="label">Pricing</span>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.2rem, 5vw, 3.8rem)", fontWeight: 400, color: "var(--charcoal)", lineHeight: 1.05 }}>
            Three tiers.<br />One standard.
          </h2>
          <p style={{ marginTop: "1rem", fontSize: "0.95rem", fontWeight: 300, color: "var(--stone-dark)", lineHeight: 1.85, maxWidth: "48ch", margin: "1rem auto 0" }}>
            Every engagement is scoped to your venue. These are starting points — the discovery call defines the rest.
          </p>
        </div>

        {/* Tier selector */}
        <div className="flex justify-center gap-2 mb-8 reveal" style={{ transitionDelay: "0.1s" }}>
          {tiers.map(t => (
            <button
              key={t.id}
              onClick={() => setExpandedTier(t.id)}
              style={{
                padding: "0.65rem 1.5rem",
                background: expandedTier === t.id ? "var(--charcoal)" : "transparent",
                color: expandedTier === t.id ? "var(--limestone)" : "var(--stone-dark)",
                border: expandedTier === t.id ? "none" : "1px solid var(--border-s)",
                borderRadius: 4,
                fontSize: "0.55rem",
                fontWeight: 500,
                letterSpacing: "0.15em",
                textTransform: "uppercase" as const,
                fontFamily: "var(--font-body)",
                cursor: "pointer",
                transition: "all 0.3s",
              }}
            >
              {t.name}
              {t.highlight && <span style={{ display: "inline-block", width: 5, height: 5, borderRadius: "50%", background: "var(--copper)", marginLeft: 6, verticalAlign: "middle" }} />}
            </button>
          ))}
        </div>

        {/* Active tier detail */}
        {tiers.filter(t => t.id === expandedTier).map(t => (
          <div key={t.id} className="reveal" style={{ border: "1px solid var(--border)", borderRadius: 8, overflow: "hidden", transitionDelay: "0.15s" }}>
            {/* Header */}
            <div style={{ padding: "2.5rem 3rem", background: t.highlight ? "var(--charcoal-deep)" : "#fff", position: "relative", overflow: "hidden" }}>
              {t.highlight && (
                <div className="absolute inset-0 z-0">
                  <img src="/textures/dark-stone.jpg" alt="" className="w-full h-full object-cover" style={{ opacity: 0.2 }} />
                </div>
              )}
              <div className="relative z-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3" style={{ marginBottom: "0.5rem" }}>
                    <span style={{ fontSize: "0.45rem", fontWeight: 500, letterSpacing: "0.3em", textTransform: "uppercase" as const, color: "var(--copper)" }}>{t.name}</span>
                    {t.highlight && <span style={{ fontSize: "0.4rem", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase" as const, color: "var(--limestone)", background: "var(--copper)", padding: "0.2rem 0.5rem", borderRadius: 2 }}>Recommended</span>}
                  </div>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 5vw, 3.5rem)", fontWeight: 400, color: t.highlight ? "var(--limestone)" : "var(--charcoal)", lineHeight: 1 }}>{t.price}</div>
                  <span style={{ fontSize: "0.55rem", fontWeight: 400, color: "var(--stone)", marginTop: "0.25rem", display: "block" }}>starting from</span>
                </div>
                <p style={{ fontSize: "0.9rem", fontWeight: 300, color: t.highlight ? "var(--stone)" : "var(--stone-dark)", lineHeight: 1.8, maxWidth: "38ch" }}>{t.desc}</p>
              </div>
            </div>

            {/* Items list — expandable */}
            <div>
              {t.items.map((item, j) => (
                <div key={item.name} style={{ borderTop: "1px solid var(--border)" }}>
                  <button
                    onClick={() => setExpandedItem(expandedItem === `${t.id}-${j}` ? null : `${t.id}-${j}`)}
                    className="w-full text-left flex items-center justify-between"
                    style={{ padding: "1.1rem 3rem", background: expandedItem === `${t.id}-${j}` ? "var(--limestone)" : "#fff", border: "none", cursor: "pointer", fontFamily: "inherit", transition: "background 0.2s" }}
                  >
                    <div className="flex items-center gap-3">
                      <span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--copper)", opacity: 0.4, flexShrink: 0 }} />
                      <span style={{ fontSize: "0.85rem", fontWeight: 400, color: "var(--charcoal)" }}>{item.name}</span>
                    </div>
                    <span style={{ fontSize: "0.9rem", color: "var(--stone)", transition: "transform 0.3s", transform: expandedItem === `${t.id}-${j}` ? "rotate(180deg)" : "rotate(0)", display: "inline-block" }}>&#8964;</span>
                  </button>
                  <div style={{ maxHeight: expandedItem === `${t.id}-${j}` ? 120 : 0, opacity: expandedItem === `${t.id}-${j}` ? 1 : 0, overflow: "hidden", transition: "max-height 0.4s ease, opacity 0.3s ease" }}>
                    <div style={{ padding: "0 3rem 1.1rem 3rem", paddingLeft: "3.75rem" }}>
                      <p style={{ fontSize: "0.82rem", fontWeight: 300, color: "var(--stone-dark)", lineHeight: 1.75 }}>{item.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div style={{ padding: "2rem 3rem", borderTop: "1px solid var(--border)", background: "#fff" }}>
              <a href="#contact" className={t.highlight ? "btn btn-copper btn-lg" : "btn btn-dark btn-lg"} style={{ width: "100%", justifyContent: "center" }}>
                Book a Discovery Call — {t.name}
              </a>
            </div>
          </div>
        ))}

        <p className="text-center reveal" style={{ marginTop: "2rem", fontSize: "0.75rem", fontWeight: 300, color: "var(--stone)", fontStyle: "italic" }}>
          All prices are indicative starting points. Final scope and pricing defined during the discovery call.
        </p>
      </div>
    </section>
  );
}
