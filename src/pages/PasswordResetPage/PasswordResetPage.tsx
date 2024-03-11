import Navbar from "../../componets/UI/Navbar/Navbar";
import Footer from "../../componets/UI/Footer/Footer";
import "./PasswordResetPage.css";
// import { useState } from "react";
const PasswordResetPage = () => {
  // const [heading, setHeading] = useState("Enter your email address");
  return (
    <>
      <Navbar />
      <div className="password-reset-page-container">
        <div className="password-reset-container">
          <h2>Enter Your Email</h2>
          <div className="email-input">
            <input type="text" placeholder="Email" />
          </div>
          <div className="next-btn">
            <p>
              Next <i className="bi bi-arrow-right-circle-fill" />
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default PasswordResetPage;
