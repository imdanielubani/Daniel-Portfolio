import type { Metadata } from "next";
import { PortraitMotion } from "@/components/about/portrait-motion";
import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";

export const metadata: Metadata = {
  title: "About",
  description: "Daniel Ubani is a Full Stack Software Engineer working across architecture, APIs, data, web, mobile, integrations, and deployment.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main id="main-content" className="about-page">
      <section className="about-page__hero">
        <div className="page-shell about-page__hero-inner">
          <p className="eyebrow">Daniel Ubani / Full Stack Software Engineer</p>
          <h1>I make complex systems feel <span>clear.</span></h1>
          <PortraitMotion variant="hero" priority />
          <p className="about-page__hero-summary">My work sits where product thinking, system architecture, interface craft, and production engineering meet.</p>
        </div>
      </section>
      <AboutSection />
      <section className="principles section">
        <div className="page-shell">
          <p className="eyebrow">Working principles</p>
          <div className="principles__grid">
            <article><span className="mono">01</span><h2>Understand the operation.</h2><p>Good software starts with how people, information, money, and decisions actually move.</p></article>
            <article><span className="mono">02</span><h2>Design the boundaries.</h2><p>Clear domains, contracts, and ownership keep systems adaptable as products grow.</p></article>
            <article><span className="mono">03</span><h2>Ship the whole experience.</h2><p>The architecture, interface, deployment, and post-launch operation belong to one product.</p></article>
          </div>
        </div>
      </section>
      <ContactSection />
    </main>
  );
}
