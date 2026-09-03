import { useState } from "react";
import {
  Code2,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  LayoutDashboard,
  Palette,
  Server,
} from "lucide-react";

interface Direction {
  id: string;
  number: string;
  tag: string;
  title: string;
  subtitle: string;
  icon: typeof Code2;
  overview: string;
  points: { title: string; desc: string }[];
}

const DIRECTIONS: Direction[] = [
  {
    id: "technical",
    number: "01",
    tag: "Core Engineering",
    title: "Technical Role & Full-Stack Systems",
    subtitle: "Frontend, Backend, Databases & Scalable Architecture",
    icon: Server,
    overview:
      "Bridging clean client interfaces with secure, reliable backend infrastructure. I engineer full-stack systems designed for maintainability, zero-latency state sync, and dependable business logic.",
    points: [
      {
        title: "Frontend Precision",
        desc: "Modern React 19, TypeScript strict mode, responsive layouts, and clean state machines.",
      },
      {
        title: "Backend & Database Architecture",
        desc: "Robust REST & GraphQL APIs, relational database design with PostgreSQL, caching, and auth.",
      },
      {
        title: "Performance & Reliability",
        desc: "Type safety from client to database, sub-second queries, and automated testing pipelines.",
      },
    ],
  },
  {
    id: "saas",
    number: "02",
    tag: "Product Platforms",
    title: "SaaS Dashboards, CMS & Portals",
    subtitle: "Enterprise Tools, Admin Workflows & Content Engines",
    icon: LayoutDashboard,
    overview:
      "Building complex, data-intensive web applications that make complicated workflows feel simple, fast, and delightful for business users and power admins.",
    points: [
      {
        title: "Interactive Dashboards & Analytics",
        desc: "Real-time telemetry, filterable data tables, metric cards, and responsive charting engines.",
      },
      {
        title: "Headless CMS & Commerce",
        desc: "Custom editorial workflows, headless Shopify/WordPress integrations, and multi-tenant portals.",
      },
      {
        title: "Security & Role-Based Access",
        desc: "Granular permissions, OAuth/SSO login flows, and enterprise data isolation.",
      },
    ],
  },
  {
    id: "ui-experience",
    number: "03",
    tag: "Tactile Experience",
    title: "Product UI, Design Systems & Interaction",
    subtitle: "Micro-interactions, Accessibility & Design Tokens",
    icon: Palette,
    overview:
      "Creating memorable digital products with tactile feedback, considered micro-animations, and bulletproof design token foundations that scale across entire engineering organizations.",
    points: [
      {
        title: "Tactile Design Tokens",
        desc: "Harmonious color scales, glossy 3D lighting models, and systematic typography rhythm.",
      },
      {
        title: "Fluid Micro-Interactions",
        desc: "Physics-based hover animations, smooth page transitions, and tactile button states.",
      },
      {
        title: "Accessibility (a11y) & SEO",
        desc: "WCAG AAA compliant contrast, full keyboard navigation, screen reader support, and meta SEO.",
      },
    ],
  },
];

export default function BuildDirection() {
  const [activeId, setActiveId] = useState<string>("technical");
  const activeDirection =
    DIRECTIONS.find((d) => d.id === activeId) ?? DIRECTIONS[0];
  const ActiveIcon = activeDirection.icon;

  return (
    <section
      id="build-directions"
      className="relative scroll-mt-28 px-4 py-16 sm:py-20 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-3.5 py-1 text-xs font-semibold tracking-wider text-primary uppercase">
            <Sparkles className="size-3.5" />
            <span>Interactive Build Directions</span>
          </div>
          <h2
            className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            Explore How I Build
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Click on any build direction on the left to reveal the architectural
            philosophy, technical breakdown, and deliverables.
          </p>
        </div>

        {/* Interactive Grid: 3 Clickable Divs on Left, 1 Reveal Content Div on Right */}
        <div className="mt-12 grid gap-6 md:grid-cols-[1.1fr_1.5fr] md:items-stretch lg:grid-cols-[0.85fr_1.6fr]">
          {/* Left Column: 3 Interactive Clickable Cards */}
          <div className="flex flex-col gap-1.5 bg-card/40 rounded-3xl p-1.5 ">
            {DIRECTIONS.map((direction) => {
              const isSelected = direction.id === activeId;

              return (
                <button
                  key={direction.id}
                  type="button"
                  onClick={() => setActiveId(direction.id)}
                  className={`group relative flex w-full flex-col rounded-3xl p-3 text-left transition-all duration-200  transform-gpu ${
                    isSelected
                      ? "card-glossy ring-2 ring-primary/60 shadow-xl"
                      : "border border-border/0 bg-card/10 hover:border-primary/30"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <div>
                        <h3
                          className="text-lg font-bold tracking-tight text-foreground sm:text-xl"
                          style={{ fontFamily: "'Fraunces', serif" }}
                        >
                          {direction.title}
                        </h3>
                        <p className=" text-[11px] leading-relaxed text-muted-foreground">
                          {direction.subtitle}
                        </p>
                      </div>
                    </div>

                    <span
                      className={`text-xs font-bold tracking-widest ${
                        isSelected ? "text-primary" : "text-muted-foreground/40"
                      }`}
                      style={{ fontFamily: "'Fraunces', serif" }}
                    >
                      {direction.number}
                    </span>
                  </div>

                  <div className="mt-1 flex items-center justify-between border-t border-border/60 pt-1">
                    <span className="text-[11px] font-medium text-muted-foreground group-hover:text-foreground">
                      {isSelected
                        ? "Currently Viewing"
                        : "Click to Explore Details"}
                    </span>
                    <ArrowRight
                      className={`size-2.5 transition-transform duration-200 ${
                        isSelected
                          ? "text-primary translate-x-1"
                          : "text-muted-foreground group-hover:translate-x-1 group-hover:text-primary"
                      }`}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Content Reveal Container */}
          <div className="card-glossy flex flex-col justify-between rounded-4xl p-6 sm:p-8">
            <div>
              {/* Header inside reveal card */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border/70 pb-2">
                <div className="flex items-center gap-2">
                  <div className="flex size-10 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-md">
                    <ActiveIcon className="size-4" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold tracking-wider text-primary uppercase">
                      {activeDirection.tag}
                    </span>
                    <h3
                      className="text-lg font-bold tracking-tight text-foreground sm:text-xl mb-0"
                      style={{ fontFamily: "'Fraunces', serif" }}
                    >
                      {activeDirection.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Overview */}
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground  sm:text-sm">
                {activeDirection.overview}
              </p>

              {/* 3 Core Points */}
              <div className="mt-4 space-y-2">
                {activeDirection.points.map((pt, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl border border-border/70 bg-background/50 p-2 transition-colors hover:border-primary/30"
                  >
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="size-4 shrink-0 text-primary" />
                      <h4 className="text-sm font-bold text-foreground">
                        {pt.title}
                      </h4>
                    </div>
                    <p className="mt-1 pl-6 text-xs leading-relaxed text-muted-foreground">
                      {pt.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
