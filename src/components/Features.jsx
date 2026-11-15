
import { useEffect, useRef } from "react";
import "../styles/Features.css";

const DEMO_URL =
  "https://gabrielr040304-afk.github.io/Hackton-NASA-2026/";

export default function Features() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      section.classList.add("features-visible");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("features-visible");
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
      className="features-section"
      id="features"
      ref={sectionRef}
    >
      <div className="features-container">
        <div className="features-heading">
          <span className="features-eyebrow">
            05 / THE PLATFORM
          </span>

          <h2>From planning to exploration.</h2>

          <p>
            A closer look at the tools behind M.E.V.A
            and the technology supporting each mission.
          </p>
        </div>

        <article className="feature-showcase">
          <div className="feature-info">
            <span className="feature-tag">
              01 — MARSWALK PLANNER
            </span>

            <h3>Plan before you explore.</h3>

            <p>
              Build a Marswalk mission through a five-step
              planning process. Choose your science
              objective, location, crew, equipment
              and mission timing.
            </p>

            <p>
              Analyze routes, environmental conditions,
              resource consumption and a GO / NO-GO
              safety assessment.
            </p>

            <div className="feature-highlights">
              <span>Mission routes</span>
              <span>Resource analysis</span>
              <span>Safety assessment</span>
            </div>

            <a
              className="feature-action"
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Try the Marswalk Planner
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div className="feature-media">
            <div className="feature-browser">
              <div className="feature-browser-top">
                <div className="browser-dots" aria-hidden="true">
                  <i></i>
                  <i></i>
                  <i></i>
                </div>

                <span>M.E.V.A / MISSION PLANNER</span>
              </div>

              <img
                src="/images/planner-preview.png"
                alt="Screenshot of the Marswalk Planner showing mission results and a Martian map"
                loading="lazy"
              />
            </div>
          </div>
        </article>

        <article className="feature-simulator">
          <div className="simulator-visual" aria-hidden="true">
            <div className="simulator-grid"></div>
            <span>JEZERO CRATER / TERRAIN MODEL</span>
            <strong>3D</strong>
          </div>

          <div className="simulator-info">
            <span className="feature-tag">
              02 — VIRTUAL EXPLORATION
            </span>

            

            <h3>Experience the Martian surface.</h3>

            <p>
              An immersive first-person exploration
              experience planned around real terrain
              data from Jezero Crater, with a
              helmet-style mission interface.
            </p>

            <a href="#documentation" className="simulator-link">
              Explore the technical documentation 
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
