import React from "react";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
      <div>
        <div className="header">
          <div className="main-info">
            <h1>I am Nayan Lodha</h1>
            <h3>Front-End Web Developer</h3>
          </div>
        </div>
      </div>
      <About />
      <Skills />
       <Projects />
      <Contact />
    </>
  );
};

export default Home;
