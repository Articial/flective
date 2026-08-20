import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { isLocale, type Locale } from "@/components/localized-site";
import { WorkDetailContent } from "@/components/localized-pages";
import { caseStudies } from "@/content/work";

export function generateStaticParams() { return ["id", "en"].flatMap(locale => caseStudies.map(study => ({ locale, slug: study.slug }))); }
export async function generateMetadata({params}:{params:Promise<{locale:string;slug:string}>}):Promise<Metadata>{const {locale,slug}=await params;const study=caseStudies.find(s=>s.slug===slug);return {title:study?`${study.project} — Flective`:"Work",description:study?.summary,alternates:{canonical:`/${locale}/work/${slug}`,languages:{en:`/en/work/${slug}`,id:`/id/work/${slug}`}}};}
export default async function Page({params}:{params:Promise<{locale:string;slug:string}>}) { const {locale,slug}=await params; if(!isLocale(locale)||!caseStudies.some(s=>s.slug===slug)) notFound(); const l=locale as Locale; return <><Header locale={l}/><main id="main-content"><WorkDetailContent locale={l} slug={slug}/></main><Footer locale={l}/></>; }
