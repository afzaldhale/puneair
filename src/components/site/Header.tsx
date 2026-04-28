import { useEffect, useState } from "react";
import { Menu, Phone, X, MessageCircle, Wrench } from "lucide-react";
import { BRAND, PHONE_DISPLAY, telLink, whatsappLink } from "@/lib/contact";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "glass-light shadow-soft border-b border-border/60"
          : "bg-background/0 border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6 md:py-4">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-primary shadow-glow">
            <Wrench className="h-5 w-5 text-primary-foreground" />
          </div>

          <div className="leading-tight">
            <div className="font-display text-lg font-bold text-navy">
              {BRAND}
            </div>

            <div className="hidden text-[10px] font-medium uppercase tracking-wider text-muted-foreground sm:block">
              Appliance Repair
            </div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => (
            <a
              key={l.to}
              href={l.to}
              className="rounded-lg px-4 py-2 text-sm font-medium text-foreground/80 transition hover:bg-secondary hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA Buttons */}
        <div className="hidden items-center gap-2 md:flex">
          <a
            href={telLink}
            className="hidden items-center gap-2 rounded-xl border border-border bg-background px-3.5 py-2 text-sm font-semibold text-navy transition hover:border-primary hover:text-primary lg:flex"
          >
            <Phone className="h-4 w-4" />
            {PHONE_DISPLAY}
          </a>

          <a
            href={whatsappLink()}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-xl bg-whatsapp px-3.5 py-2 text-sm font-semibold text-whatsapp-foreground shadow-soft transition hover:opacity-90"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>

          <a
            href="/contact"
            className="flex items-center gap-2 rounded-xl bg-gradient-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-glow transition hover:opacity-95"
          >
            Book Service
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
            {navLinks.map((l) => (
              <a
                key={l.to}
                href={l.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-secondary"
              >
                {l.label}
              </a>
            ))}

            <a
              href={telLink}
              className="mt-2 flex items-center gap-2 rounded-lg border border-border px-3 py-2.5 text-sm font-semibold"
            >
              <Phone className="h-4 w-4 text-primary" />
              {PHONE_DISPLAY}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
