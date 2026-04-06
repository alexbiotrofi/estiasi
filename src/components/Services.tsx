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
  const pinnedRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !pinnedRef.current || !descRef.current) return;
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

      // Pinned section — each service cycles through with dramatic transforms
      const slides = gsap.utils.toArray<HTMLElement>(".svc-slide");
      const totalSlides = slides.length;

      // Master timeline pinned for totalSlides * 100vh of scroll
      const master = gsap.timeline({
        scrollTrigger: {
          trigger: pinnedRef.current,
          start: "top top",
          end: () => `+=${totalSlides * 100}%`,
          scrub: 0.8,
          pin: true,
          anticipatePin: 1,
        },
      });

      slides.forEach((slide, i) => {
        const word = slide.querySelector<HTMLElement>(".svc-giant");
        const desc = slide.querySelector<HTMLElement>(".svc-slide-desc");
        const num = slide.querySelector<HTMLElement>(".svc-slide-num");
        const copper = slide.querySelector<HTMLElement>(".svc-copper-line");

        const segStart = i / totalSlides;
        const segDur = 1 / totalSlides;

        // ENTER: word comes from right, scaled down, blurred, rotated slightly
        master.fromTo(word, {
          xPercent: 120,
          scale: 0.4,
          opacity: 0,
          filter: "blur(12px)",
          rotation: 3,
        }, {
          xPercent: 0,
          scale: 1,
          opacity: 1,
          filter: "blur(0px)",
          rotation: 0,
          duration: segDur * 0.35,
          ease: "power3.out",
        }, segStart);

        // Number fades in
        master.fromTo(num, { opacity: 0 }, {
          opacity: 0.03,
          duration: segDur * 0.3,
        }, segStart + segDur * 0.05);

        // Copper line scales in
        master.fromTo(copper, { scaleX: 0 }, {
          scaleX: 1,
          duration: segDur * 0.2,
          ease: "power2.inOut",
        }, segStart + segDur * 0.1);

        // Description: each word blur-reveals
        const descWords = desc?.querySelectorAll("span");
        if (descWords) {
          descWords.forEach((dw, j) => {
            master.fromTo(dw, {
              filter: "blur(6px)",
              opacity: 0,
            }, {
              filter: "blur(0px)",
              opacity: 1,
              duration: segDur * 0.03,
              ease: "power2.out",
            }, segStart + segDur * 0.25 + j * segDur * 0.015);
          });
        }

        // HOLD — word sits at centre (natural gap from enter→exit timing)

        // EXIT: word flies off to the left, scales up, blurs
        if (i < totalSlides - 1) {
          master.to(word, {
            xPercent: -120,
            scale: 1.2,
            opacity: 0,
            filter: "blur(8px)",
            rotation: -2,
            duration: segDur * 0.3,
            ease: "power3.in",
          }, segStart + segDur * 0.65);

          master.to(num, { opacity: 0, duration: segDur * 0.15 }, segStart + segDur * 0.7);
          master.to(copper, { scaleX: 0, transformOrigin: "right", duration: segDur * 0.15 }, segStart + segDur * 0.7);

          if (descWords) {
            master.to(descWords, {
              filter: "blur(4px)",
              opacity: 0,
              duration: segDur * 0.1,
              stagger: 0.001,
            }, segStart + segDur * 0.65);
          }
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

      {/* Pinned viewport — words cycle through */}
      <div ref={pinnedRef} style={{ height: "100vh", overflow: "hidden", position: "relative" }}>
        {/* Copper glow */}
        <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)", width: "1200px", height: "600px", background: "radial-gradient(50% 50% at 50% 50%, rgba(176,115,64,0.07) 0%, transparent 70%)", pointerEvents: "none", zIndex: 0 }} />

        {/* All slides stacked on top of each other — only one visible at a time via GSAP */}
        {services.map((s, i) => (
          <div
            key={s.name}
            className="svc-slide"
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 1,
            }}
          >
            {/* Giant number */}
            <div className="svc-slide-num" style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              fontFamily: "var(--font-display)",
              fontSize: "clamp(18rem, 35vw, 30rem)",
              fontWeight: 400,
              color: "var(--limestone)",
              opacity: 0,
              lineHeight: 0.85,
              letterSpacing: "-0.05em",
              pointerEvents: "none",
              userSelect: "none",
            }}>
              {String(i + 1).padStart(2, "0")}
            </div>

            <div style={{ textAlign: "center", position: "relative", zIndex: 1, padding: "0 2rem" }}>
              {/* Copper line */}
              <div className="svc-copper-line" style={{ width: "48px", height: "2px", background: "var(--copper)", margin: "0 auto 2rem", opacity: 0.6, transformOrigin: "left" }} />

              {/* THE WORD */}
              <div className="svc-giant" style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(5rem, 15vw, 13rem)",
                fontWeight: 400,
                letterSpacing: "-0.04em",
                color: "var(--limestone)",
                lineHeight: 0.85,
                marginBottom: "2.5rem",
                whiteSpace: "nowrap" as const,
                willChange: "transform, opacity, filter",
                opacity: 0,
              }}>
                {s.name}
              </div>

              {/* Description — pre-split into spans for blur animation */}
              <div className="svc-slide-desc" style={{ maxWidth: "440px", margin: "0 auto" }}>
                {s.desc.split(" ").map((w, j) => (
                  <span key={j} style={{
                    display: "inline-block",
                    marginRight: "0.25em",
                    fontSize: "0.95rem",
                    fontWeight: 300,
                    color: "var(--white-70)",
                    lineHeight: 1.9,
                    opacity: 0,
                    filter: "blur(6px)",
                    willChange: "opacity, filter",
                  }}>{w}</span>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* Counter at bottom */}
        <div style={{ position: "absolute", bottom: "3rem", left: "50%", transform: "translateX(-50%)", zIndex: 2 }}>
          <span style={{ fontSize: "0.5rem", fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase" as const, color: "var(--white-30)" }}>Scroll to explore</span>
        </div>
      </div>

      <div className="wrap" style={{ padding: "4rem 40px", textAlign: "center" }}>
        <a href="#pricing" className="btn" style={{ fontSize: "0.55rem" }}>See Pricing</a>
      </div>
    </section>
  );
}
