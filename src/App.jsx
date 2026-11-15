
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";

function App() {
  return (
    <>
      <Navbar />

      <main id="home">
        <Hero />
        <Benefits />
      </main>
    </>
  );
}

export default App;