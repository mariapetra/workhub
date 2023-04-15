import { Link } from "react-router-dom";
import { useState } from "react";

//icons
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";

// import Logo from '../images/placeholder-logo.png';

import "./Nav.css";

import "../../index.css"

function Nav() {

  const [navbarOpen, setNavbarOpen] = useState(false)
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen)
  }

  const closeMenu = () => {
    setNavbarOpen(false)
  }

  return (
    <nav className="navBar">

      <button onClick={handleToggle}>
        <h1 style={{
          color: "var(--secondary)",
          padding: "2.5px 10px",
          backgroundColor: "var(--primary)",
        }}>Menu</h1>
        {navbarOpen ? (
          <MdClose
            style={{
              color: "var(--secondary)",
              width: "30px",
              height: "30px",
              backgroundColor: "var(--primary)",
            }} />
        ) : (
          <FiMenu
            style={{
              color: "var(--secondary)",
              width: "30px",
              height: "30px",
              backgroundColor: "var(--primary)",
            }} />
        )}
      </button>

      <ul
        className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
        <Link
          to="/"
          className="active-link"
          onClick={() => closeMenu()}
        >
          Home
        </Link>
        <Link
          to="/login"
          className="active-link"
          onClick={() => closeMenu()}
        >
          Join Us
        </Link>
        <Link
          to="/about"
          className="active-link"
          onClick={() => closeMenu()}
        >
          Who Are We?
        </Link>
        <Link to="/help"
          className="active-link"
          onClick={() => closeMenu()}
        >
          Help
        </Link>
        <Link to="/contact"
          className="active-link"
          onClick={() => closeMenu()}
        >
          Contact Us
        </Link>
      </ul>
    </nav >
  );
}

export default Nav;


