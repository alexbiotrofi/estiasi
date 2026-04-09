"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const inp: React.CSSProperties = { width: "100%", padding: "0.9rem 0", fontFamily: "var(--font-body)", fontSize: "0.9rem", fontWeight: 300, color: "var(--charcoal)", background: "#fff", border: "none", borderBottom: "1px solid var(--border)", outline: "none", transition: "border-color 0.25s", borderRadius: 0 };

  return (
    <section id="contact" style={{ padding: "128px 0 64px", background: "var(--limestone)" }}>
      <div className="wrap">
        <div className="flex justify-between items-start gap-8 flex-col md:flex-row" style={{ marginBottom: "4rem" }}>
          <div>
            <span className="label">Contact</span>
            <span className="sect-num">[ 07 / 07 ]</span>
          </div>
          <div style={{ maxWidth: "550px" }}>
            <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, color: "var(--charcoal)", lineHeight: 1.2, letterSpacing: "-0.02em" }}>
              Start the conversation.
            </p>
          </div>
        </div>

        <div className="rounded-section glass-card" style={{ padding: "clamp(2rem, 4vw, 3rem)", maxWidth: "640px", background: "#fff", border: "1px solid var(--border)" }}>
          <form onSubmit={e => { e.preventDefault(); alert("Thank you. We will be in touch."); }}>
            <div style={{ marginBottom: "2rem" }}>
              <input style={inp} placeholder="Your name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} onFocus={e => { e.currentTarget.style.borderColor = "var(--copper)"; }} onBlur={e => { e.currentTarget.style.borderColor = "var(--border)"; }} />
            </div>
            <div style={{ marginBottom: "2rem" }}>
              <input style={inp} type="email" placeholder="Email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} onFocus={e => { e.currentTarget.style.borderColor = "var(--copper)"; }} onBlur={e => { e.currentTarget.style.borderColor = "var(--border)"; }} />
            </div>
            <div style={{ marginBottom: "2.5rem" }}>
              <textarea style={{ ...inp, resize: "none" as const, minHeight: "100px" }} placeholder="Tell us about your project" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} onFocus={e => { e.currentTarget.style.borderColor = "var(--copper)"; }} onBlur={e => { e.currentTarget.style.borderColor = "var(--border)"; }} />
            </div>
            <button type="submit" className="btn btn-copper" style={{ width: "100%", justifyContent: "center" }}>Send</button>
          </form>
        </div>
      </div>
    </section>
  );
}
