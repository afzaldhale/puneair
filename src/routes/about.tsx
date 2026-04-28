import { createFileRoute } from "@tanstack/react-router";
import About from "@/pages/About";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About PuneService — Pune's Trusted Appliance Repair Team" },
      { name: "description", content: "PuneService is Pune's modern doorstep appliance repair service. Verified technicians, 12,000+ happy customers and 8+ years of experience across AC, fridge & washing machine repairs." },
      { property: "og:title", content: "About PuneService — Modern Appliance Repair, Pune" },
      { property: "og:description", content: "Verified technicians, transparent pricing and 12,000+ happy Pune homes served." },
    ],
  }),
  component: About,
});
