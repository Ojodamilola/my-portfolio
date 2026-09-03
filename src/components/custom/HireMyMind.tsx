import { useState } from "react";

interface Highlight {
  title: string;
  description: string;
}

interface Tab {
  key: string;
  label: string;
  description: string;
  heading: string;
  summary: string;
  highlights: Highlight[];
}

const TAB_CONTENT: Tab[] = [
  {
    key: "technical",
    label: "Technical Role",
    description:
      "Full-stack apps that are fast, reliable, and actually work for the people who use them.",
    heading:
      "I can move between product thinking, polished UI, and implementation.",
    summary:
      "4+ years across React, Next.js, Node.js, TypeScript, WordPress, Shopify, SEO, and UI-focused frontend systems.",
    highlights: [
      {
        title: "Frontend depth",
        description: "Responsive UI, design systems, and interaction detail.",
      },
      {
        title: "Full-stack range",
        description: "APIs, dashboards, workflows, and product logic.",
      },
      {
        title: "Business sense",
        description: "Clear pages, conversion focus, and user-first execution.",
      },
    ],
  },
  {
    key: "saas",
    label: "SaaS Platform",
    description: "Dashboards, workflows, portals, tools, and product systems.",
    heading: "PLACEHOLDER_HEADING",
    summary: "PLACEHOLDER_SUMMARY",
    highlights: [
      { title: "PLACEHOLDER_TITLE_1", description: "PLACEHOLDER_DESC_1" },
      { title: "PLACEHOLDER_TITLE_2", description: "PLACEHOLDER_DESC_2" },
      { title: "PLACEHOLDER_TITLE_3", description: "PLACEHOLDER_DESC_3" },
    ],
  },
];

const HireMyMind = () => {
  const [activeTab, setActiveTab] = useState<string>("saas");
  const active =
    TAB_CONTENT.find((tab) => tab.key === activeTab) ?? TAB_CONTENT[0];

  return (
    <section id="how-i-think" className="relative bg-soft-oat py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-purple-x11">
            How I think
          </span>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.05] text-shadow-grey">
            Hire My Mind
          </h2>
          <span className="text-sm text-shadow-grey/50">
            Quick view of how I approach different project types.
          </span>
        </div>

        <div className="mt-10 flex flex-col items-stretch gap-3 rounded-xl border border-shadow-grey/10 bg-warm-linen p-6 sm:p-8 md:flex-row md:items-start md:gap-8">
          <div className="flex flex-col gap-2 md:w-1/3">
            {TAB_CONTENT.map((tab) => (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveTab(tab.key)}
                className={`rounded-xl border border-transparent p-3 text-left transition-colors hover:border-shadow-grey/25 ${
                  activeTab === tab.key ? "bg-petal-pink/15" : ""
                }`}
              >
                <p className="font-normal text-indigo-velvet">{tab.label}</p>
                <span className="text-sm text-shadow-grey/50">
                  {tab.description}
                </span>
              </button>
            ))}
          </div>

          <div className="md:w-2/3">
            <span className="text-xs font-semibold uppercase text-purple-x11">
              {active.label}
            </span>
            <h1 className="mt-2 text-2xl font-semibold text-shadow-grey">
              {active.heading}
            </h1>
            <span className="mt-2 block text-sm text-shadow-grey/70">
              {active.summary}
            </span>

            <div className="mt-4 space-y-3 rounded-xl bg-cotton-rose p-4">
              {active.highlights.map((point) => (
                <div key={point.title}>
                  <p className="font-medium text-shadow-grey">{point.title}</p>
                  <span className="text-sm text-shadow-grey/70">
                    {point.description}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HireMyMind;