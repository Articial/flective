"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { Locale } from "@/components/localized-site";
import { localizedPath } from "@/components/localized-site";

export function Header({ locale }: { locale?: Locale }) {
  const [open, setOpen] = useState(false);
  const activeLocale = locale ?? "en";
  const labels = locale === "id" ? ["Audit", "Layanan", "Proyek", "Tentang"] : ["Audit", "Services", "Work", "About"];
  const paths = ["/audit", "/services", "/work", "/about"];
  const cta = locale === "id" ? "Mulai dengan Audit" : "Get a Growth Audit";
  const home = locale ? localizedPath(activeLocale, "") : "/";
  const switchLocale = locale === "id" ? "/en" : "/id";

  useEffect(() => { const close = () => setOpen(false); window.addEventListener("resize", close); return () => window.removeEventListener("resize", close); }, []);
  return <header className="site-header"><nav className="shell nav" aria-label="Primary navigation"><Link href={home} className="wordmark" onClick={() => setOpen(false)}>Flective</Link><div className="nav-links">{paths.map((path, i) => <Link key={path} href={locale ? localizedPath(activeLocale, path) : path}>{labels[i]}</Link>)}<Link href={switchLocale}>{locale === "id" ? "EN" : "ID"}</Link></div><Link className="button button-small nav-cta" href={locale ? localizedPath(activeLocale, "/contact") : "/contact"}>{cta} <span>→</span></Link><button className="menu-button" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}><span className="sr-only">{open ? "Close" : "Open"} menu</span><span /><span /></button></nav><div id="mobile-menu" className={`mobile-menu ${open ? "is-open" : ""}`}><div className="shell">{paths.map((path, i) => <Link key={path} href={locale ? localizedPath(activeLocale, path) : path} onClick={() => setOpen(false)}>{labels[i]}</Link>)}<Link href={switchLocale} onClick={() => setOpen(false)}>{locale === "id" ? "English" : "Bahasa Indonesia"}</Link><Link href={locale ? localizedPath(activeLocale, "/contact") : "/contact"} onClick={() => setOpen(false)}>{cta} <span>→</span></Link></div></div></header>;
}
