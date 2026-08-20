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

/**
 * Public proof-building initiatives. These are explicitly labelled as internal
 * work and must never be presented as paid-client outcomes.
 */
export const caseStudies: CaseStudy[] = [
  {
    slug: "growth-audit-system",
    client: "Flective — Internal initiative",
    project: "Growth Audit System",
    year: "2026",
    discipline: "Intelligence / Growth",
    summary: "A structured diagnostic system for turning website, journey, market, and measurement signals into a focused 30-day priority plan.",
    challenge: "Growing businesses often respond to weak conversion by adding campaigns, tools, or redesign work before locating the actual friction.",
    insight: "A useful audit should not end with a score. It should connect evidence to a small number of decisions the team can act on.",
    strategy: "Organise the diagnosis around the customer journey, commercial intent, visible performance signals, and the cost of leaving each issue unresolved.",
    execution: "We are developing a repeatable review framework, evidence log, friction map, and prioritisation method. Human review remains part of every final recommendation.",
    impact: "Current status: operating framework in development. No client outcome is claimed here; verified results will be added only after a completed engagement and publication approval.",
    palette: "oxide",
  },
  {
    slug: "growth-os-concept",
    client: "Flective — Capability concept",
    project: "Growth OS Concept",
    year: "2026",
    discipline: "Intelligence / Build",
    summary: "A working direction for bringing commercial signals, priorities, experiments, and next actions into one decision-support view.",
    challenge: "Teams often collect data in separate tools while priorities remain scattered across chats, spreadsheets, and meetings.",
    insight: "The value is not another dashboard. It is a shared view that helps a team decide what changed, why it matters, and what to do next.",
    strategy: "Connect a small set of meaningful business signals to active experiments, accountable next actions, and a regular decision rhythm.",
    execution: "The public website currently demonstrates the visual direction with clearly labelled sample data. The operating model is being refined through internal use before productisation.",
    impact: "Current status: concept and reusable IP in development. This is not presented as a mature SaaS product or a client result.",
    palette: "blue",
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}
