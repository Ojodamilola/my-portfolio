import { 
  SiReact, 
  SiTypescript, 
  SiNextdotjs, 
  SiNodedotjs, 
  SiTailwindcss, 
  SiPostgresql, 
  SiGraphql, 
  SiDocker, 
  SiGit, 
  SiPython,
  SiVite,
  SiMongodb,
  SiFigma
} from "react-icons/si";
import { 
  Sparkles, 
  Layout, 
  Layers, 
  Zap, 
  ShieldCheck, 
  Smartphone, 
  Cpu, 
  Workflow, 
  Database, 
  Palette,
  BarChart3,
  Flame
} from "lucide-react";

const TECH_STACK = [
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "React 19", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "currentColor" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "Vite", icon: SiVite, color: "#646CFF" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Git & CI/CD", icon: SiGit, color: "#F05032" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
];

const FEATURES = [
  { name: "Responsive UI", icon: Smartphone },
  { name: "SaaS Dashboards", icon: BarChart3 },
  { name: "Tactile Design Systems", icon: Palette },
  { name: "REST & GraphQL APIs", icon: Database },
  { name: "Real-Time WebSockets", icon: Zap },
  { name: "Interactive Micro-Animations", icon: Sparkles },
  { name: "Accessible (a11y) Compliant", icon: ShieldCheck },
  { name: "Sub-second Page Speeds", icon: Flame },
  { name: "Multi-tenant Portals", icon: Layers },
  { name: "Complex Business Workflows", icon: Workflow },
  { name: "Component Architecture", icon: Layout },
  { name: "Full-Stack Logic", icon: Cpu },
];

export default function TechMarquee() {
  return (
    <section className="relative overflow-hidden py-4">
      {/* Edge gradient fades for seamless floating transition */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-linear-to-r from-background to-transparent sm:w-40" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-linear-to-l from-background to-transparent sm:w-40" />

      <div className="flex flex-col gap-5">
        {/* Row 1: Tech Stack Flowing to the RIGHT */}
        <div className="flex overflow-hidden">
          <div className="animate-marquee-right flex shrink-0 items-center gap-4 py-1">
            {/* Repeated twice to create seamless loop */}
            {[...TECH_STACK, ...TECH_STACK].map((tech, idx) => {
              const Icon = tech.icon;
              return (
                <div
                  key={`${tech.name}-${idx}`}
                  className="card-glossy flex shrink-0 items-center gap-2.5 rounded-full px-5 py-2.5 text-sm font-semibold tracking-wide whitespace-nowrap text-foreground select-none backdrop-blur-md transition-transform duration-200 hover:scale-105"
                >
                  <Icon className="size-4 shrink-0 text-primary" />
                  <span className="whitespace-nowrap">{tech.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Row 2: Features & Build Capabilities Flowing to the LEFT */}
        <div className="flex overflow-hidden">
          <div className="animate-marquee-left flex shrink-0 items-center gap-4 py-1">
            {/* Repeated twice to create seamless loop */}
            {[...FEATURES, ...FEATURES].map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <div
                  key={`${feat.name}-${idx}`}
                  className="card-glossy flex shrink-0 items-center gap-2.5 rounded-full px-5 py-2.5 text-sm font-medium tracking-wide whitespace-nowrap text-foreground select-none backdrop-blur-md transition-transform duration-200 hover:scale-105"
                >
                  <Icon className="size-4 shrink-0 text-primary" />
                  <span className="whitespace-nowrap">{feat.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
