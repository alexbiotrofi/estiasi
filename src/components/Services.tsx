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
    <section id="services" className="relative py-32 md:py-44 overflow-hidden marble-bg">
      <div className="orb orb-teal" style={{ bottom: "10%", right: "-12%" }} />
      <div className="orb orb-white" style={{ top: "20%", left: "10%" }} />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="sect-num reveal">03 &mdash; Services</span>
          <h2
            className="font-serif mt-3 reveal"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
              fontWeight: 400,
              color: "var(--charcoal)",
              letterSpacing: "-0.01em",
            }}
          >
            Three Ways We Work
          </h2>
          <p
            className="mt-4 max-w-lg mx-auto reveal"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.85rem",
              fontWeight: 300,
              color: "var(--clay)",
              lineHeight: 1.75,
            }}
          >
            Each service line delivers structured deliverables, clear methodologies,
            and measurable outcomes.
          </p>
        </div>

        {/* Service accordion */}
        <div className="space-y-4 mb-24">
          {services.map((service, i) => (
            <div
              key={service.num}
              className="glass-strong glass-shine relative overflow-hidden cursor-pointer reveal"
              onClick={() => setExpanded(expanded === i ? null : i)}
            >
              {/* Header row */}
              <div className="flex items-center justify-between p-7 md:p-10">
                <div className="flex items-center gap-6 md:gap-10">
                  <span
                    className="font-serif text-3xl md:text-4xl"
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontWeight: 300,
                      color: "var(--teal)",
                      opacity: 0.3,
                    }}
                  >
                    {service.num}
                  </span>
                  <div>
                    <h3
                      className="font-serif text-xl md:text-2xl"
                      style={{
                        fontFamily: "var(--font-serif)",
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
                        fontSize: "0.8rem",
                        fontWeight: 300,
                        color: "var(--clay)",
                      }}
                    >
                      {service.subtitle}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <span
                    className="hidden md:block text-[0.65rem] uppercase tracking-[0.15em] px-4 py-1.5 rounded-full"
                    style={{
                      fontWeight: 500,
                      color: "var(--copper)",
                      background: "rgba(184,112,58,0.08)",
                    }}
                  >
                    {service.price}
                  </span>
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-500"
                    style={{
                      border: "1px solid rgba(44,44,44,0.1)",
                      transform: expanded === i ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  >
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      style={{ color: "var(--charcoal)", opacity: 0.4 }}
                    >
                      <path d="M1 3.5L5 7.5L9 3.5" stroke="currentColor" strokeWidth="1" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Expanded content */}
              <div
                className="overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{
                  maxHeight: expanded === i ? "600px" : "0px",
                  opacity: expanded === i ? 1 : 0,
                }}
              >
                <div className="px-7 md:px-10 pb-8 md:pb-10">
                  <div
                    className="h-[1px] mb-6"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, var(--stone), transparent)",
                      opacity: 0.2,
                    }}
                  />
                  <p
                    className="md:hidden mb-4"
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.8rem",
                      fontWeight: 300,
                      color: "var(--clay)",
                      fontStyle: "italic",
                    }}
                  >
                    {service.subtitle}
                  </p>
                  <div className="grid md:grid-cols-2 gap-3">
                    {service.items.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <span
                          className="w-[3px] h-[3px] rounded-full mt-2 shrink-0"
                          style={{ background: "var(--teal)", opacity: 0.4 }}
                        />
                        <span
                          style={{
                            fontFamily: "var(--font-sans)",
                            fontSize: "0.8rem",
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
                  <div className="mt-6 md:hidden">
                    <span
                      className="text-[0.65rem] uppercase tracking-[0.15em] px-4 py-1.5 rounded-full"
                      style={{
                        fontWeight: 500,
                        color: "var(--copper)",
                        background: "rgba(184,112,58,0.08)",
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
          <div className="text-center mb-12">
            <span className="sect-num">Optional Add-Ons</span>
            <h3
              className="font-serif mt-3"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                fontWeight: 400,
                color: "var(--charcoal)",
              }}
            >
              Extend Any Engagement
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 stagger-children">
            {addOns.map((addon) => (
              <div
                key={addon.title}
                className="glass glass-shine relative p-6 group cursor-default"
              >
                <h4
                  className="font-serif text-lg mb-2 group-hover:text-teal transition-colors duration-300"
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontWeight: 500,
                    color: "var(--charcoal)",
                  }}
                >
                  {addon.title}
                </h4>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.78rem",
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
