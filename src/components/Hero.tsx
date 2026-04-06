export default function Hero() {
  return (
    <section className="relative" style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Marble background */}
      <div className="absolute inset-0 z-0">
        <img src="/textures/marble-1.jpg" alt="" className="w-full h-full object-cover" style={{ opacity: 0.18 }} />
      </div>

      <div className="wrap relative z-10 flex-1 flex flex-col justify-center" style={{ paddingTop: "8rem", paddingBottom: "4rem" }}>
        <div style={{ maxWidth: 680 }}>
          <div className="flex items-center gap-3" style={{ marginBottom: "2rem" }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--copper)" }} />
            <span style={{ fontSize: "0.48rem", fontWeight: 500, letterSpacing: "0.45em", textTransform: "uppercase" as const, color: "var(--copper)" }}>Culinary Consulting · Cyprus</span>
          </div>

          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.6rem, 5vw, 3.8rem)", fontWeight: 400, color: "var(--charcoal)", lineHeight: 1.1, marginBottom: "1.5rem" }}>
            We build the systems<br />your kitchen runs on.
          </h1>

          <div style={{ width: 48, height: 2, background: "var(--copper)", marginBottom: "1.5rem" }} />

          <p style={{ fontSize: "1rem", fontWeight: 300, color: "var(--stone-dark)", lineHeight: 1.85, maxWidth: "46ch", marginBottom: "2.5rem" }}>
            End-to-end advisory and operational consulting for the hospitality sector. From concept to grand opening — and everything between.
          </p>

          <div className="flex gap-3">
            <a href="#contact" className="btn btn-dark">Book a Discovery Call</a>
            <a href="#services" className="btn btn-outline">Our Services</a>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative z-10" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="wrap">
          <div className="grid grid-cols-3">
            {[
              { n: "15+", l: "Years Experience" },
              { n: "40+", l: "Venues Supported" },
              { n: "3", l: "Countries" },
            ].map((s, i) => (
              <div key={s.l} className="text-center" style={{ padding: "2rem 1rem", borderRight: i < 2 ? "1px solid var(--border)" : "none" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "2rem", color: "var(--copper)", marginBottom: "0.25rem" }}>{s.n}</div>
                <div style={{ fontSize: "0.48rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "var(--stone)" }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
