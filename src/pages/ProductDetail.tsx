
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Heart, ShoppingCart, Minus, Plus } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useWishlist } from '@/contexts/WishlistContext';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';

const ProductDetail = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const { toast } = useToast();

  // Mock product data - in real app this would come from API
  const product = {
    id: id || '1',
    name: 'Premium Wireless Bluetooth Headphones',
    price: 4500,
    originalPrice: 7500,
    discount: 40,
    rating: 4.5,
    reviews: 128,
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600&h=600&fit=crop'
    ],
    sizes: ['Small', 'Medium', 'Large'],
    colors: ['Black', 'White', 'Blue', 'Red'],
    description: 'Experience premium sound quality with these wireless Bluetooth headphones. Features noise cancellation, 30-hour battery life, and comfortable over-ear design.',
    specifications: {
      'Brand': 'TrendyTech',
      'Model': 'TT-WH500',
      'Connectivity': 'Bluetooth 5.0',
      'Battery Life': '30 hours',
      'Charging Time': '2 hours',
      'Weight': '250g',
      'Warranty': '1 year'
    },
    features: [
      'Active Noise Cancellation',
      '30-hour battery life',
      'Quick charge - 15 min for 3 hours',
      'Comfortable over-ear design',
      'High-quality drivers',
      'Built-in microphone'
    ]
  };

  const relatedProducts = [
    {
      id: '2',
      name: 'Wireless Gaming Mouse',
      price: 4200,
      image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=300&fit=crop',
      rating: 4.8,
      reviews: 156
    },
    {
      id: '3',
      name: 'Bluetooth Speaker',
      price: 3800,
      image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=300&fit=crop',
      rating: 4.4,
      reviews: 78
    },
    {
      id: '4',
      name: 'Smart Phone Stand',
      price: 1200,
      image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=300&h=300&fit=crop',
      rating: 4.5,
      reviews: 89
    },
    {
      id: '5',
      name: 'USB-C Cable Set',
      price: 800,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop',
      rating: 4.3,
      reviews: 134
    }
  ];

  const reviews = [
    {
      id: 1,
      name: 'Rajesh Sharma',
      rating: 5,
      comment: 'Amazing sound quality! The noise cancellation works perfectly.',
      date: '2024-01-15',
      verified: true
    },
    {
      id: 2,
      name: 'Priya Nepal',
      rating: 4,
      comment: 'Great headphones, very comfortable for long use. Battery life is excellent.',
      date: '2024-01-10',
      verified: true
    },
    {
      id: 3,
      name: 'Amit Thapa',
      rating: 5,
      comment: 'Best purchase I made this year. Highly recommend!',
      date: '2024-01-08',
      verified: true
    }
  ];

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      size: selectedSize,
      color: selectedColor
    });
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`
    });
  };

  const handleWishlistToggle = () => {
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
        image: product.images[0],
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
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <div className="text-sm text-gray-600 mb-6">
            <span>Home</span> / <span>Electronics</span> / <span className="text-gray-900">{product.name}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-square bg-white rounded-lg overflow-hidden">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square bg-white rounded-lg overflow-hidden border-2 ${
                      selectedImage === index ? 'border-primary' : 'border-gray-200'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center">
                    {renderStars(product.rating)}
                    <span className="ml-1 text-sm text-gray-600">({product.reviews} reviews)</span>
                  </div>
                  {product.inStock && (
                    <Badge className="bg-green-100 text-green-800">In Stock</Badge>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold text-gray-900">
                  NPR {product.price.toLocaleString()}
                </span>
                {product.originalPrice && (
                  <>
                    <span className="text-xl text-gray-500 line-through">
                      NPR {product.originalPrice.toLocaleString()}
                    </span>
                    <Badge className="bg-red-100 text-red-800">
                      {product.discount}% OFF
                    </Badge>
                  </>
                )}
              </div>

              <p className="text-gray-700">{product.description}</p>

              {/* Color Selection */}
              {product.colors.length > 0 && (
                <div>
                  <h3 className="font-semibold mb-2">Color</h3>
                  <div className="flex gap-2">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`px-4 py-2 border rounded-lg ${
                          selectedColor === color
                            ? 'border-primary bg-primary text-white'
                            : 'border-gray-300 hover:border-gray-400'
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Size Selection */}
              {product.sizes.length > 0 && (
                <div>
                  <h3 className="font-semibold mb-2">Size</h3>
                  <div className="flex gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-4 py-2 border rounded-lg ${
                          selectedSize === size
                            ? 'border-primary bg-primary text-white'
                            : 'border-gray-300 hover:border-gray-400'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity */}
              <div>
                <h3 className="font-semibold mb-2">Quantity</h3>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="px-4 py-2 border border-gray-300 rounded-lg min-w-[60px] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <Button onClick={handleAddToCart} className="flex-1" size="lg">
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Add to Cart
                </Button>
                <Button
                  variant="outline"
                  onClick={handleWishlistToggle}
                  size="lg"
                >
                  <Heart
                    className={`h-5 w-5 ${
                      isInWishlist(product.id) ? 'fill-red-500 text-red-500' : ''
                    }`}
                  />
                </Button>
              </div>

              {/* Features */}
              <div>
                <h3 className="font-semibold mb-2">Key Features</h3>
                <ul className="space-y-1">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <span className="text-green-600 mr-2">✓</span>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Product Details Tabs */}
          <Tabs defaultValue="specifications" className="mb-12">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="reviews">Reviews ({product.reviews})</TabsTrigger>
              <TabsTrigger value="shipping">Shipping & Returns</TabsTrigger>
            </TabsList>

            <TabsContent value="specifications" className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Product Specifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-2 border-b">
                    <span className="font-medium">{key}</span>
                    <span>{value}</span>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="reviews" className="bg-white rounded-lg p-6">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">Customer Reviews</h3>
                  <Button variant="outline">Write a Review</Button>
                </div>
                
                <div className="space-y-4">
                  {reviews.map((review) => (
                    <div key={review.id} className="border-b pb-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{review.name}</span>
                          {review.verified && (
                            <Badge variant="outline" className="text-xs">Verified Purchase</Badge>
                          )}
                        </div>
                        <span className="text-sm text-gray-500">{review.date}</span>
                      </div>
                      <div className="flex mb-2">
                        {renderStars(review.rating)}
                      </div>
                      <p className="text-gray-700">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="shipping" className="bg-white rounded-lg p-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Shipping Information</h3>
                  <div className="space-y-2 text-sm">
                    <p>• Free shipping on orders above NPR 2,000</p>
                    <p>• Standard delivery within Kathmandu Valley: 1-2 business days</p>
                    <p>• Outside Valley delivery: 3-5 business days</p>
                    <p>• Express delivery available for additional charges</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">Returns & Exchanges</h3>
                  <div className="space-y-2 text-sm">
                    <p>• 7-day return policy for unused items</p>
                    <p>• Items must be in original packaging</p>
                    <p>• Return shipping costs may apply</p>
                    <p>• Refunds processed within 5-7 business days</p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          {/* Related Products */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Related Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;
