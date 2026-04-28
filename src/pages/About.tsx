import { Award, BadgeCheck, HeartHandshake, ShieldCheck, Target, Users } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { EmergencyCTA } from "@/components/site/sections/EmergencyCTA";

const stats = [
  { value: "12,000+", label: "Happy Customers" },
  { value: "8+ yrs", label: "Experience" },
  { value: "50+", label: "Verified Technicians" },
  { value: "4.9 / 5", label: "Average Rating" },
];

const values = [
  { icon: ShieldCheck, title: "Trust First", desc: "Background-verified technicians and transparent pricing — no surprises." },
  { icon: HeartHandshake, title: "Customer Obsessed", desc: "We measure success by happy homes, not invoices." },
  { icon: Target, title: "Speed Matters", desc: "Same-day visits and 60-minute response for emergencies." },
  { icon: Award, title: "Quality Built-in", desc: "Genuine parts, expert workmanship and 30-day service warranty." },
];

const certs = ["ISKCON Verified Pros", "Brand-Authorised Repairs", "GST Registered Business", "Insured Workforce"];

export default function About() {
  return (
    <SiteLayout>
      <section className="bg-gradient-hero py-20 text-navy-foreground md:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs font-semibold backdrop-blur">
            About PuneService
          </span>
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight md:text-5xl">
            Modern appliance repair, the way it should be.
          </h1>
          <p className="mt-4 text-base text-navy-foreground/80 md:text-lg">
            We're on a mission to make home appliance repair fast, transparent and stress-free
            for every household in Pune.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-4 px-4 sm:grid-cols-2 md:grid-cols-4 md:px-6">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-border bg-gradient-card p-6 text-center shadow-soft"
            >
              <div className="font-display text-3xl font-bold text-primary md:text-4xl">{s.value}</div>
              <div className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-2 md:px-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">Our Story</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy md:text-4xl">
              Born from a broken AC and a bad service experience.
            </h2>
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-foreground/80">
              <p>
                In 2017, our founder waited 4 days for a "same-day" AC repair — only to be
                overcharged for a part he didn't need. Frustrated, he set out to build the
                repair service Pune actually deserved.
              </p>
              <p>
                Today, PuneService is trusted by 12,000+ households across Pune & PCMC for fast,
                honest appliance repair. Every technician on our team is background-verified,
                trained on the latest models, and held to one simple standard: <strong>treat
                every home like your own</strong>.
              </p>
            </div>
          </div>

          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">Our Mission</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy md:text-4xl">
              Make every home a happier home.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-foreground/80">
              We're building the most loved appliance repair brand in India — one repair, one
              warm conversation, one delighted customer at a time.
            </p>
            <div className="mt-6 grid gap-2.5">
              {certs.map((c) => (
                <div
                  key={c}
                  className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3"
                >
                  <BadgeCheck className="h-5 w-5 text-whatsapp" />
                  <span className="text-sm font-medium text-navy">{c}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">Our Values</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy md:text-4xl">
              What we stand for
            </h2>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
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

      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-5xl px-4 text-center md:px-6">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">Our Team</span>
          <h2 className="mt-3 font-display text-3xl font-bold text-navy md:text-4xl">
            Real people. Real expertise.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            A 50+ strong team of background-verified technicians, customer support experts and
            ops leaders — all united by one goal: a flawless service experience.
          </p>
          <div className="mt-10 flex justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow">
              <Users className="h-10 w-10" />
            </div>
          </div>
        </div>
      </section>

      <EmergencyCTA />
    </SiteLayout>
  );
}
