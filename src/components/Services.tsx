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
            (span as HTMLElement).style.color = revealed ? "var(--limestone)" : "var(--copper)";
            (span as HTMLElement).style.opacity = revealed ? "1" : "0.4";
          });
        },
      });

      // 3D perspective card rotation for each service
      gsap.utils.toArray<HTMLElement>(".svc-card").forEach((card) => {
        const name = card.querySelector<HTMLElement>(".svc-name");
        const desc = card.querySelector<HTMLElement>(".svc-desc");
        const line = card.querySelector<HTMLElement>(".svc-line");

        // Scroll-driven: rotateX from tilted → flat → tilted the other way
        gsap.fromTo(card, {
          rotateX: 45,
          opacity: 0,
          scale: 0.9,
          transformOrigin: "center bottom",
          filter: "blur(3px)",
        }, {
          rotateX: 0,
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top 95%",
            end: "top 45%",
            scrub: 1.5,
          },
        });

        // Exit: rotate the other way
        gsap.to(card, {
          rotateX: -30,
          opacity: 0.15,
          scale: 0.95,
          filter: "blur(2px)",
          transformOrigin: "center top",
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top 25%",
            end: "top -10%",
            scrub: 1.5,
          },
        });

        // Description slides in from right
        if (desc) {
          gsap.fromTo(desc, { x: 40, opacity: 0 }, {
            x: 0, opacity: 1, ease: "none",
            scrollTrigger: { trigger: card, start: "top 80%", end: "top 45%", scrub: 1.5 },
          });
        }

        // Copper line scales in
        if (line) {
          gsap.fromTo(line, { scaleX: 0 }, {
            scaleX: 1, ease: "none",
            scrollTrigger: { trigger: card, start: "top 85%", end: "top 50%", scrub: 1.5 },
          });
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} style={{ padding: "40px 0 60px", perspective: "1200px" }}>
      <div className="wrap">
        <div className="flex items-center gap-4" style={{ marginBottom: "3rem" }}>
          <span className="label" style={{ marginBottom: 0 }}>Services</span>
          <span className="sect-num">[ 02 / 07 ]</span>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-start" style={{ marginBottom: "3rem" }}>
          <div style={{ flex: "1 1 0" }}>
            <p ref={introRef} style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 400, color: "var(--copper)", lineHeight: 1.35, letterSpacing: "-0.02em" }}>
              We design menus that make your guests weak in the knees. Kitchen systems precise enough for a Michelin star. Staff training that turns a team into a unit. And operational architecture that runs when we're not in the room.
            </p>
          </div>
          <div className="reveal hidden md:block" style={{ width: "280px", flexShrink: 0, alignSelf: "stretch" }}>
            <div style={{ height: "100%", minHeight: "200px", borderRadius: "20px", overflow: "hidden", position: "relative", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 0 0 1px rgba(255,255,255,0.06), 0 2px 4px rgba(0,0,0,0.2), 0 8px 80px rgba(176,115,64,0.08), inset 0 4px 12px rgba(176,115,64,0.06)" }}>
              <img src="/photos/chef-plating.jpg" alt="" className="w-full h-full object-cover" style={{ opacity: 0.85 }} />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "40%", background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)", backdropFilter: "blur(2px)" }} />
              <div style={{ position: "absolute", bottom: "1rem", left: "1rem" }}>
                <span style={{ fontSize: "0.42rem", fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase" as const, color: "var(--copper)" }}>Culinary Consulting</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3D service cards */}
        <div style={{ perspective: "1200px" }}>
          {services.map((s) => (
            <div key={s.name}>
              <div
                className="svc-card"
                style={{
                  padding: "1.4rem 0",
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  transformStyle: "preserve-3d",
                  willChange: "transform, opacity, filter",
                }}
              >
                <span className="svc-name" style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)",
                  fontWeight: 400,
                  color: "var(--limestone)",
                  letterSpacing: "-0.01em",
                  whiteSpace: "nowrap" as const,
                  flexShrink: 0,
                }}>
                  {s.name}
                </span>
                <span className="svc-line" style={{
                  width: "200px",
                  height: "1px",
                  background: "linear-gradient(90deg, transparent 0%, var(--copper) 30%, var(--copper) 70%, transparent 100%)",
                  flexShrink: 0,
                  alignSelf: "center",
                  transformOrigin: "left",
                }} />
                <span className="svc-desc" style={{
                  fontSize: "0.88rem",
                  fontWeight: 400,
                  color: "rgba(255,255,255,0.8)",
                  whiteSpace: "nowrap" as const,
                  flexShrink: 0,
                }}>
                  {s.desc}
                </span>
              </div>
              <div className="divider-dark" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
