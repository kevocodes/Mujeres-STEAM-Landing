// components
import { Navbar, Footer } from "@/components/ui";

// sections
import {
  Hero,
  SponsoredBy,
  AboutEvent,
  OurStats,
  EventContent,
  Faq,
} from "@/components/sections";
import OrganizedBy from "@/components/sections/organized-by";
import Schedule from "@/components/sections/schedule";

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutEvent />
      <OrganizedBy />
      <SponsoredBy />
      <Schedule />
      <Faq />
      <Footer />
    </>
  );
}
