import React from 'react'
import logo from "../assets/images/logo.svg";
import icon1 from "../assets/images/nav-icon1.svg";
import icon2 from "../assets/images/nav-icon2.svg";
import icon3 from "../assets/images/nav-icon3.svg";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="links-footer">
          <div className="social-links">
            <a href="home">
              <img src={icon1} alt="icon1" />
            </a>
            <a href="home">
              <img src={icon2} alt="icon1" />
            </a>
            <a href="home">
              <img src={icon3} alt="icon1" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default  Footer