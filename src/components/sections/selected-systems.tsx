"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { projects } from "@/data/projects";
import type { ProjectSlug } from "@/types/content";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const projectCovers: Record<ProjectSlug, string> = {
  "retiro-del-rocio": "/images/projects/project-damas.avif",
  cviqli: "/images/projects/project-najm.avif",
  pavocard: "/images/projects/project-kavi.avif",
  cardcentrals: "/images/projects/project-postwing.avif",
  "nexryl-estate-os": "/images/projects/project-damas.avif",
};

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
      gsap.utils.toArray<HTMLElement>(".selected-system").forEach((card) => {
        gsap.fromTo(card, { opacity: 0.25, y: 72 }, {
          opacity: 1,
          y: 0,
          ease: "none",
          scrollTrigger: { trigger: card, start: "top 92%", end: "top 54%", scrub: 0.55 },
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

        <div className="work__projects">
          {projects.map((project) => (
            <Link
              href={`/work/${project.slug}`}
              className={`selected-system selected-system--${project.accent}`}
              key={project.slug}
            >
              <div className="selected-system__media">
                <Image
                  src={projectCovers[project.slug]}
                  alt=""
                  fill
                  sizes="(max-width: 820px) 100vw, (max-width: 1100px) 72vw, 44vw"
                />
                <span className="selected-system__index mono">{project.index}</span>
              </div>

              <div className="selected-system__content">
                <div className="selected-system__meta mono">
                  <span>{project.status ?? `${project.year} / Selected system`}</span>
                  <span>{project.industry}</span>
                </div>

                <div className="selected-system__story">
                  <p className="mono">{project.descriptor}</p>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                </div>

                <div className="selected-system__footer">
                  <div className="selected-system__tech mono">
                    {project.technologies.slice(0, 4).map((tech) => <span key={tech}>{tech}</span>)}
                  </div>
                  <span className="selected-system__open" aria-hidden="true">
                    <ArrowUpRight />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
