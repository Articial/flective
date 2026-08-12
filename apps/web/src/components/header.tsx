"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/audit", label: "Audit" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);

  return (
    <header className="site-header">
      <nav className="shell nav" aria-label="Primary navigation">
        <Link href="/" className="wordmark" onClick={() => setOpen(false)}>Flective</Link>
        <div className="nav-links">
          {links.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
        </div>
        <Link className="button button-small nav-cta" href="/contact">Request a Growth Audit <span>→</span></Link>
        <button className="menu-button" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>
          <span className="sr-only">{open ? "Close" : "Open"} menu</span>
          <span /><span />
        </button>
      </nav>
      <div id="mobile-menu" className={`mobile-menu ${open ? "is-open" : ""}`}>
        <div className="shell">
          {links.map((link) => <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</Link>)}
          <Link href="/contact" onClick={() => setOpen(false)}>Request a Growth Audit <span>→</span></Link>
        </div>
      </div>
    </header>
  );
}
