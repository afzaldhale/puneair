import { ServiceDetail } from "@/components/site/ServiceDetail";

export default function ACRepair() {
  return (
    <ServiceDetail
      slug="ac"
      title="AC Repair in Pune"
      tagline="Fast cooling fixes at your doorstep."
      description="We repair split, window, and inverter air conditioners across Pune. From low cooling and gas leakage to PCB faults and water dripping, our technicians diagnose and fix AC issues with genuine parts."
      problems={[
        "AC not cooling properly",
        "Gas refill and leak detection",
        "Water leakage from indoor unit",
        "Compressor not starting",
        "Fan motor and blower issues",
        "Remote or display not working",
        "Bad smell or weak airflow",
        "Unusual noise or vibration",
        "Installation and uninstallation",
      ]}
      faqs={[
        {
          q: "Do you repair split, window, and inverter ACs?",
          a: "Yes. We service all major AC types and brands for homes and small offices.",
        },
        {
          q: "When should I refill AC gas?",
          a: "Gas refill is needed only when there is leakage or low pressure. We check the system first before recommending a refill.",
        },
        {
          q: "Do you provide same-day AC service in Pune?",
          a: "Yes. Same-day visits are available in most Pune service areas, subject to technician availability.",
        },
      ]}
    />
  );
}
