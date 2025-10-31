import nutsImage from "@/assets/nuts-category.jpg";
import { Check } from "lucide-react";

const ValueProposition = () => {
  const benefits = [
    "USDA Certified Organic",
    "FairTrade Certified & Sustainably-Sourced",
    "Crafted From Whole, Non-GMO Ingredients",
    "Certified Kosher",
    "Raw, Vegan, and Gluten-Free Diet-Friendly",
    "Minimally-Processed to Ensure Nutritionally-Rich Products You'll Love"
  ];

  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <img 
              src={nutsImage} 
              alt="Organic products and food ingredients"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ingredients That Support Your Healthy Lifestyle From the Inside Out
            </h2>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              As your trusted organic store, we go above and beyond to ensure you feel good about your food choices. 
              That's why we supply a wide range of products that help nourish healthy bodies and wholesome lives. 
              We believe that food is most nutritious when it is closest to its natural form, and we work hard to make 
              sure our products are, whenever possible:
            </p>
            
            <ul className="space-y-3 mb-6">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
            
            <p className="text-muted-foreground leading-relaxed">
              But our products are only half of why we're the <strong>best online health food store</strong>! 
              We want you to feel good about your Wildly Organic purchase, so we offer a{" "}
              <strong>Satisfaction Guarantee</strong> that allows you to return anything you don't love within 30 days. 
              We also offer new customers a <strong>10% discount and free shipping</strong> on their first order! 
              Just <a href="#" className="text-primary hover:text-primary/80 underline font-medium">sign up with us</a> today 
              and discover organic pantry essentials you'll never want to be without.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
