
import { useEffect, useRef } from "react";
import "../styles/Audience.css";

const audiences = [
  {
    number: "01",
    title: "Students & Educators",
    description:
      "Explore planetary science through interactive simulations, transforming scientific concepts, mission planning, and Martian exploration into practical learning experiences.",
  },
  {
    number: "02",
    title: "Space Enthusiasts",
    description:
      "Experience Mars through realistic 3D environments, investigate scientific discoveries, and understand the environmental and operational challenges of planetary exploration.",
  },
  {
    number: "03",
    title: " Space Professionals & Astronauts",
    description:
      "Analyze Martian terrain, evaluate potential environmental hazards, compare exploration routes, and investigate mission requirements through preliminary simulations designed to support situational awareness and mission preparedness.",
  },
];

function Audience() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("audience-visible");
          observer.unobserve(section);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="audience-section"
      id="audience"
      ref={sectionRef}
      aria-labelledby="audience-title"
    >
      <div className="audience-container">

        <div className="audience-heading">
          <span className="audience-label">
            04 / OUR AUDIENCE
          </span>

          <h2 id="audience-title">
            Made for curious minds.
          </h2>

          <p>
            From classrooms to curious explorers,
            M.E.V.A makes the challenges of Mars
            exploration more accessible.
          </p>
        </div>

        <div className="audience-grid">
          {audiences.map((item) => (
            <article
              className="audience-item"
              key={item.number}
            >
              <span className="audience-number">
                {item.number}
              </span>

              <div className="audience-item-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Audience;
