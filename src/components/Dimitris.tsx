export default function Dimitris() {
  return (
    <section id="about" style={{ padding: "8rem 0", background: "var(--charcoal-deep)", position: "relative", overflow: "hidden" }}>
      {/* Dark stone texture */}
      <div className="absolute inset-0 z-0">
        <img src="/textures/dark-stone.jpg" alt="" className="w-full h-full object-cover" style={{ opacity: 0.25 }} />
      </div>

      <div className="wrap relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left — Photo placeholder */}
          <div className="reveal-left">
            <div style={{ aspectRatio: "4/5", borderRadius: 8, overflow: "hidden", position: "relative", background: "var(--graphite)" }}>
              <img src="/textures/marble-3.jpg" alt="Dimitris Kamaritis" className="w-full h-full object-cover" style={{ opacity: 0.4 }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(28,28,26,0.8) 0%, transparent 60%)" }} />
              <div style={{ position: "absolute", bottom: "2rem", left: "2rem", right: "2rem" }}>
                <div style={{ fontFamily: "var(--font-logo)", fontSize: "2rem", letterSpacing: "0.0618em", color: "var(--limestone)", marginBottom: "0.5rem" }}>Dimitris Kamaritis</div>
                <div style={{ fontSize: "0.48rem", fontWeight: 500, letterSpacing: "0.3em", textTransform: "uppercase" as const, color: "var(--copper)" }}>Culinary Director & Co-Founder</div>
              </div>
            </div>
          </div>

          {/* Right — Bio */}
          <div className="reveal-right">
            <span className="label">The Chef Behind the Consultancy</span>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 400, color: "var(--limestone)", lineHeight: 1.15, marginBottom: "1.5rem" }}>
              A decade in professional kitchens. From the line to the boardroom.
            </h2>
            <p style={{ fontSize: "0.95rem", fontWeight: 300, color: "var(--stone)", lineHeight: 1.9, marginBottom: "2rem" }}>
              Dimitris has opened restaurants across London and Europe. He&rsquo;s run kitchens, built teams, engineered menus, designed workflows, and managed every phase from concept to grand opening. He doesn&rsquo;t consult from a distance — he builds from within.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              {[
                "Head Chef & Kitchen Director — London",
                "Full restaurant launch management",
                "HACCP & food safety systems",
                "Menu engineering & food cost control",
                "Staff recruitment & training",
                "SOP documentation & compliance",
              ].map(c => (
                <div key={c} className="flex items-start gap-2">
                  <span style={{ width: 4, height: 4, borderRadius: "50%", background: "var(--copper)", marginTop: "0.4rem", flexShrink: 0 }} />
                  <span style={{ fontSize: "0.78rem", fontWeight: 300, color: "var(--stone-light)", lineHeight: 1.5 }}>{c}</span>
                </div>
              ))}
            </div>

            <div style={{ marginTop: "2.5rem", display: "flex", gap: "3rem" }}>
              {[{ n: "15+", l: "Years" }, { n: "40+", l: "Venues" }, { n: "6", l: "Kitchens Led" }].map(s => (
                <div key={s.l}>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "1.8rem", color: "var(--copper)" }}>{s.n}</div>
                  <div style={{ fontSize: "0.45rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "var(--stone-dark)" }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Alex — brief mention */}
        <div className="reveal" style={{ marginTop: "4rem", paddingTop: "2rem", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
            <span style={{ fontFamily: "var(--font-logo)", fontSize: "1.2rem", letterSpacing: "0.0618em", color: "var(--stone-light)" }}>Alex Apostolides</span>
            <span style={{ fontSize: "0.45rem", fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase" as const, color: "var(--copper)" }}>Operations & Strategy, Co-Founder</span>
            <p style={{ fontSize: "0.82rem", fontWeight: 300, color: "var(--stone)", lineHeight: 1.7, maxWidth: "50ch" }}>
              Systems architecture, brand development, digital presence, and the operational infrastructure that lets hospitality venues run with precision.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
