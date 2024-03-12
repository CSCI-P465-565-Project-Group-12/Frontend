import Navbar from "../../componets/UI/Navbar/Navbar";
import Footer from "../../componets/UI/Footer/Footer";
import "./PasswordResetPage.css";
import passwordResetImg from "../../assets/Reset password-cuate.png";
import { useState } from "react";
import { useNavigate } from "react-router";
const PasswordResetPage = () => {
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [isOtpValidated, setIsOtpValidated] = useState(false);
  const [isPasswordReset, setIsPasswordReset] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="password-reset-page-container">
        <div className="password-reset-main-container">
          <div className="password-reset-img">
            <img src={passwordResetImg} alt="password-reset" />
          </div>
          <div className="password-reset-container">
            {isEmailSent && (
              <>
                <div className="back-btn" onClick={() => setIsEmailSent(false)}>
                  <p>
                    <i className="bi bi-arrow-left-circle-fill" /> Back
                  </p>
                </div>
                <h2>Otp</h2>
                <div className="otp-input">
                  <input type="text" placeholder="Otp" />
                </div>
                <p id="reset-password-text">
                  Please enter the OTP sent to your email address. If you don't
                  receive an email, please make sure you've entered the address
                  you registered with, check your spam folder or request another
                  email.
                </p>
                <div
                  className="next-btn"
                  onClick={() => {
                    setIsOtpValidated(true);
                    setIsEmailSent(false);
                  }}
                >
                  <p>
                    Validate <i className="bi bi-arrow-right-circle-fill" />
                  </p>
                </div>
              </>
            )}
            {!isEmailSent && !isOtpValidated && !isPasswordReset && (
              <>
                <h2>Enter Your Email</h2>
                <div className="email-input">
                  <input type="text" placeholder="Email" />
                </div>
                <p id="reset-password-text">
                  We will send you a link to reset your password. If you don't
                  receive an email, please make sure you've entered the address
                  you registered with, check your spam folder or request another
                  email.
                </p>
                <div className="next-btn" onClick={() => setIsEmailSent(true)}>
                  <p>
                    Next <i className="bi bi-arrow-right-circle-fill" />
                  </p>
                </div>
              </>
            )}
            {isOtpValidated && (
              <>
                <h2>Reset Password</h2>
                <div className="password-input">
                  <input type="password" placeholder="Password" />
                </div>
                <div className="password-input">
                  <input type="password" placeholder="Confirm Password" />
                </div>
                <div
                  className="reset-password-btn"
                  onClick={() => {
                    setIsPasswordReset(true);
                    setIsOtpValidated(false);
                  }}
                >
                  <p>
                    Reset Password <i className="bi bi-check-circle-fill" />
                  </p>
                </div>
              </>
            )}
            {isPasswordReset && (
              <>
                <h2>Password Reset</h2>
                <p id="reset-password-text">
                  Your password has been reset successfully.
                </p>
                <div
                  className="back-to-login-btn"
                  onClick={() => {
                    setIsPasswordReset(false);
                    navigate("/login", { state: { linkFor: "login" } });
                  }}
                >
                  <p>
                    Back to Login{" "}
                    <i className="bi bi-arrow-right-circle-fill" />
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default PasswordResetPage;
