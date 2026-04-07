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
  const listRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !listRef.current || !introRef.current) return;
    const ctx = gsap.context(() => {
      // Intro text: starts copper, highlights to white word by word on scroll
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
          const progress = self.progress;
          introSpans.forEach((span, i) => {
            const wordProgress = i / introSpans.length;
            const revealed = progress > wordProgress;
            (span as HTMLElement).style.color = revealed ? "var(--limestone)" : "var(--copper)";
            (span as HTMLElement).style.opacity = revealed ? "1" : "0.4";
          });
        },
      });

      // Pin the service list so it can't be skipped
      const rows = gsap.utils.toArray<HTMLElement>(".svc-row");
      const names = gsap.utils.toArray<HTMLElement>(".svc-name");
      const descs = gsap.utils.toArray<HTMLElement>(".svc-desc");

      ScrollTrigger.create({
        trigger: listRef.current,
        start: "top 20%",
        end: () => `+=${rows.length * 120}%`,
        pin: true,
        scrub: 1.5,
        onUpdate: () => {
          const viewportCenter = window.innerHeight / 2;

          rows.forEach((row, i) => {
            const rect = row.getBoundingClientRect();
            const rowCenter = rect.top + rect.height / 2;
            const distance = Math.abs(rowCenter - viewportCenter);
            const maxDist = window.innerHeight * 0.3;
            const proximity = Math.max(0, 1 - distance / maxDist);
            const eased = proximity * proximity;

            const scale = 0.8 + eased * 0.45;
            const opacity = 0.1 + eased * 0.9;
            const fontSize = 1 + eased * 0.5;
            const blur = (1 - eased) * 4;
            const descOpacity = eased > 0.5 ? (eased - 0.5) * 2 * 0.8 : 0;

            // Lerp for heaviness
            const cs = parseFloat(row.dataset.cs || String(scale));
            const co = parseFloat(row.dataset.co || String(opacity));
            const lf = 0.06;
            const ls = cs + (scale - cs) * lf;
            const lo = co + (opacity - co) * lf;
            row.dataset.cs = String(ls);
            row.dataset.co = String(lo);

            gsap.set(row, { opacity: lo, scale: ls, transformOrigin: "left center" });
            gsap.set(names[i], {
              fontSize: `${fontSize * 1.5}rem`,
              filter: `blur(${blur}px)`,
              color: eased > 0.6 ? "#ffffff" : `rgba(244,241,236,${0.25 + eased * 0.75})`,
            });
            gsap.set(descs[i], { opacity: descOpacity });
          });
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} style={{ padding: "90px 0 64px" }}>
      <div className="wrap">
        <div className="flex items-center gap-4" style={{ marginBottom: "3rem" }}>
          <span className="label" style={{ marginBottom: 0 }}>Services</span>
          <span className="sect-num">[ 02 / 07 ]</span>
        </div>

        {/* Intro text + image side by side */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8" style={{ marginBottom: "5rem", alignItems: "start" }}>
          <div className="md:col-span-7">
            <p ref={introRef} style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 400, color: "var(--copper)", lineHeight: 1.35, letterSpacing: "-0.02em" }}>
              We design menus that make your guests weak in the knees. Kitchen systems precise enough for a Michelin star. Staff training that turns a team into a unit. And operational architecture that runs when we're not in the room.
            </p>
          </div>
          {/* Honey-style glass image */}
          <div className="md:col-span-5 reveal" style={{ position: "relative" }}>
            <div style={{
              borderRadius: "20px",
              overflow: "hidden",
              position: "relative",
              aspectRatio: "3/4",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 0 0 1px rgba(255,255,255,0.06), 0 2px 4px rgba(0,0,0,0.2), 0 8px 80px rgba(176,115,64,0.08), inset 0 4px 12px rgba(176,115,64,0.06)",
            }}>
              <img src="/photos/chef-plating.jpg" alt="" className="w-full h-full object-cover" style={{ opacity: 0.85 }} />
              {/* Glass overlay at bottom */}
              <div style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "40%",
                background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)",
                backdropFilter: "blur(2px)",
              }} />
              <div style={{ position: "absolute", bottom: "1.25rem", left: "1.25rem" }}>
                <span style={{ fontSize: "0.45rem", fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase" as const, color: "var(--copper)" }}>Culinary Consulting</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pinned service list */}
      <div ref={listRef} className="wrap">
        {services.map((s) => (
          <div key={s.name}>
            <div
              className="svc-row flex items-center justify-between"
              style={{
                padding: "0.85rem 0",
                cursor: "default",
                willChange: "transform, opacity",
                transformOrigin: "left center",
              }}
            >
              <span
                className="svc-name"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.5rem",
                  fontWeight: 400,
                  color: "var(--limestone)",
                  letterSpacing: "-0.01em",
                  willChange: "font-size, filter, color",
                  whiteSpace: "nowrap" as const,
                }}
              >
                {s.name}
              </span>
              <span
                className="svc-desc"
                style={{
                  fontSize: "0.78rem",
                  fontWeight: 300,
                  color: "var(--white-50)",
                  maxWidth: "32ch",
                  textAlign: "right" as const,
                  opacity: 0,
                  willChange: "opacity",
                }}
              >
                {s.desc}
              </span>
            </div>
            <div className="divider-dark" />
          </div>
        ))}
      </div>

      <div className="wrap" style={{ padding: "3rem 40px", textAlign: "center" }}>
        <a href="#pricing" className="btn" style={{ fontSize: "0.55rem" }}>See Pricing</a>
      </div>
    </section>
  );
}
