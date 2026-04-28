import { ServiceDetail } from "@/components/site/ServiceDetail";

export default function RefrigeratorRepair() {
  return (
    <ServiceDetail
      slug="fridge"
      title="Refrigerator Repair in Pune"
      tagline="Save your food, save your day."
      description="Whether it's a single-door, double-door or side-by-side, our experts fix cooling, compressor, gas leaks and noise issues at your doorstep with genuine parts."
      problems={[
        "Fridge not cooling",
        "Freezer overcooling / icing",
        "Compressor not running",
        "Gas refill & leak fixing",
        "Strange noise or vibration",
        "Water leakage",
        "Door seal / hinge issues",
        "Display panel not working",
        "Smelly fridge cleaning",
      ]}
      faqs={[
        { q: "Why is my fridge not cooling but the light is on?", a: "Usually a thermostat, compressor or gas issue. Our technician diagnoses on-site and quotes transparently." },
        { q: "Do you handle double-door & side-by-side fridges?", a: "Yes, we service all configurations including French-door and bottom-mount freezers." },
        { q: "Is there a warranty on repairs?", a: "Yes — 30-day service warranty + 3–6 months on replaced parts." },
      ]}
    />
  );
}
