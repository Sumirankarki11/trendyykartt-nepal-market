
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import ProductCard from '@/components/ProductCard';

const FlashSaleSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 30
  });

  const flashSaleProducts = [
    {
      id: '1',
      name: 'Wireless Bluetooth Headphones',
      price: 4500,
      originalPrice: 7500,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop',
      rating: 4.5,
      reviews: 128,
      discount: 40
    },
    {
      id: '2',
      name: 'Smart Fitness Watch',
      price: 8900,
      originalPrice: 12000,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop',
      rating: 4.3,
      reviews: 89,
      discount: 26
    },
    {
      id: '3',
      name: 'Portable Power Bank 20000mAh',
      price: 2800,
      originalPrice: 4200,
      image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=300&h=300&fit=crop',
      rating: 4.7,
      reviews: 203,
      discount: 33
    },
    {
      id: '4',
      name: 'LED Ring Light with Stand',
      price: 3200,
      originalPrice: 5000,
      image: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=300&h=300&fit=crop',
      rating: 4.4,
      reviews: 67,
      discount: 36
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-r from-red-50 to-pink-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-4xl">⚡</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Flash Sale
            </h2>
            <span className="text-4xl">⚡</span>
          </div>
          <p className="text-xl text-gray-600 mb-6">
            Limited time offers - Don't miss out!
          </p>
          
          {/* Countdown Timer */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="text-lg font-medium text-gray-700">Ends in:</span>
            <div className="flex gap-2">
              <div className="bg-red-600 text-white px-3 py-2 rounded-lg font-bold min-w-[50px]">
                {String(timeLeft.hours).padStart(2, '0')}
                <div className="text-xs">Hours</div>
              </div>
              <div className="bg-red-600 text-white px-3 py-2 rounded-lg font-bold min-w-[50px]">
                {String(timeLeft.minutes).padStart(2, '0')}
                <div className="text-xs">Mins</div>
              </div>
              <div className="bg-red-600 text-white px-3 py-2 rounded-lg font-bold min-w-[50px]">
                {String(timeLeft.seconds).padStart(2, '0')}
                <div className="text-xs">Secs</div>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {flashSaleProducts.map((product) => (
            <div key={product.id} className="relative">
              <Badge className="absolute top-2 left-2 z-10 bg-red-600 hover:bg-red-700">
                -{product.discount}%
              </Badge>
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-red-600 hover:bg-red-700">
            View All Flash Sale Items
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FlashSaleSection;
