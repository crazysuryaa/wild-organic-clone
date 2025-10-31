import ProductCard from "./ProductCard";
import coconutSyrupImg from "@/assets/coconut-syrup.jpg";

const CoconutOilSection = () => {
  const products = [
    {
      image: coconutSyrupImg,
      name: "Refined Organic Coconut Oil (no taste) | Expeller Pressed",
      price: "$10.49",
      description: "The #1 Refined Coconut Oil. Our clean expeller-pressed oil is our favorite go-to organic coconut oil for cooking and baking.",
      reviews: 281,
    },
    {
      image: coconutSyrupImg,
      name: "Cold Pressed Organic Coconut Oil | Virgin Unrefined",
      price: "$12.99",
      description: "The #1 Keto Cold Pressed Coconut Oil. This oil is an excellent, high-quality virgin coconut oil made by dehydrating the flesh of the coconut.",
      reviews: 372,
    },
    {
      image: coconutSyrupImg,
      name: "MCT Oil | Organic",
      price: "$16.49",
      description: "Coconut-Derived Organic MCT Oil. Wildly Organic is pleased to offer you the highest-quality MCT oil on the market.",
      reviews: 38,
    },
    {
      image: coconutSyrupImg,
      name: "Centrifuge Extracted Organic Coconut Oil",
      price: "$16.49",
      description: "The #1 Raw Organic Coconut Oil. Made from freshly pressed coconut cream.",
      reviews: 313,
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 uppercase">
            Organic Coconut Oil
          </h2>
          
          <p className="text-muted-foreground leading-relaxed max-w-4xl">
            Wildly Organic was the first organic store in the United States to offer organic virgin coconut oil! 
            Now it's one of our customers' favorites and a continual best-seller. Organic coconut oil is nutritionally 
            rich and full of medium-chain fatty acids (particularly lauric acid) and it's the perfect cooking essential 
            for a healthy-minded home. Available in refined, virgin, and centrifuge-pressed varieties, organic coconut 
            oils from our online health food store can be used in everything like delicious stir-fry, roasting and sauteing, 
            healthy baking, DIY hair masks, and beyond!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="text-primary hover:text-primary/80 font-semibold text-lg underline transition-colors">
            View all Pure Coconut Oil
          </button>
        </div>
      </div>
    </section>
  );
};

export default CoconutOilSection;
