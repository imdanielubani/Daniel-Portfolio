import Link from "next/link";
import { ArrowDownToLine, ArrowUpRight } from "lucide-react";
import { contactDetails, socialChannels } from "@/data/contact";

const contactLinks = [
  { label: "Email", href: `mailto:${contactDetails.email}` },
  ...socialChannels.map(({ label, href }) => ({ label, href })),
];

export function ContactSection() {
  return (
    <footer className="contact" id="contact">
      <div className="page-shell contact__inner">
        <p className="eyebrow">Start a conversation</p>
        <h2>Have a difficult problem?<br /><span>Let&apos;s build the system.</span></h2>
        <a className="contact__email" href={`mailto:${contactDetails.email}`}>
          {contactDetails.email} <ArrowUpRight aria-hidden="true" />
        </a>
        <div className="contact__bottom">
          <div className="contact__links">
            {contactLinks.map((link) => (
              <Link key={link.label} href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel={link.href.startsWith("http") ? "noreferrer" : undefined}>
                {link.label} <ArrowUpRight aria-hidden="true" />
              </Link>
            ))}
            <a href={contactDetails.resume.href} download={contactDetails.resume.filename}>
              {contactDetails.resume.label} <ArrowDownToLine aria-hidden="true" />
            </a>
          </div>
          <p className="mono">Daniel Ubani / Abuja, Nigeria / 2026</p>
        </div>
      </div>
    </footer>
  );
}
