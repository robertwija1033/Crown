import { ContainerCheckout } from "../styles/checkout/checkout";
import Navbar from "../components/general/Navbar";
import CheckoutTable from "../components/checkout/CheckoutTable";

const Checkout = () => {
  return (
    <>
      <Navbar />
      <ContainerCheckout>
        <CheckoutTable />
      </ContainerCheckout>
    </>
  );
};

export default Checkout;
