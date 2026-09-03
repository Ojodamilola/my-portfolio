import { User, Sparkles, CheckCircle2 } from "lucide-react";

const CONTENT = {
  eyebrow: "About Me",
  heading: "Designing with intent, building with precision.",
  paragraphs: [
    "I specialize in architecting responsive web applications and tactile user interfaces that combine aesthetic beauty with rock-solid engineering.",
    "With a deep background in modern TypeScript ecosystems, React, state management, and design systems, I focus on delivering scalable, accessible, and high-performance digital products.",
  ],
  highlights: [
    "Clean, modular TypeScript & React architecture",
    "Tailored design systems & micro-interactions",
    "Performance-first engineering & API integration",
    "Accessible, responsive, cross-platform layouts",
  ],
  skills: [
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Node.js",
    "REST & GraphQL",
    "Design Systems",
    "Framer Motion",
    "UI/UX Design",
    "PostgreSQL",
    "Git & CI/CD",
    "Performance",
  ],
};

export default function About() {
  return (
    <section id="about" className="relative px-4 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="card-glossy rounded-4xl p-8 sm:p-12 lg:p-16">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-14">
            {/* Left Bio Column */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-3.5 py-1 text-xs font-semibold tracking-wider text-primary uppercase">
                <User className="size-3.5" />
                <span>{CONTENT.eyebrow}</span>
              </div>

              <h2
                className="mt-5 text-3xl leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl"
                style={{ fontFamily: "'Fraunces', serif" }}
              >
                {CONTENT.heading}
              </h2>

              <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                {CONTENT.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              {/* Highlights checklist */}
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {CONTENT.highlights.map((item, index) => (
                  <div key={index} className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span className="text-xs font-medium text-foreground/90">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Skills & Focus Column */}
            <div className="flex flex-col justify-between rounded-3xl border border-border/80 bg-background/50 p-6 sm:p-8">
              <div>
                <div className="flex items-center gap-2 text-sm font-semibold tracking-wide text-foreground">
                  <Sparkles className="size-4 text-primary" />
                  <span>Technical Arsenal & Tooling</span>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  Technologies and core proficiencies I leverage daily to construct modern solutions.
                </p>

                {/* Skills tags */}
                <div className="mt-6 flex flex-wrap gap-2.5">
                  {CONTENT.skills.map((skill) => (
                    <span
                      key={skill}
                      className="card-glossy rounded-full px-3.5 py-1.5 text-xs font-medium text-foreground transition-transform hover:-translate-y-0.5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Quick Philosophy Card */}
              <div className="mt-8 rounded-2xl border border-border bg-card p-5">
                <p className="text-xs italic text-muted-foreground" style={{ fontFamily: "'Fraunces', serif" }}>
                  &ldquo;Great software feels seamless — fast by default, intuitive to navigate, and built to stand the test of time.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
