export default function ContactPage() {
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
                <strong>Email:</strong> moengadavid90@gmail.com
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
            <form className="contact-form" action="mailto:moengadavid90@gmail.com" method="post" encType="text/plain">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input id="name" type="text" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={5} required />
              </div>
              <button type="submit" className="button">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
