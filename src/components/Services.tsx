"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  { name: "Concept & Positioning", desc: "Market research, competitor analysis, brand positioning" },
  { name: "Menu Engineering", desc: "Recipe development, costing, profitability optimisation" },
  { name: "Kitchen Design", desc: "Equipment specification, workflow, layout planning" },
  { name: "Staff Training", desc: "Service standards, kitchen procedures, team development" },
  { name: "HACCP & Compliance", desc: "Food safety frameworks, documentation, audits" },
  { name: "Operations & Systems", desc: "SOPs, booking systems, CRM, stock management" },
  { name: "Brand & Digital", desc: "Identity, website, SEO, photography direction" },
  { name: "Launch Management", desc: "Soft opening, adjustment, grand opening, handover" },
];

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !introRef.current) return;
    const ctx = gsap.context(() => {
      // Copper-to-white intro
      const text = introRef.current!.textContent || "";
      const words = text.split(" ");
      introRef.current!.innerHTML = words.map(w =>
        `<span style="display:inline-block;margin-right:0.25em;color:var(--copper);opacity:0.5;transition:color 0.4s ease-out, opacity 0.4s ease-out">${w}</span>`
      ).join("");
      const introSpans = introRef.current!.querySelectorAll("span");
      ScrollTrigger.create({
        trigger: introRef.current,
        start: "top 80%",
        end: "bottom 40%",
        scrub: 1,
        onUpdate: (self) => {
          introSpans.forEach((span, i) => {
            const revealed = self.progress > i / introSpans.length;
            (span as HTMLElement).style.color = revealed ? "var(--charcoal)" : "var(--copper)";
            (span as HTMLElement).style.opacity = revealed ? "1" : "0.4";
          });
        },
      });

      // Stagger rows in
      gsap.utils.toArray<HTMLElement>(".svc-row").forEach((row, i) => {
        gsap.fromTo(row, { opacity: 0, y: 20 }, {
          opacity: 1, y: 0, duration: 0.5, ease: "power3.out",
          delay: i * 0.05,
          scrollTrigger: { trigger: row, start: "top 92%", once: true },
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="marble-bg" style={{ padding: "64px 0 80px", background: "var(--limestone)" }}>
      <div className="wrap">
        <div className="flex items-center gap-4" style={{ marginBottom: "3rem" }}>
          <span className="label" style={{ marginBottom: 0 }}>Services</span>
          <span className="sect-num">[ 02 / 07 ]</span>
        </div>

        {/* Intro text + image */}
        <div className="flex flex-col md:flex-row gap-8 items-start" style={{ marginBottom: "4rem" }}>
          <div style={{ flex: "1 1 0" }}>
            <p ref={introRef} style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 400, color: "var(--copper)", lineHeight: 1.35, letterSpacing: "-0.02em" }}>
              Menus that tell a story. Kitchens that run themselves. Teams that set a new standard. From concept and compliance to brand and bookings — we build every layer of a venue that works.
            </p>
          </div>
          {/* Photo — always visible */}
          <div style={{ width: "280px", flexShrink: 0, alignSelf: "stretch" }}>
            <div style={{ height: "100%", minHeight: "220px", borderRadius: "20px", overflow: "hidden", position: "relative", border: "1px solid var(--border)", boxShadow: "0 2px 4px rgba(0,0,0,0.06), 0 8px 80px rgba(176,115,64,0.08), inset 0 4px 12px rgba(176,115,64,0.06)" }}>
              <img src="/photos/chef-plating.jpg" alt="" className="w-full h-full object-cover" style={{ opacity: 0.85 }} />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "40%", background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)", backdropFilter: "blur(2px)" }} />
              <div style={{ position: "absolute", bottom: "1rem", left: "1rem" }}>
                <span style={{ fontSize: "0.42rem", fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase" as const, color: "var(--copper)" }}>Culinary Consulting</span>
              </div>
            </div>
          </div>
        </div>

        {/* Service names as a flowing sentence */}
        <div className="reveal" style={{ lineHeight: 1.6 }}>
          {services.map((s, i) => (
            <span key={s.name} className="svc-row" style={{ display: "inline" }}>
              <span
                className="svc-name"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                  fontWeight: 400,
                  color: "var(--charcoal)",
                  letterSpacing: "-0.01em",
                  transition: "color 0.2s ease-out",
                  cursor: "default",
                }}
                onMouseEnter={e => { e.currentTarget.style.color = "var(--copper)"; }}
                onMouseLeave={e => { e.currentTarget.style.color = "var(--charcoal)"; }}
              >
                {s.name}
              </span>
              {i < services.length - 1 && (
                <span style={{ display: "inline-block", margin: "0 0.6em", color: "var(--copper)", opacity: 0.4, fontSize: "clamp(1rem, 2vw, 1.4rem)" }}>·</span>
              )}
            </span>
          ))}
        </div>
        ))}
      </div>
    </section>
  );
}
