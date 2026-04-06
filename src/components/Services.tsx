export default function Services() {
  return (
    <section style={{ padding: "90px 0 128px" }}>
      <div className="wrap">
        <div className="flex justify-between items-start gap-8 flex-col md:flex-row" style={{ marginBottom: "4rem" }}>
          <div>
            <span className="label">Services</span>
            <span className="sect-num">[ 02 / 07 ]</span>
          </div>
          <div style={{ maxWidth: "700px" }}>
            <p className="reveal" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 400, color: "var(--limestone)", lineHeight: 1.3, letterSpacing: "-0.02em" }}>
              We design menus that make your guests weak in the knees. Kitchen systems precise enough for a Michelin star. Staff training that turns a team into a unit. SOPs documented down to the gram. HACCP frameworks that pass every audit. And operational architecture that runs when we&rsquo;re not in the room.
            </p>
          </div>
        </div>

        {/* Service items with hover blur effect */}
        <div className="divider-dark" style={{ marginBottom: "1rem" }} />
        {[
          { name: "Concept & Positioning", desc: "Market research, competitor analysis, brand positioning" },
          { name: "Menu Engineering", desc: "Recipe development, costing, profitability optimisation" },
          { name: "Kitchen Design", desc: "Equipment specification, workflow, layout planning" },
          { name: "Staff Training", desc: "Service standards, kitchen procedures, team development" },
          { name: "HACCP & Compliance", desc: "Food safety frameworks, documentation, audits" },
          { name: "Operations & Systems", desc: "SOPs, booking systems, CRM, stock management" },
          { name: "Brand & Digital", desc: "Identity, website, SEO, photography direction" },
          { name: "Launch Management", desc: "Soft opening, adjustment, grand opening, handover" },
        ].map((s, i) => (
          <div key={s.name}>
            <div className="reveal flex items-center justify-between" style={{ padding: "1.25rem 0", cursor: "default" }}>
              <div className="flex items-center gap-6">
                <span style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.2rem, 2vw, 1.6rem)", fontWeight: 400, color: "var(--limestone)", letterSpacing: "-0.01em", transition: "color 0.2s" }}>{s.name}</span>
              </div>
              <span style={{ fontSize: "0.7rem", fontWeight: 300, color: "var(--white-30)", maxWidth: "35ch", textAlign: "right" }}>{s.desc}</span>
            </div>
            <div className="divider-dark" />
          </div>
        ))}

        <div className="reveal" style={{ marginTop: "3rem", textAlign: "center" }}>
          <a href="#contact" className="btn">See Full Scope</a>
        </div>
      </div>
    </section>
  );
}
