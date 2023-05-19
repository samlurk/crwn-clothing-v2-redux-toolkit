import { useNavigate } from "react-router-dom";
import {
  CategoryCardBackground,
  CategoryCardContainer,
  CategoryContent,
} from "./index.styles";

const CategoryCard = ({ category: { title, imageUrl } }) => {
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(`shop/${title}`);

  return (
    <CategoryCardContainer onClick={onNavigateHandler}>
      <CategoryCardBackground imageurl={imageUrl} />
      <CategoryContent>
        <h2>{title}</h2>
        <p>Shop now</p>
      </CategoryContent>
    </CategoryCardContainer>
  );
};

export default CategoryCard;
