"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { label: "Home", href: "/#home" },
  { label: "Work", href: "/#work" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/#experience" },
  { label: "Contact", href: "/contact" },
];

export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(false);
  const needsSurface = pathname === "/resume" || pathname.startsWith("/work/");

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className={`site-nav ${compact ? "site-nav--compact" : ""} ${needsSurface ? "site-nav--surface" : ""} ${open ? "site-nav--menu-open" : ""}`}>
        <Link href="/" className="site-nav__brand" aria-label="Daniel Ubani, home">
          <span>Daniel</span>
          <span>Ubani</span>
        </Link>

        <nav className="site-nav__links" aria-label="Primary navigation">
          {links.map((link) => (
            <Link key={link.label} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="site-nav__availability">
          <span className="status-dot" aria-hidden="true" />
          Available
        </div>

        <button
          type="button"
          className="site-nav__toggle"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Close navigation" : "Open navigation"}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </header>

      <div id="mobile-navigation" className={`mobile-menu ${open ? "mobile-menu--open" : ""}`}>
        <nav aria-label="Mobile navigation">
          {links.map((link, index) => (
            <Link key={link.label} href={link.href} onClick={() => setOpen(false)}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="mobile-menu__footer">
          <span>Full Stack Software Engineer</span>
          <span>Abuja, Nigeria</span>
        </div>
      </div>
    </>
  );
}
