"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("sent");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <section className="shell page-hero">
        <p className="eyebrow">Contact</p>
        <h1>Let&apos;s work together.</h1>
        <p className="lead">
          Have a project in mind or just want to chat? Feel free to reach out.
        </p>
      </section>

      <section className="shell section">
        <div className="contact-grid">
          <div>
            <h2>Get in touch</h2>
            <p style={{ color: "var(--muted)" }}>
              I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <div className="contact-info">
              <p>
                <strong>Email:</strong> david.moenga@example.com
              </p>
              <p>
                <strong>Location:</strong> Nairobi, Kenya
              </p>
              <p>
                <strong>Availability:</strong> Open to opportunities
              </p>
            </div>
          </div>

          <div className="card">
            <h3>Send a message</h3>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>
              <button
                type="submit"
                className="button"
                disabled={status === "sending"}
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
              {status === "sent" && (
                <p className="form-success">Message sent successfully!</p>
              )}
              {status === "error" && (
                <p className="form-error">Failed to send message. Please try again.</p>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
