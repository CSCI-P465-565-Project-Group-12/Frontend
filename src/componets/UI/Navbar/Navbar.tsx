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
    // onscroll , add box shadow to navbar
    window.addEventListener("scroll", () => {
      const navbar = document.querySelector(".navbar") as HTMLElement;
      if (window.scrollY > 0) {
        navbar.style.boxShadow = "0px 17px 22px -10px rgba(0, 0, 0, 0.62)";
      } else {
        navbar.style.boxShadow = "none";
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
            <Link to="/browse-events">Events</Link>
            <Link to="/events-near-me">Explore</Link>
            <a href="/">Contact</a>
          </div>
          <div className="register-login-btns">
            <Link
              to="/sign-up"
              id="register-btn"
              state={{ linkFor: "register" }}
            >
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
