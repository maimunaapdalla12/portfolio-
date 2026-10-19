import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-zinc-950">


      <Toaster
  position="top-right"
  toastOptions={{
    duration: 4000,
  }}
/>
      <Navbar />

      <Hero />

      <About />

      <Services />

      <Contact />
    </main>
  );
}

export default App;