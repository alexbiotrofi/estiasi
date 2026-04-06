"use client";

import { useState } from "react";

const services = [
  {
    num: "01", title: "Start-Up & Opening",
    sub: "Full-scope launch consultancy, from blank page to grand opening.",
    price: "Starting from €X,XXX",
    items: [
      "Concept creation and positioning", "Hospitality market research and competitor analysis",
      "Kitchen design consultancy and equipment specification", "Menu creation and menu engineering",
      "Food cost control frameworks and waste management", "Food safety, hygiene, and HACCP compliance",
      "Staff recruitment, management structure, and training", "Standard Operating Procedures — full documentation",
      "Health, safety, and fire maintenance procedures", "Soft opening — planning, execution, and debrief",
      "Opening analysis: evaluation and adjustment phase", "Grand opening — operational support and review",
    ],
  },
  {
    num: "02", title: "Restaurant Support",
    sub: "Diagnostic and improvement consultancy for existing venues.",
    price: "Starting from €X,XXX",
    items: [
      "Full review and evaluation of existing operations", "New concept creation or reimagination of existing format",
      "Procedure redesign and targeted operational improvements", "Evaluation and reporting on implemented changes",
    ],
  },
  {
    num: "03", title: "Restaurant & Hotel Review",
    sub: "Independent, anonymous third-party evaluation service.",
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

const addOns = ["Staff Management Systems", "Reservations & Bookings", "Leads & CRM", "Invoicing & Payments", "Brand Development", "Website Design", "SEO & Digital Visibility"];

export default function Services() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="services" style={{ padding: "6rem 0" }}>
      <div className="wrap">
        <span style={{ fontSize: "0.48rem", fontWeight: 500, letterSpacing: "0.5em", textTransform: "uppercase" as const, color: "var(--copper)", display: "block", marginBottom: "0.75rem" }}>Services</span>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 400, color: "var(--charcoal)", lineHeight: 1.1 }}>Three Ways We Work</h2>
        <p style={{ marginTop: "1.25rem", fontSize: "0.95rem", fontWeight: 300, color: "var(--stone-dark)", lineHeight: 1.85, maxWidth: "50ch", marginBottom: "3rem" }}>
          Each service line delivers structured deliverables, clear methodologies, and measurable outcomes.
        </p>

        <div style={{ border: "1px solid var(--border)", borderRadius: 8, overflow: "hidden" }}>
          {services.map((s, i) => (
            <div key={s.num} style={{ borderBottom: i < 2 ? "1px solid var(--border)" : "none" }}>
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full text-left flex items-center justify-between" style={{ padding: "1.5rem 2rem", background: "transparent", border: "none", cursor: "pointer", fontFamily: "inherit" }}>
                <div className="flex items-center gap-5">
                  <span style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", color: "var(--copper)", opacity: 0.25 }}>{s.num}</span>
                  <div>
                    <span style={{ fontFamily: "var(--font-display)", fontSize: "1.15rem", color: "var(--charcoal)", display: "block" }}>{s.title}</span>
                    <span className="hidden md:block" style={{ fontSize: "0.78rem", fontWeight: 300, color: "var(--stone)", marginTop: 2 }}>{s.sub}</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="hidden md:block" style={{ fontSize: "0.52rem", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "var(--copper)" }}>{s.price}</span>
                  <span style={{ fontSize: "1.1rem", color: "var(--stone)", transition: "transform 0.3s", transform: open === i ? "rotate(180deg)" : "rotate(0)", display: "inline-block" }}>&#8964;</span>
                </div>
              </button>
              <div style={{ maxHeight: open === i ? 500 : 0, opacity: open === i ? 1 : 0, overflow: "hidden", transition: "max-height 0.4s ease, opacity 0.3s ease" }}>
                <div style={{ padding: "0 2rem 1.75rem" }}>
                  <div style={{ height: 1, background: "var(--border)", marginBottom: "1.25rem" }} />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                    {s.items.map(item => (
                      <div key={item} className="flex items-start gap-2">
                        <span style={{ width: 3, height: 3, borderRadius: "50%", background: "var(--copper)", marginTop: "0.5rem", flexShrink: 0, opacity: 0.35 }} />
                        <span style={{ fontSize: "0.82rem", fontWeight: 300, color: "var(--stone-dark)", lineHeight: 1.55 }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "3.5rem" }}>
          <span style={{ fontSize: "0.48rem", fontWeight: 500, letterSpacing: "0.5em", textTransform: "uppercase" as const, color: "var(--copper)", display: "block", marginBottom: "1rem" }}>Optional Add-Ons</span>
          <div className="flex flex-wrap gap-2">
            {addOns.map(a => (
              <span key={a} style={{ padding: "0.5rem 1rem", fontSize: "0.55rem", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "var(--charcoal)", border: "1px solid var(--border-s)", borderRadius: 4 }}>{a}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
