import bannerImg from "../../assets/banner.png";
import "./HeroSection.css";
const HeroSection: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="hero-section-container">
        <div className="hero-section-img">
          <img src={bannerImg} alt="banner" />
        </div>
        <div className="hero-section-text">
          <h1>BashBoss</h1>
          <p>One Platform for all events.</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
