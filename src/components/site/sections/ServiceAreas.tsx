import { MapPin } from "lucide-react";

const areas = [
  "Pune City", "Pimpri", "Chinchwad", "Wakad", "Baner", "Hinjewadi",
  "Kothrud", "Hadapsar", "Aundh", "Viman Nagar", "Kharadi", "Magarpatta",
  "Kalyani Nagar", "Koregaon Park", "Pashan", "Bavdhan", "Warje", "Katraj",
];

export function ServiceAreas() {
  return (
    <section className="border-y border-border bg-secondary py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">
            Service Areas
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-navy md:text-4xl">
            Covering all of Pune & PCMC
          </h2>
          <p className="mt-3 text-muted-foreground">
            Same-day appliance repair across 18+ neighbourhoods. Don't see yours? Just call — we probably cover it.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-2.5">
          {areas.map((a) => (
            <div
              key={a}
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-navy shadow-soft transition hover:-translate-y-0.5 hover:border-primary hover:text-primary"
            >
              <MapPin className="h-3.5 w-3.5 text-primary" />
              {a}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
