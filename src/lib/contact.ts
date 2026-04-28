export const PHONE = "+919890642540";
export const PHONE_DISPLAY = "+91 98906 42540";
export const WHATSAPP = "919890642540";
export const EMAIL = "support@puneairservice.in";
export const ADDRESS = "Kondhwa, Pune, Maharashtra";
export const BRAND = "PuneAirService";
export const BRAND_TAGLINE = "Fast Appliance Repair | AC, Fridge & Washing Machine";

export function whatsappLink(message = "Hi, I need an appliance repair service.") {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;
}
export const telLink = `tel:${PHONE}`;
