import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ValueProposition from "@/components/ValueProposition";
import WhyClustal from "@/components/WhyClustal";
import ProcessSections from "@/components/ProcessSections";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ValueProposition />
        <WhyClustal />
        <ProcessSections />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
