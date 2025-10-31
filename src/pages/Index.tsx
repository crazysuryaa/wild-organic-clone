import AnnouncementBar from "@/components/AnnouncementBar";
import PromoBar from "@/components/PromoBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import ValueProposition from "@/components/ValueProposition";
import NutsSection from "@/components/NutsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <AnnouncementBar />
      <PromoBar />
      <Header />
      <main className="flex-1">
        <Hero />
        <FeaturedProducts />
        <ValueProposition />
        <NutsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
