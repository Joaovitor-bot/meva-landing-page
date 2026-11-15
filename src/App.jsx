
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Benefits from "./components/Benefits";
import Audience from "./components/Audience";
import Documentation from "./components/Documentation";
import Technology from "./components/Technology";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import SpaceBackground from "./components/SpaceBackground";

function App() {
  return (
    <>
      <SpaceBackground />

      <div className="page-content">
        <Navbar />

        <main id="home">
          <Hero />
          <About />
          <Benefits />
          <Audience />
          <Documentation />
          <Technology />
          <FAQ />
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
