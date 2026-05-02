import { AlertTriangle, MessageCircle, Phone } from "lucide-react";
import { PHONE_DISPLAY, telLink, whatsappLink } from "@/lib/contact";

export function EmergencyCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-emergency py-20 md:py-24">
      <div className="pointer-events-none absolute -left-20 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-destructive/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-0 h-80 w-80 rounded-full bg-primary/30 blur-3xl" />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center px-4 text-center text-navy-foreground md:px-6">
        <span className="inline-flex items-center gap-2 rounded-full border border-destructive/30 bg-destructive/15 px-3.5 py-1.5 text-xs font-semibold text-white">
          <AlertTriangle className="h-3.5 w-3.5" />
          24x7 Emergency Service
        </span>
        <h2 className="mt-5 font-display text-3xl font-bold leading-tight md:text-5xl">
          Appliance broke down?{" "}
          <span className="bg-gradient-to-r from-white to-primary-foreground/70 bg-clip-text text-transparent">
            We&apos;re 60 minutes away.
          </span>
        </h2>
        <p className="mt-4 max-w-2xl text-base text-navy-foreground/80 md:text-lg">
          Call now or message us on WhatsApp - our nearest technician will be
          dispatched within the hour for urgent AC, fridge, washing machine, or
          dishwasher breakdowns.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href={telLink}
            className="group inline-flex items-center gap-3 rounded-2xl bg-white px-6 py-4 text-base font-bold text-navy shadow-emergency transition hover:scale-105"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Phone className="h-5 w-5" />
            </span>
            <span className="text-left">
              <span className="block text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                Call us now
              </span>
              <span className="block text-base">{PHONE_DISPLAY}</span>
            </span>
          </a>
          <a
            href={whatsappLink("Hi, I have an emergency appliance repair request.")}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl bg-whatsapp px-6 py-4 text-base font-bold text-whatsapp-foreground shadow-glow transition hover:scale-105"
          >
            <MessageCircle className="h-5 w-5" />
            WhatsApp Instantly
          </a>
        </div>
      </div>
    </section>
  );
}
