import {
  ArrowRight,
  BadgeCheck,
  Calendar,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Wrench,
} from "lucide-react";

import heroImg from "@/assets/hero-technician.jpg";
import { telLink, whatsappLink } from "@/lib/contact";

const trustBadges = [
  { icon: Sparkles, label: "Same Day Service" },
  { icon: BadgeCheck, label: "Verified Technicians" },
  { icon: Wrench, label: "Genuine Parts" },
  { icon: ShieldCheck, label: "Affordable Pricing" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 pb-20 pt-12 md:px-6 md:pb-28 md:pt-16 lg:grid-cols-[1.1fr_1fr] lg:gap-14 lg:pt-20">
        {/* Left Content */}
        <div className="text-navy-foreground animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs font-semibold backdrop-blur">
            <span className="flex h-2 w-2 rounded-full bg-whatsapp animate-pulse" />
            Available now in Pune & PCMC
          </span>

          <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
            Fast & Reliable{" "}
            <span className="bg-gradient-to-r from-white via-white to-primary-foreground/80 bg-clip-text text-transparent">
              Appliance Repair
            </span>{" "}
            at Your Doorstep
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-navy-foreground/80 md:text-lg">
            Expert technicians for AC, Refrigerator, Washing Machine, and
            Dishwasher repairs with same-day doorstep service. Transparent
            pricing. 30-day service warranty.
          </p>

          {/* CTA Buttons */}
          <div className="mt-7 flex flex-wrap gap-3">
            {/* Changed Link → a */}
            <a
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-semibold text-navy shadow-glow transition hover:bg-secondary"
            >
              <Calendar className="h-4 w-4 text-primary" />
              Book Service
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </a>

            <a
              href={telLink}
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>

            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-whatsapp px-5 py-3.5 text-sm font-semibold text-whatsapp-foreground shadow-soft transition hover:opacity-90"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp Us
            </a>
          </div>

          {/* Trust badges */}
          <div className="mt-8 grid grid-cols-2 gap-2.5 sm:grid-cols-4 sm:gap-3">
            {trustBadges.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-xs font-medium text-navy-foreground/90 backdrop-blur"
              >
                <Icon className="h-4 w-4 shrink-0 text-whatsapp" />
                <span>{label}</span>
              </div>
            ))}
          </div>

          {/* Rating */}
          <div className="mt-8 flex items-center gap-4 text-sm text-navy-foreground/80">
            <div className="flex -space-x-2">
              {[
                "oklch(0.7 0.15 30)",
                "oklch(0.7 0.15 150)",
                "oklch(0.7 0.15 260)",
                "oklch(0.7 0.15 50)",
              ].map((c, i) => (
                <div
                  key={i}
                  className="h-9 w-9 rounded-full border-2 border-navy"
                  style={{ background: c }}
                />
              ))}
            </div>

            <div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400"
                  />
                ))}
                <span className="ml-1 font-semibold text-white">4.9</span>
              </div>

              <p className="text-xs text-navy-foreground/70">
                Trusted by 12,000+ customers
              </p>
            </div>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="relative animate-scale-in">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-glow">
            <img
              src={heroImg}
              alt="Verified technician repairing appliance"
              width={1024}
              height={1024}
              className="aspect-square w-full object-cover md:aspect-[4/5]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
          </div>

          {/* Floating Cards */}
          <div className="absolute -left-4 top-8 hidden rounded-2xl bg-white p-3.5 shadow-card animate-float md:flex md:items-center md:gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-whatsapp/15">
              <BadgeCheck className="h-5 w-5 text-whatsapp" />
            </div>

            <div>
              <div className="text-xs font-semibold text-navy">
                Verified Pro
              </div>
              <div className="text-[10px] text-muted-foreground">
                5+ years experience
              </div>
            </div>
          </div>

          <div className="absolute -bottom-4 right-2 hidden rounded-2xl bg-white p-3.5 shadow-card md:flex md:items-center md:gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
              <Sparkles className="h-5 w-5 text-primary" />
            </div>

            <div>
              <div className="text-xs font-semibold text-navy">
                Arrives in 60 min
              </div>
              <div className="text-[10px] text-muted-foreground">
                Same-day service
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
