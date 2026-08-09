import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { caseStudies, getCaseStudy } from "@/content/work";

export function generateStaticParams() { return caseStudies.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const study = getCaseStudy((await params).slug); return { title: study?.project ?? "Case Study", description: study?.summary }; }

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) { const study = getCaseStudy((await params).slug); if (!study) notFound(); const sections = [["Challenge", study.challenge], ["Insight", study.insight], ["Strategy", study.strategy], ["Execution", study.execution], ["Impact", study.impact]]; return <><section className={`page-hero ${study.palette}`}><div className="shell"><p className="eyebrow">{study.client}</p><h1>{study.project}</h1><p>{study.summary}</p></div></section><div className="shell case-meta">{[["Client", study.client], ["Year", study.year], ["Discipline", study.discipline], ["Status", "Content pending"]].map(([label, value]) => <div key={label}><span>{label}</span>{value}</div>)}</div><section className="section"><div className="shell case-body"><p className="eyebrow">Case study</p><div>{sections.map(([title, copy]) => <article key={title}><h2>{title}</h2><p>{copy}</p></article>)}</div></div><div className="case-gallery"><div className={study.palette} /><div className="sand" /></div></section></> }
