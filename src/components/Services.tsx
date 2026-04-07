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

      // Proximity-based depth wave
      const rows = gsap.utils.toArray<HTMLElement>(".svc-row");
      const names = gsap.utils.toArray<HTMLElement>(".svc-name");
      const descs = gsap.utils.toArray<HTMLElement>(".svc-desc");

      function update() {
        const viewportCenter = window.innerHeight / 2;

        rows.forEach((row, i) => {
          const rect = row.getBoundingClientRect();
          const rowCenter = rect.top + rect.height / 2;
          const distance = Math.abs(rowCenter - viewportCenter);
          const maxDist = window.innerHeight * 0.35;
          const proximity = Math.max(0, 1 - distance / maxDist); // 1 = centre, 0 = far
          const eased = proximity * proximity; // quadratic easing for snappier falloff

          // Scale: items at centre are bigger (1.15x), far items smaller (0.85x)
          const scale = 0.85 + eased * 0.3;

          // Opacity: centre = 1, far = 0.2
          const opacity = 0.2 + eased * 0.8;

          // Font size boost for the focused item
          const fontSize = 1 + eased * 0.4; // 1rem → 1.4rem multiplier

          // Blur: far items slightly blurred
          const blur = (1 - eased) * 2;

          // Description visibility
          const descOpacity = eased * 0.8;

          // Apply
          gsap.set(row, { opacity, scale, transformOrigin: "left center" });
          gsap.set(names[i], {
            fontSize: `${fontSize * 1.5}rem`,
            filter: `blur(${blur}px)`,
            color: eased > 0.7 ? "var(--copper)" : "var(--limestone)",
          });
          gsap.set(descs[i], { opacity: descOpacity });
        });

        requestAnimationFrame(update);
      }

      requestAnimationFrame(update);
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

        <div ref={listRef}>
          {services.map((s) => (
            <div key={s.name}>
              <div
                className="svc-row flex items-center justify-between"
                style={{
                  padding: "0.9rem 0",
                  cursor: "default",
                  willChange: "transform, opacity",
                  transformOrigin: "left center",
                }}
              >
                <span
                  className="svc-name"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.5rem",
                    fontWeight: 400,
                    color: "var(--limestone)",
                    letterSpacing: "-0.01em",
                    willChange: "font-size, filter, color",
                    transition: "color 0.25s ease-out",
                    whiteSpace: "nowrap" as const,
                  }}
                >
                  {s.name}
                </span>
                <span
                  className="svc-desc"
                  style={{
                    fontSize: "0.78rem",
                    fontWeight: 300,
                    color: "var(--white-50)",
                    maxWidth: "32ch",
                    textAlign: "right" as const,
                    opacity: 0,
                    willChange: "opacity",
                    transition: "opacity 0.2s ease-out",
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
