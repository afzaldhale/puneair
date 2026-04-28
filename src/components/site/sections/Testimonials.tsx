import { Quote, Star } from "lucide-react";

const reviews = [
  {
    name: "Priya Sharma",
    area: "Wakad, Pune",
    initial: "P",
    color: "oklch(0.7 0.15 30)",
    text: "Booked AC service at 11 AM, technician was at my place by 1 PM. Cleaned and refilled gas — cooling is back to brand new. Genuine pricing.",
  },
  {
    name: "Rohit Mehta",
    area: "Baner, Pune",
    initial: "R",
    color: "oklch(0.6 0.18 260)",
    text: "My fridge stopped cooling overnight. The team came the same day, replaced the compressor, and gave me a 6-month warranty. Highly recommend!",
  },
  {
    name: "Anjali Desai",
    area: "Hinjewadi, Pune",
    initial: "A",
    color: "oklch(0.65 0.18 150)",
    text: "Washing machine drum was making noise. Fixed in 40 minutes, very polite technician, transparent pricing. This is how service should be.",
  },
  {
    name: "Vikas Kulkarni",
    area: "Kothrud, Pune",
    initial: "V",
    color: "oklch(0.65 0.2 50)",
    text: "I've used PuneService 3 times now — AC, fridge and microwave. Always on time, always honest. They've earned a customer for life.",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">
            Customer Stories
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-navy md:text-4xl">
            Loved by 12,000+ Pune homes
          </h2>
          <div className="mt-4 flex items-center justify-center gap-1.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="ml-2 font-semibold text-navy">4.9 / 5</span>
            <span className="text-sm text-muted-foreground">· 3,200+ reviews</span>
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="relative flex flex-col rounded-2xl border border-border bg-gradient-card p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-card"
            >
              <Quote className="h-7 w-7 text-primary/20" />
              <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground/90">"{r.text}"</p>
              <div className="mt-5 flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="mt-3 flex items-center gap-3 border-t border-border pt-4">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-full font-semibold text-white"
                  style={{ background: r.color }}
                >
                  {r.initial}
                </div>
                <div>
                  <div className="text-sm font-semibold text-navy">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.area}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
