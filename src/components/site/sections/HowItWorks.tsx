import { CalendarCheck, CheckCircle2, Truck, UserCog } from "lucide-react";

const steps = [
  { icon: CalendarCheck, title: "Book Service", desc: "Call, WhatsApp or use our 30-second booking form." },
  { icon: UserCog, title: "Technician Assigned", desc: "We match you with a verified expert for your appliance." },
  { icon: Truck, title: "Doorstep Visit", desc: "Technician arrives on time with all required tools & parts." },
  { icon: CheckCircle2, title: "Issue Fixed", desc: "Pay only after the job is done — backed by 30-day warranty." },
];

export function HowItWorks() {
  return (
    <section className="relative bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">
            How It Works
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-navy md:text-4xl">
            Repair done in 4 simple steps
          </h2>
        </div>

        <div className="relative mt-14">
          {/* connecting line */}
          <div className="absolute left-8 top-8 hidden h-[calc(100%-4rem)] w-px bg-gradient-to-b from-primary/40 via-primary/10 to-transparent md:left-1/2 md:top-10 md:h-px md:w-[80%] md:-translate-x-1/2 md:bg-gradient-to-r md:from-transparent md:via-primary/30 md:to-transparent lg:block" />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map(({ icon: Icon, title, desc }, idx) => (
              <div
                key={title}
                className="relative rounded-2xl border border-border bg-card p-6 shadow-soft"
              >
                <div className="absolute -top-3 right-5 rounded-full bg-gradient-primary px-2.5 py-0.5 text-[10px] font-bold text-primary-foreground shadow-glow">
                  STEP {idx + 1}
                </div>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-navy">{title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
