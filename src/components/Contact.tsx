"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", business: "", location: "", service: "", message: "" });

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "0.8rem 1rem",
    fontFamily: "var(--font-sans)",
    fontSize: "0.88rem",
    fontWeight: 300,
    color: "var(--charcoal)",
    background: "#fff",
    border: "1px solid var(--border-strong)",
    borderRadius: "4px",
    outline: "none",
    transition: "border-color 0.25s",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "0.5rem",
    fontWeight: 500,
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    color: "var(--stone)",
    marginBottom: "0.5rem",
  };

  return (
    <section id="contact" className="section">
      <div className="wrap">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left */}
          <div>
            <span className="label">Contact</span>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 400, color: "var(--charcoal)", lineHeight: 1.1, marginTop: "0.75rem" }}>
              Start the<br />Conversation
            </h2>
            <p style={{ marginTop: "1.25rem", fontSize: "0.95rem", fontWeight: 300, color: "var(--stone-dark)", lineHeight: 1.85, maxWidth: "40ch", marginBottom: "2.5rem" }}>
              Book a discovery call, send us an enquiry, or get in touch
              directly. No obligation.
            </p>

            <a href="#" className="btn btn-primary" style={{ marginBottom: "3rem" }}>Schedule a Discovery Call</a>

            <div style={{ borderTop: "1px solid var(--border)", paddingTop: "2rem" }}>
              <div style={{ marginBottom: "1.5rem" }}>
                <div style={labelStyle}>Email</div>
                <a href="mailto:hello@estiasi.com" style={{ fontSize: "0.95rem", color: "var(--charcoal)", textDecoration: "none" }}>hello@estiasi.com</a>
              </div>
              <div style={{ marginBottom: "1.5rem" }}>
                <div style={labelStyle}>Phone</div>
                <a href="tel:+35700000000" style={{ fontSize: "0.95rem", color: "var(--charcoal)", textDecoration: "none" }}>+357 00 000 000</a>
              </div>
              <div>
                <div style={labelStyle}>Location</div>
                <span style={{ fontSize: "0.95rem", color: "var(--charcoal)" }}>Cyprus</span>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div style={{ border: "1px solid var(--border)", borderRadius: "8px", padding: "2.5rem", background: "var(--limestone)" }}>
            <div style={{ fontSize: "0.48rem", fontWeight: 500, letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--copper)", marginBottom: "2rem" }}>
              Send an Enquiry
            </div>

            <form onSubmit={(e) => { e.preventDefault(); alert("Thank you. We will be in touch."); }}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" style={{ marginBottom: "1rem" }}>
                <div>
                  <label style={labelStyle}>Your Name</label>
                  <input style={inputStyle} placeholder="Full name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} onFocus={(e) => { e.currentTarget.style.borderColor = "var(--copper)"; }} onBlur={(e) => { e.currentTarget.style.borderColor = "var(--border-strong)"; }} />
                </div>
                <div>
                  <label style={labelStyle}>Business Name</label>
                  <input style={inputStyle} placeholder="Venue or company" value={form.business} onChange={(e) => setForm({ ...form, business: e.target.value })} onFocus={(e) => { e.currentTarget.style.borderColor = "var(--copper)"; }} onBlur={(e) => { e.currentTarget.style.borderColor = "var(--border-strong)"; }} />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" style={{ marginBottom: "1rem" }}>
                <div>
                  <label style={labelStyle}>Location</label>
                  <input style={inputStyle} placeholder="City / Country" value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} onFocus={(e) => { e.currentTarget.style.borderColor = "var(--copper)"; }} onBlur={(e) => { e.currentTarget.style.borderColor = "var(--border-strong)"; }} />
                </div>
                <div>
                  <label style={labelStyle}>Service of Interest</label>
                  <select style={{ ...inputStyle, color: form.service ? "var(--charcoal)" : "var(--stone-light)", appearance: "none" }} value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} onFocus={(e) => { e.currentTarget.style.borderColor = "var(--copper)"; }} onBlur={(e) => { e.currentTarget.style.borderColor = "var(--border-strong)"; }}>
                    <option value="">Select a service</option>
                    <option value="startup">Start-Up & Opening</option>
                    <option value="support">Restaurant Support</option>
                    <option value="review">Restaurant & Hotel Review</option>
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>
              </div>

              <div style={{ marginBottom: "1.5rem" }}>
                <label style={labelStyle}>Brief Description</label>
                <textarea style={{ ...inputStyle, resize: "none" }} rows={4} placeholder="Tell us about your project..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} onFocus={(e) => { e.currentTarget.style.borderColor = "var(--copper)"; }} onBlur={(e) => { e.currentTarget.style.borderColor = "var(--border-strong)"; }} />
              </div>

              <button type="submit" className="btn btn-primary w-full" style={{ justifyContent: "center" }}>Send Enquiry</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
