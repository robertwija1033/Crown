import { Total } from "../../styles/checkout/CheckoutTotal.js";
import { useSelector } from "react-redux";
import { totalPriceMemoization } from "../../redux/memoization/cartMemoization.js";

const CheckoutTotal = () => {
  const totalPrice = useSelector(totalPriceMemoization);

  return <Total>TOTAL: ${totalPrice}</Total>;
};

export default CheckoutTotal;
