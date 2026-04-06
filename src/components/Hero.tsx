export default function Hero() {
  return (
    <section className="relative" style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Full-screen restaurant photo */}
      <div className="absolute inset-0 z-0">
        <img src="/photos/restaurant-interior.jpg" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(28,28,26,0.55) 0%, rgba(28,28,26,0.7) 100%)" }} />
      </div>

      {/* Subtle marble texture overlay */}
      <div className="absolute inset-0 z-0" style={{ mixBlendMode: "overlay", opacity: 0.08 }}>
        <img src="/textures/marble-1.jpg" alt="" className="w-full h-full object-cover" />
      </div>

      <div className="wrap relative z-10 flex-1 flex flex-col justify-end" style={{ paddingBottom: "5rem" }}>
        <div className="reveal">
          <div className="flex items-center gap-3" style={{ marginBottom: "1.5rem" }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--copper)" }} />
            <span style={{ fontSize: "0.48rem", fontWeight: 500, letterSpacing: "0.45em", textTransform: "uppercase" as const, color: "var(--copper-light)" }}>Culinary Consulting · Cyprus</span>
          </div>

          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.4rem, 5vw, 3.8rem)", fontWeight: 400, color: "#fff", lineHeight: 1.12, maxWidth: "16ch", marginBottom: "1.5rem" }}>
            Launching restaurants. Fixing operations. Building what lasts.
          </h1>

          <div style={{ width: 48, height: 2, background: "var(--copper)", marginBottom: "1.5rem" }} />

          <p style={{ fontSize: "1rem", fontWeight: 300, color: "rgba(255,255,255,0.7)", lineHeight: 1.85, maxWidth: "44ch", marginBottom: "2.5rem" }}>
            End-to-end culinary consulting for the hospitality sector. From concept to grand opening — and everything between.
          </p>

          <div className="flex gap-3">
            <a href="#contact" className="btn btn-copper">Book a Discovery Call</a>
            <a href="#work" className="btn" style={{ background: "transparent", color: "#fff", border: "1px solid rgba(255,255,255,0.25)" }}>See Our Work</a>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative z-10" style={{ borderTop: "1px solid rgba(255,255,255,0.1)", background: "rgba(28,28,26,0.4)", backdropFilter: "blur(8px)" }}>
        <div className="wrap">
          <div className="grid grid-cols-3">
            {[{ n: "15+", l: "Years Experience" }, { n: "40+", l: "Venues Supported" }, { n: "3", l: "Countries" }].map((s, i) => (
              <div key={s.l} className="text-center" style={{ padding: "1.75rem 1rem", borderRight: i < 2 ? "1px solid rgba(255,255,255,0.08)" : "none" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "1.8rem", color: "var(--copper-light)", marginBottom: "0.2rem" }}>{s.n}</div>
                <div style={{ fontSize: "0.48rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "rgba(255,255,255,0.45)" }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
