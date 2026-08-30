"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const words = [
  "I DON'T JUST", "WRITE CODE.", "I ARCHITECT", "SYSTEMS.",
  "FROM DATABASE", "TO API", "TO INTERFACE", "TO PRODUCTION.",
];

export function EngineeringStatement() {
  const section = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      gsap.fromTo(
        ".statement__line",
        { opacity: 0.1 },
        {
          opacity: 1,
          stagger: 0.35,
          ease: "none",
          scrollTrigger: {
            trigger: section.current,
            start: "top 68%",
            end: "bottom 72%",
            scrub: 0.7,
          },
        },
      );
    },
    { scope: section },
  );

  return (
    <section ref={section} className="statement section page-shell" aria-label="Engineering philosophy">
      <div className="statement__aside mono">
        <span>Thinking in systems</span>
        <span>Database to production</span>
      </div>
      <p className="statement__copy">
        {words.map((word) => (
          <span className="statement__line" key={word}>{word}</span>
        ))}
      </p>
    </section>
  );
}
