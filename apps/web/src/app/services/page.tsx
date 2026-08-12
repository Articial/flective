import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLink } from "@/components/arrow-link";
import { services } from "@/content/services";

export const metadata: Metadata = { title: "Services", description: "Practical growth, intelligence, and build support for businesses that need a clearer next move." };

export default function ServicesPage() {
  return <><section className="page-hero"><div className="shell"><p className="eyebrow">Services / Solve the bottleneck</p><h1>Choose the problem. We bring the right capability.</h1><p>Flective combines intelligence, growth, and build around the commercial problem—not around a predefined deliverable.</p><div className="hero-actions page-actions"><Link className="button" href="/audit">Start with a Growth Audit <span>→</span></Link></div></div></section><section className="section"><div className="shell service-list">{services.map((service, index) => <article className="service-row" key={service.slug}><span className="num">0{index + 1}</span><h2>{service.name}</h2><p>{service.description}</p><ArrowLink href={`/services/${service.slug}`}>See how we help</ArrowLink></article>)}</div></section><section className="section philosophy"><div className="shell"><p className="eyebrow">The connected model</p><h2 style={{maxWidth: "1050px"}}>Find the leak. Choose the move. Build what makes it better.</h2></div></section></>;
}
