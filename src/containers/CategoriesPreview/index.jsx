import CategoryPreview from "../../components/Category/CategoryPreview";
import { useSelector } from "react-redux";
import { selectProductsByCategories } from "../../store/Categories/selector";

const CategoriesPreview = () => {
  const productsByCategories = useSelector(selectProductsByCategories);
  return (
    <>
      {productsByCategories.map(({ id, title, products }) => (
        <CategoryPreview key={id} title={title} products={products} />
      ))}
    </>
  );
};
export default CategoriesPreview;
