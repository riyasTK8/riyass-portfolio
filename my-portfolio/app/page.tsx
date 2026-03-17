import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CinematicBackground from "./components/CinematicBackground";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <CinematicBackground />
      <Navbar />
      
      
      <div className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </div>


      {/* Subtle bottom glow */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-[20%] bg-cyan-500/5 blur-[120px] -z-10" />
    </main>
  );
}
