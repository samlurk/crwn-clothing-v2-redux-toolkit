import CategoryCard from "../CategoryCard";
import { CategoryListContainer } from "./index.styles";

const CategoryList = ({ categories }) => (
  <CategoryListContainer>
    {categories.map((category) => {
      return <CategoryCard category={category} key={category.title} />;
    })}
  </CategoryListContainer>
);

export default CategoryList;
