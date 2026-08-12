import { notFound } from "next/navigation";
import Link from "next/link";
import { isLocale, LocalizedAudit, LocalizedContact, localizedPath, type Locale } from "@/components/localized-site";

export function generateStaticParams() {
  return ["audit", "contact", "services", "work", "about"].flatMap((slug) => [{ locale: "id", slug }, { locale: "en", slug }]);
}

function SimplePage({ locale, slug }: { locale: Locale; slug: string }) {
  const id = locale === "id";
  if (slug === "services") return <section className="page-hero"><div className="shell"><p className="eyebrow">{id ? "Layanan" : "Services"}</p><h1>{id ? "Pilih masalahnya. Kami bawa kemampuan yang tepat." : "Choose the problem. We bring the right capability."}</h1><p>{id ? "Intelligence, Growth, dan Build kami satukan di sekitar masalah bisnis yang ingin diselesaikan." : "Intelligence, Growth, and Build brought together around the business problem you need to solve."}</p></div></section>;
  if (slug === "about") return <section className="page-hero"><div className="shell"><p className="eyebrow">{id ? "Tentang Flective" : "About Flective"}</p><h1>{id ? "Kami membantu bisnis melihat masalahnya dengan lebih jelas sebelum bergerak lebih jauh." : "We help businesses see the real problem clearly before moving further."}</h1><p>{id ? "Flective adalah independent digital growth practice yang dipimpin Akbar dari Indonesia—menggabungkan strategy, technology, growth, dan intelligence." : "Flective is an independent digital growth practice led by Akbar from Indonesia—bringing strategy, technology, growth, and intelligence together."}</p><Link className="button" href={localizedPath(locale, "/contact")}>{id ? "Ceritakan konteksmu" : "Share your context"} <span>→</span></Link></div></section>;
  if (slug === "work") return <section className="page-hero"><div className="shell"><p className="eyebrow">{id ? "Proyek dan eksperimen" : "Work and experiments"}</p><h1>{id ? "Pekerjaan yang berguna akan menghasilkan bukti." : "Useful work creates the evidence."}</h1><p>{id ? "Kami tidak akan mengarang hasil. Portfolio akan bertumbuh dari project, eksperimen, dan sistem yang benar-benar dikerjakan." : "We will not invent results. The portfolio will grow from projects, experiments, and systems that are actually built."}</p><Link className="button" href={localizedPath(locale, "/contact")}>{id ? "Diskusikan project" : "Discuss a project"} <span>→</span></Link></div></section>;
  return null;
}

export default async function LocalizedPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  if (slug === "audit") return <LocalizedAudit locale={locale} />;
  if (slug === "contact") return <LocalizedContact locale={locale} />;
  if (["services", "work", "about"].includes(slug)) return <SimplePage locale={locale} slug={slug} />;
  notFound();
}
