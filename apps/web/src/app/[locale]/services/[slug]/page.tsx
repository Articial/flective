import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { isLocale, type Locale } from "@/components/localized-site";
import { ServiceDetailContent } from "@/components/localized-pages";
import { services } from "@/content/services";

export function generateStaticParams() { return ["id", "en"].flatMap(locale => services.map(service => ({ locale, slug: service.slug }))); }
export async function generateMetadata({params}:{params:Promise<{locale:string;slug:string}>}):Promise<Metadata>{const {locale,slug}=await params;const service=services.find(s=>s.slug===slug);return {title:service?`${service.name} — Flective`:"Service",description:service?.description,alternates:{canonical:`/${locale}/services/${slug}`,languages:{en:`/en/services/${slug}`,id:`/id/services/${slug}`}}};}
export default async function Page({params}:{params:Promise<{locale:string;slug:string}>}) { const {locale,slug}=await params; if(!isLocale(locale)||!services.some(s=>s.slug===slug)) notFound(); const l=locale as Locale; return <><Header locale={l}/><main id="main-content"><ServiceDetailContent locale={l} slug={slug as "intelligence"|"growth"|"build"}/></main><Footer locale={l}/></>; }
