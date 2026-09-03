import { useEffect, useState } from "react";
import { ArrowUpRight, Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "../../hooks/useTheme";

const CONTENT = {
  name: "Damilola",
  dot: ".",
  links: [
    { label: "About", href: "#about" },
    { label: "Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "Experience", href: "#experience" },
  ],
  cta: "Let's talk",
  ctaHref: "#contact",
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 sm:pt-6">
      <nav
        className={`card-glossy flex w-full max-w-4xl items-center justify-between rounded-full px-5 py-3 backdrop-blur-xl transition-all duration-300 ${
          scrolled ? "shadow-2xl py-2.5" : ""
        }`}
      >
        {/* Brand Logo */}
        <a
          href="#top"
          className="group flex items-center text-lg font-bold tracking-tight px-2 text-foreground sm:text-lg"
          style={{ fontFamily: "'Fraunces', serif" }}
        >
          <span>{CONTENT.name}</span>
          <span className="text-primary transition-transform duration-300 group-hover:scale-125">
            {CONTENT.dot}
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden items-center gap-1 md:flex">
          {CONTENT.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Actions: Theme Toggle + CTA */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle dark/light theme"
            className="flex size-9 items-center justify-center rounded-full border border-border bg-secondary/50 text-foreground transition-transform duration-200 hover:scale-105 active:scale-95"
          >
            {theme === "dark" ? (
              <Sun className="size-4 text-primary animate-in spin-in-180 duration-300" />
            ) : (
              <Moon className="size-4 text-primary animate-in spin-in-180 duration-300" />
            )}
          </button>

          <a
            href={CONTENT.ctaHref}
            className="btn-glossy hidden items-center gap-1.5 rounded-full px-5 py-2 text-sm font-semibold tracking-wide sm:inline-flex"
          >
            {CONTENT.cta}
            <ArrowUpRight className="size-4" />
          </a>

          {/* Mobile menu trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex size-9 items-center justify-center rounded-full border border-border bg-secondary/50 text-foreground md:hidden"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-20 left-4 right-4 z-50 flex flex-col gap-2 rounded-3xl p-6 backdrop-blur-2xl md:hidden">
          <ul className="flex flex-col gap-2  ">
            {CONTENT.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block card-glossy rounded-full px-4 py-3 text-base font-medium text-foreground hover:border-primary hover:-translate-y-1 transition"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={CONTENT.ctaHref}
            onClick={() => setMobileMenuOpen(false)}
            className="btn-glossy mt-2 flex items-center justify-center gap-2 rounded-full py-3 text-center text-sm font-semibold"
          >
            {CONTENT.cta}
            <ArrowUpRight className="size-4" />
          </a>
        </div>
      )}
    </header>
  );
}