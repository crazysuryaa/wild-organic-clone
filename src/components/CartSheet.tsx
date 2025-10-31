import { useState } from "react";
import { ShoppingCart, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const CartSheet = () => {
  const [open, setOpen] = useState(false);
  const [cartItems] = useState<any[]>([]);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="text-foreground hover:text-primary">
          <ShoppingCart className="w-5 h-5" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
        </SheetHeader>
        
        <div className="mt-6">
          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingCart className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
              <p className="text-muted-foreground">Your cart is empty</p>
              <Button className="mt-4" onClick={() => setOpen(false)}>
                Continue Shopping
              </Button>
            </div>
          ) : (
            <div>
              {/* Cart items would go here */}
              <div className="border-t pt-4 mt-4">
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">Subtotal:</span>
                  <span className="font-bold">$0.00</span>
                </div>
                <Button className="w-full">Checkout</Button>
              </div>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CartSheet;
