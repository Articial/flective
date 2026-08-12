import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-top">
        <p className="eyebrow">Flective</p>
        <h2>See clearly.<br />Move decisively.</h2>
        <Link className="button button-light" href="/audit">Request a Growth Audit <span>→</span></Link>
      </div>
      <div className="shell footer-bottom">
        <p>Digital Growth &amp; Intelligence Partner</p>
        <div><Link href="/audit">Growth Audit</Link><Link href="/services">Services</Link><Link href="/work">Work</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link></div>
        <p>© {new Date().getFullYear()} Flective</p>
      </div>
    </footer>
  );
}
