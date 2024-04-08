import { useNavigate } from "react-router";
import successImg from "../../assets/Successful purchase-pana.png";
import Footer from "../../componets/UI/Footer/Footer";
import Navbar from "../../componets/UI/Navbar/Navbar";

const PaymentSuccessPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <h1>Payment Successful!</h1>
        <img
          src={successImg}
          alt="Success"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            maxWidth: "600px",
            maxHeight: "600px",
          }}
        />
        <button style={{ marginTop: "20px" }} onClick={() => navigate("/")}>
          Home
        </button>
      </div>
      <Footer />
    </>
  );
};

export default PaymentSuccessPage;
