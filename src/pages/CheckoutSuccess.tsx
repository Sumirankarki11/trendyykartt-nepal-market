
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Package, Truck, Home } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const CheckoutSuccess = () => {
  const orderId = 'TK' + Date.now().toString().slice(-8);

  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  const nextSteps = [
    {
      icon: <CheckCircle className="h-6 w-6 text-green-600" />,
      title: 'Order Confirmed',
      description: 'Your order has been successfully placed',
      status: 'completed'
    },
    {
      icon: <Package className="h-6 w-6 text-blue-600" />,
      title: 'Processing',
      description: 'We are preparing your items',
      status: 'active'
    },
    {
      icon: <Truck className="h-6 w-6 text-gray-400" />,
      title: 'Shipping',
      description: 'Your order is on its way',
      status: 'pending'
    },
    {
      icon: <Home className="h-6 w-6 text-gray-400" />,
      title: 'Delivered',
      description: 'Enjoy your new items!',
      status: 'pending'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Success Animation */}
          <div className="text-center mb-12">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce-gentle">
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Order Placed Successfully!
            </h1>
            <p className="text-xl text-gray-600 mb-2">
              Thank you for shopping with Trendyykartt
            </p>
            <p className="text-lg text-gray-500">
              Order ID: <span className="font-mono font-semibold">{orderId}</span>
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Order Progress */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Package className="h-5 w-5" />
                  Order Progress
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {nextSteps.map((step, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className={`p-2 rounded-full ${
                        step.status === 'completed' ? 'bg-green-100' :
                        step.status === 'active' ? 'bg-blue-100' : 'bg-gray-100'
                      }`}>
                        {step.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className={`font-semibold ${
                          step.status === 'completed' ? 'text-green-700' :
                          step.status === 'active' ? 'text-blue-700' : 'text-gray-500'
                        }`}>
                          {step.title}
                        </h3>
                        <p className="text-sm text-gray-600">{step.description}</p>
                      </div>
                      {step.status === 'completed' && (
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* What's Next */}
            <Card>
              <CardHeader>
                <CardTitle>What happens next?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-medium">Email Confirmation</p>
                      <p className="text-sm text-gray-600">
                        You'll receive an email confirmation with order details
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-medium">Order Processing</p>
                      <p className="text-sm text-gray-600">
                        We'll prepare your items for shipping (1-2 business days)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-medium">Shipping Updates</p>
                      <p className="text-sm text-gray-600">
                        Track your package with SMS and email updates
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-medium">Delivery</p>
                      <p className="text-sm text-gray-600">
                        Your order will arrive within 3-5 business days
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Action Buttons */}
          <div className="text-center space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/profile">
                <Button size="lg" className="w-full sm:w-auto">
                  View Order Details
                </Button>
              </Link>
              <Link to="/">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Continue Shopping
                </Button>
              </Link>
            </div>
            
            <div className="pt-8 border-t">
              <h3 className="text-lg font-semibold mb-4">Need Help?</h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
                <a href="tel:+9779704396332" className="flex items-center gap-2 text-primary hover:underline">
                  📞 +977 9704396332
                </a>
                <a href="mailto:help@trendyykartt.co.in" className="flex items-center gap-2 text-primary hover:underline">
                  ✉️ help@trendyykartt.co.in
                </a>
              </div>
            </div>
          </div>

          {/* Social Sharing */}
          <Card className="mt-8 bg-gradient-to-r from-primary/10 to-brand-600/10">
            <CardContent className="text-center py-8">
              <h3 className="text-xl font-semibold mb-4">Share the Love!</h3>
              <p className="text-gray-600 mb-6">
                Tell your friends about your great shopping experience at Trendyykartt
              </p>
              <div className="flex justify-center gap-4">
                <Button variant="outline" size="sm">Share on Facebook</Button>
                <Button variant="outline" size="sm">Share on Instagram</Button>
                <Button variant="outline" size="sm">Tell a Friend</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CheckoutSuccess;
