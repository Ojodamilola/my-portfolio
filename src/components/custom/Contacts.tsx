import { Mail, ArrowUpRight, Sparkles, MessageSquare } from "lucide-react";
import { FaWhatsapp, FaTwitter, FaPhoneAlt, FaGithub, } from "react-icons/fa";
import { SiGmail, SiX } from "react-icons/si";

const CONTENT = {
  eyebrow: "Get in Touch",
  heading: "Have an ambitious project in mind?",
  blurb:
    "Whether you're looking to build a new product from scratch, refine an existing design system, or consult on frontend performance, my inbox and channels are open.",
  email: "damilola@example.com",
  status: "Usually responds within 24 hours",
  directChannels: [
    {
      title: "WhatsApp Me",
      icon: FaWhatsapp,
      href: "https://wa.me/2347068323463?text=Hi%20Damilola,%20I'd%20like%20to%20discuss%20a%20project",
      iconColor: "#25D366",
      actionText: "Chat directly",
    },
    {
      title: "Call Me Directly",
      icon: FaPhoneAlt,
      href: "tel:+2347068323463",
      iconColor: "var(--primary)",
      actionText: "Voice call",
    },
    {
      title: "DM on X",
      icon: SiX,
      href: "https://x.com",
      iconColor: "currentColor",
      actionText: "Direct message",
    },
    {
      title: "Mail on Gmail",
      icon: SiGmail,
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=dammy3114@gmail.com",
      iconColor: "#EA4335",
      actionText: "Open compose",
    },
  ],
  socials: [
    { icon: FaGithub, label: "GitHub", href: "https://github.com/Ojodamilola" },
    // { icon: FaLinkedin, label: "LinkedIn", href: "https://linkedin.com" },
    { icon: FaTwitter, label: "X / Twitter", href: "https://x.com/Damilolabless" },
  ],
};

export default function Contact() {
  return (
    <section id="contact" className="relative px-4 py-20 md:py-28">
      <div className="mx-auto max-w-4xl">
        <div className="card-glossy relative overflow-hidden rounded-4xl p-8 text-center sm:p-12 lg:p-16">
          {/* Subtle decorative glow */}
          <div className="pointer-events-none absolute top-0 left-1/2 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-3.5 py-1 text-xs font-semibold tracking-wider text-primary uppercase">
            <Sparkles className="size-3.5" />
            <span>{CONTENT.eyebrow}</span>
          </div>

          <h2
            className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            {CONTENT.heading}
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {CONTENT.blurb}
          </p>

          {/* Main Primary Button (Preserved) */}
          <div className="mt-10 flex flex-col items-center justify-center gap-3">
            <a
              href={`mailto:${CONTENT.email}`}
              className="btn-glossy inline-flex items-center gap-3 rounded-full px-8 py-4 text-base font-semibold tracking-wide shadow-xl"
            >
              <Mail className="size-5" />
              <span>{CONTENT.email}</span>
              <ArrowUpRight className="size-4" />
            </a>

            <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
              <MessageSquare className="size-3.5 text-primary" />
              <span>{CONTENT.status}</span>
            </div>
          </div>

          {/* 4 Direct Contact Options as Compact 1-Line Divs */}
          <div className="mx-auto mt-10 grid max-w-2xl gap-3 sm:grid-cols-2">
            {CONTENT.directChannels.map((channel) => {
              const Icon = channel.icon;
              return (
                <a
                  key={channel.title}
                  href={channel.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-glossy group flex items-center justify-between rounded-full px-4 py-3 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 active:translate-y-0.5"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-border bg-secondary/50 transition-transform duration-200 ">
                      <Icon className="size-4" style={{ color: channel.iconColor }} />
                    </span>
                    <span className="text-sm font-semibold text-foreground whitespace-nowrap">
                      {channel.title}
                    </span>
                  </div>

                  <div className="flex items-center gap-1 text-xs font-medium text-muted-foreground transition-colors group-hover:text-primary">
                    <span className="hidden xs:inline text-[11px]">{channel.actionText}</span>
                    <ArrowUpRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </a>
              );
            })}
          </div>

          {/* Social Links */}
          <div className="mt-12 flex justify-center gap-4 border-t border-border/70 pt-8">
            {CONTENT.socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="card-glossy flex size-11 items-center justify-center rounded-2xl text-foreground transition-all duration-200 hover:-translate-y-1 hover:text-primary active:translate-y-0.5"
                >
                  <Icon className="size-4.5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
