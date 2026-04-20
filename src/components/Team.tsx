"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function MichelinStars({ count }: { count: number }) {
  return (
    <span style={{ display: "inline-flex", gap: "2px", verticalAlign: "middle", marginLeft: "4px" }}>
      {Array.from({ length: count }).map((_, i) => (
        <img key={i} src="/michelin-star.png" alt="Michelin star" style={{ width: "14px", height: "14px", display: "inline-block" }} />
      ))}
    </span>
  );
}

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
              <img src="/photos/dimitris-kitchen.png" alt="Dimitris Kamaritis" className="w-full h-full object-cover" style={{ position: "absolute", inset: 0, objectPosition: "center 15%" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, transparent 70%, #fff 100%)" }} />
            </div>
            <div style={{ padding: "clamp(2rem, 4vw, 3.5rem)", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 400, color: "var(--charcoal)", letterSpacing: "-0.02em", lineHeight: 1.15, marginBottom: "0.25rem" }}>
                Dimitris Kamaritis FRSPH
              </h3>
              <p style={{ fontSize: "0.45rem", fontWeight: 500, letterSpacing: "0.3em", textTransform: "uppercase" as const, color: "var(--copper)", marginBottom: "1.25rem" }}>Culinary Director & Co-Founder</p>
              <p style={{ fontSize: "0.88rem", fontWeight: 300, color: "var(--stone-dark)", lineHeight: 1.9, marginBottom: "1.5rem" }}>
                Michelin-trained chef with multiple years of experience in professional kitchens. Dimitris has gained knowledge about hospitality across four countries — the UK, Canada, Israel, and Cyprus — and has worked at The Ritz London <MichelinStars count={2} />, under Claude Bosi at Bibendum <MichelinStars count={2} />, and as part of chef Mauro Colagreco&rsquo;s <MichelinStars count={3} /> team at Raffles London at The OWO.
              </p>
              <p style={{ fontSize: "0.88rem", fontWeight: 300, color: "var(--stone-dark)", lineHeight: 1.9, marginBottom: "1.5rem" }}>
                A Fellow of the Royal Society for Public Health and co-founder of Biotrofi — a premium private chef and wellness service in Cyprus — Dimitris leads all culinary standards at estιasι. From concept creation and menu engineering to kitchen design, HACCP compliance, staff recruitment, and the full operational lifecycle of every venue we touch. He doesn&rsquo;t advise from a distance. He builds from within.
              </p>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1.5rem" }}>
                {[{ n: "3", l: "Michelin Kitchens" }, { n: "FRSPH", l: "Fellow" }, { n: "4", l: "Countries" }].map(s => (
                  <div key={s.l} style={{ textAlign: "center", flex: "1 1 0" }}>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: "1.6rem", color: "var(--copper)" }}>{s.n}</div>
                    <div style={{ fontSize: "0.45rem", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase" as const, color: "var(--stone)" }}>{s.l}</div>
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
                {[
                  { tag: "Menu Creation", cert: false },
                  { tag: "Kitchen Design", cert: false },
                  { tag: "Staff Training", cert: false },
                  { tag: "Launch Management", cert: false },
                  { tag: "Level 3 Supervising Food Safety & Hygiene", cert: true },
                  { tag: "Level 3 HACCP Development", cert: true },
                  { tag: "FCA Food Allergen & Intolerance", cert: true },
                ].map(t => (
                  <span key={t.tag} style={{ fontSize: "0.42rem", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: t.cert ? "var(--copper)" : "var(--stone)", border: `1px solid ${t.cert ? "var(--copper)" : "var(--border)"}`, padding: "0.25rem 0.5rem", borderRadius: "3px" }}>{t.tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Alex */}
        <div className="team-reveal rounded-section" style={{ background: "#fff", overflow: "hidden" }}>
          <div className="grid grid-cols-1 md:grid-cols-12">
            <div className="md:col-span-8 md:order-1 order-2" style={{ padding: "clamp(1.5rem, 3vw, 2.5rem)", paddingRight: "clamp(2rem, 3vw, 3rem)", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 400, color: "var(--charcoal)", letterSpacing: "-0.02em", lineHeight: 1.15, marginBottom: "0.5rem" }}>
                Alex Apostolides
              </h3>
              <p style={{ fontSize: "0.45rem", fontWeight: 500, letterSpacing: "0.3em", textTransform: "uppercase" as const, color: "var(--copper)", marginBottom: "1.25rem" }}>Operations, Design & Branding · Co-Founder</p>
              <p style={{ fontSize: "0.85rem", fontWeight: 300, color: "var(--stone-dark)", lineHeight: 1.85, marginBottom: "1.5rem" }}>
                Has built and designed multiple businesses from the ground up — the operational systems, the brand, and the front-end and back-end that each one runs on. Co-designed Biotrofi alongside Dimitris, with years of experience shipping brand, web, and operational systems across hospitality and lifestyle ventures.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
                {[
                  { tag: "Operations", gold: true },
                  { tag: "Brand & Design", gold: true },
                  { tag: "Web Design", gold: true },
                  { tag: "Frontend & Backend", gold: false },
                  { tag: "Systems Architecture", gold: false },
                  { tag: "Digital Infrastructure", gold: false },
                ].map(t => (
                  <span key={t.tag} style={{ fontSize: "0.42rem", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: t.gold ? "var(--copper)" : "var(--stone)", border: `1px solid ${t.gold ? "var(--copper)" : "var(--border)"}`, padding: "0.25rem 0.5rem", borderRadius: "3px" }}>{t.tag}</span>
                ))}
              </div>
            </div>
            <div className="md:col-span-4 md:order-2 order-1 alex-photo-wrap" style={{ position: "relative", overflow: "hidden" }}>
              <img src="/photos/alex-restaurant.png" alt="Alex Apostolides" className="w-full h-full object-cover" style={{ position: "absolute", inset: 0, objectPosition: "center 0%" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to left, transparent 60%, #fff 100%)" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
