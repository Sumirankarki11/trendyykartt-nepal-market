
import { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
  phone?: string;
  address?: string;
  isAdmin?: boolean;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (email: string, password: string, name: string) => Promise<boolean>;
  logout: () => void;
  updateProfile: (data: Partial<User>) => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const login = async (email: string, password: string): Promise<boolean> => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Demo login - in real app, this would be an API call
    if (email === 'admin@trendyykartt.com' && password === 'admin123') {
      const userData = {
        id: '1',
        email,
        name: 'Admin User',
        isAdmin: true
      };
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
      return true;
    } else if (email && password) {
      const userData = {
        id: '2',
        email,
        name: email.split('@')[0],
        isAdmin: false
      };
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
      return true;
    }
    
    return false;
  };

  const signup = async (email: string, password: string, name: string): Promise<boolean> => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const userData = {
      id: Date.now().toString(),
      email,
      name,
      isAdmin: false
    };
    
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const updateProfile = (data: Partial<User>) => {
    if (user) {
      const updatedUser = { ...user, ...data };
      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));
    }
  };

  return (
    <AuthContext.Provider value={{
      user,
      login,
      signup,
      logout,
      updateProfile,
      isAuthenticated: !!user
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
