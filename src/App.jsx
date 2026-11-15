
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Audience from "./components/Audience";
import Documentation from "./components/Documentation";

function App() {
  return (
    <>
      <Navbar />

      <main id="home">
        <Hero />
        <Benefits />
        <Audience />
        <Documentation />
      </main>
    </>
  );
}

export default App;