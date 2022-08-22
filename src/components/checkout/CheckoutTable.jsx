import {
  CheckoutHeader,
  HeaderBlock,
} from "../../styles/checkout/CheckoutTable";
import { useSelector } from "react-redux";
import { CartMemoization } from "../../redux/memoization/cartMemoization";
import CheckoutItem from "./CheckoutItem";
import CheckoutTotal from "./CheckoutTotal";

const CheckoutTable = () => {
  const cartItems = useSelector(CartMemoization);

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
        <CheckoutItem key={product.id} product={product} />
      ))}
      
    </>
  );
};

export default CheckoutTable;
