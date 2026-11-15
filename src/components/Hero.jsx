
import "../styles/Hero.css";

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-stars"></div>

      <div className="hero-container">
        <div className="hero-content">
          <span className="hero-label">
            <span className="hero-status"></span>
            THE FUTURE OF MARS EXPLORATION
          </span>

          <h1 className="hero-title">
            EXPLORE
            <br />
            <span>MARS.</span>
            <br />
            EXPERIENCE
            <br />
            THE IMPOSSIBLE.
          </h1>

          <p className="hero-description">
            Welcome to M.E.V.A — Mars Exploration and
            Virtual Adventure. Discover a new way to
            explore the Red Planet through technology,
            interactive missions and immersive experiences.
          </p>

          <div className="hero-actions">
            <a href="#mission" className="hero-button">
              Discover Our Mission
              <span>↗</span>
            </a>

            <a href="#features" className="hero-secondary">
              Explore Features <span>→</span>
            </a>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="mars-glow"></div>
          <div className="mars-orbit"></div>

          <div className="mars-planet">
            <div className="mars-surface"></div>
          </div>

          <div className="mars-coordinate">
            <span>PLANET 004</span>
            <strong>MARS</strong>
            <small>THE RED PLANET</small>
          </div>
        </div>
      </div>

      <div className="hero-bottom">
        <span>01 / MISSION INTRODUCTION</span>
        <span>SCROLL TO EXPLORE ↓</span>
      </div>
    </section>
  );
}

export default Hero;
