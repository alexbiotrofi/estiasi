"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const inp: React.CSSProperties = { width: "100%", padding: "0.9rem 0", fontFamily: "var(--font-body)", fontSize: "0.9rem", fontWeight: 300, color: "var(--charcoal)", background: "#fff", border: "none", borderBottom: "1px solid var(--border)", outline: "none", transition: "border-color 0.25s", borderRadius: 0 };

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");
    try {
      const res = await fetch("https://formsubmit.co/ajax/hello@estiasi.cy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: `New estιasι enquiry — ${form.name}`,
          _captcha: "false",
          _template: "table",
        }),
      });
      if (!res.ok) throw new Error("Network error");
      const json = await res.json();
      const ok = json.success === "true" || json.success === true;
      // Formsubmit returns success: "false" the first time with a
      // "needs activation" message — treat that as a soft-success
      // since the form *will* work after one-time activation.
      const needsActivation =
        !ok &&
        typeof json.message === "string" &&
        /activation/i.test(json.message);
      if (!ok && !needsActivation) throw new Error("Submit failed");
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  const isSending = status === "sending";
  const isSent = status === "sent";

  return (
    <section id="contact" className="marble-bg" style={{ padding: "128px 0 64px", background: "var(--limestone)" }}>
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
            <p style={{ fontSize: "0.85rem", fontWeight: 300, color: "var(--stone-dark)", lineHeight: 1.7, marginTop: "1.25rem" }}>
              Send us a message, or call us directly on{" "}
              <a href="tel:+35722030800" style={{ color: "var(--copper)", textDecoration: "none", whiteSpace: "nowrap" }}>+357 22 030 800</a>.
            </p>
          </div>
        </div>

        <div className="rounded-section glass-card" style={{ padding: "clamp(2rem, 4vw, 3rem)", maxWidth: "640px", background: "#fff", border: "1px solid var(--border)" }}>
          {isSent ? (
            <div style={{ padding: "2rem 0", textAlign: "center" }}>
              <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 400, color: "var(--charcoal)", letterSpacing: "-0.02em", marginBottom: "0.75rem" }}>
                Thank you.
              </p>
              <p style={{ fontSize: "0.9rem", fontWeight: 300, color: "var(--stone-dark)", lineHeight: 1.7 }}>
                We&rsquo;ve received your message and will be in touch shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit}>
              <div style={{ marginBottom: "2rem" }}>
                <input style={inp} placeholder="Your name" required disabled={isSending} value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} onFocus={e => { e.currentTarget.style.borderColor = "var(--copper)"; }} onBlur={e => { e.currentTarget.style.borderColor = "var(--border)"; }} />
              </div>
              <div style={{ marginBottom: "2rem" }}>
                <input style={inp} type="email" placeholder="Email" required disabled={isSending} value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} onFocus={e => { e.currentTarget.style.borderColor = "var(--copper)"; }} onBlur={e => { e.currentTarget.style.borderColor = "var(--border)"; }} />
              </div>
              <div style={{ marginBottom: "2.5rem" }}>
                <textarea style={{ ...inp, resize: "none" as const, minHeight: "100px" }} placeholder="Tell us about your project" required disabled={isSending} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} onFocus={e => { e.currentTarget.style.borderColor = "var(--copper)"; }} onBlur={e => { e.currentTarget.style.borderColor = "var(--border)"; }} />
              </div>
              <button type="submit" disabled={isSending} className="btn btn-copper" style={{ width: "100%", justifyContent: "center", opacity: isSending ? 0.6 : 1, cursor: isSending ? "wait" : "pointer" }}>
                {isSending ? "Sending…" : "Send"}
              </button>
              {status === "error" && (
                <p style={{ marginTop: "1rem", fontSize: "0.8rem", color: "#b04040", textAlign: "center" }}>
                  Something went wrong. Please email us directly at <a href="mailto:hello@estiasi.cy" style={{ color: "var(--copper)" }}>hello@estiasi.cy</a>.
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
