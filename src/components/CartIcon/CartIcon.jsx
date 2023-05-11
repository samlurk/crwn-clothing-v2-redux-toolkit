import { useContext } from "react";
import ShoppingIcon from "../../assets/shopping-bag.svg";
import "./CartIcon.scss";
import { CartContext } from "../../contexts/Cart";

const CartIcon = () => {
  const { toggleIsCartOpen, cartCount } = useContext(CartContext);

  return (
    <div className="cart-icon" onClick={toggleIsCartOpen}>
      <img src={`${ShoppingIcon}`} className="cart-icon__shopping-icon" />
      <span className="cart-icon__item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
