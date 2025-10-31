import { Facebook, Instagram } from "lucide-react";
import { Mail, Phone } from "lucide-react";

const PromoBar = () => {
  return (
    <div className="bg-promo text-promo-foreground">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between py-2 text-sm gap-2">
          <div className="flex items-center gap-4">
            <a href="#" className="hover:opacity-80 transition-opacity" aria-label="Facebook">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity" aria-label="Instagram">
              <Instagram className="w-4 h-4" />
            </a>
          </div>
          
          <div className="flex items-center gap-1">
            <span className="font-semibold">New customer?</span>
            <a href="#" className="underline hover:opacity-80 font-semibold">Sign up now</a>
            <span>and get 10% off!</span>
          </div>
          
          <div className="flex items-center gap-4">
            <a href="tel:+12182263985" className="flex items-center gap-1 hover:opacity-80">
              <Phone className="w-4 h-4" />
              <span>+1 (218) 226-3985</span>
            </a>
            <a href="mailto:help@wildlyorganic.com" className="flex items-center gap-1 hover:opacity-80">
              <Mail className="w-4 h-4" />
              <span>help@wildlyorganic.com</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoBar;
