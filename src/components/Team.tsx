"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Team() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".team-reveal").forEach((el, i) => {
        gsap.fromTo(el, { opacity: 0, y: 40 }, {
          opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
          delay: i * 0.1,
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
        });
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={ref} style={{ padding: "128px 0" }}>
      <div className="wrap">
        <div className="flex justify-between items-start gap-8 flex-col md:flex-row" style={{ marginBottom: "4rem" }}>
          <div>
            <span className="label">The Team</span>
            <span className="sect-num">[ 05 / 07 ]</span>
          </div>
          <div style={{ maxWidth: "550px" }}>
            <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, color: "var(--charcoal)", lineHeight: 1.2, letterSpacing: "-0.02em" }}>
              The kitchen and the operation.
            </p>
            <p style={{ fontSize: "0.85rem", fontWeight: 300, color: "var(--stone)", lineHeight: 1.8, marginTop: "1rem" }}>
              (Two sides of the same pass. One builds what you taste. The other builds what makes it run.)
            </p>
          </div>
        </div>

        {/* Dimitris */}
        <div className="team-reveal rounded-section" style={{ background: "#fff", overflow: "hidden", marginBottom: "6px" }}>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div style={{ position: "relative", minHeight: "clamp(300px, 50vw, 550px)", overflow: "hidden" }}>
              <img src="/photos/dimitris-kitchen.jpg" alt="Dimitris Kamaritis" className="w-full h-full object-cover" style={{ position: "absolute", inset: 0, objectPosition: "center 15%" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, transparent 70%, #fff 100%)" }} />
            </div>
            <div style={{ padding: "clamp(2rem, 4vw, 3.5rem)", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 400, color: "var(--charcoal)", letterSpacing: "-0.02em", lineHeight: 1.15, marginBottom: "0.5rem" }}>
                Dimitris Kamaritis
              </h3>
              <p style={{ fontSize: "0.45rem", fontWeight: 500, letterSpacing: "0.3em", textTransform: "uppercase" as const, color: "var(--copper)", marginBottom: "1.25rem" }}>Culinary Director & Co-Founder</p>
              <p style={{ fontSize: "0.88rem", fontWeight: 300, color: "var(--stone-dark)", lineHeight: 1.9, marginBottom: "1.5rem" }}>
                Michelin-trained chef with over a decade of experience in professional kitchens across Europe. Dimitris has worked at The Ritz London, under Claude Bosi at Bibendum, and as part of Mauro Colagreco&rsquo;s team at Raffles London at The OWO — three of the most demanding kitchens in the world.
              </p>
              <p style={{ fontSize: "0.88rem", fontWeight: 300, color: "var(--stone-dark)", lineHeight: 1.9, marginBottom: "1.5rem" }}>
                He leads all culinary standards at estιasι — from concept creation and menu engineering to kitchen design, HACCP compliance, staff recruitment, and the full operational lifecycle of every venue we touch. He doesn&rsquo;t advise from a distance. He builds from within.
              </p>
              <div style={{ display: "flex", gap: "2.5rem", marginBottom: "1.5rem" }}>
                {[{ n: "3", l: "Michelin Kitchens" }, { n: "FRSPH", l: "Certified" }, { n: "4+", l: "Countries" }].map(s => (
                  <div key={s.l}>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: "1.6rem", color: "var(--copper)" }}>{s.n}</div>
                    <div style={{ fontSize: "0.45rem", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase" as const, color: "var(--stone)" }}>{s.l}</div>
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
                {["Menu Engineering", "Kitchen Design", "HACCP", "Staff Training", "Launch Management"].map(tag => (
                  <span key={tag} style={{ fontSize: "0.42rem", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "var(--stone)", border: "1px solid var(--border)", padding: "0.25rem 0.5rem", borderRadius: "3px" }}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Alex */}
        <div className="team-reveal rounded-section" style={{ background: "#fff", overflow: "hidden" }}>
          <div className="grid grid-cols-1 md:grid-cols-12">
            <div className="md:col-span-8" style={{ padding: "clamp(1.5rem, 3vw, 2.5rem)", paddingRight: "clamp(2rem, 3vw, 3rem)", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 400, color: "var(--charcoal)", letterSpacing: "-0.02em", lineHeight: 1.15, marginBottom: "0.5rem" }}>
                Alex Apostolides
              </h3>
              <p style={{ fontSize: "0.45rem", fontWeight: 500, letterSpacing: "0.3em", textTransform: "uppercase" as const, color: "var(--copper)", marginBottom: "1.25rem" }}>Strategy & Client Experience · Co-Founder</p>
              <p style={{ fontSize: "0.85rem", fontWeight: 300, color: "var(--stone-dark)", lineHeight: 1.85, marginBottom: "1.5rem" }}>
                Builds the infrastructure behind every engagement — operational systems, brand identity, websites, and digital visibility. Oversees client experience from first call to handover.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
                {["Operations & Systems", "Brand Identity", "Website & SEO", "CRM & Bookings", "Client Experience"].map(tag => (
                  <span key={tag} style={{ fontSize: "0.42rem", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "var(--stone)", border: "1px solid var(--border)", padding: "0.25rem 0.5rem", borderRadius: "3px" }}>{tag}</span>
                ))}
              </div>
            </div>
            <div className="md:col-span-4" style={{ position: "relative", minHeight: "clamp(250px, 40vw, 350px)", overflow: "hidden" }}>
              <img src="/photos/alex-restaurant.jpg" alt="Alex Apostolides" className="w-full h-full object-cover" style={{ position: "absolute", inset: 0, objectPosition: "center 20%" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to left, transparent 60%, #fff 100%)" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
