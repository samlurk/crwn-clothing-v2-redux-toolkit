import CategoryCard from "../CategoryCard/CategoryCard";
import "./CategoryList.scss";

const CategoryList = ({ categories }) => (
  <section className="category-list">
    {categories.map((category) => {
      return <CategoryCard category={category} key={category.id} />;
    })}
  </section>
);

export default CategoryList;
