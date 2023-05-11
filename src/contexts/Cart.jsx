import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  let [...items] = cartItems;
  const [isFound] = [
    ...cartItems.filter((item, index) => {
      if (item.id === productToAdd.id) {
        items[index].quantity++;
        return item;
      }
    }),
  ];
  if (!isFound) items = [...items, { ...productToAdd, quantity: 1 }];
  return items;
};
export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => false,
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, carItem) => total + carItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  const value = {
    isCartOpen,
    setIsCartOpen,
    toggleIsCartOpen,
    cartItems,
    addItemToCart,
    cartCount,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
