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
  const carouselRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !carouselRef.current || !descRef.current) return;
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

      // 3D Carousel — pinned, scroll drives rotation
      const items = gsap.utils.toArray<HTMLElement>(".carousel-item");
      const total = items.length;
      const angleStep = 360 / total;

      // Set initial 3D positions
      items.forEach((item, i) => {
        const angle = i * angleStep;
        gsap.set(item, {
          rotationX: angle,
          transformOrigin: "center center -400px",
          z: 0,
        });
      });

      // Scroll drives the carousel rotation
      gsap.to(carouselRef.current, {
        rotationX: -360,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current!.querySelector(".carousel-pinned"),
          start: "top top",
          end: () => `+=${total * 150}%`,
          scrub: 1.5,
          pin: true,
          anticipatePin: 1,
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

      {/* 3D Carousel — pinned */}
      <div className="carousel-pinned" style={{ height: "100vh", overflow: "hidden", position: "relative" }}>
        {/* Copper glow */}
        <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)", width: "1000px", height: "500px", background: "radial-gradient(50% 50% at 50% 50%, rgba(176,115,64,0.06) 0%, transparent 70%)", pointerEvents: "none", zIndex: 0 }} />

        {/* Perspective container */}
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", perspective: "1200px", perspectiveOrigin: "50% 50%" }}>
          {/* Rotating carousel */}
          <div
            ref={carouselRef}
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "900px",
              height: "80px",
              transformStyle: "preserve-3d",
            }}
          >
            {services.map((s, i) => {
              const angle = i * (360 / services.length);
              return (
                <div
                  key={s.name}
                  className="carousel-item"
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "80px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0 40px",
                    backfaceVisibility: "hidden",
                    transform: `rotateX(${angle}deg) translateZ(400px)`,
                    borderBottom: "1px solid var(--border-dark)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)",
                      fontWeight: 400,
                      color: "var(--limestone)",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {s.name}
                  </span>
                  <span style={{ fontSize: "0.75rem", fontWeight: 300, color: "var(--white-50)", maxWidth: "35ch", textAlign: "right" }}>
                    {s.desc}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Fade edges — top and bottom gradient masks */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "35%", background: "linear-gradient(to bottom, #000000 0%, transparent 100%)", pointerEvents: "none", zIndex: 1 }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "35%", background: "linear-gradient(to top, #000000 0%, transparent 100%)", pointerEvents: "none", zIndex: 1 }} />

        {/* Scroll hint */}
        <div style={{ position: "absolute", bottom: "3rem", left: "50%", transform: "translateX(-50%)", zIndex: 2 }}>
          <span style={{ fontSize: "0.45rem", fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase" as const, color: "var(--white-30)" }}>Scroll to explore</span>
        </div>
      </div>

      <div className="wrap" style={{ padding: "4rem 40px", textAlign: "center" }}>
        <a href="#pricing" className="btn" style={{ fontSize: "0.55rem" }}>See Pricing</a>
      </div>
    </section>
  );
}
