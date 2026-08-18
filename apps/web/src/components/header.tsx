"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import type { Locale } from "@/components/localized-site";
import { localizedPath } from "@/components/localized-site";

export function Header({ locale }: { locale?: Locale }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const detectedLocale = pathname?.startsWith("/id") ? "id" : pathname?.startsWith("/en") ? "en" : undefined;
  const currentLocale = locale ?? detectedLocale;
  const activeLocale = currentLocale ?? "en";
  const labels = currentLocale === "id" ? ["Audit", "Layanan", "Proyek", "Tentang"] : ["Audit", "Services", "Work", "About"];
  const paths = ["/audit", "/services", "/work", "/about"];
  const cta = currentLocale === "id" ? "Mulai dengan Audit" : "Get a Growth Audit";
  const home = currentLocale ? localizedPath(activeLocale, "") : "/";
  const switchLocale = currentLocale === "id" ? "/en" : "/id";

  useEffect(() => { const close = () => setOpen(false); window.addEventListener("resize", close); return () => window.removeEventListener("resize", close); }, []);
  return <header className="site-header"><nav className="shell nav" aria-label="Primary navigation"><Link href={home} className="wordmark" onClick={() => setOpen(false)}>Flective</Link><div className="nav-links">{paths.map((path, i) => <Link key={path} href={currentLocale ? localizedPath(activeLocale, path) : path}>{labels[i]}</Link>)}<Link href={switchLocale}>{currentLocale === "id" ? "EN" : "ID"}</Link></div><Link className="button button-small nav-cta" href={currentLocale ? localizedPath(activeLocale, "/contact") : "/contact"}>{cta} <span>→</span></Link><button className="menu-button" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}><span className="sr-only">{open ? "Close" : "Open"} menu</span><span /><span /></button></nav><div id="mobile-menu" className={`mobile-menu ${open ? "is-open" : ""}`}><div className="shell">{paths.map((path, i) => <Link key={path} href={currentLocale ? localizedPath(activeLocale, path) : path} onClick={() => setOpen(false)}>{labels[i]}</Link>)}<Link href={switchLocale} onClick={() => setOpen(false)}>{locale === "id" ? "English" : "Bahasa Indonesia"}</Link><Link href={currentLocale ? localizedPath(activeLocale, "/contact") : "/contact"} onClick={() => setOpen(false)}>{cta} <span>→</span></Link></div></div></header>;
}
