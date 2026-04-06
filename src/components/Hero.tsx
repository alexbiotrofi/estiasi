export default function Hero() {
  return (
    <section className="relative" style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center" }}>
      {/* Marble background — visible */}
      <div className="absolute inset-0 z-0">
        <img src="/textures/marble-1.jpg" alt="" className="w-full h-full object-cover" style={{ opacity: 0.25 }} />
      </div>

      <div className="wrap relative z-10" style={{ paddingTop: "10rem", paddingBottom: "6rem" }}>
        {/* Big wordmark */}
        <div className="reveal" style={{ marginBottom: "3rem" }}>
          <span style={{ fontFamily: "var(--font-logo)", fontSize: "clamp(5rem, 14vw, 11rem)", fontWeight: 400, letterSpacing: "0.0618em", color: "var(--charcoal)", lineHeight: 0.85, display: "block" }}>
            estiasi
          </span>
          <div style={{ width: 64, height: 2, background: "var(--copper)", marginTop: "1.5rem" }} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
          <div className="reveal" style={{ transitionDelay: "0.15s" }}>
            <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontWeight: 400, color: "var(--charcoal)", lineHeight: 1.35, maxWidth: "22ch" }}>
              Launching restaurants. Fixing operations. Building what lasts.
            </p>
          </div>
          <div className="reveal" style={{ transitionDelay: "0.3s" }}>
            <p style={{ fontSize: "0.95rem", fontWeight: 300, color: "var(--stone-dark)", lineHeight: 1.85, maxWidth: "42ch", marginBottom: "2rem" }}>
              End-to-end culinary consulting for the hospitality sector. From concept to grand opening — and everything between.
            </p>
            <div className="flex gap-3">
              <a href="#contact" className="btn btn-dark">Book a Discovery Call</a>
              <a href="#work" className="btn btn-outline">See Our Work</a>
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative z-10" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="wrap">
          <div className="grid grid-cols-3">
            {[{ n: "15+", l: "Years Experience" }, { n: "40+", l: "Venues Supported" }, { n: "3", l: "Countries" }].map((s, i) => (
              <div key={s.l} className="text-center" style={{ padding: "1.75rem 1rem", borderRight: i < 2 ? "1px solid var(--border)" : "none" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "1.8rem", color: "var(--copper)", marginBottom: "0.2rem" }}>{s.n}</div>
                <div style={{ fontSize: "0.48rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "var(--stone)" }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
