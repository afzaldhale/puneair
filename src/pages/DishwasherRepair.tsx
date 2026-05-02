import { ServiceDetail } from "@/components/site/ServiceDetail";

export default function DishwasherRepair() {
  return (
    <ServiceDetail
      slug="dishwasher"
      title="Dishwasher Repair in Pune"
      tagline="Clean dishes without the breakdown stress."
      description="We provide doorstep dishwasher repair for all major brands in Pune. Our technicians handle cleaning issues, drainage faults, leaks, wash cycle failures, and installation support with transparent pricing."
      problems={[
        "Dishes not getting cleaned properly",
        "Water not draining out",
        "Dishwasher leaking water",
        "Machine not starting",
        "Door latch or lock issues",
        "Spray arm not rotating",
        "Unusual noise during wash cycle",
        "Heating or drying problem",
        "Installation and uninstallation",
      ]}
      faqs={[
        {
          q: "Do you repair built-in and freestanding dishwashers?",
          a: "Yes. We service both built-in and freestanding dishwasher models from major brands.",
        },
        {
          q: "What if my dishwasher is not draining?",
          a: "This is commonly caused by a blocked filter, drain pump issue, or hose blockage. We diagnose the exact fault on-site and fix it safely.",
        },
        {
          q: "Can you help with dishwasher installation too?",
          a: "Yes. We handle installation, reinstallation, and basic setup checks along with repair visits when needed.",
        },
      ]}
    />
  );
}
