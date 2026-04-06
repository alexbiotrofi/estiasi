export default function Hero() {
  return (
    <section className="relative" style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center" }}>
      {/* Marble as the primary background */}
      <div className="absolute inset-0 z-0">
        <img src="/textures/marble-1.jpg" alt="" className="w-full h-full object-cover" style={{ opacity: 0.3 }} />
      </div>

      <div className="wrap relative z-10" style={{ paddingTop: "10rem", paddingBottom: "5rem" }}>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Left — content */}
          <div className="md:col-span-7 reveal">
            <div className="flex items-center gap-3" style={{ marginBottom: "1.5rem" }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--copper)" }} />
              <span style={{ fontSize: "0.48rem", fontWeight: 500, letterSpacing: "0.45em", textTransform: "uppercase" as const, color: "var(--copper)" }}>Culinary Consulting · Cyprus</span>
            </div>

            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.4rem, 5vw, 3.8rem)", fontWeight: 400, color: "var(--charcoal)", lineHeight: 1.12, maxWidth: "16ch", marginBottom: "1.5rem" }}>
              Launching restaurants. Fixing operations. Building what lasts.
            </h1>

            <div style={{ width: 48, height: 2, background: "var(--copper)", marginBottom: "1.5rem" }} />

            <p style={{ fontSize: "1rem", fontWeight: 300, color: "var(--stone-dark)", lineHeight: 1.85, maxWidth: "44ch", marginBottom: "2.5rem" }}>
              End-to-end culinary consulting for the hospitality sector. From concept to grand opening — and everything between.
            </p>

            <div className="flex gap-3">
              <a href="#contact" className="btn btn-dark">Book a Discovery Call</a>
              <a href="#work" className="btn btn-outline">See Our Work</a>
            </div>
          </div>

          {/* Right — photo on marble */}
          <div className="md:col-span-5 reveal-right hidden md:block">
            <div style={{ position: "relative" }}>
              {/* Marble frame behind photo */}
              <div style={{ position: "absolute", top: -16, right: -16, bottom: 16, left: 16, borderRadius: 8, overflow: "hidden", zIndex: 0 }}>
                <img src="/textures/marble-3.jpg" alt="" className="w-full h-full object-cover" style={{ opacity: 0.5 }} />
              </div>
              <div style={{ position: "relative", zIndex: 1, borderRadius: 8, overflow: "hidden", boxShadow: "0 24px 64px rgba(0,0,0,0.12)" }}>
                <img src="/photos/chef-plating.jpg" alt="Chef at work" className="w-full object-cover" style={{ aspectRatio: "4/5", display: "block" }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar with marble hint */}
      <div className="relative z-10" style={{ borderTop: "1px solid var(--border)", background: "rgba(244,241,236,0.6)", backdropFilter: "blur(8px)" }}>
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
