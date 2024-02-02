import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <h1>BashBosss</h1>
      </div>
      <div className="navlinks">
        <a href="/">Home</a>
        <a href="/">About</a>
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
  );
};
export default Navbar;
