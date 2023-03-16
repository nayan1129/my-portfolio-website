import React from "react";

const Myskills = () => {
  return (
    <>
      <div className="container">
        <h1 className="h1">MY SKILLS</h1>
        <div className="line"></div>
        <div className="about-skills"></div>
        <div className="skill-container">
          <div className="skill-1">
            <div className="outer-box">
              <div className="inner-box">
                <div id="number">80%</div>
              </div>
            </div>
            <h4 className="skill-h1">HTML</h4>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              width="160px"
              height="160px"
            >
              <defs>
                <linearGradient id="GradientColor">
                  <stop offset="0%" stop-color="#e91e63" />
                  <stop offset="100%" stop-color="#673ab7" />
                </linearGradient>
              </defs>
              <circle
                className="anim-1"
                cx="80"
                cy="80"
                r="70"
                stroke-linecap="round"
              />
            </svg>
          </div>
          <div className="skill-1">
            <div className="outer-box">
              <div className="inner-box">
                <div id="number">60%</div>
              </div>
            </div>
            <h4 className="skill-h1">JAVASCRIPT</h4>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              width="160px"
              height="160px"
            >
              <defs>
                <linearGradient id="GradientColor">
                  <stop offset="0%" stop-color="#e91e63" />
                  <stop offset="100%" stop-color="#673ab7" />
                </linearGradient>
              </defs>
              <circle
                className="anim-2"
                cx="80"
                cy="80"
                r="70"
                stroke-linecap="round"
              />
            </svg>
          </div>
          <div className="skill-1">
            <div className="outer-box">
              <div className="inner-box">
                <div id="number">70%</div>
              </div>
            </div>
            <h4 className="skill-h1">CSS</h4>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              width="160px"
              height="160px"
            >
              <defs>
                <linearGradient id="GradientColor">
                  <stop offset="0%" stop-color="#e91e63" />
                  <stop offset="100%" stop-color="#673ab7" />
                </linearGradient>
              </defs>
              <circle
                className="anim-3"
                cx="80"
                cy="80"
                r="70"
                stroke-linecap="round"
              />
            </svg>
          </div>
          <div className="skill-1">
            <div className="outer-box">
              <div className="inner-box">
                <div id="number">75%</div>
              </div>
            </div>
            <h4 className="skill-h1">REACT JS</h4>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              width="160px"
              height="160px"
            >
              <defs>
                <linearGradient id="GradientColor">
                  <stop offset="0%" stop-color="#e91e63" />
                  <stop offset="100%" stop-color="#673ab7" />
                </linearGradient>
              </defs>
              <circle
                className="anim-4"
                cx="80"
                cy="80"
                r="70"
                stroke-linecap="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default Myskills;
