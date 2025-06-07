
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/home/HeroSection';
import CategorySection from '@/components/home/CategorySection';
import FlashSaleSection from '@/components/home/FlashSaleSection';
import TrendingProducts from '@/components/home/TrendingProducts';
import CustomerReviews from '@/components/home/CustomerReviews';
import FeaturedBrands from '@/components/home/FeaturedBrands';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <CategorySection />
        <FlashSaleSection />
        <TrendingProducts />
        <FeaturedBrands />
        <CustomerReviews />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
