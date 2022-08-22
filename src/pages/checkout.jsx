import { ContainerCheckout } from "../styles/checkout/checkout";
import Navbar from "../components/general/Navbar";
import CheckoutTable from "../components/checkout/CheckoutTable";
import CheckoutTotal from "../components/checkout/CheckoutTotal";
import CheckoutPayment from "../components/checkout/CheckoutPayment";

const Checkout = () => {
  return (
    <>
      <Navbar />
      <ContainerCheckout>
        <CheckoutTable />
        <CheckoutTotal />
        <CheckoutPayment />
      </ContainerCheckout>
    </>
  );
};

export default Checkout;
