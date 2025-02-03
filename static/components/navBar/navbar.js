import React from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
import contact from "../../assets/contact.png";
import { Link } from "react-router-dom";

// import { useNavigate } from "react-router-dom";

const NavBar = () => {

  return (
    <div>
      <nav className="navbar">
        <img src={logo} alt="logo" className="logo" />
        <div className="desktopMenu">
          <Link className="listItems">Home</Link>
          <Link className="listItems" activeClass="active" to="aboutme" spy={true} smooth={true} offset={-100} duration={500}>About</Link>
          <Link className="listItems" activeClass="active" to="mycertificates" spy={true} smooth={true} offset={-100} duration={500}>Certifications</Link>
          {/* <Link className="listItems"></Link> */}
        </div>
        <button className="contactMe" onClick={()=>{
          document.getElementById('mycontact').scrollIntoView({behavior: 'smooth'});
        }}>
          <img src={contact} alt="contact" className="contactImg" /> Contact Me
        </button>
      </nav>
    </div>
  );
};

export default NavBar;
