"use client";

const stats = [
  { number: "15+", label: "Years Combined Experience" },
  { number: "40+", label: "Venues Launched & Supported" },
  { number: "3", label: "Countries Operated In" },
];

const founders = [
  {
    name: "Dimitris Kamaritis",
    role: "Culinary Director & Co-Founder",
    description:
      "A chef by craft and operator by nature. Dimitris has spent over a decade in professional kitchens — from fine dining in London to launching restaurants across Europe. His experience spans concept creation, menu engineering, kitchen design, staff training, and the full operational lifecycle of food and beverage venues. He doesn't consult from a distance. He builds from within.",
    credentials: [
      "Head Chef & Kitchen Director — multiple London venues",
      "Full restaurant launch management — concept to opening night",
      "HACCP & food safety systems specialist",
      "Menu engineering & food cost optimisation",
    ],
    gradient: "linear-gradient(150deg, var(--teal-light), var(--teal), var(--teal-deep))",
    shadow: "0 16px 48px rgba(77,139,138,0.25)",
  },
  {
    name: "Alex Apostolides",
    role: "Operations & Strategy, Co-Founder",
    description:
      "Alex brings the operational architecture that turns culinary vision into a functioning business. Systems design, brand development, digital presence, and the infrastructure that lets hospitality venues run with precision.",
    credentials: [
      "Operations & systems architecture",
      "Brand identity & digital strategy",
      "Technology & platform implementation",
      "Business development & client relations",
    ],
    gradient: "linear-gradient(150deg, #d4ccc2, var(--stone), var(--clay))",
    shadow: "0 16px 48px rgba(138,123,108,0.2)",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 md:py-36 overflow-hidden">
      <div className="orb orb-teal" style={{ top: "20%", left: "-15%" }} />

      <div className="relative z-10 max-w-[1100px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="sect-num reveal">01 &mdash; About</span>
          <h2
            className="mt-3 reveal"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)",
              fontWeight: 400,
              color: "var(--charcoal)",
              letterSpacing: "-0.01em",
              lineHeight: 1.15,
            }}
          >
            Built in Kitchens,<br />Not Boardrooms
          </h2>
          <p
            className="mt-5 max-w-xl mx-auto reveal"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "1rem",
              fontWeight: 300,
              color: "var(--clay)",
              lineHeight: 1.8,
            }}
          >
            Estiasi was founded by operators who have done the work — launching
            venues, running kitchens, and building the systems that make
            hospitality function at its highest level.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 md:gap-6 mb-20 md:mb-28 stagger-children">
          {stats.map((stat) => (
            <div key={stat.label} className="glass text-center py-7 px-4 relative overflow-hidden">
              <div
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
                  fontWeight: 400,
                  color: "var(--teal)",
                  marginBottom: "0.5rem",
                }}
              >
                {stat.number}
              </div>
              <div
                style={{
                  fontSize: "0.6rem",
                  fontWeight: 500,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase" as const,
                  color: "var(--clay)",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Founders */}
        <div className="space-y-20 md:space-y-28">
          {founders.map((founder, i) => (
            <div
              key={founder.name}
              className={`flex flex-col ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-8 md:gap-14 items-center`}
            >
              {/* Photo */}
              <div className={`w-full md:w-[320px] shrink-0 ${i % 2 === 0 ? "reveal-left" : "reveal-right"}`}>
                <div
                  className="aspect-[3/4] rounded-2xl relative overflow-hidden"
                  style={{
                    background: founder.gradient,
                    boxShadow: founder.shadow,
                  }}
                >
                  {/* Shine */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: "linear-gradient(168deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.05) 35%, transparent 55%)",
                    }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 pt-20" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.4), transparent)" }}>
                    <div style={{ fontSize: "0.5rem", letterSpacing: "0.3em", textTransform: "uppercase" as const, color: "rgba(255,255,255,0.65)", marginBottom: "4px" }}>
                      {founder.role}
                    </div>
                    <div style={{ fontFamily: "var(--font-serif)", fontSize: "1.35rem", fontWeight: 400, color: "white" }}>
                      {founder.name}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bio */}
              <div className={`flex-1 ${i % 2 === 0 ? "reveal-right" : "reveal-left"}`}>
                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "clamp(1.6rem, 3vw, 2rem)",
                    fontWeight: 400,
                    color: "var(--charcoal)",
                    marginBottom: "0.35rem",
                  }}
                >
                  {founder.name}
                </h3>
                <p
                  style={{
                    fontSize: "0.65rem",
                    fontWeight: 500,
                    letterSpacing: "0.25em",
                    textTransform: "uppercase" as const,
                    color: "var(--teal)",
                    marginBottom: "1.25rem",
                  }}
                >
                  {founder.role}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.92rem",
                    fontWeight: 300,
                    color: "var(--clay)",
                    lineHeight: 1.85,
                    marginBottom: "1.5rem",
                  }}
                >
                  {founder.description}
                </p>
                <div className="glass rounded-xl p-5">
                  <ul className="space-y-2.5">
                    {founder.credentials.map((cred) => (
                      <li key={cred} className="flex items-start gap-3">
                        <span
                          className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                          style={{ background: "var(--teal)", opacity: 0.5 }}
                        />
                        <span
                          style={{
                            fontFamily: "var(--font-sans)",
                            fontSize: "0.82rem",
                            fontWeight: 300,
                            color: "var(--charcoal)",
                            lineHeight: 1.5,
                          }}
                        >
                          {cred}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
