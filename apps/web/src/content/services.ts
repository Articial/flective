export type Service = {
  slug: "intelligence" | "growth" | "build";
  name: string;
  eyebrow: string;
  statement: string;
  description: string;
  question: string;
  capabilities: string[];
  approach: string[];
  connection: string;
};

export const services: Service[] = [
  {
    slug: "intelligence",
    name: "Intelligence",
    eyebrow: "01 — Understand",
    statement: "Turn scattered signals into decisions.",
    description:
      "We look beneath performance reports, customer behaviour, and market movement to locate the questions that deserve attention.",
    question: "When there is plenty of information, but little confidence about what it means.",
    capabilities: [
      "Business & performance analysis",
      "Customer and market insight",
      "Competitor intelligence",
      "Decision-support dashboards",
      "Growth opportunity mapping",
    ],
    approach: ["Frame the decision", "Find the relevant signals", "Make the pattern useful"],
    connection:
      "Intelligence gives Growth a grounded direction and shows Build what the business actually needs next.",
  },
  {
    slug: "growth",
    name: "Growth",
    eyebrow: "02 — Decide",
    statement: "Make the customer journey work harder.",
    description:
      "We turn a clear view of the business into focused experiments, sharper journeys, and plans that connect attention to commercial outcomes.",
    question: "When activity is high, but the path from interest to action is unclear.",
    capabilities: [
      "Digital growth strategy",
      "Acquisition and campaign planning",
      "Conversion rate optimization",
      "Customer journey optimization",
      "Retention and experimentation",
    ],
    approach: ["Prioritize the opportunity", "Design the change", "Learn through measurement"],
    connection:
      "Growth translates intelligence into action, then defines the experiences, systems, and campaigns that Build brings to life.",
  },
  {
    slug: "build",
    name: "Build",
    eyebrow: "03 — Execute",
    statement: "Create the systems that make progress possible.",
    description:
      "We design and develop the digital infrastructure a business needs to convert, operate, and learn with less friction.",
    question: "When the strategy is clear, but the existing digital system cannot carry it.",
    capabilities: [
      "Conversion-focused websites",
      "E-commerce and Shopify development",
      "Web applications and internal tools",
      "Dashboards and integrations",
      "Workflow automation",
    ],
    approach: ["Define the essential system", "Design for real use", "Release, observe, improve"],
    connection:
      "Build makes the decision tangible. What it produces creates new behaviour and performance signals for Intelligence to examine.",
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
