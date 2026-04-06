export default function Philosophy() {
  return (
    <section style={{ padding: "6rem 0", background: "var(--charcoal-deep)", position: "relative", overflow: "hidden" }}>
      {/* Dark stone texture */}
      <div className="absolute inset-0 z-0">
        <img src="/textures/dark-stone.jpg" alt="" className="w-full h-full object-cover" style={{ opacity: 0.3 }} />
      </div>

      <div className="wrap relative z-10">
        <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
          <span style={{ fontSize: "0.48rem", fontWeight: 500, letterSpacing: "0.5em", textTransform: "uppercase" as const, color: "var(--copper)", display: "block", marginBottom: "0.75rem" }}>Philosophy</span>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 400, color: "var(--limestone)", lineHeight: 1.15 }}>
            Great Hospitality Is a System,<br />Not a Personality
          </h2>
          <div style={{ width: 32, height: 2, background: "var(--copper)", margin: "2rem auto" }} />
          <p style={{ fontFamily: "var(--font-body)", fontSize: "1.05rem", fontWeight: 300, fontStyle: "italic", color: "var(--stone-light)", lineHeight: 1.85 }}>
            &ldquo;The best restaurants are not built on talent alone — they are built on structure, discipline, and a relentless focus on the details that guests feel but never see.&rdquo;
          </p>
          <div className="flex items-center justify-center gap-3" style={{ marginTop: "1.25rem" }}>
            <span style={{ width: 12, height: 1, background: "var(--copper)", opacity: 0.4 }} />
            <span style={{ fontSize: "0.48rem", fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase" as const, color: "var(--stone-dark)" }}>Dimitris Kamaritis</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-px" style={{ background: "rgba(255,255,255,0.06)", marginTop: "4rem", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 8, overflow: "hidden" }}>
          {[
            { n: "01", t: "Precision", d: "Every recommendation is measurable. Every system is documented." },
            { n: "02", t: "Substance", d: "No slide decks without follow-through. No theory without execution." },
            { n: "03", t: "Sustainability", d: "Operations that endure long after our engagement ends." },
            { n: "04", t: "Guest-First", d: "Every decision filters through: does this improve the experience?" },
          ].map(p => (
            <div key={p.t} style={{ padding: "2rem", background: "rgba(255,255,255,0.02)" }}>
              <span style={{ fontSize: "0.42rem", fontWeight: 500, letterSpacing: "0.3em", color: "var(--copper)", opacity: 0.5 }}>{p.n}</span>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.05rem", fontWeight: 400, color: "var(--limestone)", marginTop: "0.5rem", marginBottom: "0.5rem" }}>{p.t}</h3>
              <p style={{ fontSize: "0.8rem", fontWeight: 300, color: "var(--stone)", lineHeight: 1.7 }}>{p.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
