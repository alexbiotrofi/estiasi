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

      // Each service word: pinned, sweeps across screen left→right
      gsap.utils.toArray<HTMLElement>(".svc-block").forEach((block) => {
        const word = block.querySelector<HTMLElement>(".svc-word");
        const desc = block.querySelector<HTMLElement>(".svc-desc");
        const num = block.querySelector<HTMLElement>(".svc-num");
        const line = block.querySelector<HTMLElement>(".svc-line");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: block,
            start: "top 70%",
            end: "bottom 30%",
            scrub: 0.5,
          },
        });

        // Word sweeps from left (off-screen) to right (off-screen)
        // Starts at -30% (left), passes through 0% (natural position), ends at 20% (right)
        if (word) {
          tl.fromTo(word, {
            xPercent: -15,
            opacity: 0,
            scale: 0.95,
          }, {
            xPercent: 0,
            opacity: 1,
            scale: 1,
            duration: 0.4,
            ease: "power2.out",
          }, 0);

          // Then it continues moving right and fading
          tl.to(word, {
            xPercent: 15,
            opacity: 0.1,
            duration: 0.4,
            ease: "power2.in",
          }, 0.6);
        }

        // Number fades in with the word
        if (num) {
          tl.fromTo(num, { opacity: 0 }, { opacity: 0.15, duration: 0.3 }, 0.1);
          tl.to(num, { opacity: 0, duration: 0.2 }, 0.7);
        }

        // Description slides up and fades in, then out
        if (desc) {
          tl.fromTo(desc, {
            opacity: 0,
            y: 30,
          }, {
            opacity: 1,
            y: 0,
            duration: 0.3,
            ease: "power2.out",
          }, 0.15);

          tl.to(desc, {
            opacity: 0,
            y: -20,
            duration: 0.3,
          }, 0.65);
        }

        // Copper line draws in
        if (line) {
          tl.fromTo(line, { scaleX: 0 }, { scaleX: 1, duration: 0.3, ease: "power2.inOut" }, 0.1);
          tl.to(line, { scaleX: 0, transformOrigin: "right", duration: 0.2 }, 0.7);
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} style={{ padding: "90px 0 0" }}>
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
      </div>

      {/* Animated service words — full width, each takes scroll space */}
      <div style={{ position: "relative" }}>
        {services.map((s, i) => (
          <div
            key={s.name}
            className="svc-block"
            style={{
              minHeight: "70vh",
              display: "flex",
              alignItems: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Copper accent line */}
            <div className="svc-line" style={{ position: "absolute", top: 0, left: "40px", right: "40px", height: "1px", background: "var(--copper)", opacity: 0.3, transformOrigin: "left" }} />

            {/* Big number background */}
            <div className="svc-num" style={{
              position: "absolute",
              right: "5%",
              top: "50%",
              transform: "translateY(-50%)",
              fontFamily: "var(--font-display)",
              fontSize: "clamp(15rem, 25vw, 22rem)",
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

            <div className="wrap" style={{ position: "relative", zIndex: 1, width: "100%" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "2rem" }}>
                {/* Giant word */}
                <div className="svc-word" style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(4rem, 10vw, 9rem)",
                  fontWeight: 400,
                  letterSpacing: "-0.04em",
                  color: "var(--limestone)",
                  lineHeight: 0.9,
                  whiteSpace: "nowrap" as const,
                }}>
                  {s.name}
                </div>

                {/* Description — right aligned */}
                <div className="svc-desc" style={{ maxWidth: "380px", paddingBottom: "0.5rem", opacity: 0 }}>
                  <p style={{ fontSize: "0.88rem", fontWeight: 300, color: "var(--white-70)", lineHeight: 1.85 }}>
                    {s.desc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="wrap" style={{ padding: "4rem 40px", textAlign: "center" }}>
        <a href="#pricing" className="btn" style={{ fontSize: "0.55rem" }}>See Pricing</a>
      </div>
    </section>
  );
}
