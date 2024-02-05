import "./Footer.css";
const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h1>BashBoss</h1>
        </div>

        <div className="footer-links">
          <div className="footer-navlinks">
            <a href="">Home</a>
            <a href="">Events</a>
            <a href="">Contact</a>
          </div>
          <div className="footer-copyright">
            <p>&copy; 2024 BashBoss. All rights reserved.</p>
          </div>
        </div>
        <div className="footer-socials">
          <i className="bi bi-github"></i>
          <i className="bi bi-envelope"></i>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
