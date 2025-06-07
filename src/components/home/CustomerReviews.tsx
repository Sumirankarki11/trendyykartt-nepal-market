
const CustomerReviews = () => {
  const reviews = [
    {
      id: 1,
      name: 'Rajesh Sharma',
      location: 'Kathmandu',
      rating: 5,
      comment: 'Excellent service! Got my order delivered within 2 days. Quality products at great prices.',
      product: 'Wireless Headphones',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
    },
    {
      id: 2,
      name: 'Sunita Gurung',
      location: 'Pokhara',
      rating: 5,
      comment: 'Love shopping here! The app is so easy to use and customer support is amazing.',
      product: 'Fashion Dress',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face'
    },
    {
      id: 3,
      name: 'Amit Thapa',
      location: 'Lalitpur',
      rating: 4,
      comment: 'Great variety of products. Delivery was on time and packaging was excellent.',
      product: 'Smartphone',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
    },
    {
      id: 4,
      name: 'Priya Maharjan',
      location: 'Bhaktapur',
      rating: 5,
      comment: 'Best online shopping experience in Nepal! Highly recommend Trendyykartt.',
      product: 'Home Decor',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`text-lg ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
      >
        ★
      </span>
    ));
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real reviews from real customers across Nepal
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6 card-hover"
            >
              <div className="flex items-center mb-4">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{review.name}</h4>
                  <p className="text-sm text-gray-500">{review.location}</p>
                </div>
              </div>

              <div className="flex mb-3">
                {renderStars(review.rating)}
              </div>

              <p className="text-gray-700 mb-3 text-sm leading-relaxed">
                "{review.comment}"
              </p>

              <div className="border-t pt-3">
                <p className="text-xs text-gray-500">
                  Purchased: <span className="font-medium">{review.product}</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-primary to-brand-600 text-white rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Join Thousands of Happy Customers!</h3>
            <p className="text-lg opacity-90 mb-6">
              Experience the best online shopping in Nepal with fast delivery and excellent customer service.
            </p>
            <button className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
              Start Shopping Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
