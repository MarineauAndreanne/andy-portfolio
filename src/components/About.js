import React from "react"

import { StyledAbout } from "./styled/StyledAbout"

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

import postgresql from "../images/icons/postgresql.png"
import gatsby from "../images/icons/gatsby.png"
import netlify from "../images/icons/netlify.ico"
import responsive from "../images/icons/responsive.ico"
import seo from "../images/icons/seo.ico"
import nextjs from "../images/icons/nextjs.ico"
import tailwind from "../images/icons/tailwind.ico"
import mui from "../images/icons/mui.ico"
import firebase from "../images/icons/firebase.svg"
import heroku from "../images/icons/heroku.svg"

const AboutMe = ({ title, description }) => {
  return (
    <StyledAbout>
      <h2 className="page-title">{title}</h2>
      <h3>
        <div className="nurse">Nurse.</div> {description}
      </h3>
      <div className="about">
        <div className="about-content">
          <p>
            I recently pivoted from a career in healthcare to follow a shift in
            my interests and to pursue the kind of work that energizes and
            fulfills me. I'm versatile, reliable and efficient with 10+ years
            experience in quickly recognizing and acting upon the demand in a
            high paced environment. I believe that my organizational skills,
            leadership abilities and high levels of motivation will allow me to
            thrive in this new position.
            <br />
          </p>

          <div className="skills">
            <FontAwesomeIcon icon={faHtml5} className="skills-icon" />
            <FontAwesomeIcon icon={faCss3Alt} className="skills-icon" />
            <FontAwesomeIcon icon={faJs} className="skills-icon" />
            <FontAwesomeIcon icon={faBootstrap} className="skills-icon" />
            <FontAwesomeIcon icon={faGithub} className="skills-icon" />
            <FontAwesomeIcon icon={faReact} className="skills-icon" />
            <FontAwesomeIcon icon={faNodeJs} className="skills-icon" />

            <img src={gatsby} alt="gatsby-logo" className="skills-icon"></img>
            <img src={netlify} alt="netlify-logo" className="skills-icon"></img>
            <img
              src={responsive}
              alt="responsive-logo"
              className="skills-icon"
            ></img>
            <img src={seo} alt="seo-logo" className="skills-icon"></img>
            <img src={nextjs} alt="nextjs-logo" className="skills-icon"></img>
            <img
              src={postgresql}
              alt="postgresql-logo"
              className="skills-icon"
            ></img>
            <img
              src={tailwind}
              alt="tailwind-logo"
              className="skills-icon"
            ></img>
            <img src={mui} alt="mui-logo" className="skills-icon"></img>
            <img
              src={firebase}
              alt="firebase-logo"
              className="skills-icon"
            ></img>
            <img src={heroku} alt="heroku-logo" className="skills-icon"></img>
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
    </StyledAbout>
  )
}

export default AboutMe
