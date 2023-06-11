import { useParams } from "react-router-dom";
import { CategoryContainer, Title } from "./index.styles";
import ProductCard from "../../components/ProductCard";
import { selectProductsByCategoriesMap } from "../../store/Categories/selector";
import { useSelector } from "react-redux";
import { upperFirstLetter } from "../../utils/String";

const Category = () => {
  const { category } = useParams();
  const productsByCategories = useSelector(selectProductsByCategoriesMap);
  const products = productsByCategories[category.toLocaleLowerCase()];
  return (
    <>
      <Title>{upperFirstLetter(category)}</Title>
      {products && (
        <>
          <CategoryContainer>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </CategoryContainer>
        </>
      )}
    </>
  );
};

export default Category;
