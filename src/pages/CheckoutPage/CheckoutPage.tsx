import { StripeElementsOptionsMode, loadStripe } from "@stripe/stripe-js";
import EventTicket from "../../componets/UI/EventTicket/EventTicket";
import Footer from "../../componets/UI/Footer/Footer";
import Navbar from "../../componets/UI/Navbar/Navbar";
import "./CheckoutPage.css";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../../componets/CheckoutForm/CheckoutForm";
const CheckoutPage = () => {
  const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);
  const options: StripeElementsOptionsMode = {
    mode: "payment",
    amount: 1099,
    currency: "usd",
    appearance: {
      theme: "stripe",
    },
  };
  return (
    <>
      <Navbar />
      <div className="checkout-page-container">
        <h1>Checkout Page</h1>
        <div className="chekout-container">
          <div className="ticket-container">
            <EventTicket />
          </div>
          <div className="checkout-form-element-container">
            <h2
              style={{
                textAlign: "center",
              }}
            >
              Choose Payment Option
            </h2>

            <Elements stripe={stripePromise} options={options}>
              <CheckoutForm />
            </Elements>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default CheckoutPage;
