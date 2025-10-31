import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

interface ProductCardProps {
  image: string;
  name: string;
  price: string;
  originalPrice?: string;
  description: string;
  reviews: number;
  isNew?: boolean;
}

const ProductCard = ({ 
  image, 
  name, 
  price, 
  originalPrice, 
  description, 
  reviews,
  isNew 
}: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative aspect-square overflow-hidden bg-secondary">
        {isNew && (
          <Badge className="absolute top-2 left-2 z-10 bg-destructive text-destructive-foreground">
            New
          </Badge>
        )}
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2 text-foreground group-hover:text-primary transition-colors">
          {name}
        </h3>
        
        <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className="w-4 h-4 fill-primary text-primary" 
            />
          ))}
          <span className="text-sm text-muted-foreground ml-1">
            {reviews} reviews
          </span>
        </div>
        
        <div className="flex items-baseline gap-2 mb-3">
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              {originalPrice}
            </span>
          )}
          <span className="text-lg font-bold text-foreground">
            {price}
          </span>
        </div>
        
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {description}
        </p>
        
        <button className="text-sm font-medium text-primary hover:text-primary/80 transition-colors underline">
          View full details
        </button>
      </div>
    </Card>
  );
};

export default ProductCard;
