import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden">
          <Menu className="w-6 h-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        
        <nav className="mt-6 space-y-2">
          <a href="/" className="block py-2 font-medium text-foreground">HOME</a>
          
          <Collapsible>
            <CollapsibleTrigger className="flex items-center justify-between w-full py-2 font-medium text-foreground">
              ALL PRODUCTS
              <ChevronDown className="w-4 h-4" />
            </CollapsibleTrigger>
            <CollapsibleContent className="pl-4 space-y-2 mt-2">
              <a href="#" className="block py-1 text-sm">All Collections</a>
              <a href="#" className="block py-1 text-sm">Bath & Body</a>
              <a href="#" className="block py-1 text-sm">Best Sellers</a>
              <a href="#" className="block py-1 text-sm">Cacao</a>
              <a href="#" className="block py-1 text-sm">Coconut Oil</a>
              <a href="#" className="block py-1 text-sm">Coconut Products</a>
              <a href="#" className="block py-1 text-sm">Cooking Oils</a>
              <a href="#" className="block py-1 text-sm">Dried Fruit</a>
            </CollapsibleContent>
          </Collapsible>
          
          <Collapsible>
            <CollapsibleTrigger className="flex items-center justify-between w-full py-2 font-medium text-foreground">
              COCONUT OIL
              <ChevronDown className="w-4 h-4" />
            </CollapsibleTrigger>
            <CollapsibleContent className="pl-4 space-y-2 mt-2">
              <a href="#" className="block py-1 text-sm">Buy Coconut Oil</a>
              <a href="#" className="block py-1 text-sm">Bulk Coconut Oil</a>
              <a href="#" className="block py-1 text-sm">About Our Coconut Oil</a>
              <a href="#" className="block py-1 text-sm">Coconut Oil FAQs</a>
            </CollapsibleContent>
          </Collapsible>
          
          <a href="#" className="block py-2 font-medium text-foreground">CACAO</a>
          <a href="#" className="block py-2 font-medium text-foreground">NUTS</a>
          
          <Collapsible>
            <CollapsibleTrigger className="flex items-center justify-between w-full py-2 font-medium text-foreground">
              COMPANY
              <ChevronDown className="w-4 h-4" />
            </CollapsibleTrigger>
            <CollapsibleContent className="pl-4 space-y-2 mt-2">
              <a href="#" className="block py-1 text-sm">Contact Us</a>
              <a href="#" className="block py-1 text-sm">About Us</a>
              <a href="#" className="block py-1 text-sm">FAQ</a>
              <a href="#" className="block py-1 text-sm">Wildly Organic Rewards</a>
            </CollapsibleContent>
          </Collapsible>
          
          <Collapsible>
            <CollapsibleTrigger className="flex items-center justify-between w-full py-2 font-medium text-foreground">
              BLOG & RECIPES
              <ChevronDown className="w-4 h-4" />
            </CollapsibleTrigger>
            <CollapsibleContent className="pl-4 space-y-2 mt-2">
              <a href="#" className="block py-1 text-sm">Blog Home</a>
              <a href="#" className="block py-1 text-sm">Breakfast</a>
              <a href="#" className="block py-1 text-sm">Desserts</a>
              <a href="#" className="block py-1 text-sm">Main Dishes</a>
            </CollapsibleContent>
          </Collapsible>
          
          <div className="pt-4 border-t border-border">
            <Button className="w-full mb-2">LOGIN</Button>
            <Button variant="outline" className="w-full">SIGN UP</Button>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
