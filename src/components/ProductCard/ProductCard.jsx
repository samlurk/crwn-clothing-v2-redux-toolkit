import Button from "../Button/Button";
import "./ProductCard.scss";

const ProductCard = ({ product }) => {
  const { title, price, imageUrl } = product;
  return (
    <div className="product">
      <img src={imageUrl} alt={`${title}`} />
      <div className="product__footer">
        <span className="product__title">{title}</span>
        <span className="product__price">${price}</span>
      </div>
      <Button buttonType="inverted">Add to card</Button>
    </div>
  );
};

export default ProductCard;
