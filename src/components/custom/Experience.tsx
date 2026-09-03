import { Briefcase, Sparkles } from "lucide-react";

const CONTENT = {
  eyebrow: "Experience",
  heading: "Career Milestones & Roles",
  description:
    "A track record of engineering scalable front-end systems, managing design tokens, and collaborating across agile teams.",
  roles: [
    {
      period: "2024 — Present",
      role: "Lead Full-Stack / Frontend Engineer",
      company: "Apex Digital Solutions",
      blurb:
        "Directing frontend architecture, refactoring core component systems, and improving platform responsiveness and load speeds by 40%.",
      technologies: ["React 19", "TypeScript", "Tailwind CSS", "Node.js"],
    },
    {
      period: "2022 — 2024",
      role: "Senior UI/UX Engineer",
      company: "Nexus Labs",
      blurb:
        "Crafted accessible design token systems, managed component libraries, and integrated high-frequency WebSocket APIs into client dashboards.",
      technologies: ["Next.js", "Radix UI", "GraphQL", "Figma"],
    },
    {
      period: "2020 — 2022",
      role: "Frontend Web Developer",
      company: "Studio Craft",
      blurb:
        "Engineered interactive client websites, optimized Core Web Vitals, and built modular interfaces for high-traffic commerce brands.",
      technologies: ["React", "JavaScript", "REST APIs", "CSS Modules"],
    },
  ],
};

export default function Experience() {
  return (
    <section id="experience" className="relative px-4 py-20">
      <div className="mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
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
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {CONTENT.description}
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-14">
          {/* Vertical line indicator */}
          <div className="absolute top-4 bottom-4 left-4 w-px bg-border sm:left-6" />

          <div className="space-y-8">
            {CONTENT.roles.map((item, index) => (
              <div key={index} className="relative flex items-start gap-6 sm:gap-8">
                {/* Glowing Node */}
                <div className="relative z-10 flex size-8 shrink-0 items-center justify-center rounded-full border border-primary/40 bg-card shadow-[0_0_12px_rgba(0,91,70,0.25)] dark:shadow-[0_0_16px_rgba(78,217,178,0.35)] sm:size-12">
                  <Briefcase className="size-3.5 text-primary sm:size-5" />
                </div>

                {/* Timeline Card */}
                <div className="card-glossy flex-1 rounded-3xl p-6 sm:p-8">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="rounded-full border border-border bg-secondary/40 px-3 py-1 text-xs font-semibold text-primary">
                      {item.period}
                    </span>
                    <span className="text-xs font-medium text-muted-foreground">
                      {item.company}
                    </span>
                  </div>

                  <h3
                    className="mt-3 text-xl font-bold tracking-tight text-foreground sm:text-2xl"
                    style={{ fontFamily: "'Fraunces', serif" }}
                  >
                    {item.role}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {item.blurb}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2 border-t border-border/60 pt-4">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg border border-border bg-background/50 px-2.5 py-1 text-[11px] font-medium text-foreground/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
