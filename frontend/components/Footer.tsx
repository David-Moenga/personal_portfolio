import Link from "next/link";

export function Footer() {
  return (
    <footer className="shell footer">
      <div className="footer-content">
        <div>
          <p style={{ margin: 0, fontWeight: 700 }}>David Moenga</p>
          <p style={{ margin: "4px 0 0", color: "var(--muted)", fontSize: 14 }}>
            Software Engineer · Data Analyst · Nairobi, Kenya
          </p>
        </div>
        <div className="footer-links">
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/experience">Experience</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
      <p style={{ marginTop: 20, color: "var(--muted)", fontSize: 13 }}>
        © {new Date().getFullYear()} David Moenga. Built with intention.
      </p>
    </footer>
  );
}
