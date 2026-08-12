import Link from "next/link";
import { ArrowLink } from "@/components/arrow-link";
import { services } from "@/content/services";
import { caseStudies } from "@/content/work";

const problems = [
  ["01", "Your website gets attention, but not enough enquiries."],
  ["02", "You are spending on marketing without a clear view of what works."],
  ["03", "Your team has ideas, but no agreed priority for the next 30 days."],
  ["04", "Your tools and data exist, but they do not help decisions move faster."],
];
const outcomes = ["A clearer view of where growth is leaking", "A short list of what to fix first", "A practical plan your team can actually execute"];
const process = [["01", "Share the context", "Tell us what you sell, where customers come from, and what feels stuck."], ["02", "We find the friction", "We review the customer journey, signals, and market context around the problem."], ["03", "You get the next moves", "Receive a concise priority plan—with implementation support available when useful."]];

export default function Home() {
  return <>
    <section className="hero commercial-hero"><div className="signal-field" /><div className="hero-inner"><div className="hero-label"><span>Flective / Digital Growth Partner</span><span>Indonesia / Remote</span></div><h1>Your digital growth<br />is leaking <em>somewhere.</em></h1><div className="hero-bottom"><div><p>We find where attention, intent, and conversion are getting lost—and help you fix what matters first.</p><p className="hero-proof">For growing businesses and e-commerce teams with activity, but not enough clarity.</p></div><div className="hero-actions"><Link className="button" href="/audit">Get a Growth Audit <span>→</span></Link><a className="text-link" href="#problems">See the problems we solve <span>↓</span></a></div></div></div></section>

    <section id="problems" className="section"><div className="shell section-intro"><p className="eyebrow">Does this sound familiar?</p><div><h2 className="section-heading">More activity is not always the answer.</h2><p className="section-lede">Before you add another campaign, redesign, or tool, find the friction that is quietly costing you growth.</p></div></div><div className="shell friction-list">{problems.map(([number, text]) => <div key={number}><span>{number}</span><p>{text}</p></div>)}</div></section>

    <section className="section offer-section"><div className="shell offer-layout"><div><p className="eyebrow">Start here / Fixed-scope offer</p><h2 className="section-heading">Growth Audit</h2><p className="section-lede">A focused review of your website, store, customer journey, and visible performance signals—so you know what deserves attention next.</p><Link className="text-link" href="/audit">See what the audit includes <span>→</span></Link></div><div className="offer-card"><div className="offer-card-top"><span>FLECTIVE / AUDIT</span><span>01</span></div><h3>Find the five changes most likely to improve your next 30 days.</h3><ul>{outcomes.map((outcome) => <li key={outcome}><span>+</span>{outcome}</li>)}</ul><Link className="button" href="/audit">View the offer <span>→</span></Link></div></div></section>

    <section className="section system-section"><div className="shell"><p className="eyebrow">How the work connects</p><h2 className="section-heading">Diagnosis first. Execution second.</h2><div className="loop">{[["01", "Diagnose", "Find the problem behind the symptom."], ["02", "Prioritize", "Choose the move with the clearest commercial upside."], ["03", "Build", "Make the improvement real in the tools your business uses."], ["04", "Measure", "Learn what changed and what deserves attention next."]].map(([number, title, copy]) => <div className="loop-step" key={title}><span>{number}</span><strong>{title}</strong><p>{copy}</p></div>)}</div><p className="loop-note">We do not sell disconnected deliverables. We solve the problem in front of the business, then build what the next decision requires.</p></div></section>

    <section className="section"><div className="shell"><p className="eyebrow">What we can help with</p><h2 className="section-heading">One partner across the growth bottleneck.</h2><div className="capability-grid">{services.map((service, index) => <article className="capability" key={service.slug}><span className="number">0{index + 1} / {service.eyebrow.split("—")[1]?.trim()}</span><h3>{service.name}</h3><p>{service.statement}</p><ArrowLink href={`/services/${service.slug}`}>See how we help</ArrowLink></article>)}</div></div></section>

    <section className="section section-line"><div className="shell"><p className="eyebrow">Proof, not promises</p><h2 className="section-heading">Useful work creates the evidence.</h2><p className="section-lede section-lede-narrow">We are building a body of work around real business problems. Every case study will show the context, decision, execution, and verified impact.</p><div className="work-grid">{caseStudies.map((study) => <Link href={`/work/${study.slug}`} className={`work-card ${study.palette}`} key={study.slug}><div className="work-card-meta"><span>{study.client}</span><span>{study.year}</span></div><h3>{study.project}</h3><p>{study.summary}</p><span className="arrow-link">View the work <span>↗</span></span></Link>)}</div><div className="section-bridge"><p>Want to be the next useful case?</p><Link className="text-link" href="/contact">Tell us what is stuck <span>→</span></Link></div></div></section>

    <section className="section philosophy"><div className="shell"><p className="eyebrow">The principle behind the work</p><h2>Reflect.<br />Reframe.<br />Grow.</h2><p>Good growth starts by seeing the situation clearly enough to make the next decision count.</p></div></section>

    <section className="section"><div className="shell"><p className="eyebrow">The first engagement</p><h2 className="section-heading">A clear process, without the agency theatre.</h2><div className="process-list">{process.map(([number, title, copy]) => <article className="process-item" key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>

    <section className="section cta-section"><div className="shell"><p className="eyebrow">Take the first step</p><h2>Know what to fix before you spend more.</h2><p>Share the context. We will help you decide whether an audit is the right next move.</p><Link className="button button-light" href="/audit">Get a Growth Audit <span>→</span></Link></div></section>
  </>;
}
