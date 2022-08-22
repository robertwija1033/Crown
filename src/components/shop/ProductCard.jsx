import {
  ContainerProductCard,
  Footer,
  Name,
  Price,
} from "../../styles/shop/ProductCard.js";
import { useDispatch, useSelector } from "react-redux";
import { CartMemoization } from "../../redux/memoization/cartMemoization.js";
import { addItemToCart } from "../../redux/actions/cartAction.js";
import Button, { BUTTON_TYPE_CLASSES } from "../button/Button";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { name, imageUrl, price } = product;
  const cartItems = useSelector(CartMemoization);

  return (
    <ContainerProductCard>
      <img src={imageUrl} alt={"crown"} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={() => dispatch(addItemToCart(cartItems, product))}
      >
        Add To Cart
      </Button>
    </ContainerProductCard>
  );
};

export default ProductCard;
