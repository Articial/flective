import Link from "next/link";

export function ArrowUpRight({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 16 16" fill="none">
      <path d="M3 13 13 3M6 3h7v7" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function ArrowLink({ href, children, className = "" }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <Link href={href} className={`arrow-link ${className}`}>
      <span>{children}</span>
      <ArrowUpRight />
    </Link>
  );
}
