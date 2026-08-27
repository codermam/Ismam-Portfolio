import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Designs from "./components/Designs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <Hero />
        <AboutMe />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Designs />
        <Contact />
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default App;
