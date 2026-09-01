"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const titleLines = ["Systems", "Online"];

export function Preloader() {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const renderedPath = useRef(pathname);
  const navigationGuard = useRef<number | null>(null);
  const preTriggered = useRef(false);
  const [visible, setVisible] = useState(true);
  const routeChanged = renderedPath.current !== pathname;
  const showLoader = visible || routeChanged;

  useEffect(() => {
    renderedPath.current = pathname;
    setVisible(true);

    if (navigationGuard.current) {
      window.clearTimeout(navigationGuard.current);
      navigationGuard.current = null;
    }

    const holdDuration = reduceMotion ? 80 : preTriggered.current ? 260 : 680;
    preTriggered.current = false;

    const timer = window.setTimeout(() => {
      setVisible(false);
    }, holdDuration);

    return () => window.clearTimeout(timer);
  }, [pathname, reduceMotion]);

  useEffect(() => {
    const handleInternalNavigation = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const target = event.target;
      const anchor = target instanceof Element ? target.closest("a") : null;
      if (!anchor || anchor.target === "_blank" || anchor.hasAttribute("download")) return;

      const destination = new URL(anchor.href, window.location.href);
      if (destination.origin !== window.location.origin || destination.pathname === window.location.pathname) return;

      preTriggered.current = true;
      window.queueMicrotask(() => {
        document.documentElement.classList.add("is-preloading");
        setVisible(true);

        if (navigationGuard.current) window.clearTimeout(navigationGuard.current);
        navigationGuard.current = window.setTimeout(() => {
          preTriggered.current = false;
          setVisible(false);
        }, 4000);
      });
    };

    document.addEventListener("click", handleInternalNavigation, true);
    return () => {
      document.removeEventListener("click", handleInternalNavigation, true);
      if (navigationGuard.current) window.clearTimeout(navigationGuard.current);
    };
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("is-preloading", showLoader);

    return () => {
      document.documentElement.classList.remove("is-preloading");
    };
  }, [showLoader]);

  return (
    <AnimatePresence>
      {showLoader && (
        <motion.div
          key="global-preloader"
          className="preloader"
          role="status"
          aria-live="polite"
          aria-label="Loading Daniel Ubani portfolio"
          initial={reduceMotion ? false : { y: 0 }}
          animate={{ y: 0 }}
          exit={reduceMotion ? { opacity: 0 } : { y: "-100%" }}
          transition={{ duration: reduceMotion ? 0.01 : 0.5, ease: [0.76, 0, 0.24, 1] }}
        >
          <span className="preloader__status">Loading Daniel Ubani portfolio</span>
          <div className="preloader__grid" aria-hidden="true" />

          <div className="preloader__top page-shell mono" aria-hidden="true">
            <span>Daniel Ubani</span>
            <span>Portfolio / System Core</span>
          </div>

          <div className="preloader__core page-shell" aria-hidden="true">
            <motion.div
              className="preloader__code mono"
              initial={reduceMotion ? false : { opacity: 0, x: -18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <span>DU</span>
              <span>SYS / 001</span>
            </motion.div>

            <div className="preloader__title">
              {titleLines.map((line, index) => (
                <span className="preloader__title-mask" key={line}>
                  <motion.span
                    initial={reduceMotion ? false : { y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{
                      duration: 0.62,
                      delay: index * 0.07,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </div>
          </div>

          <div className="preloader__bottom page-shell" aria-hidden="true">
            <div className="preloader__signal">
              <motion.span
                initial={reduceMotion ? false : { scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.58, ease: [0.65, 0, 0.35, 1] }}
              />
              <div className="preloader__nodes">
                {[0, 1, 2].map((node) => (
                  <motion.i
                    key={node}
                    initial={reduceMotion ? false : { opacity: 0.22 }}
                    animate={{ opacity: [0.22, 1, 0.22] }}
                    transition={{ duration: 0.5, delay: node * 0.1 }}
                  />
                ))}
              </div>
            </div>
            <div className="preloader__meta mono">
              <span>Full Stack Software Engineer</span>
              <span>Initializing digital systems</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
