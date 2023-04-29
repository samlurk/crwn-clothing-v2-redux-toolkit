import "./CategoryCard.scss";

const CategoryCard = ({ category: { title, imageUrl } }) => (
  <article className="category-card">
    <div
      className="category-card__background"
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
    <div className="category-card__content">
      <h2 className="category-card__title">{title}</h2>
      <p className="category-card__text">Shop now</p>
    </div>
  </article>
);

export default CategoryCard;
