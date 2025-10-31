import ProductCard from "./ProductCard";
import granolaImg from "@/assets/granola.jpg";
import almondFlourImg from "@/assets/almond-flour.jpg";
import coconutSyrupImg from "@/assets/coconut-syrup.jpg";
import chiaSeedsImg from "@/assets/chia-seeds.jpg";

const FeaturedProducts = () => {
  const products = [
    {
      image: granolaImg,
      name: "Grain Free Granola | Organic",
      price: "$16.99",
      description: "Vegan, Grain-Free Granola. Try our grain-free granola – a tasty mix of nuts, seeds, coconut chips, and a drizzle of coconut syrup.",
      reviews: 2,
      isNew: true
    },
    {
      image: almondFlourImg,
      name: "Almond Flour | Organic",
      price: "$16.99",
      description: "Organic, Gluten-Free Almond Flour. Buy the highest quality almond flour from Wildly Organic! Made with California-grown organic almonds.",
      reviews: 34,
    },
    {
      image: coconutSyrupImg,
      name: "Organic Coconut Syrup",
      price: "$14.29",
      description: "Coconut-flavored Syrup. Are you looking for a deliciously thick sweetener similar to maple syrup? Consider coconut syrup from Wildly Organic!",
      reviews: 71,
    },
    {
      image: chiaSeedsImg,
      name: "Organic Chia Seeds | Whole Black Chia Seeds",
      price: "$7.99",
      description: "Dating back to ancient Mayan and Aztec cultures, chia seeds have long been cultivated for their amazing health benefits.",
      reviews: 71,
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2 uppercase">
            Featured Products
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="text-primary hover:text-primary/80 font-semibold text-lg underline transition-colors">
            View all Featured Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
