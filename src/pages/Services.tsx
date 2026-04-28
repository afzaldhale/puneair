import { Link } from "@tanstack/react-router";
import { AirVent, ArrowRight, Refrigerator, Settings, Sparkles, Thermometer, WashingMachine, Wrench, Zap } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { EmergencyCTA } from "@/components/site/sections/EmergencyCTA";

const main = [
  {
    icon: AirVent, to: "/services/ac-repair", title: "AC Repair",
    desc: "Window, split & inverter AC repair, gas refill & deep cleaning.",
  },
  {
    icon: Refrigerator, to: "/services/refrigerator-repair", title: "Refrigerator Repair",
    desc: "Single, double & side-by-side door fridge — compressor, gas, sensors.",
  },
  {
    icon: WashingMachine, to: "/services/washing-machine-repair", title: "Washing Machine Repair",
    desc: "Front load, top load, semi-automatic — drum, motor & PCB issues.",
  },
];

const more = [
  { icon: Settings, title: "Installation", desc: "Brand-new appliance installation by certified pros." },
  { icon: Wrench, title: "Maintenance & AMC", desc: "Annual maintenance plans to keep appliances running like new." },
  { icon: Thermometer, title: "Gas Refilling", desc: "AC & fridge gas top-up with leak detection & pressure testing." },
  { icon: Sparkles, title: "Deep Cleaning", desc: "Professional AC deep cleaning for better cooling and air quality." },
  { icon: Zap, title: "Emergency Repair", desc: "24×7 urgent breakdown response — technician in 60 minutes." },
];

export default function Services() {
  return (
    <SiteLayout>
      <section className="bg-gradient-hero py-20 text-navy-foreground md:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs font-semibold backdrop-blur">
            Our Services
          </span>
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight md:text-5xl">
            Everything your home appliances need — under one roof.
          </h1>
          <p className="mt-4 text-base text-navy-foreground/80 md:text-lg">
            Repair, installation, maintenance and emergency support — by Pune's most trusted technicians.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <h2 className="font-display text-2xl font-bold text-navy md:text-3xl">Repair Services</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {main.map(({ icon: Icon, to, title, desc }) => (
              <Link
                key={title}
                to={to}
                className="group rounded-3xl border border-border bg-gradient-card p-7 shadow-soft transition hover:-translate-y-1 hover:shadow-card"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-navy">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition group-hover:gap-2.5">
                  View details <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>

          <h2 className="mt-20 font-display text-2xl font-bold text-navy md:text-3xl">
            Additional Services
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {more.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-card"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-navy">{title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <EmergencyCTA />
    </SiteLayout>
  );
}
