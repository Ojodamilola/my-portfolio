import { useState } from "react";
import {
  Code2,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Rocket,
  Building2,
  Users,
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
    id: "startups",
    number: "01",
    tag: "Startups & Solopreneurs",
    title: "Launch-Ready MVPs & Product Builds",
    subtitle: "From rough idea to a working product in market quickly",
    icon: Rocket,
    overview:
      "You have an idea and need to test it with paying users, not spend six months in development. I turn your product concept into a clean, functional web or mobile app so you can launch, gather feedback, and start generating revenue.",
    points: [
      {
        title: "Fast Time-to-Market",
        desc: "Focusing strictly on core features that matter so you launch in weeks, not months.",
      },
      {
        title: "Clean, Modern Frontend",
        desc: "A responsive, professional web interface that builds instant credibility with early users.",
      },
      {
        title: "Ready for Growth",
        desc: "Built on solid foundations so you do not have to throw it away and rebuild when users start pouring in.",
      },
    ],
  },
{
    id: "agencies",
    number: "02",
    tag: "Design & Creative Agencies",
    title: "Reliable White-Label Development",
    subtitle: "Bringing your client designs to life with zero drama",
    icon: Users,
    overview:
      "You have the designs, client deadlines, and creative vision; you need an engineer who can turn them into reality without dropping the ball. I act as an extension of your team, delivering pixel-accurate frontend and stable code on schedule.",
    points: [
      {
        title: "Accurate Design Implementation",
        desc: "Your designs translated into clean, interactive screens that look and feel exactly as intended.",
      },
      {
        title: "Deadlines Respected",
        desc: "Clear updates, zero disappearing acts, and predictable deliveries that protect your agency's reputation.",
      },
      {
        title: "Plug-and-Play Integration",
        desc: "I adapt to your workflow, hand off clean code, and handle client revisions smoothly.",
      },
    ],
  },
  {
    id: "businesses",
    number: "03",
    tag: "Small & Growing Businesses",
    title: "Custom Business Systems & Portals",
    subtitle: "Automating workflows, client portals, and web platforms",
    icon: Building2, // or Briefcase / ShieldCheck
    overview:
      "Out-of-the-box software often creates more manual work than it saves. I build custom dashboards, booking systems, and customer portals designed around your exact day-to-day operations so your team can work faster.",
    points: [
      {
        title: "Workflow Automation",
        desc: "Replace chaotic spreadsheets and manual tasks with a streamlined, centralized system.",
      },
      {
        title: "Intuitive Team & Customer Frontend",
        desc: "Simple, easy-to-use screens so staff and customers can use the system with zero training.",
      },
      {
        title: "Secure & Low Maintenance",
        desc: "Reliable platforms with rock-solid security, automated backups, and minimal upkeep required.",
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
                    <div>
                        <h3
                          className={`text-lg font-bold tracking-tight text-foreground sm:text-xl ${isSelected ? "text-primary" : ""}`}
                          style={{ fontFamily: "'Fraunces', serif" }}
                        >
                          {direction.title}
                        </h3>
                        <p className=" text-[11px] leading-relaxed text-muted-foreground">
                          {direction.subtitle}
                        </p>
                      </div>
                    
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
