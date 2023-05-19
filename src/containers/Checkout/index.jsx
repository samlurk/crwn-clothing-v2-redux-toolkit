import { useContext } from "react";
import { CartContext } from "../../contexts/Cart";
import { CheckoutContainer, Header, Block, Total } from "./index.styles";
import CheckoutItem from "../../components/CheckoutItem";

const Checkout = () => {
  const { cartItems, totalCart } = useContext(CartContext);
  return (
    <CheckoutContainer>
      <Header>
        <Block>
          <span>Product</span>
        </Block>
        <Block>
          <span>Description</span>
        </Block>
        <Block>
          <span>Quantity</span>
        </Block>
        <Block>
          <span>Price</span>
        </Block>
        <Block>
          <span>Remove</span>
        </Block>
      </Header>
      {cartItems.map((item) => (
        <CheckoutItem cartItem={item} key={item.title} />
      ))}
      <Total>${totalCart}</Total>
    </CheckoutContainer>
  );
};

export default Checkout;
