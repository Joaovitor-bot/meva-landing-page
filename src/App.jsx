
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Audience from "./components/Audience";

function App() {
  return (
    <>
      <Navbar />

      <main id="home">
        <Hero />
        <Benefits />
        <Audience />
      </main>
    </>
  );
}

export default App;