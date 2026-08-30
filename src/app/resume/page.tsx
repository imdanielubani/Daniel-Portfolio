import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDownToLine, ArrowUpRight } from "lucide-react";
import { contactDetails } from "@/data/contact";
import { experience } from "@/data/experience";

export const metadata: Metadata = {
  title: "Resume",
  description: "Experience and engineering capabilities of Daniel Ubani, Full Stack Software Engineer.",
  alternates: { canonical: "/resume" },
};

export default function ResumePage() {
  return (
    <main id="main-content" className="resume-page">
      <header className="resume-hero page-shell">
        <p className="eyebrow">Professional profile</p>
        <h1>Daniel<br /><span>Ubani.</span></h1>
        <div className="resume-hero__intro">
          <p>Full Stack Software Engineer building production systems across web, mobile, AI, fintech, hospitality, logistics, and real-time infrastructure.</p>
          <div className="resume-hero__actions">
            <a className="text-link" href={contactDetails.resume.href} target="_blank" rel="noreferrer">
              {contactDetails.resume.label} <ArrowDownToLine aria-hidden="true" />
            </a>
            <a className="text-link" href={`mailto:${contactDetails.email}`}>Email Daniel <ArrowUpRight aria-hidden="true" /></a>
          </div>
        </div>
      </header>

      <section className="resume-section page-shell">
        <h2 className="mono">Experience</h2>
        <div className="resume-list">
          {experience.map((item) => (
            <article key={`${item.company}-${item.year}`}>
              <span className="mono">{item.dates}</span>
              <div><h3>{item.company}</h3><p>{item.role}</p></div>
              <p>{item.contribution}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="resume-section resume-capabilities page-shell">
        <h2 className="mono">Capabilities</h2>
        <p>System architecture / API design / Database modelling / Web applications / Mobile applications / Real-time systems / AI integrations / Payments / Deployment</p>
      </section>

      <footer className="resume-footer page-shell">
        <Link href="/">Back to portfolio</Link>
        <a className="mono" href={contactDetails.resume.href} target="_blank" rel="noreferrer">
          {contactDetails.resume.label}
        </a>
      </footer>
    </main>
  );
}
