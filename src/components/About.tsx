"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!ref.current || !textRef.current) return;
    const ctx = gsap.context(() => {
      // Split text into words and animate each with blur
      const text = textRef.current!.textContent || "";
      const words = text.split(" ");
      textRef.current!.innerHTML = words.map(w =>
        `<span style="display:inline-block;margin-right:0.25em;filter:blur(4px);opacity:0;transition:filter 0.3s ease-out, opacity 0.3s ease-out">${w}</span>`
      ).join("");

      const spans = textRef.current!.querySelectorAll("span");
      ScrollTrigger.create({
        trigger: textRef.current,
        start: "top 80%",
        once: true,
        onEnter: () => {
          spans.forEach((span, i) => {
            setTimeout(() => {
              (span as HTMLElement).style.filter = "blur(0px)";
              (span as HTMLElement).style.opacity = "1";
            }, i * 30);
          });
        },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="marble-bg" style={{ padding: "128px 0 90px", background: "var(--warm-white)" }}>
      {/* Copper radial glow */}
      <div style={{ position: "absolute", left: "50%", top: "0", transform: "translateX(-50%)", width: "2000px", height: "300px", background: "radial-gradient(50% 50% at 50% 50%, rgba(176,115,64,0.08) 0%, rgba(176,115,64,0.03) 54%, transparent 100%)", pointerEvents: "none" }} />

      <div className="wrap" style={{ position: "relative" }}>
        <div className="flex justify-between items-start gap-8 flex-col md:flex-row">
          <div style={{ minWidth: "200px" }}>
            <span className="label">Partners in Craft</span>
            <span className="sect-num">[ 01 / 07 ]</span>
          </div>
          <div style={{ maxWidth: "650px" }}>
            <p ref={textRef} style={{ fontSize: "clamp(1.1rem, 2vw, 1.4rem)", fontWeight: 300, color: "var(--charcoal)", lineHeight: 1.85, marginBottom: "2rem" }}>
              Estιasι is a culinary consultancy that brings restaurants to life. We take your vision — from the first sketch on a napkin to a fully operational venue — and build every system, every menu, every team that makes it run.
            </p>
            <p className="reveal" style={{ fontSize: "0.9rem", fontWeight: 300, color: "var(--stone-dark)", lineHeight: 1.85 }}>
              Founded by Dimitris Kamaritis — a Michelin-trained chef who has worked in some of the UK&rsquo;s most respected kitchens, from The Ritz London to Raffles at The OWO — and Alex Apostolides, who builds the operational and digital infrastructure behind every venue. Based in Cyprus. Operating across Europe.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
