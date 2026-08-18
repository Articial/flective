import { notFound } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { isLocale, LocalizedAudit, LocalizedContact, localizedPath, type Locale } from "@/components/localized-site";

export function generateStaticParams() {
  return ["audit", "contact", "services", "work", "about"].flatMap((slug) => [{ locale: "id", slug }, { locale: "en", slug }]);
}

export default async function LocalePage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  let content: React.ReactNode;
  if (slug === "audit") content = <LocalizedAudit locale={l} />;
  else if (slug === "contact") content = <LocalizedContact locale={l} />;
  else if (slug === "services") content = <SimplePage locale={l} title={l === "id" ? "Layanan yang membantu bisnis bertumbuh." : "Services that help businesses grow."} intro={l === "id" ? "Mulai dari masalah yang sedang menghambat bisnis, lalu pilih pekerjaan yang paling berdampak." : "Start with the business problem, then choose the work that will make the biggest difference."} />;
  else if (slug === "work") content = <SimplePage locale={l} title={l === "id" ? "Pekerjaan yang dibangun untuk bergerak maju." : "Work built to move things forward."} intro={l === "id" ? "Kami hanya mempublikasikan materi yang sudah disetujui. Sementara itu, audit adalah cara paling langsung untuk melihat bagaimana kami berpikir." : "We only publish material approved for public sharing. Until then, an audit is the most direct way to see how we think."} />;
  else if (slug === "about") content = <SimplePage locale={l} title={l === "id" ? "Lebih sedikit asumsi. Lebih banyak keputusan yang tepat." : "Fewer assumptions. Better decisions."} intro={l === "id" ? "Flective adalah partner pertumbuhan digital untuk bisnis yang ingin memperbaiki hal penting, bukan hanya menambah aktivitas." : "Flective is a digital growth partner for businesses that want to fix what matters, not just add more activity."} />;
  else notFound();
  return <><Header locale={l} /><main id="main-content">{content}</main><Footer locale={l} /></>;
}

function SimplePage({ locale, title, intro }: { locale: Locale; title: string; intro: string }) {
  return <section className="page-hero"><div className="shell"><p className="eyebrow">Flective</p><h1>{title}</h1><p className="lede">{intro}</p><Link className="button" href={localizedPath(locale, "/audit")}>{locale === "id" ? "Mulai dengan Audit" : "Get a Growth Audit"} <span>→</span></Link></div></section>;
}
