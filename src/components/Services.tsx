"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  { num: "01", name: "Concept & Positioning", desc: "We define what your venue is, who it's for, and why it matters. Market research, competitor analysis, and a positioning strategy that gives you an edge before you open the door.", image: "/photos/restaurant-interior.jpg" },
  { num: "02", name: "Menu Engineering", desc: "Every dish engineered for flavour and margin. Recipe development, food costing, menu layout, and pricing strategy that makes your kitchen profitable from day one.", image: "/photos/fine-dining-plate.jpg" },
  { num: "03", name: "Kitchen & Operations", desc: "Kitchen design, equipment specs, workflow optimisation, SOPs for every station, HACCP frameworks, and the systems that make a venue run without drama.", image: "/photos/chef-kitchen.jpg" },
  { num: "04", name: "Staff & Training", desc: "Recruitment support, team structure, service standards, kitchen procedures, management training. We build the team — then we train them to be exceptional.", image: "/photos/kitchen-team.jpg" },
  { num: "05", name: "Launch & Opening", desc: "Soft opening. Adjustment phase. Grand opening. We're on-site for every service until the operation runs clean. Then we hand it over.", image: "/photos/dining-room.jpg" },
  { num: "06", name: "Brand & Digital", desc: "Identity, website, SEO, photography direction, Google Business, social media foundations. The presence that fills your tables.", image: "/photos/restaurant-ambience.jpg" },
];

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!ref.current || !descRef.current) return;
    const ctx = gsap.context(() => {
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
    }, ref);
    return () => ctx.revert();
  }, []);

  const s = services[active];

  return (
    <section ref={ref} style={{ padding: "90px 0 128px" }}>
      <div className="wrap">
        {/* Header — label + number inline */}
        <div className="flex items-center gap-4" style={{ marginBottom: "3rem" }}>
          <span className="label" style={{ marginBottom: 0 }}>Services</span>
          <span className="sect-num">[ 02 / 07 ]</span>
        </div>

        {/* Big statement with word blur */}
        <p ref={descRef} style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 400, color: "var(--limestone)", lineHeight: 1.35, letterSpacing: "-0.02em", maxWidth: "800px", marginBottom: "5rem" }}>
          We design menus that make your guests weak in the knees. Kitchen systems precise enough for a Michelin star. Staff training that turns a team into a unit. And operational architecture that runs when we're not in the room.
        </p>

        {/* Interactive service browser */}
        <div className="rounded-section" style={{ background: "var(--dark-2)", overflow: "hidden" }}>
          {/* Service name tabs across the top */}
          <div style={{ display: "flex", borderBottom: "1px solid var(--border-dark)", overflowX: "auto" }}>
            {services.map((svc, i) => (
              <button
                key={svc.num}
                onClick={() => setActive(i)}
                style={{
                  flex: 1,
                  padding: "1.25rem 1rem",
                  background: "transparent",
                  border: "none",
                  borderBottom: active === i ? "2px solid var(--copper)" : "2px solid transparent",
                  cursor: "pointer",
                  fontFamily: "var(--font-body)",
                  fontSize: "0.6rem",
                  fontWeight: 500,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase" as const,
                  color: active === i ? "var(--limestone)" : "var(--white-30)",
                  transition: "all 0.3s",
                  whiteSpace: "nowrap" as const,
                }}
              >
                {svc.name}
              </button>
            ))}
          </div>

          {/* Active service — image + content */}
          <div className="grid grid-cols-1 md:grid-cols-2" style={{ minHeight: "400px" }}>
            {/* Image */}
            <div style={{ position: "relative", overflow: "hidden", minHeight: "350px" }}>
              <img
                key={s.image}
                src={s.image}
                alt={s.name}
                className="w-full h-full object-cover"
                style={{ position: "absolute", inset: 0, transition: "opacity 0.5s" }}
              />
              {/* Big number overlay */}
              <div style={{ position: "absolute", bottom: "1.5rem", left: "2rem", fontFamily: "var(--font-display)", fontSize: "clamp(5rem, 10vw, 8rem)", fontWeight: 400, color: "rgba(255,255,255,0.06)", lineHeight: 1 }}>{s.num}</div>
            </div>

            {/* Content */}
            <div style={{ padding: "clamp(2rem, 4vw, 3.5rem)", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <span style={{ fontSize: "0.48rem", fontWeight: 500, letterSpacing: "0.3em", textTransform: "uppercase" as const, color: "var(--copper)", display: "block", marginBottom: "1rem" }}>{s.num} — {s.name}</span>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 400, color: "var(--limestone)", letterSpacing: "-0.01em", lineHeight: 1.2, marginBottom: "1.25rem" }}>{s.name}</h3>
              <p style={{ fontSize: "0.92rem", fontWeight: 300, color: "var(--white-50)", lineHeight: 1.9 }}>{s.desc}</p>

              {/* Navigation dots */}
              <div className="flex gap-2" style={{ marginTop: "2rem" }}>
                {services.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    style={{
                      width: active === i ? 24 : 6,
                      height: 6,
                      borderRadius: 3,
                      background: active === i ? "var(--copper)" : "var(--white-15)",
                      border: "none",
                      cursor: "pointer",
                      transition: "all 0.3s",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
