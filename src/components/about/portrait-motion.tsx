"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

type PortraitMotionProps = {
  variant: "hero" | "home";
  priority?: boolean;
};

export function PortraitMotion({ variant, priority = false }: PortraitMotionProps) {
  const frameRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: frameRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-3%", "3%"]);
  const imageScale = useTransform(scrollYProgress, [0, 0.55, 1], [1.08, 1.03, 1.06]);

  return (
    <motion.figure
      ref={frameRef}
      className={`portrait portrait--${variant}`}
      initial={reduceMotion ? false : { clipPath: "inset(0 0 100% 0)", opacity: 0 }}
      animate={{ clipPath: "inset(0 0 0% 0)", opacity: 1 }}
      transition={{ duration: 1.15, delay: variant === "hero" ? 0.35 : 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="portrait__media"
        style={reduceMotion ? undefined : { y: imageY, scale: imageScale }}
      >
        <Image
          src="/images/about/imgdaniel.png"
          alt="Portrait of Daniel Ubani"
          fill
          priority={priority}
          sizes={variant === "hero" ? "(max-width: 900px) 88vw, 34vw" : "(max-width: 1100px) 72vw, 35vw"}
        />
      </motion.div>

      <figcaption className="portrait__caption mono">
        <span>Portrait / 001</span>
        <span>Abuja, NG</span>
      </figcaption>
      <span className="portrait__signal" aria-hidden="true" />
    </motion.figure>
  );
}
