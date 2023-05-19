import { useContext } from "react";
import CartItem from "../CartItem";
import { CartDropdownContainer, CartItems, EmptyMessage } from "./index.styles";
import { CartContext } from "../../../contexts/Cart";
import { useNavigate } from "react-router-dom";
import Button from "../../Button";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  const navigate = useNavigate();
  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };
  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.title} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
        {}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>Go to checkout</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
