import { Truck, Gift, FileText } from "lucide-react";

const ShippingBenefits = () => {
  return (
    <div className="bg-secondary border-y border-border">
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center gap-4">
            <Truck className="w-12 h-12 text-foreground flex-shrink-0" />
            <div>
              <div className="font-semibold text-foreground text-lg">Free Shipping</div>
              <div className="text-sm text-muted-foreground">on orders $49+</div>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <Gift className="w-12 h-12 text-foreground flex-shrink-0" />
            <div>
              <div className="font-semibold text-foreground text-lg">Earn Rewards</div>
              <div className="text-sm text-muted-foreground">Discounts & free products</div>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <FileText className="w-12 h-12 text-foreground flex-shrink-0" />
            <div>
              <div className="font-semibold text-foreground text-lg">Wholesale</div>
              <div className="text-sm text-muted-foreground">& Buying Club Price Discounts</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingBenefits;
