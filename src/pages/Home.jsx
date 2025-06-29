import { useState } from "react";
import GalaxyBackground from "../components/GalaxyBackground";
import CanvasBoard from "../components/CanvasBoard";
import Navbar from "../components/Navbar";
import AboutMe from "../components/AboutMe";
import Education from "../components/Education";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";

export default function Home() {
  const [showCanvas, setShowCanvas] = useState(false);

  return (
    <div className="relative">
      {showCanvas ? <CanvasBoard /> : <GalaxyBackground />}
      
      <Navbar showCanvas={showCanvas} setShowCanvas={setShowCanvas} />

      <div className="relative z-10 scroll-smooth">
        <section id="about" className="min-h-screen flex items-center justify-center">
          <AboutMe />
        </section>
        <section id="education" className="min-h-screen flex items-center justify-center">
          <Education />
        </section>
        <section id="skills" className="min-h-screen flex items-center justify-center">
          <Skills />
        </section>
        <section id="portfolio" className="min-h-screen flex items-center justify-center">
          <Projects />
        </section>
        <section id="contact" className="min-h-screen flex items-center justify-center">
          <ContactMe />
        </section>
      </div>
    </div>
  );
}

