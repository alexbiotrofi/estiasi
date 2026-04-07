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
  const descRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !descRef.current) return;
    const ctx = gsap.context(() => {
      // Word blur on intro
      const text = descRef.current!.textContent || "";
      const words = text.split(" ");
      descRef.current!.innerHTML = words.map(w =>
        `<span style="display:inline-block;margin-right:0.25em;filter:blur(3px);opacity:0.15;transition:filter 0.3s ease-out, opacity 0.3s ease-out">${w}</span>`
      ).join("");
      const spans = descRef.current!.querySelectorAll("span");
      ScrollTrigger.create({
        trigger: descRef.current,
        start: "top 75%",
        once: true,
        onEnter: () => {
          spans.forEach((span, i) => {
            setTimeout(() => {
              (span as HTMLElement).style.filter = "blur(0px)";
              (span as HTMLElement).style.opacity = "1";
            }, i * 20);
          });
        },
      });

      // Service rows — wave from below, staggered
      gsap.utils.toArray<HTMLElement>(".svc-row").forEach((row, i) => {
        gsap.fromTo(row, {
          y: 40,
          opacity: 0,
          skewY: 1.5,
        }, {
          y: 0,
          opacity: 1,
          skewY: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: row,
            start: "top 92%",
            once: true,
          },
          delay: i * 0.04,
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} style={{ padding: "90px 0 128px" }}>
      <div className="wrap">
        {/* Header */}
        <div className="flex items-center gap-4" style={{ marginBottom: "3rem" }}>
          <span className="label" style={{ marginBottom: 0 }}>Services</span>
          <span className="sect-num">[ 02 / 07 ]</span>
        </div>

        {/* Intro with word blur */}
        <p ref={descRef} style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 400, color: "var(--limestone)", lineHeight: 1.35, letterSpacing: "-0.02em", maxWidth: "800px", marginBottom: "4rem" }}>
          We design menus that make your guests weak in the knees. Kitchen systems precise enough for a Michelin star. Staff training that turns a team into a unit. And operational architecture that runs when we're not in the room.
        </p>

        {/* Service list */}
        <div className="divider-dark" style={{ marginBottom: "0" }} />
        {services.map((s) => (
          <div key={s.name}>
            <div
              className="svc-row flex items-center justify-between"
              style={{ padding: "1.25rem 0", cursor: "default", opacity: 0, transformOrigin: "bottom left" }}
            >
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.15rem, 2vw, 1.55rem)",
                  fontWeight: 400,
                  color: "var(--limestone)",
                  letterSpacing: "-0.01em",
                  transition: "color 0.2s",
                }}
                onMouseEnter={e => { e.currentTarget.style.color = "var(--copper)"; }}
                onMouseLeave={e => { e.currentTarget.style.color = "var(--limestone)"; }}
              >
                {s.name}
              </span>
              <span style={{ fontSize: "0.72rem", fontWeight: 300, color: "var(--white-30)", maxWidth: "32ch", textAlign: "right", transition: "color 0.2s" }}>{s.desc}</span>
            </div>
            <div className="divider-dark" />
          </div>
        ))}

        <div className="reveal" style={{ marginTop: "3rem", textAlign: "center" }}>
          <a href="#pricing" className="btn" style={{ fontSize: "0.55rem" }}>See Pricing</a>
        </div>
      </div>
    </section>
  );
}
