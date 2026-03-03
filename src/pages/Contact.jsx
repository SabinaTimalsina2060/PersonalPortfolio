import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

// ─── Replace SERVICE_ID and TEMPLATE_ID from your EmailJS dashboard ───────────
const EMAILJS_SERVICE_ID  = "service_55d785a";   // e.g. "service_abc123"
const EMAILJS_TEMPLATE_ID = "template_n8pl3ha";  // e.g. "template_xyz789"
const EMAILJS_PUBLIC_KEY  = "tZ1nL-2i9pw0iYTXT"; // ✅ your key
// ──────────────────────────────────────────────────────────────────────────────

const contactInfo = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="22" height="22">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    label: "Email",
    value: "sabinatimalsina2060@gmail.com",
    href: "mailto:sabinatimalsina2060@gmail.com",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
    label: "LinkedIn",
    value: "linkedin.com/in/sabinatimalsina",
    href: "https://linkedin.com",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/>
      </svg>
    ),
    label: "GitHub",
    value: "github.com/AnupCh37",
    href: "https://github.com/AnupCh37",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="22" height="22">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    label: "Location",
    value: "Kathmandu, Nepal",
    href: null,
  },
];

const INITIAL = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm]     = useState(INITIAL);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email.";
    if (!form.subject.trim()) e.subject = "Subject is required.";
    if (!form.message.trim()) e.message = "Message is required.";
    else if (form.message.trim().length < 20) e.message = "Message must be at least 20 characters.";
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
    if (status === "error") setStatus("idle");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setStatus("sending");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:  form.name,
          from_email: form.email,
          subject:    form.subject,
          message:    form.message,
          to_email:   "sabinatimalsina2060@gmail.com",
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      setForm(INITIAL);
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-blob cb-1" />
      <div className="contact-blob cb-2" />
      <div className="contact-blob cb-3" />

      {/* Header */}
      <header className="contact-header">
        <div className="contact-eyebrow">
          <span className="eyebrow-dot" />
          Get In Touch
        </div>
        <h1 className="contact-title">
          Let&apos;s <span className="contact-highlight">Collaborate</span>
        </h1>
        <p className="contact-subtitle">
          Have a project, opportunity, or just want to say hello?
          I&apos;d love to hear from you — drop a message below!
        </p>
      </header>

      {/* Body */}
      <div className="contact-body">

        {/* LEFT — info */}
        <aside className="contact-info">
          <div className="contact-info-inner">
            <h3 className="contact-info-heading">Contact Details</h3>
            <div className="contact-cards">
              {contactInfo.map((c) => (
                <div key={c.label} className="contact-card">
                  <div className="contact-card-icon">{c.icon}</div>
                  <div className="contact-card-text">
                    <span className="contact-card-label">{c.label}</span>
                    {c.href ? (
                      <a href={c.href} className="contact-card-value contact-card-link"
                        target="_blank" rel="noreferrer">
                        {c.value}
                      </a>
                    ) : (
                      <span className="contact-card-value">{c.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="contact-availability">
              <span className="avail-dot" />
              <span>Open to internships &amp; collaborations</span>
            </div>

            <blockquote className="contact-quote">
              &ldquo;Engineering is not only about making things work — it&apos;s about
              making them work beautifully.&rdquo;
            </blockquote>
          </div>
        </aside>

        {/* RIGHT — form */}
        <div className="contact-form-wrap">
          {status === "success" ? (
            <div className="contact-success">
              <div className="success-icon">✅</div>
              <h3>Message Sent!</h3>
              <p>
                Thanks for reaching out! Your message has been delivered to
                Sabina&apos;s inbox. Expect a reply within 24 hours.
              </p>
              <button className="success-reset-btn" onClick={() => setStatus("idle")}>
                Send Another
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit} noValidate>

              {status === "error" && (
                <div className="form-send-error">
                  ⚠️ Failed to send. Please check your connection and try again.
                </div>
              )}

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="cf-name">Full Name</label>
                  <input
                    id="cf-name" name="name" type="text"
                    placeholder="Your full name"
                    className={"form-input" + (errors.name ? " form-input-error" : "")}
                    value={form.name}
                    onChange={handleChange}
                  />
                  {errors.name && <span className="form-error">{errors.name}</span>}
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="cf-email">Email Address</label>
                  <input
                    id="cf-email" name="email" type="email"
                    placeholder="you@example.com"
                    className={"form-input" + (errors.email ? " form-input-error" : "")}
                    value={form.email}
                    onChange={handleChange}
                  />
                  {errors.email && <span className="form-error">{errors.email}</span>}
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="cf-subject">Subject</label>
                <input
                  id="cf-subject" name="subject" type="text"
                  placeholder="Project Collaboration / Internship / General Inquiry"
                  className={"form-input" + (errors.subject ? " form-input-error" : "")}
                  value={form.subject}
                  onChange={handleChange}
                />
                {errors.subject && <span className="form-error">{errors.subject}</span>}
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="cf-message">
                  Message
                  <span className="form-char-count">{form.message.length} / 500</span>
                </label>
                <textarea
                  id="cf-message" name="message"
                  placeholder="Tell me about your project, idea or opportunity..."
                  rows={5}
                  maxLength={500}
                  className={"form-textarea" + (errors.message ? " form-input-error" : "")}
                  value={form.message}
                  onChange={handleChange}
                />
                {errors.message && <span className="form-error">{errors.message}</span>}
              </div>

              <button
                type="submit"
                className={"form-submit" + (status === "sending" ? " form-submit-sending" : "")}
                disabled={status === "sending"}
              >
                {status === "sending" ? (
                  <>
                    <span className="submit-spinner" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="16" height="16">
                      <line x1="22" y1="2" x2="11" y2="13"/>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                    </svg>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}