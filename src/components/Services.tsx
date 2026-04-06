"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  { num: "01", name: "Concept & Positioning", desc: "We define what your venue is, who it's for, and why it matters. Market research, competitor analysis, and a positioning strategy that gives you an edge before you open the door.", image: "/photos/restaurant-interior.jpg" },
  { num: "02", name: "Menu Engineering", desc: "Every dish engineered for flavour and margin. Recipe development, food costing, menu layout, and pricing strategy that makes your kitchen profitable from day one.", image: "/photos/fine-dining-plate.jpg" },
  { num: "03", name: "Kitchen & Operations", desc: "Kitchen design, equipment specs, workflow optimisation, SOPs for every station, HACCP frameworks, and the systems that make a venue run without drama.", image: "/photos/chef-kitchen.jpg" },
  { num: "04", name: "Staff & Training", desc: "Recruitment support, team structure, service standards, kitchen procedures, management training. We build the team — then we train them to be exceptional.", image: "/photos/kitchen-team.jpg" },
  { num: "05", name: "Launch & Opening", desc: "Soft opening. Adjustment phase. Grand opening. We're on-site for every service until the operation runs clean. Then we hand it over.", image: "/photos/dining-room.jpg" },
  { num: "06", name: "Brand & Digital", desc: "Identity, website, SEO, photography direction, Google Business, social media foundations. The presence that fills your tables before word-of-mouth kicks in.", image: "/photos/restaurant-ambience.jpg" },
];

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!ref.current || !descRef.current) return;
    const ctx = gsap.context(() => {
      // Word blur reveal on description
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
            }, i * 20);
          });
        },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} style={{ padding: "90px 0 0" }}>
      <div className="wrap">
        {/* Header */}
        <div className="flex justify-between items-start gap-8 flex-col md:flex-row" style={{ marginBottom: "4rem" }}>
          <div style={{ minWidth: "200px" }}>
            <span className="label">Services</span>
            <span className="sect-num">[ 02 / 07 ]</span>
          </div>
          <div style={{ maxWidth: "700px" }}>
            <p ref={descRef} style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 400, color: "var(--limestone)", lineHeight: 1.4, letterSpacing: "-0.02em" }}>
              We design menus that make your guests weak in the knees. Kitchen systems precise enough for a Michelin star. Staff training that turns a team into a unit. And operational architecture that runs when we're not in the room.
            </p>
          </div>
        </div>
      </div>

      {/* Service cards — each one a full-width section */}
      {services.map((s, i) => (
        <div key={s.num} className="reveal" style={{ borderTop: "1px solid var(--border-dark)" }}>
          <div className="wrap">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-0" style={{ minHeight: "clamp(300px, 40vw, 450px)" }}>
              {/* Left: number + name — sticky */}
              <div className="md:col-span-4 flex flex-col justify-center" style={{ padding: "2.5rem 0", position: "sticky", top: 0, alignSelf: "start" }}>
                <span style={{ fontFamily: "var(--font-display)", fontSize: "clamp(3rem, 5vw, 4.5rem)", fontWeight: 400, color: "var(--white-05)", lineHeight: 1, display: "block", marginBottom: "1rem" }}>{s.num}</span>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontWeight: 400, color: "var(--limestone)", letterSpacing: "-0.01em", lineHeight: 1.2 }}>{s.name}</h3>
              </div>

              {/* Middle: description */}
              <div className="md:col-span-4 flex items-center" style={{ padding: "2.5rem 1.5rem" }}>
                <p style={{ fontSize: "0.88rem", fontWeight: 300, color: "var(--white-50)", lineHeight: 1.85 }}>{s.desc}</p>
              </div>

              {/* Right: image */}
              <div className="md:col-span-4" style={{ position: "relative", overflow: "hidden", minHeight: "250px" }}>
                <img
                  src={s.image}
                  alt={s.name}
                  className="w-full h-full object-cover"
                  style={{ position: "absolute", inset: 0, opacity: 0.7, transition: "opacity 0.4s, transform 0.6s", transform: "scale(1)" }}
                  onMouseEnter={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "scale(1.03)"; }}
                  onMouseLeave={e => { e.currentTarget.style.opacity = "0.7"; e.currentTarget.style.transform = "scale(1)"; }}
                />
                {/* Dark gradient overlay */}
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, var(--dark-2) 0%, transparent 30%)", pointerEvents: "none" }} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
