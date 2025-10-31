import AnnouncementBar from "@/components/AnnouncementBar";
import PromoBar from "@/components/PromoBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ShippingBenefits from "@/components/ShippingBenefits";
import FeaturedProducts from "@/components/FeaturedProducts";
import ValueProposition from "@/components/ValueProposition";
import NutsSection from "@/components/NutsSection";
import CoconutOilSection from "@/components/CoconutOilSection";
import CacaoSection from "@/components/CacaoSection";
import CoconutProductsSection from "@/components/CoconutProductsSection";
import TrustBadges from "@/components/TrustBadges";
import NewsletterSignup from "@/components/NewsletterSignup";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <AnnouncementBar />
      <PromoBar />
      <Header />
      <main className="flex-1">
        <Hero />
        <ShippingBenefits />
        <section id="featured">
          <FeaturedProducts />
        </section>
        <ValueProposition />
        <section id="nuts">
          <NutsSection />
        </section>
        <CoconutOilSection />
        <section id="cacao">
          <CacaoSection />
        </section>
        <CoconutProductsSection />
        <TrustBadges />
        <NewsletterSignup />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
