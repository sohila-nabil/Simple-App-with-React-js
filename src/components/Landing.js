import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import image1 from  "../assets/images/girl.png";
import { ReactTyped } from 'react-typed'

function Landing() {
  return (
    <div className="landing">
      <div className="container">
        <div className="text">
          <h3>Welcom To My Potfolio</h3>
          <h1>I'm Sohaila</h1>
          <h2>
           {" "}
            <ReactTyped
              strings={[
                "FrontEnd Developer",
                "BackEnd Developer",
                "Full Stack Developer",
              ]}
              typeSpeed={200}
              loop
              backSpeed={70}
            />
          </h2>
          <p>
            I am a full stack web developer with experience in building
            responsive websites and applications
          </p>
          <button className="btn2">
            Let's Contact <FontAwesomeIcon icon="fa-regular fa-circle-right" />
          </button>
        </div>
        <div className="image">
          <img src={image1} alt="image1" />
        </div>
      </div>
    </div>
  );
}
export default Landing;

