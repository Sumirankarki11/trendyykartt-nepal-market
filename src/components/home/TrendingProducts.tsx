
import ProductCard from '@/components/ProductCard';

const TrendingProducts = () => {
  const trendingProducts = [
    {
      id: '5',
      name: 'Premium Leather Wallet',
      price: 2500,
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop',
      rating: 4.6,
      reviews: 94
    },
    {
      id: '6',
      name: 'Wireless Gaming Mouse',
      price: 4200,
      image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=300&fit=crop',
      rating: 4.8,
      reviews: 156
    },
    {
      id: '7',
      name: 'Bluetooth Speaker',
      price: 3800,
      image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=300&fit=crop',
      rating: 4.4,
      reviews: 78
    },
    {
      id: '8',
      name: 'Stylish Sunglasses',
      price: 1800,
      image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=300&h=300&fit=crop',
      rating: 4.2,
      reviews: 52
    },
    {
      id: '9',
      name: 'Smart Phone Stand',
      price: 1200,
      image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=300&h=300&fit=crop',
      rating: 4.5,
      reviews: 89
    },
    {
      id: '10',
      name: 'USB-C Cable Set',
      price: 800,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop',
      rating: 4.3,
      reviews: 134
    },
    {
      id: '11',
      name: 'Laptop Cooling Pad',
      price: 2800,
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300&h=300&fit=crop',
      rating: 4.4,
      reviews: 67
    },
    {
      id: '12',
      name: 'Ergonomic Desk Chair',
      price: 15000,
      image: 'https://images.unsplash.com/photo-1586996292898-71f4036c4e07?w=300&h=300&fit=crop',
      rating: 4.7,
      reviews: 112
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trending Products
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover what's popular right now - handpicked products that everyone's talking about
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn-secondary">
            View All Trending Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;
