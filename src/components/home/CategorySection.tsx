
import { Link } from 'react-router-dom';

const CategorySection = () => {
  const categories = [
    {
      name: 'Electronics',
      icon: '📱',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300&h=200&fit=crop',
      count: '1,200+ items'
    },
    {
      name: 'Fashion',
      icon: '👗',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop',
      count: '2,500+ items'
    },
    {
      name: 'Home & Garden',
      icon: '🏡',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=200&fit=crop',
      count: '800+ items'
    },
    {
      name: 'Sports',
      icon: '⚽',
      image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=300&h=200&fit=crop',
      count: '600+ items'
    },
    {
      name: 'Books',
      icon: '📚',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=200&fit=crop',
      count: '1,000+ items'
    },
    {
      name: 'Beauty',
      icon: '💄',
      image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=300&h=200&fit=crop',
      count: '400+ items'
    },
    {
      name: 'Toys',
      icon: '🧸',
      image: 'https://images.unsplash.com/photo-1558060370-d1d1bcc1d9cc?w=300&h=200&fit=crop',
      count: '300+ items'
    },
    {
      name: 'Automotive',
      icon: '🚗',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=300&h=200&fit=crop',
      count: '200+ items'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Shop by Category
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find everything you need across our wide range of product categories
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={`/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
              className="group"
            >
              <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden card-hover">
                <div className="relative">
                  <div 
                    className="h-32 md:h-40 bg-cover bg-center"
                    style={{ backgroundImage: `url(${category.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 left-4 text-2xl bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
                    {category.icon}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-500">{category.count}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/categories">
            <button className="btn-secondary">
              View All Categories
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
