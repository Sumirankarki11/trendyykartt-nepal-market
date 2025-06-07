
const FeaturedBrands = () => {
  const brands = [
    {
      name: 'Samsung',
      logo: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=200&h=100&fit=crop',
      description: 'Electronics & Mobile'
    },
    {
      name: 'Nike',
      logo: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&h=100&fit=crop',
      description: 'Sports & Fashion'
    },
    {
      name: 'Apple',
      logo: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=200&h=100&fit=crop',
      description: 'Premium Electronics'
    },
    {
      name: 'Adidas',
      logo: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?w=200&h=100&fit=crop',
      description: 'Sports & Lifestyle'
    },
    {
      name: 'Sony',
      logo: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=100&fit=crop',
      description: 'Audio & Electronics'
    },
    {
      name: 'HP',
      logo: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=200&h=100&fit=crop',
      description: 'Computers & Printers'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Brands
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Shop from your favorite global and local brands all in one place
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6 text-center card-hover cursor-pointer"
            >
              <div
                className="h-16 bg-gray-100 rounded-lg mb-4 bg-cover bg-center"
                style={{ backgroundImage: `url(${brand.logo})` }}
              />
              <h3 className="font-semibold text-gray-900 mb-1">{brand.name}</h3>
              <p className="text-sm text-gray-500">{brand.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn-secondary">
            View All Brands
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBrands;
