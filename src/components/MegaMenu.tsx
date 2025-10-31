import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface MegaMenuProps {
  title: string;
  children: React.ReactNode;
}

const MegaMenu = ({ title, children }: MegaMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="px-4 py-2 font-medium text-foreground hover:text-primary transition-colors flex items-center gap-1">
        {title}
        <ChevronDown className="w-4 h-4" />
      </button>
      
      {isOpen && (
        <div className="absolute top-full left-0 bg-background border border-border shadow-lg min-w-[250px] z-50 py-2">
          {children}
        </div>
      )}
    </div>
  );
};

export const AllProductsMenu = () => (
  <MegaMenu title="ALL PRODUCTS">
    <div className="px-4 py-2">
      <a href="#" className="block py-2 text-sm hover:text-primary transition-colors">All Collections</a>
      <a href="#" className="block py-2 text-sm hover:text-primary transition-colors">Bath & Body</a>
      <a href="#" className="block py-2 text-sm hover:text-primary transition-colors">Best Sellers</a>
      <a href="#" className="block py-2 text-sm hover:text-primary transition-colors">Cacao</a>
      <a href="#" className="block py-2 text-sm hover:text-primary transition-colors">Coconut Oil</a>
      <a href="#" className="block py-2 text-sm hover:text-primary transition-colors">Coconut Products</a>
      <a href="#" className="block py-2 text-sm hover:text-primary transition-colors">Cooking Oils</a>
      <a href="#" className="block py-2 text-sm hover:text-primary transition-colors">Dried Fruit</a>
      <a href="#" className="block py-2 text-sm hover:text-primary transition-colors">Featured Products</a>
      <a href="#" className="block py-2 text-sm hover:text-primary transition-colors">Gluten-Free Flours</a>
      <a href="#" className="block py-2 text-sm hover:text-primary transition-colors">Keto-Friendly Products</a>
      <a href="#" className="block py-2 text-sm hover:text-primary transition-colors">Natural Sweeteners</a>
      <a href="#" className="block py-2 text-sm hover:text-primary transition-colors">Nuts and Seeds</a>
      <a href="#" className="block py-2 text-sm hover:text-primary transition-colors">Popcorn</a>
      <a href="#" className="block py-2 text-sm hover:text-primary transition-colors">Rice & Grains</a>
      <a href="#" className="block py-2 text-sm hover:text-primary transition-colors">Salad Dressings & Condiments</a>
      <a href="#" className="block py-2 text-sm hover:text-primary transition-colors">Salt</a>
      <a href="#" className="block py-2 text-sm hover:text-primary transition-colors">Spices and Seasonings</a>
      <a href="#" className="block py-2 text-sm hover:text-primary transition-colors">Vegan Products</a>
    </div>
  </MegaMenu>
);

export const CoconutOilMenu = () => (
  <MegaMenu title="COCONUT OIL">
    <div className="px-4 py-2">
      <a href="#" className="block py-2 text-sm hover:text-primary transition-colors">Buy Coconut Oil</a>
      <a href="#" className="block py-2 text-sm hover:text-primary transition-colors">Bulk Coconut Oil</a>
      <a href="#" className="block py-2 text-sm hover:text-primary transition-colors">About Our Coconut Oil</a>
      <a href="#" className="block py-2 text-sm hover:text-primary transition-colors">Coconut Oil FAQs</a>
      <a href="#" className="block py-2 text-sm hover:text-primary transition-colors">Articles & Recipes</a>
    </div>
  </MegaMenu>
);

export const CompanyMenu = () => (
  <MegaMenu title="COMPANY">
    <div className="px-4 py-2">
      <a href="#" className="block py-2 text-sm hover:text-primary transition-colors">Contact Us</a>
      <a href="#" className="block py-2 text-sm hover:text-primary transition-colors">About Us</a>
      <a href="#" className="block py-2 text-sm hover:text-primary transition-colors">FAQ</a>
      <a href="#" className="block py-2 text-sm hover:text-primary transition-colors">Wildly Organic Rewards</a>
      <a href="#" className="block py-2 text-sm hover:text-primary transition-colors">Affiliate Program</a>
      <a href="#" className="block py-2 text-sm hover:text-primary transition-colors">Wholesale & Buying Club Information</a>
    </div>
  </MegaMenu>
);

export const BlogMenu = () => (
  <MegaMenu title="BLOG & RECIPES">
    <div className="grid grid-cols-3 gap-6 p-4 min-w-[600px]">
      <div>
        <h4 className="font-semibold mb-2 text-sm">Recipes</h4>
        <a href="#" className="block py-1 text-sm hover:text-primary transition-colors">Breakfast</a>
        <a href="#" className="block py-1 text-sm hover:text-primary transition-colors">Chocolate</a>
        <a href="#" className="block py-1 text-sm hover:text-primary transition-colors">Dairy-Free</a>
        <a href="#" className="block py-1 text-sm hover:text-primary transition-colors">Desserts</a>
        <a href="#" className="block py-1 text-sm hover:text-primary transition-colors">Drinks</a>
        <a href="#" className="block py-1 text-sm hover:text-primary transition-colors">Gluten-Free</a>
      </div>
      <div>
        <h4 className="font-semibold mb-2 text-sm">Topics</h4>
        <a href="#" className="block py-1 text-sm hover:text-primary transition-colors">Cacao</a>
        <a href="#" className="block py-1 text-sm hover:text-primary transition-colors">Coconut Oil</a>
        <a href="#" className="block py-1 text-sm hover:text-primary transition-colors">Kitchen Tips</a>
        <a href="#" className="block py-1 text-sm hover:text-primary transition-colors">Lifestyle</a>
        <a href="#" className="block py-1 text-sm hover:text-primary transition-colors">Superfoods</a>
      </div>
      <div>
        <h4 className="font-semibold mb-2 text-sm">Tutorials</h4>
        <a href="#" className="block py-1 text-sm hover:text-primary transition-colors">DIY</a>
        <a href="#" className="block py-1 text-sm hover:text-primary transition-colors">Home & Garden</a>
        <a href="#" className="block py-1 text-sm hover:text-primary transition-colors">Lifestyle</a>
        <a href="#" className="block py-1 text-sm hover:text-primary transition-colors">Remedies</a>
      </div>
    </div>
  </MegaMenu>
);

export const AccountMenu = () => (
  <MegaMenu title="YOUR ACCOUNT">
    <div className="px-4 py-2">
      <a href="#" className="block py-2 text-sm hover:text-primary transition-colors">Log In</a>
      <a href="#" className="block py-2 text-sm hover:text-primary transition-colors">Sign Up</a>
      <a href="#" className="block py-2 text-sm hover:text-primary transition-colors">Track Order</a>
      <a href="#" className="block py-2 text-sm hover:text-primary transition-colors">Wildly Organic Rewards</a>
    </div>
  </MegaMenu>
);

export default MegaMenu;
