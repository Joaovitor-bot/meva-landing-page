
import "../styles/About.css";

const steps = [
  {
    number: "01",
    icon: "play",
    text: (
      <>
        Click <strong>Start Planning</strong> at the top.
      </>
    ),
  },
  {
    number: "02",
    icon: "location",
    text: (
      <>
        On the next page, choose where you would like to
        explore (<strong>Jezero Crater</strong> or{" "}
        <strong>Gale Crater</strong>).
      </>
    ),
  },
  {
    number: "03",
    icon: "calendar",
    text: (
      <>
        Select the preparations for the mission to Mars.
      </>
    ),
  },
  {
    number: "04",
    icon: "search",
    text: (
      <>
        Choose what you want to discover there (e.g.,{" "}
        <strong>signs of ancient life</strong> or{" "}
        <strong>water and sediments</strong>).
      </>
    ),
  },
  {
    number: "05",
    icon: "crew",
    text: (
      <>
        Define how many crew members will go, which mobility
        will be used, the necessary equipment, and the type
        of base (e.g., <strong>surface base</strong> or{" "}
        <strong>habitat</strong>).
      </>
    ),
  },
  {
    number: "06",
    icon: "shield",
    text: (
      <>
        Choose the best time to travel to avoid exposure
        levels that could threaten crew survival due to{" "}
        <strong>solar radiation</strong>.
      </>
    ),
  },
  {
    number: "07",
    icon: "route",
    text: (
      <>
        After accepting and reviewing the costs, you will see
        the route you selected. On the right panel, scroll
        down and you will find an{" "}
        <strong>information (i)</strong> button with
        additional mission details.
      </>
    ),
  },
];

function StepIcon({ name }) {
  return (
    <svg
      className="about-step-icon"
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {name === "play" && (
        <>
          <circle cx="16" cy="16" r="12" />
          <path d="m13 10 9 6-9 6z" />
        </>
      )}

      {name === "location" && (
        <>
          <path d="M26 13c0 8-10 16-10 16S6 21 6 13a10 10 0 0 1 20 0Z" />
          <circle cx="16" cy="13" r="3.5" />
        </>
      )}

      {name === "calendar" && (
        <>
          <rect x="4" y="7" width="24" height="21" rx="3" />
          <path d="M10 4v6M22 4v6M4 13h24M10 18h3M18 18h3M10 23h3M18 23h3" />
        </>
      )}

      {name === "search" && (
        <>
          <circle cx="13.5" cy="13.5" r="9.5" />
          <path d="m21 21 8 8" />
        </>
      )}

      {name === "crew" && (
        <>
          <circle cx="16" cy="9" r="4" />
          <path d="M8 25v-3a8 8 0 0 1 16 0v3H8Z" />
          <path d="M7 15a3.5 3.5 0 1 1 2-6.5M25 15a3.5 3.5 0 1 0-2-6.5M6 19a6 6 0 0 0-4 6M26 19a6 6 0 0 1 4 6" />
        </>
      )}

      {name === "shield" && (
        <>
          <path d="M16 3 27 7v8c0 7-4.5 11.5-11 14C9.5 26.5 5 22 5 15V7L16 3Z" />
          <circle cx="16" cy="16" r="2" />
          <path d="m14.3 13-3.2-5.3M18 13l3.1-5.3M19 18.5l6 2.2M13 18.5l-6 2.2" />
        </>
      )}

      {name === "route" && (
        <>
          <path d="M9 6a3 3 0 1 0-6 0c0 3 3 6 3 6s3-3 3-6ZM29 8a3 3 0 1 0-6 0c0 3 3 6 3 6s3-3 3-6Z" />
          <path
            d="M6 17c10-4 19-1 19 4 0 5-11 2-17 6"
            strokeDasharray="3 3"
          />
          <circle cx="6" cy="27" r="2" />
        </>
      )}
    </svg>
  );
}

export default function About() {
  return (
    <section
      className="about-section"
      id="about"
      aria-labelledby="simulation-title"
    >
      <div className="about-container">

        {/* LEFT COLUMN — INTRODUCTION */}

        <div className="about-intro">
          <span className="about-label">
            02 / SIMULATION GUIDE
          </span>

          <div className="about-kicker">
            <span>MARS EVA SIMULATOR</span>

            <span
              className="about-kicker-line"
              aria-hidden="true"
            />
          </div>

          <h2 id="simulation-title">
            How to Start
            <br />
            the Simulation?
          </h2>

          <span
            className="about-accent-line"
            aria-hidden="true"
          />

          <p>
            Follow seven simple steps to plan your
            own Mars exploration mission.
          </p>
        </div>

        {/* RIGHT COLUMN — SIMULATION STEPS */}

        <ol
          className="about-steps"
          aria-label="Steps to start the Mars simulation"
        >
          {steps.map((step) => (
            <li
              className="about-step"
              key={step.number}
            >
              <span
                className="about-step-number"
                aria-hidden="true"
              >
                {Number(step.number)}
              </span>

              <StepIcon name={step.icon} />

              <span
                className="about-step-divider"
                aria-hidden="true"
              />

              <p>{step.text}</p>
            </li>
          ))}
        </ol>

      </div>
    </section>
  );
}
