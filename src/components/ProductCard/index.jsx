import { useContext } from "react";
import { BUTTON_TYPE_CLASSES } from "../Button";
import {
  ProductContainer,
  Image,
  ProductButton,
  Footer,
  Title,
  Price,
} from "./index.styles";
import { CartContext } from "../../contexts/Cart";

const ProductCard = ({ product }) => {
  const { title, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);
  const addProductToCart = () => addItemToCart(product);
  return (
    <ProductContainer>
      <Image src={imageUrl} alt={`${title}`} />
      <Footer>
        <Title>{title}</Title>
        <Price>${price}</Price>
      </Footer>
      <ProductButton
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to card
      </ProductButton>
    </ProductContainer>
  );
};

export default ProductCard;
