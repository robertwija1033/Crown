import { Total } from "../../styles/checkout/CheckoutTotal.js";
import { useContext } from "react";
import { CartContext } from "../../context/cart/cartContext";

const CheckoutTotal = () => {
  const { totalPrice } = useContext(CartContext);

  return <Total>TOTAL: ${totalPrice}</Total>;
};

export default CheckoutTotal;
