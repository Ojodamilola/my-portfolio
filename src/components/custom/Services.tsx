import { Code2, Layout, Cpu, Sparkles, CheckCircle2 } from "lucide-react";

const CONTENT = {
  eyebrow: "Services",
  heading: "Tailored Capabilities & Solutions",
  description:
    "End-to-end expertise spanning interface design, frontend development, and performant web architecture.",
  services: [
    {
      icon: Layout,
      title: "Frontend & UI Engineering",
      blurb:
        "Building responsive, pixel-perfect web applications with React, TypeScript, and modern CSS architecture.",
      deliverables: ["Component Libraries", "Micro-Interactions", "Responsive Layouts"],
    },
    {
      icon: Code2,
      title: "Full-Stack Development",
      blurb:
        "Architecting robust API backends, database integrations, authentication, and state synchronization.",
      deliverables: ["REST & GraphQL APIs", "Database Schemas", "Auth & State Systems"],
    },
    {
      icon: Cpu,
      title: "Design Systems & Auditing",
      blurb:
        "Standardizing scalable UI token frameworks, accessibility (a11y) benchmarks, and Core Web Vitals performance.",
      deliverables: ["Design Tokens", "Accessibility Audits", "Lighthouse Optimization"],
    },
  ],
};

export default function Services() {
  return (
    <section id="services" className="relative px-4 py-20">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
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

        {/* Services Grid */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {CONTENT.services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="card-glossy flex flex-col justify-between rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1.5"
              >
                <div>
                  {/* Icon badge */}
                  <div className="flex size-12 items-center justify-center rounded-2xl border border-border bg-secondary/60 text-primary shadow-xs">
                    <Icon className="size-6" />
                  </div>

                  <h3
                    className="mt-6 text-2xl font-bold tracking-tight text-foreground"
                    style={{ fontFamily: "'Fraunces', serif" }}
                  >
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {service.blurb}
                  </p>
                </div>

                {/* Deliverables */}
                <div className="mt-8 border-t border-border/70 pt-5">
                  <div className="text-[11px] font-semibold tracking-wider text-muted-foreground uppercase">
                    Deliverables
                  </div>
                  <ul className="mt-3 space-y-2">
                    {service.deliverables.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-xs text-foreground/90">
                        <CheckCircle2 className="size-3.5 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
