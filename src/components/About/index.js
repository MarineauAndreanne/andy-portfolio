import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons'
import Tooltip from '@mui/material/Tooltip'

import { StyledAbout } from './styles'

import postgresql from 'images/icons/postgresql.png'
import gatsby from 'images/icons/gatsby.png'
import netlify from 'images/icons/netlify.ico'
import nextjs from 'images/icons/nextjs.ico'
import tailwind from 'images/icons/tailwind.ico'
import mui from 'images/icons/mui.ico'
import docker from 'images/icons/docker.png'
import graphql from 'images/icons/graphql.png'
import typescript from 'images/icons/typescript.png'

const AboutMe = ({ title, description }) => {
  return (
    <StyledAbout>
      <h2 className="page-title">{title}</h2>
      <h3>
        <div className="nurse">Lead Nurse.</div> {description}
      </h3>
      <div className="about">
        <div className="about-content">
          <p>
            I recently pivoted from working in healthcare to follow a shift in my growing interest towards tech and
            pursue a more fulfilling carreer. I'm versatile, reliable and efficient with 10+ years experience in quickly
            recognizing and acting on the demands of a high paced environment.
            <br />
          </p>

          <div className="skills">
            <div className="row">
              <Tooltip title="ReactJS" placement="top">
                <span>
                  <FontAwesomeIcon icon={faReact} className="skills-icon" />
                </span>
              </Tooltip>
              <Tooltip title="NodeJS" placement="top">
                <span>
                  <FontAwesomeIcon icon={faNodeJs} className="skills-icon" />
                </span>
              </Tooltip>
              <Tooltip title="PostgreSQL" placement="top">
                <span>
                  <img src={postgresql} alt="postgresql-logo" className="skills-icon exception"></img>
                </span>
              </Tooltip>
              <Tooltip title="NextJS" placement="top">
                <span>
                  <img src={nextjs} alt="nextjs-logo" className="skills-icon"></img>
                </span>
              </Tooltip>
              <Tooltip title="GatsbyJS" placement="top">
                <span>
                  <img src={gatsby} alt="gatsby-logo" className="skills-icon"></img>
                </span>
              </Tooltip>
              <Tooltip title="Github" placement="top">
                <span>
                  <FontAwesomeIcon icon={faGithub} className="skills-icon" />
                </span>
              </Tooltip>
            </div>
            <div className="row skills-icon-secondary">
              <Tooltip title="Netlify">
                <span>
                  <img src={netlify} alt="netlify-logo" className="skills-icon"></img>
                </span>
              </Tooltip>
              <Tooltip title="Typescript">
                <span>
                  <img src={typescript} alt="typescript-logo" className="skills-icon"></img>
                </span>
              </Tooltip>
              <Tooltip title="Tailwind CSS">
                <span>
                  <img src={tailwind} alt="tailwind-logo" className="skills-icon"></img>
                </span>
              </Tooltip>
              <Tooltip title="Material UI">
                <span>
                  <img src={mui} alt="mui-logo" className="skills-icon"></img>
                </span>
              </Tooltip>
              <Tooltip title="Docker">
                <span>
                  <img src={docker} alt="docker-logo" className="skills-icon"></img>
                </span>
              </Tooltip>
              <Tooltip title="GraphQL">
                <span>
                  <img src={graphql} alt="graphql-logo" className="skills-icon"></img>
                </span>
              </Tooltip>
            </div>
          </div>
          <p>
            On the <strong>frontend</strong>, I've been working on diverse projects using NextJS, GatsbyJS and other
            ReactJS frameworks. I've created reusable, modular and responsive components and then connected to backends
            by making requests to REST/GraphQL APIs and storing data in contexts.
          </p>
          <p>
            I've created stylish responsive <strong>UIs</strong> using MUI, Tailwind and styled-components, either by
            designing them myself in Figma beforehand or by recreating a provided design.
          </p>
          <p>
            I've also written <strong>backends</strong> in NodeJS that expose REST or GraphQL APIs using frameworks like
            Express and Koa, while interacting with SQL databases for both querying data and migrating their schema.
          </p>
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
