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
  const ref = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!ref.current || !descRef.current) return;
    const ctx = gsap.context(() => {
      // Word blur reveal on the description
      const text = descRef.current!.textContent || "";
      const words = text.split(" ");
      descRef.current!.innerHTML = words.map(w =>
        `<span style="display:inline-block;margin-right:0.25em;filter:blur(3px);opacity:0.2;transition:filter 0.3s ease-out, opacity 0.3s ease-out">${w}</span>`
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
            }, i * 25);
          });
        },
      });

      // Stagger service items
      gsap.utils.toArray<HTMLElement>(".svc-item").forEach((el, i) => {
        gsap.fromTo(el, { opacity: 0, x: -20 }, {
          opacity: 1, x: 0, duration: 0.5, ease: "power2.out",
          delay: i * 0.05,
          scrollTrigger: { trigger: el, start: "top 90%", once: true },
        });
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} style={{ padding: "90px 0 128px" }}>
      <div className="wrap">
        <div className="flex justify-between items-start gap-8 flex-col md:flex-row" style={{ marginBottom: "4rem" }}>
          <div style={{ minWidth: "200px" }}>
            <span className="label">Services</span>
            <span className="sect-num">[ 02 / 07 ]</span>
          </div>
          <div style={{ maxWidth: "700px" }}>
            <p ref={descRef} style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 400, color: "var(--limestone)", lineHeight: 1.4, letterSpacing: "-0.02em" }}>
              We design menus that make your guests weak in the knees. Kitchen systems precise enough for a Michelin star. Staff training that turns a team into a unit. SOPs documented down to the gram. And operational architecture that runs when we're not in the room.
            </p>
          </div>
        </div>

        <div className="divider-dark" style={{ marginBottom: "0.5rem" }} />
        {services.map((s) => (
          <div key={s.name}>
            <div className="svc-item flex items-center justify-between" style={{ padding: "1.15rem 0", cursor: "default", opacity: 0 }}>
              <span style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.1rem, 1.8vw, 1.5rem)", fontWeight: 400, color: "var(--limestone)", letterSpacing: "-0.01em", transition: "color 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.color = "var(--copper)"; }}
                onMouseLeave={e => { e.currentTarget.style.color = "var(--limestone)"; }}
              >{s.name}</span>
              <span style={{ fontSize: "0.7rem", fontWeight: 300, color: "var(--white-30)", maxWidth: "30ch", textAlign: "right", transition: "opacity 0.2s" }}>{s.desc}</span>
            </div>
            <div className="divider-dark" />
          </div>
        ))}
      </div>
    </section>
  );
}
