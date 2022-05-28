import React from "react"
import { Link } from "gatsby"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faHouse,
  faUser,
  faSuitcase,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons"

import "./Sidebar.css"

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <ul className="sidebar-links">
        <img src="../images/dark.png" alt="logo" />
        <li>
          <Link
            to="/"
            style={{ textDecoration: "none", color: "var(--lightgrey)" }}
          >
            <FontAwesomeIcon icon={faHouse} className="link-icon" />
            <span className="link-title">Home</span>
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            style={{ textDecoration: "none", color: "var(--lightgrey)" }}
          >
            <FontAwesomeIcon icon={faUser} className="link-icon" />
            <span className="link-title">About</span>
          </Link>
        </li>
        <li>
          <Link
            to="/portfolio"
            style={{ textDecoration: "none", color: "var(--lightgrey)" }}
          >
            <FontAwesomeIcon icon={faSuitcase} className="link-icon" />
            <span className="link-title">Portfolio</span>
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            style={{ textDecoration: "none", color: "var(--lightgrey)" }}
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
          Original design by SADSAD
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
