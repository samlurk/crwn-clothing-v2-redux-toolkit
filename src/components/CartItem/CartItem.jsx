import "./CartItem.scss";

const CartItem = ({ cartItem }) => {
  const { title, imageUrl, price, quantity } = cartItem;
  return (
    <div className="cart-item">
      <img src={imageUrl} alt={`${title}`} />
      <div className="cart-item__details">
        <span className="cart-item__title">{title}</span>
        <span className="cart-item__price">
          {quantity} * ${price}
        </span>
      </div>
    </div>
  );
};
export default CartItem;
