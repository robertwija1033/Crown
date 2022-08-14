import {
  CheckoutHeader,
  HeaderBlock,
} from "../../styles/checkout/CheckoutTable";
import { useContext } from "react";
import { CartContext } from "../../context/cart/cartContext";
import CheckoutItem from "./CheckoutItem";
import CheckoutTotal from "./CheckoutTotal";

const CheckoutTable = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((product) => (
        <CheckoutItem product={product} />
      ))}
      <CheckoutTotal />
    </>
  );
};

export default CheckoutTable;
