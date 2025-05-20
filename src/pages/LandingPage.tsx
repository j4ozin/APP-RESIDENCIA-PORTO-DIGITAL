import "../App.css";
import Header from "../components/Header";
import Hero from "../components/LandingPage/Hero";
import Projects from "../components/LandingPage/Projects";
import About from "../components/LandingPage/About";
import Briefings from "../components/LandingPage/Briefings";
import Contact from "../components/LandingPage/Contact";
import { useState, useEffect } from "react";
import ProfileFooter from "../components/Profile/ProfileFooter";

function LandingPage() {

  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const handleScroll = () => {
      let current = "home";
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom > 100) {
          current = section.id;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="App">
      <header>
        <Header activeSection={activeSection} />
      </header>
      <main>
      <Hero />
      <About />
      <Projects />
      <Briefings />
      <Contact />
      <ProfileFooter />
      </main>    

    </div>
  );
}

export default LandingPage;
