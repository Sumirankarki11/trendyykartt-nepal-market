
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, Search, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  const popularPages = [
    { name: 'Home', path: '/', icon: <Home className="h-4 w-4" /> },
    { name: 'Electronics', path: '/category/electronics', icon: <Search className="h-4 w-4" /> },
    { name: 'Fashion', path: '/category/fashion', icon: <Search className="h-4 w-4" /> },
    { name: 'Login', path: '/login', icon: <Search className="h-4 w-4" /> },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          {/* 404 Illustration */}
          <div className="mb-8">
            <div className="text-8xl font-bold text-primary mb-4">404</div>
            <div className="text-6xl mb-6">🛍️</div>
          </div>

          <Card className="mb-8">
            <CardContent className="p-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Oops! Page Not Found
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                The page you're looking for doesn't exist or has been moved.
              </p>
              <p className="text-sm text-gray-500 mb-8">
                Requested URL: <code className="bg-gray-100 px-2 py-1 rounded">{location.pathname}</code>
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button onClick={() => window.history.back()} variant="outline" className="flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Go Back
                </Button>
                <Link to="/">
                  <Button className="flex items-center gap-2">
                    <Home className="h-4 w-4" />
                    Return to Home
                  </Button>
                </Link>
              </div>

              {/* Popular Pages */}
              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold mb-4 text-gray-900">
                  Popular Pages
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {popularPages.map((page) => (
                    <Link
                      key={page.path}
                      to={page.path}
                      className="flex items-center gap-2 p-3 text-sm border rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      {page.icon}
                      {page.name}
                    </Link>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Help Section */}
          <Card className="bg-gradient-to-r from-primary/10 to-brand-600/10">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-3">Need Help?</h3>
              <p className="text-gray-600 mb-4">
                Can't find what you're looking for? Our support team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a 
                  href="tel:+9779704396332" 
                  className="flex items-center gap-2 text-primary hover:underline"
                >
                  📞 +977 9704396332
                </a>
                <a 
                  href="mailto:help@trendyykartt.co.in" 
                  className="flex items-center gap-2 text-primary hover:underline"
                >
                  ✉️ help@trendyykartt.co.in
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Search Suggestion */}
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">
              Try searching for what you need:
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex">
                <input
                  type="text"
                  placeholder="Search products, categories..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <Button className="rounded-l-none">
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
