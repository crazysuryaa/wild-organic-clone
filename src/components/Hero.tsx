import heroImage from "@/assets/hero-organic-products.jpg";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/20" />
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-6 flex justify-center">
          <div className="bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 inline-flex flex-col items-center">
            <div className="text-4xl font-bold text-primary">25</div>
            <div className="text-sm font-semibold text-foreground uppercase">YEARS</div>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
          Celebrating 25 Years of<br />Organic & Natural Foods!
        </h1>
        
        <p className="text-xl text-white mb-8 drop-shadow-md">
          A legacy of organic excellence—25 years and just getting started!
        </p>
        
        <Button 
          size="lg" 
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg"
        >
          FEATURED PRODUCTS
        </Button>
      </div>
    </section>
  );
};

export default Hero;
