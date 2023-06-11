import CategoryPreview from "../../components/Category/CategoryPreview";
import { useSelector } from "react-redux";
import { selectProductsByCategoriesMap } from "../../store/Categories/selector";

const CategoriesPreview = () => {
  const productsByCategories = useSelector(selectProductsByCategoriesMap);
  return (
    <>
      {Object.entries(productsByCategories).map(([title, products], index) => (
        <CategoryPreview key={index} title={title} products={products} />
      ))}
    </>
  );
};
export default CategoriesPreview;
