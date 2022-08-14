import {
  ContainerProductCard,
  Footer,
  Name,
  Price,
} from "../../styles/shop/ProductCard.js";
import { useContext } from "react";
import Button, { BUTTON_TYPE_CLASSES } from "../button/Button";
import { CartContext } from "../../context/cart/cartContext";

const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;
  const { addItemToCart } = useContext(CartContext);

  return (
    <ContainerProductCard>
      <img src={imageUrl} alt={"crown"} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={() => addItemToCart(product)}
      >
        Add To Cart
      </Button>
    </ContainerProductCard>
  );
};

export default ProductCard;
