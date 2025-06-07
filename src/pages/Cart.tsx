
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Minus, Plus, X, ShoppingBag } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Cart = () => {
  const { items, updateQuantity, removeFromCart, getTotalPrice, getTotalItems } = useCart();
  const { toast } = useToast();

  const shippingFee = getTotalPrice() > 2000 ? 0 : 150;
  const totalWithShipping = getTotalPrice() + shippingFee;

  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity < 1) {
      removeFromCart(id);
      toast({
        title: "Item removed",
        description: "Item has been removed from your cart."
      });
    } else {
      updateQuantity(id, newQuantity);
    }
  };

  const handleRemoveItem = (id: string, name: string) => {
    removeFromCart(id);
    toast({
      title: "Item removed",
      description: `${name} has been removed from your cart.`
    });
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <ShoppingBag className="h-24 w-24 mx-auto text-gray-400 mb-6" />
            <h1 className="text-3xl font-bold mb-4">Your cart is empty</h1>
            <p className="text-gray-600 mb-8">
              Looks like you haven't added any items to your cart yet.
            </p>
            <Link to="/">
              <Button size="lg">Continue Shopping</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Shopping Cart ({getTotalItems()} items)</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <Card key={`${item.id}-${item.size}-${item.color}`}>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-24 h-24 object-cover rounded-lg"
                        />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-lg">{item.name}</h3>
                          <button
                            onClick={() => handleRemoveItem(`${item.id}-${item.size}-${item.color}`, item.name)}
                            className="text-gray-400 hover:text-red-500 transition-colors"
                          >
                            <X className="h-5 w-5" />
                          </button>
                        </div>
                        
                        <div className="text-sm text-gray-600 mb-3">
                          {item.size && <span>Size: {item.size}</span>}
                          {item.size && item.color && <span> • </span>}
                          {item.color && <span>Color: {item.color}</span>}
                        </div>
                        
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => handleQuantityChange(`${item.id}-${item.size}-${item.color}`, item.quantity - 1)}
                              className="p-1 border border-gray-300 rounded hover:bg-gray-50"
                            >
                              <Minus className="h-4 w-4" />
                            </button>
                            <Input
                              type="number"
                              value={item.quantity}
                              onChange={(e) => handleQuantityChange(`${item.id}-${item.size}-${item.color}`, parseInt(e.target.value) || 1)}
                              className="w-16 text-center"
                              min="1"
                            />
                            <button
                              onClick={() => handleQuantityChange(`${item.id}-${item.size}-${item.color}`, item.quantity + 1)}
                              className="p-1 border border-gray-300 rounded hover:bg-gray-50"
                            >
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>
                          
                          <div className="text-right">
                            <p className="text-lg font-semibold">
                              NPR {(item.price * item.quantity).toLocaleString()}
                            </p>
                            {item.quantity > 1 && (
                              <p className="text-sm text-gray-500">
                                NPR {item.price.toLocaleString()} each
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-8">
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span>Subtotal ({getTotalItems()} items)</span>
                    <span>NPR {getTotalPrice().toLocaleString()}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>
                      {shippingFee === 0 ? (
                        <span className="text-green-600">Free</span>
                      ) : (
                        `NPR ${shippingFee}`
                      )}
                    </span>
                  </div>
                  
                  {shippingFee > 0 && (
                    <p className="text-sm text-gray-600">
                      Add NPR {(2000 - getTotalPrice()).toLocaleString()} more for free shipping
                    </p>
                  )}
                  
                  <Separator />
                  
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total</span>
                    <span>NPR {totalWithShipping.toLocaleString()}</span>
                  </div>
                  
                  <div className="space-y-3">
                    <Link to="/checkout" className="block">
                      <Button className="w-full" size="lg">
                        Proceed to Checkout
                      </Button>
                    </Link>
                    
                    <Link to="/" className="block">
                      <Button variant="outline" className="w-full">
                        Continue Shopping
                      </Button>
                    </Link>
                  </div>
                  
                  {/* Trust Badges */}
                  <div className="pt-4 border-t space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <span>🔒</span>
                      <span>Secure checkout</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <span>🚚</span>
                      <span>Fast delivery across Nepal</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <span>↩️</span>
                      <span>7-day return policy</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
