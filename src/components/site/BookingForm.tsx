import { Calendar } from "lucide-react";
import { whatsappLink } from "@/lib/contact";

const appliances = [
  "AC",
  "Refrigerator",
  "Washing Machine",
  "Dishwasher",
  "Microwave",
  "Geyser",
  "Other",
];

export function BookingForm({ compact = false }: { compact?: boolean }) {
  function handleWhatsAppBooking(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = new FormData(e.currentTarget);

    const name = String(form.get("name") || "").trim();
    const phone = String(form.get("phone") || "").trim();
    const appliance = String(form.get("appliance") || "").trim();
    const problem = String(form.get("problem") || "").trim();

    const message = `
*New Service Booking Request*

👤 Name: ${name}
📞 Phone: ${phone}
🔧 Appliance: ${appliance}
⚠ Problem: ${problem}
    `;

    window.open(whatsappLink(message), "_blank");
  }

  return (
    <form
      onSubmit={handleWhatsAppBooking}
      className={`rounded-3xl border border-border bg-gradient-card shadow-card ${
        compact ? "p-6" : "p-7 md:p-8"
      }`}
    >
      {!compact && (
        <>
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-primary" />
            <h3 className="font-display text-xl font-bold text-navy">
              Book a Service
            </h3>
          </div>
          <p className="mt-1 text-sm text-muted-foreground">
            Fill your details and instantly connect with us on WhatsApp.
          </p>
        </>
      )}

      <div className={`grid gap-4 ${compact ? "" : "mt-5"}`}>
        {/* Name */}
        <div>
          <label className="text-xs font-semibold text-navy">Your Name</label>
          <input
            name="name"
            required
            placeholder="Full Name"
            className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="text-xs font-semibold text-navy">
            Phone Number
          </label>
          <input
            name="phone"
            type="tel"
            required
            placeholder="+91 98765 43210"
            className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>

        {/* Appliance */}
        <div>
          <label className="text-xs font-semibold text-navy">
            Appliance Type
          </label>
          <select
            name="appliance"
            required
            className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
          >
            {appliances.map((a) => (
              <option key={a} value={a}>
                {a}
              </option>
            ))}
          </select>
        </div>

        {/* Problem */}
        <div>
          <label className="text-xs font-semibold text-navy">
            Problem Description
          </label>
          <textarea
            name="problem"
            rows={3}
            placeholder="e.g. AC is not cooling properly"
            className="mt-1.5 w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>
      </div>

      {/* WhatsApp CTA */}
      <button
        type="submit"
        className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-green-700"
      >
        <Calendar className="h-4 w-4" />
        Book on WhatsApp
      </button>

      <p className="mt-3 text-center text-[11px] text-muted-foreground">
        Clicking this button will open WhatsApp with your booking details.
      </p>
    </form>
  );
}
