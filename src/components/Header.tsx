
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, User, Heart, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/contexts/AuthContext';
import { useWishlist } from '@/contexts/WishlistContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { getTotalItems } = useCart();
  const { user, logout } = useAuth();
  const { items: wishlistItems } = useWishlist();
  const navigate = useNavigate();

  const categories = [
    'Electronics',
    'Fashion',
    'Home & Garden',
    'Sports',
    'Books',
    'Beauty',
    'Toys',
    'Automotive'
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top Bar */}
      <div className="bg-primary text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="hidden md:block">
              Free shipping on orders above NPR 2,000
            </div>
            <div className="flex items-center space-x-4">
              <span>📞 +977 9704396332</span>
              <span>✉️ help@trendyykartt.co.in</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-primary to-nepal-crimson rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">T</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-primary">Trendyykartt</h1>
              <p className="text-xs text-muted-foreground">Nepal's Marketplace</p>
            </div>
          </Link>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <form onSubmit={handleSearch} className="flex w-full">
              <Input
                type="text"
                placeholder="Search for products, brands and more..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="rounded-r-none border-r-0"
              />
              <Button type="submit" className="rounded-l-none">
                <Search className="h-4 w-4" />
              </Button>
            </form>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            {/* Wishlist */}
            <Link to="/profile" className="relative">
              <Button variant="ghost" size="sm">
                <Heart className="h-5 w-5" />
                {wishlistItems.length > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center">
                    {wishlistItems.length}
                  </Badge>
                )}
              </Button>
            </Link>

            {/* Cart */}
            <Link to="/cart" className="relative">
              <Button variant="ghost" size="sm">
                <ShoppingCart className="h-5 w-5" />
                {getTotalItems() > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center">
                    {getTotalItems()}
                  </Badge>
                )}
              </Button>
            </Link>

            {/* User Menu */}
            {user ? (
              <div className="hidden md:flex items-center space-x-2">
                <Link to="/profile">
                  <Button variant="ghost" size="sm">
                    <User className="h-5 w-5 mr-2" />
                    {user.name}
                  </Button>
                </Link>
                <Button variant="ghost" size="sm" onClick={handleLogout}>
                  Logout
                </Button>
              </div>
            ) : (
              <div className="hidden md:flex items-center space-x-2">
                <Link to="/login">
                  <Button variant="ghost" size="sm">Login</Button>
                </Link>
                <Link to="/signup">
                  <Button size="sm">Sign Up</Button>
                </Link>
              </div>
            )}

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden mt-4">
          <form onSubmit={handleSearch} className="flex">
            <Input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="rounded-r-none border-r-0"
            />
            <Button type="submit" className="rounded-l-none">
              <Search className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>

      {/* Categories Navigation */}
      <div className="hidden md:block border-t bg-gray-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-center space-x-8">
            {categories.map((category) => (
              <Link
                key={category}
                to={`/category/${category.toLowerCase()}`}
                className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
              >
                {category}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-white">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {/* Categories */}
            <div className="space-y-2">
              <h3 className="font-semibold">Categories</h3>
              {categories.map((category) => (
                <Link
                  key={category}
                  to={`/category/${category.toLowerCase()}`}
                  className="block text-sm text-gray-700 hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {category}
                </Link>
              ))}
            </div>

            {/* Auth Links */}
            <div className="pt-4 border-t space-y-2">
              {user ? (
                <>
                  <Link
                    to="/profile"
                    className="block text-sm font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Profile
                  </Link>
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsMenuOpen(false);
                    }}
                    className="block text-sm text-gray-700"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="block text-sm font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="block text-sm font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
