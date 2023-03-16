import React from "react";

const Contact = () => {
  return (
    <>
      <div className="container">
        <h1 className="h1">Contact</h1>
        <div className="line"></div>
        <div className="about-contact"></div>
        <div className="contact-section">
          <div className="details">
            <div className="contact-details">Guna, Madhya Pradesh, India</div>
            <div className="contact-number-mail">
              <a href="tel:7974554025">Mobile : +917974554025</a>
              <br />
              <a href="mailto:nayanlodha1122@gmail.com">
                {" "}
                Email : nayanlodha1122@gmail.com
              </a>
            </div>
          </div>
          <div className="form">
            <input type="text" placeholder="Name" />
            <input type="number" placeholder="Phone" />
            <input type="email" placeholder="Email" />
            <button className="btn">Contact Us</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
