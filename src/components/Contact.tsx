"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", business: "", location: "", service: "", message: "" });

  const inp: React.CSSProperties = { width: "100%", padding: "0.8rem 1rem", fontFamily: "var(--font-body)", fontSize: "0.88rem", fontWeight: 300, color: "var(--charcoal)", background: "#fff", border: "1px solid var(--border-s)", borderRadius: 4, outline: "none", transition: "border-color 0.25s" };
  const lbl: React.CSSProperties = { display: "block", fontSize: "0.48rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--stone)", marginBottom: "0.5rem" };
  const focus = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => { e.currentTarget.style.borderColor = "var(--copper)"; };
  const blur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => { e.currentTarget.style.borderColor = "var(--border-s)"; };

  return (
    <section id="contact" style={{ padding: "6rem 0" }}>
      <div className="wrap">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="reveal-left">
            <span className="label">Contact</span>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 400, color: "var(--charcoal)", lineHeight: 1.1 }}>Start the<br />Conversation</h2>
            <p style={{ marginTop: "1.25rem", fontSize: "0.95rem", fontWeight: 300, color: "var(--stone-dark)", lineHeight: 1.85, maxWidth: "40ch", marginBottom: "2.5rem" }}>
              30-minute discovery call. No obligation, no pitch.
            </p>
            <div style={{ borderTop: "1px solid var(--border)", paddingTop: "2rem" }}>
              {[{ l: "Email", v: "hello@estiasi.com", h: "mailto:hello@estiasi.com" }, { l: "Phone", v: "+357 00 000 000", h: "tel:+35700000000" }].map(c => (
                <div key={c.l} style={{ marginBottom: "1.5rem" }}>
                  <div style={lbl}>{c.l}</div>
                  <a href={c.h} style={{ fontSize: "0.95rem", color: "var(--charcoal)", textDecoration: "none" }}>{c.v}</a>
                </div>
              ))}
              <div><div style={lbl}>Location</div><span style={{ fontSize: "0.95rem", color: "var(--charcoal)" }}>Cyprus</span></div>
            </div>
          </div>

          <div className="reveal-right" style={{ border: "1px solid var(--border)", borderRadius: 8, padding: "2.5rem", background: "var(--limestone)" }}>
            <span style={{ fontSize: "0.45rem", fontWeight: 500, letterSpacing: "0.3em", textTransform: "uppercase" as const, color: "var(--copper)", display: "block", marginBottom: "2rem" }}>Send an Enquiry</span>
            <form onSubmit={e => { e.preventDefault(); alert("Thank you. We will be in touch."); }}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" style={{ marginBottom: "1rem" }}>
                <div><label style={lbl}>Your Name</label><input style={inp} placeholder="Full name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} onFocus={focus} onBlur={blur} /></div>
                <div><label style={lbl}>Business Name</label><input style={inp} placeholder="Venue or company" value={form.business} onChange={e => setForm({ ...form, business: e.target.value })} onFocus={focus} onBlur={blur} /></div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" style={{ marginBottom: "1rem" }}>
                <div><label style={lbl}>Location</label><input style={inp} placeholder="City / Country" value={form.location} onChange={e => setForm({ ...form, location: e.target.value })} onFocus={focus} onBlur={blur} /></div>
                <div><label style={lbl}>Service of Interest</label>
                  <select style={{ ...inp, color: form.service ? "var(--charcoal)" : "var(--stone-light)", appearance: "none" as const }} value={form.service} onChange={e => setForm({ ...form, service: e.target.value })} onFocus={focus} onBlur={blur}>
                    <option value="">Select a tier</option>
                    <option value="core">Culinary Core</option>
                    <option value="operations">Complete Operations</option>
                    <option value="full">Full Package</option>
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>
              </div>
              <div style={{ marginBottom: "1.5rem" }}><label style={lbl}>Brief Description</label><textarea style={{ ...inp, resize: "none" as const }} rows={4} placeholder="Tell us about your project..." value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} onFocus={focus} onBlur={blur} /></div>
              <button type="submit" className="btn btn-dark w-full" style={{ justifyContent: "center" }}>Send Enquiry</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
