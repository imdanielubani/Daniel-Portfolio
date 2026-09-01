import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PortraitMotion } from "@/components/about/portrait-motion";

const details = [
  ["Based", "Abuja, Nigeria"],
  ["Focus", "Full Stack Software Engineering"],
  ["Work", "Onsite / Remote / Hybrid"],
  ["Interests", "AI / Fintech / SaaS / Mobile / Infrastructure / Real-Time Systems"],
];

type AboutSectionProps = {
  showPortrait?: boolean;
};

export function AboutSection({ showPortrait = false }: AboutSectionProps) {
  return (
    <section className="about section" id="about" aria-labelledby="about-title">
      <div className="page-shell about__layout">
        <div className="about__identity">
          <p className="eyebrow">Across the product lifecycle</p>
          {showPortrait && <PortraitMotion variant="home" />}
          <h2 id="about-title">Engineer.<br />Designer.<br /><span>Builder.</span><br />Problem solver.</h2>
        </div>
        <div className="about__content">
          <p className="about__lead">I work from architecture and data models through APIs, interfaces, mobile experiences, integrations, deployment, and the operational reality after launch.</p>
          <dl>
            {details.map(([term, description]) => (
              <div key={term}>
                <dt className="mono">{term}</dt>
                <dd>{description}</dd>
              </div>
            ))}
          </dl>
          <Link className="text-link" href="/about">More about Daniel <ArrowUpRight aria-hidden="true" /></Link>
        </div>
      </div>
    </section>
  );
}
