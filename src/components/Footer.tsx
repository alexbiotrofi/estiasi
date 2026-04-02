"use client";

export default function Footer() {
  return (
    <footer className="relative py-16 overflow-hidden">
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="divider mb-12" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="text-center md:text-left">
            <span
              className="font-serif text-2xl"
              style={{
                fontFamily: "var(--font-serif)",
                color: "var(--charcoal)",
                letterSpacing: "0.03em",
              }}
            >
              Estiasi
            </span>
            <p
              className="mt-1 text-[0.6rem] uppercase tracking-[0.3em]"
              style={{ color: "var(--stone)" }}
            >
              Culinary Consulting &middot; Cyprus
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            {["About", "Services", "Projects", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-[0.6rem] uppercase tracking-[0.18em] transition-all duration-300 hover:text-teal"
                style={{ color: "var(--clay)", fontWeight: 400 }}
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector(`#${link.toLowerCase()}`)
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {link}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p
            className="text-[0.55rem] tracking-[0.1em]"
            style={{ color: "var(--stone)" }}
          >
            &copy; {new Date().getFullYear()} Estiasi. All rights reserved.
          </p>
        </div>

        {/* Large background text */}
        <div className="mt-16 text-center overflow-hidden">
          <span
            className="font-serif block"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(4rem, 12vw, 9rem)",
              fontWeight: 300,
              color: "var(--charcoal)",
              opacity: 0.03,
              letterSpacing: "0.04em",
              lineHeight: 1,
            }}
          >
            Estiasi
          </span>
        </div>
      </div>
    </footer>
  );
}
