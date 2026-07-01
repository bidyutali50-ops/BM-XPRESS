import { Hero } from "@/components/sections/Hero";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { Services } from "@/components/sections/Services";
import { LiveTracking } from "@/components/sections/LiveTracking";
import { Coverage } from "@/components/sections/Coverage";
import { Features } from "@/components/sections/Features";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Numbers } from "@/components/sections/Numbers";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <Services />
      <LiveTracking />
      <Coverage />
      <Features />
      <WhyChooseUs />
      <Numbers />
      <Testimonials />
      <Contact />
    </>
  );
}
