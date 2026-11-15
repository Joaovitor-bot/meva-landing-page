
import "../styles/AboutFooter.css";

export default function AboutFooter() {
  return (
    <>
      <section className="about-section" id="about">
        <div className="about-container">
          <span className="about-label">
            07 / ABOUT THE PROJECT
          </span>

          <h2>
            Exploring Mars.
            <br />
            Inspiring curiosity.
          </h2>

          <p>
            M.E.V.A — Mars Exploration and Virtual Adventure
            is an interactive project developed for the
            NASA Space Apps Challenge 2026.
          </p>

          <p>
            Our goal is to make Mars exploration more accessible
            through scientific data, interactive mission planning
            and immersive experiences.
          </p>

          <a href="#documentation" className="about-link">
            Explore our documentation ↗
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-container">
          <div className="footer-brand">
            <strong>M.E.V.A</strong>
            <p>Mars Exploration and Virtual Adventure</p>
          </div>

          <nav className="footer-links" aria-label="Footer navigation">
            <a href="#home">Home</a>
            <a href="#documentation">Documentation</a>
            <a href="#explore">Explore</a>
            <a
              href="https://github.com/gabrielr040304-afk/Hackton-NASA-2026"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>
          </nav>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} M.E.V.A.</span>
          <span>
            Independent NASA Space Apps Challenge project.
          </span>
        </div>
      </footer>
    </>
  );
}
