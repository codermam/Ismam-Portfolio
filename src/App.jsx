import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  return (
    <>
      <Navbar />
      {/* Add top padding so content isn't hidden behind the fixed navbar */}
      <main className="pt-24">
        <Hero />
        <AboutMe />
        <Education />
        <Projects />
        <Contact />
      </main>
    </>
  );
};

export default App;
