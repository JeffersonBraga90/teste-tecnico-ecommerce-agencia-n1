import { createContext, useContext, useState, type ReactNode } from "react";

export type CartItem = {
  id: number | string;
  name: string;
  image: string;
  price: string;
  flagPorcentage?: string;
  flagPromotion?: string;
  listPrice?: string;
};

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  showCart: boolean;
  toggleCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (item: CartItem) => {
    setCartItems((prev) => [...prev, item]);
  };

  const toggleCart = () => setShowCart((v) => !v);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, showCart, toggleCart }}>
      {children}
    </CartContext.Provider>
  );
};
