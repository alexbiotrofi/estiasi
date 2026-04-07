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

      // Each service row: clip-path reveal + slide from below
      gsap.utils.toArray<HTMLElement>(".svc-row").forEach((row) => {
        const name = row.querySelector<HTMLElement>(".svc-name");
        const desc = row.querySelector<HTMLElement>(".svc-desc");
        const line = row.querySelector<HTMLElement>(".svc-line");

        // Row clip-path: starts fully hidden (clipped at top), reveals downward
        gsap.fromTo(row, {
          clipPath: "inset(100% 0 0 0)",
          opacity: 0,
        }, {
          clipPath: "inset(0% 0 0 0)",
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: row,
            start: "top 90%",
            end: "top 50%",
            scrub: 1,
          },
        });

        // Name slides up slightly
        if (name) {
          gsap.fromTo(name, { y: 20 }, {
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: row,
              start: "top 88%",
              end: "top 55%",
              scrub: 1,
            },
          });
        }

        // Description fades in slightly later
        if (desc) {
          gsap.fromTo(desc, { opacity: 0, x: 20 }, {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: row,
              start: "top 82%",
              end: "top 50%",
              scrub: 1,
            },
          });
        }

        // Copper line scales in
        if (line) {
          gsap.fromTo(line, { scaleX: 0 }, {
            scaleX: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: row,
              start: "top 85%",
              end: "top 52%",
              scrub: 1,
            },
          });
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} style={{ padding: "40px 0 60px" }}>
      <div className="wrap">
        <div className="flex items-center gap-4" style={{ marginBottom: "3rem" }}>
          <span className="label" style={{ marginBottom: 0 }}>Services</span>
          <span className="sect-num">[ 02 / 07 ]</span>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-start" style={{ marginBottom: "3rem" }}>
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

        {/* Service list */}
        {services.map((s) => (
          <div key={s.name}>
            <div className="svc-row flex items-center gap-4" style={{ padding: "1.2rem 0", cursor: "default", overflow: "hidden" }}>
              <span className="svc-name" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.2rem, 2.2vw, 1.7rem)", fontWeight: 400, color: "var(--limestone)", letterSpacing: "-0.01em", whiteSpace: "nowrap" as const, flexShrink: 0 }}>
                {s.name}
              </span>
              <span className="svc-line" style={{ width: "200px", height: "1px", background: "linear-gradient(90deg, transparent 0%, var(--copper) 30%, var(--copper) 70%, transparent 100%)", flexShrink: 0, alignSelf: "center", transformOrigin: "left" }} />
              <span className="svc-desc" style={{ fontSize: "0.88rem", fontWeight: 400, color: "rgba(255,255,255,0.8)", whiteSpace: "nowrap" as const, flexShrink: 0 }}>
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
