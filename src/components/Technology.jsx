
import { useEffect, useRef } from "react";
import "../styles/Technology.css";

const PROJECT_URL =
  "https://gabrielr040304-afk.github.io/Hackton-NASA-2026/";

const REPOSITORY_URL =
  "https://github.com/gabrielr040304-afk/Hackton-NASA-2026";

const technologies = [
  {
    number: "01",
    name: "JavaScript",
    category: "CORE DEVELOPMENT",
    description:
      "Powers mission calculations, resource management and safety analysis.",
  },
  {
    number: "02",
    name: "Leaflet",
    category: "INTERACTIVE MAPPING",
    description:
      "Displays interactive Martian maps, exploration routes and scientific layers.",
  },
  {
    number: "03",
    name: "Three.js",
    category: "3D VISUALIZATION",
    description:
      "Supports the development of the immersive Jezero Crater exploration simulator.",
  },
];

export default function Technology() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("technology-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="technology-section"
      id="explore"
      ref={sectionRef}
      aria-labelledby="technology-title"
    >
      <div className="technology-container">
        <div className="technology-heading">
          <span className="technology-label">
            06 / TECHNOLOGY & ACCESS
          </span>

          <h2 id="technology-title">
            Built for exploration.
          </h2>

          <p>
            Combining interactive technology with
            scientific data to bring the challenges
            of Mars exploration closer to Earth.
          </p>
        </div>

        <div className="technology-grid">
          {technologies.map((tech) => (
            <article className="technology-card" key={tech.number}>
              <div className="technology-card-top">
                <span>{tech.number}</span>
                <span>{tech.category}</span>
              </div>

              <h3>{tech.name}</h3>
              <p>{tech.description}</p>
            </article>
          ))}
        </div>

        <div className="technology-data">
          <span className="technology-data-label">
            SCIENTIFIC DATA
          </span>

          <p>
            M.E.V.A uses NASA and USGS sources.
            Information is classified as real,
            derived, simulated or hypothetical,
            distinguishing measurements from
            mission-planning models.
          </p>

          <a href="#documentation">
            Explore data sources ↗
          </a>
        </div>

        <div className="technology-access">
          <div className="technology-access-content">
            <span className="technology-label">
              READY TO EXPLORE?
            </span>

            <h3>Start your mission.</h3>

            <p>
              Access the Marswalk Planner,
              plan an expedition and discover
              what it takes to explore Mars safely.
            </p>

            <div className="technology-actions">
              <a
                href={PROJECT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="technology-primary"
              >
                Launch Marswalk Planner ↗
              </a>

              <a
                href={REPOSITORY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="technology-secondary"
              >
                View source code ↗
              </a>
            </div>
          </div>

          <div className="technology-access-visual" aria-hidden="true">
            <span className="technology-visual-top">
              M.E.V.A / MISSION ACCESS
            </span>

            <div className="technology-visual-center">
              <span>DESTINATION</span>
              <strong>MARS</strong>
              <span>EXPLORATION SYSTEM</span>
            </div>

            <span className="technology-visual-bottom">
              2026 / MARSWALK PLANNER
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
