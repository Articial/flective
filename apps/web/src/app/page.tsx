import Link from "next/link";
import { ArrowLink } from "@/components/arrow-link";
import { services } from "@/content/services";
import { caseStudies } from "@/content/work";

const friction = ["Traffic without conversion.", "Data without insight.", "Campaigns without direction.", "Technology without integration."];
const process = [
  ["01", "Discover", "Understand the business, customer, and existing signals."],
  ["02", "Diagnose", "Find the friction, opportunity, and priority."],
  ["03", "Define", "Turn insight into a decision people can act on."],
  ["04", "Build", "Create the experience, system, or campaign it requires."],
  ["05", "Grow", "Measure, iterate, and improve what matters."],
];

export default function Home() {
  return <>
    <section className="hero">
      <div className="signal-field" />
      <div className="hero-inner">
        <div className="hero-label"><span>Flective / Digital Growth &amp; Intelligence</span><span>Indonesia / Remote</span></div>
        <h1>See the signal.<br />Make the <em>move.</em></h1>
        <div className="hero-bottom">
          <div><p>Flective helps growing businesses and e-commerce teams find what is getting in the way of growth—and build the next useful move.</p><p className="hero-proof">Strategy, technology, data, and execution in one connected practice.</p></div>
          <div className="hero-actions"><Link className="button" href="/audit">Request a Growth Audit <span>→</span></Link><a className="text-link" href="#system">Explore Flective <span>↓</span></a></div>
        </div>
      </div>
    </section>

    <section className="section"><div className="shell section-intro"><p className="eyebrow">For businesses in motion</p><div><h2 className="section-heading">You may not need more activity. You may need a clearer view.</h2><p className="section-lede">When digital channels, campaigns, and data multiply, the next opportunity is often hidden in the connection between them.</p></div></div><div className="shell friction-list">{friction.map((item, index) => <div key={item}><span>0{index + 1}</span><p>{item}</p></div>)}</div></section>

    <section id="system" className="section system-section"><div className="shell"><p className="eyebrow">The Flective system</p><h2 className="section-heading">One connected practice, from clarity to momentum.</h2><div className="loop">{[["01", "Understand", "Intelligence finds what matters."], ["02", "Decide", "Growth defines what should change."], ["03", "Build", "Build creates what is needed."], ["04", "Grow", "Measurement becomes new intelligence."]].map(([number, title, copy]) => <div className="loop-step" key={title}><span>{number}</span><strong>{title}</strong><p>{copy}</p></div>)}</div><p className="loop-note">The work is not a handoff between disconnected services. Each move informs the next one.</p></div></section>

    <section className="section"><div className="shell"><p className="eyebrow">Capabilities</p><h2 className="section-heading">Different disciplines. One direction.</h2><div className="capability-grid">{services.map((service, index) => <article className="capability" key={service.slug}><span className="number">0{index + 1} / {service.eyebrow.split("—")[1]?.trim()}</span><h3>{service.name}</h3><p>{service.statement}</p><ArrowLink href={`/services/${service.slug}`}>Explore {service.name}</ArrowLink></article>)}</div><div className="section-bridge"><p>Need a place to start?</p><Link className="text-link" href="/audit">Start with the Growth Audit <span>→</span></Link></div></div></section>

    <section className="section section-line"><div className="shell"><p className="eyebrow">Selected work</p><h2 className="section-heading">The proof is built through useful work.</h2><p className="section-lede section-lede-narrow">Flective case studies show the context, thinking, execution, and verified impact behind each engagement.</p><div className="work-grid">{caseStudies.map((study) => <Link href={`/work/${study.slug}`} className={`work-card ${study.palette}`} key={study.slug}><div className="work-card-meta"><span>{study.client}</span><span>{study.year}</span></div><h3>{study.project}</h3><p>{study.summary}</p><span className="arrow-link">View framework <span>↗</span></span></Link>)}</div></div></section>

    <section className="section philosophy"><div className="shell"><p className="eyebrow">The philosophy</p><h2>Reflect.<br />Reframe.<br />Grow.</h2><p>Reflection is not hesitation. It is the discipline of seeing a situation clearly enough to make the next decision count.</p></div></section>

    <section className="section"><div className="shell"><p className="eyebrow">How we work</p><h2 className="section-heading">Clarity before complexity.</h2><div className="process-list">{process.map(([number, title, copy]) => <article className="process-item" key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>

    <section className="section cta-section"><div className="shell"><p className="eyebrow">Start with a better question</p><h2>Your next growth opportunity might already be visible.</h2><p>Share the context. We&apos;ll help you decide what deserves attention first.</p><Link className="button button-light" href="/audit">Request a Growth Audit <span>→</span></Link></div></section>
  </>;
}
