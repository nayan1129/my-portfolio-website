import React from "react";
import keepNote from "../images/keepnotes.jpg";
import calculator from "../images/calculator.jpg";
import quiz from "../images/quiz.jpg";
import weather from "../images/weather.jpg";
import validation from "../images/Validationform.jpg";
import todo from "../images/todo.jpg";
import ecommerce from "../images/ecommerce.jpg";

const Projects = () => {
  return (
    <>
      <div className="container">
        <h1 className="h1">PROJECTS</h1>
        <div className="line"></div>
        <div className="about-projects"></div>
        <div className="projects-container">
          <div className="cards">
            <div className="card" style={{ width: "18rem" }}>
              <img src={keepNote} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Keep Notes</h5>
                <p className="card-text">
                  Build Application using (HTML,CSS,REACT JS)
                </p>
              </div>
              <div className="card-body">
                <a
                  href="https://nayan1129.github.io/keep-notes-react/"
                  className="card-link"
                >
                  Keep Notes
                </a>
              </div>
            </div>
            <div className="card" style={{ width: "18rem" }}>
              <img src={calculator} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Calculator</h5>
                <p className="card-text">
                  Build Application using (HTML,CSS,REACT JS)
                </p>
              </div>
              <div className="card-body">
                <a
                  href="https://nayan1129.github.io/calculator-app-react/"
                  className="card-link"
                >
                  Calculator
                </a>
              </div>
            </div>
            <div className="card" style={{ width: "18rem" }}>
              <img src={quiz} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Quiz App</h5>
                <p className="card-text">
                  Build Application using (HTML,CSS,REACT JS)
                </p>
              </div>
              <div className="card-body">
                <a
                  href="https://nayan1129.github.io/quiz-app-react/"
                  className="card-link"
                >
                  Quiz App
                </a>
              </div>
            </div>
            <div className="card" style={{ width: "18rem" }}>
              <img src={weather} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Weather App</h5>
                <p className="card-text">Build Application using (HTML,CSS)</p>
              </div>
              <div className="card-body">
                <a
                  href="https://nayan1129.github.io/weather-app-react/"
                  className="card-link"
                >
                  Weather App
                </a>
              </div>
            </div>
            <div className="card" style={{ width: "18rem" }}>
              <img src={validation} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Form Validation</h5>
                <p className="card-text">
                  Build Application using (HTML,CSS,REACT JS)
                </p>
              </div>
              <div className="card-body">
                <a
                  href="https://nayan1129.github.io/validation-form-app-react/"
                  className="card-link"
                >
                  Form Validation
                </a>
              </div>
            </div>
            <div className="card" style={{ width: "18rem" }}>
              <img src={ecommerce} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Ecommerce Landing Page</h5>
                <p className="card-text">
                  Build Application using (HTML,CSS,REACT JS)
                </p>
              </div>
              <div className="card-body">
                <a
                  href="https://nayan1129.github.io/ecommerce-landing-page/"
                  className="card-link"
                >
                  Ecommerce Landing Page
                </a>
              </div>
            </div>
            <div className="card" style={{ width: "18rem" }}>
              <img src={todo} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Todo List App</h5>
                <p className="card-text">
                  Build Application using (HTML,CSS,REACT JS,REACT-REDUX)
                </p>
              </div>
              <div className="card-body">
                <a
                  href="https://nayan1129.github.io/todo-app-redux/"
                  className="card-link"
                >
                  Todo List App
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
