"use client";

const principles = [
  {
    word: "Precision",
    description:
      "Every recommendation is measurable. Every system is documented. Great hospitality is not accidental — it is engineered.",
  },
  {
    word: "Substance",
    description:
      "We do the work. No slide decks without follow-through. No theory without execution. Our consultants have run the kitchens they advise.",
  },
  {
    word: "Sustainability",
    description:
      "Operations that endure. We build systems designed to function long after our engagement ends — not dependency, but independence.",
  },
  {
    word: "Guest-First",
    description:
      "Every operational decision filters through one question: does this improve the experience for the person at the table?",
  },
];

export default function Philosophy() {
  return (
    <section
      id="philosophy"
      className="relative py-32 md:py-44 overflow-hidden"
    >
      <div className="orb orb-copper" style={{ top: "10%", right: "-10%" }} />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="sect-num reveal">02 &mdash; Philosophy</span>
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
            Great Hospitality Is a System,
            <br />
            Not a Personality
          </h2>
        </div>

        {/* Quote */}
        <div className="max-w-3xl mx-auto mb-24 text-center reveal">
          <div
            className="w-8 h-[1px] mx-auto mb-8"
            style={{ background: "var(--copper)", opacity: 0.4 }}
          />
          <p
            className="font-serif italic"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1.3rem, 2.5vw, 1.6rem)",
              fontWeight: 400,
              color: "var(--charcoal)",
              lineHeight: 1.7,
            }}
          >
            &ldquo;We believe that the best restaurants are not built on talent
            alone — they are built on structure, discipline, and a relentless
            focus on the details that guests feel but never see.&rdquo;
          </p>
          <div
            className="w-8 h-[1px] mx-auto mt-8"
            style={{ background: "var(--copper)", opacity: 0.4 }}
          />
        </div>

        {/* Principles grid */}
        <div className="grid md:grid-cols-2 gap-6 stagger-children">
          {principles.map((p, i) => (
            <div
              key={p.word}
              className="glass glass-shine relative p-8 md:p-10 group cursor-default"
            >
              <div className="flex items-start gap-5">
                <span
                  className="font-serif text-5xl md:text-6xl leading-none"
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontWeight: 300,
                    color: "var(--teal)",
                    opacity: 0.15,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3
                    className="font-serif text-xl md:text-2xl mb-3 group-hover:text-teal transition-colors duration-300"
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontWeight: 500,
                      color: "var(--charcoal)",
                    }}
                  >
                    {p.word}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.85rem",
                      fontWeight: 300,
                      color: "var(--clay)",
                      lineHeight: 1.75,
                    }}
                  >
                    {p.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tone of voice strip */}
        <div className="mt-24 reveal">
          <div className="overflow-hidden py-8">
            <div className="flex whitespace-nowrap text-scroll">
              {[...Array(2)].map((_, setIdx) => (
                <div key={setIdx} className="flex items-center shrink-0">
                  {[
                    "Direct",
                    "Authoritative",
                    "Confident",
                    "Professional",
                    "Precise",
                    "Human",
                  ].map((word) => (
                    <span key={`${setIdx}-${word}`} className="flex items-center">
                      <span
                        className="font-serif text-5xl md:text-7xl px-6"
                        style={{
                          fontFamily: "var(--font-serif)",
                          fontWeight: 300,
                          color: "var(--charcoal)",
                          opacity: 0.08,
                        }}
                      >
                        {word}
                      </span>
                      <span
                        className="w-2 h-2 rounded-full shrink-0"
                        style={{ background: "var(--teal)", opacity: 0.15 }}
                      />
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
