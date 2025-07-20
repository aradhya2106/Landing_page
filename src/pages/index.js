import dynamic from "next/dynamic";
import OurAdvantages from "./OurAdvantages";
import AboutSection from "./AboutSection";
import PartnersAndPlatforms from "./PartnersSection";

const TopBar = dynamic(() => import("./Topbar"), {
  loading: () => <div className="h-20 bg-black" />,
  ssr: false,
});

const HeroBanner = dynamic(() => import("./HeroBannerSection"), {
  loading: () => <div className="h-screen bg-black" />,
});

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <TopBar />
      <HeroBanner />
      <OurAdvantages/>
      <AboutSection/>
      <PartnersAndPlatforms/>
    </div>
  );
}
