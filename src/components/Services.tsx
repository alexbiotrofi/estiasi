"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  { name: "Concept", desc: "Market research. Competitor analysis. Brand positioning. We define what your venue is before you open the door." },
  { name: "Menu", desc: "Every dish engineered for flavour and margin. Recipe development, food costing, pricing strategy." },
  { name: "Kitchen", desc: "Design, equipment specs, workflow, SOPs for every station, HACCP. The machine that runs your food." },
  { name: "Team", desc: "Recruitment. Structure. Service standards. Kitchen procedures. We build the team — then make them exceptional." },
  { name: "Launch", desc: "Soft opening. Adjustment. Grand opening. We're on-site until it runs clean. Then we hand it over." },
  { name: "Brand", desc: "Identity, website, SEO, photography, Google Business. The presence that fills tables before word-of-mouth." },
];

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !trackRef.current || !descRef.current) return;
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

      // Pinned horizontal scroll for service words
      const track = trackRef.current!;
      const totalWidth = track.scrollWidth - window.innerWidth;

      gsap.to(track, {
        x: -totalWidth,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current!.querySelector(".svc-pinned"),
          start: "top top",
          end: () => `+=${totalWidth * 1.5}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      // Each word: scale + opacity pulses as it passes through centre
      gsap.utils.toArray<HTMLElement>(".svc-slide").forEach((slide) => {
        const word = slide.querySelector<HTMLElement>(".svc-giant");
        const desc = slide.querySelector<HTMLElement>(".svc-slide-desc");
        const num = slide.querySelector<HTMLElement>(".svc-slide-num");
        const line = slide.querySelector<HTMLElement>(".svc-copper-line");

        if (word) {
          gsap.fromTo(word, { scale: 0.85, opacity: 0.15 }, {
            scale: 1, opacity: 1,
            scrollTrigger: {
              trigger: slide,
              containerAnimation: gsap.getById?.("svc-scroll") || undefined,
              start: "left 80%",
              end: "left 20%",
              scrub: true,
              toggleActions: "play none none reverse",
            },
          });
        }
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

      {/* Pinned horizontal scroll section */}
      <div className="svc-pinned" style={{ height: "100vh", overflow: "hidden", position: "relative" }}>
        {/* Copper glow behind */}
        <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)", width: "1200px", height: "600px", background: "radial-gradient(50% 50% at 50% 50%, rgba(176,115,64,0.06) 0%, transparent 70%)", pointerEvents: "none", zIndex: 0 }} />

        <div
          ref={trackRef}
          className="flex items-center"
          style={{ height: "100%", position: "relative", zIndex: 1 }}
        >
          {/* Left spacer */}
          <div style={{ minWidth: "20vw", flexShrink: 0 }} />

          {services.map((s, i) => (
            <div
              key={s.name}
              className="svc-slide"
              style={{
                minWidth: "100vw",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                flexShrink: 0,
              }}
            >
              {/* Giant number behind */}
              <div className="svc-slide-num" style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                fontFamily: "var(--font-display)",
                fontSize: "clamp(20rem, 40vw, 35rem)",
                fontWeight: 400,
                color: "var(--limestone)",
                opacity: 0.02,
                lineHeight: 0.85,
                letterSpacing: "-0.05em",
                pointerEvents: "none",
                userSelect: "none",
              }}>
                {String(i + 1).padStart(2, "0")}
              </div>

              <div style={{ textAlign: "center", position: "relative", zIndex: 1, padding: "0 2rem" }}>
                {/* Copper line above */}
                <div className="svc-copper-line" style={{ width: "48px", height: "2px", background: "var(--copper)", margin: "0 auto 2rem", opacity: 0.5 }} />

                {/* THE WORD — massive */}
                <div className="svc-giant" style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(6rem, 16vw, 14rem)",
                  fontWeight: 400,
                  letterSpacing: "-0.04em",
                  color: "var(--limestone)",
                  lineHeight: 0.85,
                  marginBottom: "2rem",
                  whiteSpace: "nowrap" as const,
                }}>
                  {s.name}
                </div>

                {/* Description */}
                <div className="svc-slide-desc" style={{ maxWidth: "420px", margin: "0 auto" }}>
                  <p style={{ fontSize: "0.92rem", fontWeight: 300, color: "var(--white-50)", lineHeight: 1.85 }}>
                    {s.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* Right spacer */}
          <div style={{ minWidth: "20vw", flexShrink: 0 }} />
        </div>

        {/* Progress bar at bottom */}
        <div style={{ position: "absolute", bottom: "3rem", left: "40px", right: "40px", height: "1px", background: "var(--border-dark)", zIndex: 2 }}>
          <div className="svc-progress" style={{ height: "100%", background: "var(--copper)", width: "0%", transition: "width 0.1s linear" }} />
        </div>

        {/* Service counter */}
        <div style={{ position: "absolute", bottom: "4rem", right: "40px", zIndex: 2 }}>
          <span style={{ fontSize: "0.5rem", fontWeight: 500, letterSpacing: "0.2em", color: "var(--white-30)" }}>SCROLL →</span>
        </div>
      </div>

      <div className="wrap" style={{ padding: "4rem 40px", textAlign: "center" }}>
        <a href="#pricing" className="btn" style={{ fontSize: "0.55rem" }}>See Pricing</a>
      </div>
    </section>
  );
}
