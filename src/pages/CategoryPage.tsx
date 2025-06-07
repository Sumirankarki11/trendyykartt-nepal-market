
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';

const CategoryPage = () => {
  const { category } = useParams();
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState([0, 50000]);
  const [selectedRating, setSelectedRating] = useState('all');

  // Mock products data for each category
  const getProductsByCategory = (categoryName: string) => {
    const allProducts = {
      electronics: [
        {
          id: 'e1',
          name: 'Premium Wireless Bluetooth Headphones',
          price: 4500,
          originalPrice: 7500,
          image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop',
          rating: 4.5,
          reviews: 128,
          discount: 40
        },
        {
          id: 'e2',
          name: 'Smart Fitness Watch',
          price: 8900,
          originalPrice: 12000,
          image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop',
          rating: 4.3,
          reviews: 89,
          discount: 26
        },
        {
          id: 'e3',
          name: 'Gaming Laptop Pro',
          price: 125000,
          image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300&h=300&fit=crop',
          rating: 4.7,
          reviews: 203
        },
        {
          id: 'e4',
          name: 'Wireless Gaming Mouse',
          price: 4200,
          image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=300&fit=crop',
          rating: 4.8,
          reviews: 156
        },
        {
          id: 'e5',
          name: 'Mechanical Gaming Keyboard',
          price: 6500,
          image: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=300&h=300&fit=crop',
          rating: 4.6,
          reviews: 94
        },
        {
          id: 'e6',
          name: 'Portable Power Bank 20000mAh',
          price: 2800,
          originalPrice: 4200,
          image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=300&h=300&fit=crop',
          rating: 4.7,
          reviews: 203,
          discount: 33
        }
      ],
      fashion: [
        {
          id: 'f1',
          name: 'Premium Cotton T-Shirt',
          price: 1200,
          originalPrice: 1800,
          image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop',
          rating: 4.4,
          reviews: 67,
          discount: 33
        },
        {
          id: 'f2',
          name: 'Denim Jacket',
          price: 3500,
          image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5a?w=300&h=300&fit=crop',
          rating: 4.2,
          reviews: 89
        },
        {
          id: 'f3',
          name: 'Designer Handbag',
          price: 2800,
          image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop',
          rating: 4.6,
          reviews: 134
        },
        {
          id: 'f4',
          name: 'Running Shoes',
          price: 5500,
          originalPrice: 7000,
          image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop',
          rating: 4.5,
          reviews: 178,
          discount: 21
        },
        {
          id: 'f5',
          name: 'Casual Dress',
          price: 2200,
          image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=300&h=300&fit=crop',
          rating: 4.3,
          reviews: 92
        },
        {
          id: 'f6',
          name: 'Stylish Sunglasses',
          price: 1800,
          image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=300&h=300&fit=crop',
          rating: 4.2,
          reviews: 52
        }
      ],
      'home-&-garden': [
        {
          id: 'h1',
          name: 'Ceramic Plant Pot Set',
          price: 1500,
          image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&h=300&fit=crop',
          rating: 4.5,
          reviews: 76
        },
        {
          id: 'h2',
          name: 'LED Table Lamp',
          price: 2800,
          originalPrice: 3500,
          image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
          rating: 4.3,
          reviews: 89,
          discount: 20
        },
        {
          id: 'h3',
          name: 'Ergonomic Desk Chair',
          price: 15000,
          image: 'https://images.unsplash.com/photo-1586996292898-71f4036c4e07?w=300&h=300&fit=crop',
          rating: 4.7,
          reviews: 112
        },
        {
          id: 'h4',
          name: 'Kitchen Knife Set',
          price: 3200,
          image: 'https://images.unsplash.com/photo-1593618998160-e34014e67546?w=300&h=300&fit=crop',
          rating: 4.6,
          reviews: 143
        },
        {
          id: 'h5',
          name: 'Decorative Wall Mirror',
          price: 4500,
          image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=300&fit=crop',
          rating: 4.4,
          reviews: 67
        },
        {
          id: 'h6',
          name: 'Garden Tool Set',
          price: 2500,
          image: 'https://images.unsplash.com/photo-1416664513030-0c5a23032707?w=300&h=300&fit=crop',
          rating: 4.2,
          reviews: 88
        }
      ],
      sports: [
        {
          id: 's1',
          name: 'Football/Soccer Ball',
          price: 1800,
          image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=300&h=300&fit=crop',
          rating: 4.3,
          reviews: 156
        },
        {
          id: 's2',
          name: 'Yoga Mat Premium',
          price: 2200,
          originalPrice: 3000,
          image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=300&h=300&fit=crop',
          rating: 4.6,
          reviews: 201,
          discount: 27
        },
        {
          id: 's3',
          name: 'Dumbbell Set 20kg',
          price: 8500,
          image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop',
          rating: 4.7,
          reviews: 89
        },
        {
          id: 's4',
          name: 'Cricket Bat Willow',
          price: 4500,
          image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=300&h=300&fit=crop',
          rating: 4.4,
          reviews: 76
        },
        {
          id: 's5',
          name: 'Basketball Spalding',
          price: 2800,
          image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=300&h=300&fit=crop',
          rating: 4.5,
          reviews: 134
        },
        {
          id: 's6',
          name: 'Badminton Racket Set',
          price: 3200,
          image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=300&h=300&fit=crop',
          rating: 4.3,
          reviews: 92
        }
      ],
      books: [
        {
          id: 'b1',
          name: 'Programming Fundamentals',
          price: 1200,
          image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=300&fit=crop',
          rating: 4.8,
          reviews: 234
        },
        {
          id: 'b2',
          name: 'Nepal History & Culture',
          price: 800,
          image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
          rating: 4.6,
          reviews: 156
        },
        {
          id: 'b3',
          name: 'Business Management',
          price: 1500,
          originalPrice: 2000,
          image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=300&fit=crop',
          rating: 4.4,
          reviews: 189,
          discount: 25
        },
        {
          id: 'b4',
          name: 'Fiction Novel Set',
          price: 2200,
          image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=300&fit=crop',
          rating: 4.7,
          reviews: 298
        },
        {
          id: 'b5',
          name: 'Cookbook Collection',
          price: 1800,
          image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=300&fit=crop',
          rating: 4.5,
          reviews: 167
        },
        {
          id: 'b6',
          name: 'Children Story Books',
          price: 1000,
          image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
          rating: 4.6,
          reviews: 203
        }
      ],
      beauty: [
        {
          id: 'be1',
          name: 'Premium Skincare Set',
          price: 3500,
          originalPrice: 4500,
          image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=300&h=300&fit=crop',
          rating: 4.6,
          reviews: 189,
          discount: 22
        },
        {
          id: 'be2',
          name: 'Makeup Brush Set',
          price: 1800,
          image: 'https://images.unsplash.com/photo-1583192149672-2ca0fa4c2100?w=300&h=300&fit=crop',
          rating: 4.4,
          reviews: 134
        },
        {
          id: 'be3',
          name: 'Hair Straightener',
          price: 4200,
          image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=300&h=300&fit=crop',
          rating: 4.3,
          reviews: 98
        },
        {
          id: 'be4',
          name: 'Face Mask Collection',
          price: 1200,
          image: 'https://images.unsplash.com/photo-1570554886111-e80fcca6a029?w=300&h=300&fit=crop',
          rating: 4.5,
          reviews: 167
        },
        {
          id: 'be5',
          name: 'Perfume Set',
          price: 2800,
          image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=300&h=300&fit=crop',
          rating: 4.7,
          reviews: 234
        },
        {
          id: 'be6',
          name: 'Nail Care Kit',
          price: 1500,
          image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=300&h=300&fit=crop',
          rating: 4.2,
          reviews: 89
        }
      ],
      toys: [
        {
          id: 't1',
          name: 'Educational Building Blocks',
          price: 2200,
          image: 'https://images.unsplash.com/photo-1558060370-d1d1bcc1d9cc?w=300&h=300&fit=crop',
          rating: 4.7,
          reviews: 156
        },
        {
          id: 't2',
          name: 'Remote Control Car',
          price: 3800,
          originalPrice: 5000,
          image: 'https://images.unsplash.com/photo-1560269999-cef6ebd23ad3?w=300&h=300&fit=crop',
          rating: 4.5,
          reviews: 189,
          discount: 24
        },
        {
          id: 't3',
          name: 'Puzzle Set 1000 Pieces',
          price: 1500,
          image: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=300&h=300&fit=crop',
          rating: 4.4,
          reviews: 134
        },
        {
          id: 't4',
          name: 'Action Figure Collection',
          price: 2800,
          image: 'https://images.unsplash.com/photo-1567443024551-ce44119fc67c?w=300&h=300&fit=crop',
          rating: 4.6,
          reviews: 203
        },
        {
          id: 't5',
          name: 'Board Game Family Pack',
          price: 3200,
          image: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=300&h=300&fit=crop',
          rating: 4.8,
          reviews: 167
        },
        {
          id: 't6',
          name: 'Art & Craft Kit',
          price: 1800,
          image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=300&h=300&fit=crop',
          rating: 4.3,
          reviews: 98
        }
      ],
      automotive: [
        {
          id: 'a1',
          name: 'Car Phone Mount',
          price: 800,
          image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=300&h=300&fit=crop',
          rating: 4.3,
          reviews: 156
        },
        {
          id: 'a2',
          name: 'Car Vacuum Cleaner',
          price: 3500,
          originalPrice: 4500,
          image: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=300&h=300&fit=crop',
          rating: 4.5,
          reviews: 89,
          discount: 22
        },
        {
          id: 'a3',
          name: 'Dashboard Camera',
          price: 8500,
          image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=300&h=300&fit=crop',
          rating: 4.6,
          reviews: 134
        },
        {
          id: 'a4',
          name: 'Car Air Freshener Set',
          price: 500,
          image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=300&h=300&fit=crop',
          rating: 4.2,
          reviews: 203
        },
        {
          id: 'a5',
          name: 'Emergency Car Kit',
          price: 2800,
          image: 'https://images.unsplash.com/photo-1559526324-593bc073d938?w=300&h=300&fit=crop',
          rating: 4.4,
          reviews: 98
        },
        {
          id: 'a6',
          name: 'Car Seat Covers',
          price: 4200,
          image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=300&h=300&fit=crop',
          rating: 4.3,
          reviews: 167
        }
      ]
    };

    return allProducts[categoryName as keyof typeof allProducts] || [];
  };

  const getCategoryTitle = (categorySlug: string) => {
    const titles: { [key: string]: string } = {
      'electronics': 'Electronics',
      'fashion': 'Fashion',
      'home-&-garden': 'Home & Garden',
      'sports': 'Sports',
      'books': 'Books',
      'beauty': 'Beauty',
      'toys': 'Toys',
      'automotive': 'Automotive'
    };
    return titles[categorySlug] || 'Category';
  };

  const products = getProductsByCategory(category || '');
  const categoryTitle = getCategoryTitle(category || '');

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-600 mb-6">
          <span>Home</span> / <span className="text-gray-900">{categoryTitle}</span>
        </div>

        {/* Category Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {categoryTitle}
          </h1>
          <p className="text-gray-600">
            Discover amazing {categoryTitle.toLowerCase()} products at great prices
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg p-6 shadow-md mb-6">
              <h3 className="font-semibold text-lg mb-4">Filters</h3>
              
              {/* Price Range */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Price Range</h4>
                <div className="space-y-3">
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={50000}
                    min={0}
                    step={500}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>NPR {priceRange[0].toLocaleString()}</span>
                    <span>NPR {priceRange[1].toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* Rating Filter */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Customer Rating</h4>
                <div className="space-y-2">
                  {['all', '4+', '3+', '2+'].map((rating) => (
                    <label key={rating} className="flex items-center">
                      <input
                        type="radio"
                        name="rating"
                        value={rating}
                        checked={selectedRating === rating}
                        onChange={(e) => setSelectedRating(e.target.value)}
                        className="mr-2"
                      />
                      <span className="text-sm">
                        {rating === 'all' ? 'All Ratings' : `${rating} Stars & Up`}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => {
                  setPriceRange([0, 50000]);
                  setSelectedRating('all');
                  setSortBy('featured');
                }}
              >
                Clear All Filters
              </Button>
            </div>
          </div>

          {/* Products Section */}
          <div className="lg:w-3/4">
            {/* Sort and Results Info */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
              <div>
                <p className="text-gray-600">
                  Showing {products.length} results for "{categoryTitle}"
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium">Sort by:</span>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Customer Rating</SelectItem>
                    <SelectItem value="newest">Newest First</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Products Grid */}
            {products.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No products found in this category.</p>
                <Button className="mt-4">Browse All Categories</Button>
              </div>
            )}

            {/* Load More Button */}
            {products.length > 0 && (
              <div className="text-center mt-12">
                <Button variant="outline" size="lg">
                  Load More Products
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CategoryPage;
