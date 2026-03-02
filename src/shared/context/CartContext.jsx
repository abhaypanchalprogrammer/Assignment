import { createContext, useContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const getCart = localStorage.getItem("cart");
    if (getCart) {
      setCart(JSON.parse(getCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevItem) => {
      const existingItem = prevItem.find((item) => item.id === product.id);

      if (existingItem) {
        return prevItem.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...prevItem, { ...product, quantity: 1 }];
    });
  };

  const removeCart = (id) => {
    setCart((prevItem) => prevItem.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, amount) => {
    setCart((prevItem) =>
      prevItem.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item,
      ),
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalAmount = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  return (
    <CartContext.Provider
      value={{
        totalAmount,
        clearCart,
        updateQuantity,
        addToCart,
        removeCart,
        cart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
