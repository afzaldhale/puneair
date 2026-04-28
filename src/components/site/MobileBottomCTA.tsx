import { Calendar, MessageCircle, Phone } from "lucide-react";
import { telLink, whatsappLink } from "@/lib/contact";

export function MobileBottomCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 grid grid-cols-3 border-t border-border bg-background shadow-card md:hidden">
      {/* Call Button */}
      <a
        href={telLink}
        className="flex flex-col items-center justify-center gap-1 py-3 text-xs font-semibold text-navy"
      >
        <Phone className="h-5 w-5 text-primary" />
        Call Now
      </a>

      {/* WhatsApp Button */}
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noreferrer"
        className="flex flex-col items-center justify-center gap-1 bg-whatsapp py-3 text-xs font-semibold text-whatsapp-foreground"
      >
        <MessageCircle className="h-5 w-5" />
        WhatsApp
      </a>

      {/* Book Service Button */}
      <a
        href="/contact"
        className="flex flex-col items-center justify-center gap-1 bg-gradient-primary py-3 text-xs font-semibold text-primary-foreground"
      >
        <Calendar className="h-5 w-5" />
        Book Now
      </a>
    </div>
  );
}
