
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const CategoriesPage = () => {
  const categories = [
    {
      name: 'Electronics',
      slug: 'electronics',
      icon: '📱',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop',
      count: '1,200+ items',
      description: 'Smartphones, laptops, gaming gear and more'
    },
    {
      name: 'Fashion',
      slug: 'fashion',
      icon: '👗',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop',
      count: '2,500+ items',
      description: 'Clothing, shoes, accessories for all'
    },
    {
      name: 'Home & Garden',
      slug: 'home-&-garden',
      icon: '🏡',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
      count: '800+ items',
      description: 'Furniture, decor, gardening supplies'
    },
    {
      name: 'Sports',
      slug: 'sports',
      icon: '⚽',
      image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=400&h=300&fit=crop',
      count: '600+ items',
      description: 'Fitness equipment, outdoor gear, sports accessories'
    },
    {
      name: 'Books',
      slug: 'books',
      icon: '📚',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop',
      count: '1,000+ items',
      description: 'Educational, fiction, and reference books'
    },
    {
      name: 'Beauty',
      slug: 'beauty',
      icon: '💄',
      image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=300&fit=crop',
      count: '400+ items',
      description: 'Skincare, makeup, hair care products'
    },
    {
      name: 'Toys',
      slug: 'toys',
      icon: '🧸',
      image: 'https://images.unsplash.com/photo-1558060370-d1d1bcc1d9cc?w=400&h=300&fit=crop',
      count: '300+ items',
      description: 'Educational toys, games, and entertainment'
    },
    {
      name: 'Automotive',
      slug: 'automotive',
      icon: '🚗',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&h=300&fit=crop',
      count: '200+ items',
      description: 'Car accessories, tools, and maintenance'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-600 mb-6">
          <span>Home</span> / <span className="text-gray-900">All Categories</span>
        </div>

        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Shop by Category
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find everything you need across our wide range of product categories
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {categories.map((category) => (
            <Link
              key={category.slug}
              to={`/category/${category.slug}`}
              className="group"
            >
              <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden card-hover">
                <div className="relative">
                  <div 
                    className="h-48 bg-cover bg-center"
                    style={{ backgroundImage: `url(${category.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 left-4 text-3xl bg-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg">
                    {category.icon}
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-semibold text-xl mb-1 group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-sm opacity-90">{category.count}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm">
                    {category.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Featured Categories Section */}
        <div className="mt-16 bg-white rounded-lg p-8 shadow-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.slice(0, 4).map((category) => (
              <Link
                key={`featured-${category.slug}`}
                to={`/category/${category.slug}`}
                className="text-center group"
              >
                <div className="bg-gray-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="text-2xl">{category.icon}</span>
                </div>
                <h3 className="font-medium text-gray-900 group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-500 mt-1">{category.count}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CategoriesPage;
