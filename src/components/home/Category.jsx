import {
  BackgroundImage,
  ContainerCategory,
  ContainerCategoryBody,
} from "../../styles/home/Category";
import { useNavigate } from "react-router-dom";

const Category = ({ category }) => {
  const navigate = useNavigate();
  const { title, imageUrl } = category;

  return (
    <ContainerCategory onClick={() => navigate(`/shop/${title}`)}>
      <BackgroundImage imageUrl={imageUrl} />
      <ContainerCategoryBody>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </ContainerCategoryBody>
    </ContainerCategory>
  );
};

export default Category;
