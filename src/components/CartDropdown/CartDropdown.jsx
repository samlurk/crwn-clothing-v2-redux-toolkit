import Button from "../Button/Button";
import "./CartDropdown.scss";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-dropdown__cart-items" />
      <Button>Go to checkout</Button>
    </div>
  );
};

export default CartDropdown;
