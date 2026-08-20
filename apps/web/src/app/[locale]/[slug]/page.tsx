import { notFound } from "next/navigation";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { isLocale, type Locale } from "@/components/localized-site";
import { AboutPageContent, AuditPageContent, ContactPageContent, ServicesPageContent, WorkPageContent } from "@/components/localized-pages";

export function generateStaticParams() {
  return ["audit", "contact", "services", "work", "about"].flatMap((slug) => [{ locale: "id", slug }, { locale: "en", slug }]);
}

export default async function LocalePage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  const pages: Record<string, React.ReactNode> = {
    audit: <AuditPageContent locale={l} />,
    contact: <ContactPageContent locale={l} />,
    services: <ServicesPageContent locale={l} />,
    work: <WorkPageContent locale={l} />,
    about: <AboutPageContent locale={l} />,
  };
  const content = pages[slug];
  if (!content) notFound();
  return <><Header locale={l} /><main id="main-content">{content}</main><Footer locale={l} /></>;
}
