"use client";

import { usePathname } from "next/navigation";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  if (pathname?.startsWith("/id") || pathname?.startsWith("/en")) return <>{children}</>;
  return <><Header /><main id="main-content">{children}</main><Footer /></>;
}
