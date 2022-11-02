import React, { useEffect } from 'react'
import { StyledProjects } from './styles'

import Aos from 'aos'
import 'aos/dist/aos.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

const Projects = ({ title, description, projects }) => {
  // const details = projects.details

  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  console.log(projects[0].details)
  return (
    <StyledProjects>
      <div className="projects">
        <h2>{title}</h2>
        <h3>{description}</h3>

        {projects.map((project, index) => (
          <div className="project-row" data-aos="fade-up" key={index}>
            <div className="image-column">
              <img src={project.webPreview} alt={project.name} />
            </div>
            <div className="details-column">
              <h4 className="title" style={{ textTransform: 'uppercase' }}>
                {project.name}
              </h4>
              <p className="subtitle">{project.description}</p>

              <p className="detailed-description">TECH STACK:</p>
              <ul className="detailed-description">
                {project.details.map((detail, index) => {
                  return <li key={index}>{detail}</li>
                })}
              </ul>

              <span className="links">
                {project.netlifyLink && (
                  <a href={project.netlifyLink} target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    <p>Link to website</p>
                  </a>
                )}
                <a href={project.githubLink} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faGithub} />
                  <p>Link to GitHub repository</p>
                </a>
              </span>
            </div>
          </div>
        ))}
      </div>
    </StyledProjects>
  )
}

export default Projects
