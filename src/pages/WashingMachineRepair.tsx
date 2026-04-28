import { ServiceDetail } from "@/components/site/ServiceDetail";

export default function WashingMachineRepair() {
  return (
    <ServiceDetail
      slug="washer"
      title="Washing Machine Repair in Pune"
      tagline="Clean clothes, no compromise."
      description="From IFB and Bosch front loaders to LG and Samsung top loaders — our techs handle every brand and type with precision and genuine parts."
      problems={[
        "Drum not spinning",
        "Water not draining",
        "Excess vibration / noise",
        "Door / lid not opening",
        "Motor or belt issue",
        "PCB / display fault",
        "Water inlet / fill issue",
        "Detergent dispenser blocked",
        "Installation & uninstallation",
      ]}
      faqs={[
        { q: "What's the average cost of washing machine repair?", a: "Visit & diagnosis is upfront. Most repairs range ₹400–₹2,500 depending on the part — quoted transparently before work begins." },
        { q: "Do you service all types of washers?", a: "Yes — fully automatic top load, front load, and semi-automatic machines." },
        { q: "Will you bring spare parts?", a: "Common parts are carried by our technicians. Specialised parts are sourced within 24 hours." },
      ]}
    />
  );
}
