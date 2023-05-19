import { Link } from "react-router-dom";
import ProductCard from "../../ProductCard";
import { CategoryPreviewContainer, Title, Products } from "./index.styles";

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Link to={title}>
          <Title>{title.toUpperCase()}</Title>
        </Link>
      </h2>
      <Products>
        {products
          .filter((_, index) => index < 4)
          .map((product) => (
            <ProductCard key={product.title} product={product} />
          ))}
      </Products>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
