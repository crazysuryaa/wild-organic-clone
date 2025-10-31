import ProductCard from "./ProductCard";
import coconutFlourImg from "@/assets/coconut-flour.jpg";

const CoconutProductsSection = () => {
  const products = [
    {
      image: coconutFlourImg,
      name: "Organic Coconut Milk Powder | Non-Dairy",
      price: "$9.99",
      description: "Vegan-friendly and USDA-certified Organic Powdered Non-Dairy Milk. Wildly Organic's coconut milk powder is made with the highest-quality ingredients.",
      reviews: 159,
    },
    {
      image: coconutFlourImg,
      name: "Organic Coconut Sugar",
      price: "$7.99",
      description: "Delicious Coconut Sugar in Bulk. Our organic coconut sugar is a light brown, all-natural sweetener that tastes a bit like brown sugar.",
      reviews: 40,
    },
    {
      image: coconutFlourImg,
      name: "Organic Small Coconut Flakes",
      price: "$8.99",
      description: "Perfect for baking and snacking. These organic coconut flakes add a delicious tropical flavor to any recipe.",
      reviews: 43,
    },
    {
      image: coconutFlourImg,
      name: "Organic Coconut Flour",
      price: "$11.99",
      description: "Gluten-free coconut flour perfect for all your baking needs. High in fiber and naturally sweet.",
      reviews: 125,
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 uppercase">
            Coconut Products
          </h2>
          
          <p className="text-muted-foreground leading-relaxed max-w-4xl">
            Our online health food store carries more than just coconut oil -- we also stock a wide variety of organic 
            coconut products, including coconut butter, shredded flakes for baking, coconut flour, and coconut vinegar 
            which is great for salad dressings and tropical fusion recipes! With the largest selection of all-natural 
            coconut products in the U.S., we are continually looking for new ways to add this nutritious superfood to 
            healthy lifestyles across the country.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="text-primary hover:text-primary/80 font-semibold text-lg underline transition-colors">
            View all Coconut Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default CoconutProductsSection;
