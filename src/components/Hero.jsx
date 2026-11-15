
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
            PLAN THE
            <br />
            <span>MISSION.</span>
            <br />
            EXPLORE THE TERRAIN.
            <br />
            DISCOVER MARS.
          </h1>

          <p className="hero-description">
            M.E.V.A brings Mars exploration closer to Earth through real planetary data, interactive mission planning, and immersive 3D simulation. Plan educational extravehicular activities, analyze Martian terrain, and explore environments based on NASA, USGS, and HiRISE observations.
          </p>

          <div className="hero-actions">
            <a href="https://gabrielr040304-afk.github.io/Hackathon-NASA-2026/" className="hero-button">
              Start Planning
              <span></span>
            </a>

            <a href="#features" className="hero-secondary">
              Explore Features <span>→</span>
            </a>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="mars-glow"></div>

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
      </div>
    </section>
  );
}

export default Hero;
