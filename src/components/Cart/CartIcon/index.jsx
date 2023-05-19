import { useContext } from "react";
import ShoppingSvg from "../../../assets/shopping-bag.svg";
import { CartIconContainer, ShoppingIcon, ItemCount } from "./index.styles";
import { CartContext } from "../../../contexts/Cart";

const CartIcon = () => {
  const { toggleIsCartOpen, cartCount } = useContext(CartContext);

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon src={`${ShoppingSvg}`} />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
