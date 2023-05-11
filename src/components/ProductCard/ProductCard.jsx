import { useContext } from "react";
import Button from "../Button/Button";
import "./ProductCard.scss";
import { CartContext } from "../../contexts/Cart";

const ProductCard = ({ product }) => {
  const { title, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);
  const addProductToCart = () => addItemToCart(product);

  return (
    <div className="product">
      <img src={imageUrl} alt={`${title}`} />
      <div className="product__footer">
        <span className="product__title">{title}</span>
        <span className="product__price">${price}</span>
      </div>
      <Button buttonType="inverted" onClick={addProductToCart}>
        Add to card
      </Button>
    </div>
  );
};

export default ProductCard;
