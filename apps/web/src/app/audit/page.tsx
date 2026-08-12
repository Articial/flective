import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Growth Audit",
  description: "A focused review of the digital friction between attention, action, and growth.",
};

const deliverables = [
  ["01", "Signal review", "A practical read of your website, customer journey, content, and available performance signals."],
  ["02", "Growth friction map", "The clearest points where attention, intent, or measurement are being lost."],
  ["03", "Priority plan", "Five high-leverage moves, sequenced into a realistic 30-day action plan."],
];

export default function AuditPage() {
  return <>
    <section className="page-hero audit-hero">
      <div className="shell">
        <p className="eyebrow">Flective / Growth Audit</p>
        <h1>Find the friction before you add more activity.</h1>
        <p> A focused review for growing businesses and e-commerce teams that already have digital activity, but need a clearer path from attention to action.</p>
        <div className="hero-actions page-actions"><Link className="button" href="/contact">Request a Growth Audit <span>→</span></Link><a className="text-link" href="#deliverables">What you receive <span>↓</span></a></div>
      </div>
    </section>
    <section className="section" id="deliverables"><div className="shell">
      <div className="section-intro"><p className="eyebrow">The output</p><div><h2 className="section-heading">A clearer view of what to change next.</h2><p className="section-lede">This is not a vanity score or a generic checklist. It is a decision document designed to help you choose the next useful move.</p></div></div>
      <div className="audit-deliverables">{deliverables.map(([number, title, copy]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
    </div></section>
    <section className="section system-section"><div className="shell"><p className="eyebrow">How it works</p><h2 className="section-heading">Understand. Prioritize. Move.</h2><div className="audit-steps"><div><span>01</span><strong>Share the context</strong><p>Tell us what you sell, where customers come from, and what currently feels unclear.</p></div><div><span>02</span><strong>We investigate</strong><p>We examine the visible customer journey, market context, and signals available to you.</p></div><div><span>03</span><strong>You get the next moves</strong><p>Receive a concise, prioritized plan—with implementation support available when useful.</p></div></div></div></section>
    <section className="section"><div className="shell audit-fit"><div><p className="eyebrow">Good fit for</p><h2 className="section-heading">Businesses with activity, not yet enough clarity.</h2></div><ul><li>Websites or stores receiving attention but not enough action.</li><li>Teams spending on campaigns without a shared view of performance.</li><li>Founders who need a practical second look before investing further.</li></ul></div></section>
    <section className="section cta-section"><div className="shell"><p className="eyebrow">Start with the problem</p><h2>Send the context. We&apos;ll find the signal.</h2><p>No obligation to buy an implementation project. The first step is a clearer question.</p><Link className="button button-light" href="/contact">Request a Growth Audit <span>→</span></Link></div></section>
  </>;
}