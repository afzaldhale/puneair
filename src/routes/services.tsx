import { createFileRoute } from "@tanstack/react-router";
import Services from "@/pages/Services";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services — Appliance Repair in Pune | PuneService" },
      { name: "description", content: "Full list of appliance services — AC repair, refrigerator repair, washing machine repair, installation, gas refilling and emergency support across Pune." },
      { property: "og:title", content: "Appliance Repair Services in Pune | PuneService" },
      { property: "og:description", content: "AC, fridge & washing machine repair, installation, maintenance & gas refilling." },
    ],
  }),
  component: Services,
});
