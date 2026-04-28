import { Link } from "@tanstack/react-router";
import {
  Mail,
  MapPin,
  Phone,
  Wrench,
  Clock,
  Globe,
  Send,
  AtSign,
} from "lucide-react";
import {
  ADDRESS,
  BRAND,
  EMAIL,
  PHONE_DISPLAY,
  telLink,
  whatsappLink,
} from "@/lib/contact";

export function Footer() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-20">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-primary">
                <Wrench className="h-5 w-5 text-primary-foreground" />
              </div>
              <div className="font-display text-xl font-bold">{BRAND}</div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-navy-foreground/70">
              Pune's most trusted home appliance repair service. Same-day
              doorstep repair for AC, refrigerator and washing machine — by
              verified expert technicians.
            </p>
            <div className="mt-5 flex gap-2">
              {[Globe, Send, AtSign].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 transition hover:border-primary hover:bg-primary/10"
                  aria-label="Social link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-navy-foreground/90">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm text-navy-foreground/70">
              {[
                ["AC Repair", "/services/ac-repair"],
                ["Refrigerator Repair", "/services/refrigerator-repair"],
                ["Washing Machine Repair", "/services/washing-machine-repair"],
                ["Installation", "/services"],
                ["Gas Refilling", "/services"],
                ["Emergency Service", "/contact"],
              ].map(([label, to]) => (
                <li key={label}>
                  <Link to={to} className="transition hover:text-white">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-navy-foreground/90">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm text-navy-foreground/70">
              <li>
                <Link to="/about" className="transition hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="transition hover:text-white">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="transition hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/contact" className="transition hover:text-white">
                  Book a Service
                </Link>
              </li>
            </ul>
            <h4 className="mt-6 mb-3 text-sm font-semibold uppercase tracking-wider text-navy-foreground/90">
              Working Hours
            </h4>
            <p className="flex items-start gap-2 text-sm text-navy-foreground/70">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              Mon – Sun: 7:00 AM – 11:00 PM
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-navy-foreground/90">
              Get in Touch
            </h4>
            <ul className="space-y-3 text-sm text-navy-foreground/80">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a href={telLink} className="hover:text-white">
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a href={`mailto:${EMAIL}`} className="hover:text-white">
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{ADDRESS}</span>
              </li>
            </ul>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-whatsapp px-4 py-2.5 text-sm font-semibold text-whatsapp-foreground shadow-soft hover:opacity-90"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-navy-foreground/60 md:flex-row">
          <p>
            © {new Date().getFullYear()} {BRAND}. All rights reserved.
          </p>
          <p>Crafted with care in Pune, India.</p>
        </div>
      </div>
    </footer>
  );
}
