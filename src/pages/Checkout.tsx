
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { CheckCircle, Circle } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Checkout = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const { items, getTotalPrice, clearCart } = useCart();
  const { user } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  const [shippingInfo, setShippingInfo] = useState({
    firstName: user?.name?.split(' ')[0] || '',
    lastName: user?.name?.split(' ')[1] || '',
    email: user?.email || '',
    phone: user?.phone || '',
    address: user?.address || '',
    city: '',
    postalCode: '',
    saveInfo: false
  });

  const [paymentMethod, setPaymentMethod] = useState('esewa');

  const shippingFee = getTotalPrice() > 2000 ? 0 : 150;
  const totalWithShipping = getTotalPrice() + shippingFee;

  const steps = [
    { id: 1, title: 'Shipping', description: 'Delivery information' },
    { id: 2, title: 'Payment', description: 'Payment method' },
    { id: 3, title: 'Review', description: 'Order confirmation' }
  ];

  const paymentMethods = [
    {
      id: 'esewa',
      name: 'eSewa',
      description: 'Pay with your eSewa wallet',
      icon: '💳'
    },
    {
      id: 'khalti',
      name: 'Khalti',
      description: 'Pay with your Khalti wallet',
      icon: '💳'
    },
    {
      id: 'bank',
      name: 'Bank Transfer',
      description: 'Direct bank transfer',
      icon: '🏦'
    },
    {
      id: 'card',
      name: 'Credit/Debit Card',
      description: 'Visa, MasterCard accepted',
      icon: '💳'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setShippingInfo(prev => ({ ...prev, [name]: value }));
  };

  const handleNextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handlePlaceOrder = async () => {
    setIsProcessing(true);
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    clearCart();
    navigate('/checkout-success');
    
    toast({
      title: "Order placed successfully!",
      description: "Thank you for your purchase. You will receive a confirmation email shortly."
    });
  };

  const validateStep = (step: number) => {
    switch (step) {
      case 1:
        return shippingInfo.firstName && shippingInfo.lastName && 
               shippingInfo.email && shippingInfo.phone && 
               shippingInfo.address && shippingInfo.city;
      case 2:
        return paymentMethod;
      default:
        return true;
    }
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
          <Button onClick={() => navigate('/')}>
            Continue Shopping
          </Button>
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
          <h1 className="text-3xl font-bold mb-8">Checkout</h1>
          
          {/* Stepper */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <div className="flex items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      currentStep >= step.id 
                        ? 'bg-primary text-white' 
                        : 'bg-gray-200 text-gray-600'
                    }`}>
                      {currentStep > step.id ? (
                        <CheckCircle className="h-6 w-6" />
                      ) : (
                        <span>{step.id}</span>
                      )}
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium">{step.title}</p>
                      <p className="text-xs text-gray-500">{step.description}</p>
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`flex-1 h-0.5 mx-4 ${
                      currentStep > step.id ? 'bg-primary' : 'bg-gray-200'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Step 1: Shipping Information */}
              {currentStep === 1 && (
                <Card>
                  <CardHeader>
                    <CardTitle>Shipping Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          value={shippingInfo.firstName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          value={shippingInfo.lastName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={shippingInfo.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={shippingInfo.phone}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="address">Address *</Label>
                      <Input
                        id="address"
                        name="address"
                        value={shippingInfo.address}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="city">City *</Label>
                        <Input
                          id="city"
                          name="city"
                          value={shippingInfo.city}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="postalCode">Postal Code</Label>
                        <Input
                          id="postalCode"
                          name="postalCode"
                          value={shippingInfo.postalCode}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="saveInfo"
                        checked={shippingInfo.saveInfo}
                        onCheckedChange={(checked) => 
                          setShippingInfo(prev => ({ ...prev, saveInfo: checked as boolean }))
                        }
                      />
                      <Label htmlFor="saveInfo" className="text-sm">
                        Save this information for next time
                      </Label>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Step 2: Payment Method */}
              {currentStep === 2 && (
                <Card>
                  <CardHeader>
                    <CardTitle>Payment Method</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                      <div className="space-y-4">
                        {paymentMethods.map((method) => (
                          <div key={method.id} className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-gray-50">
                            <RadioGroupItem value={method.id} id={method.id} />
                            <div className="flex-1">
                              <Label htmlFor={method.id} className="flex items-center gap-3 cursor-pointer">
                                <span className="text-2xl">{method.icon}</span>
                                <div>
                                  <p className="font-medium">{method.name}</p>
                                  <p className="text-sm text-gray-500">{method.description}</p>
                                </div>
                              </Label>
                            </div>
                          </div>
                        ))}
                      </div>
                    </RadioGroup>
                  </CardContent>
                </Card>
              )}

              {/* Step 3: Order Review */}
              {currentStep === 3 && (
                <Card>
                  <CardHeader>
                    <CardTitle>Order Review</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Shipping Info Review */}
                    <div>
                      <h3 className="font-semibold mb-2">Shipping Address</h3>
                      <div className="text-sm text-gray-600">
                        <p>{shippingInfo.firstName} {shippingInfo.lastName}</p>
                        <p>{shippingInfo.address}</p>
                        <p>{shippingInfo.city}, {shippingInfo.postalCode}</p>
                        <p>{shippingInfo.phone}</p>
                        <p>{shippingInfo.email}</p>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    {/* Payment Method Review */}
                    <div>
                      <h3 className="font-semibold mb-2">Payment Method</h3>
                      <p className="text-sm text-gray-600">
                        {paymentMethods.find(m => m.id === paymentMethod)?.name}
                      </p>
                    </div>
                    
                    <Separator />
                    
                    {/* Order Items */}
                    <div>
                      <h3 className="font-semibold mb-4">Order Items</h3>
                      <div className="space-y-3">
                        {items.map((item) => (
                          <div key={`${item.id}-${item.size}-${item.color}`} className="flex items-center gap-4">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-16 h-16 object-cover rounded-lg"
                            />
                            <div className="flex-1">
                              <p className="font-medium">{item.name}</p>
                              <p className="text-sm text-gray-600">
                                Qty: {item.quantity}
                                {item.size && ` • Size: ${item.size}`}
                                {item.color && ` • Color: ${item.color}`}
                              </p>
                            </div>
                            <p className="font-semibold">
                              NPR {(item.price * item.quantity).toLocaleString()}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-6">
                <Button
                  variant="outline"
                  onClick={handlePrevStep}
                  disabled={currentStep === 1}
                >
                  Previous
                </Button>
                
                {currentStep < 3 ? (
                  <Button
                    onClick={handleNextStep}
                    disabled={!validateStep(currentStep)}
                  >
                    Next
                  </Button>
                ) : (
                  <Button
                    onClick={handlePlaceOrder}
                    disabled={isProcessing}
                    className="bg-green-600 hover:bg-green-700"
                  >
                    {isProcessing ? 'Processing...' : 'Place Order'}
                  </Button>
                )}
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-8">
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {items.map((item) => (
                      <div key={`${item.id}-${item.size}-${item.color}`} className="flex justify-between text-sm">
                        <span className="truncate pr-2">
                          {item.name} x {item.quantity}
                        </span>
                        <span>NPR {(item.price * item.quantity).toLocaleString()}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Separator />
                  
                  <div className="flex justify-between">
                    <span>Subtotal</span>
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
                  
                  <Separator />
                  
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total</span>
                    <span>NPR {totalWithShipping.toLocaleString()}</span>
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

export default Checkout;
