import { useContext } from "react";
import { CartContext } from "../../contexts/Cart";
import "./Checkout.scss";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";

const Checkout = () => {
  const { cartItems, totalCart } = useContext(CartContext);
  return (
    <div className="checkout">
      <div className="checkout-header">
        <div className="checkout-header__block">
          <span>Product</span>
        </div>
        <div className="checkout-header__block">
          <span>Description</span>
        </div>
        <div className="checkout-header__block">
          <span>Quantity</span>
        </div>
        <div className="checkout-header__block">
          <span>Price</span>
        </div>
        <div className="checkout-header__block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((item) => (
        <CheckoutItem cartItem={item} key={item.id} />
      ))}
      <span className="checkout__total">${totalCart}</span>
    </div>
  );
};

export default Checkout;
