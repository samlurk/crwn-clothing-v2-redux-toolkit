import { createContext, useEffect, useState } from "react";

const addCartItemsOnLocalStorage = (cartItems) => {
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  return cartItems;
};
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

const removeCartItem = (cartItems, cartItemToRemove) => {
  return cartItems.filter((item) => {
    if (item.id !== cartItemToRemove.id) {
      return item;
    } else {
      item.quantity--;
      if (item.quantity > 0) {
        return item;
      }
    }
  });
};

const clearCartItem = (cartItems, id) => {
  return cartItems.filter((item) => item.id !== id);
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => false,
  cartItems: [],
  cartCount: 0,
  totalCart: 0,
  addItemToCart: () => {},
  removeItemToCart: () => {},
  clearItemFromCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [totalCart, setTotalCart] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, carItem) => total + carItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newTotalCart = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    setTotalCart(newTotalCart);
  }, [cartItems]);

  useEffect(() => {
    const cartItems = localStorage.getItem("cartItems");
    if (cartItems) setCartItems(JSON.parse(cartItems));
  }, []);

  const removeItemToCart = (cartItemToRemove) => {
    setCartItems(
      addCartItemsOnLocalStorage(removeCartItem(cartItems, cartItemToRemove))
    );
  };

  const addItemToCart = (productToAdd) => {
    setCartItems(
      addCartItemsOnLocalStorage(addCartItem(cartItems, productToAdd))
    );
  };

  const clearItemFromCart = (id) => {
    setCartItems(addCartItemsOnLocalStorage(clearCartItem(cartItems, id)));
  };

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  const value = {
    isCartOpen,
    setIsCartOpen,
    toggleIsCartOpen,
    cartItems,
    addItemToCart,
    cartCount,
    removeItemToCart,
    clearItemFromCart,
    totalCart,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
