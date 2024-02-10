import { useEffect, useState } from "react";
import "./Navbar.css";
import MobileNavbar from "./MobileNavbar";
import { Link } from "react-router-dom";

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
            <h1>BashBoss</h1>
          </div>
          <div className="navlinks">
            <Link to="/">Home</Link>
            <a href="/">Events</a>
            <a href="/">Services</a>
            <a href="/">Contact</a>
          </div>
          <div className="register-login-btns">
            <Link to="/login" id="register-btn" state={{ linkFor: "register" }}>
              Register
            </Link>
            <Link to="/login" id="login-btn" state={{ linkFor: "login" }}>
              Login
            </Link>
          </div>
        </div>
      )}
    </>
  );
};
export default Navbar;
