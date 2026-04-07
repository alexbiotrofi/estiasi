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
  const pinnedRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !pinnedRef.current || !introRef.current) return;
    const ctx = gsap.context(() => {
      // Intro text: copper → white word by word on scroll
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

      const rows = gsap.utils.toArray<HTMLElement>(".svc-row");
      const names = gsap.utils.toArray<HTMLElement>(".svc-name");
      const descs = gsap.utils.toArray<HTMLElement>(".svc-desc");
      const lines = gsap.utils.toArray<HTMLElement>(".svc-line");

      // Pin the viewport, scroll list through it
      const listInner = pinnedRef.current!.querySelector<HTMLElement>(".svc-list-inner");
      if (listInner) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: pinnedRef.current,
            start: "top top",
            end: () => `+=${window.innerHeight * 4}px`,
            scrub: 3,
            pin: true,
          },
        });
        tl.to(listInner, {
          y: () => -(listInner.scrollHeight - window.innerHeight * 0.35),
          ease: "none",
          duration: 1,
        });
      }

      function update() {
        const viewportCenter = window.innerHeight / 2;

        rows.forEach((row, i) => {
          const rect = row.getBoundingClientRect();
          const rowCenter = rect.top + rect.height / 2;
          const distance = Math.abs(rowCenter - viewportCenter);
          const maxDist = window.innerHeight * 0.25;
          const proximity = Math.max(0, 1 - distance / maxDist);
          const eased = proximity * proximity;

          const scale = 0.75 + eased * 0.5;
          const opacity = 0.06 + eased * 0.94;
          const fontSize = 1 + eased * 0.6;
          const blur = (1 - eased) * 6;
          const descOpacity = Math.min(1, eased * 1.5);

          const cs = parseFloat(row.dataset.cs || String(scale));
          const co = parseFloat(row.dataset.co || String(opacity));
          const lf = 0.025;
          const ls = cs + (scale - cs) * lf;
          const lo = co + (opacity - co) * lf;
          row.dataset.cs = String(ls);
          row.dataset.co = String(lo);

          gsap.set(row, { opacity: lo, scale: ls, transformOrigin: "left center" });
          gsap.set(names[i], {
            fontSize: `${fontSize * 1.5}rem`,
            filter: `blur(${blur}px)`,
            color: eased > 0.6 ? "#ffffff" : `rgba(244,241,236,${0.2 + eased * 0.8})`,
          });
          gsap.set(descs[i], { opacity: descOpacity });
          if (lines[i]) gsap.set(lines[i], { opacity: descOpacity * 0.6 });
        });

        requestAnimationFrame(update);
      }
      requestAnimationFrame(update);
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} style={{ padding: "40px 0 0" }}>
      <div className="wrap">
        <div className="flex items-center gap-4" style={{ marginBottom: "3rem" }}>
          <span className="label" style={{ marginBottom: 0 }}>Services</span>
          <span className="sect-num">[ 02 / 07 ]</span>
        </div>

        {/* Intro text + image */}
        <div className="flex flex-col md:flex-row gap-8 items-start" style={{ marginBottom: "5rem" }}>
          <div style={{ flex: "1 1 0" }}>
            <p ref={introRef} style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 400, color: "var(--copper)", lineHeight: 1.35, letterSpacing: "-0.02em" }}>
              We design menus that make your guests weak in the knees. Kitchen systems precise enough for a Michelin star. Staff training that turns a team into a unit. And operational architecture that runs when we're not in the room.
            </p>
          </div>
          {/* Image — height matches text naturally via align-self stretch */}
          <div className="reveal hidden md:block" style={{ width: "280px", flexShrink: 0, alignSelf: "stretch" }}>
            <div style={{
              height: "100%",
              minHeight: "200px",
              borderRadius: "20px",
              overflow: "hidden",
              position: "relative",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 0 0 1px rgba(255,255,255,0.06), 0 2px 4px rgba(0,0,0,0.2), 0 8px 80px rgba(176,115,64,0.08), inset 0 4px 12px rgba(176,115,64,0.06)",
            }}>
              <img src="/photos/chef-plating.jpg" alt="" className="w-full h-full object-cover" style={{ opacity: 0.85 }} />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "40%", background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)", backdropFilter: "blur(2px)" }} />
              <div style={{ position: "absolute", bottom: "1rem", left: "1rem" }}>
                <span style={{ fontSize: "0.42rem", fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase" as const, color: "var(--copper)" }}>Culinary Consulting</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pinned service viewport */}
      <div ref={pinnedRef} style={{ height: "100vh", overflow: "hidden", position: "relative" }}>
        <div className="svc-list-inner wrap" style={{ paddingTop: "30vh" }}>
          {services.map((s) => (
            <div key={s.name}>
              <div
                className="svc-row flex items-center gap-4"
                style={{ padding: "0.85rem 0", cursor: "default", willChange: "transform, opacity", transformOrigin: "left center" }}
              >
                <span className="svc-name" style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", fontWeight: 400, color: "var(--limestone)", letterSpacing: "-0.01em", willChange: "font-size, filter, color", whiteSpace: "nowrap" as const, flexShrink: 0 }}>
                  {s.name}
                </span>
                <span className="svc-line" style={{ width: "200px", height: "1px", background: "linear-gradient(90deg, transparent 0%, var(--copper) 30%, var(--copper) 70%, transparent 100%)", opacity: 0, willChange: "opacity", flexShrink: 0, alignSelf: "center" }} />
                <span className="svc-desc" style={{ fontSize: "0.88rem", fontWeight: 400, color: "#fff", whiteSpace: "nowrap" as const, opacity: 0, willChange: "opacity", flexShrink: 0 }}>
                  {s.desc}
                </span>
              </div>
              <div className="divider-dark" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
