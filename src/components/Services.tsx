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
  const drumRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const progressRef = useRef<{ value: number }>({ value: 0 });

  useEffect(() => {
    if (!sectionRef.current || !drumRef.current || !descRef.current) return;
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

      // Drum rotation — manual transform in onUpdate for precise control
      const items = gsap.utils.toArray<HTMLElement>(".drum-item");
      const total = items.length;
      const itemAngle = 360 / total;
      const radius = 220; // tighter radius = items closer together

      ScrollTrigger.create({
        trigger: sectionRef.current!.querySelector(".drum-pinned"),
        start: "top top",
        end: () => `+=${total * 120}%`,
        scrub: 1.5,
        pin: true,
        anticipatePin: 1,
        onUpdate: (self) => {
          const rotation = self.progress * 360;
          items.forEach((item, i) => {
            const angle = (i * itemAngle + rotation) % 360;
            // Convert to radians
            const rad = (angle * Math.PI) / 180;
            // Y position on the drum surface
            const y = Math.sin(rad) * radius;
            // Z position (depth)
            const z = Math.cos(rad) * radius;
            // Scale based on depth (front = 1, back = smaller)
            const normalizedZ = (z + radius) / (2 * radius); // 0 = back, 1 = front
            const scale = 0.6 + normalizedZ * 0.4;
            const opacity = 0.05 + normalizedZ * 0.95;
            const blur = (1 - normalizedZ) * 4;

            gsap.set(item, {
              y: y,
              z: z,
              scale: scale,
              opacity: opacity,
              filter: `blur(${blur}px)`,
              zIndex: Math.round(normalizedZ * 100),
            });
          });
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} style={{ padding: "90px 0 0" }}>
      <div className="wrap">
        <div className="flex items-center gap-4" style={{ marginBottom: "3rem" }}>
          <span className="label" style={{ marginBottom: 0 }}>Services</span>
          <span className="sect-num">[ 02 / 07 ]</span>
        </div>
        <p ref={descRef} style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 400, color: "var(--limestone)", lineHeight: 1.35, letterSpacing: "-0.02em", maxWidth: "800px", marginBottom: "4rem" }}>
          We design menus that make your guests weak in the knees. Kitchen systems precise enough for a Michelin star. Staff training that turns a team into a unit. And operational architecture that runs when we're not in the room.
        </p>
      </div>

      {/* Drum — pinned */}
      <div className="drum-pinned" style={{ height: "100vh", overflow: "hidden", position: "relative" }}>
        {/* Copper glow */}
        <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)", width: "1000px", height: "400px", background: "radial-gradient(50% 50% at 50% 50%, rgba(176,115,64,0.05) 0%, transparent 70%)", pointerEvents: "none", zIndex: 0 }} />

        {/* Drum container */}
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div
            ref={drumRef}
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "1000px",
              height: "500px",
              transformStyle: "preserve-3d",
              perspective: "none",
            }}
          >
            {services.map((s) => (
              <div
                key={s.name}
                className="drum-item"
                style={{
                  position: "absolute",
                  width: "100%",
                  left: 0,
                  top: "50%",
                  transform: "translateY(-50%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0 40px",
                  willChange: "transform, opacity, filter",
                  pointerEvents: "none",
                }}
              >
                <span style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                  fontWeight: 400,
                  color: "var(--limestone)",
                  letterSpacing: "-0.01em",
                  whiteSpace: "nowrap" as const,
                }}>
                  {s.name}
                </span>
                <span style={{
                  fontSize: "0.78rem",
                  fontWeight: 300,
                  color: "var(--white-50)",
                  maxWidth: "35ch",
                  textAlign: "right" as const,
                }}>
                  {s.desc}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Top/bottom fades */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "30%", background: "linear-gradient(to bottom, #000 0%, transparent 100%)", pointerEvents: "none", zIndex: 2 }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "30%", background: "linear-gradient(to top, #000 0%, transparent 100%)", pointerEvents: "none", zIndex: 2 }} />

        {/* Centre highlight line */}
        <div style={{ position: "absolute", top: "50%", left: "40px", right: "40px", height: "1px", background: "var(--copper)", opacity: 0.15, transform: "translateY(-30px)", zIndex: 1 }} />
        <div style={{ position: "absolute", top: "50%", left: "40px", right: "40px", height: "1px", background: "var(--copper)", opacity: 0.15, transform: "translateY(30px)", zIndex: 1 }} />

        <div style={{ position: "absolute", bottom: "2.5rem", left: "50%", transform: "translateX(-50%)", zIndex: 3 }}>
          <span style={{ fontSize: "0.45rem", fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase" as const, color: "var(--white-30)" }}>Scroll to explore</span>
        </div>
      </div>

      <div className="wrap" style={{ padding: "4rem 40px", textAlign: "center" }}>
        <a href="#pricing" className="btn" style={{ fontSize: "0.55rem" }}>See Pricing</a>
      </div>
    </section>
  );
}
