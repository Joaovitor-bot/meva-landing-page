import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <a href="#home" className="navbar-logo">
        M<span>.</span>E<span>.</span>V<span>.</span>A
      </a>

      <nav className="navbar-links" aria-label="Main navigation">
        <a href="#home">Home</a>
        <a href="#mission">Our Mission</a>
        <a href="#about">About</a>
      </nav>

      <a href="https://gabrielr040304-afk.github.io/Hackathon-NASA-2026/" className="navbar-cta">
        Explore Mars <span aria-hidden="true"></span>
      </a>
    </header>
  );
}
