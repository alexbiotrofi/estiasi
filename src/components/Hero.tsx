export default function Hero() {
  return (
    <section className="relative" style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Marble background */}
      <div className="absolute inset-0 z-0">
        <img src="/textures/marble-2.jpg" alt="" className="w-full h-full object-cover" style={{ opacity: 0.35 }} />
      </div>

      <div className="wrap relative z-10 flex-1 flex flex-col justify-center" style={{ paddingTop: "8rem", paddingBottom: "4rem" }}>
        <div style={{ maxWidth: "720px" }}>
          {/* Copper accent dot + label */}
          <div className="flex items-center gap-3" style={{ marginBottom: "2rem" }}>
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--copper)" }} />
            <span className="label">Culinary Consulting · Cyprus</span>
          </div>

          <h1
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2.8rem, 5.5vw, 4.2rem)",
              fontWeight: 400,
              color: "var(--charcoal)",
              lineHeight: 1.1,
              marginBottom: "1.75rem",
            }}
          >
            We build the systems
            <br />your kitchen runs on.
          </h1>

          {/* Copper line accent */}
          <div style={{ width: "48px", height: "2px", background: "var(--copper)", marginBottom: "1.75rem" }} />

          <p
            style={{
              fontSize: "1.05rem",
              fontWeight: 300,
              color: "var(--stone-dark)",
              lineHeight: 1.85,
              maxWidth: "48ch",
              marginBottom: "2.5rem",
            }}
          >
            End-to-end advisory and operational consulting for the hospitality
            sector. From concept to grand opening — and everything between.
          </p>

          <div className="flex gap-3">
            <a href="#contact" className="btn btn-primary">Book a Discovery Call</a>
            <a href="#services" className="btn btn-outline">Our Services</a>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative z-10" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="wrap">
          <div className="grid grid-cols-3">
            {[
              { num: "15+", label: "Years Experience" },
              { num: "40+", label: "Venues Supported" },
              { num: "3", label: "Countries" },
            ].map((s, i) => (
              <div
                key={s.label}
                className="text-center"
                style={{ padding: "2rem 1rem", borderRight: i < 2 ? "1px solid var(--border)" : "none" }}
              >
                <div style={{ fontFamily: "var(--font-serif)", fontSize: "2rem", color: "var(--copper)", marginBottom: "0.25rem" }}>
                  {s.num}
                </div>
                <div style={{ fontSize: "0.5rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--stone)" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
