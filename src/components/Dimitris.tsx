export default function Dimitris() {
  return (
    <section style={{ padding: "128px 0" }}>
      <div className="wrap">
        <div className="flex justify-between items-start gap-8 flex-col md:flex-row" style={{ marginBottom: "4rem" }}>
          <div>
            <span className="label">The Chef</span>
            <span className="sect-num">[ 05 / 07 ]</span>
          </div>
        </div>

        <div className="rounded-section" style={{ background: "var(--dark-2)", overflow: "hidden" }}>
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Photo */}
            <div style={{ position: "relative", minHeight: "650px", overflow: "hidden" }}>
              <img src="/photos/dimitris-kitchen.jpg" alt="Dimitris Kamaritis" className="w-full h-full object-cover" style={{ position: "absolute", inset: 0, objectPosition: "center 15%" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, transparent 70%, var(--dark-2) 100%)" }} />
            </div>

            {/* Content */}
            <div style={{ padding: "clamp(2rem, 4vw, 4rem)", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <h3 className="reveal" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, color: "var(--limestone)", letterSpacing: "-0.02em", lineHeight: 1.15, marginBottom: "1.5rem" }}>
                Dimitris Kamaritis
              </h3>
              <p className="reveal" style={{ fontSize: "0.5rem", fontWeight: 500, letterSpacing: "0.3em", textTransform: "uppercase" as const, color: "var(--copper)", marginBottom: "1.5rem" }}>Culinary Director & Co-Founder</p>

              <p className="reveal" style={{ fontSize: "0.95rem", fontWeight: 300, color: "var(--white-50)", lineHeight: 1.9, marginBottom: "2rem" }}>
                Michelin-trained chef with experience at The Ritz London, Claude Bosi at Bibendum, and Mauro Colagreco&rsquo;s team at Raffles London at The OWO. Dimitris leads all culinary standards, menu direction, kitchen design, and staff training across every engagement.
              </p>

              <div className="reveal" style={{ display: "flex", gap: "3rem", marginBottom: "2rem" }}>
                {[{ n: "3", l: "Michelin Kitchens" }, { n: "FR · ES · UK", l: "Countries" }, { n: "10+", l: "Years in Kitchens" }].map(s => (
                  <div key={s.l}>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: "1.8rem", color: "var(--copper)" }}>{s.n}</div>
                    <div style={{ fontSize: "0.5rem", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase" as const, color: "var(--white-30)" }}>{s.l}</div>
                  </div>
                ))}
              </div>

              <div className="divider-dark reveal" style={{ marginBottom: "1.5rem" }} />
              <div className="reveal" style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <span style={{ fontFamily: "var(--font-logo)", fontSize: "1rem", letterSpacing: "0.0618em", color: "var(--white-30)" }}>Alex Apostolides</span>
                  <span style={{ fontSize: "0.45rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "var(--copper)" }}>Strategy & Client Experience</span>
                </div>
                <p style={{ fontSize: "0.78rem", fontWeight: 300, color: "var(--white-30)", lineHeight: 1.7, maxWidth: "50ch" }}>
                  Background in strategy, service design, and operations. Oversees client experience, internal systems, brand direction, and digital presence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
