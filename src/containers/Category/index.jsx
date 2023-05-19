import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { CategoryContainer, Title } from "./index.styles";
import { CategoryContext } from "../../contexts/Category";
import ProductCard from "../../components/ProductCard";

const Category = () => {
  const { category } = useParams();
  const { productsByCategories } = useContext(CategoryContext);
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
              <ProductCard key={product.title} product={product} />
            ))}
          </CategoryContainer>
        </>
      )}
    </>
  );
};

export default Category;
