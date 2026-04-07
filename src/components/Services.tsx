"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  "Concept & Positioning",
  "Menu Engineering",
  "Kitchen Design",
  "Staff Training",
  "HACCP & Compliance",
  "Operations & Systems",
  "Brand & Digital",
  "Launch Management",
];

// Repeat for seamless loop
const repeated = [...services, ...services, ...services];

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !row1Ref.current || !row2Ref.current || !introRef.current) return;
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

      // Continuous horizontal scroll — row 1 moves left, row 2 moves right
      const row1 = row1Ref.current!;
      const row2 = row2Ref.current!;

      // Base animation — always running
      gsap.to(row1, { x: "-33.333%", duration: 40, ease: "none", repeat: -1 });
      gsap.to(row2, { x: "0%", duration: 45, ease: "none", repeat: -1 });
      gsap.set(row2, { x: "-33.333%" });

      // Scroll-driven speed boost — scrolling makes it move faster
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        onUpdate: (self) => {
          const velocity = self.getVelocity();
          const boost = Math.min(Math.abs(velocity) / 500, 3);
          gsap.to(row1, { timeScale: 1 + boost, duration: 0.3, overwrite: "auto" });
          gsap.to(row2, { timeScale: 1 + boost, duration: 0.3, overwrite: "auto" });
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} style={{ padding: "40px 0 60px", overflow: "hidden" }}>
      <div className="wrap">
        <div className="flex items-center gap-4" style={{ marginBottom: "3rem" }}>
          <span className="label" style={{ marginBottom: 0 }}>Services</span>
          <span className="sect-num">[ 02 / 07 ]</span>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-start" style={{ marginBottom: "4rem" }}>
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
      </div>

      {/* Horizontal ticker rows */}
      <div style={{ position: "relative" }}>
        {/* Fade edges */}
        <div style={{ position: "absolute", top: 0, bottom: 0, left: 0, width: "15%", background: "linear-gradient(to right, #000, transparent)", zIndex: 2, pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: 0, bottom: 0, right: 0, width: "15%", background: "linear-gradient(to left, #000, transparent)", zIndex: 2, pointerEvents: "none" }} />

        {/* Row 1 — moves left */}
        <div style={{ overflow: "hidden", marginBottom: "0" }}>
          <div ref={row1Ref} className="flex items-center" style={{ width: "max-content" }}>
            {repeated.map((name, i) => (
              <span key={`r1-${i}`} className="flex items-center shrink-0">
                <span style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2.5rem, 5vw, 4rem)",
                  fontWeight: 400,
                  color: "var(--limestone)",
                  letterSpacing: "-0.02em",
                  whiteSpace: "nowrap",
                  padding: "0 1.5rem",
                  opacity: 0.8,
                }}>
                  {name}
                </span>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--copper)", opacity: 0.4, flexShrink: 0 }} />
              </span>
            ))}
          </div>
        </div>

        {/* Copper line */}
        <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, var(--copper), transparent)", opacity: 0.3, margin: "1rem 0" }} />

        {/* Row 2 — moves right, dimmer, slightly smaller */}
        <div style={{ overflow: "hidden" }}>
          <div ref={row2Ref} className="flex items-center" style={{ width: "max-content" }}>
            {[...repeated].reverse().map((name, i) => (
              <span key={`r2-${i}`} className="flex items-center shrink-0">
                <span style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                  fontWeight: 400,
                  color: "var(--limestone)",
                  letterSpacing: "-0.02em",
                  whiteSpace: "nowrap",
                  padding: "0 1.5rem",
                  opacity: 0.25,
                }}>
                  {name}
                </span>
                <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "var(--copper)", opacity: 0.2, flexShrink: 0 }} />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
