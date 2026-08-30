import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { contactDetails, socialChannels } from "@/data/contact";

const projectSignals = [
  {
    index: "01",
    title: "A product that needs structure",
    description: "From domain modelling and architecture to the interfaces people use every day.",
  },
  {
    index: "02",
    title: "A system that needs to scale",
    description: "Clear boundaries, dependable APIs, real-time flows, integrations, and production readiness.",
  },
  {
    index: "03",
    title: "A difficult build worth solving",
    description: "Web, mobile, backend, AI, or the connective tissue that makes the whole operation work.",
  },
];

const contactChannels = [
  {
    label: "Email",
    value: contactDetails.email,
    href: `mailto:${contactDetails.email}?subject=Project%20inquiry`,
  },
  ...socialChannels,
];

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Daniel Ubani about full-stack software engineering, system architecture, web, mobile, AI, and real-time product work.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Daniel Ubani",
    description: "Have a difficult product or systems problem? Let's build the system.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main id="main-content" className="contact-page">
      <section className="contact-page__hero">
        <div className="contact-page__grid" aria-hidden="true" />
        <div className="page-shell contact-page__hero-inner">
          <div className="contact-page__meta mono">
            <span>Contact / Daniel Ubani</span>
            <span className="contact-page__status">
              <i className="status-dot" aria-hidden="true" />
              Available for opportunities
            </span>
          </div>

          <div className="contact-page__headline">
            <h1>
              Let&apos;s build
              <span>the system.</span>
            </h1>
          </div>

          <div className="contact-page__hero-bottom">
            <p>Bring the difficult problem. I&apos;ll help turn it into a clear, production-ready system.</p>
            <a
              className="contact-page__primary"
              href={`mailto:${contactDetails.email}?subject=Project%20inquiry`}
            >
              <span>
                <small className="mono">Start a conversation</small>
                Email Daniel
              </span>
              <Mail aria-hidden="true" />
            </a>
            <div className="contact-page__location mono">
              <span>Based in Abuja, Nigeria</span>
              <span>Remote / Hybrid / Onsite</span>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-brief section">
        <div className="page-shell">
          <div className="contact-brief__heading">
            <span className="mono">Signal / 001</span>
            <h2>Start with the difficult part.</h2>
            <p>
              A useful first message is simple: what you are building, what is currently blocked,
              and what a successful outcome looks like.
            </p>
          </div>

          <div className="contact-brief__grid">
            {projectSignals.map((signal) => (
              <article key={signal.index}>
                <span className="mono">{signal.index}</span>
                <div>
                  <h3>{signal.title}</h3>
                  <p>{signal.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-channels">
        <div className="page-shell">
          <div className="contact-channels__header">
            <h2>Open a channel.</h2>
            <span className="mono">Response channel / Direct</span>
          </div>

          <div className="contact-channels__list">
            {contactChannels.map((channel, index) => (
              <Link
                key={channel.label}
                href={channel.href}
                target={channel.href.startsWith("http") ? "_blank" : undefined}
                rel={channel.href.startsWith("http") ? "noreferrer" : undefined}
              >
                <span className="mono">{String(index + 1).padStart(2, "0")}</span>
                <strong>{channel.label}</strong>
                <span>{channel.value}</span>
                <ArrowUpRight aria-hidden="true" />
              </Link>
            ))}
          </div>

          <footer className="contact-page__footer mono">
            <span>Daniel Ubani / Full Stack Software Engineer</span>
            <Link href="/">Return home</Link>
            <span>Abuja, Nigeria / 2026</span>
          </footer>
        </div>
      </section>
    </main>
  );
}
