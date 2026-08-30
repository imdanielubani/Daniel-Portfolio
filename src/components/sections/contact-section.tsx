import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const contactLinks = [
  { label: "Email", href: "mailto:imdanielubani@gmail.com" },
  { label: "GitHub", href: "https://github.com/imdanielubani" },
  { label: "Resume", href: "/resume" },
];

export function ContactSection() {
  return (
    <footer className="contact" id="contact">
      <div className="page-shell contact__inner">
        <p className="eyebrow">Start a conversation</p>
        <h2>Have a difficult problem?<br /><span>Let&apos;s build the system.</span></h2>
        <a className="contact__email" href="mailto:imdanielubani@gmail.com">
          imdanielubani@gmail.com <ArrowUpRight aria-hidden="true" />
        </a>
        <div className="contact__bottom">
          <div className="contact__links">
            {contactLinks.map((link) => (
              <Link key={link.label} href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel={link.href.startsWith("http") ? "noreferrer" : undefined}>
                {link.label} <ArrowUpRight aria-hidden="true" />
              </Link>
            ))}
            <span className="contact__pending">LinkedIn / URL pending</span>
          </div>
          <p className="mono">Daniel Ubani / Abuja, Nigeria / 2026</p>
        </div>
      </div>
    </footer>
  );
}
