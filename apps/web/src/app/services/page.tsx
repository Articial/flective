import type { Metadata } from "next";
import { ArrowLink } from "@/components/arrow-link";
import { services } from "@/content/services";

export const metadata: Metadata = { title: "Services", description: "Intelligence, Growth, and Build—connected capabilities for better digital decisions." };

export default function ServicesPage() {
  return <><section className="page-hero"><div className="shell"><p className="eyebrow">Services</p><h1>From insight to execution. Without losing the thread.</h1><p>Flective brings intelligence, growth, and build together around the business problem—not around a predefined deliverable.</p></div></section><section className="section"><div className="shell service-list">{services.map((service, index) => <article className="service-row" key={service.slug}><span className="num">0{index + 1}</span><h2>{service.name}</h2><p>{service.description}</p><ArrowLink href={`/services/${service.slug}`}>Explore</ArrowLink></article>)}</div></section><section className="section philosophy"><div className="shell"><p className="eyebrow">How they connect</p><h2 style={{maxWidth: "1050px"}}>Intelligence finds it. Growth focuses it. Build makes it real.</h2></div></section></>;
}
