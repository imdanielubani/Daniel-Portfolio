"use client";

import { useMemo, useState } from "react";
import { projects } from "@/data/projects";
import { technologyCategories } from "@/data/technologies";

export function TechnologyEcosystem() {
  const [selection, setSelection] = useState({ category: 0, item: 0 });
  const selected = technologyCategories[selection.category].items[selection.item];
  const linkedProjects = useMemo(
    () => projects.filter((project) => selected.projects.includes(project.slug)),
    [selected],
  );

  return (
    <section className="technology section section-rule" aria-labelledby="technology-title">
      <div className="page-shell">
        <header className="chapter-heading chapter-heading--row">
          <div>
            <p className="eyebrow">Engineering ecosystem</p>
            <h2 id="technology-title">Tools follow<br />the system.</h2>
          </div>
          <p>I select technology around constraints, reliability, team velocity, and the job the product needs to do.</p>
        </header>

        <div className="technology__accordion">
          {technologyCategories.map((group, categoryIndex) => (
            <section
              key={group.category}
              className={selection.category === categoryIndex ? "is-open" : ""}
              onMouseEnter={() => setSelection({ category: categoryIndex, item: 0 })}
            >
              <h3>{group.category}</h3>
              <div className="technology__items">
                {group.items.map((item, itemIndex) => (
                  <button
                    key={item.name}
                    type="button"
                    className={selection.category === categoryIndex && selection.item === itemIndex ? "is-active" : ""}
                    onClick={() => setSelection({ category: categoryIndex, item: itemIndex })}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="technology__readout">
          <span className="mono">Selected technology</span>
          <strong>{selected.name}</strong>
          <div>
            <span className="mono">Connected systems</span>
            <p>{linkedProjects.length ? linkedProjects.map((project) => project.title).join(" / ") : "Broader engineering toolkit"}</p>
          </div>
        </div>
      </div>

      <div className="technology__marquee" aria-hidden="true">
        <div>{[...technologyCategories, ...technologyCategories].flatMap((group, outer) => group.items.map((item) => <span key={`${outer}-${group.category}-${item.name}`}>{item.name}</span>))}</div>
      </div>
    </section>
  );
}
