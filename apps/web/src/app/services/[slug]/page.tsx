import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getService, services } from "@/content/services";

export function generateStaticParams() { return services.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const service = getService((await params).slug); return { title: service?.name ?? "Service", description: service?.description }; }

export default async function ServiceDetail({ params }: { params: Promise<{ slug: string }> }) {
  const service = getService((await params).slug); if (!service) notFound();
  return <><section className="page-hero"><div className="shell"><p className="eyebrow">{service.eyebrow}</p><h1>{service.statement}</h1><p>{service.description}</p></div></section><section className="section"><div className="shell detail-grid"><p className="eyebrow">The business situation</p><div><p>{service.question}</p></div></div></section><section className="section section-line"><div className="shell detail-grid"><p className="eyebrow">What we can execute</p><div><ul className="capability-list">{service.capabilities.map((capability) => <li key={capability}>{capability}</li>)}</ul></div></div></section><section className="section system-section"><div className="shell"><p className="eyebrow">Our approach</p><h2 className="section-heading">A disciplined way to move from question to action.</h2><div className="service-process">{service.approach.map((step, index) => <div key={step}><span>0{index + 1}</span><h3>{step}</h3></div>)}</div></div></section><section className="section"><div className="shell detail-grid"><p className="eyebrow">Part of the system</p><div><p>{service.connection}</p><Link className="button" style={{marginTop: "40px"}} href="/contact">Discuss a project <span>→</span></Link></div></div></section></>;
}
