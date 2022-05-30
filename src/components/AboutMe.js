import React from "react"
import { Link } from "gatsby"

import "./AboutMe.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faBootstrap,
  faGithub,
  faReact,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons"

import postgresql from "../images/icons/postgresql.jpeg"
import gatsby from "../images/icons/gatsby.png"
import netlify from "../images/icons/netlify.ico"
import responsive from "../images/icons/responsive.ico"
import seo from "../images/icons/seo.ico"
import nextjs from "../images/icons/nextjs.ico"

const AboutMe = () => {
  return (
    <section className="container">
      <span className="page-title">ABOUT</span>
      <h2>
        <span className="nurse">Nurse.</span> Full-stack web developer.
      </h2>
      <div className="about">
        <div className="text">
          <p>
            I recently pivoted from a career in healthcare to follow a shift in
            my interests and to pursue the kind of work that energizes and
            fulfills me. I'm versatile, reliable and efficient with 10+ years
            experience in quickly recognizing and acting upon the demand in a
            high paced environment. I believe that my organizational skills,
            leadership abilities and high levels of motivation will allow me to
            thrive in this new position.
          </p>

          <div className="skills">
            <FontAwesomeIcon icon={faHtml5} className="skills-icon" />
            <FontAwesomeIcon icon={faCss3Alt} className="skills-icon" />
            <FontAwesomeIcon icon={faJs} className="skills-icon" />
            <FontAwesomeIcon icon={faBootstrap} className="skills-icon" />
            <FontAwesomeIcon icon={faGithub} className="skills-icon" />
            <FontAwesomeIcon icon={faReact} className="skills-icon" />
            <FontAwesomeIcon icon={faNodeJs} className="skills-icon" />

            <img src={gatsby} className="skills-icon"></img>
            <img src={netlify} className="skills-icon"></img>
            <img src={responsive} className="skills-icon"></img>
            <img src={seo} className="skills-icon"></img>
            <img src={nextjs} className="skills-icon"></img>
            <img src={postgresql} className="skills-icon"></img>
          </div>
        </div>
        <div className="list">
          <ul>
            <li>
              <span className="list-title">email:</span>{" "}
              marineau.andreanne@gmail.com
            </li>
            <li>
              <span className="list-title">languages:</span> English & French
            </li>
            <li>
              <span className="list-title">studies:</span> University of
              Montreal
            </li>
            <li>
              <span className="list-title">freelance:</span> available
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
