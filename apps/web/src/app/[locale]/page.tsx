import { notFound } from "next/navigation";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { isLocale, LocalizedHome } from "@/components/localized-site";

export default async function LocaleHome({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <><Header locale={locale} /><main id="main-content"><LocalizedHome locale={locale} /></main><Footer locale={locale} /></>;
}

export function generateStaticParams() { return [{ locale: "id" }, { locale: "en" }]; }
