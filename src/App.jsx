
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Audience from "./components/Audience";
import Documentation from "./components/Documentation";
import Features from "./components/Features";
import Technology from "./components/Technology";
import FAQ from "./components/FAQ";
import SpaceBackground from "./components/SpaceBackground";

function App() {
  return (
    <>
      <SpaceBackground />

      <div className="page-content">
        <Navbar />

        <main id="home">
          <Hero />
          <Benefits />
          <Audience />
          <Documentation />
          <Features />
          <Technology />
          <FAQ />
        </main>
      </div>
    </>
  );
}

export default App;