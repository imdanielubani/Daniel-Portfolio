"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import { projects } from "@/data/projects";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function SystemVisual({ index }: { index: number }) {
  return (
    <div className={`system-visual system-visual--${index + 1}`} aria-hidden="true">
      <span className="system-visual__core" />
      {[0, 1, 2, 3, 4, 5].map((node) => <i key={node} style={{ "--node": node } as React.CSSProperties} />)}
      <b />
    </div>
  );
}

export function SelectedSystems() {
  const section = useRef<HTMLElement>(null);
  const title = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || window.innerWidth < 980) return;
      ScrollTrigger.create({
        trigger: section.current,
        start: "top top+=96",
        end: "bottom bottom-=120",
        pin: title.current,
        pinSpacing: false,
      });
      gsap.utils.toArray<HTMLElement>(".system-card").forEach((card) => {
        gsap.fromTo(card, { opacity: 0.25, scale: 0.88 }, {
          opacity: 1,
          scale: 1,
          ease: "none",
          scrollTrigger: { trigger: card, start: "top 88%", end: "top 48%", scrub: 0.6 },
        });
      });
    },
    { scope: section },
  );

  return (
    <section ref={section} className="work section" id="work" aria-labelledby="work-title">
      <div className="page-shell work__layout">
        <div ref={title} className="work__heading">
          <p className="eyebrow">Production work</p>
          <h2 id="work-title">Selected<br /><span className="inline-signal" aria-hidden="true"><i /></span> Systems.</h2>
          <p>Complete products, operational platforms, and infrastructure built across industries.</p>
        </div>

        <div className="work__grid">
          {projects.map((project, index) => (
            <Link
              href={`/work/${project.slug}`}
              className={`system-card system-card--${index + 1} system-card--${project.accent}`}
              key={project.slug}
            >
              <div className="system-card__top mono">
                <span>{project.index} / {project.status ? "Personal project" : "Selected system"}</span>
                <ArrowUpRight aria-hidden="true" />
              </div>
              <SystemVisual index={index} />
              <div className="system-card__body">
                <p className="mono">{project.industry}</p>
                <h3>{project.title}</h3>
                <p>{project.descriptor}</p>
              </div>
              <div className="system-card__tech mono">
                {project.technologies.slice(0, 3).map((tech) => <span key={tech}>{tech}</span>)}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
