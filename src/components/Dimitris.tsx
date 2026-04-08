"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Dimitris() {
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
    <section ref={ref} style={{ padding: "128px 0" }}>
      <div className="wrap">
        <div className="flex justify-between items-start gap-8 flex-col md:flex-row" style={{ marginBottom: "4rem" }}>
          <div>
            <span className="label">The Team</span>
            <span className="sect-num">[ 05 / 07 ]</span>
          </div>
          <div style={{ maxWidth: "550px" }}>
            <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, color: "var(--limestone)", lineHeight: 1.2, letterSpacing: "-0.02em" }}>
              The kitchen and the operation.
            </p>
            <p style={{ fontSize: "0.85rem", fontWeight: 300, color: "var(--white-30)", lineHeight: 1.8, marginTop: "1rem" }}>
              (Two sides of the same pass. One builds what you taste. The other builds what makes it run.)
            </p>
          </div>
        </div>

        {/* Dimitris — large card */}
        <div className="team-reveal rounded-section" style={{ background: "var(--dark-2)", overflow: "hidden", marginBottom: "6px" }}>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div style={{ position: "relative", minHeight: "650px", overflow: "hidden" }}>
              <img src="/photos/dimitris-kitchen.jpg" alt="Dimitris Kamaritis" className="w-full h-full object-cover" style={{ position: "absolute", inset: 0, objectPosition: "center 15%" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, transparent 70%, var(--dark-2) 100%)" }} />
            </div>

            <div style={{ padding: "clamp(2rem, 4vw, 4rem)", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, color: "var(--limestone)", letterSpacing: "-0.02em", lineHeight: 1.15, marginBottom: "0.75rem" }}>
                Dimitris Kamaritis
              </h3>
              <p style={{ fontSize: "0.5rem", fontWeight: 500, letterSpacing: "0.3em", textTransform: "uppercase" as const, color: "var(--copper)", marginBottom: "1.5rem" }}>Culinary Director & Co-Founder</p>

              <p style={{ fontSize: "0.95rem", fontWeight: 300, color: "var(--white-50)", lineHeight: 1.9, marginBottom: "2rem" }}>
                Michelin-trained chef with experience at The Ritz London, Claude Bosi at Bibendum, and Mauro Colagreco&rsquo;s team at Raffles London at The OWO. Dimitris leads all culinary standards, menu direction, kitchen design, and staff training across every engagement.
              </p>

              <div style={{ display: "flex", gap: "3rem", marginBottom: "2rem" }}>
                {[{ n: "3", l: "Michelin Kitchens" }, { n: "FRSPH", l: "Certified" }, { n: "4+", l: "Countries" }].map(s => (
                  <div key={s.l}>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: "1.8rem", color: "var(--copper)" }}>{s.n}</div>
                    <div style={{ fontSize: "0.5rem", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase" as const, color: "var(--white-30)" }}>{s.l}</div>
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {["Menu Engineering", "Kitchen Design", "HACCP", "Staff Training", "Launch Management"].map(tag => (
                  <span key={tag} style={{ fontSize: "0.48rem", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "var(--white-30)", border: "1px solid var(--border-dark)", padding: "0.3rem 0.6rem", borderRadius: "3px" }}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Alex — mirrored layout: content left, photo right */}
        <div className="team-reveal rounded-section" style={{ background: "var(--dark-2)", overflow: "hidden" }}>
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Content — left side */}
            <div style={{ padding: "clamp(2rem, 4vw, 4rem)", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, color: "var(--limestone)", letterSpacing: "-0.02em", lineHeight: 1.15, marginBottom: "0.75rem" }}>
                Alex Apostolides
              </h3>
              <p style={{ fontSize: "0.5rem", fontWeight: 500, letterSpacing: "0.3em", textTransform: "uppercase" as const, color: "var(--copper)", marginBottom: "1.5rem" }}>Strategy & Client Experience · Co-Founder</p>

              <p style={{ fontSize: "0.95rem", fontWeight: 300, color: "var(--white-50)", lineHeight: 1.9, marginBottom: "2rem" }}>
                Background in strategy, service design, and operations. Alex builds the infrastructure behind every engagement — from booking systems and CRM to brand identity, websites, and digital visibility. He ensures every venue runs with precision long after the kitchen is set.
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {["Operations & Systems", "Brand Identity", "Website & SEO", "CRM & Bookings", "Client Experience"].map(tag => (
                  <span key={tag} style={{ fontSize: "0.48rem", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "var(--white-30)", border: "1px solid var(--border-dark)", padding: "0.3rem 0.6rem", borderRadius: "3px" }}>{tag}</span>
                ))}
              </div>
            </div>

            {/* Photo — right side (mirrored from Dimitris) */}
            <div style={{ position: "relative", minHeight: "500px", overflow: "hidden" }}>
              <img src="/photos/restaurant-interior.jpg" alt="Alex Apostolides" className="w-full h-full object-cover" style={{ position: "absolute", inset: 0, opacity: 0.6 }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to left, transparent 70%, var(--dark-2) 100%)" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
