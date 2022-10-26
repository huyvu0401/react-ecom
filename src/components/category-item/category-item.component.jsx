import { useNavigate } from 'react-router-dom'

import { CategoryItemContainer, BackgroundImage, Body } from "./category-item.styles.jsx";

const CategoryItem = ({category}) => {
    const {id, title, imageUrl} = category

    const navigate = useNavigate();

    const goToShopHandler = () => {
      navigate(`/shop/${title}`);
    };

    return (
        <CategoryItemContainer key={id} onClick={goToShopHandler}>
          <BackgroundImage imageUrl={imageUrl}></BackgroundImage>
          <Body>
            <h2>{title}</h2>
            <p>Shop Now</p>
          </Body>
        </CategoryItemContainer>
    )
};

export default CategoryItem;
