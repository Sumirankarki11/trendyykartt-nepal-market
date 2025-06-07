
import { createContext, useContext, useState, ReactNode } from 'react';

export interface WishlistItem {
  id: string;
  name: string;
  price: number;
  image: string;
  rating: number;
}

interface WishlistContextType {
  items: WishlistItem[];
  addToWishlist: (product: WishlistItem) => void;
  removeFromWishlist: (id: string) => void;
  isInWishlist: (id: string) => boolean;
  clearWishlist: () => void;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const WishlistProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<WishlistItem[]>([]);

  const addToWishlist = (product: WishlistItem) => {
    setItems(prevItems => {
      const exists = prevItems.find(item => item.id === product.id);
      if (exists) return prevItems;
      return [...prevItems, product];
    });
  };

  const removeFromWishlist = (id: string) => {
    setItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const isInWishlist = (id: string) => {
    return items.some(item => item.id === id);
  };

  const clearWishlist = () => {
    setItems([]);
  };

  return (
    <WishlistContext.Provider value={{
      items,
      addToWishlist,
      removeFromWishlist,
      isInWishlist,
      clearWishlist
    }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};
