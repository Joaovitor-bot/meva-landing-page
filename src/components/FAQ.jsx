
import "../styles/FAQ.css";

const questions = [
  {
    question: "What is M.E.V.A?",
    answer:
      "M.E.V.A (Mars Exploration and Virtual Adventure) is an interactive platform designed to support the planning and simulation of human exploration missions on Mars. It integrates NASA scientific data, mission resource estimation, environmental risk assessment, and route planning with a fully interactive 3D exploration experience, allowing users to evaluate potential hazards and familiarize themselves with Martian terrain before undertaking real expeditions.",
  },
  {
    question: "Does M.E.V.A use real NASA data?",
    answer:
      "Yes. The project uses scientific data from NASA and USGS, including terrain, weather, rover routes and imagery. Information is labeled as real, derived, simulated or hypothetical to make its origin clear.",
  },
  {
    question: "Which locations can I explore?",
    answer:
      "The Marswalk Planner includes Jezero Crater, Gale Crater, each with different scientific objectives and exploration conditions.",
  },
  {
    question: "Is the 3D simulator available?",
    answer:
      "Yes. After completing mission preparation, users can enter an interactive first-person 3D simulation to explore and familiarize themselves with the selected Martian environment. Exploration routes are generated using NASA topographic data, allowing users to follow planned trajectories, examine terrain characteristics, identify potential hazards, and assess environmental conditions before undertaking real surface exploration.",
  },
  {
    question: "Can M.E.V.A be used for real missions?",
    answer:
      "M.E.V.A is designed to support preliminary risk assessment and astronaut preparedness by providing an interactive simulation of Martian exploration environments. Its purpose is to help astronauts better understand unfamiliar terrain, anticipate potential hazards, and evaluate mission requirements before surface exploration. Although the platform aims to improve situational awareness and support safer mission planning, its estimates remain experimental and require further scientific validation before operational use.",
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
            Explore documentation 
          </a>
        </div>
      </div>
    </section>
  );
}
