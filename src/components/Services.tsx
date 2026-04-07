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
  const introRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !introRef.current) return;
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

      // Stagger rows in
      gsap.utils.toArray<HTMLElement>(".svc-row").forEach((row, i) => {
        gsap.fromTo(row, { opacity: 0, y: 20 }, {
          opacity: 1, y: 0, duration: 0.5, ease: "power3.out",
          delay: i * 0.05,
          scrollTrigger: { trigger: row, start: "top 92%", once: true },
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} style={{ padding: "64px 0 80px" }}>
      <div className="wrap">
        <div className="flex items-center gap-4" style={{ marginBottom: "3rem" }}>
          <span className="label" style={{ marginBottom: 0 }}>Services</span>
          <span className="sect-num">[ 02 / 07 ]</span>
        </div>

        {/* Intro text + image */}
        <div className="flex flex-col md:flex-row gap-8 items-start" style={{ marginBottom: "4rem" }}>
          <div style={{ flex: "1 1 0" }}>
            <p ref={introRef} style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 400, color: "var(--copper)", lineHeight: 1.35, letterSpacing: "-0.02em" }}>
              We design menus that make your guests weak in the knees. Kitchen systems precise enough for a Michelin star. Staff training that turns a team into a unit. And operational architecture that runs when we're not in the room.
            </p>
          </div>
          {/* Photo — always visible */}
          <div style={{ width: "280px", flexShrink: 0, alignSelf: "stretch" }}>
            <div style={{ height: "100%", minHeight: "220px", borderRadius: "20px", overflow: "hidden", position: "relative", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 0 0 1px rgba(255,255,255,0.06), 0 2px 4px rgba(0,0,0,0.2), 0 8px 80px rgba(176,115,64,0.08), inset 0 4px 12px rgba(176,115,64,0.06)" }}>
              <img src="/photos/chef-plating.jpg" alt="" className="w-full h-full object-cover" style={{ opacity: 0.85 }} />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "40%", background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)", backdropFilter: "blur(2px)" }} />
              <div style={{ position: "absolute", bottom: "1rem", left: "1rem" }}>
                <span style={{ fontSize: "0.42rem", fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase" as const, color: "var(--copper)" }}>Culinary Consulting</span>
              </div>
            </div>
          </div>
        </div>

        {/* Service list with dividers + Honey blur-hover */}
        <div className="divider-dark" />
        {services.map((s) => (
          <div key={s.name}>
            <div
              className="svc-row flex items-center gap-4"
              style={{ padding: "1.2rem 0", cursor: "default" }}
              onMouseEnter={(e) => {
                const name = e.currentTarget.querySelector<HTMLElement>(".svc-name");
                const desc = e.currentTarget.querySelector<HTMLElement>(".svc-desc");
                const line = e.currentTarget.querySelector<HTMLElement>(".svc-line");
                if (name) { name.style.filter = "blur(0px)"; name.style.opacity = "1"; name.style.color = "#fff"; }
                if (desc) { desc.style.opacity = "1"; }
                if (line) { line.style.opacity = "0.5"; }
              }}
              onMouseLeave={(e) => {
                const name = e.currentTarget.querySelector<HTMLElement>(".svc-name");
                const desc = e.currentTarget.querySelector<HTMLElement>(".svc-desc");
                const line = e.currentTarget.querySelector<HTMLElement>(".svc-line");
                if (name) { name.style.filter = "blur(1.5px)"; name.style.opacity = "0.35"; name.style.color = "var(--limestone)"; }
                if (desc) { desc.style.opacity = "0.35"; }
                if (line) { line.style.opacity = "0.15"; }
              }}
            >
              <span className="svc-name" style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.2rem, 2.2vw, 1.7rem)",
                fontWeight: 400,
                color: "var(--limestone)",
                letterSpacing: "-0.01em",
                whiteSpace: "nowrap" as const,
                flexShrink: 0,
                filter: "blur(1.5px)",
                opacity: 0.35,
                transition: "filter 0.2s ease-out, opacity 0.2s ease-out, color 0.2s ease-out",
              }}>
                {s.name}
              </span>
              <span className="svc-line" style={{
                width: "200px",
                height: "1px",
                background: "linear-gradient(90deg, transparent 0%, var(--copper) 30%, var(--copper) 70%, transparent 100%)",
                flexShrink: 0,
                alignSelf: "center",
                opacity: 0.15,
                transition: "opacity 0.2s ease-out",
              }} />
              <span className="svc-desc" style={{
                fontSize: "0.88rem",
                fontWeight: 400,
                color: "rgba(255,255,255,0.8)",
                whiteSpace: "nowrap" as const,
                flexShrink: 0,
                opacity: 0.35,
                transition: "opacity 0.2s ease-out",
              }}>
                {s.desc}
              </span>
            </div>
            <div className="divider-dark" />
          </div>
        ))}
      </div>
    </section>
  );
}
