import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AllProductsMenu, CoconutOilMenu, CompanyMenu, BlogMenu, AccountMenu } from "./MegaMenu";
import MobileMenu from "./MobileMenu";
import SearchDialog from "./SearchDialog";
import CartSheet from "./CartSheet";

const Header = () => {
  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-8">
          {/* Mobile Menu */}
          <MobileMenu />
          
          {/* Logo */}
          <div className="flex items-center gap-2">
            <svg className="w-10 h-10 text-primary" viewBox="0 0 40 40" fill="none">
              <path d="M20 5C12 5 8 12 8 20C8 24 10 28 13 30C13 28 14 26 15 25C15 20 17 16 20 16C23 16 25 20 25 25C26 26 27 28 27 30C30 28 32 24 32 20C32 12 28 5 20 5Z" fill="currentColor"/>
            </svg>
            <span className="text-2xl font-bold text-foreground">WILDLY<br/>ORGANIC</span>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-1 flex-1">
            <a href="/" className="px-4 py-2 font-medium text-foreground hover:text-primary transition-colors">
              HOME
            </a>
            
            <AllProductsMenu />
            <CoconutOilMenu />

            <a href="#cacao" className="px-4 py-2 font-medium text-foreground hover:text-primary transition-colors">
              CACAO
            </a>

            <a href="#nuts" className="px-4 py-2 font-medium text-foreground hover:text-primary transition-colors">
              NUTS
            </a>

            <CompanyMenu />
            <BlogMenu />
            <AccountMenu />
            
            <a href="#featured" className="px-4 py-2 font-medium text-foreground hover:text-primary transition-colors">
              FEATURED
            </a>
          </nav>

          {/* Right side icons */}
          <div className="hidden md:flex items-center gap-4">
            <div className="hidden xl:flex flex-col items-center text-center">
              <svg className="w-8 h-8 mb-1 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
              <div className="text-xs">
                <div className="font-medium">Earn Rewards</div>
                <div className="text-muted-foreground text-[10px]">Discounts & free products</div>
              </div>
            </div>

            <div className="hidden xl:flex flex-col items-center text-center">
              <svg className="w-8 h-8 mb-1 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <div className="text-xs">
                <div className="font-medium">Wholesale</div>
                <div className="text-muted-foreground text-[10px]">& Buying Club Price Discounts</div>
              </div>
            </div>

            <SearchDialog />

            <Button variant="ghost" size="icon" className="text-foreground hover:text-primary relative">
              <Heart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Button>

            <CartSheet />

            <Button variant="outline" size="sm" className="font-medium">
              LOGIN
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
