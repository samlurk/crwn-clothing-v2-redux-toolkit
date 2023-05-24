import { useContext } from "react";
import { CategoryContext } from "../../contexts/Category";
import CategoryPreview from "../../components/Category/CategoryPreview";

const CategoriesPreview = () => {
  const { productsByCategories } = useContext(CategoryContext);
  return (
    <>
      {productsByCategories.map(({ id, title, products }) => (
        <CategoryPreview key={id} title={title} products={products} />
      ))}
    </>
  );
};
export default CategoriesPreview;
