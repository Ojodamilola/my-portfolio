import { ArrowUpRight, Layers, Compass, Orbit, Boxes, Sparkles } from "lucide-react";

const CONTENT = {
  eyebrow: "Selected Work",
  heading: "Featured Projects & Products",
  description:
    "A showcase of modern web applications, design systems, and digital tools engineered with high standards.",
  projects: [
    {
      icon: Layers,
      title: "Fintech Analytics Suite",
      blurb:
        "High-performance dashboard with real-time telemetry, portfolio tracking, and fluid financial data visualizations.",
      tags: ["TypeScript", "React", "Tailwind CSS", "Recharts"],
      year: "2026",
      link: "#work",
    },
    {
      icon: Compass,
      title: "Tactile Design System",
      blurb:
        "Comprehensive component library and design token architecture featuring accessibility-first patterns and micro-interactions.",
      tags: ["Design System", "Radix UI", "CSS Tokens", "Storybook"],
      year: "2025",
      link: "#work",
    },
    {
      icon: Orbit,
      title: "AI Workspace Orchestrator",
      blurb:
        "Next-generation workspace tool integrating intelligent generative agents with low-latency client rendering.",
      tags: ["Next.js", "AI Logic", "WebSockets", "Node.js"],
      year: "2025",
      link: "#work",
    },
    {
      icon: Boxes,
      title: "E-Commerce Commerce Engine",
      blurb:
        "Modular headless commerce interface with sub-second page loads, custom cart drawer, and localized checkout.",
      tags: ["React 19", "Vite", "Tailwind CSS", "Stripe"],
      year: "2024",
      link: "#work",
    },
  ],
};

export default function Work() {
  return (
    <section id="work" className="relative px-4 py-20">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-3.5 py-1 text-xs font-semibold tracking-wider text-primary uppercase">
              <Sparkles className="size-3.5" />
              <span>{CONTENT.eyebrow}</span>
            </div>
            <h2
              className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              {CONTENT.heading}
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            {CONTENT.description}
          </p>
        </div>

        {/* Project Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {CONTENT.projects.map((project) => {
            const Icon = project.icon;
            return (
              <article
                key={project.title}
                className="card-glossy group flex flex-col justify-between rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1.5"
              >
                <div>
                  {/* Visual Header / Banner */}
                  <div className="flex h-36 items-center justify-center rounded-2xl border border-border bg-linear-to-br from-secondary/50 via-primary/10 to-background/60 transition-colors group-hover:border-primary/40">
                    <div className="flex size-14 items-center justify-center rounded-2xl border border-border bg-card shadow-sm transition-transform duration-300 group-hover:scale-110">
                      <Icon className="size-7 text-primary" />
                    </div>
                  </div>

                  {/* Metadata & Title */}
                  <div className="mt-6 flex items-start justify-between gap-4">
                    <h3
                      className="text-2xl font-bold tracking-tight text-foreground"
                      style={{ fontFamily: "'Fraunces', serif" }}
                    >
                      {project.title}
                    </h3>
                    <span className="rounded-full border border-border bg-secondary/40 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                      {project.year}
                    </span>
                  </div>

                  {/* Blurb */}
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {project.blurb}
                  </p>
                </div>

                {/* Tags & Action Link */}
                <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-border/70 pt-5">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border bg-background/60 px-2.5 py-1 text-[11px] font-medium text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary transition-transform group-hover:translate-x-0.5"
                  >
                    <span>View Project</span>
                    <ArrowUpRight className="size-3.5" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
