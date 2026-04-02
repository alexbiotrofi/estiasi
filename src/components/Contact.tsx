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
    // Placeholder — will be wired to backend
    alert("Thank you for your enquiry. We will be in touch shortly.");
  };

  return (
    <section
      id="contact"
      className="relative py-32 md:py-44 overflow-hidden marble-bg"
    >
      <div className="orb orb-teal" style={{ top: "10%", left: "-10%" }} />
      <div className="orb orb-copper" style={{ bottom: "5%", right: "-8%" }} />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="sect-num reveal">05 &mdash; Contact</span>
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
            Start the Conversation
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
            Book a discovery call, send us an enquiry, or get in touch directly.
            No obligation. No pressure.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Left — Contact Info & Booking */}
          <div className="lg:col-span-2 space-y-8">
            {/* Book a call card */}
            <div className="glass-strong glass-shine relative p-8 reveal-left">
              <div
                className="text-[0.55rem] uppercase tracking-[0.3em] mb-4"
                style={{ color: "var(--teal)", fontWeight: 500 }}
              >
                Primary
              </div>
              <h3
                className="font-serif text-xl mb-3"
                style={{
                  fontFamily: "var(--font-serif)",
                  fontWeight: 400,
                  color: "var(--charcoal)",
                }}
              >
                Book a Discovery Call
              </h3>
              <p
                className="mb-6"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.8rem",
                  fontWeight: 300,
                  color: "var(--clay)",
                  lineHeight: 1.7,
                }}
              >
                30-minute introductory call to understand your venue, your
                challenges, and how we can help.
              </p>
              <a
                href="#"
                className="magnetic-btn w-full text-center"
                onClick={(e) => e.preventDefault()}
              >
                <span>Schedule a Call</span>
              </a>
            </div>

            {/* Direct contact */}
            <div className="glass glass-shine relative p-8 reveal-left">
              <div
                className="text-[0.55rem] uppercase tracking-[0.3em] mb-6"
                style={{ color: "var(--teal)", fontWeight: 500 }}
              >
                Direct Contact
              </div>
              <div className="space-y-5">
                <div>
                  <div
                    className="text-[0.55rem] uppercase tracking-[0.2em] mb-1"
                    style={{ color: "var(--stone)" }}
                  >
                    Email
                  </div>
                  <a
                    href="mailto:hello@estiasi.com"
                    className="text-sm hover:text-teal transition-colors"
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontWeight: 400,
                      color: "var(--charcoal)",
                    }}
                  >
                    hello@estiasi.com
                  </a>
                </div>
                <div>
                  <div
                    className="text-[0.55rem] uppercase tracking-[0.2em] mb-1"
                    style={{ color: "var(--stone)" }}
                  >
                    Phone
                  </div>
                  <a
                    href="tel:+35700000000"
                    className="text-sm hover:text-teal transition-colors"
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontWeight: 400,
                      color: "var(--charcoal)",
                    }}
                  >
                    +357 00 000 000
                  </a>
                </div>
                <div>
                  <div
                    className="text-[0.55rem] uppercase tracking-[0.2em] mb-1"
                    style={{ color: "var(--stone)" }}
                  >
                    Location
                  </div>
                  <span
                    className="text-sm"
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontWeight: 400,
                      color: "var(--charcoal)",
                    }}
                  >
                    Cyprus
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Contact Form */}
          <div className="lg:col-span-3 reveal-right">
            <form onSubmit={handleSubmit} className="glass-strong glass-shine relative p-8 md:p-10">
              <div
                className="text-[0.55rem] uppercase tracking-[0.3em] mb-8"
                style={{ color: "var(--teal)", fontWeight: 500 }}
              >
                Send an Enquiry
              </div>

              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label
                    className="block text-[0.6rem] uppercase tracking-[0.2em] mb-2"
                    style={{ color: "var(--clay)" }}
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-300 focus:ring-1 focus:ring-teal/30"
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontWeight: 300,
                      color: "var(--charcoal)",
                      background: "rgba(255,255,255,0.5)",
                      border: "1px solid rgba(255,255,255,0.5)",
                    }}
                    placeholder="Full name"
                  />
                </div>
                <div>
                  <label
                    className="block text-[0.6rem] uppercase tracking-[0.2em] mb-2"
                    style={{ color: "var(--clay)" }}
                  >
                    Business Name
                  </label>
                  <input
                    type="text"
                    value={formData.business}
                    onChange={(e) =>
                      setFormData({ ...formData, business: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-300 focus:ring-1 focus:ring-teal/30"
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontWeight: 300,
                      color: "var(--charcoal)",
                      background: "rgba(255,255,255,0.5)",
                      border: "1px solid rgba(255,255,255,0.5)",
                    }}
                    placeholder="Venue or company"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label
                    className="block text-[0.6rem] uppercase tracking-[0.2em] mb-2"
                    style={{ color: "var(--clay)" }}
                  >
                    Location
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) =>
                      setFormData({ ...formData, location: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-300 focus:ring-1 focus:ring-teal/30"
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontWeight: 300,
                      color: "var(--charcoal)",
                      background: "rgba(255,255,255,0.5)",
                      border: "1px solid rgba(255,255,255,0.5)",
                    }}
                    placeholder="City / Country"
                  />
                </div>
                <div>
                  <label
                    className="block text-[0.6rem] uppercase tracking-[0.2em] mb-2"
                    style={{ color: "var(--clay)" }}
                  >
                    Service of Interest
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-300 focus:ring-1 focus:ring-teal/30 appearance-none"
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontWeight: 300,
                      color: formData.service ? "var(--charcoal)" : "var(--stone)",
                      background: "rgba(255,255,255,0.5)",
                      border: "1px solid rgba(255,255,255,0.5)",
                    }}
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
                <label
                  className="block text-[0.6rem] uppercase tracking-[0.2em] mb-2"
                  style={{ color: "var(--clay)" }}
                >
                  Brief Description
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-300 focus:ring-1 focus:ring-teal/30 resize-none"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 300,
                    color: "var(--charcoal)",
                    background: "rgba(255,255,255,0.5)",
                    border: "1px solid rgba(255,255,255,0.5)",
                  }}
                  placeholder="Tell us about your project..."
                />
              </div>

              <div className="mb-8">
                <label
                  className="block text-[0.6rem] uppercase tracking-[0.2em] mb-3"
                  style={{ color: "var(--clay)" }}
                >
                  Preferred Contact Method
                </label>
                <div className="flex gap-4">
                  {["email", "phone", "either"].map((method) => (
                    <button
                      key={method}
                      type="button"
                      onClick={() =>
                        setFormData({ ...formData, contact: method })
                      }
                      className="px-4 py-2 rounded-full text-[0.6rem] uppercase tracking-[0.15em] transition-all duration-300"
                      style={{
                        fontWeight: 500,
                        color:
                          formData.contact === method
                            ? "white"
                            : "var(--clay)",
                        background:
                          formData.contact === method
                            ? "var(--teal)"
                            : "rgba(255,255,255,0.4)",
                        border: `1px solid ${
                          formData.contact === method
                            ? "var(--teal)"
                            : "rgba(255,255,255,0.4)"
                        }`,
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
