/* eslint-disable no-restricted-globals */
import React, { useState, useEffect } from "react";
import logo from "../assets/images/logo.svg";
import icon1 from "../assets/images/nav-icon1.svg";
import icon2 from "../assets/images/nav-icon2.svg";
import icon3 from "../assets/images/nav-icon3.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from  "@fortawesome/free-solid-svg-icons";
import "../App.css";
function NavBar() {

  const [scrolled, setScrolled] = useState(false)
  const [menuopen, setMenuopen] = useState(false)

  useEffect(() => {
    const handlescroll = () => {
      if (window.scrollY > 60) {
        setScrolled(true);
        
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handlescroll);
    return () => window.removeEventListener("scroll", handlescroll);
  },[])
  

  return (
    <nav className={scrolled ? "activescrolle" : ""}>
      <div className="container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <FontAwesomeIcon
          icon={faBars}
          className="icon-bar"
          onClick={() => {
            setMenuopen(!menuopen);
          }}
        />
        <div className={menuopen ? "open" : "links-side"}>
          <div className="links">
            <a href="home">Home</a>
            <a href="skills">Skills</a>
            <a href="projects">Projects</a>
          </div>
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
          <button className="btn1">Lets Contact</button>
        </div>
      </div>
    </nav>
  );
}



export default NavBar;
