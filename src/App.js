import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import Skills from "./components/pages/Skills";

function App() {
  return (
    <>
      <BrowserRouter basename="/my-portfolio-website">
        <Navbar>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/aboutme" element={<About />} />
            <Route path="/myskills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Navbar>
      </BrowserRouter>
    </>
  );
}

export default App;
