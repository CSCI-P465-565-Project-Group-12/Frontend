import Footer from "../../componets/UI/Footer/Footer";
import Navbar from "../../componets/UI/Navbar/Navbar";
import signUpImg from "../../assets/signup-poster.png";
import "./LoginPage.css";
import { useState } from "react";

const LoginPage: React.FC = () => {
  const roleOptions = ["User", "Admin"];
  const [isRegister, setIsRegister] = useState(false);
  return (
    <>
      <Navbar />
      <div className="login-page">
        {isRegister ? <h1>Register</h1> : <h1>Login</h1>}

        <div className="login-registeration-box">
          <div className="login-poster">
            <img src={signUpImg} alt="" />
          </div>
          <div className="login-registeration-form">
            <div className="form-box">
              {isRegister ? (
                <>
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" />
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" />
                  <label htmlFor="password">Password</label>
                  <input type="password" id="password" />
                  <label htmlFor="confirm-password">Confirm Password</label>
                  <input type="password" id="confirm-password" />
                  <button className="register-btn">Register</button>
                  <div className="register-link">
                    <p>Already have an account?</p>
                    <button onClick={() => setIsRegister(false)}>Login</button>
                  </div>
                </>
              ) : (
                <>
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" />
                  <label htmlFor="password">Password</label>
                  <input type="password" id="password" />

                  <label htmlFor="role">Role</label>
                  <select name="role" id="role">
                    {roleOptions.map((role, index) => (
                      <option key={index} value={role}>
                        {role}
                      </option>
                    ))}
                  </select>
                  <button className="login-btn">Login</button>
                  <div className="forgot-password">
                    <a href="/">Forgot Password?</a>
                  </div>
                  <div className="register-link">
                    <p>Don't have an account?</p>
                    <button
                      onClick={() => {
                        setIsRegister(true);
                      }}
                    >
                      Register
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default LoginPage;
