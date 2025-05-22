import "./navbar.css";
import logo from "../../assets/logo.png";
import contact from "../../assets/contact.png";
import menu from "../../assets/menu.png";
import { Link } from "react-scroll";
import { useState } from "react";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <div className="head">
      <header>
      <nav className="navbar">
        <img src={logo} alt="logo" className="logo" />

        <div className="desktopMenu">
          <Link
            className="listItems"
            to="intro"
            spy={true}
            smooth={true}
            duration={500}
          >
            Home
          </Link>
          <Link
            className="listItems"
            activeClass="active"
            to="aboutme"
            spy={true}
            smooth={true}
            offset={-20}
            duration={500}
          >
            About
          </Link>
          <Link
            className="listItems"
            activeClass="active"
            to="mycertificates"
            spy={true}
            smooth={true}
            offset={-40}
            duration={500}
          >
            Certifications
          </Link>
        </div>

        <button
          className="contactMe"
          onClick={() => {
            document
              .getElementById("mycontact")
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          <img src={contact} alt="contact" className="contactImg" />
          Contact Me
        </button>

        <img src={menu} alt="menu" className="menu" onClick={toggleMenu} />

        <div
          className="mobMenu"
          style={{ display: showMenu ? "flex" : "none" }}
        >
          <Link
            className="MoblistItems"
            to="intro"
            smooth={true}
            duration={500}
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            className="MoblistItems"
            activeClass="active"
            to="aboutme"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={closeMenu}
          >
            About
          </Link>
          <Link
            className="MoblistItems"
            activeClass="active"
            to="mycertificates"
            spy={true}
            smooth={true}
            offset={-90}
            duration={500}
            onClick={closeMenu}
          >
            Certifications
          </Link>
          <Link
            className="MoblistItems"
            activeClass="active"
            to="mycontact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={closeMenu}
          >
            Contact
          </Link>
        </div>
      </nav>
      </header>
    </div>
  );
};

export default NavBar;
