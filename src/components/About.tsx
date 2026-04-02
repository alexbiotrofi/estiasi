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
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-32 md:py-44 overflow-hidden">
      {/* Background */}
      <div className="orb orb-teal" style={{ top: "20%", left: "-15%" }} />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-12">
        {/* Section header */}
        <div className="text-center mb-20">
          <span className="sect-num reveal">01 &mdash; About</span>
          <h2
            className="font-serif mt-3 reveal"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
              fontWeight: 400,
              color: "var(--charcoal)",
              letterSpacing: "-0.01em",
            }}
          >
            Built in Kitchens,<br />Not Boardrooms
          </h2>
          <p
            className="mt-4 max-w-lg mx-auto reveal"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.85rem",
              fontWeight: 300,
              color: "var(--clay)",
              lineHeight: 1.75,
            }}
          >
            Estiasi was founded by operators who have done the work — launching
            venues, running kitchens, and building the systems that make
            hospitality function at its highest level.
          </p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-6 mb-24 stagger-children">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="glass glass-shine relative text-center py-8 px-4"
            >
              <div
                className="counter-value text-3xl md:text-4xl mb-2"
                style={{
                  fontFamily: "var(--font-serif)",
                  color: "var(--teal)",
                }}
              >
                {stat.number}
              </div>
              <div
                className="text-[0.6rem] uppercase tracking-[0.2em]"
                style={{ color: "var(--clay)" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Founders */}
        <div className="space-y-16">
          {founders.map((founder, i) => (
            <div
              key={founder.name}
              className={`flex flex-col ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-10 md:gap-16 items-start`}
            >
              {/* Photo placeholder */}
              <div
                className={`w-full md:w-[340px] shrink-0 ${i % 2 === 0 ? "reveal-left" : "reveal-right"}`}
              >
                <div
                  className="aspect-[3/4] rounded-2xl glass-shine relative overflow-hidden"
                  style={{
                    background:
                      i === 0
                        ? "linear-gradient(150deg, var(--teal-light), var(--teal), var(--teal-deep))"
                        : "linear-gradient(150deg, var(--stone), var(--clay))",
                    boxShadow:
                      i === 0
                        ? "0 16px 48px rgba(77,139,138,0.2)"
                        : "var(--sh-l)",
                  }}
                >
                  <div className="absolute inset-0 flex items-end p-6">
                    <div>
                      <div
                        className="text-[0.5rem] uppercase tracking-[0.3em] mb-1"
                        style={{ color: "rgba(255,255,255,0.6)" }}
                      >
                        {founder.role}
                      </div>
                      <div
                        className="font-serif text-xl"
                        style={{
                          fontFamily: "var(--font-serif)",
                          color: "white",
                        }}
                      >
                        {founder.name}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bio */}
              <div className={`flex-1 ${i % 2 === 0 ? "reveal-right" : "reveal-left"}`}>
                <h3
                  className="font-serif text-2xl md:text-3xl mb-2"
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontWeight: 400,
                    color: "var(--charcoal)",
                  }}
                >
                  {founder.name}
                </h3>
                <p
                  className="text-[0.65rem] uppercase tracking-[0.25em] mb-5"
                  style={{ color: "var(--teal)", fontWeight: 500 }}
                >
                  {founder.role}
                </p>
                <p
                  className="mb-6"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.88rem",
                    fontWeight: 300,
                    color: "var(--clay)",
                    lineHeight: 1.8,
                  }}
                >
                  {founder.description}
                </p>
                <ul className="space-y-3">
                  {founder.credentials.map((cred) => (
                    <li key={cred} className="flex items-start gap-3">
                      <span
                        className="w-1 h-1 rounded-full mt-2 shrink-0"
                        style={{ background: "var(--teal)", opacity: 0.5 }}
                      />
                      <span
                        className="text-[0.8rem]"
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontWeight: 300,
                          color: "var(--clay)",
                          lineHeight: 1.6,
                        }}
                      >
                        {cred}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
