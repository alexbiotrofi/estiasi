"use client";

import { useState } from "react";

const services = [
  {
    num: "01",
    title: "Start-Up & Opening",
    subtitle: "Full-scope launch consultancy, from blank page to grand opening.",
    price: "Starting from €X,XXX",
    items: [
      "Concept creation and positioning",
      "Hospitality market research and competitor analysis",
      "Kitchen design consultancy and equipment specification",
      "Menu creation and menu engineering",
      "Food cost control frameworks and waste management",
      "Food safety, hygiene, and HACCP compliance",
      "Staff recruitment, management structure, and training",
      "Standard Operating Procedures — full documentation",
      "Health, safety, and fire maintenance procedures",
      "Soft opening — planning, execution, and debrief",
      "Opening analysis: evaluation and adjustment phase",
      "Grand opening — operational support and review",
    ],
  },
  {
    num: "02",
    title: "Restaurant Support",
    subtitle: "Diagnostic and improvement consultancy for existing venues.",
    price: "Starting from €X,XXX",
    items: [
      "Full review and evaluation of existing operations",
      "New concept creation or reimagination of existing format",
      "Procedure redesign and targeted operational improvements",
      "Evaluation and reporting on implemented changes",
    ],
  },
  {
    num: "03",
    title: "Restaurant & Hotel Review",
    subtitle: "Independent, anonymous third-party evaluation service.",
    price: "Starting from €XXX",
    items: [
      "Mystery visit — unannounced, as paying guests",
      "Dual-perspective evaluation: customer experience and professional chef's eye",
      "Written review report: service, atmosphere, food quality, plating, timing",
      "Technical improvement overview with prioritised recommendations",
      "Optional follow-up debrief call",
    ],
  },
];

const addOns = [
  "Staff Management Systems",
  "Reservations & Bookings",
  "Leads & CRM",
  "Invoicing & Payments",
  "Brand Development",
  "Website Design",
  "SEO & Digital Visibility",
];

export default function Services() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="services" className="section">
      <div className="wrap">
        <span className="label">Services</span>
        <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 400, color: "var(--charcoal)", lineHeight: 1.1, marginTop: "0.75rem" }}>
          Three Ways We Work
        </h2>
        <p style={{ marginTop: "1.25rem", fontSize: "0.95rem", fontWeight: 300, color: "var(--stone-dark)", lineHeight: 1.85, maxWidth: "50ch", marginBottom: "3rem" }}>
          Each service line delivers structured deliverables, clear
          methodologies, and measurable outcomes.
        </p>

        {/* Accordion */}
        <div style={{ border: "1px solid var(--border)", borderRadius: "8px", overflow: "hidden" }}>
          {services.map((s, i) => (
            <div key={s.num} style={{ borderBottom: i < services.length - 1 ? "1px solid var(--border)" : "none" }}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left flex items-center justify-between"
                style={{ padding: "1.5rem 2rem", background: "transparent", border: "none", cursor: "pointer" }}
              >
                <div className="flex items-center gap-4 md:gap-6">
                  <span style={{ fontFamily: "var(--font-serif)", fontSize: "1.5rem", color: "var(--copper)", opacity: 0.3 }}>{s.num}</span>
                  <div>
                    <span style={{ fontFamily: "var(--font-serif)", fontSize: "1.2rem", color: "var(--charcoal)", display: "block" }}>{s.title}</span>
                    <span className="hidden md:block" style={{ fontSize: "0.8rem", fontWeight: 300, color: "var(--stone)", marginTop: "0.15rem" }}>{s.subtitle}</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="hidden md:block" style={{ fontSize: "0.55rem", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--copper)" }}>{s.price}</span>
                  <span style={{ fontSize: "1.2rem", color: "var(--stone)", transition: "transform 0.3s", transform: open === i ? "rotate(180deg)" : "rotate(0)" }}>&#8964;</span>
                </div>
              </button>

              <div style={{ maxHeight: open === i ? "500px" : "0", opacity: open === i ? 1 : 0, overflow: "hidden", transition: "max-height 0.4s ease, opacity 0.3s ease" }}>
                <div style={{ padding: "0 2rem 1.75rem 2rem" }}>
                  <div style={{ height: "1px", background: "var(--border)", marginBottom: "1.25rem" }} />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                    {s.items.map((item) => (
                      <div key={item} className="flex items-start gap-2">
                        <span style={{ width: "3px", height: "3px", borderRadius: "50%", background: "var(--copper)", marginTop: "0.5rem", flexShrink: 0, opacity: 0.35 }} />
                        <span style={{ fontSize: "0.82rem", fontWeight: 300, color: "var(--stone-dark)", lineHeight: 1.55 }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add-ons */}
        <div style={{ marginTop: "4rem" }}>
          <span className="label">Optional Add-Ons</span>
          <div className="flex flex-wrap gap-2" style={{ marginTop: "1rem" }}>
            {addOns.map((a) => (
              <span
                key={a}
                style={{
                  padding: "0.5rem 1rem",
                  fontSize: "0.6rem",
                  fontWeight: 500,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--charcoal)",
                  border: "1px solid var(--border-strong)",
                  borderRadius: "4px",
                }}
              >
                {a}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
