import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { BookingForm } from "@/components/site/BookingForm";
import { ADDRESS, EMAIL, PHONE_DISPLAY, telLink, whatsappLink } from "@/lib/contact";

export default function Contact() {
  return (
    <SiteLayout>
      <section className="bg-gradient-hero py-20 text-navy-foreground md:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs font-semibold backdrop-blur">
            We reply in 10 minutes
          </span>
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight md:text-5xl">
            Let's get your appliance fixed today.
          </h1>
          <p className="mt-4 text-base text-navy-foreground/80 md:text-lg">
            Pick the channel you prefer — call, WhatsApp, or fill in the form.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 md:px-6 lg:grid-cols-[1fr_1.1fr]">
          <div className="space-y-4">
            <a
              href={telLink}
              className="flex items-center gap-4 rounded-2xl border border-border bg-gradient-card p-5 shadow-soft transition hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-card"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Call us</div>
                <div className="font-display text-lg font-bold text-navy">{PHONE_DISPLAY}</div>
              </div>
            </a>

            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-border bg-gradient-card p-5 shadow-soft transition hover:-translate-y-0.5 hover:border-whatsapp hover:shadow-card"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-whatsapp text-whatsapp-foreground">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">WhatsApp</div>
                <div className="font-display text-lg font-bold text-navy">Chat with us</div>
              </div>
            </a>

            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center gap-4 rounded-2xl border border-border bg-gradient-card p-5 shadow-soft transition hover:-translate-y-0.5 hover:border-primary/40"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Email</div>
                <div className="font-display text-base font-bold text-navy">{EMAIL}</div>
              </div>
            </a>

            <div className="flex items-start gap-4 rounded-2xl border border-border bg-gradient-card p-5 shadow-soft">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Office</div>
                <div className="text-sm font-medium text-navy">{ADDRESS}</div>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border border-border bg-gradient-card p-5 shadow-soft">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Working Hours</div>
                <div className="text-sm font-medium text-navy">Mon – Sun · 7:00 AM – 11:00 PM</div>
                <div className="text-xs text-muted-foreground">24×7 Emergency Service</div>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-border shadow-soft">
              <iframe
                title="PuneService Pune Office"
                src="https://www.google.com/maps?q=Wakad,+Pune,+Maharashtra&output=embed"
                className="h-64 w-full"
                loading="lazy"
              />
            </div>
          </div>

          <div>
            <BookingForm />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
