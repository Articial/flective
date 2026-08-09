export type CaseStudy = {
  slug: string;
  client: string;
  project: string;
  year: string;
  discipline: string;
  summary: string;
  challenge: string;
  insight: string;
  strategy: string;
  execution: string;
  impact: string;
  palette: "oxide" | "blue" | "sand";
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "commerce-journey",
    client: "Case Study — Content Pending",
    project: "Commerce journey redesign",
    year: "—",
    discipline: "Growth / Build",
    summary: "A structured case-study framework ready for approved project material.",
    challenge: "Project context will be added when it is cleared for publication.",
    insight: "The key observation and decision rationale will be documented here.",
    strategy: "The strategic direction will be outlined here.",
    execution: "The delivered experience, system, or campaign will be documented here.",
    impact: "Verified outcomes will be published only when available and approved.",
    palette: "oxide",
  },
  {
    slug: "operations-visibility",
    client: "Case Study — Content Pending",
    project: "Operations visibility system",
    year: "—",
    discipline: "Intelligence / Build",
    summary: "A flexible editorial template for a future dashboard or system case study.",
    challenge: "Project context will be added when it is cleared for publication.",
    insight: "The key observation and decision rationale will be documented here.",
    strategy: "The strategic direction will be outlined here.",
    execution: "The delivered experience, system, or campaign will be documented here.",
    impact: "Verified outcomes will be published only when available and approved.",
    palette: "blue",
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}
