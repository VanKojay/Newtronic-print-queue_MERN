import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <div>
        <header className="header">
          <a
            href="http://www.newtronic-solution.com/index.html"
            className="logo"
          ></a>
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn">
            <span className="navicon"></span>
          </label>
          <ul className="menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Operator">Operator</Link>
            </li>
            <li>
              <Link to="/Pendaftaran">Pendaftaran</Link>
            </li>
          </ul>
        </header>
      </div>
    );
  }
}

export default Navbar;
