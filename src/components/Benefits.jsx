
import { useEffect, useRef } from "react";
import "../styles/Benefits.css";

const benefits = [
  {
    number: "01",
    label: "MISSION PLANNING",
    title: "Plan your Marswalk.",
    description:
      "Prepare your Martian EVA through eight planning stages. Choose your destination, scientific objectives, crew, equipment, and mission conditions before beginning your exploration.",
    tag: "PLAN",
  },
  {
    number: "02",
    label: "MISSION ANALYSIS",
    title: "Every decision matters.",
    description:
      " Compare exploration routes using terrain elevation, slope, daylight, travel time, and estimated resource consumption. Understand mission constraints through transparent computational models.",
    tag: "ANALYZE",
  },
  {
    number: "03",
    label: "VIRTUAL EXPLORATION",
    title: "Step onto Mars.",
    description:
      "Explore immersive 3D environments built from real Martian elevation data. Navigate Jezero and Gale, investigate scientific targets, and discover how planetary observations shape exploration.",
    tag: "EXPERIENCE",
  },
];

function Benefits() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      section.classList.add("benefits-visible");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("benefits-visible");
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
      className="benefits-section"
      id="mission"
      ref={sectionRef}
    >
      <div className="benefits-container">
        <div className="benefits-header">
          <div>
            <span className="benefits-eyebrow">
              03 / THE EXPERIENCE
            </span>

            <h2>
              WHAT YOU'LL
              <br />
              <span>EXPLORE.</span>
            </h2>
          </div>
        </div>

        <div className="benefits-grid">
          {benefits.map((benefit) => (
            <article
              className="benefit-card"
              key={benefit.number}
            >
              <div className="benefit-card-top">
                <span>{benefit.number}</span>
                <span className="benefit-arrow" aria-hidden="true">
                </span>
              </div>

              <div className="benefit-card-content">
                <span className="benefit-label">
                  {benefit.label}
                </span>

                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>

              <div className="benefit-card-bottom">
                <span>{benefit.tag}</span>
                <span>M.E.V.A / 2026</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;
