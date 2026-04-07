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
  const listRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !listRef.current || !descRef.current) return;
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

      // Wave animation on the service list
      const rows = gsap.utils.toArray<HTMLElement>(".svc-wave-row");
      const names = gsap.utils.toArray<HTMLElement>(".svc-wave-name");
      const descs = gsap.utils.toArray<HTMLElement>(".svc-wave-desc");
      const total = rows.length;

      // Quicksetters for performance
      const xSetters = names.map(n => gsap.quickTo(n, "x", { duration: 0.6, ease: "power4.out" }));
      const opacitySetters = rows.map(r => gsap.quickTo(r, "opacity", { duration: 0.3, ease: "power2.out" }));
      const scaleSetters = names.map(n => gsap.quickTo(n, "scale", { duration: 0.4, ease: "power2.out" }));
      const descOpacitySetters = descs.map(d => gsap.quickTo(d, "opacity", { duration: 0.3, ease: "power2.out" }));

      ScrollTrigger.create({
        trigger: listRef.current,
        start: "top 70%",
        end: "bottom 30%",
        onUpdate: (self) => {
          const progress = self.progress;
          const viewportCenter = window.innerHeight / 2;

          rows.forEach((row, i) => {
            const rect = row.getBoundingClientRect();
            const rowCenter = rect.top + rect.height / 2;
            const distance = Math.abs(rowCenter - viewportCenter);
            const maxDist = window.innerHeight * 0.4;
            const proximity = Math.max(0, 1 - distance / maxDist); // 1 = at centre, 0 = far away

            // Sine wave on X — flows through the list based on scroll progress
            const waveNumber = 2;
            const phase = waveNumber * i + progress * Math.PI * 4 - Math.PI / 2;
            const wave = Math.sin(phase);
            const xOffset = wave * 60 * proximity; // max 60px offset, scaled by proximity

            xSetters[i](xOffset);
            opacitySetters[i](0.25 + proximity * 0.75); // 0.25 → 1.0
            scaleSetters[i](0.95 + proximity * 0.05); // 0.95 → 1.0
            descOpacitySetters[i](proximity * 0.7); // 0 → 0.7

            // Colour change — copper when focused
            if (proximity > 0.8) {
              (names[i] as HTMLElement).style.color = "var(--copper)";
            } else {
              (names[i] as HTMLElement).style.color = "var(--limestone)";
            }
          });
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} style={{ padding: "90px 0 128px" }}>
      <div className="wrap">
        <div className="flex items-center gap-4" style={{ marginBottom: "3rem" }}>
          <span className="label" style={{ marginBottom: 0 }}>Services</span>
          <span className="sect-num">[ 02 / 07 ]</span>
        </div>
        <p ref={descRef} style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 400, color: "var(--limestone)", lineHeight: 1.35, letterSpacing: "-0.02em", maxWidth: "800px", marginBottom: "5rem" }}>
          We design menus that make your guests weak in the knees. Kitchen systems precise enough for a Michelin star. Staff training that turns a team into a unit. And operational architecture that runs when we're not in the room.
        </p>

        {/* Service list with wave animation */}
        <div ref={listRef}>
          <div className="divider-dark" />
          {services.map((s) => (
            <div key={s.name}>
              <div
                className="svc-wave-row flex items-center justify-between"
                style={{
                  padding: "1.1rem 0",
                  cursor: "default",
                  opacity: 0.25,
                  willChange: "opacity",
                }}
              >
                <span
                  className="svc-wave-name"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.2rem, 2.2vw, 1.7rem)",
                    fontWeight: 400,
                    color: "var(--limestone)",
                    letterSpacing: "-0.01em",
                    transition: "color 0.3s ease-out",
                    willChange: "transform",
                    transformOrigin: "left center",
                  }}
                >
                  {s.name}
                </span>
                <span
                  className="svc-wave-desc"
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 300,
                    color: "var(--white-50)",
                    maxWidth: "32ch",
                    textAlign: "right" as const,
                    opacity: 0,
                    willChange: "opacity",
                  }}
                >
                  {s.desc}
                </span>
              </div>
              <div className="divider-dark" />
            </div>
          ))}
        </div>

        <div className="reveal" style={{ marginTop: "3rem", textAlign: "center" }}>
          <a href="#pricing" className="btn" style={{ fontSize: "0.55rem" }}>See Pricing</a>
        </div>
      </div>
    </section>
  );
}
