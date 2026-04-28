import {
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  Phone,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";

import { SiteLayout } from "@/components/site/SiteLayout";
import { BookingForm } from "@/components/site/BookingForm";
import { EmergencyCTA } from "@/components/site/sections/EmergencyCTA";
import { telLink, whatsappLink } from "@/lib/contact";

interface Props {
  slug: "ac" | "fridge" | "washer";
  title: string;
  tagline: string;
  description: string;
  problems: string[];
  faqs: { q: string; a: string }[];
}

export function ServiceDetail({
  title,
  tagline,
  description,
  problems,
  faqs,
}: Props) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <SiteLayout>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-16 text-navy-foreground md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 md:px-6 lg:grid-cols-[1.2fr_1fr]">
          <div>
            {/* Changed Link → a */}
            <a
              href="/services"
              className="inline-flex items-center gap-1 text-xs font-semibold text-navy-foreground/70 hover:text-white"
            >
              ← All Services
            </a>

            <h1 className="mt-3 font-display text-4xl font-bold leading-tight md:text-5xl">
              {title}
            </h1>

            <p className="mt-3 text-xl font-medium text-primary-foreground/90">
              {tagline}
            </p>

            <p className="mt-5 max-w-xl text-base text-navy-foreground/80">
              {description}
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={telLink}
                className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-semibold text-navy shadow-glow"
              >
                <Phone className="h-4 w-4 text-primary" />
                Call Now
              </a>

              <a
                href={whatsappLink(`Hi, I'd like to book ${title}.`)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-whatsapp px-5 py-3.5 text-sm font-semibold text-whatsapp-foreground"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </div>

          <div>
            <BookingForm />
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">
            What We Fix
          </span>

          <h2 className="mt-3 font-display text-3xl font-bold text-navy md:text-4xl">
            Common problems we solve
          </h2>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {problems.map((p) => (
              <div
                key={p}
                className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5 shadow-soft transition hover:-translate-y-0.5 hover:border-primary/40"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-whatsapp" />
                <span className="text-sm font-medium text-navy">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-secondary py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">
            FAQs
          </span>

          <h2 className="mt-3 font-display text-3xl font-bold text-navy md:text-4xl">
            Things customers ask
          </h2>

          <div className="mt-8 space-y-3">
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
                    <span className="font-display text-base font-semibold text-navy">
                      {f.q}
                    </span>

                    <ChevronDown
                      className={`h-5 w-5 text-primary transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
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

          {/* Changed Link → a */}
          <div className="mt-10 flex justify-center">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow"
            >
              Get a Free Quote
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <EmergencyCTA />
    </SiteLayout>
  );
}
