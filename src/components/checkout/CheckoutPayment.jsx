import {
  ContainerCheckoutPayment,
  FormContainer,
  PaymentButton,
} from "../../styles/checkout/CheckoutPayment";
import { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useSelector } from "react-redux";
import { totalPriceMemoization } from "../../redux/memoization/cartMemoization";
import { userMemoization } from "../../redux/memoization/userMemoization";
import { BUTTON_TYPE_CLASSES } from "../button/Button";

const CheckoutPayment = () => {
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const amount = useSelector(totalPriceMemoization);
  const currentUser = useSelector(userMemoization);

  const handleClick = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    setIsProcessingPayment(true);

    const response = await fetch("/.netlify/functions/createPayment", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: amount * 100 }),
    }).then((res) => res.json());

    const {
      paymentIntent: { client_secret },
    } = response;

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser ? currentUser.displayName : "Guest",
        },
      },
    });

    setIsProcessingPayment(false);

    if (paymentResult.error) {
      alert(paymentResult.error);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        alert("Payment Successful");
      }
    }
  };

  return (
    <ContainerCheckoutPayment>
      <FormContainer>
        <h2>Credit Card Payment</h2>
        <CardElement />
        <PaymentButton
          isLoading={isProcessingPayment}
          buttonType={BUTTON_TYPE_CLASSES.inverted}
          onClick={handleClick}
        >
          Pay now
        </PaymentButton>
      </FormContainer>
    </ContainerCheckoutPayment>
  );
};

export default CheckoutPayment;
