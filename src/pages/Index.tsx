import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { FeaturedUseCases } from "@/components/FeaturedUseCases";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <FeaturedUseCases />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
