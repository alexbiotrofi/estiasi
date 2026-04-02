"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    business: "",
    location: "",
    service: "",
    message: "",
    contact: "email",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your enquiry. We will be in touch shortly.");
  };

  const inputStyle: React.CSSProperties = {
    fontFamily: "var(--font-sans)",
    fontWeight: 300,
    fontSize: "0.9rem",
    color: "var(--charcoal)",
    background: "rgba(255,255,255,0.6)",
    border: "1px solid rgba(200,192,182,0.35)",
    borderRadius: "12px",
    padding: "12px 16px",
    width: "100%",
    outline: "none",
    transition: "border-color 0.3s, box-shadow 0.3s",
  };

  return (
    <section id="contact" className="relative py-28 md:py-36 overflow-hidden marble-bg">
      <div className="orb orb-teal" style={{ top: "10%", left: "-10%" }} />
      <div className="orb orb-copper" style={{ bottom: "5%", right: "-8%" }} />

      <div className="relative z-10 max-w-[1100px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="sect-num reveal">05 &mdash; Contact</span>
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
            Start the Conversation
          </h2>
          <p
            className="mt-5 max-w-lg mx-auto reveal"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "1rem",
              fontWeight: 300,
              color: "var(--clay)",
              lineHeight: 1.8,
            }}
          >
            Book a discovery call, send us an enquiry, or get in touch directly.
            No obligation. No pressure.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Left column */}
          <div className="lg:col-span-2 space-y-6 reveal-left">
            {/* Book a call */}
            <div className="glass-strong relative p-7" style={{ borderRadius: "20px" }}>
              <div
                style={{
                  fontSize: "0.55rem",
                  fontWeight: 500,
                  letterSpacing: "0.3em",
                  textTransform: "uppercase" as const,
                  color: "var(--teal)",
                  marginBottom: "1rem",
                }}
              >
                Primary
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.35rem",
                  fontWeight: 400,
                  color: "var(--charcoal)",
                  marginBottom: "0.6rem",
                }}
              >
                Book a Discovery Call
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.85rem",
                  fontWeight: 300,
                  color: "var(--clay)",
                  lineHeight: 1.7,
                  marginBottom: "1.5rem",
                }}
              >
                30-minute introductory call to understand your venue, your
                challenges, and how we can help.
              </p>
              <button className="magnetic-btn w-full text-center">
                <span>Schedule a Call</span>
              </button>
            </div>

            {/* Direct contact */}
            <div className="glass relative p-7" style={{ borderRadius: "20px" }}>
              <div
                style={{
                  fontSize: "0.55rem",
                  fontWeight: 500,
                  letterSpacing: "0.3em",
                  textTransform: "uppercase" as const,
                  color: "var(--teal)",
                  marginBottom: "1.25rem",
                }}
              >
                Direct Contact
              </div>
              <div className="space-y-5">
                <div>
                  <div style={{ fontSize: "0.55rem", letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "var(--stone)", marginBottom: "4px" }}>
                    Email
                  </div>
                  <a
                    href="mailto:hello@estiasi.com"
                    className="hover:text-teal transition-colors"
                    style={{ fontFamily: "var(--font-sans)", fontWeight: 400, fontSize: "0.95rem", color: "var(--charcoal)" }}
                  >
                    hello@estiasi.com
                  </a>
                </div>
                <div>
                  <div style={{ fontSize: "0.55rem", letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "var(--stone)", marginBottom: "4px" }}>
                    Phone
                  </div>
                  <a
                    href="tel:+35700000000"
                    className="hover:text-teal transition-colors"
                    style={{ fontFamily: "var(--font-sans)", fontWeight: 400, fontSize: "0.95rem", color: "var(--charcoal)" }}
                  >
                    +357 00 000 000
                  </a>
                </div>
                <div>
                  <div style={{ fontSize: "0.55rem", letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "var(--stone)", marginBottom: "4px" }}>
                    Location
                  </div>
                  <span style={{ fontFamily: "var(--font-sans)", fontWeight: 400, fontSize: "0.95rem", color: "var(--charcoal)" }}>
                    Cyprus
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right column — Form */}
          <div className="lg:col-span-3 reveal-right">
            <form
              onSubmit={handleSubmit}
              className="glass-strong relative p-7 md:p-9"
              style={{ borderRadius: "20px" }}
            >
              <div
                style={{
                  fontSize: "0.55rem",
                  fontWeight: 500,
                  letterSpacing: "0.3em",
                  textTransform: "uppercase" as const,
                  color: "var(--teal)",
                  marginBottom: "1.75rem",
                }}
              >
                Send an Enquiry
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label style={{ display: "block", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "var(--clay)", marginBottom: "8px" }}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={inputStyle}
                    placeholder="Full name"
                    onFocus={(e) => { e.currentTarget.style.borderColor = "rgba(77,139,138,0.4)"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(77,139,138,0.08)"; }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(200,192,182,0.35)"; e.currentTarget.style.boxShadow = "none"; }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "var(--clay)", marginBottom: "8px" }}>
                    Business Name
                  </label>
                  <input
                    type="text"
                    value={formData.business}
                    onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                    style={inputStyle}
                    placeholder="Venue or company"
                    onFocus={(e) => { e.currentTarget.style.borderColor = "rgba(77,139,138,0.4)"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(77,139,138,0.08)"; }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(200,192,182,0.35)"; e.currentTarget.style.boxShadow = "none"; }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label style={{ display: "block", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "var(--clay)", marginBottom: "8px" }}>
                    Location
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    style={inputStyle}
                    placeholder="City / Country"
                    onFocus={(e) => { e.currentTarget.style.borderColor = "rgba(77,139,138,0.4)"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(77,139,138,0.08)"; }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(200,192,182,0.35)"; e.currentTarget.style.boxShadow = "none"; }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "var(--clay)", marginBottom: "8px" }}>
                    Service of Interest
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    style={{ ...inputStyle, color: formData.service ? "var(--charcoal)" : "var(--stone)", appearance: "none" as const }}
                    onFocus={(e) => { e.currentTarget.style.borderColor = "rgba(77,139,138,0.4)"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(77,139,138,0.08)"; }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(200,192,182,0.35)"; e.currentTarget.style.boxShadow = "none"; }}
                  >
                    <option value="">Select a service</option>
                    <option value="startup">Start-Up & Opening</option>
                    <option value="support">Restaurant Support</option>
                    <option value="review">Restaurant & Hotel Review</option>
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>
              </div>

              <div className="mb-5">
                <label style={{ display: "block", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "var(--clay)", marginBottom: "8px" }}>
                  Brief Description
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  style={{ ...inputStyle, resize: "none" as const }}
                  placeholder="Tell us about your project..."
                  onFocus={(e) => { e.currentTarget.style.borderColor = "rgba(77,139,138,0.4)"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(77,139,138,0.08)"; }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(200,192,182,0.35)"; e.currentTarget.style.boxShadow = "none"; }}
                />
              </div>

              <div className="mb-7">
                <label style={{ display: "block", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "var(--clay)", marginBottom: "10px" }}>
                  Preferred Contact Method
                </label>
                <div className="flex gap-3">
                  {["email", "phone", "either"].map((method) => (
                    <button
                      key={method}
                      type="button"
                      onClick={() => setFormData({ ...formData, contact: method })}
                      className="px-4 py-2 rounded-full text-[0.6rem] uppercase transition-all duration-300"
                      style={{
                        letterSpacing: "0.15em",
                        fontWeight: 500,
                        color: formData.contact === method ? "white" : "var(--clay)",
                        background: formData.contact === method ? "var(--teal)" : "rgba(255,255,255,0.5)",
                        border: `1px solid ${formData.contact === method ? "var(--teal)" : "rgba(200,192,182,0.35)"}`,
                      }}
                    >
                      {method}
                    </button>
                  ))}
                </div>
              </div>

              <button type="submit" className="magnetic-btn w-full text-center">
                <span>Send Enquiry</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
