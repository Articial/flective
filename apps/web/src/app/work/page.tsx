import type { Metadata } from "next";
import Link from "next/link";
import { caseStudies } from "@/content/work";

export const metadata: Metadata = { title: "Work", description: "A structured archive of Flective case studies." };
export default function WorkPage() { return <><section className="page-hero"><div className="shell"><p className="eyebrow">Selected work</p><h1>Good work shows the thinking behind the outcome.</h1><p>Our case studies are built to hold context, decisions, execution, and verified impact. Current entries are publication-ready frameworks awaiting approved client material.</p></div></section><section className="section"><div className="shell work-list">{caseStudies.map((study) => <Link href={`/work/${study.slug}`} className={`work-card ${study.palette}`} key={study.slug}><div className="work-card-meta"><span>{study.client}</span><span>{study.discipline}</span><span>{study.year}</span></div><h2>{study.project}</h2><p>{study.summary}</p><span className="arrow-link">Open case study <span>↗</span></span></Link>)}</div></section></> }
