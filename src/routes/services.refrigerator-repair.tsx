import { createFileRoute } from "@tanstack/react-router";
import RefrigeratorRepair from "@/pages/RefrigeratorRepair";

export const Route = createFileRoute("/services/refrigerator-repair")({
  head: () => ({
    meta: [
      { title: "Refrigerator Repair in Pune — Same Day | PuneService" },
      { name: "description", content: "Doorstep fridge repair in Pune — single, double, side-by-side door. Compressor, gas, cooling, noise and sensor issues fixed same-day." },
      { property: "og:title", content: "Refrigerator Repair in Pune — PuneService" },
      { property: "og:description", content: "Same-day fridge repair by verified technicians. All brands, transparent pricing." },
    ],
  }),
  component: RefrigeratorRepair,
});
