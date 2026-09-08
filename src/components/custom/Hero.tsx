import {

  Sparkles,
  
  ArrowUpRight,

  Zap,
} from "lucide-react";
import meLight from "../../assets/me-light.png";
import meDark from "../../assets/me-dark.png";
import { useTheme } from "../../hooks/useTheme";

const CONTENT = {
  badge: "Product Builder",
  titlePrefix: "I build fast,",
  titleAccent: "reliable software",
  titleSuffix: "that grow your business",
  intro:
    "Modern web apps and SaaS, mobile products for growing businesses, founders, and agency teams who need dependable execution from day one",

  primaryCta: "Discuss your Project",
  primaryHref: "#contact",
  secondaryCta: "View Projects",
  secondaryHref: "#work",
  stats: [
    { value: "3+ Years", label: "Building for real use" },
    {
      value: "Fast Turnaround",
      label: "On-time delivery"
     
    },
    { value: "100%", label: "Clean, scalable & maintainable code"},
  ],
};

export default function Hero() {
  const { theme } = useTheme();
  const currentHeroImg = theme === "dark" ? meDark : meLight;

  return (
    <section
      id="top"
      className="relative overflow-hidden px-4 pt-32 pb-20 sm:pt-40 md:pt-44 md:pb-28"
    >
      {/* Background ambient lighting glows */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -z-10 h-96 w-[90%] max-w-4xl -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />

      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          {/* Left Column: Typography & CTAs */}
          <div className="order-2 flex flex-col items-start text-left lg:order-1">
            {/* Status Badge */}
            <div className="card-glossy inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium tracking-wide text-foreground">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-primary" />
              </span>
              <Sparkles className="size-3.5 text-primary" />
              <span>{CONTENT.badge}</span>
            </div>

            {/* Main Headline */}
            <h1
              className="mt-8 text-4xl leading-[1.08] tracking-tight text-foreground sm:text-6xl lg:text-7xl"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              {CONTENT.titlePrefix}{" "}
              <span className="text-primary italic">{CONTENT.titleAccent}</span>{" "}
              {CONTENT.titleSuffix}
            </h1>

            {/* Intro text */}
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {CONTENT.intro}
            </p>

            {/* Action Buttons */}
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href={CONTENT.primaryHref}
                className="btn-glossy inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide"
              >
                {CONTENT.primaryCta}
                <Zap className="size-4" />
              </a>

              <a
                href={CONTENT.secondaryHref}
                className="card-glossy inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-foreground transition-transform hover:-translate-y-0.5 active:translate-y-0.5"
              >
                <ArrowUpRight className="size-4 text-primary" />
                {CONTENT.secondaryCta}
              </a>
            </div>

            {/* Stats row */}
            <div className="mt-12 grid w-full grid-cols-3 gap-3 border-t border-border pt-8 sm:gap-4">
              {CONTENT.stats.map((stat) => {
              
                return (
                  <div
                    key={stat.label}
                    className="card-glossy rounded-2xl p-4 sm:p-5"
                  ><div
                        className="text-sm font-bold tracking-tight text-primary sm:text-xl"
                        style={{ fontFamily: "'Fraunces', serif" }}
                      >
                        {stat.value}
                      </div>
                    
                    <div className="mt-1 text-[10px] font-light text-muted-foreground uppercase sm:text-[12px]">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Hero Image with Glossy Framing */}
          <div className="order-1 relative flex justify-center lg:order-2 lg:justify-end">
            <div className="relative">
              {/* Outer decorative halo */}
              <div className="absolute -inset-2 rounded-4xl bg-primary/20 blur-xl transition-all duration-500" />

              {/* Glossy Photo Card */}
              <div className="card-glossy relative overflow-hidden rounded-4xl p-3 sm:p-4">
                <div className="relative aspect-4/5 w-full max-w-md overflow-hidden rounded-3xl bg-secondary/30">
                  <img
                    src={currentHeroImg}
                    alt="Damilola - Portfolio Hero"
                    className="h-full w-full object-cover object-top transition-all duration-500 "
                  />
                  {/* Subtle glossy glass reflection overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-white/10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
