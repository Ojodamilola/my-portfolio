import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border/80 px-4 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-2">
          <span
            className="text-lg font-bold tracking-tight text-foreground"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            Damilola<span className="text-primary">.</span>
          </span>
          <span className="text-xs text-muted-foreground">
            — © {new Date().getFullYear()} All rights reserved.
          </span>
        </div>

        <button
          type="button"
          onClick={scrollToTop}
          className="card-glossy inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold text-foreground transition-transform hover:-translate-y-0.5"
          aria-label="Scroll to top"
        >
          <span>Back to Top</span>
          <ArrowUp className="size-3.5 text-primary" />
        </button>
      </div>
    </footer>
  );
}
