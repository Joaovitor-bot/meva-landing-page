
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Audience from "./components/Audience";
import Documentation from "./components/Documentation";
import Features from "./components/Features";
import Technology from "./components/Technology";
import FAQ from "./components/FAQ";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;