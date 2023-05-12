import { useContext } from "react";
import "./CheckoutItem.scss";
import { CartContext } from "../../contexts/Cart";

const CheckoutItem = ({ cartItem }) => {
  const { id, title, imageUrl, price, quantity } = cartItem;
  const { clearItemFromCart, addItemToCart, removeItemToCart } =
    useContext(CartContext);

  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemToCart(cartItem);
  const clearItemHandler = () => clearItemFromCart(id);
  return (
    <div className="checkout-item">
      <div className="checkout-item__image">
        <img src={imageUrl} alt={`${title}`} />
      </div>
      <span className="checkout-item__title">{title}</span>
      <span className="checkout-item__quantity">
        <div className="checkout-item__arrow" onClick={removeItemHandler}>
          &#10094;
        </div>
        <span className="checkout-item__value">{quantity}</span>
        <div className="checkout-item__arrow" onClick={addItemHandler}>
          &#10095;
        </div>
      </span>
      <span className="checkout-item__price">{price}</span>
      <span className="checkout-item__remove-button" onClick={clearItemHandler}>
        &#10005;
      </span>
    </div>
  );
};

export default CheckoutItem;
