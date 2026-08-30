"use client";

import { useState } from "react";
import { experience } from "@/data/experience";

export function ExperienceSection() {
  const [active, setActive] = useState(experience.length - 1);
  const selected = experience[active];

  return (
    <section className="experience section" id="experience" aria-labelledby="experience-title">
      <div className="page-shell">
        <header className="chapter-heading">
          <p className="eyebrow">Experience</p>
          <h2 id="experience-title">Building through<br />every layer.</h2>
        </header>

        <div className="experience__layout">
          <div className="experience__timeline" role="list" aria-label="Experience timeline">
            {experience.map((item, index) => (
              <button
                key={`${item.company}-${item.year}`}
                type="button"
                className={active === index ? "is-active" : ""}
                onClick={() => setActive(index)}
                role="listitem"
                aria-pressed={active === index}
              >
                <span className="mono">{item.year}</span>
                <strong>{item.company}</strong>
                <i aria-hidden="true" />
              </button>
            ))}
          </div>

          <article className="experience__detail" aria-live="polite">
            <div className="experience__detail-head mono">
              <span>{selected.dates}</span>
              <span>{selected.role}</span>
            </div>
            <h3>{selected.company}</h3>
            <p>{selected.contribution}</p>
            <div className="experience__tech mono">
              {selected.technologies.map((technology) => <span key={technology}>{technology}</span>)}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
