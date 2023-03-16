import React from "react";
import Aboutimage from "../images/about-image.jpg";

const About = () => {
  return (
    <div>
      <div className="container">
        <h1 className="h1">About Me</h1>
        <div className="line"></div>
        <div className="about-info">
          <p>
            Courteous and enthusiastic, I am interested in IT and everything in
            its orbit. I recently began to be fascinated by web programming,
            e.g. developing apps and building websites. I made projects by
            myself and I made experience while making them. For this reason, I
            am looking for a company willing to offer me a placement among their
            developers. In return, I would offer my full commitment, and be a
            pleasant and friendly addition to your team. I am therefore
            currently looking for a job or an internship as a front-end
            developer.
          </p>
          <div className="about-img">
            <img src={Aboutimage} alt="pic" style={{ width: "25em" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
