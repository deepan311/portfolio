import React from "react";
import Home from "./components/Home";
import Skill from "./components/Skill";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import { scroller } from "react-scroll";

function App() {
  const scroll = (nav) => {
    scroller.scrollTo(nav, { duration: 800, smooth: "easeInoutQuart" });
  };

  return (
    <>
      {/* // HOME-------------/ */}
      <div id="home">
        <Home scroll={scroll} />
      </div>
      {/* SKILL-------------/ */}

      <div id="skill">
        <Skill />
      </div>
      {/* PROJECT----------/ */}

      <div id="project">
        <Projects />
      </div>
      {/* EDUCATION--------/ */}

      <div id="education">
        <Education />
      </div>
      {/* // CONTACT--------/ */}

      <div id="contact">
        <Contact />
      </div>
    </>
  );
}

export default App;
