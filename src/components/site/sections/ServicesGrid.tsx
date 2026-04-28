import { Link } from "@tanstack/react-router";
import { AirVent, ArrowRight, Refrigerator, WashingMachine } from "lucide-react";

const services = [
  {
    icon: AirVent,
    title: "AC Repair",
    desc: "Cooling, gas refill, installation & water leakage fixes for all brands.",
    points: ["Cooling issue", "Gas refill", "Installation", "Water leakage"],
    to: "/services/ac-repair",
    accent: "from-sky-500/15 to-primary/15",
  },
  {
    icon: Refrigerator,
    title: "Refrigerator Repair",
    desc: "Compressor, cooling, noise & gas refill for single & double door fridges.",
    points: ["Cooling issue", "Compressor repair", "Noise issue", "Gas refill"],
    to: "/services/refrigerator-repair",
    accent: "from-emerald-500/15 to-teal-500/15",
  },
  {
    icon: WashingMachine,
    title: "Washing Machine",
    desc: "Motor, drum, drainage & installation — front & top load specialists.",
    points: ["Motor issue", "Drum issue", "Water drainage", "Installation"],
    to: "/services/washing-machine-repair",
    accent: "from-violet-500/15 to-primary/15",
  },
] as const;

export function ServicesGrid() {
  return (
    <section className="relative bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">
            Our Services
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-navy md:text-4xl">
            Expert care for every appliance
          </h2>
          <p className="mt-3 text-muted-foreground">
            Doorstep diagnosis, transparent pricing and same-day repair across Pune & PCMC.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map(({ icon: Icon, title, desc, points, to, accent }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-3xl border border-border bg-gradient-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
            >
              <div
                className={`absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br ${accent} blur-2xl transition group-hover:scale-110`}
              />
              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-navy">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{desc}</p>

                <ul className="mt-5 space-y-2">
                  {points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm text-foreground/80">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {p}
                    </li>
                  ))}
                </ul>

                <Link
                  to={to}
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition hover:gap-2.5"
                >
                  Book Now <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
