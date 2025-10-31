import ProductCard from "./ProductCard";
import cacaoPowderImg from "@/assets/cacao-powder.jpg";

const CacaoSection = () => {
  const products = [
    {
      image: cacaoPowderImg,
      name: "Fermented Cacao Powder | Organic | Raw",
      price: "$14.49",
      description: "USDA-Certified Organic Cacao Powder. Try Wildly Organic's delicious pure cacao powder, made from fermented cacao beans.",
      reviews: 273,
    },
    {
      image: cacaoPowderImg,
      name: "Fermented Cacao Nibs | Organic",
      price: "$18.99",
      description: "Crunchy Fermented Cacao Nibs. Made from fermented cacao beans, these organic cacao nibs are the perfect way to add sweetness to any snack.",
      reviews: 86,
    },
    {
      image: cacaoPowderImg,
      name: "Organic Chocolate Syrup | Raw",
      price: "$9.99",
      description: "A Delicious, Organic, Vegan Chocolate Syrup Made From Two Simple Ingredients. Our Certified Fairtrade chocolate syrup.",
      reviews: 156,
    },
    {
      image: cacaoPowderImg,
      name: "Non-Fermented Cacao Nibs | Organic",
      price: "$26.49",
      description: "Organic, Raw Cacao Nibs. Buy raw cacao nibs, nature's original dark chocolate chips, from Wildly Organic.",
      reviews: 36,
    },
  ];

  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 uppercase">
            Organic Raw Cacao Products
          </h2>
          
          <p className="text-muted-foreground leading-relaxed max-w-4xl">
            Full of incredible free-radical fighting antioxidants and superfood flavonoids, raw cacao lends a distinctly 
            rich flavor to all of your favorite baked goods and healthy go-to snacks. As the organic store with the 
            largest selection of organic cacao products found in the US, our collection features everything from 
            probiotic-packed fermented raw cacao powder to cacao butter (great for chocolate making!), and cacao nibs 
            in fermented and non-fermented varieties.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="text-primary hover:text-primary/80 font-semibold text-lg underline transition-colors">
            View all Raw Cacao
          </button>
        </div>
      </div>
    </section>
  );
};

export default CacaoSection;
