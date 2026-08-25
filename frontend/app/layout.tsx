import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";

export const metadata: Metadata = {
  title: "David Moenga | Software Engineer & Data Analyst",
  description: "Portfolio of David Moenga, a software engineer and data analyst building thoughtful digital products.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
