import {
  Arrow,
  BaseSpan,
  ContainerCheckoutItem,
  Image,
  Quantity,
  RemoveButton,
  Value,
} from "../../styles/checkout/CheckoutItem";
import { useContext } from "react";
import { CartContext } from "../../context/cart/cartContext";

const CheckoutItem = ({ product }) => {
  const { name, quantity, imageUrl, price } = product;
  const { addItemToCart, subtractItemToCart, deleteItemToCart } =
    useContext(CartContext);

  return (
    <ContainerCheckoutItem>
      <Image>
        <img src={imageUrl} alt="crown" />
      </Image>
      <BaseSpan> {name} </BaseSpan>
      <Quantity>
        <Arrow onClick={() => subtractItemToCart(product)}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={() => addItemToCart(product)}>&#10095;</Arrow>
      </Quantity>
      <BaseSpan> {price}</BaseSpan>
      <RemoveButton onClick={() => deleteItemToCart(product)}>
        &#10005;
      </RemoveButton>
    </ContainerCheckoutItem>
  );
};

export default CheckoutItem;
