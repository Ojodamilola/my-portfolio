import { ArrowUpRight, Sparkles } from "lucide-react";

import schAdmin from "../../assets/schologos-admin-dashboard.png";

const admin = schAdmin;

const CONTENT = {
  eyebrow: "Selected Work",
  heading: "Real Problems Solved With Modern Software",
  description:
    "A track record of reliable web platforms, automated business tools, and scalable applications built to deliver measurable business results.",
  projects: [
    {
      image: admin,
      title: "Schologos",
      blurb:
        "All-in-one school management platform that automates student onboarding, digital attendance, online CBT exams, and instant report card generation.",
      tags: [
        "School Operations",
        "CBT & Exams",
        "Automated Grading",
        "Access Control",
      ],
      year: "2026",
      link: "https://schologos.netlify.app",
    },
    {
      image: admin,
      title: "BizRM",
      blurb:
        "Multi-tenant SaaS built for business owners to automate 99% of their daily workflows, including smart client follow-ups, dynamic onboarding, and automated billing.",
      tags: [
        "Workflow Automation",
        "AI Client Follow-Up",
        "SaaS Platform",
        "Team Management",
      ],
      year: "2026",
      link: "#work",
    },
    {
      image: admin,
      title: "Dynamic Portfolio & CMS",
      blurb:
        "Conversion-focused web showcase paired with a private headless admin panel, enabling real-time content and project updates with zero developer dependency.",
      tags: [
        "Clean Frontend",
        "Self-Managed Admin",
        "Instant Updates",
        "Responsive Web",
      ],
      year: "2026",
      link: "#work",
    },
  ],
};

export default function Work() {
  return (
    <section id="work" className="relative px-4 py-20">
      <div className="mx-auto max-w-3xl ">
        {/* Section Header */}

        <div className="flex flex-col items-center justify-between gap-4 md:flex-row md:items-end text-center">
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
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {CONTENT.projects.map((project) => {
            const Image = project.image;
            return (
              <article
                key={project.title}
                className="card-glossy group flex flex-col justify-between rounded-4xl p-4 transition-all duration-300 hover:-translate-y-1.5"
              >
                {/* Metadata & Title */}
                <div className="mt-4 flex items-center justify-between gap-4 ">
                  <h3
                    className="text-2xl font-bold tracking-tight text-foreground"
                    style={{ fontFamily: "'Fraunces', serif" }}
                  >
                    {project.title}
                  </h3>
                  {/*Action Link */}
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary transition-transform group-hover:translate-x-0.5"
                  >
                    <span>View Project</span>
                    <ArrowUpRight className="size-3.5" />
                  </a>
                </div>
                

                {/* Blurb */}
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  {project.blurb}
                </p>
                {/* Tags  */}
                <div className=" flex flex-wrap items-center justify-between gap-2 border-border/70 pt-3">
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
                </div>

                {/* Image */}
                <div className=" w-full max-h-8/12 overflow-hidden rounded-3xl bg-secondary/30 mt-3">
                    <img
                      src={Image}
                      alt="Damilola - Portfolio Hero"
                      className="h-full w-full object-contain object-top transition-all duration-500 "
                    />
                    </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
