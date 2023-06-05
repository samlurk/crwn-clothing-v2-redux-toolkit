import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { CategoryContainer, Title } from "./index.styles";
import ProductCard from "../../components/ProductCard";
import { selectProductsByCategories } from "../../store/Categories/selector";
import { useSelector } from "react-redux";

const Category = () => {
  const { category } = useParams();
  const productsByCategories = useSelector(selectProductsByCategories);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const productsByCategory = productsByCategories.find(
      (productsByCategory) => productsByCategory.title === category
    );
    setProducts(
      productsByCategory ? productsByCategory.products : productsByCategory
    );
  }, [category, productsByCategories]);

  return (
    <>
      {products && (
        <>
          <Title>{category}</Title>
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
