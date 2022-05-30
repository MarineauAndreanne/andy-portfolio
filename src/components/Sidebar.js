import React from "react"
import { Link } from "gatsby"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faHouse,
  faUser,
  faSuitcase,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons"
import logo from "../images/andy-logo-2.png"
import "./Sidebar.css"

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <ul className="sidebar-links">
        <Link to="/">
          <img src={logo} alt="logo" className="logo" />
        </Link>
        <li>
          <Link
            to="/"
            style={{ textDecoration: "none", color: "var(--lightgrey)" }}
            activeStyle={{
              color: "#000",
              fontWeight: 600,
            }}
          >
            <FontAwesomeIcon icon={faHouse} className="link-icon home" />
            <span className="link-title">Home</span>
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            style={{ textDecoration: "none", color: "var(--lightgrey)" }}
            activeStyle={{
              color: "#000",
              fontWeight: 600,
            }}
          >
            <FontAwesomeIcon icon={faUser} className="link-icon" />
            <span className="link-title">About</span>
          </Link>
        </li>
        <li>
          <Link
            to="/portfolio"
            style={{ textDecoration: "none", color: "var(--lightgrey)" }}
            activeStyle={{
              color: "#000",
              fontWeight: 600,
            }}
          >
            <FontAwesomeIcon icon={faSuitcase} className="link-icon" />
            <span className="link-title">Portfolio</span>
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            style={{ textDecoration: "none", color: "var(--lightgrey)" }}
            activeStyle={{
              color: "#000",
              fontWeight: 600,
            }}
          >
            <FontAwesomeIcon icon={faEnvelope} className="link-icon" />
            <span className="link-title">Contact</span>
          </Link>
        </li>
        <li id="copyrights">
          2022
          <br />
          Coded by Andreanne Marineau
          <br />
          Original design by Ib-Themes
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
