import "../styles/About.css";

export default function AboutFooter() {
  return (
    <>
      <section className="about-section" id="about">
        <div className="about-container">
          <span className="about-label">
            02 / ABOUT THE PROJECT
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

    </>
  );
}
