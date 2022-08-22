import {
  Arrow,
  BaseSpan,
  ContainerCheckoutItem,
  Image,
  Quantity,
  RemoveButton,
  Value,
} from "../../styles/checkout/CheckoutItem";
import { useDispatch, useSelector } from "react-redux";
import { CartMemoization } from "../../redux/memoization/cartMemoization";
import {
  addItemToCart,
  deleteItemToCart,
  subtractItemToCart,
} from "../../redux/actions/cartAction";

const CheckoutItem = ({ product }) => {
  const dispatch = useDispatch();
  const { name, quantity, imageUrl, price } = product;
  const cartItems = useSelector(CartMemoization);

  return (
    <ContainerCheckoutItem>
      <Image>
        <img src={imageUrl} alt="crown" />
      </Image>
      <BaseSpan> {name} </BaseSpan>
      <Quantity>
        <Arrow onClick={() => dispatch(subtractItemToCart(cartItems, product))}>
          &#10094;
        </Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={() => dispatch(addItemToCart(cartItems, product))}>
          &#10095;
        </Arrow>
      </Quantity>
      <BaseSpan> {price}</BaseSpan>
      <RemoveButton
        onClick={() => dispatch(deleteItemToCart(cartItems, product))}
      >
        &#10005;
      </RemoveButton>
    </ContainerCheckoutItem>
  );
};

export default CheckoutItem;
