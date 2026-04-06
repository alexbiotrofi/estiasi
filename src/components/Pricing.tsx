const tiers = [
  {
    name: "Culinary Core",
    price: "€3,500",
    desc: "The kitchen essentials. Everything you need to launch or fix the culinary side of your operation.",
    items: [
      "Concept creation & positioning",
      "Menu creation & engineering",
      "Food cost control frameworks",
      "Kitchen design consultancy",
      "HACCP & food safety compliance",
      "Staff training programmes",
      "Standard Operating Procedures",
      "Soft opening & grand opening support",
    ],
    accent: false,
  },
  {
    name: "Complete Operations",
    price: "€6,500",
    desc: "Culinary Core plus the operational systems that make a venue run like clockwork.",
    items: [
      "Everything in Culinary Core",
      "Booking & reservation systems",
      "Lead tracking & CRM setup",
      "Staff scheduling & management",
      "Stock management systems",
      "Invoicing & payment workflows",
      "Supplier management",
      "Performance tracking & reporting",
    ],
    accent: true,
  },
  {
    name: "Full Package",
    price: "€9,500",
    desc: "The complete build. Culinary, operations, and the brand presence that fills the room.",
    items: [
      "Everything in Complete Operations",
      "Brand identity & visual design",
      "Website design & development",
      "SEO & digital visibility",
      "Google Business Profile setup",
      "Social media foundations",
      "Photography direction",
      "Ongoing brand consultation",
    ],
    accent: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" style={{ padding: "8rem 0", background: "var(--limestone)" }}>
      <div className="wrap">
        <div className="text-center reveal" style={{ marginBottom: "4rem" }}>
          <span className="label" style={{ justifyContent: "center" }}>Pricing</span>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)", fontWeight: 400, color: "var(--charcoal)", lineHeight: 1.1 }}>
            Three tiers. One standard.
          </h2>
          <p style={{ marginTop: "1rem", fontSize: "0.95rem", fontWeight: 300, color: "var(--stone-dark)", lineHeight: 1.85, maxWidth: "48ch", margin: "1rem auto 0" }}>
            Every engagement is scoped to your venue. These are starting points — the discovery call defines the rest.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px reveal" style={{ background: "var(--border)", border: "1px solid var(--border)", borderRadius: 8, overflow: "hidden", transitionDelay: "0.15s" }}>
          {tiers.map(t => (
            <div key={t.name} style={{ background: t.accent ? "var(--charcoal-deep)" : "#fff", padding: "2.5rem", display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "0.45rem", fontWeight: 500, letterSpacing: "0.3em", textTransform: "uppercase" as const, color: "var(--copper)", marginBottom: "0.75rem" }}>{t.name}</span>
              <div style={{ marginBottom: "0.5rem" }}>
                <span style={{ fontFamily: "var(--font-display)", fontSize: "2.5rem", fontWeight: 400, color: t.accent ? "var(--limestone)" : "var(--charcoal)" }}>{t.price}</span>
                <span style={{ fontSize: "0.55rem", fontWeight: 400, color: "var(--stone)", marginLeft: "0.5rem" }}>starting from</span>
              </div>
              <p style={{ fontSize: "0.85rem", fontWeight: 300, color: t.accent ? "var(--stone)" : "var(--stone-dark)", lineHeight: 1.75, marginBottom: "2rem" }}>{t.desc}</p>

              <div style={{ flex: 1 }}>
                {t.items.map(item => (
                  <div key={item} className="flex items-start gap-2" style={{ marginBottom: "0.5rem" }}>
                    <span style={{ width: 4, height: 4, borderRadius: "50%", background: "var(--copper)", marginTop: "0.4rem", flexShrink: 0, opacity: t.accent ? 0.7 : 0.4 }} />
                    <span style={{ fontSize: "0.78rem", fontWeight: 300, color: t.accent ? "var(--stone-light)" : "var(--stone-dark)", lineHeight: 1.5 }}>{item}</span>
                  </div>
                ))}
              </div>

              <a href="#contact" className={t.accent ? "btn btn-copper" : "btn btn-dark"} style={{ marginTop: "2rem", width: "100%", justifyContent: "center" }}>
                Book a Discovery Call
              </a>
            </div>
          ))}
        </div>

        <p className="text-center reveal" style={{ marginTop: "2rem", fontSize: "0.75rem", fontWeight: 300, color: "var(--stone)", fontStyle: "italic" }}>
          All prices are indicative starting points. Final scope and pricing defined during the discovery call.
        </p>
      </div>
    </section>
  );
}
