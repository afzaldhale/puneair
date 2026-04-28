import { createFileRoute } from "@tanstack/react-router";
import Home from "@/pages/Home";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PuneService — AC, Fridge & Washing Machine Repair in Pune" },
      { name: "description", content: "Same-day doorstep appliance repair in Pune & PCMC. Expert technicians for AC, refrigerator and washing machine. Genuine parts. 30-day warranty. Book in 30 seconds." },
      { property: "og:title", content: "PuneService — Trusted Appliance Repair at Your Doorstep" },
      { property: "og:description", content: "Same-day AC, fridge & washing machine repair across Pune. Verified technicians. Transparent pricing." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Home,
});
