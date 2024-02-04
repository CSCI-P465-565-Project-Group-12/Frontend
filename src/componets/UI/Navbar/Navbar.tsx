import { useEffect, useState } from "react";
import "./Navbar.css";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 1060) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    });
  }, []);
  return (
    <>
      {isMobile ? (
        <MobileNavbar />
      ) : (
        <div className="navbar">
          <div className="logo">
            <h1>BashBosss</h1>
          </div>
          <div className="navlinks">
            <a href="/">Home</a>
            <a href="/">Events</a>
            <a href="/">Services</a>
            <a href="/">Contact</a>
          </div>
          <div className="register-login-btns">
            <a href="/" id="register-btn">
              Register
            </a>
            <a href="/" id="login-btn">
              Login
            </a>
          </div>
        </div>
      )}
    </>
  );
};
export default Navbar;
