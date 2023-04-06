import CategoryCard from "../category-card/category-card.component";
import "./category-list.styles.scss";

const CategoryList = ({ categories }) => (
  <section className="category-list">
    {categories.map((category) => {
      return <CategoryCard category={category} key={category.id} />;
    })}
  </section>
);

export default CategoryList;
