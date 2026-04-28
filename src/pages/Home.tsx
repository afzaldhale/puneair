import { SiteLayout } from "@/components/site/SiteLayout";
import { Hero } from "@/components/site/sections/Hero";
import { ServicesGrid } from "../components/site/sections/ServicesGrid";
import { WhyChooseUs } from "@/components/site/sections/WhyChooseUs";
import { HowItWorks } from "@/components/site/sections/HowItWorks";
import { Brands } from "@/components/site/sections/Brands";
import { Testimonials } from "@/components/site/sections/Testimonials";
import { EmergencyCTA } from "@/components/site/sections/EmergencyCTA";
import { ServiceAreas } from "@/components/site/sections/ServiceAreas";
import { FAQ } from "@/components/site/sections/FAQ";

export default function Home() {
  return (
    <SiteLayout>
      <Hero />
      <ServicesGrid />
      <WhyChooseUs />
      <HowItWorks />
      <Brands />
      <Testimonials />
      <EmergencyCTA />
      <ServiceAreas />
      <FAQ />
    </SiteLayout>
  );
}
