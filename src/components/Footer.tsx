
import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-nepal-crimson rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">T</span>
              </div>
              <span className="text-xl font-bold">Trendyykartt</span>
            </div>
            <p className="text-gray-400 text-sm">
              Nepal's premier online marketplace offering the latest trends and quality products 
              delivered right to your doorstep.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <span>📍</span>
                <span>Baneshwor, Kathmandu, Nepal</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>📞</span>
                <span>+977 9704396332</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>✉️</span>
                <span>help@trendyykartt.co.in</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2 text-sm">
              <Link to="/about" className="block hover:text-primary transition-colors">
                About Us
              </Link>
              <Link to="/contact" className="block hover:text-primary transition-colors">
                Contact Us
              </Link>
              <Link to="/shipping" className="block hover:text-primary transition-colors">
                Shipping Info
              </Link>
              <Link to="/returns" className="block hover:text-primary transition-colors">
                Returns & Exchanges
              </Link>
              <Link to="/faq" className="block hover:text-primary transition-colors">
                FAQ
              </Link>
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Categories</h3>
            <div className="space-y-2 text-sm">
              <Link to="/category/electronics" className="block hover:text-primary transition-colors">
                Electronics
              </Link>
              <Link to="/category/fashion" className="block hover:text-primary transition-colors">
                Fashion
              </Link>
              <Link to="/category/home-garden" className="block hover:text-primary transition-colors">
                Home & Garden
              </Link>
              <Link to="/category/sports" className="block hover:text-primary transition-colors">
                Sports
              </Link>
              <Link to="/category/beauty" className="block hover:text-primary transition-colors">
                Beauty
              </Link>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Stay Updated</h3>
            <p className="text-gray-400 text-sm">
              Subscribe to our newsletter for latest offers and updates.
            </p>
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-500"
              />
              <Button className="w-full">Subscribe</Button>
            </div>
            
            {/* Social Links */}
            <div className="pt-4">
              <h4 className="text-sm font-semibold mb-2">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  📘 Facebook
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  📷 Instagram
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  🐦 Twitter
                </a>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-gray-700" />

        {/* Payment Methods */}
        <div className="mb-8">
          <h4 className="text-sm font-semibold mb-4">We Accept</h4>
          <div className="flex flex-wrap gap-4 items-center">
            <div className="bg-white rounded px-3 py-2 text-sm font-medium text-gray-900">
              eSewa
            </div>
            <div className="bg-white rounded px-3 py-2 text-sm font-medium text-gray-900">
              Khalti
            </div>
            <div className="bg-white rounded px-3 py-2 text-sm font-medium text-gray-900">
              VISA
            </div>
            <div className="bg-white rounded px-3 py-2 text-sm font-medium text-gray-900">
              MasterCard
            </div>
            <div className="bg-white rounded px-3 py-2 text-sm font-medium text-gray-900">
              Bank Transfer
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-gray-700" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-gray-400">
          <div className="flex flex-wrap items-center space-x-4">
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link to="/security" className="hover:text-white transition-colors">
              Security
            </Link>
          </div>
          <div>
            © 2024 Trendyykartt. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
