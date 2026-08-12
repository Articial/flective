import type { Metadata } from "next";
import { notFound } from "next/navigation";
import "../globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { isLocale, type Locale } from "@/components/localized-site";

export function generateStaticParams() { return [{ locale: "id" }, { locale: "en" }]; }

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return locale === "id" ? { title: "Flective — Partner Pertumbuhan Digital", description: "Membantu bisnis menemukan hambatan growth dan memperbaiki hal yang paling penting lebih dulu." } : { title: "Flective — Digital Growth Partner", description: "Helping growing businesses find what is holding growth back—and fix what matters first." };
}

export default async function LocaleLayout({ children, params }: Readonly<{ children: React.ReactNode; params: Promise<{ locale: string }> }>) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <><Header locale={locale as Locale} /><main id="main-content">{children}</main><Footer locale={locale as Locale} /></>;
}
