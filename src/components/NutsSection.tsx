import ProductCard from "./ProductCard";
import pumpkinSeedsImg from "@/assets/pumpkin-seeds.jpg";

const NutsSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 uppercase">
            Raw Organic Nuts & Seeds
          </h2>
          
          <p className="text-muted-foreground leading-relaxed max-w-4xl">
            Nuts and seeds are a staple in many healthy lifestyles. Great for vegan, keto, and many other specialty diets, 
            nuts are naturally filling and packed with essential nutrients and micronutrients. Many of the nuts featured in 
            our organic store are "activated," meaning they've been soaked to begin the germination process and then dehydrated 
            at low temperatures to lend them a distinct crunch. Raw-diet friendly and full of all-natural goodness, our 
            activation process eliminates the nut's naturally occurring phytates that inhibit your body's ability to fully 
            absorb the nut's nutrients for a product that makes for an even better addition to your family's pantry.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ProductCard
            image={pumpkinSeedsImg}
            name="Nuts, Raw, Soaked and Dried, Certified Organic, Pumpkin Seeds"
            price="$7.36"
            description="Unroasted Pumpkin Seeds. Pumpkin seeds from Wildly Organic are easy to incorporate into any meal for an extra boost of nutrition."
            reviews={159}
          />
        </div>
      </div>
    </section>
  );
};

export default NutsSection;
