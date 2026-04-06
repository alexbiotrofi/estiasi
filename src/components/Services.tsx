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

      // Each service word: fade in on scroll, parallax up slightly
      gsap.utils.toArray<HTMLElement>(".svc-block").forEach((block) => {
        const word = block.querySelector(".svc-word");
        const desc = block.querySelector(".svc-desc");

        if (word) {
          gsap.fromTo(word, { opacity: 0, y: 40 }, {
            opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
            scrollTrigger: { trigger: block, start: "top 80%", once: true },
          });
        }
        if (desc) {
          gsap.fromTo(desc, { opacity: 0, y: 20 }, {
            opacity: 1, y: 0, duration: 0.6, ease: "power3.out", delay: 0.15,
            scrollTrigger: { trigger: block, start: "top 80%", once: true },
          });
        }
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
        <p ref={descRef} style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 400, color: "var(--limestone)", lineHeight: 1.35, letterSpacing: "-0.02em", maxWidth: "800px", marginBottom: "6rem" }}>
          We design menus that make your guests weak in the knees. Kitchen systems precise enough for a Michelin star. Staff training that turns a team into a unit. And operational architecture that runs when we're not in the room.
        </p>

        {/* Services — giant words stacked with descriptions */}
        <div>
          {services.map((s, i) => (
            <div key={s.name} className="svc-block" style={{ position: "relative", padding: "0 0 2rem 0" }}>
              {/* Giant service word */}
              <div className="svc-word" style={{ display: "flex", alignItems: "baseline", gap: "clamp(1rem, 2vw, 2rem)", marginBottom: "0.75rem" }}>
                <span style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(3rem, 8vw, 7rem)",
                  fontWeight: 400,
                  letterSpacing: "-0.03em",
                  color: "var(--limestone)",
                  lineHeight: 1,
                  transition: "color 0.3s",
                  cursor: "default",
                }}
                  onMouseEnter={e => { e.currentTarget.style.color = "var(--copper)"; }}
                  onMouseLeave={e => { e.currentTarget.style.color = "var(--limestone)"; }}
                >
                  {s.name}
                </span>
                <span style={{ fontSize: "0.5rem", fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase" as const, color: "var(--white-15)" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Description — appears on the right side */}
              <div className="svc-desc" style={{ maxWidth: "420px", marginLeft: "auto", paddingBottom: "2rem", borderBottom: i < services.length - 1 ? "1px solid var(--border-dark)" : "none" }}>
                <p style={{ fontSize: "0.85rem", fontWeight: 300, color: "var(--white-30)", lineHeight: 1.85, transition: "color 0.3s" }}
                  onMouseEnter={e => { e.currentTarget.style.color = "var(--white-70)"; }}
                  onMouseLeave={e => { e.currentTarget.style.color = "var(--white-30)"; }}
                >
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "3rem", textAlign: "center" }}>
          <a href="#pricing" className="btn" style={{ fontSize: "0.55rem" }}>See Pricing</a>
        </div>
      </div>
    </section>
  );
}
