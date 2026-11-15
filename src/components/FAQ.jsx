
import "../styles/FAQ.css";

const questions = [
  {
    question: "What is M.E.V.A?",
    answer:
      "M.E.V.A (Mars Exploration and Virtual Adventure) is an interactive project designed to explore the challenges of planning missions on Mars. It combines a Marswalk Planner with a 3D exploration experience currently in development.",
  },
  {
    question: "Does M.E.V.A use real NASA data?",
    answer:
      "Yes. The project uses scientific data from NASA and USGS, including terrain, weather, rover routes and imagery. Information is labeled as real, derived, simulated or hypothetical to make its origin clear.",
  },
  {
    question: "Which locations can I explore?",
    answer:
      "The Marswalk Planner includes Jezero Crater, Gale Crater and Arcadia Planitia, each with different scientific objectives and exploration conditions.",
  },
  {
    question: "Is the 3D simulator available?",
    answer:
      "The first-person 3D exploration experience is currently in development. It is designed around terrain data from Jezero Crater and a helmet-style mission interface.",
  },
  {
    question: "Can M.E.V.A be used for real missions?",
    answer:
      "No. M.E.V.A is a demonstration and educational project. Its simulated planning models are not validated for operational astronaut safety or engineering decisions.",
  },
  {
    question: "Where can I find the documentation?",
    answer:
      "You can access the project overview, scientific data sources and technical architecture in the Documentation section of this website.",
  },
];

export default function FAQ() {
  return (
    <section className="faq-section" id="faq">
      <div className="faq-container">
        <div className="faq-heading">
          <span className="faq-label">
            07 / FREQUENTLY ASKED QUESTIONS
          </span>

          <h2>Questions, answered.</h2>

          <p>
            Everything you need to know about M.E.V.A,
            the technology and the science behind it.
          </p>
        </div>

        <div className="faq-list">
          {questions.map((item, index) => (
            <details
              className="faq-item"
              name="meva-faq"
              key={item.question}
            >
              <summary>
                <span className="faq-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="faq-question">
                  {item.question}
                </span>

                <span className="faq-icon" aria-hidden="true">
                  +
                </span>
              </summary>

              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </details>
          ))}
        </div>

        <div className="faq-bottom">
          <p>Looking for more technical information?</p>

          <a href="#documentation">
            Explore documentation ↗
          </a>
        </div>
      </div>
    </section>
  );
}
