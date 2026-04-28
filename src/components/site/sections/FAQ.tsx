import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How quickly can a technician reach my home?",
    a: "For most areas in Pune & PCMC, our nearest technician arrives within 60–120 minutes of booking. For non-emergency requests, we offer same-day or next-day visits at your preferred time slot.",
  },
  {
    q: "Do you provide a warranty on repairs?",
    a: "Yes — every repair comes with a 30-day service warranty on the work performed. Replaced parts carry an additional 3–6 month warranty depending on the part.",
  },
  {
    q: "Which appliance brands do you repair?",
    a: "We service all major brands including LG, Samsung, Whirlpool, IFB, Voltas, Daikin, Hitachi, Godrej, Bosch, Bluestar, Panasonic, Haier and more.",
  },
  {
    q: "Is same-day service available on weekends?",
    a: "Yes, we operate 7 days a week — Monday to Sunday, 7 AM to 11 PM. For emergency breakdowns we offer 24×7 service.",
  },
  {
    q: "How is the price decided?",
    a: "A small visit & diagnosis fee is charged upfront. Once the technician inspects the appliance, you receive a transparent quote — no hidden charges. You only pay if you approve the repair.",
  },
  {
    q: "Do you use genuine spare parts?",
    a: "Absolutely. We only use OEM or brand-approved replacement parts, and provide a bill for every part replaced.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">
            FAQs
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-navy md:text-4xl">
            Quick answers to common questions
          </h2>
        </div>

        <div className="mt-10 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className={`overflow-hidden rounded-2xl border bg-card shadow-soft transition ${
                  isOpen ? "border-primary/40" : "border-border"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="font-display text-base font-semibold text-navy md:text-lg">
                    {f.q}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-primary transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
