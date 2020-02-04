import React, { useState } from "react";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="div nav-center">
        <div className="div nav-header">
          <Link to="/">
            <img src={logo} alt="Rural rooms" />
          </Link>
          <button
            type="button"
            className="nav-btn"
            onClick={() => setIsOpen(!isOpen)}
          >
            <FaAlignRight className="nav-icon" />
          </button>
        </div>
        <ul className={isOpen ? "nav-links show-nav" : "nav-links"}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/rooms">Rooms</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
