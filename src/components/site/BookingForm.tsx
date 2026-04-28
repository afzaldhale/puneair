import { useState } from "react";
import { Calendar, CheckCircle2, Loader2 } from "lucide-react";
import { whatsappLink } from "@/lib/contact";

const appliances = ["AC", "Refrigerator", "Washing Machine", "Microwave", "Geyser", "Other"];

export function BookingForm({ compact = false }: { compact?: boolean }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") || "").trim().slice(0, 100);
    const phone = String(form.get("phone") || "").trim().slice(0, 15);
    const appliance = String(form.get("appliance") || "");
    const problem = String(form.get("problem") || "").trim().slice(0, 500);

    const message = `New Service Booking%0A%0AName: ${name}%0APhone: ${phone}%0AAppliance: ${appliance}%0AProblem: ${problem}`;
    setTimeout(() => {
      window.open(whatsappLink(decodeURIComponent(message)), "_blank");
      setSubmitted(true);
      setLoading(false);
    }, 600);
  }

  if (submitted) {
    return (
      <div className="rounded-3xl border border-border bg-gradient-card p-8 text-center shadow-card">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-whatsapp/15">
          <CheckCircle2 className="h-8 w-8 text-whatsapp" />
        </div>
        <h3 className="mt-4 font-display text-xl font-bold text-navy">Booking received!</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          We've also opened WhatsApp so you can confirm your details. Our team will call you within 10 minutes.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`rounded-3xl border border-border bg-gradient-card shadow-card ${
        compact ? "p-6" : "p-7 md:p-8"
      }`}
    >
      {!compact && (
        <>
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-primary" />
            <h3 className="font-display text-xl font-bold text-navy">Book a service</h3>
          </div>
          <p className="mt-1 text-sm text-muted-foreground">We'll call you within 10 minutes.</p>
        </>
      )}

      <div className={`grid gap-4 ${compact ? "" : "mt-5"}`}>
        <div>
          <label className="text-xs font-semibold text-navy">Your Name</label>
          <input
            name="name"
            required
            maxLength={100}
            placeholder="Full name"
            className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>
        <div>
          <label className="text-xs font-semibold text-navy">Phone Number</label>
          <input
            name="phone"
            type="tel"
            required
            pattern="[0-9+\s-]{10,15}"
            maxLength={15}
            placeholder="+91 98765 43210"
            className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>
        <div>
          <label className="text-xs font-semibold text-navy">Appliance Type</label>
          <select
            name="appliance"
            required
            className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
          >
            {appliances.map((a) => (
              <option key={a} value={a}>{a}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-xs font-semibold text-navy">Problem Description</label>
          <textarea
            name="problem"
            rows={3}
            maxLength={500}
            placeholder="e.g. AC is not cooling properly"
            className="mt-1.5 w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-primary px-5 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition hover:opacity-95 disabled:opacity-70"
      >
        {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Calendar className="h-4 w-4" />}
        Book Now
      </button>

      <p className="mt-3 text-center text-[11px] text-muted-foreground">
        By submitting, you agree to be contacted via call or WhatsApp.
      </p>
    </form>
  );
}
