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
  { title: "Staff Management Systems", desc: "Scheduling, performance tracking, and HR tools." },
  { title: "Reservations & Bookings", desc: "Booking system selection, configuration, and onboarding." },
  { title: "Leads & CRM", desc: "Lead tracking and client management systems." },
  { title: "Invoicing & Payments", desc: "Invoicing infrastructure and payment workflows." },
  { title: "Brand Development", desc: "Logo, identity, visual language, and brand guidelines." },
  { title: "Website Design", desc: "Strategy, design, and development of hospitality websites." },
  { title: "SEO & Digital Visibility", desc: "Search optimisation, Google Business, local discovery." },
];

export default function Services() {
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <section id="services" className="relative py-28 md:py-36 overflow-hidden marble-bg">
      <div className="orb orb-teal" style={{ bottom: "10%", right: "-12%" }} />

      <div className="relative z-10 max-w-[1100px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="sect-num reveal">03 &mdash; Services</span>
          <h2
            className="mt-3 reveal"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)",
              fontWeight: 400,
              color: "var(--charcoal)",
              letterSpacing: "-0.01em",
              lineHeight: 1.15,
            }}
          >
            Three Ways We Work
          </h2>
          <p
            className="mt-5 max-w-lg mx-auto reveal"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "1rem",
              fontWeight: 300,
              color: "var(--clay)",
              lineHeight: 1.8,
            }}
          >
            Each service line delivers structured deliverables, clear
            methodologies, and measurable outcomes.
          </p>
        </div>

        {/* Service accordion */}
        <div className="space-y-4 mb-20 md:mb-28">
          {services.map((service, i) => (
            <div
              key={service.num}
              className="glass-strong relative overflow-hidden cursor-pointer reveal"
              style={{ borderRadius: "20px" }}
              onClick={() => setExpanded(expanded === i ? null : i)}
            >
              <div className="flex items-center justify-between p-6 md:p-8">
                <div className="flex items-center gap-5 md:gap-8">
                  <span
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                      fontWeight: 300,
                      color: "var(--teal)",
                      opacity: 0.25,
                    }}
                  >
                    {service.num}
                  </span>
                  <div>
                    <h3
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: "clamp(1.15rem, 2vw, 1.5rem)",
                        fontWeight: 400,
                        color: "var(--charcoal)",
                      }}
                    >
                      {service.title}
                    </h3>
                    <p
                      className="mt-1 hidden md:block"
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.82rem",
                        fontWeight: 300,
                        color: "var(--clay)",
                      }}
                    >
                      {service.subtitle}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 md:gap-6">
                  <span
                    className="hidden md:inline-block text-[0.65rem] uppercase px-4 py-1.5 rounded-full"
                    style={{
                      letterSpacing: "0.15em",
                      fontWeight: 500,
                      color: "var(--copper)",
                      background: "rgba(184,112,58,0.1)",
                      border: "1px solid rgba(184,112,58,0.15)",
                    }}
                  >
                    {service.price}
                  </span>
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-500"
                    style={{
                      border: "1px solid rgba(200,192,182,0.4)",
                      transform: expanded === i ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M1 3.5L5 7.5L9 3.5" stroke="var(--clay)" strokeWidth="1.2" />
                    </svg>
                  </div>
                </div>
              </div>

              <div
                className="transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{
                  maxHeight: expanded === i ? "600px" : "0px",
                  opacity: expanded === i ? 1 : 0,
                  overflow: "hidden",
                }}
              >
                <div className="px-6 md:px-8 pb-7 md:pb-8">
                  <div className="h-[1px] mb-5" style={{ background: "linear-gradient(90deg, transparent, rgba(200,192,182,0.4), transparent)" }} />
                  <div className="grid md:grid-cols-2 gap-x-8 gap-y-3">
                    {service.items.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ background: "var(--teal)", opacity: 0.4 }} />
                        <span
                          style={{
                            fontFamily: "var(--font-sans)",
                            fontSize: "0.85rem",
                            fontWeight: 300,
                            color: "var(--clay)",
                            lineHeight: 1.6,
                          }}
                        >
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 md:hidden">
                    <span
                      className="text-[0.65rem] uppercase px-4 py-1.5 rounded-full"
                      style={{
                        letterSpacing: "0.15em",
                        fontWeight: 500,
                        color: "var(--copper)",
                        background: "rgba(184,112,58,0.1)",
                        border: "1px solid rgba(184,112,58,0.15)",
                      }}
                    >
                      {service.price}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add-ons */}
        <div className="reveal">
          <div className="text-center mb-10">
            <span className="sect-num">Optional Add-Ons</span>
            <h3
              className="mt-3"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                fontWeight: 400,
                color: "var(--charcoal)",
              }}
            >
              Extend Any Engagement
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 stagger-children">
            {addOns.map((addon) => (
              <div key={addon.title} className="glass relative p-6 group cursor-default">
                <h4
                  className="group-hover:text-teal transition-colors duration-300"
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.1rem",
                    fontWeight: 500,
                    color: "var(--charcoal)",
                    marginBottom: "0.4rem",
                  }}
                >
                  {addon.title}
                </h4>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.82rem",
                    fontWeight: 300,
                    color: "var(--clay)",
                    lineHeight: 1.65,
                  }}
                >
                  {addon.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
