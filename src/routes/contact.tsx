import { createFileRoute } from "@tanstack/react-router";
import Contact from "@/pages/Contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact PuneService — Book Appliance Repair in Pune" },
      { name: "description", content: "Contact PuneService for same-day appliance repair in Pune. Call, WhatsApp or book online — our team replies within 10 minutes." },
      { property: "og:title", content: "Contact PuneService — Pune Appliance Repair" },
      { property: "og:description", content: "Call, WhatsApp or book online for same-day repair across Pune & PCMC." },
    ],
  }),
  component: Contact,
});
