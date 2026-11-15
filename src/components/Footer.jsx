import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-brand">
          <strong>M.E.V.A</strong>
          <p>Mars Exploration and Virtual Adventure</p>
        </div>

        <nav className="footer-links" aria-label="Footer navigation">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#documentation">Documentation</a>
          <a href="#explore">Explore</a>
          <a
            href="https://github.com/gabrielr040304-afk/Hackton-NASA-2026"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub 
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
  );
}
