import dynamic from "next/dynamic";

import OurAdvantages from "./OurAdvantages";
import AboutSection from "./AboutSection";
import TeamSection from "./TeamSection";
import PartnersAndPlatforms from "./PartnersSection";
import ClientTestimonials from "./Testimonial";

import ServiceSection from "../Component/ServiceContainer/ServiceSection.jsx";


const TopBar = dynamic(() => import("./Topbar"), {
  loading: () => <div className="h-20 bg-black" />,
  ssr: false,
});

const HeroBanner = dynamic(() => import("./HeroBannerSection"), {
  loading: () => <div className="h-screen bg-black" />,
});

const ServicePackages = dynamic(() => import("./ServicePackages"), {
  ssr: false,
});

const SmartSolutions = dynamic(() => import("./SmartSolutions"), {
  ssr: false,
});

const Navigation = dynamic(() => import("./Navigation"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <TopBar />
      <HeroBanner />
      <OurAdvantages />
      <AboutSection />
      <Navigation />
      <main id="ServiceSection">
      <ServiceSection />
    </main>
      <div id="service-packages">
        <ServicePackages />
      </div>
     
      <div id="smart-solutions">
        <SmartSolutions />
      </div>
      <PartnersAndPlatforms/>
      <ClientTestimonials/>
      <TeamSection />
  
    </div>
  );
}
