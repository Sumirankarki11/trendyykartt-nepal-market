
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Welcome to Trendyykartt",
      subtitle: "Nepal's Premier Online Marketplace",
      description: "Discover the latest trends and shop from thousands of quality products",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&h=600&fit=crop",
      cta: "Shop Now",
      bgGradient: "from-primary via-brand-600 to-nepal-crimson"
    },
    {
      id: 2,
      title: "Electronics & Gadgets",
      subtitle: "Latest Technology at Best Prices",
      description: "Smartphones, Laptops, Gaming accessories and more",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=600&fit=crop",
      cta: "Explore Electronics",
      bgGradient: "from-brand-600 via-primary to-brand-800"
    },
    {
      id: 3,
      title: "Fashion & Style",
      subtitle: "Trendy Clothes for Every Occasion",
      description: "Men's, Women's & Kids fashion at unbeatable prices",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=600&fit=crop",
      cta: "Shop Fashion",
      bgGradient: "from-nepal-crimson via-primary to-brand-700"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-[70vh] md:h-[80vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className={`absolute inset-0 bg-gradient-to-r ${slide.bgGradient} opacity-90`} />
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl font-medium mb-4 animate-fade-in delay-300">
                  {slide.subtitle}
                </p>
                <p className="text-lg md:text-xl mb-8 opacity-90 animate-fade-in delay-500">
                  {slide.description}
                </p>
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-4 text-lg animate-fade-in delay-700"
                >
                  {slide.cta}
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
