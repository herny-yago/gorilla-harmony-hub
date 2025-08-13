import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import CommunityImpact from "@/components/CommunityImpact";
import Approach from "@/components/Approach";
import GetInvolved from "@/components/GetInvolved";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Mission />
      <CommunityImpact />
      <Approach />
      <GetInvolved />
      <Footer />
    </div>
  );
};

export default Index;
