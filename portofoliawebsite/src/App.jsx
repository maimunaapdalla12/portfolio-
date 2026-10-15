import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-zinc-950">
      <Navbar />

      <Hero />

      <About />

      <Services />

      <Contact />
    </main>
  );
}

export default App;