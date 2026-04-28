import { createFileRoute } from "@tanstack/react-router";
import WashingMachineRepair from "@/pages/WashingMachineRepair";

export const Route = createFileRoute("/services/washing-machine-repair")({
  head: () => ({
    meta: [
      { title: "Washing Machine Repair in Pune — Same Day | PuneService" },
      { name: "description", content: "Front load, top load & semi-automatic washing machine repair in Pune. Motor, drum, drainage and PCB issues fixed same-day at your doorstep." },
      { property: "og:title", content: "Washing Machine Repair in Pune — PuneService" },
      { property: "og:description", content: "Same-day washing machine repair by certified technicians across Pune." },
    ],
  }),
  component: WashingMachineRepair,
});
