
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/contexts/AuthContext';
import { useWishlist } from '@/contexts/WishlistContext';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';

const Profile = () => {
  const { user, updateProfile } = useAuth();
  const { items: wishlistItems, removeFromWishlist } = useWishlist();
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    address: user?.address || ''
  });

  const mockOrders = [
    {
      id: 'ORD-001',
      date: '2024-01-15',
      status: 'Delivered',
      total: 12500,
      items: [
        { name: 'Wireless Headphones', quantity: 1, price: 4500 },
        { name: 'Smart Watch', quantity: 1, price: 8000 }
      ]
    },
    {
      id: 'ORD-002',
      date: '2024-01-10',
      status: 'Processing',
      total: 3200,
      items: [
        { name: 'Phone Case', quantity: 2, price: 1600 }
      ]
    },
    {
      id: 'ORD-003',
      date: '2024-01-05',
      status: 'Shipped',
      total: 7800,
      items: [
        { name: 'Bluetooth Speaker', quantity: 1, price: 3800 },
        { name: 'Power Bank', quantity: 1, price: 2800 },
        { name: 'USB Cable', quantity: 2, price: 600 }
      ]
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSaveProfile = () => {
    updateProfile(formData);
    setIsEditing(false);
    toast({
      title: "Profile updated",
      description: "Your profile has been successfully updated."
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Delivered':
        return 'bg-green-100 text-green-800';
      case 'Processing':
        return 'bg-yellow-100 text-yellow-800';
      case 'Shipped':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Please log in to view your profile</h1>
          <Button onClick={() => window.location.href = '/login'}>
            Go to Login
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">My Account</h1>
          
          <Tabs defaultValue="profile" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="orders">Order History</TabsTrigger>
              <TabsTrigger value="wishlist">Wishlist</TabsTrigger>
            </TabsList>

            <TabsContent value="profile">
              <Card>
                <CardHeader>
                  <CardTitle>Profile Information</CardTitle>
                  <CardDescription>
                    Manage your account details and preferences
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="address">Address</Label>
                      <Input
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        placeholder="Enter your address"
                      />
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    {isEditing ? (
                      <>
                        <Button onClick={handleSaveProfile}>
                          Save Changes
                        </Button>
                        <Button 
                          variant="outline" 
                          onClick={() => {
                            setIsEditing(false);
                            setFormData({
                              name: user?.name || '',
                              email: user?.email || '',
                              phone: user?.phone || '',
                              address: user?.address || ''
                            });
                          }}
                        >
                          Cancel
                        </Button>
                      </>
                    ) : (
                      <Button onClick={() => setIsEditing(true)}>
                        Edit Profile
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="orders">
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">Order History</h2>
                {mockOrders.map((order) => (
                  <Card key={order.id}>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg">Order {order.id}</CardTitle>
                          <CardDescription>
                            Placed on {new Date(order.date).toLocaleDateString()}
                          </CardDescription>
                        </div>
                        <div className="text-right">
                          <Badge className={getStatusColor(order.status)}>
                            {order.status}
                          </Badge>
                          <p className="text-lg font-semibold mt-1">
                            NPR {order.total.toLocaleString()}
                          </p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {order.items.map((item, index) => (
                          <div key={index} className="flex justify-between items-center">
                            <span>{item.name} x {item.quantity}</span>
                            <span>NPR {(item.price * item.quantity).toLocaleString()}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex gap-2 mt-4">
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                        {order.status === 'Delivered' && (
                          <Button variant="outline" size="sm">
                            Reorder
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="wishlist">
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold">My Wishlist</h2>
                {wishlistItems.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {wishlistItems.map((item) => (
                      <ProductCard key={item.id} product={item} />
                    ))}
                  </div>
                ) : (
                  <Card>
                    <CardContent className="text-center py-12">
                      <h3 className="text-lg font-semibold mb-2">Your wishlist is empty</h3>
                      <p className="text-gray-600 mb-4">
                        Save items you love to your wishlist
                      </p>
                      <Button onClick={() => window.location.href = '/'}>
                        Start Shopping
                      </Button>
                    </CardContent>
                  </Card>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
