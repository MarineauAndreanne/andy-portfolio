import React, { useEffect } from 'react'
import { StyledProjects } from './styles'
import chunk from 'lodash/chunk'

import Aos from 'aos'
import 'aos/dist/aos.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

const Projects = ({ title, description, projects }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  const projectRows = chunk(projects, 2)

  return (
    <StyledProjects>
      <div className="projects">
        <h2>{title}</h2>
        <h3>{description}</h3>

        {projectRows.map((projectsInRow) => (
          <div className="projects-row">
            {projectsInRow.map((project) => (
              <a href={project.netlifyLink} target="_blank" rel="noreferrer" className="general-link">
                <div className="project">
                  <div className="image-zoom">
                    <img src={project.image} alt={project.name} />
                  </div>
                  <div className="project-infos">
                    <h5>{project.name}</h5>
                    <div className="description">
                      <p>{project.description}</p>
                      <p className="detailed-description">{project.details}</p>
                    </div>
                    <a href={project.githubLink} target="_blank" rel="noreferrer">
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                    {project.netlifyLink && (
                      <a href={project.netlifyLink} target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                      </a>
                    )}
                  </div>
                </div>
              </a>
            ))}
          </div>
        ))}
      </div>
    </StyledProjects>
  )
}

export default Projects
