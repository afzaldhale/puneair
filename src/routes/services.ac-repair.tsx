import { createFileRoute } from "@tanstack/react-router";
import AcRepair from "@/pages/AcRepair";

export const Route = createFileRoute("/services/ac-repair")({
  head: () => ({
    meta: [
      { title: "AC Repair Service in Pune — Same Day | PuneService" },
      { name: "description", content: "Doorstep AC repair in Pune — split, window & inverter ACs. Gas refill, cooling fix, water leakage, installation & deep cleaning. Same-day service." },
      { property: "og:title", content: "AC Repair in Pune — Same Day Doorstep Service" },
      { property: "og:description", content: "Expert AC repair, gas refill & installation across Pune. 30-day warranty." },
    ],
  }),
  component: AcRepair,
});
