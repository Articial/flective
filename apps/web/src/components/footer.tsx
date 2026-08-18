"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/components/localized-site";
import { localizedPath } from "@/components/localized-site";

export function Footer({ locale }: { locale?: Locale }) {
  const pathname = usePathname();
  const currentLocale = locale ?? (pathname?.startsWith("/id") ? "id" : pathname?.startsWith("/en") ? "en" : undefined);
  const id = currentLocale === "id";
  const path = (value: string) => currentLocale ? localizedPath(currentLocale, value) : value;
  return <footer className="site-footer"><div className="shell footer-top"><p className="eyebrow">Flective</p><h2>{id ? <>Lihat lebih jelas.<br />Melangkah lebih tepat.</> : <>See clearly.<br />Move decisively.</>}</h2><Link className="button button-light" href={path("/audit")}>{id ? "Mulai dengan Audit" : "Get a Growth Audit"} <span>→</span></Link></div><div className="shell footer-bottom"><p>{id ? "Partner pertumbuhan digital" : "Digital Growth Partner"}</p><div><Link href={path("/audit")}>Audit</Link><Link href={path("/services")}>{id ? "Layanan" : "Services"}</Link><Link href={path("/work")}>{id ? "Proyek" : "Work"}</Link><Link href={path("/about")}>{id ? "Tentang" : "About"}</Link><Link href={path("/contact")}>Contact</Link></div><p>© {new Date().getFullYear()} Flective</p></div></footer>;
}
