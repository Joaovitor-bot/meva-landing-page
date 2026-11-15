
import "../styles/Documentation.css";

const documents = [
  {
    number: "01",
    category: "PROJECT OVERVIEW",
    title: "Project Documentation",
    description:
      "Understand the project, its objectives and how the Marswalk Planner works.",
    details:
      "Explore the mission planning process, route analysis, astronaut resources and the GO / NO-GO safety assessment.",
    url: "https://github.com/gabrielr040304-afk/Hackton-NASA-2026/blob/main/README.md",
  },
  {
    number: "02",
    category: "SCIENTIFIC RESEARCH",
    title: "Data & Sources",
    description:
      "Discover the NASA and USGS datasets behind the exploration experience.",
    details:
      "Review the sources for terrain, weather, radiation, rover routes and imagery, including how real, derived, simulated and hypothetical data are identified.",
    url: "https://github.com/gabrielr040304-afk/Hackton-NASA-2026/blob/main/SOURCES.md",
  },
  {
    number: "03",
    category: "DEVELOPMENT",
    title: "Technical Architecture",
    description:
      "Learn about the technologies and technical decisions behind the platform.",
    details:
      "Read about the original project's architecture using JavaScript, Leaflet, Three.js and GitHub Pages.",
    url: "https://github.com/gabrielr040304-afk/Hackton-NASA-2026/blob/main/docs/adr/ADR-001-stack.md",
  },
];

export default function Documentation() {
  return (
    <section
      className="documentation-section"
      id="documentation"
      aria-labelledby="documentation-title"
    >
      <div className="documentation-container">
        <div className="documentation-heading">
          <span className="documentation-eyebrow">
            04 / KNOWLEDGE BASE
          </span>

          <h2 id="documentation-title">
            Explore the documentation.
          </h2>

          <p>
            Behind every mission is research.
            Explore the science, methodology and
            technology powering M.E.V.A.
          </p>
        </div>

        <div className="documentation-grid">
          {documents.map((doc) => (
            <article className="document-card" key={doc.number}>
              <div className="document-top">
                <span>{doc.number}</span>
                <span>{doc.category}</span>
              </div>

              <div className="document-content">
                <h3>{doc.title}</h3>
                <p>{doc.description}</p>

                <details className="document-preview">
                  <summary>Preview document</summary>
                  <p>{doc.details}</p>
                </details>
              </div>

              <a
                href={doc.url}
                target="_blank"
                rel="noopener noreferrer"
                className="document-link"
              >
                Read full document
                <span aria-hidden="true"></span>
              </a>
            </article>
          ))}
        </div>

        <div className="documentation-footer">
          <p>
            Explore the original source code and
            technical resources.
          </p>

          <a
            href="https://github.com/gabrielr040304-afk/Hackton-NASA-2026"
            target="_blank"
            rel="noopener noreferrer"
          >
            View project on GitHub 
          </a>
        </div>
      </div>
    </section>
  );
}
