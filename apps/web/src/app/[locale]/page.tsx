import { notFound } from "next/navigation";
import { isLocale, LocalizedHome } from "@/components/localized-site";

export default async function LocaleHome({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <LocalizedHome locale={locale} />;
}

export function generateStaticParams() { return [{ locale: "id" }, { locale: "en" }]; }
