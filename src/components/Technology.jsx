
import { useEffect, useRef } from "react";
import "../styles/Technology.css";

const PROJECT_URL =
  "https://gabrielr040304-afk.github.io/Hackton-NASA-2026/";

const REPOSITORY_URL =
  "https://github.com/gabrielr040304-afk/Hackton-NASA-2026";


const technologies = [
  {
    number: "01",
    name: "JavaScript + TypeScript",
    category: "CORE DEVELOPMENT",
    description:
      "Mission logic, EVA estimates, interaction and shared simulation modules.",
  },
  {
    number: "02",
    name: "Leaflet 1.9.4",
    category: "INTERACTIVE CARTOGRAPHY",
    description:
      "Layered Mars maps, rover traverses and scientific locations.",
  },
  {
    number: "03",
    name: "Three.js 0.187.0",
    category: "3D EXPLORATION",
    description:
      "WebGL terrain exploration in Jezero and Gale craters.",
  },
  {
    number: "04",
    name: "Python + Pillow",
    category: "DATA PROCESSING",
    description:
      "Preparation of orbital terrain models and textures.",
  },
  {
    number: "05",
    name: "NASA · USGS · HiRISE",
    category: "SCIENTIFIC SOURCES",
    description:
      "Orbital imagery, elevation models and rover observations.",
  },
  {
    number: "06",
    name: "Node.js + node:test",
    category: "SOFTWARE VERIFICATION",
    description:
      "46 automated tests passed on the examined version.",
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
            Explore data sources 
          </a>
        </div>
      </div>
    </section>
  );
}
