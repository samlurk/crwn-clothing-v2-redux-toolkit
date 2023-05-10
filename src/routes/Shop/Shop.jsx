import { useContext } from "react";
import { ProductContext } from "../../contexts/Products";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./Shop.scss";

const Shop = () => {
  const { products } = useContext(ProductContext);
  return (
    <div className="products">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
export default Shop;
