import { BadgeCheck, Clock, Cog, HandCoins, Home, ShieldCheck } from "lucide-react";

const items = [
  { icon: Clock, title: "Same Day Service", desc: "Book before 6 PM and we'll be at your door today." },
  { icon: BadgeCheck, title: "Expert Technicians", desc: "Background-verified pros with 5+ years of experience." },
  { icon: Cog, title: "Genuine Spare Parts", desc: "Only OEM and brand-approved replacement parts used." },
  { icon: HandCoins, title: "Affordable Pricing", desc: "Transparent quotes — no hidden charges, ever." },
  { icon: ShieldCheck, title: "30-Day Warranty", desc: "Free re-service if the same issue returns within 30 days." },
  { icon: Home, title: "Doorstep Repair", desc: "We diagnose and repair on-site at your home." },
];

export function WhyChooseUs() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">
            Why Choose Us
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-navy md:text-4xl">
            Built on trust, speed & quality
          </h2>
          <p className="mt-3 text-muted-foreground">
            Everything you'd expect from a modern repair service — and a few things you won't.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-card"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-navy">{title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
