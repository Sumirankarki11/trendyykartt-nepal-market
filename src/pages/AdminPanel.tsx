
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/contexts/AuthContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const AdminPanel = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('dashboard');

  // Mock data
  const stats = {
    totalOrders: 1247,
    totalRevenue: 2845670,
    totalCustomers: 3892,
    totalProducts: 1205
  };

  const recentOrders = [
    { id: 'TK12345678', customer: 'Rajesh Sharma', amount: 12500, status: 'Processing', date: '2024-01-15' },
    { id: 'TK12345679', customer: 'Sunita Gurung', amount: 8900, status: 'Shipped', date: '2024-01-15' },
    { id: 'TK12345680', customer: 'Amit Thapa', amount: 4500, status: 'Delivered', date: '2024-01-14' },
    { id: 'TK12345681', customer: 'Priya Maharjan', amount: 15200, status: 'Processing', date: '2024-01-14' },
  ];

  const products = [
    { id: '1', name: 'Wireless Headphones', price: 4500, stock: 45, category: 'Electronics', status: 'Active' },
    { id: '2', name: 'Smart Watch', price: 8900, stock: 23, category: 'Electronics', status: 'Active' },
    { id: '3', name: 'Bluetooth Speaker', price: 3800, stock: 67, category: 'Electronics', status: 'Active' },
    { id: '4', name: 'Phone Case', price: 1200, stock: 0, category: 'Accessories', status: 'Out of Stock' },
  ];

  const customers = [
    { id: '1', name: 'Rajesh Sharma', email: 'rajesh@email.com', orders: 12, totalSpent: 45600, joinDate: '2023-05-15' },
    { id: '2', name: 'Sunita Gurung', email: 'sunita@email.com', orders: 8, totalSpent: 32400, joinDate: '2023-08-22' },
    { id: '3', name: 'Amit Thapa', email: 'amit@email.com', orders: 15, totalSpent: 67800, joinDate: '2023-03-10' },
    { id: '4', name: 'Priya Maharjan', email: 'priya@email.com', orders: 6, totalSpent: 28900, joinDate: '2023-11-05' },
  ];

  if (!user?.isAdmin) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Access Denied</h1>
          <p className="text-gray-600 mb-4">You don't have permission to access the admin panel.</p>
          <Button onClick={() => window.location.href = '/'}>
            Go to Homepage
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Delivered':
        return 'bg-green-100 text-green-800';
      case 'Processing':
        return 'bg-yellow-100 text-yellow-800';
      case 'Shipped':
        return 'bg-blue-100 text-blue-800';
      case 'Active':
        return 'bg-green-100 text-green-800';
      case 'Out of Stock':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
          
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
              <TabsTrigger value="products">Products</TabsTrigger>
              <TabsTrigger value="orders">Orders</TabsTrigger>
              <TabsTrigger value="customers">Customers</TabsTrigger>
            </TabsList>

            <TabsContent value="dashboard" className="space-y-6">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
                    <span className="text-2xl">📦</span>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{stats.totalOrders.toLocaleString()}</div>
                    <p className="text-xs text-green-600">+12% from last month</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                    <span className="text-2xl">💰</span>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">NPR {stats.totalRevenue.toLocaleString()}</div>
                    <p className="text-xs text-green-600">+8% from last month</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Customers</CardTitle>
                    <span className="text-2xl">👥</span>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{stats.totalCustomers.toLocaleString()}</div>
                    <p className="text-xs text-green-600">+15% from last month</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Products</CardTitle>
                    <span className="text-2xl">🛍️</span>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{stats.totalProducts.toLocaleString()}</div>
                    <p className="text-xs text-green-600">+5% from last month</p>
                  </CardContent>
                </Card>
              </div>

              {/* Recent Orders */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Orders</CardTitle>
                  <CardDescription>Latest orders from customers</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentOrders.map((order) => (
                      <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <p className="font-semibold">{order.id}</p>
                          <p className="text-sm text-gray-600">{order.customer}</p>
                          <p className="text-xs text-gray-500">{order.date}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold">NPR {order.amount.toLocaleString()}</p>
                          <Badge className={getStatusColor(order.status)}>
                            {order.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="products" className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-semibold">Product Management</h2>
                <Button>Add New Product</Button>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Products</CardTitle>
                  <CardDescription>Manage your product inventory</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {products.map((product) => (
                      <div key={product.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <p className="font-semibold">{product.name}</p>
                          <p className="text-sm text-gray-600">{product.category}</p>
                          <p className="text-sm">Stock: {product.stock}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold">NPR {product.price.toLocaleString()}</p>
                          <Badge className={getStatusColor(product.status)}>
                            {product.status}
                          </Badge>
                          <div className="mt-2 space-x-2">
                            <Button variant="outline" size="sm">Edit</Button>
                            <Button variant="outline" size="sm">Delete</Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="orders" className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-semibold">Order Management</h2>
                <div className="flex gap-2">
                  <Input placeholder="Search orders..." className="w-64" />
                  <Button variant="outline">Filter</Button>
                </div>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>All Orders</CardTitle>
                  <CardDescription>View and manage customer orders</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentOrders.map((order) => (
                      <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <p className="font-semibold">{order.id}</p>
                          <p className="text-sm text-gray-600">{order.customer}</p>
                          <p className="text-xs text-gray-500">{order.date}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold">NPR {order.amount.toLocaleString()}</p>
                          <Badge className={getStatusColor(order.status)}>
                            {order.status}
                          </Badge>
                          <div className="mt-2 space-x-2">
                            <Button variant="outline" size="sm">View</Button>
                            <Button variant="outline" size="sm">Update Status</Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="customers" className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-semibold">Customer Management</h2>
                <div className="flex gap-2">
                  <Input placeholder="Search customers..." className="w-64" />
                  <Button variant="outline">Export</Button>
                </div>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Customers</CardTitle>
                  <CardDescription>View and manage customer accounts</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {customers.map((customer) => (
                      <div key={customer.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <p className="font-semibold">{customer.name}</p>
                          <p className="text-sm text-gray-600">{customer.email}</p>
                          <p className="text-xs text-gray-500">Joined: {customer.joinDate}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm">Orders: {customer.orders}</p>
                          <p className="font-semibold">Total: NPR {customer.totalSpent.toLocaleString()}</p>
                          <div className="mt-2 space-x-2">
                            <Button variant="outline" size="sm">View Profile</Button>
                            <Button variant="outline" size="sm">Send Email</Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminPanel;
