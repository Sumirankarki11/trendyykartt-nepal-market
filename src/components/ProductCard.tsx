
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, ShoppingCart } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useWishlist } from '@/contexts/WishlistContext';
import { useToast } from '@/hooks/use-toast';

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews?: number;
  discount?: number;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const { toast } = useToast();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    });
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`
    });
  };

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
      toast({
        title: "Removed from wishlist",
        description: `${product.name} has been removed from your wishlist.`
      });
    } else {
      addToWishlist({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        rating: product.rating
      });
      toast({
        title: "Added to wishlist",
        description: `${product.name} has been added to your wishlist.`
      });
    }
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className="text-yellow-400">★</span>);
    }

    if (hasHalfStar) {
      stars.push(<span key="half" className="text-yellow-400">☆</span>);
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} className="text-gray-300">★</span>);
    }

    return stars;
  };

  return (
    <Link to={`/product/${product.id}`}>
      <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden card-hover group">
        <div className="relative overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {product.discount && (
            <Badge className="absolute top-2 left-2 bg-red-600 hover:bg-red-700">
              -{product.discount}%
            </Badge>
          )}
          <button
            onClick={handleWishlistToggle}
            className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors"
          >
            <Heart
              className={`h-4 w-4 ${
                isInWishlist(product.id)
                  ? 'fill-red-500 text-red-500'
                  : 'text-gray-600'
              }`}
            />
          </button>
        </div>

        <div className="p-4">
          <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors line-clamp-2">
            {product.name}
          </h3>

          <div className="flex items-center mb-2">
            <div className="flex items-center">
              {renderStars(product.rating)}
            </div>
            {product.reviews && (
              <span className="text-sm text-gray-500 ml-1">
                ({product.reviews})
              </span>
            )}
          </div>

          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-gray-900">
                NPR {product.price.toLocaleString()}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-gray-500 line-through">
                  NPR {product.originalPrice.toLocaleString()}
                </span>
              )}
            </div>
          </div>

          <Button
            onClick={handleAddToCart}
            className="w-full"
            size="sm"
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
