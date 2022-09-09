import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons'

import { StyledAbout } from './styles'

import postgresql from 'images/icons/postgresql.png'
import gatsby from 'images/icons/gatsby.png'
import netlify from 'images/icons/netlify.ico'
import nextjs from 'images/icons/nextjs.ico'
import tailwind from 'images/icons/tailwind.ico'
import mui from 'images/icons/mui.ico'
import firebase from 'images/icons/firebase.svg'
import heroku from 'images/icons/heroku.svg'

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
            I recently pivoted from working in healthcare to follow a shift in my growing interest towards tech and
            pursue a more fulfilling carreer. I'm versatile, reliable and efficient with 10+ years experience in quickly
            recognizing and acting on the demands of a high paced environment. I believe that my organizational skills,
            leadership abilities and high levels of motivation will allow me to thrive in this new position.
            <br />
          </p>

          <div className="skills">
            <div className="row">
              <FontAwesomeIcon icon={faReact} className="skills-icon" />
              <FontAwesomeIcon icon={faNodeJs} className="skills-icon" />
              <img src={postgresql} alt="postgresql-logo" className="skills-icon exception"></img>
              <img src={nextjs} alt="nextjs-logo" className="skills-icon"></img>
              <img src={gatsby} alt="gatsby-logo" className="skills-icon"></img>
              <FontAwesomeIcon icon={faGithub} className="skills-icon" />
            </div>
            <div className="row skills-icon-secondary">
              <img src={netlify} alt="netlify-logo" className="skills-icon"></img>

              <img src={tailwind} alt="tailwind-logo" className="skills-icon"></img>
              <img src={mui} alt="mui-logo" className="skills-icon"></img>
              <img src={firebase} alt="firebase-logo" className="skills-icon"></img>
              <img src={heroku} alt="heroku-logo" className="skills-icon"></img>
            </div>
          </div>
        </div>
        <div className="list">
          <ul>
            <li>
              <span className="list-title">email:</span> marineau.andreanne@gmail.com
            </li>
            <li>
              <span className="list-title">languages:</span> English & French
            </li>
            <li>
              <span className="list-title">studies:</span> University of Montreal
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
