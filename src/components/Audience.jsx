
import { useEffect, useRef } from "react";
import "../styles/Audience.css";

const audiences = [
  {
    number: "01",
    title: "Students",
    description:
      "Discover Mars through interactive experiences that make space exploration easier to understand.",
  },
  {
    number: "02",
    title: "Educators",
    description:
      "Bring concepts of space science, mission planning and exploration into the learning experience.",
  },
  {
    number: "03",
    title: "Space enthusiasts",
    description:
      "Explore the challenges of the Red Planet and discover what it takes to plan a mission on Mars.",
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
            03 / OUR AUDIENCE
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
