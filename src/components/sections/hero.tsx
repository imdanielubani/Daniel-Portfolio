"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

const SystemCore = dynamic(() => import("@/components/three/system-core"), {
  ssr: false,
  loading: () => <div className="system-core system-core--loading" aria-hidden="true" />,
});

const titleLines = ["I BUILD", "DIGITAL SYSTEMS", "THAT SCALE."];

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="hero" id="index" aria-labelledby="hero-title">
      <div className="hero__grid" aria-hidden="true" />
      {!reduceMotion && <SystemCore />}
      <div className="hero__signal signal-line" aria-hidden="true">
        <span />
      </div>

      <div className="page-shell hero__inner">
        <motion.p
          className="hero__role eyebrow"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          Full-Stack Software Engineer
        </motion.p>

        <h1 id="hero-title" className="hero__title">
          {titleLines.map((line, index) => (
            <span className="hero__line-mask" key={line}>
              <motion.span
                initial={reduceMotion ? false : { y: "105%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.2 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <div className="hero__lower">
          <motion.p
            className="hero__summary"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
          >
            I design, architect and ship production systems across web, mobile, AI and real-time infrastructure.
          </motion.p>

          <div className="hero__actions">
            <Link className="button button--orange" href="#work">
              Explore work <ArrowDownRight aria-hidden="true" />
            </Link>
            <Link className="button button--outline" href="/about">
              About me <ArrowUpRight aria-hidden="true" />
            </Link>
          </div>

          <div className="hero__meta mono">
            <span><i className="status-dot" aria-hidden="true" /> Available for opportunities</span>
            <span>Abuja, Nigeria</span>
          </div>
        </div>
      </div>
    </section>
  );
}
